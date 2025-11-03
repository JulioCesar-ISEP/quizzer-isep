const BDLevels = [
  {
    id: 1,
    name: "Fundamentos SQL",
    description: "Consultas básicas SELECT",
    icon: "Grid3x3",
    color: "#f59e0b",
    xp: 100,
    theory: { 
      title: "Introdução a SQL", 
      content: "SQL (Structured Query Language) é a linguagem padrão para trabalhar com bases de dados relacionais. Permite consultar, inserir, atualizar e deletar dados." 
    },
    exercises: [
      {
        id: 1,
        question: "Qual comando retorna todas as colunas de uma tabela?",
        code: "SELECT __ FROM users;",
        options: ["ALL", "*", "COLUMNS", "TABLE"],
        correct: 1,
        explanation: "O asterisco (*) em SQL representa todas as colunas. É uma forma rápida de selecionar tudo, mas menos eficiente que especificar colunas.",
        theoryPoints: {
          title: "Comando SELECT",
          content: "SELECT é o comando fundamental em SQL para recuperar dados. O asterisco (*) é um curinga que significa 'todas as colunas'.",
          keyPoints: [
            "SELECT * retorna todas as colunas",
            "SELECT col1, col2 retorna colunas específicas",
            "Especificar colunas é mais eficiente",
            "FROM especifica qual tabela"
          ],
          examples: "SELECT * FROM users;\nSELECT id, name, email FROM users;\nSELECT name FROM products;"
        },
        hints: ["É um símbolo especial em SQL", "Significa 'tudo'"]
      },
      {
        id: 2,
        question: "Como filtramos dados em SQL?",
        code: "SELECT * FROM users WHERE age > 18;",
        options: ["FILTER", "WHERE", "IF", "WHEN"],
        correct: 1,
        explanation: "A cláusula WHERE é usada para filtrar registos baseado em condições. Vem após FROM e antes de outras cláusulas.",
        theoryPoints: {
          title: "Cláusula WHERE",
          content: "WHERE permite especificar condições para filtrar apenas os registos que nos interessam. Suporta operadores de comparação e lógicos.",
          keyPoints: [
            "WHERE filtra linhas (registos)",
            "Usa operadores: =, !=, >, <, >=, <=",
            "Usa lógica: AND, OR, NOT",
            "Vem após FROM"
          ],
          examples: "WHERE age > 18\nWHERE name = 'João' AND age > 25\nWHERE country = 'Portugal' OR country = 'Brasil'"
        },
        hints: ["A palavra-chave para condições em SQL", "Vem depois de FROM"]
      },
      {
        id: 3,
        question: "O que faz a cláusula DISTINCT?",
        code: "SELECT DISTINCT country FROM users;",
        options: [
          "Remove duplicatas",
          "Ordena resultados",
          "Limita resultados",
          "Agrupa resultados"
        ],
        correct: 0,
        explanation: "DISTINCT remove duplicatas dos resultados. Se múltiplos users são do mesmo país, mostra o país apenas uma vez.",
        theoryPoints: {
          title: "DISTINCT",
          content: "DISTINCT elimina linhas duplicadas dos resultados. Muito útil para descobrir valores únicos numa coluna.",
          keyPoints: [
            "DISTINCT vem logo após SELECT",
            "Remove duplicatas",
            "Reduz o número de resultados",
            "Pode impactar performance em tabelas grandes"
          ],
          examples: "SELECT DISTINCT country FROM users;\nSELECT DISTINCT status FROM orders;"
        },
        hints: ["Tira repetições dos resultados", "Mostra cada valor uma única vez"]
      },
      {
        id: 4,
        question: "Qual é a ordem correta das cláusulas SQL?",
        code: "SELECT * \nFROM users \nWHERE age > 18 \nORDER BY name;",
        options: [
          "SELECT, WHERE, FROM, ORDER BY",
          "SELECT, FROM, WHERE, ORDER BY",
          "FROM, SELECT, WHERE, ORDER BY",
          "WHERE, FROM, SELECT, ORDER BY"
        ],
        correct: 1,
        explanation: "A ordem correta é: SELECT, FROM, WHERE, ORDER BY. SELECT vem primeiro mas é processado por último.",
        theoryPoints: {
          title: "Ordem de Execução SQL",
          content: "Embora escrevamos SELECT primeiro, SQL processa as cláusulas numa ordem específica. Importante para compreender a lógica.",
          keyPoints: [
            "Escrevemos: SELECT FROM WHERE ORDER BY",
            "SQL processa: FROM WHERE SELECT ORDER BY",
            "FROM: seleciona tabela",
            "WHERE: filtra linhas",
            "SELECT: escolhe colunas",
            "ORDER BY: ordena resultados"
          ],
          examples: "SELECT id, name\nFROM users\nWHERE active = true\nORDER BY name ASC;"
        },
        hints: ["FROM vem antes de WHERE?", "Que cláusula vem por último?"]
      }
    ]
  },
  {
    id: 2,
    name: "JOINs e Queries Avançadas",
    description: "Combinar múltiplas tabelas",
    icon: "Code",
    color: "#d97706",
    xp: 150,
    theory: { 
      title: "Relacionamentos entre Tabelas", 
      content: "Bases de dados relacionais usam JOINs para combinar dados de múltiplas tabelas baseado em relacionamentos." 
    },
    exercises: [
      {
        id: 1,
        question: "Qual JOIN retorna apenas registos com correspondência em ambas as tabelas?",
        code: "SELECT u.name, o.total\nFROM users u\nINNER JOIN orders o ON u.id = o.user_id;",
        options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"],
        correct: 0,
        explanation: "INNER JOIN retorna apenas registos que têm correspondência em ambas as tabelas. Se um user não tem orders, não aparece.",
        theoryPoints: {
          title: "INNER JOIN",
          content: "INNER JOIN é a interseção de duas tabelas. Mostra apenas registos que existem em ambas as tabelas.",
          keyPoints: [
            "INNER JOIN: interseção (AND)",
            "Apenas correspondências",
            "Se não há match, linha desaparece",
            "Mais restritivo dos JOINs"
          ],
          examples: "Tabela users: 1 João, 2 Maria\nTabela orders: 1 → Ordem, 2 → Ordem\nINNER JOIN mostra ambos com orders"
        },
        hints: ["Qual é a interseção?", "Mostra só users COM orders"]
      },
      {
        id: 2,
        question: "O que retorna um LEFT JOIN?",
        code: "SELECT u.name, o.total\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id;",
        options: [
          "Todos da tabela esquerda + matches da direita",
          "Apenas matches em ambas",
          "Todos da tabela direita + matches da esquerda",
          "A união de ambas as tabelas"
        ],
        correct: 0,
        explanation: "LEFT JOIN mantém todos os registos da tabela esquerda e adiciona matches da direita. Users sem orders aparecem com NULL.",
        theoryPoints: {
          title: "LEFT JOIN",
          content: "LEFT JOIN garante que todos os registos da tabela esquerda aparecem, mesmo sem correspondência na direita.",
          keyPoints: [
            "LEFT JOIN: todos da esquerda",
            "Se não há match na direita: NULL",
            "Preserva dados da tabela esquerda",
            "Useful para 'users sem orders'"
          ],
          examples: "User 1: tem order → mostra\nUser 2: sem order → mostra com NULL\nUser 3: sem order → mostra com NULL"
        },
        hints: ["Mostra TODOS da esquerda?", "E se não há ordem?"]
      },
      {
        id: 3,
        question: "Qual tipo de JOIN combina TUDO de ambas as tabelas?",
        code: "SELECT u.name, o.total\nFROM users u\nFULL OUTER JOIN orders o ON u.id = o.user_id;",
        options: [
          "INNER JOIN",
          "LEFT JOIN",
          "RIGHT JOIN",
          "FULL OUTER JOIN"
        ],
        correct: 3,
        explanation: "FULL OUTER JOIN combina tudo de ambas as tabelas. Users sem orders E orders sem users aparecem com NULL.",
        theoryPoints: {
          title: "FULL OUTER JOIN",
          content: "FULL OUTER JOIN é a união completa. Preserva todos os dados de ambas as tabelas.",
          keyPoints: [
            "FULL OUTER JOIN: tudo de ambas",
            "Preser va dados de ambas as tabelas",
            "NULL onde não há match",
            "Menos comum, SQL Server usa FULL OUTER"
          ],
          examples: "User sem order: mostra\nOrder sem user: mostra\nUser com order: mostra"
        },
        hints: ["Qual inclui tudo?", "Mostra users sem order E order sem user?"]
      },
      {
        id: 4,
        question: "Como juntamos mais de uma coluna numa condição JOIN?",
        code: "SELECT *\nFROM orders o\nINNER JOIN order_items oi \n  ON o.id = oi.order_id \n  AND o.user_id = oi.user_id;",
        options: [
          "Com AND",
          "Com OR",
          "Com múltiplos ON",
          "Não é possível"
        ],
        correct: 0,
        explanation: "Usamos AND para adicionar múltiplas condições no JOIN. Ambas as condições devem ser verdadeiras para haver match.",
        theoryPoints: {
          title: "JOINs com Múltiplas Condições",
          content: "Podemos adicionar múltiplas condições num JOIN usando AND (e também OR se necessário).",
          keyPoints: [
            "AND: ambas condições devem ser verdadeiras",
            "OR: pelo menos uma verdadeira",
            "Podemos ter vários AND em sequência",
            "Importante para relacionamentos complexos"
          ],
          examples: "ON a.id = b.id AND a.status = b.status\nON x.user_id = y.user_id AND x.type = y.type"
        },
        hints: ["Como adicionar outra condição?", "Qual operador une condições?"]
      }
    ]
  },
  {
    id: 3,
    name: "Agregações e Grouping",
    description: "GROUP BY, HAVING, Funções de Agregação",
    icon: "Grid3x3",
    color: "#b45309",
    xp: 200,
    theory: { 
      title: "Aggregações em SQL", 
      content: "Funções de agregação combinam múltiplos registos em um único resultado. Muito úteis para relatórios e análises." 
    },
    exercises: [
      {
        id: 1,
        question: "Qual função retorna o número de linhas?",
        code: "SELECT COUNT(*) FROM users;",
        options: ["SUM", "COUNT", "AVG", "MAX"],
        correct: 1,
        explanation: "COUNT(*) retorna o número total de linhas. COUNT(coluna) retorna o número de valores não-NULL nessa coluna.",
        theoryPoints: {
          title: "COUNT",
          content: "COUNT é uma função de agregação que conta o número de registos ou valores.",
          keyPoints: [
            "COUNT(*): conta todas as linhas",
            "COUNT(coluna): conta valores não-NULL",
            "COUNT(DISTINCT coluna): valores únicos",
            "Retorna um número"
          ],
          examples: "SELECT COUNT(*) FROM users; → 1000\nSELECT COUNT(email) FROM users; → 998 (2 NULLs)"
        },
        hints: ["Qual conta registos?", "Qual é mais comum para contar?"]
      },
      {
        id: 2,
        question: "O que faz a cláusula GROUP BY?",
        code: "SELECT country, COUNT(*) \nFROM users \nGROUP BY country;",
        options: [
          "Ordena por grupos",
          "Agrupa registos por uma coluna",
          "Filtra grupos",
          "Junta grupos"
        ],
        correct: 1,
        explanation: "GROUP BY agrupa registos pela coluna especificada. Muito usado com funções de agregação como COUNT, SUM, AVG.",
        theoryPoints: {
          title: "GROUP BY",
          content: "GROUP BY combina registos com o mesmo valor numa coluna. Perfeito para análises por categoria.",
          keyPoints: [
            "Agrupa por coluna especificada",
            "Usado com COUNT, SUM, AVG, etc",
            "Reduz múltiplas linhas em uma",
            "SELECT deve ter GROUP BY coluna"
          ],
          examples: "GROUP BY country: um resultado por país\nGROUP BY department: um resultado por departamento"
        },
        hints: ["Como contar users por país?", "Qual cláusula agrupa dados?"]
      },
      {
        id: 3,
        question: "Qual é a diferença entre WHERE e HAVING?",
        code: "SELECT country, COUNT(*) as total\nFROM users \nWHERE age > 18\nGROUP BY country\nHAVING COUNT(*) > 100;",
        options: [
          "WHERE filtra linhas, HAVING filtra grupos",
          "HAVING filtra linhas, WHERE filtra grupos",
          "São iguais",
          "HAVING é mais lento"
        ],
        correct: 0,
        explanation: "WHERE filtra registos antes de agrupar, HAVING filtra grupos depois de agrupar. WHERE usa colunas, HAVING usa funções de agregação.",
        theoryPoints: {
          title: "WHERE vs HAVING",
          content: "Ordem de execução importante: WHERE elimina registos, depois GROUP BY agrupa, depois HAVING filtra grupos.",
          keyPoints: [
            "WHERE: filtra linhas individuais",
            "HAVING: filtra grupos agregados",
            "WHERE vem antes de GROUP BY",
            "HAVING vem depois de GROUP BY"
          ],
          examples: "WHERE age > 18: elimina menores\nHAVING COUNT(*) > 100: mostra só grupos com +100"
        },
        hints: ["Qual vem primeiro?", "Qual usa COUNT ou SUM?"]
      },
      {
        id: 4,
        question: "Qual retorna a maior valor?",
        code: "SELECT MAX(salary) FROM employees;\nSELECT MIN(salary) FROM employees;\nSELECT AVG(salary) FROM employees;",
        options: [
          "MAX retorna maior",
          "MIN retorna maior",
          "AVG retorna maior",
          "Nenhuma"
        ],
        correct: 0,
        explanation: "MAX retorna o valor máximo, MIN o mínimo, AVG a média. Estas são funções de agregação básicas.",
        theoryPoints: {
          title: "Funções de Agregação",
          content: "Funções que combinam múltiplos valores em um único resultado.",
          keyPoints: [
            "MAX: valor máximo",
            "MIN: valor mínimo",
            "AVG: valor médio",
            "SUM: soma total",
            "COUNT: número de registos"
          ],
          examples: "MAX(salary): maior salário\nMIN(salary): menor salário\nAVG(salary): salário médio\nSUM(salary): folha de pagamento total"
        },
        hints: ["Qual encontra o maior?", "Qual encontra o menor?"]
      }
    ]
  },
  {
    id: 4,
    name: "Subqueries e Índices",
    description: "Queries aninhadas e otimização",
    icon: "Code",
    color: "#a16207",
    xp: 250,
    theory: { 
      title: "Subqueries e Performance", 
      content: "Subqueries permitem queries complexas. Índices melhoram significativamente a performance." 
    },
    exercises: [
      {
        id: 1,
        question: "O que é uma Subquery?",
        code: "SELECT name FROM users\nWHERE id IN (\n  SELECT user_id FROM orders \n  WHERE total > 1000\n);",
        options: [
          "Uma query dentro de outra query",
          "Uma query sem WHERE",
          "Uma query com JOIN",
          "Uma query rápida"
        ],
        correct: 0,
        explanation: "Uma subquery é uma query dentro de outra. Muito útil para operações complexas. A subquery executa primeiro.",
        theoryPoints: {
          title: "Subqueries",
          content: "Subqueries (ou inner queries) permitem usar resultados de uma query em outra query.",
          keyPoints: [
            "Query dentro de query",
            "Subquery executa primeiro",
            "Usada com IN, EXISTS, =, <, etc",
            "Pode usar resultado da outer query (correlada)"
          ],
          examples: "WHERE id IN (SELECT user_id FROM orders)\nWHERE price > (SELECT AVG(price) FROM products)"
        },
        hints: ["Uma query dentro de parênteses", "O resultado alimenta a query externa"]
      },
      {
        id: 2,
        question: "Por que criar um Índice?",
        code: "CREATE INDEX idx_email ON users(email);\n-- Sem índice: SELECT * FROM users WHERE email = 'x@y.com';\n-- Com índice: muito mais rápido!",
        options: [
          "Para organizar tabelas",
          "Para acelerar buscas",
          "Para deletar dados",
          "Para contar linhas"
        ],
        correct: 1,
        explanation: "Índices acceleram operações de busca, WHERE, e JOINs. Trabalham como índices de livro - sem precisar ler tudo.",
        theoryPoints: {
          title: "Índices",
          content: "Índices são estruturas que armazenam dados de forma otimizada para busca. Reduzem drasticamente o tempo de query.",
          keyPoints: [
            "Índices acceleram SELECT e WHERE",
            "Desaceleram INSERT, UPDATE, DELETE",
            "Trade-off: velocidade vs espaço",
            "Criar em colunas frequentemente buscadas"
          ],
          examples: "CREATE INDEX idx_name ON users(name);\nCREATE INDEX idx_composite ON orders(user_id, date);"
        },
        hints: ["Como acelerar uma SELECT?", "O que torna buscas mais rápidas?"]
      }
    ]
  }
];

export default BDLevels;