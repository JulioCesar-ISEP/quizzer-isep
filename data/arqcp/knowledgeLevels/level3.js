export const level3KnowledgeTree = {
  conceptsCount: 7,
  topicsCount: 11,
  examplesCount: 14,
  root: {
    id: 'root',
    type: 'concept',
    title: 'Organização de Memória',
    description: 'Hierarquia, endereçamento e gerenciamento de memória',
    children: [
      {
        id: 'hierarquia-completa',
        type: 'topic',
        title: 'Hierarquia de Memória',
        description: 'Níveis de memória do mais rápido ao mais lento',
        children: [
          {
            id: 'cache-levels',
            type: 'concept',
            title: 'Memória Cache',
            description: 'L1, L2, L3 - proximidade com a CPU'
          },
          {
            id: 'memoria-principal',
            type: 'concept',
            title: 'Memória RAM',
            description: 'Memória de trabalho volátil'
          },
          {
            id: 'ex-localidade',
            type: 'example',
            title: 'Exemplo: Princípio de Localidade',
            description: 'Acessos sequenciais melhoram performance de cache'
          }
        ]
      },
      {
        id: 'acesso-memoria',
        type: 'topic',
        title: 'Instruções de Acesso',
        description: 'Load e store em RISC-V',
        children: [
          {
            id: 'load-instructions',
            type: 'concept',
            title: 'Instruções Load',
            description: 'Carregamento de dados da memória'
          },
          {
            id: 'store-instructions',
            type: 'concept',
            title: 'Instruções Store',
            description: 'Armazenamento de dados na memória'
          },
          {
            id: 'ex-load-store',
            type: 'example',
            title: 'Exemplo: Acesso a Array',
            description: 'lw a0, 0(s1)  # carrega\nsw a1, 4(s1)  # armazena'
          }
        ]
      },
      {
        id: 'gerenciamento-memoria',
        type: 'topic',
        title: 'Gerenciamento',
        description: 'Alocação e organização de memória',
        children: [
          {
            id: 'enderecamento',
            type: 'concept',
            title: 'Espaço de Endereçamento',
            description: 'Organização linear de endereços'
          },
          {
            id: 'segmentos-memoria',
            type: 'concept',
            title: 'Segmentos de Memória',
            description: 'Text, Data, BSS, Heap, Stack'
          },
          {
            id: 'ex-segmentos',
            type: 'example',
            title: 'Exemplo: Organização Stack',
            description: 'sp → Stack (dados temporários)\ngp → Data (variáveis globais)'
          }
        ]
      }
    ]
  }
};