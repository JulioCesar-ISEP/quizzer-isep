import React, { useState, useEffect } from 'react';
import { Trophy, Flame, Zap, Clock, Home, Download, AlertCircle, Star, Target, Award, BookOpen } from 'lucide-react';
import { formatTime, calculatePercentage } from '../../utils/formatters';
import '../../styles/components/CompletionView.css';

const CompletionView = ({
  level,
  cadeira,
  score,
  maxStreak,
  totalXP,
  timeSpent,
  isLevelCompleted,
  isQuizFinished,
  onBackToLevels,
  onBackToCadeiras,
  onDownloadReport,
  onResetProgress,
  onEnterReviewMode
}) => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const getPerformance = (pct) => {
    if (pct >= 90) return { level: 'Excelente', medal: '🏆', color: '#10b981' };
    if (pct >= 70) return { level: 'Bom', medal: '🥈', color: '#f59e0b' };
    if (pct >= 50) return { level: 'Regular', medal: '🥉', color: '#f97316' };
    return { level: 'Em progresso', medal: '🎯', color: '#94a3b8' };
  };

  const getTotalQuestions = () => {
    if (isQuizFinished) {
      return cadeira?.levels.reduce((acc, lvl) => acc + lvl.exercises.length, 0) || 0;
    }
    return level?.exercises.length || 0;
  };

  const totalQuestions = getTotalQuestions();
  const percentage = calculatePercentage(score, totalQuestions);
  const { level: performanceLevel, medal, color } = getPerformance(percentage);
  
  const displayTime = timeSpent && !timeSpent.includes('NaN') ? timeSpent : '00:00';

  const getXPBreakdown = () => {
    const baseXP = score * 10;
    const streakBonus = Math.floor(maxStreak * 2);
    const accuracyBonus = percentage >= 80 ? 50 : percentage >= 60 ? 25 : 0;
    const timeBonus = 10;
    
    return {
      base: baseXP,
      streak: streakBonus,
      accuracy: accuracyBonus,
      time: timeBonus,
      total: baseXP + streakBonus + accuracyBonus + timeBonus
    };
  };

  const xpBreakdown = getXPBreakdown();

  const generateConfetti = () => {
    if (!showConfetti) return null;
    
    return Array.from({ length: 50 }, (_, i) => (
      <div
        key={i}
        className="ape-confetti-piece"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
          background: `linear-gradient(45deg, #ffd700, #ffed4e, #22c55e, #3b82f6)`
        }}
      />
    ));
  };

  return (
    <div className="ape-completion-screen">
      <div className="ape-completion-container">
        {/* Confetti Celebration */}
        <div className="ape-celebration-confetti">
          {generateConfetti()}
        </div>

        {/* Header */}
        <div className="ape-completion-header">
          <div className="ape-medal-display">{medal}</div>
          <h1 className="ape-completion-title">
            {isQuizFinished ? 'Cadeira concluída! 🎉' : 'Desafio concluído! 🚀'}
          </h1>
          <p className="ape-completion-subtitle">
            {isQuizFinished 
              ? `Completaste todos os desafios de ${cadeira?.name}`
              : `Terminaste o desafio ${level?.name}`
            }
          </p>
          
          {/* Rank Badge */}
          <div 
            className="ape-rank-badge"
            style={{ background: `linear-gradient(135deg, ${color}, ${color}dd)` }}
          >
            <Award size={16} />
            NÍVEL: {performanceLevel}
          </div>
        </div>

        {/* XP Breakdown */}
        <div className="ape-xp-breakdown">
          <div className="ape-xp-title">
            <Zap size={20} />
            RECOMPENSA (XP)
          </div>
          <div className="ape-xp-items">
            <div className="ape-xp-item">
              <span className="ape-xp-amount">+{xpBreakdown.base}</span>
              <span className="ape-xp-label">Respostas</span>
            </div>
            <div className="ape-xp-item">
              <span className="ape-xp-amount">+{xpBreakdown.streak}</span>
              <span className="ape-xp-label">Sequência</span>
            </div>
            <div className="ape-xp-item">
              <span className="ape-xp-amount">+{xpBreakdown.accuracy}</span>
              <span className="ape-xp-label">Precisão</span>
            </div>
            <div className="ape-xp-item">
              <span className="ape-xp-amount">+{xpBreakdown.time}</span>
              <span className="ape-xp-label">Tempo</span>
            </div>
          </div>
        </div>

        {/* Score Summary */}
        <div className="ape-score-summary">
          {/* Main Score Card */}
          <div className="ape-score-card">
            <div className="ape-score-header">
              <Trophy className="ape-score-icon" />
              <span>DESEMPENHO</span>
            </div>
            <div className="ape-score-value">
              {score}<span>/{totalQuestions}</span>
            </div>
            <div className="ape-score-percentage">{percentage}% DE ACERTOS</div>
            <div className="ape-progress-bar">
              <div
                className="ape-progress-fill"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          {/* Stats Grid */}
          <div className="ape-stats-grid">
            <div className="ape-stat-mini">
              <Flame className="ape-stat-mini-icon" />
              <span className="ape-stat-mini-value">{maxStreak}</span>
              <span className="ape-stat-mini-label">Sequência Máxima</span>
            </div>
            <div className="ape-stat-mini">
              <Zap className="ape-stat-mini-icon" />
              <span className="ape-stat-mini-value">
                {isQuizFinished ? totalXP : `+${level?.xp || 0}`}
              </span>
              <span className="ape-stat-mini-label">
                {isQuizFinished ? 'XP Total' : 'XP Ganho'}
              </span>
            </div>
            <div className="ape-stat-mini">
              <Clock className="ape-stat-mini-icon" />
              <span className="ape-stat-mini-value">{displayTime}</span>
              <span className="ape-stat-mini-label">Tempo</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="ape-action-buttons">
          <button onClick={onDownloadReport} className="ape-completion-btn success">
            <Download size={20} />
            Exportar Relatório
          </button>
          
          {/* Botão para revisar erros */}
          <button onClick={onEnterReviewMode} className="ape-completion-btn primary">
            <BookOpen size={20} />
            Revisar Erros e Aprender
          </button>
          
          {isLevelCompleted ? (
            <button onClick={onBackToLevels} className="ape-completion-btn primary">
              <Home size={20} />
              Explorar Mais Desafios
            </button>
          ) : (
            <button onClick={onBackToCadeiras} className="ape-completion-btn primary">
              <Home size={20} />
              Voltar à Árvore do Conhecimento
            </button>
          )}
          
          <button onClick={onResetProgress} className="ape-completion-btn danger">
            <AlertCircle size={20} />
            Reiniciar Progresso
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompletionView;