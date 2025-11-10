export const level2KnowledgeTree = {
  conceptsCount: 6,
  topicsCount: 10,
  examplesCount: 12,
  root: {
    id: 'root',
    type: 'concept',
    title: 'Terminal Linux',
    description: 'Interface de linha de comandos do sistema operativo Linux',
    children: [
      {
        id: 'comandos-basicos',
        type: 'topic',
        title: 'Comandos Básicos',
        description: 'Comandos essenciais para navegação e manipulação',
        children: [
          {
            id: 'navegacao',
            type: 'concept',
            title: 'Navegação entre Diretórios',
            description: 'cd, pwd, ls'
          },
          {
            id: 'manipulacao',
            type: 'concept',
            title: 'Manipulação de Ficheiros',
            description: 'cp, mv, rm, mkdir'
          },
          {
            id: 'ex-ls',
            type: 'example',
            title: 'Exemplo: ls -la',
            description: 'Lista todos os ficheiros com detalhes'
          }
        ]
      },
      {
        id: 'permissoes-basicas',
        type: 'topic',
        title: 'Permissões Básicas',
        description: 'Conceitos iniciais de permissões',
        children: [
          {
            id: 'rwx',
            type: 'concept',
            title: 'Permissões rwx',
            description: 'read, write, execute'
          },
          {
            id: 'ex-chmod',
            type: 'example',
            title: 'Exemplo: chmod 755 script.sh',
            description: 'Torna o script executável'
          }
        ]
      }
    ]
  }
};