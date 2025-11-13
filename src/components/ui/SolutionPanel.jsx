import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Lightbulb, ArrowRight, Trophy, ArrowLeft, Zap, Flame, Star, Target } from 'lucide-react';
import '../../styles/ui/SolutionPanel.css';

const SolutionPanel = ({ 
  isCorrect, 
  explanation, 
  code, 
  theoryPoints, 
  hasComment, 
  comment, 
  onNext, 
  isLastExercise,
  allQuestionsAnswered,
  onPrevious,
  currentStreak = 0,
  xpReward = 0,
  compact = false
}) => {
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    if (isCorrect) {
      setShowCelebration(true);
      const timer = setTimeout(() => setShowCelebration(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isCorrect]);

  const getAchievement = () => {
    if (currentStreak >= 5) return '🔥 SEQUÊNCIA QUENTE!';
    if (isCorrect && xpReward >= 20) return '⭐ RESPOSTA PERFEITA!';
    if (isCorrect) return '🎯 ACERTOU!';
    return '📚 OPORTUNIDADE DE APRENDIZADO';
  };

  const getXPBreakdown = () => {
    const baseXP = isCorrect ? 10 : 5;
    const streakBonus = Math.min(currentStreak * 2, 10);
    const accuracyBonus = isCorrect ? 5 : 0;
    return {
      base: baseXP,
      streak: streakBonus,
      accuracy: accuracyBonus,
      total: baseXP + streakBonus + accuracyBonus
    };
  };

  const xpBreakdown = getXPBreakdown();

  return (
    <div className={`ape-solution-panel ${isCorrect ? 'correct' : 'incorrect'} ${compact ? 'compact' : ''}`}>
      {/* Header */}
      <div className="ape-solution-header">
        <div className={`ape-solution-result ${isCorrect ? 'correct' : 'incorrect'}`}>
          {isCorrect ? (
            <>
              <CheckCircle size={28} />
              <span>DESAFIO SUPERADO! 🎉</span>
            </>
          ) : (
            <>
              <XCircle size={28} />
              <span>DESAFIO PARA REVISAR</span>
            </>
          )}
          <div className="ape-achievement-badge">
            {getAchievement()}
          </div>
        </div>

        {/* Streak Indicator */}
        {currentStreak > 1 && (
          <div className="ape-streak-indicator">
            <Flame size={16} />
            Sequência de {currentStreak} respostas corretas!
          </div>
        )}

        {/* XP Reward */}
        <div className="ape-xp-reward">
          <Zap size={20} />
          <span>+{xpBreakdown.total} XP GANHO</span>
          {xpBreakdown.streak > 0 && (
            <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>
              (+{xpBreakdown.streak} por sequência)
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="ape-solution-content">
        {/* Explanation Section */}
        <div className="ape-explanation-section">
          <h4>
            <Target size={20} />
            Análise da Solução
          </h4>
          <p>{explanation}</p>
          {code && (
            <div className="ape-code-block">
              <code>{code}</code>
            </div>
          )}
        </div>

        {/* Theory Section */}
        {theoryPoints && (
          <div className="ape-theory-section">
            <h4>
              <Lightbulb size={20} />
              {theoryPoints.title || 'Conceito do Laboratório'}
            </h4>
            <p>{theoryPoints.content}</p>
            {theoryPoints.keyPoints && (
              <ul className="ape-keypoints-list">
                {theoryPoints.keyPoints.map((point, i) => (
                  <li key={i}>
                    <strong>Ponto {i + 1}:</strong> {point}
                  </li>
                ))}
              </ul>
            )}
          </div>  
        )}

        {/* Comment Review */}
        {!isCorrect && hasComment && comment && (
          <div className="ape-comment-review">
            <h4>
              <Star size={20} />
              Teu Registro do Lab
            </h4>
            <p>"{comment}"</p>
            <p className="ape-comment-hint">
              👉 Esta anotação vai ajudar a identificar lacunas no teu relatório final
            </p>
          </div>
        )}

        {/* Learning Tip for Incorrect Answers */}
        {!isCorrect && (
          <div className="ape-theory-section">
            <h4>
              <Lightbulb size={20} />
              Dica de Aprendizado
            </h4>
            <p>
              <strong>Não desanimes!</strong> Cada erro é uma oportunidade para 
              fortalecer o teu conhecimento. Revisa os conceitos e tenta identificar 
              onde o teu raciocínio pode ser ajustado.
            </p>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="ape-solution-actions">
        {onPrevious && (
          <button 
            onClick={onPrevious} 
            className="ape-solution-btn secondary"
            aria-label="Voltar para questão anterior"
          >
            <ArrowLeft size={20} />
            Questão Anterior
          </button>
        )}
        
        <button 
          onClick={onNext} 
          className={`ape-solution-btn ${allQuestionsAnswered ? 'success' : 'primary'}`}
          aria-label={
            allQuestionsAnswered 
              ? "Ver resultados finais" 
              : isLastExercise 
              ? "Ver resultados do desafio" 
              : "Próximo desafio"
          }
        >
          {allQuestionsAnswered ? (
            <>
              Ver Resultados Finais
              <Trophy size={20} />
            </>
          ) : isLastExercise ? (
            <>
              Concluir Desafio
              <Trophy size={20} />
            </>
          ) : (
            <>
              Próximo Desafio
              <ArrowRight size={20} />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default SolutionPanel;