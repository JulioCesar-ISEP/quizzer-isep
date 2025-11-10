import React from 'react';
import { Target, Flame, Clock, CheckCircle } from 'lucide-react';

const QuizStats = ({ score, streak, timeSpent, currentExercise, totalExercises, className = '' }) => {
  const progress = totalExercises > 0 ? Math.round((currentExercise + 1) / totalExercises * 100) : 0;
  
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
      <div className="stat-badge">
        <CheckCircle size={16} />
        <span>{currentExercise + 1}/{totalExercises}</span>
      </div>
    </div>
  );
};

export default QuizStats;