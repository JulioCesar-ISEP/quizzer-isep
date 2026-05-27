import React from 'react';
import { CheckCircle, XCircle, BookOpen, Zap, AlertCircle, Info, ArrowRight, Lightbulb, Award } from 'lucide-react';
import '../../styles/ui/SolutionPanel.css';

const SolutionPanel = ({
  isCorrect,
  explanation,
  code,
  theoryPoints,
  hasComment,
  comment,
  currentStreak,
  isReviewMode = false,
  userAnswer,
  correctAnswer,
  options = [],
  hints = [],
  achievement = null,
  xpReward = 0
}) => {
  // Função para normalizar theoryPoints
  const getTheoryPointsData = () => {
    if (!theoryPoints) return { title: null, content: null, keyPoints: [], examples: null };
    
    // Se for array (formato antigo)
    if (Array.isArray(theoryPoints)) {
      return {
        title: 'Pontos de Teoria Relevantes',
        content: null,
        keyPoints: theoryPoints,
        examples: null
      };
    }
    
    // Se for objeto (novo formato)
    if (typeof theoryPoints === 'object') {
      return {
        title: theoryPoints.title || 'Pontos de Teoria Relevantes',
        content: theoryPoints.content || null,
        keyPoints: Array.isArray(theoryPoints.keyPoints) ? theoryPoints.keyPoints : [],
        examples: theoryPoints.examples || null
      };
    }
    
    // Se for string
    if (typeof theoryPoints === 'string') {
      return {
        title: 'Teoria',
        content: theoryPoints,
        keyPoints: [],
        examples: null
      };
    }
    
    return { title: null, content: null, keyPoints: [], examples: null };
  };

  const theoryData = getTheoryPointsData();

  const renderAnswerAnalysis = () => {
    if (!isReviewMode || isCorrect || userAnswer === undefined) return null;

    const userAnswerText = userAnswer !== undefined && options[userAnswer] 
      ? options[userAnswer] 
      : 'Nenhuma resposta selecionada';
    
    const correctAnswerText = correctAnswer !== undefined && options[correctAnswer] 
      ? options[correctAnswer] 
      : 'Resposta não disponível';

    return (
      <div className="ape-answer-analysis">
        <div className="ape-analysis-header">
          <AlertCircle size={20} />
          <h4>Análise da Resposta</h4>
        </div>
        
        <div className="ape-answer-comparison">
          <div className="ape-wrong-answer">
            <div className="ape-answer-label">
              <XCircle size={16} className="ape-wrong-icon" />
              <span>Sua resposta:</span>
            </div>
            <div className="ape-answer-text wrong">{userAnswerText}</div>
          </div>
          
          <div className="ape-answer-arrow">
            <ArrowRight size={20} />
          </div>
          
          <div className="ape-correct-answer">
            <div className="ape-answer-label">
              <CheckCircle size={16} className="ape-correct-icon" />
              <span>Resposta correta:</span>
            </div>
            <div className="ape-answer-text correct">{correctAnswerText}</div>
          </div>
        </div>
      </div>
    );
  };

  // Função para formatar código com syntax highlighting básico
  const formatCode = (codeText) => {
    if (!codeText) return codeText;
    
    // Substituições básicas para syntax highlighting
    return codeText
      .replace(/\b(function|if|else|for|while|return|const|let|var|class)\b/g, '<span class="keyword">$1</span>')
      .replace(/\b(console|log|error|warn)\b/g, '<span class="function">$1</span>')
      .replace(/"([^"]*)"/g, '<span class="string">"$1"</span>')
      .replace(/'([^']*)'/g, '<span class="string">\'$1\'</span>')
      .replace(/\b(\d+)\b/g, '<span class="number">$1</span>')
      .replace(/\/\/.*$/gm, '<span class="comment">$&</span>')
      .replace(/\/\*[\s\S]*?\*\//g, '<span class="comment">$&</span>');
  };

  return (
    <div className={`ape-solution-panel ${isCorrect ? 'correct' : 'incorrect'} ${isReviewMode ? 'review-mode' : ''}`}>
      {/* Header */}
      <div className="ape-solution-header">
        <div className="ape-solution-result">
          {isCorrect ? (
            <>
              <CheckCircle className="ape-solution-icon correct" size={24} />
              <span className="ape-solution-text">Resposta Correta!</span>
            </>
          ) : (
            <>
              <XCircle className="ape-solution-icon incorrect" size={24} />
              <span className="ape-solution-text">Resposta Incorreta</span>
            </>
          )}
          
          {achievement && (
            <div className="ape-achievement-badge">
              <Award size={12} />
              {achievement}
            </div>
          )}
        </div>

        {/* Streak Indicator */}
        {currentStreak > 1 && (
          <div className="ape-streak-indicator">
            <Zap size={14} />
            <span>Sequência: {currentStreak}</span>
          </div>
        )}

        {/* XP Reward */}
        {xpReward > 0 && (
          <div className="ape-xp-reward">
            <Zap size={16} />
            <span>+{xpReward} XP</span>
            <span>Recompensa por resposta {isCorrect ? 'correta' : 'com aprendizado'}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="ape-solution-content">
        {/* Análise de resposta (apenas em modo de revisão) */}
        {renderAnswerAnalysis()}

        {/* Explicação */}
        {explanation && (
          <div className="ape-explanation-section">
            <h4>
              <Info size={18} />
              Explicação
            </h4>
            <p>{explanation}</p>
          </div>
        )}

        {/* Código */}
        {code && (
          <div className="ape-code-section">
            <div className="ape-code-block">
              <pre>
                <code dangerouslySetInnerHTML={{ __html: formatCode(code) }} />
              </pre>
            </div>
          </div>
        )}

        {/* Teoria */}
        {(theoryData.content || theoryData.keyPoints.length > 0 || theoryData.examples) && (
          <div className="ape-theory-section">
            <h4>
              <BookOpen size={18} />
              {theoryData.title}
            </h4>
            
            {theoryData.content && (
              <p><strong>Conceito:</strong> {theoryData.content}</p>
            )}
            
            {theoryData.keyPoints.length > 0 && (
              <>
                <p><strong>Pontos-chave:</strong></p>
                <ul className="ape-keypoints-list">
                  {theoryData.keyPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </>
            )}
            
            {theoryData.examples && (
              <p><strong>Exemplo:</strong> {theoryData.examples}</p>
            )}
          </div>
        )}

        {/* Comentário do aluno */}
        {hasComment && comment && (
          <div className="ape-comment-review">
            <h4>
              <span>💭</span>
              Seu Comentário
            </h4>
            <p>{comment}</p>
            <p className="ape-comment-hint">Este comentário ajuda a reforçar seu aprendizado</p>
          </div>
        )}

        {/* Dicas (hints) */}
        {hints.length > 0 && (
          <div className="ape-learning-tip">
            <h4>
              <Lightbulb size={18} />
              Dica de Aprendizado
            </h4>
            <p>{hints[Math.floor(Math.random() * hints.length)]}</p>
            <p><strong>Dica:</strong> Anote esses conceitos para revisão futura!</p>
          </div>
        )}

        {/* Dica geral */}
        {!isCorrect && (
          <div className="ape-learning-tip">
            <h4>
              <Lightbulb size={18} />
              Como Aprender com Erros
            </h4>
            <p>
              <strong>Recomendação:</strong> Revise os pontos de teoria acima e tente entender 
              por que sua resposta estava incorreta. Anote o conceito em suas próprias palavras 
              para reforçar o aprendizado.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SolutionPanel;