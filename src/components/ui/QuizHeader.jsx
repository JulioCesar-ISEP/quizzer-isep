import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  BookOpen, 
  Target, 
  Flame, 
  Clock, 
  CheckCircle, 
  Zap,
  Minus,
  X
} from 'lucide-react';
import '../../styles/ui/QuizHeader.css';

const QuizHeader = ({  
  currentExercise, 
  totalExercises, 
  onBack, 
  onShowTheory, 
  showTheoryButton,
  difficulty = 'medium',
  xpReward = 0,
  compact = false,
  sticky = true,
  // Stats props
  score = 0,
  streak = 0,
  timeSpent = '00:00',
  showStats = true,
  onMinimizeStats,
  onCloseStats
}) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isStatsMinimized, setIsStatsMinimized] = useState(false);
  const [isStatsVisible, setIsStatsVisible] = useState(true);
  const [previousScore, setPreviousScore] = useState(score);
  const [previousStreak, setPreviousStreak] = useState(streak);
  const [isCelebrating, setIsCelebrating] = useState(false);

  const progressPercentage = ((currentExercise + 1) / totalExercises) * 100;
  const displayTime = timeSpent && !timeSpent.includes('NaN') ? timeSpent : '00:00';

  // Sticky header effect
  useEffect(() => {
    if (!sticky) return;

    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sticky]);

  // Celebration effects
  useEffect(() => {
    if (score > previousScore) {
      setIsCelebrating(true);
      setTimeout(() => setIsCelebrating(false), 500);
    }
    setPreviousScore(score);
  }, [score, previousScore]);

  useEffect(() => {
    if (streak > previousStreak && streak > 1) {
      setIsCelebrating(true);
      setTimeout(() => setIsCelebrating(false), 500);
    }
    setPreviousStreak(streak);
  }, [streak, previousStreak]);

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

  const getAchievement = () => {
    if (streak >= 10) return '🔥 LENDA';
    if (streak >= 5) return '⭐ ESTRELA';
    if (score === totalExercises) return '🏆 PERFEITO';
    if (score >= totalExercises * 0.8) return '🎯 PRECISÃO';
    return null;
  };

  const handleStatsMinimize = () => {
    setIsStatsMinimized(!isStatsMinimized);
    if (onMinimizeStats) onMinimizeStats(!isStatsMinimized);
  };

  const handleStatsClose = () => {
    setIsStatsVisible(false);
    if (onCloseStats) onCloseStats();
  };

  const achievement = getAchievement();

  return (
    <div className={`ape-quiz-header ${compact ? 'compact' : ''} ${isSticky ? 'sticky' : ''}`}>
      {/* Main Header Content */}
      <div className="ape-quiz-header-content">
        {/* Back Button */}
        <button onClick={onBack} className="ape-back-btn" aria-label="Voltar para níveis">
          <ChevronLeft size={20} />
          <span>Voltar ao Lab</span>
        </button>

        {/* Quiz Info */}
        <div className="ape-quiz-info">
          <div className="ape-quiz-meta">
            <span className="ape-exercise-counter">
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
                +{xpReward} XP
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
            <span>Teoria</span>
          </button>
        )}
      </div>

      {/* Stats Section */}
      {showStats && isStatsVisible && (
        <div className={`ape-stats-section ${isStatsMinimized ? 'minimized' : ''} ${isCelebrating ? 'celebrating' : ''}`}>
          {!isStatsMinimized ? (
            <>
              <div className="ape-stats-header">
                <span className="ape-stats-title">Estatísticas da Sessão</span>
                <div className="ape-stats-actions">
                  <button 
                    onClick={handleStatsMinimize}
                    className="ape-stats-minimize"
                    aria-label="Minimizar estatísticas"
                  >
                    <Minus size={16} />
                  </button>
                  <button 
                    onClick={handleStatsClose}
                    className="ape-stats-close"
                    aria-label="Fechar estatísticas"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              <div className="ape-stats-grid">
                <div className="ape-stat-badge score">
                  <Target size={20} />
                  <div className="ape-stat-content">
                    <span className="ape-stat-value">{score}</span>
                    <span className="ape-stat-label">Pontuação</span>
                  </div>
                  {achievement === '🏆 PERFEITO' && (
                    <div className="ape-achievement-badge">PERFEITO!</div>
                  )}
                </div>

                <div className="ape-stat-badge streak">
                  <Flame size={20} />
                  <div className="ape-stat-content">
                    <span className="ape-stat-value">{streak}</span>
                    <span className="ape-stat-label">Sequência</span>
                  </div>
                  {streak > 1 && <div className="ape-streak-fire" />}
                  {(achievement === '🔥 LENDA' || achievement === '⭐ ESTRELA') && (
                    <div className="ape-achievement-badge">
                      {achievement === '🔥 LENDA' ? 'LENDA!' : 'ESTRELA!'}
                    </div>
                  )}
                </div>

                <div className="ape-stat-badge time">
                  <Clock size={20} />
                  <div className="ape-stat-content">
                    <span className="ape-stat-value">{displayTime}</span>
                    <span className="ape-stat-label">Tempo</span>
                  </div>
                </div>

                <div className="ape-stat-badge progress">
                  <CheckCircle size={20} />
                  <div className="ape-stat-content">
                    <span className="ape-stat-value">
                      {currentExercise + 1}/{totalExercises}
                    </span>
                    <span className="ape-stat-label">Progresso</span>
                  </div>
                  {achievement === '🎯 PRECISÃO' && (
                    <div className="ape-achievement-badge">PRECISÃO!</div>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="ape-stats-minimized-content">
              <div className="ape-stats-minimized-info">
                <Target size={16} />
                <span className="ape-stats-minimized-text">
                  {score}P • {streak}🔥 • {displayTime} • {currentExercise + 1}/{totalExercises}
                </span>
              </div>
              <div className="ape-stats-minimized-actions">
                <button 
                  onClick={handleStatsMinimize}
                  className="ape-stats-expand"
                  aria-label="Expandir estatísticas"
                >
                  <CheckCircle size={14} />
                </button>
                <button 
                  onClick={handleStatsClose}
                  className="ape-stats-close"
                  aria-label="Fechar estatísticas"
                >
                  <X size={14} />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

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