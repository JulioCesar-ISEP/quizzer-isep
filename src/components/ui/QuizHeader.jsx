import React from 'react';
import { ChevronLeft, BookOpen } from 'lucide-react';

const QuizHeader = ({ 
  levelName, 
  currentExercise, 
  totalExercises, 
  onBack, 
  onShowTheory, 
  showTheoryButton 
}) => {
  return (
    <div className="quiz-header">
      <div className="quiz-header-content">
        <button onClick={onBack} className="back-btn">
          <ChevronLeft size={20} />
          Voltar
        </button>

        <div className="quiz-info">
          <h1 className="quiz-title">{levelName}</h1>
          <div className="quiz-meta">
            <span>Exercício {currentExercise + 1} de {totalExercises}</span>
          </div>
        </div>

        {showTheoryButton && (
          <button onClick={onShowTheory} className="theory-btn">
            <BookOpen size={20} />
            Teoria
          </button>
        )}
      </div>

      <div className="progress-section">
        <div className="progress-labels">
          <span>Progresso</span>
          <span>{currentExercise + 1}/{totalExercises}</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${((currentExercise + 1) / totalExercises) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default QuizHeader;