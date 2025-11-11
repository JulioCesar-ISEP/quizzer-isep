import React from 'react';
import { ChevronLeft } from 'lucide-react';

const BackButton = ({ onClick, label = 'Voltar' }) => {
  return (
    <button onClick={onClick} className="back-btn">
      <ChevronLeft size={20} />
      {label}
    </button>
  );
};

export default BackButton;