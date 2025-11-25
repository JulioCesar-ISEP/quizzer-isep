import React from 'react';
import { Cpu, Code, Brain, FileText, CheckCircle, Zap, ArrowRight, Download, RotateCw, Trophy, Flame, TrendingUp, AlertTriangle } from 'lucide-react';
import '../../styles/components/CadeirasView.css';

const CadeirasView = ({ 
  cadeiras, 
  completedLevels, 
  totalXP, 
  maxStreak, 
  onSelectCadeira, 
  onDownloadReport, 
  onResetProgress,
  dailyStats,
  criticalGaps = []
}) => {
  return (
    <div className="ape-main-content">
      {/* Header Compact */}
      <div className="ape-welcome-section">
        <h2 className="ape-welcome-title">Ape Level</h2>
        <p className="ape-welcome-subtitle">Passe no teste. Suba de nível. Domine a faculdade.</p>
      </div>

      {/* Critical Gaps - apenas se houver */}
      {criticalGaps.length > 0 && (
        <div className="ape-critical-gaps">
          <div className="ape-critical-gaps-header">
            <AlertTriangle size={18} />
            <h3>Lacunas Críticas Detectadas</h3>
          </div>
          <div className="ape-gaps-list">
            {criticalGaps.slice(0, 2).map((gap, index) => (
              <div key={index} className="ape-gap-item">
                <span className="ape-gap-name">{gap.name}</span>
                <span className="ape-gap-severity">{gap.severity}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Stats Overview Compact */}
      <div className="ape-stats-overview">
        <div className="ape-stat-item">
          <Trophy size={18} />
          <div className="ape-stat-content">
            <span className="ape-stat-number">{Object.values(completedLevels).flat().length}</span>
            <span className="ape-stat-label">Níveis</span>
          </div>
        </div>
        <div className="ape-stat-item">
          <Zap size={18} />
          <div className="ape-stat-content">
            <span className="ape-stat-number">{totalXP}</span>
            <span className="ape-stat-label">Bananas</span>
          </div>
        </div>
        <div className="ape-stat-item">
          <Flame size={18} />
          <div className="ape-stat-content">
            <span className="ape-stat-number">{maxStreak}</span>
            <span className="ape-stat-label">Sequência</span>
          </div>
        </div>
        <div className="ape-stat-item">
          <TrendingUp size={18} />
          <div className="ape-stat-content">
            <span className="ape-stat-number">{dailyStats.successRate}%</span>
            <span className="ape-stat-label">Eficiência</span>
          </div>
        </div>
      </div>

      {/* Action Buttons Compact */}
      <div className="ape-action-buttons">
        <button onClick={onDownloadReport} className="ape-btn ape-btn-secondary">
          <Download size={16} />
          Relatório
        </button>
        <button onClick={onResetProgress} className="ape-btn ape-btn-danger">
          <RotateCw size={16} />
          Reiniciar
        </button>
      </div>

      {/* Cadeiras Grid Compact */}
      <div className="ape-cadeiras-section">
        <h3 className="ape-section-title">
          <Brain size={20} />
          Árvore do Conhecimento
        </h3>
        <div className="ape-cadeiras-grid">
          {cadeiras.map(cadeira => {
            const completedLevelsCount = completedLevels[cadeira.id]?.length || 0;
            const totalLevelsCount = cadeira.levels.length;
            const isFullyCompleted = completedLevelsCount === totalLevelsCount;
            const progressPercentage = (completedLevelsCount / totalLevelsCount) * 100;

            return (
              <div
                key={cadeira.id}
                className={`ape-cadeira-card ${isFullyCompleted ? 'completed' : ''}`}
                onClick={() => onSelectCadeira(cadeira.id)}
                role="button"
                tabIndex={0}
              >
                <div className="ape-cadeira-header">
                  <div className="ape-cadeira-icon">
                    {cadeira.icon === 'Cpu' ? <Cpu size={20} /> :
                     cadeira.icon === 'Code' ? <Code size={20} /> :
                     cadeira.icon === 'Brain' ? <Brain size={20} /> :
                     <FileText size={20} />}
                  </div>
                  {isFullyCompleted && (
                    <div className="ape-completion-badge">
                      <CheckCircle size={16} />
                    </div>
                  )}
                </div>
                
                <div className="ape-cadeira-content">
                  <h4 className="ape-cadeira-name">{cadeira.name}</h4>
                  <p className="ape-cadeira-desc">{cadeira.description}</p>
                  
                  <div className="ape-cadeira-meta">
                    <span className="ape-meta-item">
                      <FileText size={14} />
                      {totalLevelsCount} níveis
                    </span>
                  </div>
                  
                  <div className="ape-progress-info">
                    <div className="ape-progress-header">
                      <span className="ape-progress-text">
                        {completedLevelsCount}/{totalLevelsCount}
                      </span>
                      <span className="ape-progress-percentage">
                        {Math.round(progressPercentage)}%
                      </span>
                    </div>
                    <div className="ape-progress-bar">
                      <div
                        className="ape-progress-fill"
                        style={{ width: `${progressPercentage}%` }}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="ape-cadeira-footer">
                  <button className="ape-start-btn">
                    {isFullyCompleted ? 'Revisar' : 'Iniciar'}
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CadeirasView;