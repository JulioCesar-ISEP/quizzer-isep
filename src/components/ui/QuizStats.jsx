import React, { useState, useEffect } from 'react';
import { Target, Flame, Clock, CheckCircle, Zap, Trophy, Star } from 'lucide-react';
import '../../styles/ui/QuizStats.css';

const QuizStats = ({ 
  score, 
  streak, 
  timeSpent, 
  currentExercise, 
  totalExercises, 
  className = '',
  variant = 'default', // 'default' | 'compact' | 'mini'
  showAchievements = true,
  loading = false
}) => {
  const [previousScore, setPreviousScore] = useState(score);
  const [previousStreak, setPreviousStreak] = useState(streak);
  const [isCelebrating, setIsCelebrating] = useState(false);

  // Garantir que timeSpent sempre tenha um valor válido
  const displayTime = timeSpent && !timeSpent.includes('NaN') ? timeSpent : '00:00';

  // Efeitos para celebrações
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

  const getAchievement = () => {
    if (streak >= 10) return '🔥 LENDA';
    if (streak >= 5) return '⭐ ESTRELA';
    if (score === totalExercises) return '🏆 PERFEITO';
    if (score >= totalExercises * 0.8) return '🎯 PRECISÃO';
    return null;
  };

  const isTimeWarning = () => {
    // Considerar warning se o tempo for maior que 10 minutos
    const [minutes, seconds] = displayTime.split(':').map(Number);
    const totalSeconds = minutes * 60 + seconds;
    return totalSeconds > 600; // 10 minutos
  };

  const achievement = getAchievement();
  const timeWarning = isTimeWarning();

  if (loading) {
    return (
      <div className={`ape-quiz-stats ${variant} loading ${className}`}>
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="ape-stat-badge">
            <div className="ape-stat-value">•••</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`ape-quiz-stats ${variant} ${isCelebrating ? 'celebrating' : ''} ${className}`}>
      {/* Score Badge */}
      <div className="ape-stat-badge score">
        <Target size={variant === 'mini' ? 14 : 16} />
        <span>
          Pontuação: 
          <span className="ape-stat-value">{score}</span>
        </span>
        {showAchievements && achievement === '🏆 PERFEITO' && (
          <div className="ape-achievement-badge">PERFEITO!</div>
        )}
      </div>

      {/* Streak Badge */}
      <div className="ape-stat-badge streak">
        <Flame size={variant === 'mini' ? 14 : 16} />
        <span>
          Sequência: 
          <span className="ape-stat-value">{streak}</span>
        </span>
        {streak > 1 && <div className="ape-streak-fire" />}
        {showAchievements && (achievement === '🔥 LENDA' || achievement === '⭐ ESTRELA') && (
          <div className="ape-achievement-badge">
            {achievement === '🔥 LENDA' ? 'LENDA!' : 'ESTRELA!'}
          </div>
        )}
      </div>

      {/* Time Badge */}
      <div className={`ape-stat-badge time ${timeWarning ? 'warning' : ''}`}>
        <Clock size={variant === 'mini' ? 14 : 16} />
        <span>
          Tempo: 
          <span className="ape-stat-value">{displayTime}</span>
        </span>
      </div>

      {/* Progress Badge */}
      <div className="ape-stat-badge progress">
        <CheckCircle size={variant === 'mini' ? 14 : 16} />
        <span>
          Progresso: 
          <span className="ape-stat-value">{currentExercise + 1}/{totalExercises}</span>
        </span>
        {showAchievements && achievement === '🎯 PRECISÃO' && (
          <div className="ape-achievement-badge">PRECISÃO!</div>
        )}
      </div>

      {/* XP Estimate (Mini variant only) */}
      {variant === 'mini' && (
        <div className="ape-stat-badge">
          <Zap size={14} />
          <span>
            XP: 
            <span className="ape-stat-value">+{Math.round(score * 10)}</span>
          </span>
        </div>
      )}
    </div>
  );
};

export default QuizStats;