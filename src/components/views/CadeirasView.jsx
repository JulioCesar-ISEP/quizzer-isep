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
      {/* Header Section */}
      <div className="ape-welcome-section">
        <h2 className="ape-welcome-title">Ape Level - Laboratório de Conhecimento</h2>
        <p className="ape-welcome-subtitle">Passe no teste. Suba de nível. Domine a faculdade.</p>
      </div>

      {/* Critical Gaps Warning */}
      {criticalGaps.length > 0 && (
        <div className="ape-critical-gaps">
          <div className="ape-critical-gaps-header">
            <AlertTriangle size={24} />
            <h3 className="ape-critical-gaps-title">Lacunas Críticas Detectadas</h3>
          </div>
          <div className="ape-gaps-list">
            {criticalGaps.slice(0, 3).map((gap, index) => (
              <div key={index} className="ape-gap-item">
                <span className="ape-gap-name">{gap.name}</span>
                <span className="ape-gap-severity">{gap.severity}</span>
                <button className="ape-fix-gap-btn">
                  Corrigir Lacuna
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Stats Overview */}
      <div className="ape-stats-overview">
        <div className="ape-stat-item">
          <div className="ape-stat-icon">
            <Trophy size={24} />
          </div>
          <div className="ape-stat-content">
            <span className="ape-stat-number">{Object.values(completedLevels).flat().length}</span>
            <span className="ape-stat-label">Níveis Dominados</span>
          </div>
        </div>
        <div className="ape-stat-item">
          <div className="ape-stat-icon">
            <Zap size={24} />
          </div>
          <div className="ape-stat-content">
            <span className="ape-stat-number">{totalXP}</span>
            <span className="ape-stat-label">Bananas Coletadas</span>
          </div>
        </div>
        <div className="ape-stat-item">
          <div className="ape-stat-icon">
            <Flame size={24} />
          </div>
          <div className="ape-stat-content">
            <span className="ape-stat-number">{maxStreak}</span>
            <span className="ape-stat-label">Sequência Máxima</span>
          </div>
        </div>
        <div className="ape-stat-item">
          <div className="ape-stat-icon">
            <TrendingUp size={24} />
          </div>
          <div className="ape-stat-content">
            <span className="ape-stat-number">{dailyStats.successRate}%</span>
            <span className="ape-stat-label">Eficiência no Lab</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="ape-action-buttons">
        <button onClick={onDownloadReport} className="ape-btn ape-btn-secondary">
          <Download size={20} />
          Relatório do Laboratório
        </button>
        <button onClick={onResetProgress} className="ape-btn ape-btn-danger">
          <RotateCw size={20} />
          Reiniciar Experimentos
        </button>
      </div>

      {/* Cadeiras Grid */}
      <div className="ape-cadeiras-section">
        <h3 className="ape-section-title">
          <Brain size={28} />
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
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onSelectCadeira(cadeira.id);
                  }
                }}
              >
                <div className="ape-cadeira-header">
                  <div className="ape-cadeira-icon">
                    {cadeira.icon === 'Cpu' ? <Cpu size={28} /> :
                     cadeira.icon === 'Code' ? <Code size={28} /> :
                     cadeira.icon === 'Brain' ? <Brain size={28} /> :
                     <FileText size={28} />}
                  </div>
                  {isFullyCompleted && (
                    <div className="ape-completion-badge" title="Conceito totalmente dominado">
                      <CheckCircle size={20} />
                    </div>
                  )}
                </div>
                
                <div className="ape-cadeira-content">
                  <h4 className="ape-cadeira-name">{cadeira.name}</h4>
                  <p className="ape-cadeira-desc">{cadeira.description}</p>
                  
                  <div className="ape-cadeira-meta">
                    <span className="ape-meta-item">
                      <FileText size={16} />
                      {totalLevelsCount} nó{totalLevelsCount !== 1 ? 's' : ''}
                    </span>
                    <span className="ape-meta-item">
                      <Zap size={16} />
                      +{cadeira.xp} bananas
                    </span>
                  </div>
                  
                  <div className="ape-progress-info">
                    <div className="ape-progress-header">
                      <span className="ape-progress-text">
                        {completedLevelsCount}/{totalLevelsCount} nós dominados
                      </span>
                      <span className="ape-progress-percentage">
                        {Math.round(progressPercentage)}%
                      </span>
                    </div>
                    <div className="ape-progress-bar">
                      <div
                        className="ape-progress-fill"
                        style={{ width: `${progressPercentage}%` }}
                        aria-label={`Progresso: ${Math.round(progressPercentage)}% dominado`}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="ape-cadeira-footer">
                  <button className="ape-start-btn" aria-label={`Explorar ${cadeira.name}`}>
                    {isFullyCompleted ? 'Revisar Nós' : 'Iniciar Lab'}
                    <ArrowRight size={16} />
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