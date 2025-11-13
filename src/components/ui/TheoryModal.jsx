import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { X, Lightbulb, Target, Code, Zap, BookOpen, GraduationCap } from 'lucide-react';
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
            <div>
              <h2 id="theory-modal-title" className="ape-theory-modal-title">
                {theory.title || 'Conceito do Laboratório'}
              </h2>
              <div className="ape-theory-subtitle">
                <Zap size={16} />
                <span>Conhecimento Essencial para o Desafio</span>
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

        {/* Body */}
        <div className="ape-theory-modal-body">
          {/* Main Content */}
          <div className="ape-theory-content-card">
            <div className="ape-content-header">
              <BookOpen size={20} />
              <h3>Explicação do Conceito</h3>
            </div>
            <p className="ape-theory-content">{theory.content}</p>
            {theory.application && (
              <div className="ape-application-tip">
                <GraduationCap size={18} />
                <strong>Aplicação Prática:</strong> {theory.application}
              </div>
            )}
          </div>

          {/* Key Points */}
          {theory.keyPoints && theory.keyPoints.length > 0 && (
            <div className="ape-theory-keypoints">
              <h3 className="ape-keypoints-title">
                <Target size={24} />
                Pontos Principais para Dominar
              </h3>
              <ul className="ape-keypoints-list">
                {theory.keyPoints.map((point, i) => (
                  <li key={i} className="ape-keypoint-item">
                    <div className="ape-keypoint-marker">
                      <div className="ape-keypoint-dot"></div>
                    </div>
                    <span className="ape-keypoint-text">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Examples */}
          {theory.examples && (
            <div className="ape-theory-examples">
              <h4 className="ape-examples-title">
                <Code size={24} />
                Exemplos no Laboratório
              </h4>
              <pre className="ape-examples-code">
                <code>{theory.examples}</code>
              </pre>
            </div>
          )}

          {/* Tips */}
          <div className="ape-theory-tips">
            <div className="ape-tip-item">
              <Lightbulb size={18} />
              <span>
                <strong>Dica:</strong> Revisa estes conceitos antes de avançar para o próximo desafio
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default TheoryModal;