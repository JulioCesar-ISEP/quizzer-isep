import ex1 from "./exercises/level1.js";
import ex2 from "./exercises/level2.js";
import ex3 from "./exercises/level3.js";
import ex4 from "./exercises/level4.js";
import ex5 from "./exercises/level5.js";
import ex6 from "./exercises/level6.js";
import ex7 from "./exercises/level7.js";

import { level1KnowledgeTree } from './knowledgeLevels/level1.js';
import { level2KnowledgeTree } from './knowledgeLevels/level2.js';
import { level3KnowledgeTree } from './knowledgeLevels/level3.js';
import { level4KnowledgeTree } from './knowledgeLevels/level4.js';
import { level5KnowledgeTree } from './knowledgeLevels/level5.js';
import { level6KnowledgeTree } from './knowledgeLevels/level6.js';
import { level7KnowledgeTree } from './knowledgeLevels/level7.js';

const prcmp = [
  {
    id: 1,
    name: "Sistemas Operacionais",
    description: "Processos, escalonamento, PCB, context switch, multiprogramação",
    icon: "Settings",
    color: "#8b5cf6",
    xp: 300,
    theory: { 
      title: "Conceitos Fundamentais de Sistemas Operacionais", 
      content: "SO gerencia recursos de hardware, processos, memória e fornece interface. Conceitos essenciais: PCB, estados de processos (Ready, Running, Waiting), escalonamento preemptivo/não-preemptivo, mudança de contexto, sistemas multiprogramados/multitarefa." 
    },
    KnowledgeTreeView: level1KnowledgeTree,
    exercises: ex1
  },
  {
    id: 2,
    name: "Arquitetura de Computadores",
    description: "Von Neumann, CPU, pipeline, superscalar, multi-core, ISA",
    icon: "Cpu",
    color: "#7c3aed",
    xp: 250,
    theory: { 
      title: "Arquitetura e Organização de Computadores", 
      content: "Modelo von Neumann (memória única para dados/instruções). Componentes: CPU (UAL, UC, registros), memória (RAM/ROM), barramentos. Técnicas: pipeline, superscalar, multi-core. ISA vs microarquitetura." 
    },
    KnowledgeTreeView: level2KnowledgeTree,
    exercises: ex2
  },
  {
    id: 3,
    name: "Representação de Dados",
    description: "Binário, complemento para 2, IEEE 754, operações bitwise",
    icon: "Binary",
    color: "#6d28d9", 
    xp: 200,
    theory: { 
      title: "Sistemas de Numeração e Representação Computacional", 
      content: "Sistemas binário, octal, hexadecimal. Representação de inteiros: sem sinal, complemento para 2 (único zero). Ponto flutuante: IEEE 754 (32/64 bits). Operações bitwise (AND, OR, XOR, deslocamentos)." 
    },
    KnowledgeTreeView: level3KnowledgeTree,
    exercises: ex3
  },
  {
    id: 4,
    name: "Shell Scripting e Unix",
    description: "Comandos básicos, pipes, redirecionamento, scripting",
    icon: "Terminal",
    color: "#5b21b6",
    xp: 200,
    theory: { 
      title: "Comandos Unix e Programação Shell", 
      content: "Shell como interface de linha de comandos. Comandos essenciais (ls, chmod, mv, rm, grep, find). Redirecionamento (>, >>, |). Programação shell: variáveis, estruturas de controle (if, case, loops), funções, tratamento de erros ($?)." 
    },
    KnowledgeTreeView: level4KnowledgeTree,
    exercises: ex4
  },
  {
    id: 5,
    name: "Processamento e I/O",
    description: "Batch, dispositivos I/O, interrupções, DMA",
    icon: "Workflow",
    color: "#4c1d95",
    xp: 150,
    theory: { 
      title: "Processamento em Lote e Entrada/Saída", 
      content: "Processamento por lotes (batch) para tarefas não-interativas. Dispositivos de I/O, controladores, DMA (Acesso Direto à Memória) e comunicação via interrupções." 
    },
    KnowledgeTreeView: level5KnowledgeTree,
    exercises: ex5  // ex5 deve focar em batch e I/O
  },
  {
    id: 6,
    name: "Sistemas Especializados",
    description: "Sistemas de tempo real, distribuídos, clusters",
    icon: "Globe",
    color: "#3730a3",
    xp: 100,
    theory: { 
      title: "Sistemas de Tempo Real e Distribuídos", 
      content: "Sistemas de tempo real: corretude funcional + temporal (deadlines). Sistemas distribuídos: múltiplos computadores cooperando via rede. Clusters: computadores trabalhando em conjunto." 
    },
    KnowledgeTreeView: level6KnowledgeTree,
    exercises: ex6  // ex6 deve focar em tempo real e distribuídos
  },
  {
    id: 7,
    name: "Linguagens e Ferramentas",
    description: "Compilação, interpretação, assembler, linker, debugger",
    icon: "Code",
    color: "#312e81",
    xp: 75,
    theory: { 
      title: "Linguagens de Programação e Ferramentas", 
      content: "Linguagens de alto nível (maior abstração) vs baixo nível. Processo de tradução: compilador vs interpretador. Ferramentas: assembler, linker, debugger." 
    },
    KnowledgeTreeView: level7KnowledgeTree,
    exercises: ex7  // ex7 deve focar em compilação/interpretação
  }
];

export default prcmp;