import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const OptionButton = ({ 
  option, 
  index, 
  isSelected, 
  isCorrect, 
  showSolution, 
  onSelect, 
  disabled 
}) => {
  const getOptionState = () => {
    if (!showSolution) return '';
    if (isCorrect) return 'correct';
    if (isSelected && !isCorrect) return 'incorrect';
    return '';
  };

  const optionState = getOptionState();

  return (
    <button
      className={`option-btn ${optionState}`}
      onClick={() => onSelect(index)}
      disabled={disabled}
    >
      <span className="option-letter">
        {String.fromCharCode(65 + index)}
      </span>
      <span className="option-text">{option}</span>
      {optionState === 'correct' && <CheckCircle className="option-icon" />}
      {optionState === 'incorrect' && <XCircle className="option-icon" />}
    </button>
  );
};

export default OptionButton;