export const level3KnowledgeTree = {
  conceptsCount: 5,
  topicsCount: 8,
  examplesCount: 10,
  root: {
    id: 'root',
    type: 'concept',
    title: 'Gestão de Processos Linux',
    description: 'Comandos para monitorizar e gerir processos',
    children: [
      {
        id: 'monitorizacao',
        type: 'topic',
        title: 'Monitorização de Processos',
        description: 'Comandos para ver processos em execução',
        children: [
          {
            id: 'ps',
            type: 'concept',
            title: 'Comando ps',
            description: 'Listar processos'
          },
          {
            id: 'top',
            type: 'concept',
            title: 'Comando top',
            description: 'Monitorizar processos em tempo real'
          },
          {
            id: 'ex-ps',
            type: 'example',
            title: 'Exemplo: ps aux',
            description: 'Lista todos os processos do sistema'
          }
        ]
      },
      {
        id: 'controle-processos',
        type: 'topic',
        title: 'Controle de Processos',
        description: 'Comandos para gerir processos',
        children: [
          {
            id: 'kill',
            type: 'concept',
            title: 'Comando kill',
            description: 'Terminar processos'
          },
          {
            id: 'bg-fg',
            type: 'concept',
            title: 'Background e Foreground',
            description: 'bg, fg, jobs'
          }
        ]
      }
    ]
  }
};