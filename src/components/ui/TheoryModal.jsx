import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { X, Lightbulb, Target, Code, Zap, BookOpen, GraduationCap, Clock, Shield, Rocket } from 'lucide-react';
import '../../styles/ui/TheoryModal.css';

const TheoryModal = ({ theory, onClose, compact = false }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  }, [onClose]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [handleClose]);

  const getTheoryType = () => {
    if (theory.examples) return 'code';
    if (theory.keyPoints) return 'structured';
    return 'basic';
  };

  const theoryType = getTheoryType();

  const getDifficultyColor = (level) => {
    switch (level?.toLowerCase()) {
      case 'hard': return '#ef4444';
      case 'easy': return '#22c55e';
      default: return '#f59e0b';
    }
  };

  const getTimeEstimate = () => {
    const points = theory.keyPoints?.length || 0;
    const baseTime = 2; // minutos base
    return baseTime + Math.ceil(points * 0.5);
  };

  const modalContent = (
    <div 
      className={`ape-theory-modal-overlay ${isVisible ? 'visible' : ''}`} 
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="theory-modal-title"
    >
      <div
        className={`ape-theory-modal-content ${isVisible ? 'visible' : ''} ${compact ? 'compact' : ''}`}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="ape-theory-modal-header">
          <div className="ape-theory-title-section">
            <div className="ape-theory-icon">
              {theoryType === 'code' ? (
                <Code size={28} />
              ) : theoryType === 'structured' ? (
                <Target size={28} />
              ) : (
                <Lightbulb size={28} />
              )}
            </div>
            <div className="ape-theory-title-content">
              <h1 id="theory-modal-title" className="ape-theory-modal-title">
                {theory.title || 'Conceito do Laboratório'}
              </h1>
              <div className="ape-theory-metadata">
                <div className="ape-theory-subtitle">
                  <Zap size={16} />
                  <span>Conhecimento Essencial para o Desafio</span>
                </div>
                <div className="ape-theory-stats">
                  <div className="ape-theory-stat">
                    <Clock size={14} />
                    <span>{getTimeEstimate()} min</span>
                  </div>
                  {theory.difficulty && (
                    <div 
                      className="ape-theory-stat difficulty"
                      style={{ color: getDifficultyColor(theory.difficulty) }}
                    >
                      <Shield size={14} />
                      <span>{theory.difficulty}</span>
                    </div>
                  )}
                  {theory.keyPoints && (
                    <div className="ape-theory-stat">
                      <Rocket size={14} />
                      <span>{theory.keyPoints.length} pontos</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <button 
            onClick={handleClose} 
            className="ape-theory-close-btn"
            aria-label="Fechar teoria"
          >
            <X size={24} />
          </button>
        </div>

        {/* Body - Altura ajustada para caber na tela */}
        <div className="ape-theory-modal-body">
          {/* Main Content */}
          <section className="ape-theory-content-section">
            <div className="ape-content-header">
              <BookOpen size={20} />
              <h2>Explicação do Conceito</h2>
            </div>
            <div className="ape-theory-content-card">
              <p className="ape-theory-content">{theory.content}</p>
              {theory.application && (
                <div className="ape-application-tip">
                  <div className="ape-application-icon">
                    <GraduationCap size={18} />
                  </div>
                  <div className="ape-application-content">
                    <strong>Aplicação Prática:</strong>
                    <span>{theory.application}</span>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Key Points - Renderizado condicionalmente */}
          {theory.keyPoints && theory.keyPoints.length > 0 && (
            <section className="ape-theory-keypoints-section">
              <div className="ape-section-header">
                <Target size={20} />
                <h2>Pontos Principais ({theory.keyPoints.length})</h2>
              </div>
              <div className="ape-theory-keypoints">
                <ul className="ape-keypoints-list">
                  {theory.keyPoints.slice(0, 4).map((point, i) => ( // Limita a 4 pontos
                    <li key={i} className="ape-keypoint-item">
                      <div className="ape-keypoint-number">{i + 1}</div>
                      <div className="ape-keypoint-content">
                        <span className="ape-keypoint-text">{point}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* Examples - Renderizado condicionalmente */}
          {theory.examples && (
            <section className="ape-theory-examples-section">
              <div className="ape-section-header">
                <Code size={20} />
                <h2>Exemplo Prático</h2>
              </div>
              <div className="ape-theory-examples">
                <pre className="ape-examples-code">
                  <code>{theory.examples}</code>
                </pre>
              </div>
            </section>
          )}

          {/* Tips & Next Steps */}
          <section className="ape-theory-tips-section">
            <div className="ape-section-header">
              <Lightbulb size={20} />
              <h2>Próximos Passos</h2>
            </div>
            <div className="ape-theory-tips">
              <div className="ape-tip-item primary">
                <Rocket size={18} />
                <div className="ape-tip-content">
                  <strong>Agora é sua vez!</strong>
                  <span>Aplique estes conceitos no desafio atual</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer - Sempre visível */}
        <div className="ape-theory-modal-footer">
          <button 
            onClick={handleClose}
            className="ape-theory-action-btn primary"
          >
            <Target size={18} />
            <span>Entendi, vamos ao desafio!</span>
          </button>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default TheoryModal;