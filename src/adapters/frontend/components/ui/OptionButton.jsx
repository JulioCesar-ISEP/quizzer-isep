import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Zap, Star } from 'lucide-react';
import '../../styles/ui/OptionButton.css';

const OptionButton = ({ 
  option, 
  index, 
  isSelected, 
  isCorrect, 
  showSolution, 
  onSelect, 
  disabled,
  variant = 'default', // 'default' | 'compact' | 'mini'
  showFeedback = true,
  isKeyboardSelected = false,
  loading = false
}) => {
  const [isCelebrating, setIsCelebrating] = useState(false);
  const [wasSelected, setWasSelected] = useState(false);

  const getOptionState = () => {
    if (!showSolution) {
      if (isSelected) return 'selected';
      return '';
    }
    
    if (isCorrect) return 'correct';
    if (isSelected && !isCorrect) return 'incorrect';
    if (showSolution && !isCorrect && !isSelected) return 'show-solution';
    return '';
  };

  const optionState = getOptionState();
  const optionLetter = String.fromCharCode(65 + index);

  // Efeito para celebração quando a resposta está correta
  useEffect(() => {
    if (showSolution && isCorrect && isSelected && !wasSelected) {
      setIsCelebrating(true);
      const timer = setTimeout(() => setIsCelebrating(false), 600);
      setWasSelected(true);
      return () => clearTimeout(timer);
    }
  }, [showSolution, isCorrect, isSelected, wasSelected]);

  const handleClick = () => {
    if (!disabled && !showSolution) {
      onSelect(index);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  const getOptionIcon = () => {
    if (!showFeedback) return null;

    if (optionState === 'correct') {
      return <CheckCircle className="ape-option-icon" size={variant === 'mini' ? 18 : 20} />;
    }
    
    if (optionState === 'incorrect') {
      return <XCircle className="ape-option-icon" size={variant === 'mini' ? 18 : 20} />;
    }

    return null;
  };

  const getXPValue = () => {
    if (isCorrect) {
      if (optionState === 'correct' && isSelected) return 10; // Resposta correta selecionada
      if (optionState === 'correct' && !isSelected) return 5; // Resposta correta não selecionada
    }
    return 0;
  };

  const xpValue = getXPValue();

  if (loading) {
    return (
      <button
        className={`ape-option-button ${variant} loading`}
        disabled
      >
        <span className="ape-option-letter">{optionLetter}</span>
        <span className="ape-option-text">Carregando opção...</span>
      </button>
    );
  }

  return (
    <button
      className={`ape-option-button ${variant} ${optionState} ${
        isCelebrating ? 'celebrating' : ''
      } ${isKeyboardSelected ? 'keyboard-selected' : ''}`}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      disabled={disabled || showSolution}
      aria-label={`Opção ${optionLetter}: ${option}${optionState ? ` - ${optionState}` : ''}`}
      aria-pressed={isSelected}
      aria-describedby={showSolution ? `feedback-${index}` : undefined}
      role="radio"
      tabIndex={disabled ? -1 : 0}
    >
      <span className="ape-option-letter">
        {optionLetter}
      </span>
      
      <span className="ape-option-text">{option}</span>
      
      {getOptionIcon()}

      {/* XP Badge para respostas corretas */}
      {showSolution && xpValue > 0 && (
        <div className="ape-xp-badge">
          <Zap size={14} />
          +{xpValue}
        </div>
      )}

      {/* Feedback para screen readers */}
      {showSolution && (
        <span id={`feedback-${index}`} className="sr-only">
          {optionState === 'correct' 
            ? 'Resposta correta' 
            : optionState === 'incorrect' 
            ? 'Resposta incorreta' 
            : 'Resposta não selecionada'
          }
        </span>
      )}
    </button>
  );
};

export default OptionButton;