import React, { useState } from 'react';
import { Target, Flame, Clock, CheckCircle, Minus, X } from 'lucide-react';
import '../../styles/ui/SessionStats.css';

const SessionStats = ({ 
  score, 
  streak, 
  timeSpent, 
  currentExercise, 
  totalExercises 
}) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  // Versão minimizada
  if (isMinimized) {
    return (
      <div className="ape-session-stats-minimized">
        <div className="ape-session-stats-minimized-content">
          <div className="ape-session-stats-minimized-info">
            <Target size={16} className="ape-session-stats-minimized-icon" />
            <span className="ape-session-stats-minimized-text">
              {score}P • {streak}🔥 • {timeSpent} • {currentExercise}/{totalExercises}
            </span>
          </div>
          <div className="ape-session-stats-minimized-actions">
            <button 
              onClick={handleMinimize}
              className="ape-session-stats-expand"
              aria-label="Expandir"
            >
              <CheckCircle size={14} />
            </button>
            <button 
              onClick={handleClose}
              className="ape-session-stats-close"
              aria-label="Fechar"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Versão normal
  return (
    <div className="ape-session-stats">
      {/* Header com botões de controle */}
      <div className="ape-session-stats-header">
        <span className="ape-session-stats-title">Estatísticas da Sessão</span>
        <div className="ape-session-stats-actions">
          <button 
            onClick={handleMinimize}
            className="ape-session-stats-minimize"
            aria-label="Minimizar"
          >
            <Minus size={16} />
          </button>
          <button 
            onClick={handleClose}
            className="ape-session-stats-close"
            aria-label="Fechar"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Conteúdo das estatísticas */}
      <div className="ape-session-stats-grid">
        <div className="ape-session-stat">
          <Target size={20} className="ape-session-stat-icon" />
          <span className="ape-session-stat-value">{score}</span>
          <span className="ape-session-stat-label">Pontuação</span>
        </div>
        
        <div className="ape-session-stat">
          <Flame size={20} className="ape-session-stat-icon" />
          <span className="ape-session-stat-value">{streak}</span>
          <span className="ape-session-stat-label">Sequência</span>
        </div>
        
        <div className="ape-session-stat">
          <Clock size={20} className="ape-session-stat-icon" />
          <span className="ape-session-stat-value">{timeSpent}</span>
          <span className="ape-session-stat-label">Tempo</span>
        </div>
        
        <div className="ape-session-stat">
          <CheckCircle size={20} className="ape-session-stat-icon" />
          <span className="ape-session-stat-value">
            {currentExercise}/{totalExercises}
          </span>
          <span className="ape-session-stat-label">Progresso</span>
        </div>
      </div>
    </div>
  );
};

export default SessionStats;