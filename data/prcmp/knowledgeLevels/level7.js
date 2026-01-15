// ===== IMPORTS DE CONTEÚDO NÍVEL 7 - COMPILADORES, INTERPRETADORES E FERRAMENTAS =====

// 1.1 Assembler (Montador)
import { H111 } from './content/level7/H111'  // Conceito de Assembler
import { H112 } from './content/level7/H112'  // Funcionalidades do Assembler
import { H113 } from './content/level7/H113'  // Processo de Montagem
import { H114 } from './content/level7/H114'  // Exemplos de Assemblers

// 1.2 Linker (Ligador)
import { H121 } from './content/level7/H121'  // Conceito de Linker
import { H122 } from './content/level7/H122'  // Funcionalidades do Linker
import { H123 } from './content/level7/H123'  // Tipos de Ligação (estática vs dinâmica)
import { H124 } from './content/level7/H124'  // Tabela de Símbolos e Relocação

// 1.3 Debugger (Depurador)
import { H131 } from './content/level7/H131'  // Conceito de Debugger
import { H132 } from './content/level7/H132'  // Funcionalidades de Debugging
import { H133 } from './content/level7/H133'  // Técnicas de Debugging
import { H134 } from './content/level7/H134'  // Exemplos de Debuggers

// 2.1 Compilador
import { H211 } from './content/level7/H211'  // Conceito de Compilador
import { H212 } from './content/level7/H212'  // Fases da Compilação
import { H213 } from './content/level7/H213'  // Otimizações no Compilador
import { H214 } from './content/level7/H214'  // Exemplos de Compiladores

// 2.2 Interpretador
import { H221 } from './content/level7/H221'  // Conceito de Interpretador
import { H222 } from './content/level7/H222'  // Funcionamento do Interpretador
import { H223 } from './content/level7/H223'  // Vantagens e Desvantagens
import { H224 } from './content/level7/H224'  // Exemplos de Interpretadores

// 2.3 Comparação Compilação vs Interpretação
import { H231 } from './content/level7/H231'  // Diferenças entre Compilação e Interpretação
import { H232 } from './content/level7/H232'  // Desempenho: Compilado vs Interpretado
import { H233 } from './content/level7/H233'  // Portabilidade e Distribuição
import { H234 } from './content/level7/H234'  // JIT (Just-In-Time Compilation)

// 3.1 Linguagens de Alto Nível
import { H311 } from './content/level7/H311'  // Conceito de Linguagens de Alto Nível
import { H312 } from './content/level7/H312'  // Abstração e Legibilidade
import { H313 } from './content/level7/H313'  // Paradigmas de Programação
import { H314 } from './content/level7/H314'  // Exemplos de Linguagens

// 3.2 Hierarquia de Linguagens
import { H321 } from './content/level7/H321'  // Níveis de Linguagem (máquina, assembly, alto nível)
import { H322 } from './content/level7/H322'  // Necessidade de Tradução
import { H323 } from './content/level7/H323'  // Portabilidade e Performance
import { H324 } from './content/level7/H324'  // Máquinas Virtuais e Bytecode

// 4.1 Processo de Build
import { H411 } from './content/level7/H411'  // Toolchain (cadeia de ferramentas)
import { H412 } from './content/level7/H412'  // Pré-processador, Compilador, Assembler, Linker
import { H413 } from './content/level7/H413'  // Ficheiros Intermediários (.o, .obj)
import { H414 } from './content/level7/H414'  // Makefiles e Build Automation

// 4.2 Bibliotecas (Libraries)
import { H421 } from './content/level7/H421'  // Conceito de Bibliotecas
import { H422 } from './content/level7/H422'  // Bibliotecas Estáticas vs Dinâmicas
import { H423 } from './content/level7/H423'  // Linking com Bibliotecas
import { H424 } from './content/level7/H424'  // Problemas comuns (DLL Hell)

// 5.1 Shell Script
import { H511 } from './content/level7/H511'  // Conceito de Shell Script
import { H512 } from './content/level7/H512'  // Uso de Shell Script para Automação
import { H513 } from './content/level7/H513'  // Exemplos de Tarefas (backup, monitorização)
import { H514 } from './content/level7/H514'  // Limitações e Alternativas

// 5.2 Automação e Scripting
import { H521 } from './content/level7/H521'  // Scripting vs Programação
import { H522 } from './content/level7/H522'  // Linguagens de Scripting (Python, Bash, PowerShell)
import { H523 } from './content/level7/H523'  // Automação de Tarefas Administrativas
import { H524 } from './content/level7/H524'  // Cron Jobs e Agendamento

export const level7KnowledgeTree = {
  title: "Compiladores, Interpretadores e Ferramentas de Desenvolvimento - Mapa Completo de Conhecimento",
  description: "Diagrama hierárquico top-down do conhecimento em Compiladores, Interpretadores, Assemblers, Linkers e ferramentas baseado no ex7",
  nodes: {
    // ===== NÍVEL 1: CATEGORIAS PRINCIPAIS =====
    "H": { id: "H", label: "Compiladores, Interpretadores e Ferramentas", level: 1, type: "root" },
    
    // ===== CATEGORIAS PRINCIPAIS =====
    "H1": { id: "H1", label: "1. Ferramentas de Desenvolvimento", level: 1, parent: "H" },
    "H2": { id: "H2", label: "2. Compiladores e Interpretadores", level: 1, parent: "H" },
    "H3": { id: "H3", label: "3. Linguagens de Programação", level: 1, parent: "H" },
    "H4": { id: "H4", label: "4. Processo de Build e Bibliotecas", level: 1, parent: "H" },
    "H5": { id: "H5", label: "5. Shell Script e Automação", level: 1, parent: "H" },

    // ===== SUBDIAGRAMA 1: FERRAMENTAS DE DESENVOLVIMENTO =====
    "H11": { id: "H11", label: "1.1 Assembler (Montador)", level: 2, parent: "H1" },
    "H12": { id: "H12", label: "1.2 Linker (Ligador)", level: 2, parent: "H1" },
    "H13": { id: "H13", label: "1.3 Debugger (Depurador)", level: 2, parent: "H1" },
    
    "H111": { id: "H111", label: "Conceito de Assembler", level: 3, type: 'CONTENT', parent: "H11", content: H111 },
    "H112": { id: "H112", label: "Funcionalidades do Assembler", level: 3, type: 'CONTENT', parent: "H11", content: H112 },
    "H113": { id: "H113", label: "Processo de Montagem", level: 3, type: 'CONTENT', parent: "H11", content: H113 },
    "H114": { id: "H114", label: "Exemplos de Assemblers", level: 3, type: 'CONTENT', parent: "H11", content: H114 },
    
    "H121": { id: "H121", label: "Conceito de Linker", level: 3, type: 'CONTENT', parent: "H12", content: H121 },
    "H122": { id: "H122", label: "Funcionalidades do Linker", level: 3, type: 'CONTENT', parent: "H12", content: H122 },
    "H123": { id: "H123", label: "Tipos de Ligação", level: 3, type: 'CONTENT', parent: "H12", content: H123 },
    "H124": { id: "H124", label: "Tabela de Símbolos e Relocação", level: 3, type: 'CONTENT', parent: "H12", content: H124 },
    
    "H131": { id: "H131", label: "Conceito de Debugger", level: 3, type: 'CONTENT', parent: "H13", content: H131 },
    "H132": { id: "H132", label: "Funcionalidades de Debugging", level: 3, type: 'CONTENT', parent: "H13", content: H132 },
    "H133": { id: "H133", label: "Técnicas de Debugging", level: 3, type: 'CONTENT', parent: "H13", content: H133 },
    "H134": { id: "H134", label: "Exemplos de Debuggers", level: 3, type: 'CONTENT', parent: "H13", content: H134 },

    // ===== SUBDIAGRAMA 2: COMPILADORES E INTERPRETADORES =====
    "H21": { id: "H21", label: "2.1 Compilador", level: 2, parent: "H2" },
    "H22": { id: "H22", label: "2.2 Interpretador", level: 2, parent: "H2" },
    "H23": { id: "H23", label: "2.3 Compilação vs Interpretação", level: 2, parent: "H2" },
    
    "H211": { id: "H211", label: "Conceito de Compilador", level: 3, type: 'CONTENT', parent: "H21", content: H211 },
    "H212": { id: "H212", label: "Fases da Compilação", level: 3, type: 'CONTENT', parent: "H21", content: H212 },
    "H213": { id: "H213", label: "Otimizações no Compilador", level: 3, type: 'CONTENT', parent: "H21", content: H213 },
    "H214": { id: "H214", label: "Exemplos de Compiladores", level: 3, type: 'CONTENT', parent: "H21", content: H214 },
    
    "H221": { id: "H221", label: "Conceito de Interpretador", level: 3, type: 'CONTENT', parent: "H22", content: H221 },
    "H222": { id: "H222", label: "Funcionamento do Interpretador", level: 3, type: 'CONTENT', parent: "H22", content: H222 },
    "H223": { id: "H223", label: "Vantagens e Desvantagens", level: 3, type: 'CONTENT', parent: "H22", content: H223 },
    "H224": { id: "H224", label: "Exemplos de Interpretadores", level: 3, type: 'CONTENT', parent: "H22", content: H224 },
    
    "H231": { id: "H231", label: "Diferenças entre Compilação e Interpretação", level: 3, type: 'CONTENT', parent: "H23", content: H231 },
    "H232": { id: "H232", label: "Desempenho: Compilado vs Interpretado", level: 3, type: 'CONTENT', parent: "H23", content: H232 },
    "H233": { id: "H233", label: "Portabilidade e Distribuição", level: 3, type: 'CONTENT', parent: "H23", content: H233 },
    "H234": { id: "H234", label: "JIT (Just-In-Time Compilation)", level: 3, type: 'CONTENT', parent: "H23", content: H234 },

    // ===== SUBDIAGRAMA 3: LINGUAGENS DE PROGRAMAÇÃO =====
    "H31": { id: "H31", label: "3.1 Linguagens de Alto Nível", level: 2, parent: "H3" },
    "H32": { id: "H32", label: "3.2 Hierarquia de Linguagens", level: 2, parent: "H3" },
    
    "H311": { id: "H311", label: "Conceito de Linguagens de Alto Nível", level: 3, type: 'CONTENT', parent: "H31", content: H311 },
    "H312": { id: "H312", label: "Abstração e Legibilidade", level: 3, type: 'CONTENT', parent: "H31", content: H312 },
    "H313": { id: "H313", label: "Paradigmas de Programação", level: 3, type: 'CONTENT', parent: "H31", content: H313 },
    "H314": { id: "H314", label: "Exemplos de Linguagens", level: 3, type: 'CONTENT', parent: "H31", content: H314 },
    
    "H321": { id: "H321", label: "Níveis de Linguagem", level: 3, type: 'CONTENT', parent: "H32", content: H321 },
    "H322": { id: "H322", label: "Necessidade de Tradução", level: 3, type: 'CONTENT', parent: "H32", content: H322 },
    "H323": { id: "H323", label: "Portabilidade e Performance", level: 3, type: 'CONTENT', parent: "H32", content: H323 },
    "H324": { id: "H324", label: "Máquinas Virtuais e Bytecode", level: 3, type: 'CONTENT', parent: "H32", content: H324 },

    // ===== SUBDIAGRAMA 4: PROCESSO DE BUILD E BIBLIOTECAS =====
    "H41": { id: "H41", label: "4.1 Processo de Build", level: 2, parent: "H4" },
    "H42": { id: "H42", label: "4.2 Bibliotecas (Libraries)", level: 2, parent: "H4" },
    
    "H411": { id: "H411", label: "Toolchain (cadeia de ferramentas)", level: 3, type: 'CONTENT', parent: "H41", content: H411 },
    "H412": { id: "H412", label: "Pré-processador, Compilador, Assembler, Linker", level: 3, type: 'CONTENT', parent: "H41", content: H412 },
    "H413": { id: "H413", label: "Ficheiros Intermediários", level: 3, type: 'CONTENT', parent: "H41", content: H413 },
    "H414": { id: "H414", label: "Makefiles e Build Automation", level: 3, type: 'CONTENT', parent: "H41", content: H414 },
    
    "H421": { id: "H421", label: "Conceito de Bibliotecas", level: 3, type: 'CONTENT', parent: "H42", content: H421 },
    "H422": { id: "H422", label: "Bibliotecas Estáticas vs Dinâmicas", level: 3, type: 'CONTENT', parent: "H42", content: H422 },
    "H423": { id: "H423", label: "Linking com Bibliotecas", level: 3, type: 'CONTENT', parent: "H42", content: H423 },
    "H424": { id: "H424", label: "Problemas comuns (DLL Hell)", level: 3, type: 'CONTENT', parent: "H42", content: H424 },

    // ===== SUBDIAGRAMA 5: SHELL SCRIPT E AUTOMAÇÃO =====
    "H51": { id: "H51", label: "5.1 Shell Script", level: 2, parent: "H5" },
    "H52": { id: "H52", label: "5.2 Automação e Scripting", level: 2, parent: "H5" },
    
    "H511": { id: "H511", label: "Conceito de Shell Script", level: 3, type: 'CONTENT', parent: "H51", content: H511 },
    "H512": { id: "H512", label: "Uso de Shell Script para Automação", level: 3, type: 'CONTENT', parent: "H51", content: H512 },
    "H513": { id: "H513", label: "Exemplos de Tarefas", level: 3, type: 'CONTENT', parent: "H51", content: H513 },
    "H514": { id: "H514", label: "Limitações e Alternativas", level: 3, type: 'CONTENT', parent: "H51", content: H514 },
    
    "H521": { id: "H521", label: "Scripting vs Programação", level: 3, type: 'CONTENT', parent: "H52", content: H521 },
    "H522": { id: "H522", label: "Linguagens de Scripting", level: 3, type: 'CONTENT', parent: "H52", content: H522 },
    "H523": { id: "H523", label: "Automação de Tarefas Administrativas", level: 3, type: 'CONTENT', parent: "H52", content: H523 },
    "H524": { id: "H524", label: "Cron Jobs e Agendamento", level: 3, type: 'CONTENT', parent: "H52", content: H524 }
  },

  // ===== CONEXÕES HIERÁRQUICAS COMPLETAS =====
  hierarchicalEdges: [
    // Estrutura principal
    { from: "H", to: "H1", type: "solid" },
    { from: "H", to: "H2", type: "solid" },
    { from: "H", to: "H3", type: "solid" },
    { from: "H", to: "H4", type: "solid" },
    { from: "H", to: "H5", type: "solid" },
    
    // Ferramentas de Desenvolvimento
    { from: "H1", to: "H11", type: "solid" },
    { from: "H1", to: "H12", type: "solid" },
    { from: "H1", to: "H13", type: "solid" },
    
    { from: "H11", to: "H111", type: "solid" },
    { from: "H11", to: "H112", type: "solid" },
    { from: "H11", to: "H113", type: "solid" },
    { from: "H11", to: "H114", type: "solid" },
    
    { from: "H12", to: "H121", type: "solid" },
    { from: "H12", to: "H122", type: "solid" },
    { from: "H12", to: "H123", type: "solid" },
    { from: "H12", to: "H124", type: "solid" },
    
    { from: "H13", to: "H131", type: "solid" },
    { from: "H13", to: "H132", type: "solid" },
    { from: "H13", to: "H133", type: "solid" },
    { from: "H13", to: "H134", type: "solid" },
    
    // Compiladores e Interpretadores
    { from: "H2", to: "H21", type: "solid" },
    { from: "H2", to: "H22", type: "solid" },
    { from: "H2", to: "H23", type: "solid" },
    
    { from: "H21", to: "H211", type: "solid" },
    { from: "H21", to: "H212", type: "solid" },
    { from: "H21", to: "H213", type: "solid" },
    { from: "H21", to: "H214", type: "solid" },
    
    { from: "H22", to: "H221", type: "solid" },
    { from: "H22", to: "H222", type: "solid" },
    { from: "H22", to: "H223", type: "solid" },
    { from: "H22", to: "H224", type: "solid" },
    
    { from: "H23", to: "H231", type: "solid" },
    { from: "H23", to: "H232", type: "solid" },
    { from: "H23", to: "H233", type: "solid" },
    { from: "H23", to: "H234", type: "solid" },
    
    // Linguagens de Programação
    { from: "H3", to: "H31", type: "solid" },
    { from: "H3", to: "H32", type: "solid" },
    
    { from: "H31", to: "H311", type: "solid" },
    { from: "H31", to: "H312", type: "solid" },
    { from: "H31", to: "H313", type: "solid" },
    { from: "H31", to: "H314", type: "solid" },
    
    { from: "H32", to: "H321", type: "solid" },
    { from: "H32", to: "H322", type: "solid" },
    { from: "H32", to: "H323", type: "solid" },
    { from: "H32", to: "H324", type: "solid" },
    
    // Processo de Build e Bibliotecas
    { from: "H4", to: "H41", type: "solid" },
    { from: "H4", to: "H42", type: "solid" },
    
    { from: "H41", to: "H411", type: "solid" },
    { from: "H41", to: "H412", type: "solid" },
    { from: "H41", to: "H413", type: "solid" },
    { from: "H41", to: "H414", type: "solid" },
    
    { from: "H42", to: "H421", type: "solid" },
    { from: "H42", to: "H422", type: "solid" },
    { from: "H42", to: "H423", type: "solid" },
    { from: "H42", to: "H424", type: "solid" },
    
    // Shell Script e Automação
    { from: "H5", to: "H51", type: "solid" },
    { from: "H5", to: "H52", type: "solid" },
    
    { from: "H51", to: "H511", type: "solid" },
    { from: "H51", to: "H512", type: "solid" },
    { from: "H51", to: "H513", type: "solid" },
    { from: "H51", to: "H514", type: "solid" },
    
    { from: "H52", to: "H521", type: "solid" },
    { from: "H52", to: "H522", type: "solid" },
    { from: "H52", to: "H523", type: "solid" },
    { from: "H52", to: "H524", type: "solid" }
  ],

  // ===== CONEXÕES CRUZADAS =====
  crossConnections: [
    // Conexões entre Assembler e Processo de Build
    { from: "H11", to: "H41", type: "dashed", color: "blue", label: "Assembler → Processo de Build" },
    { from: "H111", to: "H412", type: "dashed", color: "blue", label: "Conceito Assembler → Toolchain" },
    
    // Conexões entre Linker e Bibliotecas
    { from: "H12", to: "H42", type: "dashed", color: "green", label: "Linker → Bibliotecas" },
    { from: "H123", to: "H422", type: "dashed", color: "green", label: "Tipos de Ligação → Bibliotecas Estáticas vs Dinâmicas" },
    
    // Conexões entre Compilador e Linguagens de Alto Nível
    { from: "H21", to: "H31", type: "dashed", color: "purple", label: "Compilador → Linguagens de Alto Nível" },
    { from: "H211", to: "H311", type: "dashed", color: "purple", label: "Conceito Compilador → Conceito Linguagens Alto Nível" },
    
    // Conexões entre Interpretador e Shell Script
    { from: "H22", to: "H51", type: "dashed", color: "orange", label: "Interpretador → Shell Script" },
    { from: "H221", to: "H511", type: "dashed", color: "orange", label: "Conceito Interpretador → Shell Script" },
    
    // Conexões entre Debugger e Técnicas de Debugging
    { from: "H13", to: "H23", type: "dashed", color: "red", label: "Debugger → Compilação vs Interpretação" },
    { from: "H133", to: "H231", type: "dashed", color: "red", label: "Técnicas Debugging → Diferenças Compilação/Interpretação" },
    
    // Conexões entre Processo de Build e Compilador
    { from: "H41", to: "H21", type: "dashed", color: "teal", label: "Processo de Build → Compilador" },
    { from: "H412", to: "H212", type: "dashed", color: "teal", label: "Toolchain → Fases da Compilação" },
    
    // Conexões entre Hierarquia de Linguagens e Tradução
    { from: "H32", to: "H2", type: "dashed", color: "brown", label: "Hierarquia de Linguagens → Compiladores/Interpretadores" },
    { from: "H322", to: "H211", type: "dashed", color: "brown", label: "Necessidade de Tradução → Compilador" },
    
    // Conexões entre JIT e Performance
    { from: "H234", to: "H232", type: "dashed", color: "pink", label: "JIT → Desempenho Compilado vs Interpretado" },
    
    // Conexões entre Shell Script e Automação
    { from: "H51", to: "H52", type: "dashed", color: "gray", label: "Shell Script → Automação" },
    { from: "H512", to: "H523", type: "dashed", color: "gray", label: "Uso Shell Script → Automação Tarefas" },
    
    // Conexões entre Bibliotecas e Linker
    { from: "H42", to: "H12", type: "dashed", color: "cyan", label: "Bibliotecas → Linker" },
    { from: "H421", to: "H121", type: "dashed", color: "cyan", label: "Conceito Bibliotecas → Conceito Linker" }
  ],

  // ===== METADADOS PARA FRONTEND =====
  metadata: {
    totalNodes: 60,
    totalConnections: 84,
    lastUpdated: "2024-01-15",
    version: "1.0",
    examFocus: ["PRCMP - Exames Compiladores, Interpretadores e Ferramentas"],
    keyTopics: [
      "Assembler (montador): traduz assembly para código máquina",
      "Linker (ligador): combina ficheiros objeto e resolve símbolos",
      "Debugger (depurador): inspeciona estado do programa durante execução",
      "Compilador: traduz código de alto nível para baixo nível",
      "Interpretador: executa código linha a linha em tempo real",
      "Diferenças entre compilação e interpretação",
      "Linguagens de alto nível: abstração e legibilidade",
      "Processo de build: toolchain e ficheiros intermediários",
      "Bibliotecas estáticas vs dinâmicas",
      "Shell script: automação de tarefas administrativas"
    ]
  }
};