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
  X,
  TrendingUp,
  Award,
  Battery,
  BarChart3
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
  const accuracy = totalExercises > 0 ? Math.round((score / totalExercises) * 100) : 0;
  const remainingExercises = totalExercises - (currentExercise + 1);

  // Sticky header effect
  useEffect(() => {
    if (!sticky) return;

    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sticky]);

  // Celebration effects for score and streak improvements
  useEffect(() => {
    if (score > previousScore) {
      setIsCelebrating(true);
      setTimeout(() => setIsCelebrating(false), 800);
    }
    setPreviousScore(score);
  }, [score, previousScore]);

  useEffect(() => {
    if (streak > previousStreak && streak > 1) {
      setIsCelebrating(true);
      setTimeout(() => setIsCelebrating(false), 800);
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

  const getDifficultyIcon = () => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return '🟢';
      case 'hard':
        return '🔴';
      default:
        return '🟡';
    }
  };

  const getAchievement = () => {
    if (streak >= 10) return { text: '🔥 LENDA', level: 'legendary' };
    if (streak >= 5) return { text: '⭐ ESTRELA', level: 'epic' };
    if (score === totalExercises && totalExercises > 0) return { text: '🏆 PERFEITO', level: 'perfect' };
    if (accuracy >= 80) return { text: '🎯 PRECISÃO', level: 'accurate' };
    return null;
  };

  const getPerformanceLevel = () => {
    if (accuracy >= 90) return { level: 'Excelente', color: '#10b981' };
    if (accuracy >= 70) return { level: 'Bom', color: '#f59e0b' };
    if (accuracy >= 50) return { level: 'Regular', color: '#f97316' };
    return { level: 'Em progresso', color: '#ef4444' };
  };

  const getStreakLevel = () => {
    if (streak >= 10) return { level: 'Lendário', color: '#f59e0b', icon: '🔥' };
    if (streak >= 5) return { level: 'Quente', color: '#ef4444', icon: '⭐' };
    if (streak >= 3) return { level: 'Consecutivo', color: '#84cc16', icon: '⚡' };
    return { level: 'Iniciando', color: '#6b7280', icon: '🎯' };
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
  const performance = getPerformanceLevel();
  const streakInfo = getStreakLevel();

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
              {getDifficultyIcon()} {difficulty}
            </span>
            
            {xpReward > 0 && (
              <span className="ape-xp-indicator">
                <Zap size={14} />
                +{xpReward} XP
              </span>
            )}
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
                <div className="ape-stats-title-section">
                  <BarChart3 size={16} />
                  <span className="ape-stats-title">Painel de Performance</span>
                  {achievement && (
                    <div className={`ape-achievement-badge ${achievement.level}`}>
                      {achievement.text}
                    </div>
                  )}
                </div>
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
                {/* Score & Accuracy */}
                <div className="ape-stat-badge score">
                  <div className="ape-stat-icon">
                    <Target size={24} />
                  </div>
                  <div className="ape-stat-content">
                    <span className="ape-stat-value">{score}<span>/{totalExercises}</span></span>
                    <span className="ape-stat-label">Pontuação</span>
                    <div className="ape-stat-progress">
                      <div className="ape-stat-progress-bar">
                        <div 
                          className="ape-stat-progress-fill" 
                          style={{ width: `${accuracy}%` }}
                        />
                      </div>
                      <span className="ape-stat-percentage">{accuracy}%</span>
                    </div>
                  </div>
                  <div className="ape-performance-indicator" style={{ color: performance.color }}>
                    {performance.level}
                  </div>
                </div>

                {/* Streak */}
                <div className="ape-stat-badge streak">
                  <div className="ape-stat-icon">
                    <Flame size={24} />
                    {streak > 0 && <div className="ape-streak-count">{streak}</div>}
                  </div>
                  <div className="ape-stat-content">
                    <span className="ape-stat-value">{streak}</span>
                    <span className="ape-stat-label">Sequência Atual</span>
                    <div className="ape-streak-info">
                      <span className="ape-streak-level" style={{ color: streakInfo.color }}>
                        {streakInfo.icon} {streakInfo.level}
                      </span>
                    </div>
                  </div>
                  {streak >= 3 && <div className="ape-streak-fire" />}
                </div>

                {/* Time */}
                <div className="ape-stat-badge time">
                  <div className="ape-stat-icon">
                    <Clock size={24} />
                  </div>
                  <div className="ape-stat-content">
                    <span className="ape-stat-value">{displayTime}</span>
                    <span className="ape-stat-label">Tempo de Lab</span>
                    <div className="ape-time-details">
                      <TrendingUp size={12} />
                      <span>Eficiência temporal</span>
                    </div>
                  </div>
                </div>

                {/* Progress */}
                <div className="ape-stat-badge progress">
                  <div className="ape-stat-icon">
                    <Battery size={24} />
                  </div>
                  <div className="ape-stat-content">
                    <span className="ape-stat-value">{currentExercise + 1}<span>/{totalExercises}</span></span>
                    <span className="ape-stat-label">Progresso</span>
                    <div className="ape-progress-details">
                      <span>{remainingExercises} restantes</span>
                      <span>{Math.round(progressPercentage)}%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Summary */}
              <div className="ape-performance-summary">
                <div className="ape-summary-item">
                  <Award size={14} />
                  <span>Nível: <strong style={{ color: performance.color }}>{performance.level}</strong></span>
                </div>
                <div className="ape-summary-item">
                  <TrendingUp size={14} />
                  <span>Precisão: <strong>{accuracy}%</strong></span>
                </div>
                {achievement && (
                  <div className="ape-summary-item">
                    <Zap size={14} />
                    <span>Conquista: <strong>{achievement.text}</strong></span>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="ape-stats-minimized-content">
              <div className="ape-stats-minimized-info">
                <div className="ape-minimized-stats">
                  <span className="ape-mini-stat">
                    <Target size={12} />
                    {score}/{totalExercises}
                  </span>
                  <span className="ape-mini-stat">
                    <Flame size={12} />
                    {streak}🔥
                  </span>
                  <span className="ape-mini-stat">
                    <Clock size={12} />
                    {displayTime}
                  </span>
                  <span className="ape-mini-stat">
                    <Battery size={12} />
                    {Math.round(progressPercentage)}%
                  </span>
                </div>
              </div>
              <div className="ape-stats-minimized-actions">
                <button 
                  onClick={handleStatsMinimize}
                  className="ape-stats-expand"
                  aria-label="Expandir estatísticas"
                >
                  <BarChart3 size={14} />
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
            {currentExercise + 1}/{totalExercises} • {Math.round(progressPercentage)}% • {remainingExercises} restantes
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