export const level2KnowledgeTree = {
  conceptsCount: 9,
  topicsCount: 14,
  examplesCount: 18,
  root: {
    id: 'root',
    type: 'concept',
    title: 'Arquitetura do Processador',
    description: 'Estrutura interna da CPU e conjuntos de instruções RISC-V',
    children: [
      {
        id: 'registradores-riscv',
        type: 'topic',
        title: 'Registradores RV32IM',
        description: 'Organização e convenções dos registradores',
        children: [
          {
            id: 'registradores-gerais',
            type: 'concept',
            title: 'Registradores de Propósito Geral',
            description: '32 registradores x0-x31 com funções específicas'
          },
          {
            id: 'convencoes-abi',
            type: 'concept',
            title: 'Convenções ABI',
            description: 'Uso padrão dos registradores em chamadas de função'
          },
          {
            id: 'ex-stack-pointer',
            type: 'example',
            title: 'Exemplo: Stack Pointer',
            description: 'x2 (sp) - gerencia pilha de execução'
          }
        ]
      },
      {
        id: 'unidades-processador',
        type: 'topic',
        title: 'Unidades Funcionais',
        description: 'Componentes internos da CPU',
        children: [
          {
            id: 'alu',
            type: 'concept',
            title: 'Unidade Lógica Aritmética',
            description: 'Executa operações matemáticas e lógicas'
          },
          {
            id: 'unidade-controle',
            type: 'concept',
            title: 'Unidade de Controle',
            description: 'Coordena a execução das instruções'
          },
          {
            id: 'ex-alu-operations',
            type: 'example',
            title: 'Exemplo: Operações ALU',
            description: 'add, sub, and, or, xor, sll, srl, sra'
          }
        ]
      },
      {
        id: 'isa-detalhado',
        type: 'topic',
        title: 'ISA RV32IM',
        description: 'Conjunto de instruções estendido',
        children: [
          {
            id: 'instrucoes-base',
            type: 'concept',
            title: 'Instruções RV32I',
            description: 'Conjunto básico de inteiros'
          },
          {
            id: 'multiplicacao-divisao',
            type: 'concept',
            title: 'Extensão M',
            description: 'Instruções de multiplicação e divisão'
          },
          {
            id: 'ex-mul-div',
            type: 'example',
            title: 'Exemplo: Multiplicação',
            description: 'mul a0, a1, a2  # a0 = a1 * a2'
          }
        ]
      }
    ]
  }
};