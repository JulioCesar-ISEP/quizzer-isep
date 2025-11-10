import React from 'react';

const StatsCard = ({ icon: Icon, number, label, className = '', onClick }) => {
  return (
    <div 
      className={`stat-item-overview ${className}`}
      onClick={onClick}
      style={onClick ? { cursor: 'pointer' } : {}}
    >
      <Icon className="stat-icon" />
      <div>
        <span className="stat-number">{number}</span>
        <span className="stat-label">{label}</span>
      </div>
    </div>
  );
};

export default StatsCard;