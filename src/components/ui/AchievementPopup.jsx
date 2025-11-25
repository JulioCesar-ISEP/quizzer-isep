import React, { useEffect, useState } from 'react';
import { X, Zap, Minus, Trash2 } from 'lucide-react';
import '../../styles/ui/AchievementPopup.css';

const AchievementPopup = ({ achievement, onClose, onMinimize, autoClose = true }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    if (autoClose && !isMinimized) {
      const closeTimer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onClose, 300);
      }, 5000);
      
      return () => {
        clearTimeout(timer);
        clearTimeout(closeTimer);
      };
    }

    return () => clearTimeout(timer);
  }, [autoClose, onClose, isMinimized]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const handleMinimize = () => {
    setIsMinimized(true);
    if (onMinimize) {
      onMinimize(achievement);
    }
  };

  const handleRemove = () => {
    handleClose();
  };

  if (!achievement) return null;

  // Versão minimizada
  if (isMinimized) {
    return (
      <div className={`ape-achievement-minimized ${isVisible ? 'visible' : ''}`}>
        <div className="ape-achievement-minimized-content">
          <div className="ape-achievement-minimized-icon">
            {achievement.icon}
          </div>
          <div className="ape-achievement-minimized-info">
            <span className="ape-achievement-minimized-title">{achievement.title}</span>
            <div className="ape-achievement-minimized-actions">
              <button 
                onClick={() => setIsMinimized(false)}
                className="ape-achievement-restore"
                aria-label="Restaurar"
              >
                <Zap size={14} />
              </button>
              <button 
                onClick={handleRemove}
                className="ape-achievement-remove"
                aria-label="Remover"
              >
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Versão normal
  return (
    <div className={`ape-achievement-popup ${isVisible ? 'visible' : ''}`}>
      <div className="ape-achievement-content">
        {/* Header */}
        <div className="ape-achievement-header">
          <div className="ape-achievement-icon">
            {achievement.icon}
          </div>
          <div className="ape-achievement-actions">
            <button 
              onClick={handleMinimize}
              className="ape-achievement-minimize"
              aria-label="Minimizar"
            >
              <Minus size={20} />
            </button>
            <button 
              onClick={handleClose}
              className="ape-achievement-close"
              aria-label="Fechar"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="ape-achievement-body">
          <h3 className="ape-achievement-title">{achievement.title}</h3>
          <p className="ape-achievement-description">{achievement.description}</p>
          
          {/* XP Reward */}
          <div className="ape-achievement-reward">
            <Zap size={16} />
            <span>+{achievement.xpReward} XP</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="ape-achievement-progress">
          <div className="ape-achievement-progress-bar">
            <div 
              className="ape-achievement-progress-fill"
              style={{ width: '100%' }}
            />
          </div>
        </div>

        {/* Shine Effect */}
        <div className="ape-achievement-shine" />
      </div>
    </div>
  );
};

export default AchievementPopup;