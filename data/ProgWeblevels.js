const ProgWebLevels = [
  {
    id: 1,
    name: "Fundamentos",
    description: "Conceitos básicos",
    icon: "Brain",
    color: "#3b82f6",
    xp: 100,
    theory: { 
      title: "Teoria Geral", 
      content: "Conteúdo geral..." 
    },
    exercises: [
      {
        id: 1,
        question: "O que é uma variável?",
        code: "let x = 10;",
        options: ["Um espaço na memória", "Uma função", "Uma classe", "Um módulo"],
        correct: 0,
        explanation: "Uma variável é um espaço nomeado na memória para armazenar valores.",
        theoryPoints: {
          title: "Variáveis em Profundidade",
          content: "Uma variável é um identificador que referencia um local de memória...",
          keyPoints: ["Tipo de dado", "Escopo", "Inicialização"],
          examples: "let nome = 'João'; // string\nlet idade = 25; // number"
        },
        hints: ["Pense em uma caixa com etiqueta", "A etiqueta é o nome, o conteúdo é o valor"]
      },
      {
        id: 2,
        question: "Qual é o escopo global?",
        code: "var global = 5;\nfunction test() { console.log(global); }",
        options: ["Dentro da função", "Fora da função", "Na classe", "No módulo"],
        correct: 1,
        explanation: "Escopo global é quando a variável é acessível em todo o programa.",
        theoryPoints: {
          title: "Escopos em JavaScript",
          content: "Existem diferentes níveis de escopo: global, função e bloco...",
          keyPoints: ["Global - acessível em qualquer lugar", "Local - dentro de funções"],
          examples: "let x = 10;\nfunction test() { console.log(x); }"
        },
        hints: ["Considere onde a variável é declarada"]
      }
    ]
  },
  {
    id: 2,
    name: "Estruturas de Controlo",
    description: "if/else e loops",
    icon: "Code",
    color: "#10b981",
    xp: 150,
    theory: { 
      title: "Controlo de Fluxo", 
      content: "Aprenderás a controlar o fluxo..." 
    },
    exercises: [
      {
        id: 1,
        question: "Qual é o resultado: 5 > 3 && 2 < 4?",
        code: "if (5 > 3 && 2 < 4) { console.log('Verdadeiro'); }",
        options: ["Verdadeiro", "Falso", "undefined", "Erro"],
        correct: 0,
        explanation: "Ambas as condições são true, logo && retorna true.",
        theoryPoints: {
          title: "Operadores Lógicos",
          content: "&& (AND), || (OR), ! (NOT) permitem combinar condições...",
          keyPoints: ["&& precisa de ambas", "|| precisa de uma", "! inverte"],
          examples: "true && true = true\nfalse || true = true"
        },
        hints: ["&& significa 'E'", "Ambas precisam ser verdadeiras"]
      }
    ]
  }
];

export default ProgWebLevels;