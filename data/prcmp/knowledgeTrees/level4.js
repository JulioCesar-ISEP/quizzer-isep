export const level4KnowledgeTree = {
  conceptsCount: 7,
  topicsCount: 9,
  examplesCount: 11,
  root: {
    id: 'root',
    type: 'concept',
    title: 'Redes em Linux',
    description: 'Comandos para configuração e diagnóstico de rede',
    children: [
      {
        id: 'diagnostico',
        type: 'topic',
        title: 'Diagnóstico de Rede',
        description: 'Comandos para testar conectividade',
        children: [
          {
            id: 'ping',
            type: 'concept',
            title: 'Comando ping',
            description: 'Testar conectividade com um host'
          },
          {
            id: 'ifconfig',
            type: 'concept',
            title: 'Comando ifconfig',
            description: 'Configurar interfaces de rede'
          },
          {
            id: 'ex-ping',
            type: 'example',
            title: 'Exemplo: ping google.com',
            description: 'Testa conectividade com Google'
          }
        ]
      },
      {
        id: 'transferencia-dados',
        type: 'topic',
        title: 'Transferência de Dados',
        description: 'Comandos para transferir ficheiros',
        children: [
          {
            id: 'wget',
            type: 'concept',
            title: 'Comando wget',
            description: 'Transferir ficheiros da web'
          },
          {
            id: 'scp',
            type: 'concept',
            title: 'Comando scp',
            description: 'Transferir ficheiros entre sistemas'
          }
        ]
      }
    ]
  }
};