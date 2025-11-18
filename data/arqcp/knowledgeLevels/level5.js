export const level5KnowledgeTree = {
  conceptsCount: 8,
  topicsCount: 12,
  examplesCount: 15,
  root: {
    id: 'root',
    type: 'concept',
    title: 'Linguagens de Programação',
    description: 'Integração entre C e Assembly RISC-V',
    children: [
      {
        id: 'integracao-c-asm',
        type: 'topic',
        title: 'Integração C/Assembly',
        description: 'Chamadas entre linguagens diferentes',
        children: [
          {
            id: 'chamadas-funcoes',
            type: 'concept',
            title: 'Chamadas de Função',
            description: 'Como C chama ASM e vice-versa'
          },
          {
            id: 'convencoes-chamada',
            type: 'concept',
            title: 'Convenções de Chamada',
            description: 'Regras para passagem de parâmetros'
          },
          {
            id: 'ex-extern',
            type: 'example',
            title: 'Exemplo: Declaração em C',
            description: 'extern int func_asm(int a, int b);'
          }
        ]
      },
      {
        id: 'abi-detalhada',
        type: 'topic',
        title: 'ABI RV32IM',
        description: 'Application Binary Interface detalhada',
        children: [
          {
            id: 'registradores-abi',
            type: 'concept',
            title: 'Registradores ABI',
            description: 'a0-a7, s0-s11, ra, sp, gp, tp'
          },
          {
            id: 'caller-callee',
            type: 'concept',
            title: 'Caller/Callee Saved',
            description: 'Quem preserva os registradores'
          },
          {
            id: 'ex-abi-usage',
            type: 'example',
            title: 'Exemplo: Função ASM',
            description: '# Preservar s0-s11 se usados\n# Retornar em a0-a1'
          }
        ]
      },
      {
        id: 'stack-frame',
        type: 'topic',
        title: 'Stack Frame',
        description: 'Estrutura da pilha em chamadas',
        children: [
          {
            id: 'prologo-epilogo',
            type: 'concept',
            title: 'Prológio e Epílogo',
            description: 'Setup e cleanup da pilha'
          },
          {
            id: 'variaveis-locais',
            type: 'concept',
            title: 'Variáveis Locais',
            description: 'Armazenamento na stack'
          },
          {
            id: 'ex-stack-frame',
            type: 'example',
            title: 'Exemplo: Stack Frame',
            description: 'sp → ra salvo\n   → variáveis locais\n   → args para chamadas'
          }
        ]
      }
    ]
  }
};