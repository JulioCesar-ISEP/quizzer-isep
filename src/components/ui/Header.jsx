import React, { useState, useEffect } from 'react';
import { Sparkles, Sun, Moon, Home, BookOpen, Trophy, User, Zap, ChevronLeft, Brain } from 'lucide-react';
import '../../styles/ui/Header.css';

const Header = ({ 
  isDark, 
  toggleTheme, 
  currentView, 
  onBack, 
  showBackButton = false,
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

  const getViewName = (view) => {
    const viewNames = {
      'cadeiras': 'Árvore do Conhecimento',
      'levels': 'Laboratório de Níveis',
      'quiz': 'Desafio do Lab',
      'completion': 'Conquista',
      'profile': 'Perfil do Símio'
    };
    return viewNames[view] || 'Ape Level';
  };

  const navigationItems = [
    { id: 'cadeiras', icon: Home, label: 'Início' },
    { id: 'levels', icon: BookOpen, label: 'Níveis' },
    { id: 'profile', icon: User, label: 'Perfil' },
    { id: 'leaderboard', icon: Trophy, label: 'Ranking' }
  ];

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
          <div className="ape-header-actions">
            <button className="ape-theme-toggle-btn">
              <Moon size={24} />
            </button>
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
                    onClick={() => {/* Add navigation handler */}}
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

          {/* Back Button */}
          {showBackButton && onBack && (
            <button 
              onClick={onBack} 
              className="ape-back-btn"
              aria-label="Voltar"
            >
              <ChevronLeft size={20} />
              {!compact && <span>Voltar</span>}
            </button>
          )}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ape-theme-toggle-btn"
            aria-label={isDark ? "Mudar para tema claro" : "Mudar para tema escuro"}
          >
            {isDark ? <Sun size={24} /> : <Moon size={24} />}
          </button>
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