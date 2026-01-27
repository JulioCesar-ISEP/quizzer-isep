import React, { useEffect, useState } from 'react';
import { X, Zap, Minus, Trash2 } from 'lucide-react';
import '../../styles/ui/AchievementPopup.css';

const AchievementPopup = ({ achievement, onClose, autoClose = true }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    if (autoClose && !isMinimized) {
      const closeTimer = setTimeout(() => {
        handleClose();
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
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleMinimize = () => {
    setIsMinimized(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!achievement) return null;

  // Versão minimizada (removida para simplificar - fechamos diretamente)
  if (isMinimized) {
    return null;
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

        {/* Shine Effect */}
        <div className="ape-achievement-shine" />
      </div>
    </div>
  );
};

export default AchievementPopup;