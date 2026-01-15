// ===== IMPORTS DE CONTEÚDO NÍVEL 6 - SISTEMAS DISTRIBUÍDOS, CLUSTERS E TEMPO-REAL =====

// 1.1 Clusters
import { G111 } from './content/level6/G111'  // Conceito de Clusters
import { G112 } from './content/level6/G112'  // Arquitetura de Clusters
import { G113 } from './content/level6/G113'  // Tipos de Clusters (HA, HPC, Load Balancing)
import { G114 } from './content/level6/G114'  // Middleware para Clusters
import { G115 } from './content/level6/G115'  // Exemplos e Aplicações

// 1.2 Sistemas Distribuídos
import { G121 } from './content/level6/G121'  // Conceito de Sistemas Distribuídos
import { G122 } from './content/level6/G122'  // Características e Desafios
import { G123 } from './content/level6/G123'  // Transparência em Sistemas Distribuídos
import { G124 } from './content/level6/G124'  // Modelos de Comunicação
import { G125 } from './content/level6/G125'  // Arquiteturas (Cliente-Servidor, P2P)

// 2.1 Sistemas de Tempo-Real Avançado
import { G211 } from './content/level6/G211'  // Conceitos Avançados de Tempo-Real
import { G212 } from './content/level6/G212'  // Hard vs Soft vs Firm Real-Time
import { G213 } from './content/level6/G213'  // Deadlines e Janelas Temporais
import { G214 } from './content/level6/G214'  // Previsibilidade e WCET

// 2.2 Aplicações de Tempo-Real
import { G221 } from './content/level6/G221'  // Sistemas Embarcados
import { G222 } from './content/level6/G222'  // Controle de Sistemas Físicos
import { G223 } from './content/level6/G223'  // Sistemas Críticos (Aviônica, Médicos)
import { G224 } from './content/level6/G224'  // Sistemas Industriais e Automotivos

// 3.1 Arquiteturas Multiprocessador
import { G311 } from './content/level6/G311'  // Multiprocessadores com Memória Compartilhada
import { G312 } from './content/level6/G312'  // SMP (Symmetric Multiprocessing)
import { G313 } from './content/level6/G313'  // UMA vs NUMA
import { G314 } from './content/level6/G314'  // Multicore e Chip Multiprocessors

// 3.2 Arquiteturas com Memória Distribuída
import { G321 } from './content/level6/G321'  // Multiprocessadores com Memória Distribuída
import { G322 } from './content/level6/G322'  // MPP (Massively Parallel Processors)
import { G323 } from './content/level6/G323'  // Comunicação em Memória Distribuída
import { G324 } from './content/level6/G324'  // Comparação com Memória Compartilhada

// 4.1 Distribuição de Computação
import { G411 } from './content/level6/G411'  // Divisão de Tarefas em Sistemas Distribuídos
import { G412 } from './content/level6/G412'  // Balanceamento de Carga
import { G413 } from './content/level6/G413'  // Escalabilidade
import { G414 } from './content/level6/G414'  // Tolerância a Falhas

// 4.2 Coordenação e Consenso
import { G421 } from './content/level6/G421'  // Coordenação em Sistemas Distribuídos
import { G422 } from './content/level6/G422'  // Eleição de Líder
import { G423 } from './content/level6/G423'  // Problemas de Consenso
import { G424 } from './content/level6/G424'  // Exclusão Mútua Distribuída

// 5.1 Middleware e Abstrações
import { G511 } from './content/level6/G511'  // Middleware para Sistemas Distribuídos
import { G512 } from './content/level6/G512'  // RPC (Remote Procedure Call)
import { G513 } from './content/level6/G513'  // Objetos Distribuídos
import { G514 } from './content/level6/G514'  // Middleware para Clusters

// 5.2 Exemplos Práticos
import { G521 } from './content/level6/G521'  // Sistemas de Nomeação Distribuídos (DNS)
import { G522 } from './content/level6/G522'  // Sistemas de Arquivos Distribuídos
import { G523 } from './content/level6/G523'  // Computação em Nuvem
import { G524 } from './content/level6/G524'  // Sistemas P2P

// 6.1 Métricas e Performance
import { G611 } from './content/level6/G611'  // Speedup e Eficiência
import { G612 } from './content/level6/G612'  // Escalabilidade em Clusters
import { G613 } from './content/level6/G613'  // Latência e Throughput
import { G614 } from './content/level6/G614'  // Análise de Desempenho

// 6.2 Técnicas Avançadas
import { G621 } from './content/level6/G621'  // Virtualização em Clusters
import { G622 } from './content/level6/G622'  // Contêineres em Sistemas Distribuídos
import { G623 } from './content/level6/G623'  // Orquestração de Contêineres
import { G624 } from './content/level6/G624'  // Microserviços


export const level6KnowledgeTree = {
  title: "Sistemas Distribuídos, Clusters e Tempo-Real - Mapa Completo de Conhecimento",
  description: "Diagrama hierárquico top-down do conhecimento em Sistemas Distribuídos, Clusters e Tempo-Real baseado no ex6",
  nodes: {
    // ===== NÍVEL 1: CATEGORIAS PRINCIPAIS =====
    "G": { id: "G", label: "Sistemas Distribuídos, Clusters e Tempo-Real", level: 1, type: "root" },
    
    // ===== CATEGORIAS PRINCIPAIS =====
    "G1": { id: "G1", label: "1. Clusters e Sistemas Distribuídos", level: 1, parent: "G" },
    "G2": { id: "G2", label: "2. Sistemas de Tempo-Real Avançado", level: 1, parent: "G" },
    "G3": { id: "G3", label: "3. Arquiteturas Multiprocessador", level: 1, parent: "G" },
    "G4": { id: "G4", label: "4. Distribuição e Coordenação", level: 1, parent: "G" },
    "G5": { id: "G5", label: "5. Middleware e Abstrações", level: 1, parent: "G" },
    "G6": { id: "G6", label: "6. Performance e Técnicas Avançadas", level: 1, parent: "G" },

    // ===== SUBDIAGRAMA 1: CLUSTERS E SISTEMAS DISTRIBUÍDOS =====
    "G11": { id: "G11", label: "1.1 Clusters", level: 2, parent: "G1" },
    "G12": { id: "G12", label: "1.2 Sistemas Distribuídos", level: 2, parent: "G1" },
    
    "G111": { id: "G111", label: "Conceito de Clusters", level: 3, type: 'CONTENT', parent: "G11", content: G111 },
    "G112": { id: "G112", label: "Arquitetura de Clusters", level: 3, type: 'CONTENT', parent: "G11", content: G112 },
    "G113": { id: "G113", label: "Tipos de Clusters", level: 3, type: 'CONTENT', parent: "G11", content: G113 },
    "G114": { id: "G114", label: "Middleware para Clusters", level: 3, type: 'CONTENT', parent: "G11", content: G114 },
    "G115": { id: "G115", label: "Exemplos e Aplicações", level: 3, type: 'CONTENT', parent: "G11", content: G115 },
    
    "G121": { id: "G121", label: "Conceito de Sistemas Distribuídos", level: 3, type: 'CONTENT', parent: "G12", content: G121 },
    "G122": { id: "G122", label: "Características e Desafios", level: 3, type: 'CONTENT', parent: "G12", content: G122 },
    "G123": { id: "G123", label: "Transparência em Sistemas Distribuídos", level: 3, type: 'CONTENT', parent: "G12", content: G123 },
    "G124": { id: "G124", label: "Modelos de Comunicação", level: 3, type: 'CONTENT', parent: "G12", content: G124 },
    "G125": { id: "G125", label: "Arquiteturas", level: 3, type: 'CONTENT', parent: "G12", content: G125 },

    // ===== SUBDIAGRAMA 2: SISTEMAS DE TEMPO-REAL AVANÇADO =====
    "G21": { id: "G21", label: "2.1 Sistemas de Tempo-Real Avançado", level: 2, parent: "G2" },
    "G22": { id: "G22", label: "2.2 Aplicações de Tempo-Real", level: 2, parent: "G2" },
    
    "G211": { id: "G211", label: "Conceitos Avançados de Tempo-Real", level: 3, type: 'CONTENT', parent: "G21", content: G211 },
    "G212": { id: "G212", label: "Hard vs Soft vs Firm Real-Time", level: 3, type: 'CONTENT', parent: "G21", content: G212 },
    "G213": { id: "G213", label: "Deadlines e Janelas Temporais", level: 3, type: 'CONTENT', parent: "G21", content: G213 },
    "G214": { id: "G214", label: "Previsibilidade e WCET", level: 3, type: 'CONTENT', parent: "G21", content: G214 },
    
    "G221": { id: "G221", label: "Sistemas Embarcados", level: 3, type: 'CONTENT', parent: "G22", content: G221 },
    "G222": { id: "G222", label: "Controle de Sistemas Físicos", level: 3, type: 'CONTENT', parent: "G22", content: G222 },
    "G223": { id: "G223", label: "Sistemas Críticos", level: 3, type: 'CONTENT', parent: "G22", content: G223 },
    "G224": { id: "G224", label: "Sistemas Industriais e Automotivos", level: 3, type: 'CONTENT', parent: "G22", content: G224 },

    // ===== SUBDIAGRAMA 3: ARQUITETURAS MULTIPROCESSADOR =====
    "G31": { id: "G31", label: "3.1 Arquiteturas Multiprocessador", level: 2, parent: "G3" },
    "G32": { id: "G32", label: "3.2 Arquiteturas com Memória Distribuída", level: 2, parent: "G3" },
    
    "G311": { id: "G311", label: "Multiprocessadores com Memória Compartilhada", level: 3, type: 'CONTENT', parent: "G31", content: G311 },
    "G312": { id: "G312", label: "SMP (Symmetric Multiprocessing)", level: 3, type: 'CONTENT', parent: "G31", content: G312 },
    "G313": { id: "G313", label: "UMA vs NUMA", level: 3, type: 'CONTENT', parent: "G31", content: G313 },
    "G314": { id: "G314", label: "Multicore e Chip Multiprocessors", level: 3, type: 'CONTENT', parent: "G31", content: G314 },
    
    "G321": { id: "G321", label: "Multiprocessadores com Memória Distribuída", level: 3, type: 'CONTENT', parent: "G32", content: G321 },
    "G322": { id: "G322", label: "MPP (Massively Parallel Processors)", level: 3, type: 'CONTENT', parent: "G32", content: G322 },
    "G323": { id: "G323", label: "Comunicação em Memória Distribuída", level: 3, type: 'CONTENT', parent: "G32", content: G323 },
    "G324": { id: "G324", label: "Comparação com Memória Compartilhada", level: 3, type: 'CONTENT', parent: "G32", content: G324 },

    // ===== SUBDIAGRAMA 4: DISTRIBUIÇÃO E COORDENAÇÃO =====
    "G41": { id: "G41", label: "4.1 Distribuição de Computação", level: 2, parent: "G4" },
    "G42": { id: "G42", label: "4.2 Coordenação e Consenso", level: 2, parent: "G4" },
    
    "G411": { id: "G411", label: "Divisão de Tarefas em Sistemas Distribuídos", level: 3, type: 'CONTENT', parent: "G41", content: G411 },
    "G412": { id: "G412", label: "Balanceamento de Carga", level: 3, type: 'CONTENT', parent: "G41", content: G412 },
    "G413": { id: "G413", label: "Escalabilidade", level: 3, type: 'CONTENT', parent: "G41", content: G413 },
    "G414": { id: "G414", label: "Tolerância a Falhas", level: 3, type: 'CONTENT', parent: "G41", content: G414 },
    
    "G421": { id: "G421", label: "Coordenação em Sistemas Distribuídos", level: 3, type: 'CONTENT', parent: "G42", content: G421 },
    "G422": { id: "G422", label: "Eleição de Líder", level: 3, type: 'CONTENT', parent: "G42", content: G422 },
    "G423": { id: "G423", label: "Problemas de Consenso", level: 3, type: 'CONTENT', parent: "G42", content: G423 },
    "G424": { id: "G424", label: "Exclusão Mútua Distribuída", level: 3, type: 'CONTENT', parent: "G42", content: G424 },

    // ===== SUBDIAGRAMA 5: MIDDLEWARE E ABSTRAÇÕES =====
    "G51": { id: "G51", label: "5.1 Middleware e Abstrações", level: 2, parent: "G5" },
    "G52": { id: "G52", label: "5.2 Exemplos Práticos", level: 2, parent: "G5" },
    
    "G511": { id: "G511", label: "Middleware para Sistemas Distribuídos", level: 3, type: 'CONTENT', parent: "G51", content: G511 },
    "G512": { id: "G512", label: "RPC (Remote Procedure Call)", level: 3, type: 'CONTENT', parent: "G51", content: G512 },
    "G513": { id: "G513", label: "Objetos Distribuídos", level: 3, type: 'CONTENT', parent: "G51", content: G513 },
    "G514": { id: "G514", label: "Middleware para Clusters", level: 3, type: 'CONTENT', parent: "G51", content: G514 },
    
    "G521": { id: "G521", label: "Sistemas de Nomeação Distribuídos", level: 3, type: 'CONTENT', parent: "G52", content: G521 },
    "G522": { id: "G522", label: "Sistemas de Arquivos Distribuídos", level: 3, type: 'CONTENT', parent: "G52", content: G522 },
    "G523": { id: "G523", label: "Computação em Nuvem", level: 3, type: 'CONTENT', parent: "G52", content: G523 },
    "G524": { id: "G524", label: "Sistemas P2P", level: 3, type: 'CONTENT', parent: "G52", content: G524 },

    // ===== SUBDIAGRAMA 6: PERFORMANCE E TÉCNICAS AVANÇADAS =====
    "G61": { id: "G61", label: "6.1 Métricas e Performance", level: 2, parent: "G6" },
    "G62": { id: "G62", label: "6.2 Técnicas Avançadas", level: 2, parent: "G6" },
    
    "G611": { id: "G611", label: "Speedup e Eficiência", level: 3, type: 'CONTENT', parent: "G61", content: G611 },
    "G612": { id: "G612", label: "Escalabilidade em Clusters", level: 3, type: 'CONTENT', parent: "G61", content: G612 },
    "G613": { id: "G613", label: "Latência e Throughput", level: 3, type: 'CONTENT', parent: "G61", content: G613 },
    "G614": { id: "G614", label: "Análise de Desempenho", level: 3, type: 'CONTENT', parent: "G61", content: G614 },
    
    "G621": { id: "G621", label: "Virtualização em Clusters", level: 3, type: 'CONTENT', parent: "G62", content: G621 },
    "G622": { id: "G622", label: "Contêineres em Sistemas Distribuídos", level: 3, type: 'CONTENT', parent: "G62", content: G622 },
    "G623": { id: "G623", label: "Orquestração de Contêineres", level: 3, type: 'CONTENT', parent: "G62", content: G623 },
    "G624": { id: "G624", label: "Microserviços", level: 3, type: 'CONTENT', parent: "G62", content: G624 }
  },

  // ===== CONEXÕES HIERÁRQUICAS COMPLETAS =====
  hierarchicalEdges: [
    // Estrutura principal
    { from: "G", to: "G1", type: "solid" },
    { from: "G", to: "G2", type: "solid" },
    { from: "G", to: "G3", type: "solid" },
    { from: "G", to: "G4", type: "solid" },
    { from: "G", to: "G5", type: "solid" },
    { from: "G", to: "G6", type: "solid" },
    
    // Clusters e Sistemas Distribuídos
    { from: "G1", to: "G11", type: "solid" },
    { from: "G1", to: "G12", type: "solid" },
    
    { from: "G11", to: "G111", type: "solid" },
    { from: "G11", to: "G112", type: "solid" },
    { from: "G11", to: "G113", type: "solid" },
    { from: "G11", to: "G114", type: "solid" },
    { from: "G11", to: "G115", type: "solid" },
    
    { from: "G12", to: "G121", type: "solid" },
    { from: "G12", to: "G122", type: "solid" },
    { from: "G12", to: "G123", type: "solid" },
    { from: "G12", to: "G124", type: "solid" },
    { from: "G12", to: "G125", type: "solid" },
    
    // Sistemas de Tempo-Real Avançado
    { from: "G2", to: "G21", type: "solid" },
    { from: "G2", to: "G22", type: "solid" },
    
    { from: "G21", to: "G211", type: "solid" },
    { from: "G21", to: "G212", type: "solid" },
    { from: "G21", to: "G213", type: "solid" },
    { from: "G21", to: "G214", type: "solid" },
    
    { from: "G22", to: "G221", type: "solid" },
    { from: "G22", to: "G222", type: "solid" },
    { from: "G22", to: "G223", type: "solid" },
    { from: "G22", to: "G224", type: "solid" },
    
    // Arquiteturas Multiprocessador
    { from: "G3", to: "G31", type: "solid" },
    { from: "G3", to: "G32", type: "solid" },
    
    { from: "G31", to: "G311", type: "solid" },
    { from: "G31", to: "G312", type: "solid" },
    { from: "G31", to: "G313", type: "solid" },
    { from: "G31", to: "G314", type: "solid" },
    
    { from: "G32", to: "G321", type: "solid" },
    { from: "G32", to: "G322", type: "solid" },
    { from: "G32", to: "G323", type: "solid" },
    { from: "G32", to: "G324", type: "solid" },
    
    // Distribuição e Coordenação
    { from: "G4", to: "G41", type: "solid" },
    { from: "G4", to: "G42", type: "solid" },
    
    { from: "G41", to: "G411", type: "solid" },
    { from: "G41", to: "G412", type: "solid" },
    { from: "G41", to: "G413", type: "solid" },
    { from: "G41", to: "G414", type: "solid" },
    
    { from: "G42", to: "G421", type: "solid" },
    { from: "G42", to: "G422", type: "solid" },
    { from: "G42", to: "G423", type: "solid" },
    { from: "G42", to: "G424", type: "solid" },
    
    // Middleware e Abstrações
    { from: "G5", to: "G51", type: "solid" },
    { from: "G5", to: "G52", type: "solid" },
    
    { from: "G51", to: "G511", type: "solid" },
    { from: "G51", to: "G512", type: "solid" },
    { from: "G51", to: "G513", type: "solid" },
    { from: "G51", to: "G514", type: "solid" },
    
    { from: "G52", to: "G521", type: "solid" },
    { from: "G52", to: "G522", type: "solid" },
    { from: "G52", to: "G523", type: "solid" },
    { from: "G52", to: "G524", type: "solid" },
    
    // Performance e Técnicas Avançadas
    { from: "G6", to: "G61", type: "solid" },
    { from: "G6", to: "G62", type: "solid" },
    
    { from: "G61", to: "G611", type: "solid" },
    { from: "G61", to: "G612", type: "solid" },
    { from: "G61", to: "G613", type: "solid" },
    { from: "G61", to: "G614", type: "solid" },
    
    { from: "G62", to: "G621", type: "solid" },
    { from: "G62", to: "G622", type: "solid" },
    { from: "G62", to: "G623", type: "solid" },
    { from: "G62", to: "G624", type: "solid" }
  ],

  // ===== CONEXÕES CRUZADAS =====
  crossConnections: [
    // Conexões entre Clusters e Sistemas Distribuídos
    { from: "G11", to: "G12", type: "dashed", color: "blue", label: "Clusters → Sistemas Distribuídos" },
    { from: "G111", to: "G121", type: "dashed", color: "blue", label: "Conceito Clusters → Conceito Distribuídos" },
    
    // Conexões entre Tempo-Real e Sistemas Embarcados
    { from: "G2", to: "G22", type: "dashed", color: "green", label: "Tempo-Real → Aplicações" },
    { from: "G211", to: "G221", type: "dashed", color: "green", label: "Conceitos Tempo-Real → Sistemas Embarcados" },
    
    // Conexões entre Arquiteturas e Clusters
    { from: "G3", to: "G11", type: "dashed", color: "purple", label: "Arquiteturas → Clusters" },
    { from: "G321", to: "G112", type: "dashed", color: "purple", label: "Memória Distribuída → Arquitetura Clusters" },
    
    // Conexões entre Distribuição e Middleware
    { from: "G4", to: "G5", type: "dashed", color: "orange", label: "Distribuição → Middleware" },
    { from: "G411", to: "G511", type: "dashed", color: "orange", label: "Divisão Tarefas → Middleware" },
    
    // Conexões entre Performance e Arquiteturas
    { from: "G6", to: "G3", type: "dashed", color: "red", label: "Performance → Arquiteturas" },
    { from: "G611", to: "G311", type: "dashed", color: "red", label: "Speedup → Memória Compartilhada" },
    
    // Conexões entre Middleware e Exemplos Práticos
    { from: "G51", to: "G52", type: "dashed", color: "teal", label: "Middleware → Exemplos" },
    { from: "G511", to: "G521", type: "dashed", color: "teal", label: "Middleware → DNS" },
    
    // Conexões entre Coordenação e Sistemas Distribuídos
    { from: "G42", to: "G12", type: "dashed", color: "brown", label: "Coordenação → Sistemas Distribuídos" },
    { from: "G421", to: "G122", type: "dashed", color: "brown", label: "Coordenação → Desafios" },
    
    // Conexões entre Multicore e Tempo-Real
    { from: "G314", to: "G21", type: "dashed", color: "pink", label: "Multicore → Tempo-Real" },
    
    // Conexões entre Tolerância a Falhas e Sistemas Críticos
    { from: "G414", to: "G223", type: "dashed", color: "gray", label: "Tolerância a Falhas → Sistemas Críticos" },
    
    // Conexões entre Virtualização e Clusters
    { from: "G621", to: "G11", type: "dashed", color: "cyan", label: "Virtualização → Clusters" }
  ],

  // ===== METADADOS PARA FRONTEND =====
  metadata: {
    totalNodes: 72,
    totalConnections: 112,
    lastUpdated: "2024-01-15",
    version: "1.0",
    examFocus: ["PRCMP - Exames Sistemas Distribuídos, Clusters e Tempo-Real"],
    keyTopics: [
      "Clusters: conceito e arquitetura",
      "Sistemas Distribuídos: características e desafios",
      "Sistemas de Tempo-Real (Hard, Soft, Firm)",
      "Multiprocessadores com memória compartilhada vs distribuída",
      "SMP (Symmetric Multiprocessing)",
      "Sistemas Embarcados e aplicações de tempo-real",
      "Middleware para sistemas distribuídos",
      "Coordenação e consenso em sistemas distribuídos",
      "Escalabilidade e balanceamento de carga",
      "Arquiteturas UMA vs NUMA"
    ]
  }
};