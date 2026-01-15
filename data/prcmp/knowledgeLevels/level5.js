// ===== IMPORTS DE CONTEÚDO NÍVEL 5 - SISTEMAS OPERACIONAIS AVANÇADO =====

// 1.1 Processamento Batch
import { F111 } from './content/level5/F111'  // Conceito de Batch Processing
import { F112 } from './content/level5/F112'  // Características e Evolução
import { F113 } from './content/level5/F113'  // CPU-bound vs I/O-bound
import { F114 } from './content/level5/F114'  // Multiprogramação em Batch
import { F115 } from './content/level5/F115'  // Aplicações Modernas

// 1.2 Time-Sharing
import { F121 } from './content/level5/F121'  // Conceito de Time-Sharing
import { F122 } from './content/level5/F122'  // Sistemas Interativos Multi-utilizador
import { F123 } from './content/level5/F123'  // Quantum e Preempção
import { F124 } from './content/level5/F124'  // Vantagens e Desvantagens

// 2.1 Sistemas de Tempo Real
import { F211 } from './content/level5/F211'  // Conceito de Tempo Real
import { F212 } from './content/level5/F212'  // Hard vs Soft Real-Time
import { F213 } from './content/level5/F213'  // Deadlines e Garantias Temporais
import { F214 } from './content/level5/F214'  // Aplicações e Exemplos

// 2.2 Escalonamento Tempo Real
import { F221 } from './content/level5/F221'  // Rate-Monotonic Scheduling
import { F222 } from './content/level5/F222'  // Earliest Deadline First (EDF)
import { F223 } from './content/level5/F223'  // Preempção em Tempo Real
import { F224 } from './content/level5/F224'  // Análise de Escalonabilidade

// 3.1 I/O e Dispositivos
import { F311 } from './content/level5/F311'  // Controladores de Dispositivo
import { F312 } from './content/level5/F312'  // Operações de I/O
import { F313 } from './content/level5/F313'  // Gestão Concorrente de Dispositivos
import { F314 } from './content/level5/F314'  // Spooling e Buffering

// 3.2 DMA e Acesso à Memória
import { F321 } from './content/level5/F321'  // DMA (Direct Memory Access)
import { F322 } from './content/level5/F322'  // Memory-Mapped I/O
import { F323 } from './content/level5/F323'  // Ciclo Stealing
import { F324 } from './content/level5/F324'  // Configuração e Controle DMA

// 4.1 Interrupções
import { F411 } from './content/level5/F411'  // Sistema de Interrupções
import { F412 } from './content/level5/F412'  // Tratamento de Interrupções
import { F413 } from './content/level5/F413'  // Interrupções de I/O
import { F414 } from './content/level5/F414'  // Prioridades de Interrupção

// 4.2 Polling vs Interrupções
import { F421 } from './content/level5/F421'  // I/O Programado (Polling)
import { F422 } from './content/level5/F422'  // I/O por Interrupções
import { F423 } from './content/level5/F423'  // Comparação de Eficiência
import { F424 } from './content/level5/F424'  // Casos de Uso e Trade-offs

// 5.1 Estados do Processo Avançado
import { F511 } from './content/level5/F511'  // Transições de Estado
import { F512 } from './content/level5/F512'  // Estados com I/O
import { F513 } from './content/level5/F513'  // Bloqueio e Desbloqueio
import { F514 } from './content/level5/F514'  // Estados em Sistemas Complexos

// 5.2 Escalonamento Avançado
import { F521 } from './content/level5/F521'  // Preemptivo vs Não-Preemptivo
import { F522 } from './content/level5/F522'  // Escalonamento em Sistemas Batch
import { F523 } from './content/level5/F523'  // Quantum e Time-Slice
import { F524 } from './content/level5/F524'  // Escalonamento Cooperativo

// 6.1 Gestão de Memória Avançada
import { F611 } from './content/level5/F611'  // Swapping
import { F612 } from './content/level5/F612'  // Swapping vs Paginação
import { F613 } from './content/level5/F613'  // Grau de Multiprogramação
import { F614 } from './content/level5/F614'  // Thrashing

// 6.2 Memória Virtual
import { F621 } from './content/level5/F621'  // Conceitos de Memória Virtual
import { F622 } from './content/level5/F622'  // Tabelas de Página
import { F623 } from './content/level5/F623'  // Page Faults
import { F624 } from './content/level5/F624'  // Algoritmos de Substituição

// 7.1 Proteção e Concorrência
import { F711 } from './content/level5/F711'  // Proteção de Memória
import { F712 } from './content/level5/F712'  // Acesso Concorrente a Dispositivos
import { F713 } from './content/level5/F713'  // Sincronização de I/O
import { F714 } from './content/level5/F714'  // Deadlocks em I/O

// 7.2 Performance e Otimização
import { F721 } from './content/level5/F721'  // Throughput vs Latência
import { F722 } from './content/level5/F722'  // Utilização de CPU
import { F723 } from './content/level5/F723'  // Overhead de Sistema
import { F724 } from './content/level5/F724'  // Balanceamento CPU/I/O


export const level5KnowledgeTree = {
  title: "Sistemas Operacionais Avançado - Mapa Completo de Conhecimento",
  description: "Diagrama hierárquico top-down do conhecimento em Sistemas Operacionais Avançado baseado no ex5",
  nodes: {
    // ===== NÍVEL 1: CATEGORIAS PRINCIPAIS =====
    "F": { id: "F", label: "Sistemas Operacionais Avançado", level: 1, type: "root" },
    
    // ===== CATEGORIAS PRINCIPAIS =====
    "F1": { id: "F1", label: "1. Sistemas Batch e Time-Sharing", level: 1, parent: "F" },
    "F2": { id: "F2", label: "2. Sistemas de Tempo Real", level: 1, parent: "F" },
    "F3": { id: "F3", label: "3. I/O e Dispositivos", level: 1, parent: "F" },
    "F4": { id: "F4", label: "4. Interrupções e Polling", level: 1, parent: "F" },
    "F5": { id: "F5", label: "5. Estados e Escalonamento", level: 1, parent: "F" },
    "F6": { id: "F6", label: "6. Gestão de Memória", level: 1, parent: "F" },
    "F7": { id: "F7", label: "7. Proteção e Performance", level: 1, parent: "F" },

    // ===== SUBDIAGRAMA 1: SISTEMAS BATCH E TIME-SHARING =====
    "F11": { id: "F11", label: "1.1 Processamento Batch", level: 2, parent: "F1" },
    "F12": { id: "F12", label: "1.2 Time-Sharing", level: 2, parent: "F1" },
    
    "F111": { id: "F111", label: "Conceito de Batch Processing", level: 3, type: 'CONTENT', parent: "F11", content: F111 },
    "F112": { id: "F112", label: "Características e Evolução", level: 3, type: 'CONTENT', parent: "F11", content: F112 },
    "F113": { id: "F113", label: "CPU-bound vs I/O-bound", level: 3, type: 'CONTENT', parent: "F11", content: F113 },
    "F114": { id: "F114", label: "Multiprogramação em Batch", level: 3, type: 'CONTENT', parent: "F11", content: F114 },
    "F115": { id: "F115", label: "Aplicações Modernas", level: 3, type: 'CONTENT', parent: "F11", content: F115 },
    
    "F121": { id: "F121", label: "Conceito de Time-Sharing", level: 3, type: 'CONTENT', parent: "F12", content: F121 },
    "F122": { id: "F122", label: "Sistemas Interativos Multi-utilizador", level: 3, type: 'CONTENT', parent: "F12", content: F122 },
    "F123": { id: "F123", label: "Quantum e Preempção", level: 3, type: 'CONTENT', parent: "F12", content: F123 },
    "F124": { id: "F124", label: "Vantagens e Desvantagens", level: 3, type: 'CONTENT', parent: "F12", content: F124 },

    // ===== SUBDIAGRAMA 2: SISTEMAS DE TEMPO REAL =====
    "F21": { id: "F21", label: "2.1 Sistemas de Tempo Real", level: 2, parent: "F2" },
    "F22": { id: "F22", label: "2.2 Escalonamento Tempo Real", level: 2, parent: "F2" },
    
    "F211": { id: "F211", label: "Conceito de Tempo Real", level: 3, type: 'CONTENT', parent: "F21", content: F211 },
    "F212": { id: "F212", label: "Hard vs Soft Real-Time", level: 3, type: 'CONTENT', parent: "F21", content: F212 },
    "F213": { id: "F213", label: "Deadlines e Garantias Temporais", level: 3, type: 'CONTENT', parent: "F21", content: F213 },
    "F214": { id: "F214", label: "Aplicações e Exemplos", level: 3, type: 'CONTENT', parent: "F21", content: F214 },
    
    "F221": { id: "F221", label: "Rate-Monotonic Scheduling", level: 3, type: 'CONTENT', parent: "F22", content: F221 },
    "F222": { id: "F222", label: "Earliest Deadline First (EDF)", level: 3, type: 'CONTENT', parent: "F22", content: F222 },
    "F223": { id: "F223", label: "Preempção em Tempo Real", level: 3, type: 'CONTENT', parent: "F22", content: F223 },
    "F224": { id: "F224", label: "Análise de Escalonabilidade", level: 3, type: 'CONTENT', parent: "F22", content: F224 },

    // ===== SUBDIAGRAMA 3: I/O E DISPOSITIVOS =====
    "F31": { id: "F31", label: "3.1 I/O e Dispositivos", level: 2, parent: "F3" },
    "F32": { id: "F32", label: "3.2 DMA e Acesso à Memória", level: 2, parent: "F3" },
    
    "F311": { id: "F311", label: "Controladores de Dispositivo", level: 3, type: 'CONTENT', parent: "F31", content: F311 },
    "F312": { id: "F312", label: "Operações de I/O", level: 3, type: 'CONTENT', parent: "F31", content: F312 },
    "F313": { id: "F313", label: "Gestão Concorrente de Dispositivos", level: 3, type: 'CONTENT', parent: "F31", content: F313 },
    "F314": { id: "F314", label: "Spooling e Buffering", level: 3, type: 'CONTENT', parent: "F31", content: F314 },
    
    "F321": { id: "F321", label: "DMA (Direct Memory Access)", level: 3, type: 'CONTENT', parent: "F32", content: F321 },
    "F322": { id: "F322", label: "Memory-Mapped I/O", level: 3, type: 'CONTENT', parent: "F32", content: F322 },
    "F323": { id: "F323", label: "Ciclo Stealing", level: 3, type: 'CONTENT', parent: "F32", content: F323 },
    "F324": { id: "F324", label: "Configuração e Controle DMA", level: 3, type: 'CONTENT', parent: "F32", content: F324 },

    // ===== SUBDIAGRAMA 4: INTERRUPÇÕES E POLLING =====
    "F41": { id: "F41", label: "4.1 Interrupções", level: 2, parent: "F4" },
    "F42": { id: "F42", label: "4.2 Polling vs Interrupções", level: 2, parent: "F4" },
    
    "F411": { id: "F411", label: "Sistema de Interrupções", level: 3, type: 'CONTENT', parent: "F41", content: F411 },
    "F412": { id: "F412", label: "Tratamento de Interrupções", level: 3, type: 'CONTENT', parent: "F41", content: F412 },
    "F413": { id: "F413", label: "Interrupções de I/O", level: 3, type: 'CONTENT', parent: "F41", content: F413 },
    "F414": { id: "F414", label: "Prioridades de Interrupção", level: 3, type: 'CONTENT', parent: "F41", content: F414 },
    
    "F421": { id: "F421", label: "I/O Programado (Polling)", level: 3, type: 'CONTENT', parent: "F42", content: F421 },
    "F422": { id: "F422", label: "I/O por Interrupções", level: 3, type: 'CONTENT', parent: "F42", content: F422 },
    "F423": { id: "F423", label: "Comparação de Eficiência", level: 3, type: 'CONTENT', parent: "F42", content: F423 },
    "F424": { id: "F424", label: "Casos de Uso e Trade-offs", level: 3, type: 'CONTENT', parent: "F42", content: F424 },

    // ===== SUBDIAGRAMA 5: ESTADOS E ESCALONAMENTO =====
    "F51": { id: "F51", label: "5.1 Estados do Processo Avançado", level: 2, parent: "F5" },
    "F52": { id: "F52", label: "5.2 Escalonamento Avançado", level: 2, parent: "F5" },
    
    "F511": { id: "F511", label: "Transições de Estado", level: 3, type: 'CONTENT', parent: "F51", content: F511 },
    "F512": { id: "F512", label: "Estados com I/O", level: 3, type: 'CONTENT', parent: "F51", content: F512 },
    "F513": { id: "F513", label: "Bloqueio e Desbloqueio", level: 3, type: 'CONTENT', parent: "F51", content: F513 },
    "F514": { id: "F514", label: "Estados em Sistemas Complexos", level: 3, type: 'CONTENT', parent: "F51", content: F514 },
    
    "F521": { id: "F521", label: "Preemptivo vs Não-Preemptivo", level: 3, type: 'CONTENT', parent: "F52", content: F521 },
    "F522": { id: "F522", label: "Escalonamento em Sistemas Batch", level: 3, type: 'CONTENT', parent: "F52", content: F522 },
    "F523": { id: "F523", label: "Quantum e Time-Slice", level: 3, type: 'CONTENT', parent: "F52", content: F523 },
    "F524": { id: "F524", label: "Escalonamento Cooperativo", level: 3, type: 'CONTENT', parent: "F52", content: F524 },

    // ===== SUBDIAGRAMA 6: GESTÃO DE MEMÓRIA =====
    "F61": { id: "F61", label: "6.1 Gestão de Memória Avançada", level: 2, parent: "F6" },
    "F62": { id: "F62", label: "6.2 Memória Virtual", level: 2, parent: "F6" },
    
    "F611": { id: "F611", label: "Swapping", level: 3, type: 'CONTENT', parent: "F61", content: F611 },
    "F612": { id: "F612", label: "Swapping vs Paginação", level: 3, type: 'CONTENT', parent: "F61", content: F612 },
    "F613": { id: "F613", label: "Grau de Multiprogramação", level: 3, type: 'CONTENT', parent: "F61", content: F613 },
    "F614": { id: "F614", label: "Thrashing", level: 3, type: 'CONTENT', parent: "F61", content: F614 },
    
    "F621": { id: "F621", label: "Conceitos de Memória Virtual", level: 3, type: 'CONTENT', parent: "F62", content: F621 },
    "F622": { id: "F622", label: "Tabelas de Página", level: 3, type: 'CONTENT', parent: "F62", content: F622 },
    "F623": { id: "F623", label: "Page Faults", level: 3, type: 'CONTENT', parent: "F62", content: F623 },
    "F624": { id: "F624", label: "Algoritmos de Substituição", level: 3, type: 'CONTENT', parent: "F62", content: F624 },

    // ===== SUBDIAGRAMA 7: PROTEÇÃO E PERFORMANCE =====
    "F71": { id: "F71", label: "7.1 Proteção e Concorrência", level: 2, parent: "F7" },
    "F72": { id: "F72", label: "7.2 Performance e Otimização", level: 2, parent: "F7" },
    
    "F711": { id: "F711", label: "Proteção de Memória", level: 3, type: 'CONTENT', parent: "F71", content: F711 },
    "F712": { id: "F712", label: "Acesso Concorrente a Dispositivos", level: 3, type: 'CONTENT', parent: "F71", content: F712 },
    "F713": { id: "F713", label: "Sincronização de I/O", level: 3, type: 'CONTENT', parent: "F71", content: F713 },
    "F714": { id: "F714", label: "Deadlocks em I/O", level: 3, type: 'CONTENT', parent: "F71", content: F714 },
    
    "F721": { id: "F721", label: "Throughput vs Latência", level: 3, type: 'CONTENT', parent: "F72", content: F721 },
    "F722": { id: "F722", label: "Utilização de CPU", level: 3, type: 'CONTENT', parent: "F72", content: F722 },
    "F723": { id: "F723", label: "Overhead de Sistema", level: 3, type: 'CONTENT', parent: "F72", content: F723 },
    "F724": { id: "F724", label: "Balanceamento CPU/I/O", level: 3, type: 'CONTENT', parent: "F72", content: F724 }
  },

  // ===== CONEXÕES HIERÁRQUICAS COMPLETAS =====
  hierarchicalEdges: [
    // Estrutura principal
    { from: "F", to: "F1", type: "solid" },
    { from: "F", to: "F2", type: "solid" },
    { from: "F", to: "F3", type: "solid" },
    { from: "F", to: "F4", type: "solid" },
    { from: "F", to: "F5", type: "solid" },
    { from: "F", to: "F6", type: "solid" },
    { from: "F", to: "F7", type: "solid" },
    
    // Sistemas Batch e Time-Sharing
    { from: "F1", to: "F11", type: "solid" },
    { from: "F1", to: "F12", type: "solid" },
    
    { from: "F11", to: "F111", type: "solid" },
    { from: "F11", to: "F112", type: "solid" },
    { from: "F11", to: "F113", type: "solid" },
    { from: "F11", to: "F114", type: "solid" },
    { from: "F11", to: "F115", type: "solid" },
    
    { from: "F12", to: "F121", type: "solid" },
    { from: "F12", to: "F122", type: "solid" },
    { from: "F12", to: "F123", type: "solid" },
    { from: "F12", to: "F124", type: "solid" },
    
    // Sistemas de Tempo Real
    { from: "F2", to: "F21", type: "solid" },
    { from: "F2", to: "F22", type: "solid" },
    
    { from: "F21", to: "F211", type: "solid" },
    { from: "F21", to: "F212", type: "solid" },
    { from: "F21", to: "F213", type: "solid" },
    { from: "F21", to: "F214", type: "solid" },
    
    { from: "F22", to: "F221", type: "solid" },
    { from: "F22", to: "F222", type: "solid" },
    { from: "F22", to: "F223", type: "solid" },
    { from: "F22", to: "F224", type: "solid" },
    
    // I/O e Dispositivos
    { from: "F3", to: "F31", type: "solid" },
    { from: "F3", to: "F32", type: "solid" },
    
    { from: "F31", to: "F311", type: "solid" },
    { from: "F31", to: "F312", type: "solid" },
    { from: "F31", to: "F313", type: "solid" },
    { from: "F31", to: "F314", type: "solid" },
    
    { from: "F32", to: "F321", type: "solid" },
    { from: "F32", to: "F322", type: "solid" },
    { from: "F32", to: "F323", type: "solid" },
    { from: "F32", to: "F324", type: "solid" },
    
    // Interrupções e Polling
    { from: "F4", to: "F41", type: "solid" },
    { from: "F4", to: "F42", type: "solid" },
    
    { from: "F41", to: "F411", type: "solid" },
    { from: "F41", to: "F412", type: "solid" },
    { from: "F41", to: "F413", type: "solid" },
    { from: "F41", to: "F414", type: "solid" },
    
    { from: "F42", to: "F421", type: "solid" },
    { from: "F42", to: "F422", type: "solid" },
    { from: "F42", to: "F423", type: "solid" },
    { from: "F42", to: "F424", type: "solid" },
    
    // Estados e Escalonamento
    { from: "F5", to: "F51", type: "solid" },
    { from: "F5", to: "F52", type: "solid" },
    
    { from: "F51", to: "F511", type: "solid" },
    { from: "F51", to: "F512", type: "solid" },
    { from: "F51", to: "F513", type: "solid" },
    { from: "F51", to: "F514", type: "solid" },
    
    { from: "F52", to: "F521", type: "solid" },
    { from: "F52", to: "F522", type: "solid" },
    { from: "F52", to: "F523", type: "solid" },
    { from: "F52", to: "F524", type: "solid" },
    
    // Gestão de Memória
    { from: "F6", to: "F61", type: "solid" },
    { from: "F6", to: "F62", type: "solid" },
    
    { from: "F61", to: "F611", type: "solid" },
    { from: "F61", to: "F612", type: "solid" },
    { from: "F61", to: "F613", type: "solid" },
    { from: "F61", to: "F614", type: "solid" },
    
    { from: "F62", to: "F621", type: "solid" },
    { from: "F62", to: "F622", type: "solid" },
    { from: "F62", to: "F623", type: "solid" },
    { from: "F62", to: "F624", type: "solid" },
    
    // Proteção e Performance
    { from: "F7", to: "F71", type: "solid" },
    { from: "F7", to: "F72", type: "solid" },
    
    { from: "F71", to: "F711", type: "solid" },
    { from: "F71", to: "F712", type: "solid" },
    { from: "F71", to: "F713", type: "solid" },
    { from: "F71", to: "F714", type: "solid" },
    
    { from: "F72", to: "F721", type: "solid" },
    { from: "F72", to: "F722", type: "solid" },
    { from: "F72", to: "F723", type: "solid" },
    { from: "F72", to: "F724", type: "solid" }
  ],

  // ===== CONEXÕES CRUZADAS =====
  crossConnections: [
    // Conexões entre Batch e Swapping
    { from: "F11", to: "F61", type: "dashed", color: "blue", label: "Batch → Swapping" },
    { from: "F114", to: "F613", type: "dashed", color: "blue", label: "Multiprogramação → Grau de Multiprogramação" },
    
    // Conexões entre I/O e Interrupções
    { from: "F3", to: "F4", type: "dashed", color: "green", label: "I/O → Interrupções" },
    { from: "F312", to: "F413", type: "dashed", color: "green", label: "Operações I/O → Interrupções I/O" },
    
    // Conexões entre Estados e I/O
    { from: "F51", to: "F31", type: "dashed", color: "purple", label: "Estados → I/O" },
    { from: "F512", to: "F312", type: "dashed", color: "purple", label: "Estados com I/O → Operações I/O" },
    
    // Conexões entre Time-Sharing e Escalonamento
    { from: "F12", to: "F52", type: "dashed", color: "orange", label: "Time-Sharing → Escalonamento" },
    { from: "F123", to: "F523", type: "dashed", color: "orange", label: "Quantum → Time-Slice" },
    
    // Conexões entre DMA e I/O
    { from: "F32", to: "F31", type: "dashed", color: "red", label: "DMA → I/O" },
    { from: "F321", to: "F314", type: "dashed", color: "red", label: "DMA → Buffering" },
    
    // Conexões entre Tempo Real e Escalonamento
    { from: "F2", to: "F52", type: "dashed", color: "teal", label: "Tempo Real → Escalonamento" },
    { from: "F223", to: "F521", type: "dashed", color: "teal", label: "Preempção Tempo Real → Preempção Geral" },
    
    // Conexões entre Swapping e Memória Virtual
    { from: "F61", to: "F62", type: "dashed", color: "brown", label: "Swapping → Memória Virtual" },
    { from: "F611", to: "F621", type: "dashed", color: "brown", label: "Swapping → Conceitos Memória Virtual" },
    
    // Conexões entre Performance e I/O
    { from: "F72", to: "F3", type: "dashed", color: "pink", label: "Performance → I/O" },
    { from: "F724", to: "F113", type: "dashed", color: "pink", label: "Balanceamento CPU/I/O → CPU-bound vs I/O-bound" },
    
    // Conexões entre Proteção e I/O
    { from: "F71", to: "F31", type: "dashed", color: "gray", label: "Proteção → I/O" },
    { from: "F712", to: "F313", type: "dashed", color: "gray", label: "Acesso Concorrente → Gestão Concorrente" }
  ],

  // ===== METADADOS PARA FRONTEND =====
  metadata: {
    totalNodes: 68,
    totalConnections: 104,
    lastUpdated: "2024-01-15",
    version: "1.0",
    examFocus: ["PRCMP - Exames Sistemas Operacionais Avançado"],
    keyTopics: [
      "Processamento Batch e suas características",
      "Sistemas de Tempo Real (Hard vs Soft)",
      "I/O e Controladores de Dispositivo",
      "DMA (Direct Memory Access)",
      "Interrupções vs Polling",
      "Estados do Processo com I/O",
      "Swapping e Multiprogramação",
      "Escalonamento Preemptivo vs Não-Preemptivo",
      "Time-Sharing e Sistemas Interativos",
      "Balanceamento CPU/I/O-bound"
    ]
  }
};