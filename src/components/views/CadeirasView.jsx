import React from 'react';
import { Cpu, Code, Brain, FileText, CheckCircle, Zap, ArrowRight, Download, RotateCw, Trophy, Flame, TrendingUp } from 'lucide-react';

const CadeirasView = ({ 
  cadeiras, 
  completedLevels, 
  totalXP, 
  maxStreak, 
  onSelectCadeira, 
  onDownloadReport, 
  onResetProgress,
  dailyStats 
}) => {
  return (
    <div className="main-content">
      <div className="welcome-section">
        <h2 className="welcome-title">Bem-vindo ao Quizzer ISEP</h2>
        <p className="welcome-subtitle">Melhora os teus conhecimentos através de quizzes interativos</p>
      </div>

      <div className="stats-overview">
        <div className="stat-item-overview">
          <Trophy className="stat-icon" />
          <div>
            <span className="stat-number">{Object.values(completedLevels).flat().length}</span>
            <span className="stat-label">Níveis Completos</span>
          </div>
        </div>
        <div className="stat-item-overview">
          <Zap className="stat-icon" />
          <div>
            <span className="stat-number">{totalXP}</span>
            <span className="stat-label">Total XP</span>
          </div>
        </div>
        <div className="stat-item-overview">
          <Flame className="stat-icon" />
          <div>
            <span className="stat-number">{maxStreak}</span>
            <span className="stat-label">Melhor Sequência</span>
          </div>
        </div>
        <div className="stat-item-overview">
          <TrendingUp className="stat-icon" />
          <div>
            <span className="stat-number">{dailyStats.successRate}%</span>
            <span className="stat-label">Taxa de Sucesso</span>
          </div>
        </div>
      </div>

      <div className="action-buttons-main">
        <button onClick={onDownloadReport} className="btn btn-secondary">
          <Download size={20} />
          Relatório Diário
        </button>
        <button onClick={onResetProgress} className="btn btn-danger">
          <RotateCw size={20} />
          Resetar Progresso
        </button>
      </div>

      <div className="cadeiras-section">
        <h3 className="section-title">Cadeiras Disponíveis</h3>
        <div className="cadeiras-grid">
          {cadeiras.map(cadeira => {
            const completedLevelsCount = completedLevels[cadeira.id]?.length || 0;
            const totalLevelsCount = cadeira.levels.length;
            const isFullyCompleted = completedLevelsCount === totalLevelsCount;

            return (
              <div
                key={cadeira.id}
                className={`cadeira-card ${isFullyCompleted ? 'completed' : ''}`}
                onClick={() => onSelectCadeira(cadeira.id)}
              >
                <div className="cadeira-header">
                  <div className="cadeira-icon">
                    {cadeira.icon === 'Cpu' ? <Cpu size={32} /> :
                      cadeira.icon === 'Code' ? <Code size={32} /> :
                        cadeira.icon === 'Brain' ? <Brain size={32} /> :
                          <FileText size={32} />}
                  </div>
                  {isFullyCompleted && (
                    <div className="completion-badge">
                      <CheckCircle size={20} />
                    </div>
                  )}
                </div>
                <div className="cadeira-content">
                  <h4 className="cadeira-name">{cadeira.name}</h4>
                  <p className="cadeira-desc">{cadeira.description}</p>
                  <div className="cadeira-meta">
                    <span className="meta-item">
                      <FileText size={16} />
                      {totalLevelsCount} níveis
                    </span>
                    <span className="meta-item">
                      <Zap size={16} />
                      +{cadeira.xp} XP
                    </span>
                  </div>
                  <div className="progress-info">
                    <span>{completedLevelsCount}/{totalLevelsCount} níveis completos</span>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${(completedLevelsCount / totalLevelsCount) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
                <div className="cadeira-footer">
                  <button className="start-btn">
                    {isFullyCompleted ? 'Ver Níveis' : 'Ver Níveis'}
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