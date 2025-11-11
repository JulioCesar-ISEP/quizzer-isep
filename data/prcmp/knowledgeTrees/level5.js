export const level5KnowledgeTree = {
  conceptsCount: 5,
  topicsCount: 8,
  examplesCount: 10,
  root: {
    id: 'root',
    type: 'concept',
    title: 'Gestão de Permissões Linux',
    description: 'Sistema de permissões e gestão de utilizadores',
    children: [
      {
        id: 'permissoes',
        type: 'topic',
        title: 'Sistema de Permissões',
        description: 'Permissões rwx para user, group, others',
        children: [
          {
            id: 'rwx',
            type: 'concept',
            title: 'Permissões rwx',
            description: 'read, write, execute'
          },
          {
            id: 'chmod',
            type: 'concept',
            title: 'Comando chmod',
            description: 'Alterar permissões'
          },
          {
            id: 'ex-chmod',
            type: 'example',
            title: 'Exemplo: chmod 644 ficheiro.txt',
            description: 'Proprietário: rw, Grupo: r, Outros: r'
          }
        ]
      },
      {
        id: 'utilizadores',
        type: 'topic',
        title: 'Gestão de Utilizadores',
        description: 'Comandos para gerir utilizadores e grupos',
        children: [
          {
            id: 'chown',
            type: 'concept',
            title: 'Comando chown',
            description: 'Alterar proprietário'
          },
          {
            id: 'useradd',
            type: 'concept',
            title: 'Comando useradd',
            description: 'Adicionar utilizador'
          },
          {
            id: 'ex-chown',
            type: 'example',
            title: 'Exemplo: chown joao:developers script.sh',
            description: 'Muda proprietário para joao e grupo para developers'
          }
        ]
      }
    ]
  }
};
export default level5KnowledgeTree;