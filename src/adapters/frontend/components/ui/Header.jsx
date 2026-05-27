import React from 'react';
import { Sparkles, Home, User, Zap, Brain, Moon, Sun } from 'lucide-react';
import '@adapters/frontend/styles/ui/Header.css';
import { APP_NAME } from '@shared/constants/branding';

const Header = ({
  currentView,
  onNavigate,
  onBack,
  user = null,
  xp = 0,
  progress = 0,
  compact = false,
  loading = false,
  isDark = true,
  toggleTheme,
}) => {
  const getPerformanceLevel = (xpValue) => {
    if (xpValue >= 1000) return 'Excelente';
    if (xpValue >= 500) return 'Bom';
    if (xpValue >= 100) return 'Regular';
    return 'Em progresso';
  };

  const navigationItems = [
    { id: 'subjects', icon: Home, label: 'Início' },
    { id: 'profile', icon: User, label: 'Perfil' }
  ];

  // Função específica para o botão Início que sempre volta para a página inicial
  const handleHomeClick = () => {
    // Primeiro navega para a view home
    if (onNavigate) {
      onNavigate('subjects');
    }
    // Depois executa a função de voltar (que provavelmente reseta para o estado inicial)
    if (onBack) {
      onBack();
    }
  };

  const handleNavigation = (viewId) => {
    if (onNavigate) {
      onNavigate(viewId);
    }
    
    // Se clicou no "Início" E temos uma função onBack, executa a função de voltar
    if ((viewId === 'subjects' || viewId === 'cadeiras') && onBack) {
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
            <h1 className="ape-app-title">{APP_NAME}</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`ape-main-header ${compact ? 'compact' : ''}`}>
      <div className="ape-header-content">
        {/* Left Section - Logo and Title */}
        <div className="ape-header-left">
          <div className="ape-app-logo">
            <Brain size={compact ? 24 : 32} />
          </div>
          <h1 className="ape-app-title">{APP_NAME}</h1>

          {/* Navigation */}
          {!compact && (
            <nav className="ape-header-nav">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    className={`ape-nav-item ${currentView === item.id ? 'active' : ''}`}
                    onClick={() => item.id === 'cadeiras' ? handleHomeClick() : handleNavigation(item.id)}
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
                <span className="ape-user-rank">{getPerformanceLevel(xp)}</span>
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

          {toggleTheme && !compact && (
            <button
              type="button"
              className="ape-theme-toggle"
              onClick={toggleTheme}
              title={isDark ? 'Modo claro' : 'Modo escuro'}
              aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;