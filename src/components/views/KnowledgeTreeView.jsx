import React, { useState, useEffect, useMemo, useRef, useLayoutEffect } from 'react';
import {
  ChevronLeft,
  Target,
  BookOpen,
  CheckCircle,
  Layers,
  GitBranch,
  BookOpen as BookIcon,
  Lightbulb,
  Home,
  Brain,
  Network
} from 'lucide-react';
import '../../styles/components/KnowledgeTreeView.css';

// ======================== FUNÇÕES AUXILIARES ========================
const getNodeDescription = (level) => {
  const descriptions = {
    1: 'Categoria Principal',
    2: 'Área de Conhecimento',
    3: 'Tópico Específico',
    4: 'Conceito Detalhado'
  };
  return descriptions[level] || 'Conceito';
};

const getStudyTime = (level) => {
  const times = { 1: '45min', 2: '30min', 3: '20min', 4: '15min' };
  return times[level] || '10min';
};

const getNodeIcon = (node) => {
  if (node.type === 'root') return <Home size={38} />;
  const icons = {
    1: <Layers size={26} />,
    2: <GitBranch size={24} />,
    3: <BookIcon size={22} />,
    4: <Lightbulb size={20} />
  };
  return icons[node.level] || <BookIcon size={22} />;
};

// ======================== COMPONENTE NÓ DA ÁRVORE ========================
const TreeNode = React.memo(({ node, nodeRefs, selectedNode, setSelectedNode, studyProgress }) => {
  return (
    <div className="tree-branch">
      <div
        ref={(el) => el && (nodeRefs.current[node.id] = el)}
        className={`flow-node level-${node.level} ${node.type === 'root' ? 'root-node' : ''} ${selectedNode?.id === node.id ? 'selected' : ''
          }`}
        onClick={() => setSelectedNode(node)}
      >
        <div className="node-header">
          {getNodeIcon(node)}
          <h4
            className="node-title"
            dangerouslySetInnerHTML={{ __html: node.title.replace(/<br\/?>/gi, '<br/>') }}
          />
        </div>
        <p className="node-description">{getNodeDescription(node.level)}</p>
        <div className="node-time">{getStudyTime(node.level)}</div>

        {studyProgress[node.id]?.studied && (
          <div className="studied-badge">
            <CheckCircle size={22} />
          </div>
        )}
      </div>

      {node.children.length > 0 && (
        <div className="children">
          {node.children.map((child) => (
            <TreeNode
              key={child.id}
              node={child}
              nodeRefs={nodeRefs}
              selectedNode={selectedNode}
              setSelectedNode={setSelectedNode}
              studyProgress={studyProgress}
            />
          ))}
        </div>
      )}
    </div>
  );
});

// ======================== COMPONENTE PRINCIPAL ========================
const KnowledgeTreeView = ({ level, onBack, onStartQuiz }) => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [studyProgress, setStudyProgress] = useState({});
  const [view, setView] = useState('diagram');

  const flowchartRef = useRef(null);
  const nodeRefs = useRef({});

  // ======================== MONTAGEM DA ÁRVORE ========================
  const knowledgeTree = useMemo(() => {
    if (!level?.KnowledgeTreeView) return null;

    const treeData = level.KnowledgeTreeView;
    const nodeMap = {};
    const roots = [];

    Object.entries(treeData.nodes).forEach(([id, data]) => {
      nodeMap[id] = {
        id,
        title: data.label,
        level: data.level,
        type: data.type || 'normal',
        parentId: data.parent || null,
        children: [],
      };
      if (!data.parent) roots.push(nodeMap[id]);
    });

    Object.values(nodeMap).forEach((node) => {
      if (node.parentId && nodeMap[node.parentId]) {
        nodeMap[node.parentId].children.push(node);
      }
    });

    const sortRecursive = (node) => {
      node.children.sort((a, b) => a.id.localeCompare(b.id));
      node.children.forEach(sortRecursive);
    };
    roots.forEach(sortRecursive);

    return {
      roots,
      nodeMap,
      title: treeData.title,
      crossEdges: treeData.crossConnections || [],
    };
  }, [level]);

  // ======================== PROGRESSO DE ESTUDO ========================
  const markAsStudied = (nodeId) => {
    setStudyProgress((prev) => ({
      ...prev,
      [nodeId]: { studied: true, lastStudied: new Date().toISOString() },
    }));
  };

  useEffect(() => {
    if (!knowledgeTree) return;
    const initial = {};
    Object.keys(knowledgeTree.nodeMap).forEach((id) => {
      initial[id] = { studied: false };
    });
    setStudyProgress(initial);
  }, [knowledgeTree]);

  const progressStats = useMemo(
    () => ({
      studied: Object.values(studyProgress).filter((p) => p.studied).length,
      total: knowledgeTree ? Object.keys(knowledgeTree.nodeMap).length : 0,
    }),
    [studyProgress, knowledgeTree]
  );

  // ======================== DESENHO DAS LINHAS (hierárquicas + cross) ========================
  const [lines, setLines] = useState([]);
  const [labels, setLabels] = useState([]);

  const calculateLines = () => {
    if (!flowchartRef.current || !knowledgeTree) return;

    const newLines = [];
    const newLabels = [];

    const addElbowLine = (fromId, toId, dash = false, color = '#94a3b8', label = null) => {
      const fromEl = nodeRefs.current[fromId];
      const toEl = nodeRefs.current[toId];
      if (!fromEl || !toEl) return;

      const pRect = fromEl.getBoundingClientRect();
      const cRect = toEl.getBoundingClientRect();
      const fRect = flowchartRef.current.getBoundingClientRect();

      let x1 = pRect.left + pRect.width / 2 - fRect.left;
      let y1 = pRect.bottom - fRect.top;
      let x2 = cRect.left + cRect.width / 2 - fRect.left;
      let y2 = cRect.top - fRect.top;

      const dy = y2 - y1;
      const offset = Math.max(60, Math.abs(dy) * 0.35);

      const d =
        dy >= 0
          ? `M ${x1} ${y1} L ${x1} ${y1 + offset} L ${x2} ${y2 - offset} L ${x2} ${y2}`
          : `M ${x1} ${y1} L ${x1} ${y1 - offset} L ${x2} ${y2 + offset} L ${x2} ${y2}`;

      newLines.push({ d, dash, color });

      if (label) {
        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2;
        newLabels.push({ x: midX, y: midY - 12, text: label, color });
      }
    };

    // Linhas hierárquicas
    const traverse = (node) => {
      node.children.forEach((child) => {
        addElbowLine(node.id, child.id);
        traverse(child);
      });
    };
    knowledgeTree.roots.forEach(traverse);

    // Cross connections
    knowledgeTree.crossEdges.forEach((edge) => {
      addElbowLine(edge.from, edge.to, true, edge.color || '#94a3b8', edge.label);
    });

    setLines(newLines);
    setLabels(newLabels);
  };

  useLayoutEffect(() => calculateLines(), [knowledgeTree, selectedNode]);

  useEffect(() => {
    const handler = () => calculateLines();
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [knowledgeTree]);

  // ======================== RENDER ========================
  return (
    <div className="knowledge-tree-container">
      {/* ==================== HEADER ==================== */}
      <div className="tree-header">
        <button onClick={onBack} className="back-button">
          <ChevronLeft size={20} /> Voltar
        </button>

        <div className="header-info">
          <div>
            <h2>{level?.name || knowledgeTree?.title}</h2>
            <span>{progressStats.studied}/{progressStats.total} conceitos estudados</span>
          </div>
        </div>

        <div className="view-controls">
          <button
            className={`view-button ${view === 'diagram' ? 'active' : ''}`}
            onClick={() => setView('diagram')}
          >
            <Network size={18} /> Diagrama
          </button>
          <button
            className={`view-button ${view === 'content' ? 'active' : ''}`}
            onClick={() => setView('content')}
            disabled={!selectedNode}
          >
            <BookOpen size={18} /> Conteúdo
          </button>
        </div>
      </div>

      {/* ==================== CONTEÚDO PRINCIPAL ==================== */}
      <div className="main-layout">
        {view === 'diagram' ? (
          <div className="diagram-container">
            <div className="flowchart" ref={flowchartRef}>
              <svg className="connections-svg">
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="10"
                    refX="9"
                    refY="3.5"
                    orient="auto"
                  >
                    <path d="M0,0 L10,3.5 L0,7 Z" fill="#94a3b8" />
                  </marker>
                </defs>

                {lines.map((line, i) => (
                  <path
                    key={`line-${i}`}
                    d={line.d}
                    stroke={line.color}
                    strokeWidth="2.5"
                    strokeDasharray={line.dash ? '8,5' : 'none'}
                    fill="none"
                    markerEnd="url(#arrowhead)"
                    opacity={line.dash ? 0.7 : 1}
                  />
                ))}

                {labels.map((lbl, i) => (
                  <g key={`label-${i}`}>
                    <rect
                      x={lbl.x - 50}
                      y={lbl.y - 18}
                      width="100"
                      height="24"
                      rx="12"
                      fill="#1e293b"
                      opacity="0.95"
                    />
                    <text
                      x={lbl.x}
                      y={lbl.y}
                      textAnchor="middle"
                      fill={lbl.color}
                      fontSize="12"
                      fontWeight="600"
                    >
                      {lbl.text}
                    </text>
                  </g>
                ))}
              </svg>

              <div className="tree-content">
                {knowledgeTree?.roots.map((root) => (
                  <TreeNode
                    key={root.id}
                    node={root}
                    nodeRefs={nodeRefs}
                    selectedNode={selectedNode}
                    setSelectedNode={setSelectedNode}
                    studyProgress={studyProgress}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : selectedNode ? (
          // ==================== VISÃO DE CONTEÚDO DO NÓ ====================
          <div className="node-content">
            <div className="content-header">
              <div className="content-icon">{getNodeIcon(selectedNode)}</div>
              <div className="content-title">
                <h1
                  dangerouslySetInnerHTML={{
                    __html: selectedNode.title.replace(/<br\/?>/gi, '<br/>'),
                  }}
                />
                <p>
                  {getNodeDescription(selectedNode.level)} • {getStudyTime(selectedNode.level)}
                </p>
              </div>
              <button
                className="action-button"
                onClick={() => markAsStudied(selectedNode.id)}
              >
                <CheckCircle size={20} />
                {studyProgress[selectedNode.id]?.studied ? 'Revisado' : 'Marcar como estudado'}
              </button>
            </div>

            {/* Aqui você pode colocar o conteúdo real do nó (markdown, vídeos, etc) */}
            <div className="content-body">
              <p>Conteúdo detalhado será carregado aqui...</p>
            </div>
          </div>
        ) : (
          <div className="placeholder">
            <Brain size={64} className="placeholder-icon" />
            <h2>Selecione um nó para ver os detalhes</h2>
            <p>Clique em qualquer cartão do diagrama</p>
          </div>
        )}
      </div>

      {/* ==================== BOTÃO QUIZ FIXO ==================== */}
      <div className="quiz-fab">
        <button onClick={onStartQuiz}>
          <Target size={28} />
        </button>
      </div>
    </div>
  );
};

export default KnowledgeTreeView;