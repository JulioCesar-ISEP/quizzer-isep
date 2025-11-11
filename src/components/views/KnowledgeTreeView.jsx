import React, { useState, useEffect } from 'react';
import { ChevronLeft, GitBranch, BookOpen, Target, Lightbulb, Code, Zap, Home, ArrowRight, CheckCircle, Minus, Plus } from 'lucide-react';

const KnowledgeTreeView = ({ 
  level, 
  cadeira, 
  onBack, 
  onStartQuiz,
  completedLevels 
}) => {
  const [expandedNodes, setExpandedNodes] = useState(new Set(['root']));
  const isLevelCompleted = completedLevels.includes(level?.id);

  // DEBUG: Verificar TODOS os dados do level
  useEffect(() => {
    console.log('=== KNOWLEDGE TREE DEBUG ===');
    console.log('Full Level object:', level);
    console.log('Level keys:', level ? Object.keys(level) : 'No level');
    console.log('KnowledgeTreeView prop:', level?.KnowledgeTreeView);
    console.log('Has KnowledgeTreeView:', !!level?.KnowledgeTreeView);
    console.log('======================');
  }, [level]);

  // Função para obter a knowledge tree dos dados reais
  const getKnowledgeTreeData = () => {
    if (!level) {
      return getEmptyKnowledgeTree();
    }

    // Os dados reais estão em level.KnowledgeTreeView (com V maiúsculo)
    const treeData = level.KnowledgeTreeView;
    
    if (treeData) {
      console.log('Found real KnowledgeTreeView data:', treeData);
      
      return {
        conceptsCount: treeData.conceptsCount || 0,
        topicsCount: treeData.topicsCount || 0,
        examplesCount: treeData.examplesCount || 0,
        root: treeData.root || getEmptyRootNode(),
        source: 'KnowledgeTreeView'
      };
    }
    
    // Se não encontrar dados, usar estrutura vazia em vez de fallback
    console.warn('No KnowledgeTreeView data found, using empty structure');
    return getEmptyKnowledgeTree();
  };

  // Estrutura vazia (não fallback)
  const getEmptyKnowledgeTree = () => {
    return {
      conceptsCount: 0,
      topicsCount: 0,
      examplesCount: 0,
      root: getEmptyRootNode(),
      source: 'empty'
    };
  };

  const getEmptyRootNode = () => {
    return {
      id: 'root',
      type: 'topic',
      title: `Conceitos de ${level?.name || 'Nível'}`,
      description: `Estrutura de conhecimento para ${level?.name || 'este nível'}`,
      children: []
    };
  };

  const knowledgeTree = getKnowledgeTreeData();

  if (!level) {
    return (
      <div className="knowledge-tree-screen">
        <div className="container">
          <div className="error-state">
            <GitBranch size={64} />
            <h2>Árvore do Conhecimento</h2>
            <p>Nível não encontrado</p>
            <button onClick={onBack} className="btn btn-primary">
              Voltar aos Níveis
            </button>
          </div>
        </div>
      </div>
    );
  }

  const toggleNode = (nodeId) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(nodeId)) {
      newExpanded.delete(nodeId);
    } else {
      newExpanded.add(nodeId);
    }
    setExpandedNodes(newExpanded);
  };

  const getNodeIcon = (type) => {
    switch (type) {
      case 'concept': return <Lightbulb size={18} className="concept-icon" />;
      case 'topic': return <BookOpen size={18} className="topic-icon" />;
      case 'example': return <Code size={18} className="example-icon" />;
      case 'exercise': return <Target size={18} className="exercise-icon" />;
      default: return <GitBranch size={18} />;
    }
  };

  const getNodeColor = (type) => {
    switch (type) {
      case 'concept': return 'var(--primary)';
      case 'topic': return 'var(--purple)';
      case 'example': return 'var(--success)';
      case 'exercise': return 'var(--warning)';
      default: return 'var(--text-primary)';
    }
  };

  const renderTreeNode = (node, depth = 0) => {
    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = expandedNodes.has(node.id);
    const isRoot = depth === 0;
    
    return (
      <div key={node.id} className="tree-node">
        <div 
          className={`node-content ${hasChildren ? 'has-children' : ''} ${isExpanded ? 'expanded' : ''} ${isRoot ? 'root-node' : ''}`}
          style={{ marginLeft: `${depth * 24}px` }}
          onClick={() => hasChildren && toggleNode(node.id)}
        >
          <div className="node-icon" style={{ color: getNodeColor(node.type) }}>
            {getNodeIcon(node.type)}
          </div>
          
          <div className="node-text">
            <h4 className="node-title">{node.title}</h4>
            {node.description && (
              <p className="node-description">{node.description}</p>
            )}
          </div>
          
          {hasChildren && (
            <div className="expand-icon">
              {isExpanded ? <Minus size={16} /> : <Plus size={16} />}
            </div>
          )}
        </div>
        
        {hasChildren && isExpanded && (
          <div className="node-children">
            {node.children.map(child => renderTreeNode(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  const isUsingRealData = knowledgeTree.source === 'KnowledgeTreeView';
  const hasTreeContent = knowledgeTree.root.children && knowledgeTree.root.children.length > 0;

  return (
    <div className="knowledge-tree-screen">
      <div className="container">
        {/* Header */}
        <div className="knowledge-tree-header">
          <div className="breadcrumb">
            <button onClick={onBack} className="back-btn">
              <ChevronLeft size={20} />
              Voltar aos Níveis
            </button>
          </div>
          
          <div className="header-content">
            <div className="title-section">
              <div className="header-icon-container">
                <GitBranch size={32} className="header-icon" />
              </div>
              <div className="title-text">
                <h1>Árvore do Conhecimento</h1>
                <p className="subtitle">{level.name} - {cadeira.name}</p>
                {isUsingRealData ? (
                  <p style={{fontSize: '0.9rem', color: 'var(--success)', marginTop: '0.5rem'}}>
                    ✅ Dados reais carregados - {knowledgeTree.conceptsCount} conceitos, {knowledgeTree.topicsCount} tópicos, {knowledgeTree.examplesCount} exemplos
                  </p>
                ) : (
                  <p style={{fontSize: '0.9rem', color: 'var(--warning)', marginTop: '0.5rem'}}>
                    ⚠️ Nenhuma árvore de conhecimento definida para este nível
                  </p>
                )}
              </div>
            </div>
            
            {isLevelCompleted && (
              <div className="completion-badge-large">
                <CheckCircle size={20} />
                Nível Completado
              </div>
            )}
          </div>
        </div>

        {/* Stats Overview */}
        <div className="tree-stats">
          <div className="stat-card">
            <Lightbulb size={20} className="stat-icon concept" />
            <div className="stat-info">
              <span className="stat-number">{knowledgeTree.conceptsCount}</span>
              <span className="stat-label">Conceitos</span>
            </div>
          </div>
          <div className="stat-card">
            <BookOpen size={20} className="stat-icon topic" />
            <div className="stat-info">
              <span className="stat-number">{knowledgeTree.topicsCount}</span>
              <span className="stat-label">Tópicos</span>
            </div>
          </div>
          <div className="stat-card">
            <Code size={20} className="stat-icon example" />
            <div className="stat-info">
              <span className="stat-number">{knowledgeTree.examplesCount}</span>
              <span className="stat-label">Exemplos</span>
            </div>
          </div>
          <div className="stat-card">
            <Zap size={20} className="stat-icon xp" />
            <div className="stat-info">
              <span className="stat-number">+{level.xp}</span>
              <span className="stat-label">XP Disponível</span>
            </div>
          </div>
        </div>

        {/* Tree Navigation */}
        <div className="tree-navigation">
          <button 
            onClick={onStartQuiz}
            className="btn btn-primary quiz-btn"
          >
            <Target size={20} />
            Fazer Prova deste Nível
          </button>
        </div>

        {/* Knowledge Tree */}
        <div className="knowledge-tree-container">
          <div className="tree-header">
            <h2>Estrutura de Conhecimento</h2>
            <p>Explora os conceitos de forma hierárquica. Clica para expandir/colapsar.</p>
          </div>
          
          <div className="tree-content">
            {hasTreeContent ? (
              renderTreeNode(knowledgeTree.root)
            ) : (
              <div className="empty-tree-state">
                <GitBranch size={48} />
                <h3>Nenhuma árvore de conhecimento definida</h3>
                <p>Este nível ainda não tem uma estrutura de conhecimento organizada.</p>
                {isUsingRealData && (
                  <p style={{color: 'var(--warning)', marginTop: '1rem'}}>
                    ⚠️ Os dados existem mas a árvore está vazia
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Legend */}
        <div className="tree-legend">
          <h4>Legenda:</h4>
          <div className="legend-items">
            <div className="legend-item">
              <Lightbulb size={16} className="concept" />
              <span>Conceitos</span>
            </div>
            <div className="legend-item">
              <BookOpen size={16} className="topic" />
              <span>Tópicos</span>
            </div>
            <div className="legend-item">
              <Code size={16} className="example" />
              <span>Exemplos</span>
            </div>
            <div className="legend-item">
              <Target size={16} className="exercise" />
              <span>Exercícios</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <div className="action-buttons">
            <button onClick={onStartQuiz} className="btn btn-primary">
              <Target size={20} />
              Iniciar Prova
            </button>
            <button onClick={onBack} className="btn btn-secondary">
              <Home size={20} />
              Voltar aos Níveis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeTreeView;