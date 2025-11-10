import React from 'react';
import { Sparkles, Sun, Moon } from 'lucide-react';

const Header = ({ isDark, toggleTheme, currentView, onBack, showBackButton = false }) => {
  return (
    <div className="main-header">
      <div className="header-content">
        <div className="header-left">
          <Sparkles size={32} className="app-logo" />
          <h1 className="app-title">QUIZZER ISEP</h1>
        </div>
        
        <div className="header-actions">
          {showBackButton && onBack && (
            <button onClick={onBack} className="back-btn">
              ← Voltar
            </button>
          )}
          
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Alternar tema"
          >
            {isDark ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;