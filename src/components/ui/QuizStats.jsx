import React from 'react';
import { Target, Flame, Clock, CheckCircle } from 'lucide-react';

const QuizStats = ({ score, streak, timeSpent, currentExercise, totalExercises, className = '' }) => {
  // Garantir que timeSpent sempre tenha um valor válido
  const displayTime = timeSpent && !timeSpent.includes('NaN') ? timeSpent : '00:00';
  
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
        <span>{displayTime}</span>
      </div>
      <div className="stat-badge">
        <CheckCircle size={16} />
        <span>{currentExercise + 1}/{totalExercises}</span>
      </div>
    </div>
  );
};

export default QuizStats;