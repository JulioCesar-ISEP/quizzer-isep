import React, { useState, useEffect } from 'react';
import { Sparkles, Home, User, Zap, Brain } from 'lucide-react';
import '../../styles/ui/Header.css';

const Header = ({ 
  currentView, 
  onNavigate,
  onBack, // Mantemos onBack para a funcionalidade de voltar ao início
  user = null,
  xp = 0,
  progress = 0,
  compact = false,
  loading = false
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getUserRank = (xp) => {
    if (xp >= 10000) return 'Homo Sapiens';
    if (xp >= 5000) return 'Gorila';
    if (xp >= 2000) return 'Chimpanzé';
    if (xp >= 1000) return 'Macaco-Prego';
    return 'Iniciante';
  };

  const navigationItems = [
    { id: 'home', icon: Home, label: 'Início' },
    { id: 'profile', icon: User, label: 'Perfil' }
  ];

  const handleNavigation = (viewId) => {
    if (onNavigate) {
      onNavigate(viewId);
    }
    
    // Se clicou no "Início" E temos uma função onBack, executa a função de voltar
    if (viewId === 'home' && onBack) {
      onBack();
    }
  };

  // Função específica para o botão Início que sempre volta para a página inicial
  const handleHomeClick = () => {
    // Primeiro navega para a view home
    if (onNavigate) {
      onNavigate('home');
    }
    // Depois executa a função de voltar (que provavelmente reseta para o estado inicial)
    if (onBack) {
      onBack();
    }
  };

  if (loading) {
    return (
      <div className={`ape-main-header ${compact ? 'compact' : ''} loading`}>
        <div className="ape-header-content">
          <div className="ape-header-left">
            <div className="ape-app-logo">
              <Sparkles size={compact ? 24 : 32} />
            </div>
            <h1 className="ape-app-title">Ape Level</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`ape-main-header ${isScrolled ? 'scrolled' : ''} ${compact ? 'compact' : ''}`}>
      <div className="ape-header-content">
        {/* Left Section - Logo and Title */}
        <div className="ape-header-left">
          <div className="ape-app-logo">
            <Brain size={compact ? 24 : 32} />
          </div>
          <h1 className="ape-app-title">APE LEVEL</h1>

          {/* Navigation */}
          {!compact && (
            <nav className="ape-header-nav">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    className={`ape-nav-item ${currentView === item.id ? 'active' : ''}`}
                    onClick={() => item.id === 'home' ? handleHomeClick() : handleNavigation(item.id)}
                  >
                    <Icon size={16} />
                    {item.label}
                  </button>
                );
              })}
            </nav>
          )}
        </div>

        {/* Right Section - Actions */}
        <div className="ape-header-actions">
          {/* User Info */}
          {user && !compact && (
            <div className="ape-user-info">
              <div className="ape-user-avatar">
                {user.name?.charAt(0).toUpperCase() || 'S'}
              </div>
              <div className="ape-user-details">
                <span className="ape-user-name">{user.name || 'Símio'}</span>
                <span className="ape-user-rank">{getUserRank(xp)}</span>
              </div>
            </div>
          )}

          {/* XP Indicator */}
          {xp > 0 && !compact && (
            <div className="ape-xp-indicator">
              <Zap size={16} />
              {xp}
            </div>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      {progress > 0 && (
        <div className="ape-header-progress">
          <div
            className="ape-header-progress-fill"
            style={{ width: `${progress}%` }}
            aria-label={`Progresso geral: ${Math.round(progress)}%`}
            role="progressbar"
            aria-valuenow={Math.round(progress)}
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
      )}
    </div>
  );
};

export default Header;