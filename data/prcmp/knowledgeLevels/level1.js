export const level1KnowledgeTree = {
  conceptsCount: 8,
  topicsCount: 12,
  examplesCount: 15,
  root: {
    id: 'root',
    type: 'concept',
    title: 'Sistemas de Numeração',
    description: 'Fundamentos dos sistemas de representação numérica em computação',
    children: [
      {
        id: 'sistemas-base',
        type: 'topic',
        title: 'Sistemas Numéricos Posicionais',
        description: 'Binário, octal, decimal e hexadecimal',
        children: [
          {
            id: 'binario',
            type: 'concept',
            title: 'Sistema Binário',
            description: 'Base 2 - apenas 0s e 1s'
          },
          {
            id: 'hexadecimal',
            type: 'concept', 
            title: 'Sistema Hexadecimal',
            description: 'Base 16 - dígitos de 0-9 e A-F'
          },
          {
            id: 'ex-conversao',
            type: 'example',
            title: 'Exemplo: Conversão Binário-Hexadecimal',
            description: '1010 1101 (bin) = AD (hex)'
          }
        ]
      },
      {
        id: 'conversao-sistemas',
        type: 'topic',
        title: 'Conversão entre Sistemas',
        description: 'Métodos para converter entre diferentes bases',
        children: [
          {
            id: 'binario-decimal',
            type: 'concept',
            title: 'Binário → Decimal',
            description: 'Soma das potências de 2'
          },
          {
            id: 'decimal-binario',
            type: 'concept',
            title: 'Decimal → Binário',
            description: 'Divisões sucessivas por 2'
          },
          {
            id: 'ex-bin-decimal',
            type: 'example',
            title: 'Exemplo: 1101 → Decimal',
            description: '1×8 + 1×4 + 0×2 + 1×1 = 13'
          }
        ]
      },
      {
        id: 'representacao-numeros',
        type: 'topic',
        title: 'Representação de Números',
        description: 'Métodos para representar números negativos e fracionários',
        children: [
          {
            id: 'complemento-2',
            type: 'concept',
            title: 'Complemento para 2',
            description: 'Método padrão para números negativos'
          },
          {
            id: 'ponto-flutuante',
            type: 'concept',
            title: 'Ponto Flutuante IEEE 754',
            description: 'Padrão para números reais'
          },
          {
            id: 'ex-complemento',
            type: 'example',
            title: 'Exemplo: -5 em Complemento para 2',
            description: '5 = 0101, complemento = 1010, +1 = 1011'
          }
        ]
      }
    ]
  }
};