// ===== IMPORTS DE CONTEÚDO NÍVEL 2 - ARQUITETURA DE COMPUTADORES =====

// 1.1 Arquiteturas Básicas
import { C111 } from './content/level2/C111'  // Arquitetura von Neumann
import { C112 } from './content/level2/C112'  // Arquitetura Harvard
import { C113 } from './content/level2/C113'  // Componentes Básicos
import { C114 } from './content/level2/C114'  // Evolução Histórica

// 1.2 Processadores e CPU
import { C121 } from './content/level2/C121'  // Componentes da CPU
import { C122 } from './content/level2/C122'  // Registradores
import { C123 } from './content/level2/C123'  // Ciclo Fetch-Decode-Execute
import { C124 } from './content/level2/C124'  // Unidades Funcionais

// 2.1 Conjunto de Instruções
import { C211 } from './content/level2/C211'  // ISA (Instruction Set Architecture)
import { C212 } from './content/level2/C212'  // RISC vs CISC
import { C213 } from './content/level2/C213'  // Modos de Endereçamento
import { C214 } from './content/level2/C214'  // Tipos de Instruções

// 2.2 Microarquitetura
import { C221 } from './content/level2/C221'  // Microarquitetura vs ISA
import { C222 } from './content/level2/C222'  // Pipeline
import { C223 } from './content/level2/C223'  // Arquitetura Superscalar
import { C224 } from './content/level2/C224'  // Multi-core
import { C225 } from './content/level2/C225'  // Hyper-threading

// 3.1 Memória
import { C311 } from './content/level2/C311'  // Hierarquia de Memória
import { C312 } from './content/level2/C312'  // RAM vs ROM
import { C313 } from './content/level2/C313'  // Memória Cache
import { C314 } from './content/level2/C314'  // Memória Virtual
import { C315 } from './content/level2/C315'  // Operações de Memória

// 3.2 Barramentos
import { C321 } from './content/level2/C321'  // Barramentos do Sistema
import { C322 } from './content/level2/C322'  // Barramento de Dados/Endereços/Controle
import { C323 } from './content/level2/C323'  // Protocolos de Barramento
import { C324 } from './content/level2/C324'  // DMA

// 4.1 Representação de Dados
import { C411 } from './content/level2/C411'  // Sistemas Numéricos
import { C412 } from './content/level2/C412'  // Complemento de 2
import { C413 } from './content/level2/C413'  // Ponto Flutuante
import { C414 } from './content/level2/C414'  // Caracteres e Codificação

// 4.2 Operações Bitwise
import { C421 } from './content/level2/C421'  // Operações Lógicas (AND, OR, XOR, NOT)
import { C422 } from './content/level2/C422'  // Deslocamento de Bits
import { C423 } from './content/level2/C423'  // Máscaras de Bits
import { C424 } from './content/level2/C424'  // Aplicações Práticas

// 5.1 Desempenho
import { C511 } from './content/level2/C511'  // Métricas de Desempenho
import { C512 } from './content/level2/C512'  // Lei de Amdahl
import { C513 } from './content/level2/C513'  // CPI e MIPS
import { C514 } from './content/level2/C514'  // Benchmarks

// 5.2 Arquiteturas Modernas
import { C521 } from './content/level2/C521'  // Arquitetura 64-bit
import { C522 } from './content/level2/C522'  // SIMD e Vetores
import { C523 } from './content/level2/C523'  // GPU e Computação Paralela
import { C524 } from './content/level2/C524'  // Arquiteturas Especializadas

// 6.1 I/O e Periféricos
import { C611 } from './content/level2/C611'  // Controladores de I/O
import { C612 } from './content/level2/C612'  // Interfaces de Barramento
import { C613 } from './content/level2/C613'  // Dispositivos de Armazenamento
import { C614 } from './content/level2/C614'  // Dispositivos de Entrada/Saída

// 6.2 Interrupções
import { C621 } from './content/level2/C621'  // Sistema de Interrupções
import { C622 } from './content/level2/C622'  // Tipos de Interrupções
import { C623 } from './content/level2/C623'  // Tratamento de Interrupções
import { C624 } from './content/level2/C624'  // Prioridades de Interrupção


export const level2KnowledgeTree = {
  title: "Arquitetura de Computadores - Mapa Completo de Conhecimento",
  description: "Diagrama hierárquico top-down do conhecimento em Arquitetura de Computadores baseado no ex2",
  nodes: {
    // ===== NÍVEL 1: CATEGORIAS PRINCIPAIS =====
    "C": { id: "C", label: "Arquitetura de Computadores", level: 1, type: "root" },
    
    // ===== CATEGORIAS PRINCIPAIS =====
    "C1": { id: "C1", label: "1. Fundamentos de Arquitetura", level: 1, parent: "C" },
    "C2": { id: "C2", label: "2. Processadores e Conjunto de Instruções", level: 1, parent: "C" },
    "C3": { id: "C3", label: "3. Memória e Barramentos", level: 1, parent: "C" },
    "C4": { id: "C4", label: "4. Representação de Dados", level: 1, parent: "C" },
    "C5": { id: "C5", label: "5. Desempenho e Arquiteturas Modernas", level: 1, parent: "C" },
    "C6": { id: "C6", label: "6. I/O e Interrupções", level: 1, parent: "C" },

    // ===== SUBDIAGRAMA 1: FUNDAMENTOS DE ARQUITETURA =====
    "C11": { id: "C11", label: "1.1 Arquiteturas Básicas", level: 2, parent: "C1" },
    "C12": { id: "C12", label: "1.2 Processadores e CPU", level: 2, parent: "C1" },
    
    "C111": { id: "C111", label: "Arquitetura von Neumann", level: 3, type: 'CONTENT', parent: "C11", content: C111 },
    "C112": { id: "C112", label: "Arquitetura Harvard", level: 3, type: 'CONTENT', parent: "C11", content: C112 },
    "C113": { id: "C113", label: "Componentes Básicos", level: 3, type: 'CONTENT', parent: "C11", content: C113 },
    "C114": { id: "C114", label: "Evolução Histórica", level: 3, type: 'CONTENT', parent: "C11", content: C114 },
    
    "C121": { id: "C121", label: "Componentes da CPU", level: 3, type: 'CONTENT', parent: "C12", content: C121 },
    "C122": { id: "C122", label: "Registradores", level: 3, type: 'CONTENT', parent: "C12", content: C122 },
    "C123": { id: "C123", label: "Ciclo Fetch-Decode-Execute", level: 3, type: 'CONTENT', parent: "C12", content: C123 },
    "C124": { id: "C124", label: "Unidades Funcionais", level: 3, type: 'CONTENT', parent: "C12", content: C124 },

    // ===== SUBDIAGRAMA 2: PROCESSADORES E CONJUNTO DE INSTRUÇÕES =====
    "C21": { id: "C21", label: "2.1 Conjunto de Instruções", level: 2, parent: "C2" },
    "C22": { id: "C22", label: "2.2 Microarquitetura", level: 2, parent: "C2" },
    
    "C211": { id: "C211", label: "ISA (Instruction Set Architecture)", level: 3, type: 'CONTENT', parent: "C21", content: C211 },
    "C212": { id: "C212", label: "RISC vs CISC", level: 3, type: 'CONTENT', parent: "C21", content: C212 },
    "C213": { id: "C213", label: "Modos de Endereçamento", level: 3, type: 'CONTENT', parent: "C21", content: C213 },
    "C214": { id: "C214", label: "Tipos de Instruções", level: 3, type: 'CONTENT', parent: "C21", content: C214 },
    
    "C221": { id: "C221", label: "Microarquitetura vs ISA", level: 3, type: 'CONTENT', parent: "C22", content: C221 },
    "C222": { id: "C222", label: "Pipeline", level: 3, type: 'CONTENT', parent: "C22", content: C222 },
    "C223": { id: "C223", label: "Arquitetura Superscalar", level: 3, type: 'CONTENT', parent: "C22", content: C223 },
    "C224": { id: "C224", label: "Multi-core", level: 3, type: 'CONTENT', parent: "C22", content: C224 },
    "C225": { id: "C225", label: "Hyper-threading", level: 3, type: 'CONTENT', parent: "C22", content: C225 },

    // ===== SUBDIAGRAMA 3: MEMÓRIA E BARRAMENTOS =====
    "C31": { id: "C31", label: "3.1 Memória", level: 2, parent: "C3" },
    "C32": { id: "C32", label: "3.2 Barramentos", level: 2, parent: "C3" },
    
    "C311": { id: "C311", label: "Hierarquia de Memória", level: 3, type: 'CONTENT', parent: "C31", content: C311 },
    "C312": { id: "C312", label: "RAM vs ROM", level: 3, type: 'CONTENT', parent: "C31", content: C312 },
    "C313": { id: "C313", label: "Memória Cache", level: 3, type: 'CONTENT', parent: "C31", content: C313 },
    "C314": { id: "C314", label: "Memória Virtual", level: 3, type: 'CONTENT', parent: "C31", content: C314 },
    "C315": { id: "C315", label: "Operações de Memória", level: 3, type: 'CONTENT', parent: "C31", content: C315 },
    
    "C321": { id: "C321", label: "Barramentos do Sistema", level: 3, type: 'CONTENT', parent: "C32", content: C321 },
    "C322": { id: "C322", label: "Barramento de Dados/Endereços/Controle", level: 3, type: 'CONTENT', parent: "C32", content: C322 },
    "C323": { id: "C323", label: "Protocolos de Barramento", level: 3, type: 'CONTENT', parent: "C32", content: C323 },
    "C324": { id: "C324", label: "DMA", level: 3, type: 'CONTENT', parent: "C32", content: C324 },

    // ===== SUBDIAGRAMA 4: REPRESENTAÇÃO DE DADOS =====
    "C41": { id: "C41", label: "4.1 Sistemas Numéricos", level: 2, parent: "C4" },
    "C42": { id: "C42", label: "4.2 Operações Bitwise", level: 2, parent: "C4" },
    
    "C411": { id: "C411", label: "Sistemas Numéricos", level: 3, type: 'CONTENT', parent: "C41", content: C411 },
    "C412": { id: "C412", label: "Complemento de 2", level: 3, type: 'CONTENT', parent: "C41", content: C412 },
    "C413": { id: "C413", label: "Ponto Flutuante", level: 3, type: 'CONTENT', parent: "C41", content: C413 },
    "C414": { id: "C414", label: "Caracteres e Codificação", level: 3, type: 'CONTENT', parent: "C41", content: C414 },
    
    "C421": { id: "C421", label: "Operações Lógicas", level: 3, type: 'CONTENT', parent: "C42", content: C421 },
    "C422": { id: "C422", label: "Deslocamento de Bits", level: 3, type: 'CONTENT', parent: "C42", content: C422 },
    "C423": { id: "C423", label: "Máscaras de Bits", level: 3, type: 'CONTENT', parent: "C42", content: C423 },
    "C424": { id: "C424", label: "Aplicações Práticas", level: 3, type: 'CONTENT', parent: "C42", content: C424 },

    // ===== SUBDIAGRAMA 5: DESEMPENHO E ARQUITETURAS MODERNAS =====
    "C51": { id: "C51", label: "5.1 Desempenho", level: 2, parent: "C5" },
    "C52": { id: "C52", label: "5.2 Arquiteturas Modernas", level: 2, parent: "C5" },
    
    "C511": { id: "C511", label: "Métricas de Desempenho", level: 3, type: 'CONTENT', parent: "C51", content: C511 },
    "C512": { id: "C512", label: "Lei de Amdahl", level: 3, type: 'CONTENT', parent: "C51", content: C512 },
    "C513": { id: "C513", label: "CPI e MIPS", level: 3, type: 'CONTENT', parent: "C51", content: C513 },
    "C514": { id: "C514", label: "Benchmarks", level: 3, type: 'CONTENT', parent: "C51", content: C514 },
    
    "C521": { id: "C521", label: "Arquitetura 64-bit", level: 3, type: 'CONTENT', parent: "C52", content: C521 },
    "C522": { id: "C522", label: "SIMD e Vetores", level: 3, type: 'CONTENT', parent: "C52", content: C522 },
    "C523": { id: "C523", label: "GPU e Computação Paralela", level: 3, type: 'CONTENT', parent: "C52", content: C523 },
    "C524": { id: "C524", label: "Arquiteturas Especializadas", level: 3, type: 'CONTENT', parent: "C52", content: C524 },

    // ===== SUBDIAGRAMA 6: I/O E INTERRUPÇÕES =====
    "C61": { id: "C61", label: "6.1 I/O e Periféricos", level: 2, parent: "C6" },
    "C62": { id: "C62", label: "6.2 Interrupções", level: 2, parent: "C6" },
    
    "C611": { id: "C611", label: "Controladores de I/O", level: 3, type: 'CONTENT', parent: "C61", content: C611 },
    "C612": { id: "C612", label: "Interfaces de Barramento", level: 3, type: 'CONTENT', parent: "C61", content: C612 },
    "C613": { id: "C613", label: "Dispositivos de Armazenamento", level: 3, type: 'CONTENT', parent: "C61", content: C613 },
    "C614": { id: "C614", label: "Dispositivos de Entrada/Saída", level: 3, type: 'CONTENT', parent: "C61", content: C614 },
    
    "C621": { id: "C621", label: "Sistema de Interrupções", level: 3, type: 'CONTENT', parent: "C62", content: C621 },
    "C622": { id: "C622", label: "Tipos de Interrupções", level: 3, type: 'CONTENT', parent: "C62", content: C622 },
    "C623": { id: "C623", label: "Tratamento de Interrupções", level: 3, type: 'CONTENT', parent: "C62", content: C623 },
    "C624": { id: "C624", label: "Prioridades de Interrupção", level: 3, type: 'CONTENT', parent: "C62", content: C624 }
  },

  // ===== CONEXÕES HIERÁRQUICAS COMPLETAS =====
  hierarchicalEdges: [
    // Estrutura principal
    { from: "C", to: "C1", type: "solid" },
    { from: "C", to: "C2", type: "solid" },
    { from: "C", to: "C3", type: "solid" },
    { from: "C", to: "C4", type: "solid" },
    { from: "C", to: "C5", type: "solid" },
    { from: "C", to: "C6", type: "solid" },
    
    // Fundamentos de Arquitetura
    { from: "C1", to: "C11", type: "solid" },
    { from: "C1", to: "C12", type: "solid" },
    
    { from: "C11", to: "C111", type: "solid" },
    { from: "C11", to: "C112", type: "solid" },
    { from: "C11", to: "C113", type: "solid" },
    { from: "C11", to: "C114", type: "solid" },
    
    { from: "C12", to: "C121", type: "solid" },
    { from: "C12", to: "C122", type: "solid" },
    { from: "C12", to: "C123", type: "solid" },
    { from: "C12", to: "C124", type: "solid" },
    
    // Processadores e Conjunto de Instruções
    { from: "C2", to: "C21", type: "solid" },
    { from: "C2", to: "C22", type: "solid" },
    
    { from: "C21", to: "C211", type: "solid" },
    { from: "C21", to: "C212", type: "solid" },
    { from: "C21", to: "C213", type: "solid" },
    { from: "C21", to: "C214", type: "solid" },
    
    { from: "C22", to: "C221", type: "solid" },
    { from: "C22", to: "C222", type: "solid" },
    { from: "C22", to: "C223", type: "solid" },
    { from: "C22", to: "C224", type: "solid" },
    { from: "C22", to: "C225", type: "solid" },
    
    // Memória e Barramentos
    { from: "C3", to: "C31", type: "solid" },
    { from: "C3", to: "C32", type: "solid" },
    
    { from: "C31", to: "C311", type: "solid" },
    { from: "C31", to: "C312", type: "solid" },
    { from: "C31", to: "C313", type: "solid" },
    { from: "C31", to: "C314", type: "solid" },
    { from: "C31", to: "C315", type: "solid" },
    
    { from: "C32", to: "C321", type: "solid" },
    { from: "C32", to: "C322", type: "solid" },
    { from: "C32", to: "C323", type: "solid" },
    { from: "C32", to: "C324", type: "solid" },
    
    // Representação de Dados
    { from: "C4", to: "C41", type: "solid" },
    { from: "C4", to: "C42", type: "solid" },
    
    { from: "C41", to: "C411", type: "solid" },
    { from: "C41", to: "C412", type: "solid" },
    { from: "C41", to: "C413", type: "solid" },
    { from: "C41", to: "C414", type: "solid" },
    
    { from: "C42", to: "C421", type: "solid" },
    { from: "C42", to: "C422", type: "solid" },
    { from: "C42", to: "C423", type: "solid" },
    { from: "C42", to: "C424", type: "solid" },
    
    // Desempenho e Arquiteturas Modernas
    { from: "C5", to: "C51", type: "solid" },
    { from: "C5", to: "C52", type: "solid" },
    
    { from: "C51", to: "C511", type: "solid" },
    { from: "C51", to: "C512", type: "solid" },
    { from: "C51", to: "C513", type: "solid" },
    { from: "C51", to: "C514", type: "solid" },
    
    { from: "C52", to: "C521", type: "solid" },
    { from: "C52", to: "C522", type: "solid" },
    { from: "C52", to: "C523", type: "solid" },
    { from: "C52", to: "C524", type: "solid" },
    
    // I/O e Interrupções
    { from: "C6", to: "C61", type: "solid" },
    { from: "C6", to: "C62", type: "solid" },
    
    { from: "C61", to: "C611", type: "solid" },
    { from: "C61", to: "C612", type: "solid" },
    { from: "C61", to: "C613", type: "solid" },
    { from: "C61", to: "C614", type: "solid" },
    
    { from: "C62", to: "C621", type: "solid" },
    { from: "C62", to: "C622", type: "solid" },
    { from: "C62", to: "C623", type: "solid" },
    { from: "C62", to: "C624", type: "solid" }
  ],

  // ===== CONEXÕES CRUZADAS =====
  crossConnections: [
    // Conexões entre ISA e Processadores
    { from: "C21", to: "C12", type: "dashed", color: "blue", label: "ISA → CPU" },
    { from: "C211", to: "C221", type: "dashed", color: "blue", label: "ISA → Microarquitetura" },
    
    // Conexões entre Pipeline e Desempenho
    { from: "C222", to: "C51", type: "dashed", color: "green", label: "Pipeline → Desempenho" },
    { from: "C223", to: "C513", type: "dashed", color: "green", label: "Superscalar → CPI" },
    
    // Conexões entre Memória e Barramentos
    { from: "C31", to: "C32", type: "dashed", color: "purple", label: "Memória → Barramentos" },
    { from: "C311", to: "C321", type: "dashed", color: "purple", label: "Hierarquia → Barramentos" },
    
    // Conexões entre Operações Bitwise e CPU
    { from: "C42", to: "C12", type: "dashed", color: "orange", label: "Bitwise → UAL" },
    { from: "C421", to: "C124", type: "dashed", color: "orange", label: "Operações → Unidades" },
    
    // Conexões entre Multi-core e Desempenho
    { from: "C224", to: "C511", type: "dashed", color: "red", label: "Multi-core → Métricas" },
    { from: "C224", to: "C512", type: "dashed", color: "red", label: "Multi-core → Lei de Amdahl" },
    
    // Conexões entre I/O e Interrupções
    { from: "C61", to: "C62", type: "dashed", color: "teal", label: "I/O → Interrupções" },
    { from: "C614", to: "C621", type: "dashed", color: "teal", label: "Dispositivos → Sistema" },
    
    // Conexões entre Registradores e Memória
    { from: "C122", to: "C311", type: "dashed", color: "brown", label: "Registradores → Hierarquia" },
    
    // Conexões entre Ciclo de Instrução e Pipeline
    { from: "C123", to: "C222", type: "dashed", color: "pink", label: "Ciclo → Pipeline" },
    
    // Conexões entre Arquiteturas Modernas e Fundamentos
    { from: "C52", to: "C11", type: "dashed", color: "gray", label: "Modernas → Básicas" },
    { from: "C521", to: "C122", type: "dashed", color: "gray", label: "64-bit → Registradores" }
  ],

  // ===== METADADOS PARA FRONTEND =====
  metadata: {
    totalNodes: 66,
    totalConnections: 102,
    lastUpdated: "2024-01-15",
    version: "1.0",
    examFocus: ["PRCMP - Exames Arquitetura"],
    keyTopics: [
      "Arquitetura von Neumann",
      "ISA vs Microarquitetura",
      "Pipeline e Superscalar",
      "Multi-core",
      "Hierarquia de Memória",
      "Operações Bitwise",
      "Ciclo Fetch-Decode-Execute",
      "Registradores da CPU"
    ]
  }
};