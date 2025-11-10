import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { X, Lightbulb, Target } from 'lucide-react';

const TheoryModal = ({ theory, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  }, [onClose]);

  const modalContent = (
    <div className={`modal-overlay ${isVisible ? 'visible' : ''}`} onClick={handleClose}>
      <div
        className={`modal-content theory-modal ${isVisible ? 'visible' : ''}`}
        onClick={e => e.stopPropagation()}
      >
        <div className="modal-header">
          <div className="modal-title-section">
            <Lightbulb size={28} className="theory-icon" />
            <h2 className="modal-title">{theory.title}</h2>
          </div>
          <button onClick={handleClose} className="modal-close-btn">
            <X size={24} />
          </button>
        </div>
        <div className="modal-body">
          <div className="theory-content-card">
            <p className="theory-content">{theory.content}</p>
          </div>
          {theory.keyPoints && (
            <div className="theory-keypoints">
              <h3 className="keypoints-title">
                <Target size={20} /> Pontos Principais
              </h3>
              <ul className="keypoints-list">
                {theory.keyPoints.map((point, i) => (
                  <li key={i} className="keypoint-item">
                    <div className="keypoint-marker">
                      <div className="keypoint-dot"></div>
                    </div>
                    <span className="keypoint-text">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {theory.examples && (
            <div className="theory-examples">
              <h4 className="examples-title">📋 Exemplos</h4>
              <pre className="examples-code">
                <code>{theory.examples}</code>
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default TheoryModal;