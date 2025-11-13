import React, { useEffect, useState } from 'react';
import { X, Zap, Star } from 'lucide-react';
import '../../styles/ui/AchievementPopup.css';

const AchievementPopup = ({ achievement, onClose, autoClose = true }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    if (autoClose) {
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
  }, [autoClose, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  if (!achievement) return null;

  return (
    <div className={`ape-achievement-popup ${isVisible ? 'visible' : ''}`}>
      <div className="ape-achievement-content">
        {/* Header */}
        <div className="ape-achievement-header">
          <div className="ape-achievement-icon">
            {achievement.icon}
          </div>
          <button 
            onClick={handleClose}
            className="ape-achievement-close"
            aria-label="Fechar"
          >
            <X size={20} />
          </button>
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