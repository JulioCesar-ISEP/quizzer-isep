import React from 'react';
import { Target, Flame, Clock, CheckCircle } from 'lucide-react';
import '../../styles/ui/SessionStats.css';

const SessionStats = ({ 
  score, 
  streak, 
  timeSpent, 
  currentExercise, 
  totalExercises 
}) => {
  return (
    <div className="ape-session-stats">
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