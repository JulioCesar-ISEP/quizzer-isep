import React from 'react';
import { TrendingUp, TrendingDown, Minus, Star, Zap, Target } from 'lucide-react';
import '../../styles/ui/StatsCard.css';

const StatsCard = ({ 
  icon: Icon, 
  number, 
  label, 
  className = '', 
  onClick,
  variant = 'primary', // 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'premium'
  size = 'default', // 'small' | 'default' | 'large'
  layout = 'default', // 'default' | 'compact' | 'with-progress'
  progressValue = 0,
  progressMax = 100,
  trend = null, // 'positive' | 'negative' | 'neutral' | number
  achievement = null,
  loading = false,
  animated = true
}) => {
  const getTrendIcon = () => {
    if (trend === 'positive' || (typeof trend === 'number' && trend > 0)) {
      return <TrendingUp size={14} />;
    }
    if (trend === 'negative' || (typeof trend === 'number' && trend < 0)) {
      return <TrendingDown size={14} />;
    }
    if (trend === 'neutral') {
      return <Minus size={14} />;
    }
    return null;
  };

  const getTrendText = () => {
    if (typeof trend === 'number') {
      return trend > 0 ? `+${trend}` : trend.toString();
    }
    return null;
  };

  const getTrendClass = () => {
    if (trend === 'positive' || (typeof trend === 'number' && trend > 0)) {
      return 'positive';
    }
    if (trend === 'negative' || (typeof trend === 'number' && trend < 0)) {
      return 'negative';
    }
    if (trend === 'neutral') {
      return 'neutral';
    }
    return '';
  };

  const formatNumber = (num) => {
    if (typeof num === 'number') {
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
      }
      if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
      }
    }
    return num;
  };

  if (loading) {
    return (
      <div className={`ape-stats-card ${variant} ${size} ${layout} loading ${className}`}>
        <div className="ape-stats-icon">
          <Icon size={size === 'small' ? 18 : size === 'large' ? 28 : 24} />
        </div>
        <div className="ape-stats-content">
          <span className="ape-stats-number">•••</span>
          <span className="ape-stats-label">Carregando...</span>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`ape-stats-card ${variant} ${size} ${layout} ${onClick ? 'clickable' : ''} ${animated ? 'animated' : ''} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : 'article'}
      tabIndex={onClick ? 0 : -1}
      aria-label={onClick ? `Ver detalhes de ${label}: ${number}` : undefined}
    >
      {/* Achievement Badge */}
      {achievement && (
        <div className="ape-stats-achievement">
          <Star size={10} />
          {achievement}
        </div>
      )}

      {/* Main Content */}
      <div className={`ape-stats-main ${layout === 'with-progress' ? 'with-progress' : ''}`}>
        <div className="ape-stats-icon">
          <Icon size={
            size === 'small' ? 18 : 
            size === 'large' ? 28 : 
            24
          } />
        </div>

        <div className="ape-stats-content">
          <span className="ape-stats-number">
            {formatNumber(number)}
          </span>
          <span className="ape-stats-label">{label}</span>
          
          {/* Trend Indicator */}
          {trend && (
            <div className={`ape-stats-trend ${getTrendClass()}`}>
              {getTrendIcon()}
              {getTrendText()}
            </div>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      {layout === 'with-progress' && progressMax > 0 && (
        <div className="ape-stats-progress">
          <div
            className="ape-stats-progress-fill"
            style={{ width: `${(progressValue / progressMax) * 100}%` }}
            aria-label={`Progresso: ${Math.round((progressValue / progressMax) * 100)}%`}
            role="progressbar"
            aria-valuenow={progressValue}
            aria-valuemin="0"
            aria-valuemax={progressMax}
          />
        </div>
      )}

      {/* Keyboard Navigation Hint */}
      {onClick && (
        <span className="sr-only">
          Pressione Enter ou Espaço para ver detalhes
        </span>
      )}
    </div>
  );
};

// Componente auxiliar para criar grids de stats
export const StatsGrid = ({ 
  children, 
  className = '',
  variant = 'default', // 'default' | 'compact' | 'dense'
  columns,
  gap
}) => {
  const gridStyle = {
    gridTemplateColumns: columns || undefined,
    gap: gap || undefined
  };

  return (
    <div 
      className={`ape-stats-grid ${variant} ${className}`}
      style={Object.keys(gridStyle).length > 0 ? gridStyle : undefined}
    >
      {children}
    </div>
  );
};

export default StatsCard;