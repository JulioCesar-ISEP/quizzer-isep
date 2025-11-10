import React from 'react';
import { Trophy, Flame, Zap, Clock, Home, Download, AlertCircle } from 'lucide-react';
import { formatTime, calculatePercentage } from '../../utils/formatters';

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
  onResetProgress
}) => {
  const getMedal = (percentage) => {
    if (percentage === 100) return '🥇';
    if (percentage >= 80) return '🥈';
    if (percentage >= 60) return '🥉';
    return '🎯';
  };

  const getTotalQuestions = () => {
    if (isQuizFinished) {
      return cadeira?.levels.reduce((acc, lvl) => acc + lvl.exercises.length, 0) || 0;
    }
    return level?.exercises.length || 0;
  };

  const totalQuestions = getTotalQuestions();
  const percentage = calculatePercentage(score, totalQuestions);
  const medal = getMedal(percentage);

  return (
    <div className="completion-screen">
      <div className="completion-container">
        <div className="completion-header">
          <div className="medal-display">{medal}</div>
          <h1 className="completion-title">
            {isQuizFinished ? 'Parabéns!' : 'Nível Concluído!'}
          </h1>
          <p className="completion-subtitle">
            {isQuizFinished 
              ? `Completaste todos os níveis de ${cadeira?.name}`
              : `Completaste ${level?.name}`
            }
          </p>
        </div>

        <div className="score-summary">
          <div className="score-card">
            <div className="score-header">
              <Trophy className="score-icon" />
              <span>Pontuação Final</span>
            </div>
            <div className="score-value">
              {score}<span>/{totalQuestions}</span>
            </div>
            <div className="score-percentage">{percentage}%</div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-mini">
              <Flame className="stat-mini-icon" />
              <span className="stat-mini-value">{maxStreak}</span>
              <span className="stat-mini-label">Melhor Sequência</span>
            </div>
            <div className="stat-mini">
              <Zap className="stat-mini-icon" />
              <span className="stat-mini-value">
                {isQuizFinished ? totalXP : `+${level?.xp || 0}`}
              </span>
              <span className="stat-mini-label">
                {isQuizFinished ? 'XP Total' : 'XP Ganho'}
              </span>
            </div>
            <div className="stat-mini">
              <Clock className="stat-mini-icon" />
              <span className="stat-mini-value">{formatTime(timeSpent)}</span>
              <span className="stat-mini-label">Tempo</span>
            </div>
          </div>
        </div>

        <div className="action-buttons">
          <button onClick={onDownloadReport} className="btn btn-success">
            <Download size={20} />
            Relatório Diário
          </button>
          
          {isLevelCompleted ? (
            <button onClick={onBackToLevels} className="btn btn-primary">
              <Home size={20} />
              Voltar aos Níveis
            </button>
          ) : (
            <button onClick={onBackToCadeiras} className="btn btn-primary">
              <Home size={20} />
              Menu Principal
            </button>
          )}
          
          <button onClick={onResetProgress} className="btn btn-danger">
            <AlertCircle size={20} />
            Resetar Tudo
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompletionView;