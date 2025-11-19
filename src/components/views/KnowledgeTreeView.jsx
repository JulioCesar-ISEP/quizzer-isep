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
  Network,
  X
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import mermaid from 'mermaid';
import 'katex/dist/katex.min.css';

import '../../styles/components/KnowledgeTreeView.css';

// ======================== FUNÇÕES AUXILIARES ========================
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

// ======================== COMPONENTE NÓ ========================
const TreeNode = React.memo(({ node, nodeRefs, onNodeClick, selectedNode, studyProgress }) => {
  const isContentNode = node.type === 'CONTENT';

  return (
    <div className="tree-branch">
      <div
        ref={(el) => el && (nodeRefs.current[node.id] = el)}
        className={`flow-node level-${node.level} ${node.type === 'root' ? 'root-node' : ''} ${
          selectedNode?.id === node.id ? 'selected' : ''
        } ${isContentNode ? 'content-node' : ''}`}
        onClick={() => onNodeClick(node)}
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

        {isContentNode && (
          <div className="content-indicator">
            <BookOpen size={16} />
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
              onNodeClick={onNodeClick}
              selectedNode={selectedNode}
              studyProgress={studyProgress}
            />
          ))}
        </div>
      )}
    </div>
  );
});

// ======================== MODAL DE CONTEÚDO CORRIGIDO ========================
const ContentModal = ({ node, onClose, onMarkAsStudied, isStudied }) => {
  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Inicializa o Mermaid
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'dark',
      securityLevel: 'loose',
      fontFamily: 'inherit',
      flowchart: { 
        htmlLabels: true,
        curve: 'basis'
      },
    });
  }, []);

  // Renderiza diagramas Mermaid
  useEffect(() => {
    if (node?.content) {
      setTimeout(() => {
        mermaid.contentLoaded();
        // Renderiza apenas elementos mermaid que ainda não foram processados
        const mermaidElements = document.querySelectorAll('.mermaid:not([data-processed])');
        mermaidElements.forEach((element, index) => {
          try {
            const code = element.textContent.trim();
            mermaid.render(`mermaid-${Date.now()}-${index}`, code, (svgCode) => {
              element.innerHTML = svgCode;
              element.setAttribute('data-processed', 'true');
            });
          } catch (error) {
            console.error('Mermaid rendering error:', error);
            element.innerHTML = `<div style="color: #ef4444; padding: 1rem; text-align: center;">
              ❌ Erro ao renderizar diagrama Mermaid
            </div>`;
            element.setAttribute('data-processed', 'true');
          }
        });
      }, 500);
    }
  }, [node?.content]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 dangerouslySetInnerHTML={{ __html: node.title }} />
          <button onClick={onClose} className="modal-close">
            <X size={28} />
          </button>
        </div>

        <div className="modal-body">
          {node.content ? (
            <ReactMarkdown
              remarkPlugins={[remarkGfm, remarkMath]}
              rehypePlugins={[rehypeKatex, rehypeRaw]}
              components={{
                // PARÁGRAFO CORRIGIDO - evita div dentro de p
                p: ({ children }) => {
                  // Se contiver apenas um iframe, renderiza sem p
                  const childrenArray = React.Children.toArray(children);
                  if (childrenArray.some(child => 
                    React.isValidElement(child) && 
                    (child.props?.src?.includes('youtube.com') || child.type === 'iframe')
                  )) {
                    return <>{children}</>;
                  }
                  return <p className="content-paragraph">{children}</p>;
                },

                // MERMAID CORRIGIDO
                code({ node, inline, className, children, ...props }) {
                  const match = /language-mermaid/.exec(className || '');
                  if (match) {
                    return (
                      <div className="mermaid-container">
                        <pre className="mermaid-source" style={{ display: 'none' }}>
                          {String(children).trim()}
                        </pre>
                        <div className="mermaid">
                          {String(children).trim()}
                        </div>
                        <div className="mermaid-caption">
                          Diagrama Mermaid - Role para visualizar completamente
                        </div>
                      </div>
                    );
                  }

                  // CÓDIGO NORMAL
                  const isCodeBlock = !inline && className;
                  if (isCodeBlock) {
                    return (
                      <div className="code-block-container">
                        <pre className="code-block">
                          <code className={className} {...props}>
                            {children}
                          </code>
                        </pre>
                        <div className="code-caption">
                          Bloco de código - Role horizontalmente para visualizar
                        </div>
                      </div>
                    );
                  }

                  return (
                    <code className="inline-code" {...props}>
                      {children}
                    </code>
                  );
                },

                // IMAGENS CORRIGIDAS
                img({ src, alt }) {
                  return (
                    <div className="image-container">
                      <img
                        src={src}
                        alt={alt || 'Imagem do conteúdo'}
                        className="content-image"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      <div className="image-fallback" style={{display: 'none'}}>
                        🖼️ {alt || 'Imagem não disponível'}
                      </div>
                      {alt && <div className="image-caption">{alt}</div>}
                    </div>
                  );
                },

                // YOUTUBE CORRIGIDO
                iframe({ src, title, ...props }) {
                  if (src?.includes('youtube.com') || src?.includes('youtu.be')) {
                    return (
                      <div className="video-container">
                        <iframe
                          src={src}
                          title={title || 'Vídeo do YouTube'}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="youtube-iframe"
                          {...props}
                        />
                        <div className="video-caption">
                          {title || 'Vídeo incorporado do YouTube'}
                        </div>
                      </div>
                    );
                  }
                  return <iframe src={src} title={title} {...props} />;
                },

                // TABELAS
                table({ children }) {
                  return (
                    <div className="table-container">
                      <table className="content-table">
                        {children}
                      </table>
                    </div>
                  );
                },

                // HEADERS
                h1({ children }) { return <h1 className="content-h1">{children}</h1>; },
                h2({ children }) { return <h2 className="content-h2">{children}</h2>; },
                h3({ children }) { return <h3 className="content-h3">{children}</h3>; },

                // LINKS
                a({ href, children }) {
                  return (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="content-link">
                      {children}
                    </a>
                  );
                }
              }}
            >
              {node.content}
            </ReactMarkdown>
          ) : (
            <div className="no-content">
              <p>📝 Conteúdo em desenvolvimento...</p>
              <small>Esta seção estará disponível em breve</small>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button 
            className={`action-button ${isStudied ? 'studied' : 'not-studied'}`}
            onClick={() => onMarkAsStudied(node.id)}
          >
            <CheckCircle size={20} />
            {isStudied ? '✅ Revisado' : '📚 Marcar como estudado'}
          </button>
        </div>
      </div>
    </div>
  );
};
// ======================== COMPONENTE PRINCIPAL ========================
const KnowledgeTreeView = ({ level, onBack, onStartQuiz }) => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [modalNode, setModalNode] = useState(null);
  const [studyProgress, setStudyProgress] = useState({});
  const flowchartRef = useRef(null);
  const nodeRefs = useRef({});

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
        content: data.content || '',
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

  const handleNodeClick = (node) => {
    setSelectedNode(node);
    if (node.type === 'CONTENT') {
      setModalNode(node);
    }
  };

  // ======================== LINHAS ========================
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

    const traverse = (node) => {
      node.children.forEach((child) => {
        addElbowLine(node.id, child.id);
        traverse(child);
      });
    };
    knowledgeTree.roots.forEach(traverse);

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

  return (
    <div className="knowledge-tree-container">
      {/* HEADER */}
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
          <button className="view-button active">
            <Network size={18} /> Diagrama
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="main-layout">
        <div className="diagram-container">
          <div className="flowchart" ref={flowchartRef}>
            <svg className="connections-svg">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3.5" orient="auto">
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
                  <rect x={lbl.x - 50} y={lbl.y - 18} width="100" height="24" rx="12" fill="#1e293b" opacity="0.95" />
                  <text x={lbl.x} y={lbl.y} textAnchor="middle" fill={lbl.color} fontSize="12" fontWeight="600">
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
                  onNodeClick={handleNodeClick}
                  selectedNode={selectedNode}
                  studyProgress={studyProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {modalNode && (
        <ContentModal
          node={modalNode}
          onClose={() => setModalNode(null)}
          onMarkAsStudied={markAsStudied}
          isStudied={!!studyProgress[modalNode.id]?.studied}
        />
      )}

      {/* QUIZ FAB */}
      <div className="quiz-fab">
        <button onClick={onStartQuiz}>
          <Target size={28} />
        </button>
      </div>
    </div>
  );
};

export default KnowledgeTreeView;