import React from 'react';
import { CheckCircle, XCircle, Lightbulb, ArrowRight, Trophy, ArrowLeft } from 'lucide-react';

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
  onPrevious
}) => {
  return (
    <div className={`solution-panel ${isCorrect ? 'correct' : 'incorrect'}`}>
      <div className="solution-header">
        <div className="solution-result">
          {isCorrect ? (
            <>
              <CheckCircle size={24} />
              <span>Resposta Correta! 🎉</span>
            </>
          ) : (
            <>
              <XCircle size={24} />
              <span>Resposta Incorreta</span>
            </>
          )}
        </div>
      </div>

      <div className="solution-content">
        <div className="explanation-section">
          <h4>📝 Explicação</h4>
          <p>{explanation}</p>
          {code && (
            <pre className="code-block">
              <code>{code}</code>
            </pre>
          )}
        </div>

        {theoryPoints && (
          <div className="theory-section">
            <h4>
              <Lightbulb size={18} />
              {theoryPoints.title}
            </h4>
            <p>{theoryPoints.content}</p>
            {theoryPoints.keyPoints && (
              <ul className="keypoints-list-small">
                {theoryPoints.keyPoints.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
          </div>  
        )}

        {!isCorrect && hasComment && (
          <div className="comment-review">
            <h4>💬 A tua dúvida</h4>
            <p>"{comment}"</p>
            <p className="comment-hint">👉 Revê esta questão no relatório final</p>
          </div>
        )}
      </div>

      <div className="solution-actions">
        {onPrevious && (
          <button onClick={onPrevious} className="btn btn-secondary">
            <ArrowLeft size={20} />
            Voltar
          </button>
        )}
        
        <button onClick={onNext} className="btn btn-primary">
          {allQuestionsAnswered ? (
            <>Ver Resultados <Trophy size={20} /></>
          ) : isLastExercise ? (
            <>Ver Resultados <Trophy size={20} /></>
          ) : (
            <>Próxima Questão <ArrowRight size={20} /></>
          )}
        </button>
      </div>
    </div>
  );
};

export default SolutionPanel;