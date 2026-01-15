// ===== IMPORTS DE CONTEÚDO NÍVEL 3 - REPRESENTAÇÃO DE DADOS =====

// 1.1 Sistemas Numéricos
import { D111 } from './content/level3/D111'  // Sistemas de Numeração
import { D112 } from './content/level3/D112'  // Conversão entre Bases
import { D113 } from './content/level3/D113'  // Binário, Octal, Hexadecimal
import { D114 } from './content/level3/D114'  // Comparação de Bases

// 1.2 Representação de Inteiros
import { D121 } from './content/level3/D121'  // Inteiros sem Sinal
import { D122 } from './content/level3/D122'  // Complemento para 2
import { D123 } from './content/level3/D123'  // Sinal e Magnitude
import { D124 } from './content/level3/D124'  // Complemento para 1
import { D125 } from './content/level3/D125'  // Representação Única do Zero

// 2.1 Ponto Flutuante
import { D211 } from './content/level3/D211'  // Padrão IEEE 754
import { D212 } from './content/level3/D212'  // Precisão Simples (32 bits)
import { D213 } from './content/level3/D213'  // Precisão Dupla (64 bits)
import { D214 } from './content/level3/D214'  // Componentes: Sinal, Expoente, Mantissa
import { D215 } from './content/level3/D215'  // Valores Especiais (NaN, Infinito)

// 2.2 Precisão e Erros
import { D221 } from './content/level3/D221'  // Erros de Arredondamento
import { D222 } from './content/level3/D222'  // Precisão vs Faixa (Range)
import { D223 } from './content/level3/D223'  // Números Subnormais
import { D224 } from './content/level3/D224'  // Perda de Precisão

// 3.1 Operações Bitwise
import { D311 } from './content/level3/D311'  // Operadores AND, OR, XOR, NOT
import { D312 } from './content/level3/D312'  // Deslocamento de Bits
import { D313 } from './content/level3/D313'  // Máscaras de Bits
import { D314 } from './content/level3/D314'  // Aplicações Práticas

// 3.2 Manipulação de Bits
import { D321 } from './content/level3/D321'  // Setar Bits (OR)
import { D322 } from './content/level3/D322'  // Limpar Bits (AND)
import { D323 } from './content/level3/D323'  // Alternar Bits (XOR)
import { D324 } from './content/level3/D324'  // Testar Bits (AND)
import { D325 } from './content/level3/D325'  // Extração de Campos

// 4.1 Representação de Frações
import { D411 } from './content/level3/D411'  // Frações em Diferentes Bases
import { D412 } from './content/level3/D412'  // Frações Binárias
import { D413 } from './content/level3/D413'  // Frações Decimais
import { D414 } from './content/level3/D414'  // Frações Periódicas

// 4.2 Exatidão de Representação
import { D421 } from './content/level3/D421'  // Representação Exata vs Aproximada
import { D422 } from './content/level3/D422'  // Números Racionais vs Irracionais
import { D423 } from './content/level3/D423'  // Erros em Conversões
import { D424 } from './content/level3/D424'  // Impacto na Precisão Numérica

// 5.1 Comparação de Formatos
import { D511 } from './content/level3/D511'  // Inteiros vs Ponto Flutuante
import { D512 } from './content/level3/D512'  // Precisão Simples vs Dupla
import { D513 } from './content/level3/D513'  // Sem Sinal vs Com Sinal
import { D514 } from './content/level3/D514'  // Eficiência vs Precisão

// 5.2 Aplicações Práticas
import { D521 } from './content/level3/D521'  // Escolha do Tipo de Dados
import { D522 } from './content/level3/D522'  // Problemas Comuns de Representação
import { D523 } from './content/level3/D523'  // Boas Práticas
import { D524 } from './content/level3/D524'  // Exemplos Reais


export const level3KnowledgeTree = {
  title: "Representação de Dados - Mapa Completo de Conhecimento",
  description: "Diagrama hierárquico top-down do conhecimento em Representação de Dados/Números baseado no ex3",
  nodes: {
    // ===== NÍVEL 1: CATEGORIAS PRINCIPAIS =====
    "D": { id: "D", label: "Representação de Dados", level: 1, type: "root" },
    
    // ===== CATEGORIAS PRINCIPAIS =====
    "D1": { id: "D1", label: "1. Sistemas Numéricos e Inteiros", level: 1, parent: "D" },
    "D2": { id: "D2", label: "2. Ponto Flutuante e Precisão", level: 1, parent: "D" },
    "D3": { id: "D3", label: "3. Operações Bitwise", level: 1, parent: "D" },
    "D4": { id: "D4", label: "4. Frações e Exatidão", level: 1, parent: "D" },
    "D5": { id: "D5", label: "5. Comparação e Aplicações", level: 1, parent: "D" },

    // ===== SUBDIAGRAMA 1: SISTEMAS NUMÉRICOS E INTEIROS =====
    "D11": { id: "D11", label: "1.1 Sistemas Numéricos", level: 2, parent: "D1" },
    "D12": { id: "D12", label: "1.2 Representação de Inteiros", level: 2, parent: "D1" },
    
    "D111": { id: "D111", label: "Sistemas de Numeração", level: 3, type: 'CONTENT', parent: "D11", content: D111 },
    "D112": { id: "D112", label: "Conversão entre Bases", level: 3, type: 'CONTENT', parent: "D11", content: D112 },
    "D113": { id: "D113", label: "Binário, Octal, Hexadecimal", level: 3, type: 'CONTENT', parent: "D11", content: D113 },
    "D114": { id: "D114", label: "Comparação de Bases", level: 3, type: 'CONTENT', parent: "D11", content: D114 },
    
    "D121": { id: "D121", label: "Inteiros sem Sinal", level: 3, type: 'CONTENT', parent: "D12", content: D121 },
    "D122": { id: "D122", label: "Complemento para 2", level: 3, type: 'CONTENT', parent: "D12", content: D122 },
    "D123": { id: "D123", label: "Sinal e Magnitude", level: 3, type: 'CONTENT', parent: "D12", content: D123 },
    "D124": { id: "D124", label: "Complemento para 1", level: 3, type: 'CONTENT', parent: "D12", content: D124 },
    "D125": { id: "D125", label: "Representação Única do Zero", level: 3, type: 'CONTENT', parent: "D12", content: D125 },

    // ===== SUBDIAGRAMA 2: PONTO FLUTUANTE E PRECISÃO =====
    "D21": { id: "D21", label: "2.1 Ponto Flutuante", level: 2, parent: "D2" },
    "D22": { id: "D22", label: "2.2 Precisão e Erros", level: 2, parent: "D2" },
    
    "D211": { id: "D211", label: "Padrão IEEE 754", level: 3, type: 'CONTENT', parent: "D21", content: D211 },
    "D212": { id: "D212", label: "Precisão Simples (32 bits)", level: 3, type: 'CONTENT', parent: "D21", content: D212 },
    "D213": { id: "D213", label: "Precisão Dupla (64 bits)", level: 3, type: 'CONTENT', parent: "D21", content: D213 },
    "D214": { id: "D214", label: "Componentes: Sinal, Expoente, Mantissa", level: 3, type: 'CONTENT', parent: "D21", content: D214 },
    "D215": { id: "D215", label: "Valores Especiais (NaN, Infinito)", level: 3, type: 'CONTENT', parent: "D21", content: D215 },
    
    "D221": { id: "D221", label: "Erros de Arredondamento", level: 3, type: 'CONTENT', parent: "D22", content: D221 },
    "D222": { id: "D222", label: "Precisão vs Faixa (Range)", level: 3, type: 'CONTENT', parent: "D22", content: D222 },
    "D223": { id: "D223", label: "Números Subnormais", level: 3, type: 'CONTENT', parent: "D22", content: D223 },
    "D224": { id: "D224", label: "Perda de Precisão", level: 3, type: 'CONTENT', parent: "D22", content: D224 },

    // ===== SUBDIAGRAMA 3: OPERAÇÕES BITWISE =====
    "D31": { id: "D31", label: "3.1 Operações Bitwise", level: 2, parent: "D3" },
    "D32": { id: "D32", label: "3.2 Manipulação de Bits", level: 2, parent: "D3" },
    
    "D311": { id: "D311", label: "Operadores AND, OR, XOR, NOT", level: 3, type: 'CONTENT', parent: "D31", content: D311 },
    "D312": { id: "D312", label: "Deslocamento de Bits", level: 3, type: 'CONTENT', parent: "D31", content: D312 },
    "D313": { id: "D313", label: "Máscaras de Bits", level: 3, type: 'CONTENT', parent: "D31", content: D313 },
    "D314": { id: "D314", label: "Aplicações Práticas", level: 3, type: 'CONTENT', parent: "D31", content: D314 },
    
    "D321": { id: "D321", label: "Setar Bits (OR)", level: 3, type: 'CONTENT', parent: "D32", content: D321 },
    "D322": { id: "D322", label: "Limpar Bits (AND)", level: 3, type: 'CONTENT', parent: "D32", content: D322 },
    "D323": { id: "D323", label: "Alternar Bits (XOR)", level: 3, type: 'CONTENT', parent: "D32", content: D323 },
    "D324": { id: "D324", label: "Testar Bits (AND)", level: 3, type: 'CONTENT', parent: "D32", content: D324 },
    "D325": { id: "D325", label: "Extração de Campos", level: 3, type: 'CONTENT', parent: "D32", content: D325 },

    // ===== SUBDIAGRAMA 4: FRAÇÕES E EXATIDÃO =====
    "D41": { id: "D41", label: "4.1 Representação de Frações", level: 2, parent: "D4" },
    "D42": { id: "D42", label: "4.2 Exatidão de Representação", level: 2, parent: "D4" },
    
    "D411": { id: "D411", label: "Frações em Diferentes Bases", level: 3, type: 'CONTENT', parent: "D41", content: D411 },
    "D412": { id: "D412", label: "Frações Binárias", level: 3, type: 'CONTENT', parent: "D41", content: D412 },
    "D413": { id: "D413", label: "Frações Decimais", level: 3, type: 'CONTENT', parent: "D41", content: D413 },
    "D414": { id: "D414", label: "Frações Periódicas", level: 3, type: 'CONTENT', parent: "D41", content: D414 },
    
    "D421": { id: "D421", label: "Representação Exata vs Aproximada", level: 3, type: 'CONTENT', parent: "D42", content: D421 },
    "D422": { id: "D422", label: "Números Racionais vs Irracionais", level: 3, type: 'CONTENT', parent: "D42", content: D422 },
    "D423": { id: "D423", label: "Erros em Conversões", level: 3, type: 'CONTENT', parent: "D42", content: D423 },
    "D424": { id: "D424", label: "Impacto na Precisão Numérica", level: 3, type: 'CONTENT', parent: "D42", content: D424 },

    // ===== SUBDIAGRAMA 5: COMPARAÇÃO E APLICAÇÕES =====
    "D51": { id: "D51", label: "5.1 Comparação de Formatos", level: 2, parent: "D5" },
    "D52": { id: "D52", label: "5.2 Aplicações Práticas", level: 2, parent: "D5" },
    
    "D511": { id: "D511", label: "Inteiros vs Ponto Flutuante", level: 3, type: 'CONTENT', parent: "D51", content: D511 },
    "D512": { id: "D512", label: "Precisão Simples vs Dupla", level: 3, type: 'CONTENT', parent: "D51", content: D512 },
    "D513": { id: "D513", label: "Sem Sinal vs Com Sinal", level: 3, type: 'CONTENT', parent: "D51", content: D513 },
    "D514": { id: "D514", label: "Eficiência vs Precisão", level: 3, type: 'CONTENT', parent: "D51", content: D514 },
    
    "D521": { id: "D521", label: "Escolha do Tipo de Dados", level: 3, type: 'CONTENT', parent: "D52", content: D521 },
    "D522": { id: "D522", label: "Problemas Comuns de Representação", level: 3, type: 'CONTENT', parent: "D52", content: D522 },
    "D523": { id: "D523", label: "Boas Práticas", level: 3, type: 'CONTENT', parent: "D52", content: D523 },
    "D524": { id: "D524", label: "Exemplos Reais", level: 3, type: 'CONTENT', parent: "D52", content: D524 }
  },

  // ===== CONEXÕES HIERÁRQUICAS COMPLETAS =====
  hierarchicalEdges: [
    // Estrutura principal
    { from: "D", to: "D1", type: "solid" },
    { from: "D", to: "D2", type: "solid" },
    { from: "D", to: "D3", type: "solid" },
    { from: "D", to: "D4", type: "solid" },
    { from: "D", to: "D5", type: "solid" },
    
    // Sistemas Numéricos e Inteiros
    { from: "D1", to: "D11", type: "solid" },
    { from: "D1", to: "D12", type: "solid" },
    
    { from: "D11", to: "D111", type: "solid" },
    { from: "D11", to: "D112", type: "solid" },
    { from: "D11", to: "D113", type: "solid" },
    { from: "D11", to: "D114", type: "solid" },
    
    { from: "D12", to: "D121", type: "solid" },
    { from: "D12", to: "D122", type: "solid" },
    { from: "D12", to: "D123", type: "solid" },
    { from: "D12", to: "D124", type: "solid" },
    { from: "D12", to: "D125", type: "solid" },
    
    // Ponto Flutuante e Precisão
    { from: "D2", to: "D21", type: "solid" },
    { from: "D2", to: "D22", type: "solid" },
    
    { from: "D21", to: "D211", type: "solid" },
    { from: "D21", to: "D212", type: "solid" },
    { from: "D21", to: "D213", type: "solid" },
    { from: "D21", to: "D214", type: "solid" },
    { from: "D21", to: "D215", type: "solid" },
    
    { from: "D22", to: "D221", type: "solid" },
    { from: "D22", to: "D222", type: "solid" },
    { from: "D22", to: "D223", type: "solid" },
    { from: "D22", to: "D224", type: "solid" },
    
    // Operações Bitwise
    { from: "D3", to: "D31", type: "solid" },
    { from: "D3", to: "D32", type: "solid" },
    
    { from: "D31", to: "D311", type: "solid" },
    { from: "D31", to: "D312", type: "solid" },
    { from: "D31", to: "D313", type: "solid" },
    { from: "D31", to: "D314", type: "solid" },
    
    { from: "D32", to: "D321", type: "solid" },
    { from: "D32", to: "D322", type: "solid" },
    { from: "D32", to: "D323", type: "solid" },
    { from: "D32", to: "D324", type: "solid" },
    { from: "D32", to: "D325", type: "solid" },
    
    // Frações e Exatidão
    { from: "D4", to: "D41", type: "solid" },
    { from: "D4", to: "D42", type: "solid" },
    
    { from: "D41", to: "D411", type: "solid" },
    { from: "D41", to: "D412", type: "solid" },
    { from: "D41", to: "D413", type: "solid" },
    { from: "D41", to: "D414", type: "solid" },
    
    { from: "D42", to: "D421", type: "solid" },
    { from: "D42", to: "D422", type: "solid" },
    { from: "D42", to: "D423", type: "solid" },
    { from: "D42", to: "D424", type: "solid" },
    
    // Comparação e Aplicações
    { from: "D5", to: "D51", type: "solid" },
    { from: "D5", to: "D52", type: "solid" },
    
    { from: "D51", to: "D511", type: "solid" },
    { from: "D51", to: "D512", type: "solid" },
    { from: "D51", to: "D513", type: "solid" },
    { from: "D51", to: "D514", type: "solid" },
    
    { from: "D52", to: "D521", type: "solid" },
    { from: "D52", to: "D522", type: "solid" },
    { from: "D52", to: "D523", type: "solid" },
    { from: "D52", to: "D524", type: "solid" }
  ],

  // ===== CONEXÕES CRUZADAS =====
  crossConnections: [
    // Conexões entre Sistemas Numéricos e Operações Bitwise
    { from: "D11", to: "D31", type: "dashed", color: "blue", label: "Bases → Operações" },
    { from: "D113", to: "D313", type: "dashed", color: "blue", label: "Hexadecimal → Máscaras" },
    
    // Conexões entre Inteiros e Ponto Flutuante
    { from: "D12", to: "D21", type: "dashed", color: "green", label: "Inteiros → Ponto Flutuante" },
    { from: "D122", to: "D211", type: "dashed", color: "green", label: "Complemento 2 → IEEE 754" },
    
    // Conexões entre Ponto Flutuante e Precisão
    { from: "D21", to: "D22", type: "dashed", color: "purple", label: "Formato → Erros" },
    { from: "D212", to: "D221", type: "dashed", color: "purple", label: "32 bits → Arredondamento" },
    
    // Conexões entre Operações Bitwise e Manipulação
    { from: "D31", to: "D32", type: "dashed", color: "orange", label: "Operadores → Aplicações" },
    { from: "D311", to: "D321", type: "dashed", color: "orange", label: "AND/OR → Setar/Limpar" },
    
    // Conexões entre Frações e Exatidão
    { from: "D41", to: "D42", type: "dashed", color: "red", label: "Frações → Exatidão" },
    { from: "D412", to: "D423", type: "dashed", color: "red", label: "Binárias → Erros Conversão" },
    
    // Conexões entre Precisão e Comparação
    { from: "D2", to: "D5", type: "dashed", color: "teal", label: "Precisão → Comparação" },
    { from: "D222", to: "D511", type: "dashed", color: "teal", label: "Precisão vs Range → Escolha Tipo" },
    
    // Conexões entre Representação e Aplicações
    { from: "D4", to: "D52", type: "dashed", color: "brown", label: "Exatidão → Problemas Comuns" },
    { from: "D421", to: "D522", type: "dashed", color: "brown", label: "Exata vs Aproximada → Problemas" },
    
    // Conexões entre Complemento 2 e Manipulação Bits
    { from: "D122", to: "D31", type: "dashed", color: "pink", label: "Complemento 2 → Operações Bitwise" },
    
    // Conexões entre IEEE 754 e Frações
    { from: "D211", to: "D41", type: "dashed", color: "gray", label: "IEEE 754 → Frações" },
    { from: "D214", to: "D412", type: "dashed", color: "gray", label: "Mantissa → Frações Binárias" }
  ],

  // ===== METADADOS PARA FRONTEND =====
  metadata: {
    totalNodes: 62,
    totalConnections: 98,
    lastUpdated: "2024-01-15",
    version: "1.0",
    examFocus: ["PRCMP - Exames Representação de Dados"],
    keyTopics: [
      "IEEE 754 Ponto Flutuante",
      "Complemento para 2",
      "Operações Bitwise (AND, OR, XOR)",
      "Representação sem sinal vs com sinal",
      "Conversão entre bases numéricas",
      "Erros de arredondamento",
      "Frações em diferentes bases",
      "Precisão simples vs dupla"
    ]
  }
};