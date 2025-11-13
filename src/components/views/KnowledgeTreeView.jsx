import React, { useState, useEffect, useMemo } from 'react';
import { ChevronLeft, Target, Home, BookOpen, Code, Lightbulb, Zap, CheckCircle, Lock, AlertCircle, HelpCircle, Shield, Users, Terminal } from 'lucide-react';
import '../../styles/components/KnowledgeTreeView.css';

const KnowledgeTreeView = ({ 
  level, 
  cadeira, 
  onBack, 
  onStartQuiz,
  completedLevels 
}) => {
  const [nodeStatus, setNodeStatus] = useState({});
  const [selectedNode, setSelectedNode] = useState(null);

  // Usar a knowledge tree real do nível
  const knowledgeTree = useMemo(() => {
    if (!level || !level.KnowledgeTreeView) return null;
    return level.KnowledgeTreeView;
  }, [level]);

  // Calcular status dos nós baseado na estrutura real
  useEffect(() => {
    if (!knowledgeTree) return;

    const calculateNodeStatus = () => {
      const status = {};
      const completedNodes = new Set();

      // Função recursiva para processar a árvore
      const processNode = (node, depth = 0, parentCompleted = true) => {
        const isRoot = node.id === 'root';
        
        if (isRoot) {
          status[node.id] = 'available';
          completedNodes.add(node.id);
        } else {
          // Status baseado em pré-requisitos (profundidade)
          if (depth === 1) {
            // Primeiro nível abaixo da raiz - sempre disponível
            status[node.id] = 'available';
            completedNodes.add(node.id);
          } else if (depth === 2) {
            // Segundo nível - disponível se o pai estiver completo
            status[node.id] = parentCompleted ? 'available' : 'locked';
            if (parentCompleted) completedNodes.add(node.id);
          } else {
            // Níveis mais profundos - lógica mais complexa
            status[node.id] = parentCompleted ? 
              (Math.random() > 0.3 ? 'completed' : 'available') : 'locked';
          }
        }

        // Processar filhos recursivamente
        if (node.children) {
          const currentCompleted = status[node.id] === 'completed' || status[node.id] === 'available';
          node.children.forEach(child => processNode(child, depth + 1, currentCompleted));
        }
      };

      processNode(knowledgeTree.root);
      
      // Marcar alguns nós como críticos para demonstração
      Object.keys(status).forEach(nodeId => {
        if (status[nodeId] === 'available' && Math.random() > 0.7) {
          status[nodeId] = 'critical';
        }
      });

      return status;
    };

    setNodeStatus(calculateNodeStatus());
  }, [knowledgeTree]);

  const getNodeIcon = (type) => {
    switch (type) {
      case 'topic': return <BookOpen size={20} />;
      case 'concept': return <Lightbulb size={20} />;
      case 'example': return <Code size={20} />;
      default: return <HelpCircle size={20} />;
    }
  };

  const getNodeStatusIcon = (status) => {
    switch (status) {
      case 'locked': return <Lock size={14} />;
      case 'available': return <HelpCircle size={14} />;
      case 'critical': return <AlertCircle size={14} />;
      case 'completed': return <CheckCircle size={14} />;
      default: return <HelpCircle size={14} />;
    }
  };

  const getStatusTooltip = (status, node) => {
    switch (status) {
      case 'locked':
        return '🔒 Complete os conceitos anteriores';
      case 'available':
        return '📚 Conceito disponível para estudo';
      case 'critical':
        return '⚠️ Prioridade máxima! Revisa este conceito';
      case 'completed':
        return '✅ Conceito dominado!';
      default:
        return 'Conceito disponível para estudo';
    }
  };

  const handleNodeClick = (node, status) => {
    if (status === 'locked') return;
    setSelectedNode(node);
  };

  // Função recursiva para renderizar a árvore vertical bottom-up
  const renderVerticalTree = (node, depth = 0) => {
    const status = nodeStatus[node.id] || 'locked';
    const hasChildren = node.children && node.children.length > 0;

    return (
      <div key={node.id} className="ape-tree-level">
        {/* Nó atual */}
        <div className="ape-node-container">
          <div
            className={`ape-node ${status}`}
            onClick={() => handleNodeClick(node, status)}
          >
            {/* Status Icon */}
            <div className="ape-node-status">
              {getNodeStatusIcon(status)}
            </div>

            {/* Node Content */}
            <div className="ape-node-content">
              <div className="ape-node-icon">
                {getNodeIcon(node.type)}
              </div>
              <div className="ape-node-title">
                {node.title}
              </div>
            </div>

            {/* Tooltip */}
            <div className="ape-node-tooltip">
              {getStatusTooltip(status, node)}
            </div>
          </div>
        </div>

        {/* Filhos - renderizados acima (bottom-up) */}
        {hasChildren && (
          <div className="ape-children-level">
            {node.children.map(child => renderVerticalTree(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  const calculateProgressStats = () => {
    if (!nodeStatus) return { locked: 0, available: 0, critical: 0, completed: 0 };

    const stats = { locked: 0, available: 0, critical: 0, completed: 0 };
    Object.values(nodeStatus).forEach(status => {
      stats[status]++;
    });

    return stats;
  };

  const progressStats = calculateProgressStats();
  const totalNodes = Object.keys(nodeStatus).length;
  const completionPercentage = totalNodes > 0 ? (progressStats.completed / totalNodes) * 100 : 0;

  if (!level || !knowledgeTree) {
    return (
      <div className="ape-knowledge-tree-screen">
        <div className="ape-tree-header">
          <div className="ape-breadcrumb">
            <button onClick={onBack} className="ape-back-btn">
              <ChevronLeft size={20} />
              Voltar aos Níveis
            </button>
          </div>
          <div className="ape-empty-tree">
            <div className="ape-empty-icon">🌳</div>
            <h2 className="ape-empty-title">Árvore do Conhecimento</h2>
            <p>Nível não encontrado ou sem dados estruturados</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="ape-knowledge-tree-screen">
      {/* Header */}
      <div className="ape-tree-header">
        <div className="ape-breadcrumb">
          <button onClick={onBack} className="ape-back-btn">
            <ChevronLeft size={20} />
            Voltar à Árvore
          </button>
        </div>

        <div className="ape-header-content">
          <div className="ape-title-section">
            <div className="ape-header-icon-container">
              <Terminal size={32} />
            </div>
            <div className="ape-title-text">
              <h1>Árvore do Conhecimento</h1>
              <p className="ape-subtitle">
                {level.name} • {cadeira.name}
              </p>
              <div style={{ fontSize: '0.9rem', color: '#94a3b8', marginTop: '0.5rem' }}>
                <div>Progresso: {Math.round(completionPercentage)}% completo</div>
                <div>
                  Conceitos: {knowledgeTree.conceptsCount} • 
                  Tópicos: {knowledgeTree.topicsCount} • 
                  Exemplos: {knowledgeTree.examplesCount}
                </div>
              </div>
            </div>
          </div>

          {completedLevels.includes(level?.id) && (
            <div className="ape-level-completed-badge">
              <CheckCircle size={20} />
              Nível Dominado
            </div>
          )}
        </div>
      </div>

      {/* Progress Overview */}
      <div className="ape-progress-overview">
        <div className="ape-progress-stats">
          <div className="ape-progress-stat">
            <div className="ape-stat-icon locked">
              <Lock size={24} />
            </div>
            <div className="ape-stat-info">
              <span className="ape-stat-number">{progressStats.locked}</span>
              <span className="ape-stat-label">Bloqueados</span>
            </div>
          </div>

          <div className="ape-progress-stat">
            <div className="ape-stat-icon available">
              <HelpCircle size={24} />
            </div>
            <div className="ape-stat-info">
              <span className="ape-stat-number">{progressStats.available}</span>
              <span className="ape-stat-label">Disponíveis</span>
            </div>
          </div>

          <div className="ape-progress-stat">
            <div className="ape-stat-icon critical">
              <AlertCircle size={24} />
            </div>
            <div className="ape-stat-info">
              <span className="ape-stat-number">{progressStats.critical}</span>
              <span className="ape-stat-label">Críticos</span>
            </div>
          </div>

          <div className="ape-progress-stat">
            <div className="ape-stat-icon completed">
              <CheckCircle size={24} />
            </div>
            <div className="ape-stat-info">
              <span className="ape-stat-number">{progressStats.completed}</span>
              <span className="ape-stat-label">Completos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Árvore Vertical Bottom-Up */}
      <div className="ape-tree-container">
        <div className="ape-vertical-tree">
          {/* Renderizar a árvore de forma invertida (bottom-up) */}
          {knowledgeTree.root && renderVerticalTree(knowledgeTree.root)}
        </div>
      </div>

      {/* Painel de Detalhes */}
      <div className="ape-details-panel">
        {selectedNode ? (
          <div className="ape-node-details">
            <div className="ape-details-header">
              <div className="ape-details-icon">
                {getNodeIcon(selectedNode.type)}
              </div>
              <h3>{selectedNode.title}</h3>
              <div className={`ape-details-status ${nodeStatus[selectedNode.id]}`}>
                {getNodeStatusIcon(nodeStatus[selectedNode.id])}
              </div>
            </div>

            <div className="ape-details-content">
              <p className="ape-details-description">
                {selectedNode.description}
              </p>

              {/* Conteúdo específico baseado no tipo de nó */}
              {selectedNode.type === 'concept' && selectedNode.title.includes('rwx') && (
                <div className="ape-details-info">
                  <h4>🎯 Permissões Básicas:</h4>
                  <div className="ape-permissions-grid">
                    <div className="ape-permission-item">
                      <strong>r (read)</strong>
                      <span>Leitura</span>
                    </div>
                    <div className="ape-permission-item">
                      <strong>w (write)</strong>
                      <span>Escrita</span>
                    </div>
                    <div className="ape-permission-item">
                      <strong>x (execute)</strong>
                      <span>Execução</span>
                    </div>
                  </div>
                </div>
              )}

              {selectedNode.type === 'concept' && selectedNode.title.includes('chmod') && (
                <div className="ape-details-info">
                  <h4>📝 Sintaxe do Comando:</h4>
                  <code>chmod [permissões] [ficheiro]</code>
                  <p><strong>Exemplo:</strong> chmod 755 script.sh</p>
                </div>
              )}

              {selectedNode.type === 'example' && selectedNode.title.includes('chmod 644') && (
                <div className="ape-details-example">
                  <h4>📋 Exemplo Prático:</h4>
                  <code>chmod 644 ficheiro.txt</code>
                  <div className="ape-permission-breakdown">
                    <div><strong>6</strong> (proprietário): rw-</div>
                    <div><strong>4</strong> (grupo): r--</div>
                    <div><strong>4</strong> (outros): r--</div>
                  </div>
                </div>
              )}

              {selectedNode.type === 'concept' && selectedNode.title.includes('chown') && (
                <div className="ape-details-info">
                  <h4>👤 Alterar Proprietário:</h4>
                  <code>chown [utilizador]:[grupo] [ficheiro]</code>
                  <p><strong>Exemplo:</strong> chown joao:developers app.py</p>
                </div>
              )}

              {selectedNode.type === 'example' && selectedNode.title.includes('chown') && (
                <div className="ape-details-example">
                  <h4>📋 Exemplo Prático:</h4>
                  <code>chown joao:developers script.sh</code>
                  <p><strong>Resultado:</strong></p>
                  <ul>
                    <li>Proprietário: <strong>joao</strong></li>
                    <li>Grupo: <strong>developers</strong></li>
                    <li>Ficheiro: <strong>script.sh</strong></li>
                  </ul>
                </div>
              )}

              {selectedNode.type === 'concept' && selectedNode.title.includes('useradd') && (
                <div className="ape-details-info">
                  <h4>👥 Adicionar Utilizador:</h4>
                  <code>useradd [opções] [username]</code>
                  <p><strong>Exemplo:</strong> useradd -m -s /bin/bash joao</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="ape-no-selection">
            <Lightbulb size={48} />
            <h3>Seleciona um Conceito</h3>
            <p>Clique num nó da árvore para explorar o conhecimento</p>
          </div>
        )}
      </div>

      {/* Action Panel */}
      <div className="ape-action-panel">
        <div className="ape-action-buttons">
          <button 
            onClick={onStartQuiz}
            className="ape-tree-btn primary"
          >
            <Target size={20} />
            Iniciar Desafio do Lab
          </button>
          <button 
            onClick={onBack}
            className="ape-tree-btn secondary"
          >
            <Home size={20} />
            Voltar aos Níveis
          </button>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeTreeView;