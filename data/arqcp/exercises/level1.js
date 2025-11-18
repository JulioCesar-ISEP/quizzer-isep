export const level1Exercises = [
  {
    id: 1,
    question: "Qual é a principal característica do modelo von Neumann?",
    code: "// Modelo von Neumann\nCPU <-> Memória (Instruções + Dados)\nE/S conectada via barramento",
    options: ["Separação de memória para dados e instruções", "Armazenamento compartilhado para programas e dados", "Execução paralela de instruções", "Uso exclusivo de memória volátil"],
    correct: 1,
    explanation: "No modelo von Neumann, programas e dados compartilham a mesma memória, permitindo que programas sejam tratados como dados.",
    theoryPoints: {
      title: "Modelo von Neumann",
      content: "Arquitetura clássica onde instruções e dados residem na mesma memória, acessados via barramento compartilhado.",
      keyPoints: [
        "CPU, Memória, E/S e Barramento",
        "Programa armazenado na memória",
        "Gargalo de von Neumann (acesso sequencial)",
        "Base para arquiteturas modernas como RISC-V"
      ],
      examples: "Em RISC-V, instruções como lw/sw acessam memória unificada para dados e código."
    },
    hints: ["Pense em como programas são carregados", "Diferença para Harvard"]
  },
  {
    id: 2,
    question: "Quais são os componentes principais de um sistema de computador?",
    code: "// Componentes\n- Processador\n- Memória\n- ???\n- Barramentos",
    options: ["Dispositivos de Entrada/Saída", "Compilador", "Sistema Operacional", "Rede"],
    correct: 0,
    explanation: "Componentes hardware: Processador (CPU), Memória, Dispositivos E/S e Barramentos para comunicação.",
    theoryPoints: {
      title: "Componentes de Sistemas Computacionais",
      content: "Hardware básico inclui CPU para processamento, memória para armazenamento, E/S para interação e barramentos para transferência.",
      keyPoints: [
        "CPU: execução de instruções",
        "Memória: armazenamento volátil/não-volátil",
        "E/S: teclados, monitores, discos",
        "Barramentos: dados, endereço, controle"
      ],
      examples: "Em RISC-V, barramentos conectam registradores (x0-x31) à memória via instruções como lb/sb."
    },
    hints: ["O que conecta hardware ao usuário?", "Foco em hardware físico"]
  }
];