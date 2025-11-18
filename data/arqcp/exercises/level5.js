export const level5Exercises = [
  {
    id: 1,
    question: "Qual convenção ABI deve ser usada em funções ASM?",
    code: "// ABI RV32IM\nArgs: a0-a7\nReturn: a0\na0-a7: caller saved\ns0-s11: callee saved",
    options: ["RV32IM ABI", "x86 ABI", "ARM ABI", "Nenhuma"],
    correct: 0,
    explanation: "RV32IM ABI dita registradores para args/retorno e quem salva (caller/callee). Não usar implica 0% na avaliação.",
    theoryPoints: {
      title: "Application Binary Interface (ABI)",
      content: "Regras para interação binária: chamadas, registradores, stack.",
      keyPoints: [
        "a0-a1: retorno",
        "ra: return address",
        "sp: stack pointer",
        "Preservar callee-saved"
      ],
      examples: "Em func ASM: save s-regs, use a0 for arg, return in a0, restore."
    },
    hints: ["Critério de avaliação: 0% se não usado", "Reference Card tem savers"]
  },
  {
    id: 2,
    question: "Como chamar função ASM de C?",
    code: "// Em main.c\nextern int func_asm(unsigned int *x);\nint res = func_asm(&var);",
    options: ["Usar extern e protótipo", "Incluir .s diretamente", "Usar inline asm", "Compilar separadamente"],
    correct: 0,
    explanation: "Declara extern em C, compila .s para .o, linka com Makefile.",
    theoryPoints: {
      title: "Integração C/ASM",
      content: "Funções ASM expostas como globais, chamadas via protótipos em C.",
      keyPoints: [
        "Global label in ASM",
        "Extern in C",
        "ABI for args/return",
        "Makefile for linking"
      ],
      examples: "Em exer2: func1.s com low_pressure, chamada em main.c."
    },
    hints: ["Como em Exer2_Template", "Estrutura modular obrigatória"]
  }
];