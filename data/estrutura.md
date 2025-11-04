Padrão Geral da Estrutura
// É um array de objetos representando módulos de aprendizado, onde cada módulo contém:

// javascript
// {
//   id: number,           // Identificador único
//   name: string,         // Nome do módulo
//   description: string,  // Descrição breve
//   icon: string,         // Ícone representativo
//   color: string,        // Cor temática (#hex)
//   xp: number,          // Pontos de experiência
//   theory: object,       // Conteúdo teórico
//   exercises: array      // Lista de exercícios
// }
// Estrutura Detalhada dos Componentes
// 1. Teoria (theory)
// javascript
// theory: {
//   title: string,       // Título da teoria
//   content: string      // Conteúdo explicativo
// }
// 2. Exercícios (exercises)
// Cada exercício segue o padrão:

// javascript
// {
//   id: number,              // ID único do exercício
//   question: string,        // Enunciado da pergunta
//   code: string,           // Código de exemplo (opcional)
//   options: string[],      // Array de opções de resposta
//   correct: number,        // Índice da resposta correta
//   explanation: string,    // Explicação detalhada
//   theoryPoints: {         // Teoria relacionada
//     title: string,
//     content: string,
//     keyPoints: string[],  // Pontos principais
//     examples: string      // Exemplos práticos
//   },
//   hints: string[]         // Dicas para resolver
// }
// Características Identificadas
// 📚 Organização Hierárquica
// Módulos → Exercícios → Teoria Específica

// Progressão do simples para o complexo

// Cada módulo aumenta em complexidade e XP