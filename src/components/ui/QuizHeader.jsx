import React, { useState, useEffect } from 'react';
import { ChevronLeft, BookOpen, Zap, Target, Clock } from 'lucide-react';
import '../../styles/ui/QuizHeader.css';

const QuizHeader = ({ 
  levelName, 
  currentExercise, 
  totalExercises, 
  onBack, 
  onShowTheory, 
  showTheoryButton,
  difficulty = 'medium',
  xpReward = 0,
  compact = false,
  sticky = true
}) => {
  const [isSticky, setIsSticky] = useState(false);
  const progressPercentage = ((currentExercise + 1) / totalExercises) * 100;

  useEffect(() => {
    if (!sticky) return;

    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sticky]);

  const getDifficultyColor = () => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'ape-difficulty-easy';
      case 'hard':
        return 'ape-difficulty-hard';
      default:
        return 'ape-difficulty-medium';
    }
  };

  const getRankByProgress = () => {
    if (progressPercentage >= 90) return 'HOMO SAPIENS';
    if (progressPercentage >= 75) return 'GORILA';
    if (progressPercentage >= 50) return 'CHIMPANZÉ';
    if (progressPercentage >= 25) return 'MACACO-PREGO';
    return 'INICIANTE';
  };

  return (
    <div className={`ape-quiz-header ${compact ? 'compact' : ''} ${isSticky ? 'sticky' : ''}`}>
      <div className="ape-quiz-header-content">
        {/* Back Button */}
        <button onClick={onBack} className="ape-back-btn" aria-label="Voltar para níveis">
          <ChevronLeft size={20} />
          <span>Voltar ao Lab</span>
        </button>

        {/* Quiz Info */}
        <div className="ape-quiz-info">
          <h1 className="ape-quiz-title" title={levelName}>
            {levelName}
          </h1>
          <div className="ape-quiz-meta">
            <span>
              <Target size={14} />
              Desafio {currentExercise + 1} de {totalExercises}
            </span>
            
            <span className={`ape-difficulty ${getDifficultyColor()}`}>
              <Clock size={14} />
              {difficulty}
            </span>
            
            {xpReward > 0 && (
              <span className="ape-xp-indicator">
                <Zap size={14} />
                +{xpReward} bananas
              </span>
            )}
            
            <span className="ape-rank-badge">
              {getRankByProgress()}
            </span>
          </div>
        </div>

        {/* Theory Button */}
        {showTheoryButton && (
          <button 
            onClick={onShowTheory} 
            className="ape-theory-btn"
            aria-label="Abrir teoria do exercício"
          >
            <BookOpen size={20} />
            <span>Teoria do Lab</span>
          </button>
        )}
      </div>

      {/* Progress Section */}
      <div className="ape-progress-section">
        <div className="ape-progress-labels">
          <span>Progresso do Desafio</span>
          <span>
            {currentExercise + 1}/{totalExercises} • {Math.round(progressPercentage)}%
          </span>
        </div>
        <div className="ape-progress-bar">
          <div
            className="ape-progress-fill"
            style={{ width: `${progressPercentage}%` }}
            aria-label={`Progresso: ${Math.round(progressPercentage)}% completado`}
            role="progressbar"
            aria-valuenow={Math.round(progressPercentage)}
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
      </div>
    </div>
  );
};

export default QuizHeader;