const APROGLevels = [
  {
    id: 1,
    name: "Introdução a Algoritmos",
    description: "Conceitos básicos e complexidade",
    icon: "Brain",
    color: "#8b5cf6",
    xp: 100,
    theory: { 
      title: "O que é um Algoritmo?", 
      content: "Um algoritmo é uma sequência de passos bem definidos para resolver um problema. A qualidade de um algoritmo é medida pela sua eficiência em tempo e espaço." 
    },
    exercises: [
      {
        id: 1,
        question: "Qual é a complexidade temporal do algoritmo de busca linear?",
        code: "function linearSearch(arr, target) {\n  for (let i = 0; i < arr.length; i++) {\n    if (arr[i] === target) return i;\n  }\n  return -1;\n}",
        options: ["O(1)", "O(n)", "O(n²)", "O(log n)"],
        correct: 1,
        explanation: "A busca linear percorre todos os elementos no pior caso, portanto é O(n). No melhor caso seria O(1) e no caso médio também O(n).",
        theoryPoints: {
          title: "Notação Big O",
          content: "A notação Big O descreve como o tempo de execução cresce com o tamanho da entrada. Ignora constantes e focos no comportamento assintótico.",
          keyPoints: [
            "O(1) - Tempo Constante: não importa o tamanho",
            "O(n) - Tempo Linear: proporcional ao tamanho",
            "O(n²) - Tempo Quadrático: cresce exponencialmente"
          ],
          examples: "Busca linear = O(n)\nBusca binária = O(log n)\nOrdenação bubble sort = O(n²)"
        },
        hints: ["Quantas iterações no pior caso?", "E se a lista tiver 1 milhão de elementos?"]
      },
      {
        id: 2,
        question: "Qual é a complexidade temporal da busca binária?",
        code: "function binarySearch(arr, target) {\n  let left = 0, right = arr.length - 1;\n  while (left <= right) {\n    const mid = Math.floor((left + right) / 2);\n    if (arr[mid] === target) return mid;\n    if (arr[mid] < target) left = mid + 1;\n    else right = mid - 1;\n  }\n  return -1;\n}",
        options: ["O(n)", "O(n log n)", "O(log n)", "O(n²)"],
        correct: 2,
        explanation: "A busca binária divide o problema pela metade a cada iteração. Com n elementos, podemos dividir log₂(n) vezes até encontrar o elemento.",
        theoryPoints: {
          title: "Busca Binária",
          content: "A busca binária é muito mais eficiente que a linear, mas requer que o array esteja ordenado. A cada passo eliminamos metade dos elementos.",
          keyPoints: [
            "Requer array ordenado",
            "Divide e conquista: reduz o problema pela metade",
            "100.000 elementos = ~17 iterações máximo"
          ],
          examples: "Array de 1M: log₂(1M) ≈ 20 iterações\nArray de 1B: log₂(1B) ≈ 30 iterações"
        },
        hints: ["Como mudam os limites (left, right)?", "Quantas vezes podemos dividir por 2?"]
      },
      {
        id: 3,
        question: "Qual afirmação sobre complexidade é FALSA?",
        code: "// Exemplos de complexidades\nconst ex1 = 'for (let i = 0; i < n; i++) { } // O(n)';\nconst ex2 = 'for (let i = 0; i < n; i++) { for (let j = 0; j < n; j++) {} } // O(n²)';\nconst ex3 = 'while (n > 1) { n = n / 2; } // O(n)';\nconst ex4 = 'arr.find(x => x === 5); // O(n)';",
        options: [
          "Um loop é sempre O(n)",
          "Loops aninhados são sempre O(n²)",
          "O(1) é melhor que O(n)",
          "Dois loops sequenciais são O(2n) = O(n)"
        ],
        correct: 0,
        explanation: "Um loop simples é O(n), mas loops aninhados são O(n²). A resposta correta é 'Um loop é sempre O(n)' porque depende do que o loop faz.",
        theoryPoints: {
          title: "Análise de Complexidade",
          content: "Precisamos analisar o que acontece dentro de cada loop. Um loop que divide por 2 é O(log n), não O(n).",
          keyPoints: [
            "Loops sequenciais: somar as complexidades",
            "Loops aninhados: multiplicar as complexidades",
            "Divisão ou multiplicação: O(log n)"
          ],
          examples: "for + for = O(2n) = O(n)\nfor + for + for = O(3n) = O(n)\nfor (aninhado) + for (aninhado) = O(n²) + O(n²) = O(n²)"
        },
        hints: ["Pense em O(2n) simplificando", "Constantes não importam em Big O"]
      }
    ]
  },
  {
    id: 2,
    name: "Estruturas de Dados Lineares",
    description: "Arrays, Listas Ligadas, Stacks e Queues",
    icon: "Code",
    color: "#7c3aed",
    xp: 150,
    theory: { 
      title: "Estruturas de Dados Lineares", 
      content: "Estruturas que armazenam elementos em sequência. Cada elemento tem um predecessor e um sucessor (exceto o primeiro e último)." 
    },
    exercises: [
      {
        id: 1,
        question: "Qual é a complexidade de inserção no final de um array em JavaScript?",
        code: "let arr = [1, 2, 3];\narr.push(4); // Qual a complexidade?",
        options: ["O(1)", "O(n)", "O(n²)", "O(log n)"],
        correct: 0,
        explanation: "Push em JavaScript é O(1) amortizado. Adicionar ao final é uma operação constante na maioria dos casos.",
        theoryPoints: {
          title: "Operações em Arrays",
          content: "Arrays têm diferentes complexidades dependendo da operação. Push/pop no final são rápidos, mas inserir no meio requer deslocar elementos.",
          keyPoints: [
            "push/pop no final: O(1)",
            "shift/unshift no início: O(n)",
            "insert/delete no meio: O(n)",
            "access por índice: O(1)"
          ],
          examples: "arr.push(5) // O(1)\narr.unshift(0) // O(n) - desloca todos\narr.splice(2, 1) // O(n)"
        },
        hints: ["Precisa realocar todo o array?", "Quantos elementos precisam ser movidos?"]
      },
      {
        id: 2,
        question: "Qual é a vantagem de uma lista ligada sobre um array?",
        code: "// Array\narr.splice(0, 1); // Remove primeiro: O(n)\n\n// Lista Ligada\nhead = head.next; // Remove primeiro: O(1)",
        options: [
          "Inserção/remoção no início é O(1)",
          "Acesso por índice é mais rápido",
          "Usa menos memória",
          "É sempre mais rápida"
        ],
        correct: 0,
        explanation: "Listas ligadas permitem inserção/remoção O(1) em qualquer lugar se você já tem referência ao nó. Arrays requerem deslocar elementos.",
        theoryPoints: {
          title: "Array vs Lista Ligada",
          content: "Cada estrutura tem suas vantagens. Arrays são bons para acesso, listas ligadas são boas para modificação.",
          keyPoints: [
            "Array: acesso O(1), inserção no meio O(n)",
            "Lista Ligada: acesso O(n), inserção O(1)",
            "Use array se precisa de acesso frequente",
            "Use lista ligada se precisa de inserção/remoção frequente"
          ],
          examples: "Array [1,2,3] → remover 1 → [2,3] requer deslocar\nLista 1→2→3 → remover 1 → 2→3 sem deslocar"
        },
        hints: ["Em array, remover o primeiro requer...?", "Em lista ligada, é só mudar um apontador"]
      },
      {
        id: 3,
        question: "O que é uma Stack?",
        code: "class Stack {\n  constructor() { this.items = []; }\n  push(x) { this.items.push(x); }\n  pop() { return this.items.pop(); }\n  peek() { return this.items[this.items.length - 1]; }\n}",
        options: [
          "Uma estrutura FIFO (primeiro entra, último sai)",
          "Uma estrutura LIFO (último entra, primeiro sai)",
          "Uma árvore binária",
          "Um hash table"
        ],
        correct: 1,
        explanation: "Stack é LIFO (Last In, First Out). O último elemento adicionado é o primeiro a sair. Pense numa pilha de pratos.",
        theoryPoints: {
          title: "Stack (Pilha)",
          content: "Uma stack funciona como uma pilha de pratos. Você coloca no topo (push) e retira do topo (pop).",
          keyPoints: [
            "LIFO: Último Entra, Primeiro Sai",
            "push: adiciona ao topo O(1)",
            "pop: remove do topo O(1)",
            "Usada em: recursão, parsing, undo/redo"
          ],
          examples: "push(1) → push(2) → pop() retorna 2\nBrowsers: pilha de páginas visitadas"
        },
        hints: ["Como um prato na pilha de pratos?", "Se adiciono A depois B, qual saio primeiro?"]
      },
      {
        id: 4,
        question: "O que diferencia uma Queue de uma Stack?",
        code: "// Stack (LIFO)\nstack.push(1); stack.push(2);\nstack.pop(); // retorna 2\n\n// Queue (FIFO)\nqueue.enqueue(1); queue.enqueue(2);\nqueue.dequeue(); // retorna 1",
        options: [
          "Nada, são iguais",
          "Queue é FIFO, Stack é LIFO",
          "Queue é mais rápida",
          "Stack usa mais memória"
        ],
        correct: 1,
        explanation: "Queue é FIFO (First In, First Out) enquanto Stack é LIFO. Em queue, o primeiro a entrar é o primeiro a sair.",
        theoryPoints: {
          title: "Queue (Fila)",
          content: "Uma queue funciona como uma fila de banco. Você entra por trás (enqueue) e sai pela frente (dequeue).",
          keyPoints: [
            "FIFO: Primeiro Entra, Primeiro Sai",
            "enqueue: adiciona ao final O(1)",
            "dequeue: remove do início O(1)",
            "Usada em: processos, jobs, breadth-first search"
          ],
          examples: "enqueue(1) → enqueue(2) → dequeue() retorna 1\nFila de impressoras: primeiro documento entra, primeiro é impresso"
        },
        hints: ["Como uma fila de banco?", "Quem entra primeiro, sai primeiro ou último?"]
      }
    ]
  },
  {
    id: 3,
    name: "Algoritmos de Ordenação",
    description: "Bubble Sort, Quick Sort, Merge Sort",
    icon: "Brain",
    color: "#6d28d9",
    xp: 200,
    theory: { 
      title: "Algoritmos de Ordenação", 
      content: "Existem vários algoritmos para ordenar dados, cada um com suas vantagens e desvantagens em termos de complexidade." 
    },
    exercises: [
      {
        id: 1,
        question: "Qual é a complexidade do Bubble Sort no pior caso?",
        code: "function bubbleSort(arr) {\n  for (let i = 0; i < arr.length; i++) {\n    for (let j = 0; j < arr.length - i - 1; j++) {\n      if (arr[j] > arr[j + 1]) {\n        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];\n      }\n    }\n  }\n  return arr;\n}",
        options: ["O(n log n)", "O(n)", "O(n²)", "O(2ⁿ)"],
        correct: 2,
        explanation: "Bubble Sort tem loops aninhados. No pior caso (array invertido), precisa fazer n×n comparações, resultando em O(n²).",
        theoryPoints: {
          title: "Bubble Sort",
          content: "Bubble Sort é o algoritmo mais simples mas menos eficiente. Compara elementos adjacentes e troca se estiverem na ordem errada.",
          keyPoints: [
            "Melhor caso: O(n) com otimização",
            "Caso médio: O(n²)",
            "Pior caso: O(n²)",
            "Espaço: O(1) - in-place"
          ],
          examples: "[3,1,2] → [1,3,2] → [1,2,3]\nFaz múltiplas passadas até estar ordenado"
        },
        hints: ["Quantos loops?", "Cada comparação é um loop dentro do outro"]
      },
      {
        id: 2,
        question: "Qual algoritmo é mais eficiente em média?",
        code: "// Quick Sort - Divide e Conquista\nfunction quickSort(arr) {\n  if (arr.length <= 1) return arr;\n  const pivot = arr[Math.floor(arr.length / 2)];\n  const left = arr.filter(x => x < pivot);\n  const middle = arr.filter(x => x === pivot);\n  const right = arr.filter(x => x > pivot);\n  return [...quickSort(left), ...middle, ...quickSort(right)];\n}",
        options: [
          "Bubble Sort - O(n²)",
          "Quick Sort - O(n log n)",
          "Selection Sort - O(n²)",
          "Insertion Sort - O(n²)"
        ],
        correct: 1,
        explanation: "Quick Sort usa divide e conquista, dividindo o array em partes menores. Caso médio é O(n log n), muito mais eficiente.",
        theoryPoints: {
          title: "Quick Sort",
          content: "Quick Sort é um dos algoritmos mais usados. Escolhe um pivô e particiona o array em elementos menores e maiores.",
          keyPoints: [
            "Melhor caso: O(n log n)",
            "Caso médio: O(n log n)",
            "Pior caso: O(n²) com pivot ruim",
            "Espaço: O(log n) recursão"
          ],
          examples: "Divide [3,1,4,1,5] em [1,1,3] e [4,5]\nDepois ordena recursivamente cada parte"
        },
        hints: ["Como divide o problema?", "Quantas vezes divide até ter 1 elemento?"]
      },
      {
        id: 3,
        question: "Qual é a vantagem do Merge Sort sobre Quick Sort?",
        code: "// Merge Sort - Garantido O(n log n)\nfunction mergeSort(arr) {\n  if (arr.length <= 1) return arr;\n  const mid = Math.floor(arr.length / 2);\n  const left = mergeSort(arr.slice(0, mid));\n  const right = mergeSort(arr.slice(mid));\n  return merge(left, right);\n}",
        options: [
          "Merge Sort é sempre O(n log n) garantido",
          "Merge Sort usa menos memória",
          "Merge Sort é mais rápido em prática",
          "Não há vantagem"
        ],
        correct: 0,
        explanation: "Merge Sort tem complexidade O(n log n) GARANTIDA em todos os casos. Quick Sort pode degradar para O(n²) com escolha ruim de pivô.",
        theoryPoints: {
          title: "Merge Sort",
          content: "Merge Sort é estável e previsível. Sempre divide em metades e depois faz merge de forma ordenada.",
          keyPoints: [
            "Melhor caso: O(n log n)",
            "Caso médio: O(n log n)",
            "Pior caso: O(n log n) ✓ GARANTIDO",
            "Espaço: O(n) auxilia merge"
          ],
          examples: "Divide [3,1,4,1,5] em [3,1] e [4,1,5]\nContinua até ter elementos únicos\nDepois faz merge ordenado"
        },
        hints: ["Qual é sempre O(n log n)?", "Qual não tem pior caso ruim?"]
      }
    ]
  },
  {
    id: 4,
    name: "Grafos e Árvores",
    description: "Estruturas não-lineares e algoritmos de busca",
    icon: "Brain",
    color: "#5b21b6",
    xp: 250,
    theory: { 
      title: "Grafos e Árvores", 
      content: "Estruturas não-lineares usadas para representar relacionamentos complexos entre dados." 
    },
    exercises: [
      {
        id: 1,
        question: "Qual é a diferença entre BFS e DFS?",
        code: "// BFS - Breadth First Search\nfunction bfs(graph, start) {\n  const queue = [start];\n  const visited = new Set([start]);\n  while (queue.length) {\n    const node = queue.shift();\n    for (let neighbor of graph[node]) {\n      if (!visited.has(neighbor)) {\n        visited.add(neighbor);\n        queue.push(neighbor);\n      }\n    }\n  }\n}\n\n// DFS - Depth First Search\nfunction dfs(graph, start, visited = new Set()) {\n  visited.add(start);\n  for (let neighbor of graph[start]) {\n    if (!visited.has(neighbor)) dfs(graph, neighbor, visited);\n  }\n}",
        options: [
          "BFS usa stack, DFS usa queue",
          "BFS usa queue, DFS usa stack/recursão",
          "São iguais",
          "BFS é mais rápida"
        ],
        correct: 1,
        explanation: "BFS (Breadth-First) explora vizinhos primeiro (queue), DFS (Depth-First) vai fundo primeiro (stack/recursão).",
        theoryPoints: {
          title: "BFS vs DFS",
          content: "Duas estratégias diferentes para explorar grafos. BFS é melhor para encontrar caminho mais curto, DFS para explorar profundamente.",
          keyPoints: [
            "BFS: explora por níveis, usa queue",
            "DFS: explora profundamente, usa stack",
            "BFS: encontra caminho mais curto",
            "DFS: usa menos memória geralmente"
          ],
          examples: "Grafo: 1-2, 1-3, 2-4\nBFS de 1: [1,2,3,4]\nDFS de 1: [1,2,4,3]"
        },
        hints: ["Queue é FIFO ou LIFO?", "Stack é FIFO ou LIFO?"]
      },
      {
        id: 2,
        question: "O que define uma árvore?",
        code: "// Árvore Binária\nclass TreeNode {\n  constructor(value) {\n    this.value = value;\n    this.left = null;\n    this.right = null;\n  }\n}",
        options: [
          "Grafo com ciclos",
          "Grafo acíclico conectado com n nós e n-1 arestas",
          "Grafo completo",
          "Grafo sem nós"
        ],
        correct: 1,
        explanation: "Uma árvore é um grafo acíclico e conectado. Com n nós, tem exatamente n-1 arestas. Sem ciclos, sempre há um caminho único entre dois nós.",
        theoryPoints: {
          title: "Propriedades de Árvores",
          content: "Árvores são estruturas hierárquicas muito usadas em programação. Cada nó tem um pai (exceto raiz) e zero ou mais filhos.",
          keyPoints: [
            "Acíclica: sem ciclos",
            "Conectada: todos nós reachable da raiz",
            "n nós = n-1 arestas",
            "Raiz: nó sem pai"
          ],
          examples: "Árvore binária: cada nó tem até 2 filhos\nÁrvore n-ária: cada nó tem até n filhos\nSistema de ficheiros: pastas são árvore"
        },
        hints: ["Pode ter ciclos?", "Quantas arestas em relação aos nós?"]
      }
    ]
  }
];

export default APROGLevels;