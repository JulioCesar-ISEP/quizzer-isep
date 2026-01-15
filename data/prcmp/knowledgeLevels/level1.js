// ===== IMPORTS DE CONTEÚDO NÍVEL 1 =====

// 1.1 Conceitos Básicos
import { B111 } from './content/level1/B111'  // O que é um Sistema Operacional?
import { B112 } from './content/level1/B112'  // Funções e Objetivos
import { B113 } from './content/level1/B113'  // Evolução Histórica
import { B114 } from './content/level1/B114'  // Tipos de SO
import { B115 } from './content/level1/B115'  // Arquitetura de SO

// 1.2 Processos e Threads
import { B121 } from './content/level1/B121'  // Conceito de Processo
import { B122 } from './content/level1/B122'  // Process Control Block (PCB)
import { B123 } from './content/level1/B123'  // Estados de Processo
import { B124 } from './content/level1/B124'  // Threads vs Processos
import { B125 } from './content/level1/B125'  // Criação e Terminação
import { B126 } from './content/level1/B126'  // Operações sobre Processos

// 2.1 Escalonamento
import { B211 } from './content/level1/B211'  // Conceito de Escalonamento
import { B212 } from './content/level1/B212'  // Preemptivo vs Não-Preemptivo
import { B213 } from './content/level1/B213'  // Algoritmos Básicos
import { B214 } from './content/level1/B214'  // Critérios de Escalonamento
import { B215 } from './content/level1/B215'  // Diagrama de Estados

// 2.2 Context Switch
import { B221 } from './content/level1/B221'  // O que é Context Switch
import { B222 } from './content/level1/B222'  // Operações durante Context Switch
import { B223 } from './content/level1/B223'  // Overhead e Custos
import { B224 } from './content/level1/B224'  // Quando ocorre

// 3.1 Multiprogramação
import { B311 } from './content/level1/B311'  // Multiprogramação vs Multitarefa
import { B312 } from './content/level1/B312'  // Vantagens e Desvantagens
import { B313 } from './content/level1/B313'  // Concorrência vs Paralelismo
import { B314 } from './content/level1/B314'  // Sistemas Multi-utilizador

// 3.2 Processamento Batch
import { B321 } from './content/level1/B321'  // Processamento por Lotes
import { B322 } from './content/level1/B322'  // Características do Batch
import { B323 } from './content/level1/B323'  // Sistemas Históricos
import { B324 } from './content/level1/B324'  // Aplicações Modernas

// 4.1 Gestão de Memória
import { B411 } from './content/level1/B411'  // Alocação de Memória
import { B412 } from './content/level1/B412'  // Proteção de Memória
import { B413 } from './content/level1/B413'  // Swapping
import { B414 } from './content/level1/B414'  // Fragmentação
import { B415 } from './content/level1/B415'  // Memória Virtual (básico)

// 4.2 I/O e Interrupções
import { B421 } from './content/level1/B421'  // Dispositivos de I/O
import { B422 } from './content/level1/B422'  // Controladores e Drivers
import { B423 } from './content/level1/B423'  // Interrupções e Exceções
import { B424 } from './content/level1/B424'  // DMA (Acesso Direto à Memória)
import { B425 } from './content/level1/B425'  // Estados e I/O

// 5.1 Sistemas de Tempo Real
import { B511 } from './content/level1/B511'  // Conceito de Tempo Real
import { B512 } from './content/level1/B512'  // Hard vs Soft Real-time
import { B513 } from './content/level1/B513'  // Deadlines e Garantias
import { B514 } from './content/level1/B514'  // Aplicações Práticas

// 5.2 Sistemas Distribuídos
import { B521 } from './content/level1/B521'  // Conceitos Básicos
import { B522 } from './content/level1/B522'  // Clusters vs Distribuídos
import { B523 } from './content/level1/B523'  // Vantagens e Desafios
import { B524 } from './content/level1/B524'  // Exemplos de Aplicações

// 6.1 Interface com Utilizador
import { B611 } from './content/level1/B611'  // CLI vs GUI
import { B612 } from './content/level1/B612'  // Shell como Interface
import { B613 } from './content/level1/B613'  // Chamadas de Sistema
import { B614 } from './content/level1/B614'  // API do SO

// 6.2 Abstração de Hardware
import { B621 } from './content/level1/B621'  // Níveis de Abstração
import { B622 } from './content/level1/B622'  // Drivers de Dispositivos
import { B623 } from './content/level1/B623'  // Portabilidade e Independência
import { B624 } from './content/level1/B624'  // Virtualização (básico)

// 7.1 ISA vs Microarquitetura
import { B711 } from './content/level1/B711'  // Diferenças ISA/Microarquitetura
import { B712 } from './content/level1/B712'  // Implementações de ISA
import { B713 } from './content/level1/B713'  // Impacto no SO
import { B714 } from './content/level1/B714'  // Exemplos Práticos

// 7.2 Booting e Inicialização
import { B721 } from './content/level1/B721'  // Processo de Boot
import { B722 } from './content/level1/B722'  // BIOS/UEFI
import { B723 } from './content/level1/B723'  // Bootloader
import { B724 } from './content/level1/B724'  // Inicialização do Kernel


export const level1KnowledgeTree = {
  title: "Sistemas Operacionais - Mapa Completo de Conhecimento",
  description: "Diagrama hierárquico top-down do conhecimento em Sistemas Operacionais baseado nos exames",
  nodes: {
    // ===== NÍVEL 1: CATEGORIAS PRINCIPAIS =====
    "B": { id: "B", label: "Sistemas Operacionais", level: 1, type: "root" },
    
    // ===== CATEGORIAS PRINCIPAIS =====
    "B1": { id: "B1", label: "1. Conceitos Fundamentais", level: 1, parent: "B" },
    "B2": { id: "B2", label: "2. Escalonamento e Contexto", level: 1, parent: "B" },
    "B3": { id: "B3", label: "3. Multiprogramação e Batch", level: 1, parent: "B" },
    "B4": { id: "B4", label: "4. Gestão de Recursos", level: 1, parent: "B" },
    "B5": { id: "B5", label: "5. Sistemas Especializados", level: 1, parent: "B" },
    "B6": { id: "B6", label: "6. Interface e Abstração", level: 1, parent: "B" },
    "B7": { id: "B7", label: "7. Tópicos Avançados", level: 1, parent: "B" },

    // ===== SUBDIAGRAMA 1: CONCEITOS FUNDAMENTAIS =====
    "B11": { id: "B11", label: "1.1 Conceitos Básicos", level: 2, parent: "B1" },
    "B12": { id: "B12", label: "1.2 Processos e Threads", level: 2, parent: "B1" },
    
    "B111": { id: "B111", label: "O que é um Sistema Operacional?", level: 3, type:'CONTENT', parent: "B11", content: B111 },
    "B112": { id: "B112", label: "Funções e Objetivos", level: 3, type:'CONTENT', parent: "B11", content: B112 },
    "B113": { id: "B113", label: "Evolução Histórica", level: 3, type:'CONTENT', parent: "B11", content: B113 },
    "B114": { id: "B114", label: "Tipos de SO", level: 3, type:'CONTENT', parent: "B11", content: B114 },
    "B115": { id: "B115", label: "Arquitetura de SO", level: 3, type:'CONTENT', parent: "B11", content: B115 },
    
    "B121": { id: "B121", label: "Conceito de Processo", level: 3, type:'CONTENT', parent: "B12", content: B121 },
    "B122": { id: "B122", label: "Process Control Block (PCB)", level: 3, type:'CONTENT', parent: "B12", content: B122 },
    "B123": { id: "B123", label: "Estados de Processo", level: 3, type:'CONTENT', parent: "B12", content: B123 },
    "B124": { id: "B124", label: "Threads vs Processos", level: 3, type:'CONTENT', parent: "B12", content: B124 },
    "B125": { id: "B125", label: "Criação e Terminação", level: 3, type:'CONTENT', parent: "B12", content: B125 },
    "B126": { id: "B126", label: "Operações sobre Processos", level: 3, type:'CONTENT', parent: "B12", content: B126 },

    // ===== SUBDIAGRAMA 2: ESCALONAMENTO E CONTEXTO =====
    "B21": { id: "B21", label: "2.1 Escalonamento", level: 2, parent: "B2" },
    "B22": { id: "B22", label: "2.2 Context Switch", level: 2, parent: "B2" },
    
    "B211": { id: "B211", label: "Conceito de Escalonamento", level: 3, type:'CONTENT', parent: "B21", content: B211 },
    "B212": { id: "B212", label: "Preemptivo vs Não-Preemptivo", level: 3, type:'CONTENT', parent: "B21", content: B212 },
    "B213": { id: "B213", label: "Algoritmos Básicos", level: 3, type:'CONTENT', parent: "B21", content: B213 },
    "B214": { id: "B214", label: "Critérios de Escalonamento", level: 3, type:'CONTENT', parent: "B21", content: B214 },
    "B215": { id: "B215", label: "Diagrama de Estados", level: 3, type:'CONTENT', parent: "B21", content: B215 },
    
    "B221": { id: "B221", label: "O que é Context Switch", level: 3, type:'CONTENT', parent: "B22", content: B221 },
    "B222": { id: "B222", label: "Operações durante Context Switch", level: 3, type:'CONTENT', parent: "B22", content: B222 },
    "B223": { id: "B223", label: "Overhead e Custos", level: 3, type:'CONTENT', parent: "B22", content: B223 },
    "B224": { id: "B224", label: "Quando ocorre", level: 3, type:'CONTENT', parent: "B22", content: B224 },

    // ===== SUBDIAGRAMA 3: MULTIPROGRAMAÇÃO E BATCH =====
    "B31": { id: "B31", label: "3.1 Multiprogramação", level: 2, parent: "B3" },
    "B32": { id: "B32", label: "3.2 Processamento Batch", level: 2, parent: "B3" },
    
    "B311": { id: "B311", label: "Multiprogramação vs Multitarefa", level: 3, type:'CONTENT', parent: "B31", content: B311 },
    "B312": { id: "B312", label: "Vantagens e Desvantagens", level: 3, type:'CONTENT', parent: "B31", content: B312 },
    "B313": { id: "B313", label: "Concorrência vs Paralelismo", level: 3, type:'CONTENT', parent: "B31", content: B313 },
    "B314": { id: "B314", label: "Sistemas Multi-utilizador", level: 3, type:'CONTENT', parent: "B31", content: B314 },
    
    "B321": { id: "B321", label: "Processamento por Lotes", level: 3, type:'CONTENT', parent: "B32", content: B321 },
    "B322": { id: "B322", label: "Características do Batch", level: 3, type:'CONTENT', parent: "B32", content: B322 },
    "B323": { id: "B323", label: "Sistemas Históricos", level: 3, type:'CONTENT', parent: "B32", content: B323 },
    "B324": { id: "B324", label: "Aplicações Modernas", level: 3, type:'CONTENT', parent: "B32", content: B324 },

    // ===== SUBDIAGRAMA 4: GESTÃO DE RECURSOS =====
    "B41": { id: "B41", label: "4.1 Gestão de Memória", level: 2, parent: "B4" },
    "B42": { id: "B42", label: "4.2 I/O e Interrupções", level: 2, parent: "B4" },
    
    "B411": { id: "B411", label: "Alocação de Memória", level: 3, type:'CONTENT', parent: "B41", content: B411 },
    "B412": { id: "B412", label: "Proteção de Memória", level: 3, type:'CONTENT', parent: "B41", content: B412 },
    "B413": { id: "B413", label: "Swapping", level: 3, type:'CONTENT', parent: "B41", content: B413 },
    "B414": { id: "B414", label: "Fragmentação", level: 3, type:'CONTENT', parent: "B41", content: B414 },
    "B415": { id: "B415", label: "Memória Virtual (básico)", level: 3, type:'CONTENT', parent: "B41", content: B415 },
    
    "B421": { id: "B421", label: "Dispositivos de I/O", level: 3, type:'CONTENT', parent: "B42", content: B421 },
    "B422": { id: "B422", label: "Controladores e Drivers", level: 3, type:'CONTENT', parent: "B42", content: B422 },
    "B423": { id: "B423", label: "Interrupções e Exceções", level: 3, type:'CONTENT', parent: "B42", content: B423 },
    "B424": { id: "B424", label: "DMA (Acesso Direto à Memória)", level: 3, type:'CONTENT', parent: "B42", content: B424 },
    "B425": { id: "B425", label: "Estados e I/O", level: 3, type:'CONTENT', parent: "B42", content: B425 },

    // ===== SUBDIAGRAMA 5: SISTEMAS ESPECIALIZADOS =====
    "B51": { id: "B51", label: "5.1 Sistemas de Tempo Real", level: 2, parent: "B5" },
    "B52": { id: "B52", label: "5.2 Sistemas Distribuídos", level: 2, parent: "B5" },
    
    "B511": { id: "B511", label: "Conceito de Tempo Real", level: 3, type:'CONTENT', parent: "B51", content: B511 },
    "B512": { id: "B512", label: "Hard vs Soft Real-time", level: 3, type:'CONTENT', parent: "B51", content: B512 },
    "B513": { id: "B513", label: "Deadlines e Garantias", level: 3, type:'CONTENT', parent: "B51", content: B513 },
    "B514": { id: "B514", label: "Aplicações Práticas", level: 3, type:'CONTENT', parent: "B51", content: B514 },
    
    "B521": { id: "B521", label: "Conceitos Básicos", level: 3, type:'CONTENT', parent: "B52", content: B521 },
    "B522": { id: "B522", label: "Clusters vs Distribuídos", level: 3, type:'CONTENT', parent: "B52", content: B522 },
    "B523": { id: "B523", label: "Vantagens e Desafios", level: 3, type:'CONTENT', parent: "B52", content: B523 },
    "B524": { id: "B524", label: "Exemplos de Aplicações", level: 3, type:'CONTENT', parent: "B52", content: B524 },

    // ===== SUBDIAGRAMA 6: INTERFACE E ABSTRAÇÃO =====
    "B61": { id: "B61", label: "6.1 Interface com Utilizador", level: 2, parent: "B6" },
    "B62": { id: "B62", label: "6.2 Abstração de Hardware", level: 2, parent: "B6" },
    
    "B611": { id: "B611", label: "CLI vs GUI", level: 3, type:'CONTENT', parent: "B61", content: B611 },
    "B612": { id: "B612", label: "Shell como Interface", level: 3, type:'CONTENT', parent: "B61", content: B612 },
    "B613": { id: "B613", label: "Chamadas de Sistema", level: 3, type:'CONTENT', parent: "B61", content: B613 },
    "B614": { id: "B614", label: "API do SO", level: 3, type:'CONTENT', parent: "B61", content: B614 },
    
    "B621": { id: "B621", label: "Níveis de Abstração", level: 3, type:'CONTENT', parent: "B62", content: B621 },
    "B622": { id: "B622", label: "Drivers de Dispositivos", level: 3, type:'CONTENT', parent: "B62", content: B622 },
    "B623": { id: "B623", label: "Portabilidade e Independência", level: 3, type:'CONTENT', parent: "B62", content: B623 },
    "B624": { id: "B624", label: "Virtualização (básico)", level: 3, type:'CONTENT', parent: "B62", content: B624 },

    // ===== SUBDIAGRAMA 7: TÓPICOS AVANÇADOS =====
    "B71": { id: "B71", label: "7.1 ISA vs Microarquitetura", level: 2, parent: "B7" },
    "B72": { id: "B72", label: "7.2 Booting e Inicialização", level: 2, parent: "B7" },
    
    "B711": { id: "B711", label: "Diferenças ISA/Microarquitetura", level: 3, type:'CONTENT', parent: "B71", content: B711 },
    "B712": { id: "B712", label: "Implementações de ISA", level: 3, type:'CONTENT', parent: "B71", content: B712 },
    "B713": { id: "B713", label: "Impacto no SO", level: 3, type:'CONTENT', parent: "B71", content: B713 },
    "B714": { id: "B714", label: "Exemplos Práticos", level: 3, type:'CONTENT', parent: "B71", content: B714 },
    
    "B721": { id: "B721", label: "Processo de Boot", level: 3, type:'CONTENT', parent: "B72", content: B721 },
    "B722": { id: "B722", label: "BIOS/UEFI", level: 3, type:'CONTENT', parent: "B72", content: B722 },
    "B723": { id: "B723", label: "Bootloader", level: 3, type:'CONTENT', parent: "B72", content: B723 },
    "B724": { id: "B724", label: "Inicialização do Kernel", level: 3, type:'CONTENT', parent: "B72", content: B724 }
  },

  // ===== CONEXÕES HIERÁRQUICAS COMPLETAS =====
  hierarchicalEdges: [
    // Estrutura principal
    { from: "B", to: "B1", type: "solid" },
    { from: "B", to: "B2", type: "solid" },
    { from: "B", to: "B3", type: "solid" },
    { from: "B", to: "B4", type: "solid" },
    { from: "B", to: "B5", type: "solid" },
    { from: "B", to: "B6", type: "solid" },
    { from: "B", to: "B7", type: "solid" },
    
    // Conceitos Fundamentais
    { from: "B1", to: "B11", type: "solid" },
    { from: "B1", to: "B12", type: "solid" },
    
    { from: "B11", to: "B111", type: "solid" },
    { from: "B11", to: "B112", type: "solid" },
    { from: "B11", to: "B113", type: "solid" },
    { from: "B11", to: "B114", type: "solid" },
    { from: "B11", to: "B115", type: "solid" },
    
    { from: "B12", to: "B121", type: "solid" },
    { from: "B12", to: "B122", type: "solid" },
    { from: "B12", to: "B123", type: "solid" },
    { from: "B12", to: "B124", type: "solid" },
    { from: "B12", to: "B125", type: "solid" },
    { from: "B12", to: "B126", type: "solid" },
    
    // Escalonamento e Contexto
    { from: "B2", to: "B21", type: "solid" },
    { from: "B2", to: "B22", type: "solid" },
    
    { from: "B21", to: "B211", type: "solid" },
    { from: "B21", to: "B212", type: "solid" },
    { from: "B21", to: "B213", type: "solid" },
    { from: "B21", to: "B214", type: "solid" },
    { from: "B21", to: "B215", type: "solid" },
    
    { from: "B22", to: "B221", type: "solid" },
    { from: "B22", to: "B222", type: "solid" },
    { from: "B22", to: "B223", type: "solid" },
    { from: "B22", to: "B224", type: "solid" },
    
    // Multiprogramação e Batch
    { from: "B3", to: "B31", type: "solid" },
    { from: "B3", to: "B32", type: "solid" },
    
    { from: "B31", to: "B311", type: "solid" },
    { from: "B31", to: "B312", type: "solid" },
    { from: "B31", to: "B313", type: "solid" },
    { from: "B31", to: "B314", type: "solid" },
    
    { from: "B32", to: "B321", type: "solid" },
    { from: "B32", to: "B322", type: "solid" },
    { from: "B32", to: "B323", type: "solid" },
    { from: "B32", to: "B324", type: "solid" },
    
    // Gestão de Recursos
    { from: "B4", to: "B41", type: "solid" },
    { from: "B4", to: "B42", type: "solid" },
    
    { from: "B41", to: "B411", type: "solid" },
    { from: "B41", to: "B412", type: "solid" },
    { from: "B41", to: "B413", type: "solid" },
    { from: "B41", to: "B414", type: "solid" },
    { from: "B41", to: "B415", type: "solid" },
    
    { from: "B42", to: "B421", type: "solid" },
    { from: "B42", to: "B422", type: "solid" },
    { from: "B42", to: "B423", type: "solid" },
    { from: "B42", to: "B424", type: "solid" },
    { from: "B42", to: "B425", type: "solid" },
    
    // Sistemas Especializados
    { from: "B5", to: "B51", type: "solid" },
    { from: "B5", to: "B52", type: "solid" },
    
    { from: "B51", to: "B511", type: "solid" },
    { from: "B51", to: "B512", type: "solid" },
    { from: "B51", to: "B513", type: "solid" },
    { from: "B51", to: "B514", type: "solid" },
    
    { from: "B52", to: "B521", type: "solid" },
    { from: "B52", to: "B522", type: "solid" },
    { from: "B52", to: "B523", type: "solid" },
    { from: "B52", to: "B524", type: "solid" },
    
    // Interface e Abstração
    { from: "B6", to: "B61", type: "solid" },
    { from: "B6", to: "B62", type: "solid" },
    
    { from: "B61", to: "B611", type: "solid" },
    { from: "B61", to: "B612", type: "solid" },
    { from: "B61", to: "B613", type: "solid" },
    { from: "B61", to: "B614", type: "solid" },
    
    { from: "B62", to: "B621", type: "solid" },
    { from: "B62", to: "B622", type: "solid" },
    { from: "B62", to: "B623", type: "solid" },
    { from: "B62", to: "B624", type: "solid" },
    
    // Tópicos Avançados
    { from: "B7", to: "B71", type: "solid" },
    { from: "B7", to: "B72", type: "solid" },
    
    { from: "B71", to: "B711", type: "solid" },
    { from: "B71", to: "B712", type: "solid" },
    { from: "B71", to: "B713", type: "solid" },
    { from: "B71", to: "B714", type: "solid" },
    
    { from: "B72", to: "B721", type: "solid" },
    { from: "B72", to: "B722", type: "solid" },
    { from: "B72", to: "B723", type: "solid" },
    { from: "B72", to: "B724", type: "solid" }
  ],

  // ===== CONEXÕES CRUZADAS =====
  crossConnections: [
    // Conexões entre Processos e Escalonamento
    { from: "B12", to: "B21", type: "dashed", color: "blue", label: "Processos → Escalonamento" },
    { from: "B123", to: "B215", type: "dashed", color: "blue", label: "Estados → Diagrama" },
    
    // Conexões entre Escalonamento e Context Switch
    { from: "B21", to: "B22", type: "dashed", color: "green", label: "Escalonamento → Context Switch" },
    { from: "B212", to: "B224", type: "dashed", color: "green", label: "Preempção → Quando ocorre" },
    
    // Conexões entre Multiprogramação e Gestão de Memória
    { from: "B31", to: "B41", type: "dashed", color: "purple", label: "Multiprogramação → Memória" },
    { from: "B313", to: "B412", type: "dashed", color: "purple", label: "Concorrência → Proteção" },
    
    // Conexões entre I/O e Estados de Processo
    { from: "B42", to: "B123", type: "dashed", color: "orange", label: "I/O → Estados" },
    { from: "B425", to: "B214", type: "dashed", color: "orange", label: "Estados e I/O → Critérios" },
    
    // Conexões entre Tempo Real e Escalonamento
    { from: "B51", to: "B21", type: "dashed", color: "red", label: "Tempo Real → Escalonamento" },
    { from: "B513", to: "B214", type: "dashed", color: "red", label: "Deadlines → Critérios" },
    
    // Conexões entre Interface e Conceitos Básicos
    { from: "B61", to: "B11", type: "dashed", color: "teal", label: "Interface → Objetivos" },
    { from: "B612", to: "B113", type: "dashed", color: "teal", label: "Shell → Evolução" },
    
    // Conexões entre Abstração e I/O
    { from: "B62", to: "B42", type: "dashed", color: "brown", label: "Abstração → I/O" },
    { from: "B622", to: "B422", type: "dashed", color: "brown", label: "Drivers → Controladores" },
    
    // Conexões entre ISA e Processos
    { from: "B71", to: "B12", type: "dashed", color: "pink", label: "ISA → Processos" },
    { from: "B713", to: "B126", type: "dashed", color: "pink", label: "Impacto no SO → Operações" },
    
    // Conexões entre Booting e Conceitos Básicos
    { from: "B72", to: "B111", type: "dashed", color: "gray", label: "Booting → O que é SO" },
    { from: "B724", to: "B115", type: "dashed", color: "gray", label: "Kernel → Arquitetura" }
  ],

  // ===== METADADOS PARA FRONTEND =====
  metadata: {
    totalNodes: 68,
    totalConnections: 94,
    lastUpdated: "2024-01-15",
    version: "1.0",
    examFocus: ["PRCMP - Exames 2021-2024"],
    keyTopics: [
      "Processos e PCB",
      "Escalonamento Preemptivo/Não-Preemptivo", 
      "Context Switch",
      "Multiprogramação vs Multitarefa",
      "Processamento Batch",
      "Sistemas de Tempo Real",
      "I/O e Interrupções"
    ]
  }
};