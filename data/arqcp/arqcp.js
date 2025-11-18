
// Importações dinâmicas para KnowledgeTree
const knowledgeTrees = {};
for (let i = 1; i <= 7; i++) {
    knowledgeTrees[`level${i}`] = await import(`./knowledgeLevels/level${i}.js`);
}

// Importações dinâmicas para Exercises
const exercises = {};
for (let i = 1; i <= 7; i++) {
    exercises[`level${i}`] = await import(`./exercises/level${i}.js`);
}

const arqcp = [
  {
    id: 1,
    name: "Arquitetura de Sistemas de Computadores",
    description: "Visão geral dos componentes e modelos de sistemas computacionais",
    icon: "Computer",
    color: "#8b5cf6",
    xp: 100,
    theory: { 
      title: "Modelos de Arquitetura de Computadores", 
      content: "Inclui conceitos como modelo von Neumann, componentes principais (CPU, memória, E/S) e integração em sistemas RISC-V." 
    },
    KnowledgeTreeView: knowledgeTrees.level1.level1KnowledgeTree,
    exercises: exercises.level1.level1Exercises
  },
  {
    id: 2,
    name: "Arquitetura do Processador",
    description: "Estrutura interna da CPU e conjuntos de instruções",
    icon: "Cpu",
    color: "#7c3aed",
    xp: 150,
    theory: { 
      title: "Arquitetura de Processadores RISC-V", 
      content: "Foco em registradores, ALU, unidade de controle e ISA RV32IM." 
    },
    KnowledgeTreeView: knowledgeTrees.level2.level2KnowledgeTree,
    exercises: exercises.level2.level2Exercises
  },
  {
    id: 3,
    name: "Organização de Memória",
    description: "Hierarquia, endereçamento e gerenciamento de memória",
    icon: "Memory",
    color: "#6d28d9",
    xp: 200,
    theory: { 
      title: "Hierarquia de Memória em Sistemas", 
      content: "De registradores a disco, com foco em cache, RAM e acessos em RISC-V." 
    },
    KnowledgeTreeView: knowledgeTrees.level3.level3KnowledgeTree,
    exercises: exercises.level3.level3Exercises
  },
  {
    id: 4,
    name: "Modelo Conceitual de Execução de Programas",
    description: "Ciclo de fetch-decode-execute e fluxo de controle",
    icon: "Play",
    color: "#5b21b6",
    xp: 250,
    theory: { 
      title: "Ciclo de Execução em Processadores", 
      content: "Processo de busca, decodificação e execução de instruções, com branches e jumps." 
    },
    KnowledgeTreeView: knowledgeTrees.level4.level4KnowledgeTree,
    exercises: exercises.level4.level4Exercises
  },
  {
    id: 5,
    name: "Linguagens de Programação de Alto e Baixo Nível",
    description: "Programação em C e Assembly RISC-V",
    icon: "Code",
    color: "#4c1d95",
    xp: 300,
    theory: { 
      title: "C e Assembly em RISC-V", 
      content: "Integração entre C e ASM, convenções ABI, chamadas de funções." 
    },
    KnowledgeTreeView: knowledgeTrees.level5.level5KnowledgeTree,
    exercises: exercises.level5.level5Exercises
  },
  {
    id: 6,
    name: "Desenvolvimento de Programas",
    description: "Compilação, depuração e boas práticas",
    icon: "Tools",
    color: "#3730a3",
    xp: 400,
    theory: { 
      title: "Processo de Desenvolvimento em ARQCP", 
      content: "Estrutura modular, Makefile, compilação com warnings, depuração com gdb, evitar erros comuns." 
    },
    KnowledgeTreeView: knowledgeTrees.level6.level6KnowledgeTree,
    exercises: exercises.level6.level6Exercises
  },
  {
    id: 7,
    name: "Otimização de Desempenho de Programas",
    description: "Técnicas para melhorar eficiência e performance",
    icon: "Speedometer",
    color: "#312e81",
    xp: 350,
    theory: { 
      title: "Otimização em Nível Baixo", 
      content: "Uso eficiente de cache, pipelines, registradores e código otimizado em ASM/C." 
    },
    KnowledgeTreeView: knowledgeTrees.level7.level7KnowledgeTree,
    exercises: exercises.level7.level7Exercises
  }
];

export default arqcp;