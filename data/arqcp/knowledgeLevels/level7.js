export const level7KnowledgeTree = {
  conceptsCount: 6,
  topicsCount: 8,
  examplesCount: 11,
  root: {
    id: 'root',
    type: 'concept',
    title: 'Otimização de Desempenho',
    description: 'Técnicas para melhorar eficiência e performance',
    children: [
      {
        id: 'otimizacao-memoria',
        type: 'topic',
        title: 'Otimização de Memória',
        description: 'Melhor uso da hierarquia de memória',
        children: [
          {
            id: 'localidade',
            type: 'concept',
            title: 'Princípio de Localidade',
            description: 'Espacial e temporal'
          },
          {
            id: 'cache-friendly',
            type: 'concept',
            title: 'Código Cache-Friendly',
            description: 'Padrões de acesso otimizados'
          },
          {
            id: 'ex-localidade',
            type: 'example',
            title: 'Exemplo: Acesso Sequencial',
            description: 'for(i=0;i<N;i++) arr[i]  // bom para cache'
          }
        ]
      },
      {
        id: 'otimizacao-codigo',
        type: 'topic',
        title: 'Otimização de Código',
        description: 'Melhorias em nível de instrução',
        children: [
          {
            id: 'instrucoes-eficientes',
            type: 'concept',
            title: 'Instruções Eficientes',
            description: 'Uso inteligente do ISA'
          },
          {
            id: 'pseudo-instrucoes',
            type: 'concept',
            title: 'Pseudo-instruções',
            description: 'li, la, mv, ret, etc.'
          },
          {
            id: 'ex-pseudo',
            type: 'example',
            title: 'Exemplo: Pseudo-instruções',
            description: 'li a0, 42  # mais legível que addi a0, zero, 42'
          }
        ]
      },
      {
        id: 'tecnicas-avancadas',
        type: 'topic',
        title: 'Técnicas Avançadas',
        description: 'Otimizações específicas para RISC-V',
        children: [
          {
            id: 'loop-unrolling',
            type: 'concept',
            title: 'Loop Unrolling',
            description: 'Redução de overhead de branches'
          },
          {
            id: 'instruction-scheduling',
            type: 'concept',
            title: 'Agendamento de Instruções',
            description: 'Evitar hazards de pipeline'
          },
          {
            id: 'ex-unrolling',
            type: 'example',
            title: 'Exemplo: Loop Unrolling',
            description: 'Processar 4 elementos por iteração'
          }
        ]
      }
    ]
  }
};