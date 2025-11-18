export const level2Exercises = [
  {
    id: 1,
    question: "Qual registrador em RISC-V é usado como ponteiro de pilha (stack pointer)?",
    code: "// Registradores Gerais\nx0: zero\nx1: ra\nx2: ???\nx3: gp",
    options: ["x1 (ra)", "x2 (sp)", "x3 (gp)", "x4 (tp)"],
    correct: 1,
    explanation: "x2 é o sp (stack pointer), preservado pelo callee, usado para gerenciar pilha de chamadas.",
    theoryPoints: {
      title: "Registradores em RISC-V",
      content: "RV32IM tem 32 registradores de uso geral (x0-x31), com convenções ABI para caller/callee saved.",
      keyPoints: [
        "x0: sempre zero",
        "x1: return address (ra)",
        "x2: stack pointer (sp)",
        "a0-a7: argumentos/retorno"
      ],
      examples: "Em chamadas: a0 para arg, ra para retorno. Use s0-s11 para valores preservados."
    },
    hints: ["Consulte o RISC-V Reference Card", "Qual gerencia a pilha?"]
  },
  {
    id: 2,
    question: "Qual instrução realiza subtração em RV32I?",
    code: "// Instruções Aritméticas\nadd rd, rs1, rs2  // rd = rs1 + rs2\n??? rd, rs1, rs2  // rd = rs1 - rs2",
    options: ["sub", "minus", "diff", "neg"],
    correct: 0,
    explanation: "sub rd, rs1, rs2 realiza rd = rs1 - rs2.",
    theoryPoints: {
      title: "Instruções Base RV32I",
      content: "Inclui aritméticas (add/sub), lógicas (and/or/xor), shifts (sll/srl/sra) e branches.",
      keyPoints: [
        "Formato R: op rd, rs1, rs2",
        "Imediato: addi, etc.",
        "Signed vs Unsigned: slt vs sltu",
        "Uso em loops e condicionais"
      ],
      examples: "sub a0, a1, a2  // a0 = a1 - a2\nbeq a0, zero, label  // if equal, branch"
    },
    hints: ["Olhe para operações aritméticas no card", "Oposto de add"]
  }
];