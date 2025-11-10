import React from 'react';
import { ChevronLeft, Code, Brain, Cpu, FileText, CheckCircle, ArrowRight, Zap, Trophy, Target, Flame } from 'lucide-react';

const LevelsView = ({ 
  cadeira, 
  completedLevels, 
  onStartLevel, 
  onBack, 
  score, 
  totalXP, 
  maxStreak 
}) => {
  if (!cadeira) return null;

  return (
    <div className="main-content">
      <div className="breadcrumb">
        <button onClick={onBack} className="back-btn">
          <ChevronLeft size={20} />
          Voltar às Cadeiras
        </button>
        <h2 className="cadeira-title">{cadeira.name}</h2>
      </div>

      <div className="stats-overview">
        <div className="stat-item-overview">
          <Zap className="stat-icon" />
          <div>
            <span className="stat-number">{totalXP}</span>
            <span className="stat-label">Total XP</span>
          </div>
        </div>
        <div className="stat-item-overview">
          <Trophy className="stat-icon" />
          <div>
            <span className="stat-number">{completedLevels.length}/{cadeira.levels.length}</span>
            <span className="stat-label">Níveis Completos</span>
          </div>
        </div>
        <div className="stat-item-overview">
          <Target className="stat-icon" />
          <div>
            <span className="stat-number">{score}</span>
            <span className="stat-label">Pontuação Atual</span>
          </div>
        </div>
        <div className="stat-item-overview">
          <Flame className="stat-icon" />
          <div>
            <span className="stat-number">{maxStreak}</span>
            <span className="stat-label">Melhor Sequência</span>
          </div>
        </div>
      </div>

      <div className="levels-section">
        <h3 className="section-title">Seleciona um Nível</h3>
        <div className="levels-grid">
          {cadeira.levels.map(level => {
            const isCompleted = completedLevels.includes(level.id);
            return (
              <div
                key={level.id}
                className={`level-card ${isCompleted ? 'completed' : ''}`}
                onClick={() => onStartLevel(level.id)}
              >
                <div className="level-header">
                  <div className="level-icon">
                    {level.icon === 'Code' ? <Code size={32} /> :
                      level.icon === 'Brain' ? <Brain size={32} /> :
                        level.icon === 'Cpu' ? <Cpu size={32} /> :
                          <FileText size={32} />}
                  </div>
                  {isCompleted && (
                    <div className="completion-badge">
                      <CheckCircle size={20} />
                    </div>
                  )}
                </div>
                <div className="level-content">
                  <h4 className="level-name">{level.name}</h4>
                  <p className="level-desc">{level.description}</p>
                  <div className="level-meta">
                    <span className="meta-item">
                      <FileText size={16} />
                      {level.exercises.length} exercícios
                    </span>
                    <span className="meta-item">
                      <Zap size={16} />
                      +{level.xp} XP
                    </span>
                  </div>
                </div>
                <div className="level-footer">
                  <button className="start-btn">
                    {isCompleted ? 'Refazer' : 'Iniciar'}
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

export default LevelsView;