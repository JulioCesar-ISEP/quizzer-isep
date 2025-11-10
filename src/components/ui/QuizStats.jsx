import React from 'react';
import { Target, Flame, Clock } from 'lucide-react';

const QuizStats = ({ score, streak, timeSpent, className = '' }) => {
  return (
    <div className={`quiz-stats-bar ${className}`}>
      <div className="stat-badge">
        <Target size={16} />
        <span>Pontuação: {score}</span>
      </div>
      <div className="stat-badge streak">
        <Flame size={16} />
        <span>Sequência: {streak}</span>
      </div>
      <div className="stat-badge">
        <Clock size={16} />
        <span>{timeSpent}</span>
      </div>
    </div>
  );
};

export default QuizStats;