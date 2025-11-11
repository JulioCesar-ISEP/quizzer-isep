import React, { useState, useEffect, useMemo } from 'react';
import { ChevronLeft, GitBranch, BookOpen, Target, Lightbulb, Code, Zap, Home, ArrowRight, CheckCircle, Minus, Plus, Banana } from 'lucide-react';

const KnowledgeTreeView = ({ 
  level, 
  cadeira, 
  onBack, 
  onStartQuiz,
  completedLevels 
}) => {
  const [expandedNodes, setExpandedNodes] = useState(new Set(['root']));
  const [collectedBananas, setCollectedBananas] = useState(new Set());
  const [collectionProgress, setCollectionProgress] = useState(0);
  const isLevelCompleted = completedLevels.includes(level?.id);

  // Função para obter a knowledge tree dos dados reais
  const getKnowledgeTreeData = () => {
    if (!level) return getEmptyKnowledgeTree();
    
    const treeData = level.KnowledgeTreeView;
    if (treeData) {
      return {
        conceptsCount: treeData.conceptsCount || 0,
        topicsCount: treeData.topicsCount || 0,
        examplesCount: treeData.examplesCount || 0,
        root: treeData.root || getEmptyRootNode(),
        source: 'KnowledgeTreeView'
      };
    }
    
    return getEmptyKnowledgeTree();
  };

  const getEmptyKnowledgeTree = () => ({
    conceptsCount: 0,
    topicsCount: 0,
    examplesCount: 0,
    root: getEmptyRootNode(),
    source: 'empty'
  });

  const getEmptyRootNode = () => ({
    id: 'root',
    type: 'topic',
    title: `Conceitos de ${level?.name || 'Nível'}`,
    description: `Estrutura de conhecimento para ${level?.name || 'este nível'}`,
    children: []
  });

  const knowledgeTree = useMemo(() => getKnowledgeTreeData(), [level]);

  // Calcular total de bananas
  const calculateTotalBananas = (node) => {
    let count = 0;
    if (node.type === 'concept' || node.type === 'example') count++;
    if (node.children) {
      node.children.forEach(child => count += calculateTotalBananas(child));
    }
    return count;
  };

  const totalBananas = useMemo(() => calculateTotalBananas(knowledgeTree.root), [knowledgeTree]);
  const collectedCount = collectedBananas.size;

  // Atualizar progresso
  useEffect(() => {
    const progress = totalBananas > 0 ? (collectedCount / totalBananas) * 100 : 0;
    setCollectionProgress(progress);
  }, [collectedCount, totalBananas]);

  const toggleNode = (nodeId) => {
    const newExpanded = new Set(expandedNodes);
    newExpanded.has(nodeId) ? newExpanded.delete(nodeId) : newExpanded.add(nodeId);
    setExpandedNodes(newExpanded);
  };

  const collectBanana = (nodeId) => {
    if (canCollectBanana(nodeId)) {
      setCollectedBananas(prev => new Set([...prev, nodeId]));
    }
  };

  const canCollectBanana = (nodeId) => {
    const findNode = (currentNode, targetId) => {
      if (currentNode.id === targetId) return currentNode;
      if (currentNode.children) {
        for (let child of currentNode.children) {
          const found = findNode(child, targetId);
          if (found) return found;
        }
      }
      return null;
    };

    const node = findNode(knowledgeTree.root, nodeId);
    if (!node) return false;

    const checkDependencies = (currentNode) => {
      if (!currentNode.children || currentNode.children.length === 0) return true;
      return currentNode.children.every(child => 
        collectedBananas.has(child.id) || checkDependencies(child)
      );
    };

    return checkDependencies(node);
  };

  const getNodeIcon = (type) => {
    switch (type) {
      case 'concept': return <Lightbulb size={16} />;
      case 'topic': return <BookOpen size={16} />;
      case 'example': return <Code size={16} />;
      case 'exercise': return <Target size={16} />;
      default: return <GitBranch size={16} />;
    }
  };

  const getNodeColor = (type) => {
    switch (type) {
      case 'concept': return '#3b82f6';
      case 'topic': return '#8b5cf6';
      case 'example': return '#10b981';
      case 'exercise': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  // RENDERIZAÇÃO SIMPLES - ESTILO GITHUB TIMELINE
  const renderTimelineTree = (node, depth = 0, index = 0) => {
    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = expandedNodes.has(node.id);
    const isCollectible = node.type === 'concept' || node.type === 'example';
    const isCollected = collectedBananas.has(node.id);
    const canCollect = isCollectible && !isCollected && canCollectBanana(node.id);
    const isAlternate = depth % 2 === 0;

    return (
      <div key={node.id} className={`timeline-item ${isAlternate ? 'left' : 'right'}`}>
        {/* Linha do tempo */}
        <div className="timeline-connector">
          <div className="timeline-dot"></div>
          {hasChildren && isExpanded && (
            <div className="timeline-branch"></div>
          )}
        </div>

        {/* Card do nó */}
        <div className={`timeline-card ${isCollected ? 'collected' : ''} ${canCollect ? 'collectible' : ''}`}>
          <div 
            className="card-content"
            onClick={() => hasChildren && toggleNode(node.id)}
          >
            <div className="card-header">
              <div className="node-icon" style={{ color: getNodeColor(node.type) }}>
                {getNodeIcon(node.type)}
              </div>
              <div className="node-title">
                <h4>{node.title}</h4>
                {isCollectible && (
                  <span className="knowledge-badge">
                    {isCollected ? '✅ Aprendido' : '🍌 Conhecimento'}
                  </span>
                )}
              </div>
              <div className="card-actions">
                {isCollectible && (
                  <div 
                    className={`banana ${isCollected ? 'collected' : ''} ${canCollect ? 'collectible' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (canCollect) collectBanana(node.id);
                    }}
                    title={isCollected ? "Conhecimento adquirido!" : canCollect ? "Clique para coletar" : "Complete os pré-requisitos"}
                  >
                    <Banana size={16} />
                  </div>
                )}
                
                {hasChildren && (
                  <div className="expand-toggle">
                    {isExpanded ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                )}
              </div>
            </div>
            
            {node.description && (
              <p className="node-description">{node.description}</p>
            )}
          </div>

          {/* Filhos - renderizados inline */}
          {hasChildren && isExpanded && (
            <div className="timeline-children">
              {node.children.map((child, childIndex) => 
                renderTimelineTree(child, depth + 1, childIndex)
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

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
                    ✅ {totalBananas} bananas de conhecimento disponíveis
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

        {/* Progresso de Coleção */}
        <div className="collection-progress">
          <div className="progress-header">
            <Banana size={20} />
            <span>Progresso da Colheita</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${collectionProgress}%` }}
            ></div>
          </div>
          <div className="progress-stats">
            {collectedCount} / {totalBananas} bananas coletadas
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

        {/* TIMELINE TREE */}
        <div className="knowledge-tree-container">
          <div className="tree-header">
            <h2>🌳 Linha do Conhecimento</h2>
            <p>
              Siga a linha do tempo do conhecimento - colete as bananas na ordem correta
            </p>
          </div>
          
          <div className="tree-content">
            {hasTreeContent ? (
              <div className="timeline-container">
                <div className="timeline-line"></div>
                <div className="timeline-tree">
                  {knowledgeTree.root.children && knowledgeTree.root.children.map((child, index) => 
                    renderTimelineTree(child, 0, index)
                  )}
                </div>
              </div>
            ) : (
              <div className="empty-tree-state">
                <Banana size={48} />
                <h3>Nenhuma árvore de conhecimento definida</h3>
                <p>Este nível ainda não tem uma estrutura de conhecimento organizada.</p>
              </div>
            )}
          </div>
        </div>

        {/* Legend */}
        <div className="tree-legend">
          <h4>Como colher conhecimento:</h4>
          <div className="legend-items">
            <div className="legend-item">
              <div className="banana collectible"><Banana size={16} /></div>
              <span>Pronto para colher</span>
            </div>
            <div className="legend-item">
              <div className="banana collected"><Banana size={16} /></div>
              <span>Conhecimento adquirido</span>
            </div>
            <div className="legend-item">
              <div className="banana"><Banana size={16} /></div>
              <span>Pré-requisitos pendentes</span>
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