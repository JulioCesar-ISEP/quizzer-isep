import React from 'react';
import { ChevronLeft, Code, Brain, Cpu, FileText, CheckCircle, ArrowRight, Zap, Trophy, Target, Flame, BookOpen, GitBranch, Sparkles } from 'lucide-react';
import '../../styles/components/LevelsView.css';

const LevelsView = ({ 
  cadeira, 
  completedLevels, 
  onStartLevel, 
  onOpenKnowledgeTree,
  onBack, 
  score, 
  totalXP, 
  maxStreak 
}) => {
  if (!cadeira) return null;

  const getRankByLevel = (levelIndex) => {
    const ranks = [
      'Macaco-Prego',
      'Chimpanzé', 
      'Gorila',
      'Orangotango',
      'Homo Sapiens'
    ];
    return ranks[levelIndex] || ranks[0];
  };

  return (
    <div className="ape-levels-content">
      {/* Breadcrumb Navigation */}
      <div className="ape-breadcrumb">
        <button onClick={onBack} className="ape-back-btn">
          <ChevronLeft size={20} />
          Voltar à Árvore
        </button>
        <h2 className="ape-cadeira-title">{cadeira.name}</h2>
      </div>

      {/* Stats Overview */}
      <div className="ape-levels-stats">
        <div className="ape-level-stat-item">
          <div className="ape-level-stat-icon">
            <Zap size={20} />
          </div>
          <div className="ape-level-stat-content">
            <span className="ape-level-stat-number">{totalXP}</span>
            <span className="ape-level-stat-label">Bananas Totais</span>
          </div>
        </div>
        <div className="ape-level-stat-item">
          <div className="ape-level-stat-icon">
            <Trophy size={20} />
          </div>
          <div className="ape-level-stat-content">
            <span className="ape-level-stat-number">{completedLevels.length}/{cadeira.levels.length}</span>
            <span className="ape-level-stat-label">Níveis Dominados</span>
          </div>
        </div>
        <div className="ape-level-stat-item">
          <div className="ape-level-stat-icon">
            <Target size={20} />
          </div>
          <div className="ape-level-stat-content">
            <span className="ape-level-stat-number">{score}</span>
            <span className="ape-level-stat-label">Precisão Atual</span>
          </div>
        </div>
        <div className="ape-level-stat-item">
          <div className="ape-level-stat-icon">
            <Flame size={20} />
          </div>
          <div className="ape-level-stat-content">
            <span className="ape-level-stat-number">{maxStreak}</span>
            <span className="ape-level-stat-label">Sequência Máxima</span>
          </div>
        </div>
      </div>

      {/* Levels Section */}
      <div className="ape-levels-section">
        <div className="ape-levels-header">
          <h3 className="ape-levels-title">
            <Sparkles size={28} />
            Laboratório de Níveis
          </h3>
          <p className="ape-levels-subtitle">
            Escolhe entre enfrentar o Desafio do Laboratório ou explorar a Árvore do Conhecimento
          </p>
        </div>
        
        <div className="ape-levels-grid">
          {cadeira.levels.map((level, index) => {
            const isCompleted = completedLevels.includes(level.id);
            const currentRank = getRankByLevel(index);
            
            return (
              <div
                key={level.id}
                className={`ape-level-card ${isCompleted ? 'completed' : ''}`}
              >
                {/* Rank Badge */}
                <div className="ape-rank-badge">
                  Rank: {currentRank}
                </div>

                <div className="ape-level-header">
                  <div className="ape-level-icon">
                    {level.icon === 'Code' ? <Code size={32} /> :
                     level.icon === 'Brain' ? <Brain size={32} /> :
                     level.icon === 'Cpu' ? <Cpu size={32} /> :
                     <FileText size={32} />}
                  </div>
                  {isCompleted && (
                    <div className="ape-level-completion-badge" title="Nível totalmente dominado">
                      <CheckCircle size={20} />
                    </div>
                  )}
                </div>

                <div className="ape-level-content">
                  <h4 className="ape-level-name">{level.name}</h4>
                  <p className="ape-level-desc">{level.description}</p>
                  
                  <div className="ape-level-meta">
                    <span className="ape-level-meta-item">
                      <FileText size={16} />
                      {level.exercises.length} desafios
                    </span>
                    <span className="ape-level-meta-item">
                      <Zap size={16} />
                      +{level.xp} bananas
                    </span>
                  </div>
                  
                  {/* Bifurcação: Prova vs Árvore do Conhecimento */}
                  <div className="ape-level-options">
                    {/* Opção 1: Desafio do Laboratório */}
                    <div className="ape-option-card">
                      <div className="ape-option-header">
                        <div className="ape-option-icon">
                          <BookOpen size={24} />
                        </div>
                        <h5 className="ape-option-title">Desafio do Lab</h5>
                      </div>
                      <p className="ape-option-desc">
                        Testa os teus conhecimentos em condições de laboratório com exercícios práticos e cronometrados
                      </p>
                      <button 
                        onClick={() => onStartLevel(level.id)}
                        className="ape-option-btn primary"
                      >
                        {isCompleted ? 'Refazer Desafio' : 'Iniciar Lab'}
                        <ArrowRight size={16} />
                      </button>
                    </div>
                    
                    {/* Opção 2: Árvore do Conhecimento */}
                    <div className="ape-option-card">
                      <div className="ape-option-header">
                        <div className="ape-option-icon">
                          <GitBranch size={24} />
                        </div>
                        <h5 className="ape-option-title">Árvore do Conhecimento</h5>
                      </div>
                      <p className="ape-option-desc">
                        Explora os conceitos de forma hierárquica e interativa, identificando lacunas no teu conhecimento
                      </p>
                      <button 
                        onClick={() => onOpenKnowledgeTree(level.id)}
                        className="ape-option-btn secondary"
                      >
                        Explorar Nós
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
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