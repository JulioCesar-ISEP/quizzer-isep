import ex5 from "./exercises/level5.js";
import ex4 from "./exercises/level4.js";
import ex3 from "./exercises/level3.js";
import ex2 from "./exercises/level2.js";
import ex1 from "./exercises/level1.js";
import { level1KnowledgeTree } from './knowledgeLevels/level1.js';
import { level2KnowledgeTree } from './knowledgeLevels/level2.js';
import { level3KnowledgeTree } from './knowledgeLevels/level3.js';
import { level4KnowledgeTree } from './knowledgeLevels/level4.js';
import { level5KnowledgeTree } from './knowledgeLevels/level5.js';

const prcmp = [
  {
    id: 1,
    name: "Fundamentos de Representação de Dados",
    description: "Sistemas numéricos e representação binária",
    icon: "Binary",
    color: "#8b5cf6",
    xp: 100,
    theory: { 
      title: "Sistemas de Numeração e Representação", 
      content: "Computadores usam sistemas binário, octal, hexadecimal e representações como complemento para 2 e IEEE 754 para armazenar diferentes tipos de dados." 
    },
    KnowledgeTreeView: level1KnowledgeTree,
    exercises: ex1
  },
  {
    id: 2,
    name: "Aritmética Computacional",
    description: "Operações binárias e flags de status",
    icon: "Calculator",
    color: "#7c3aed",
    xp: 150,
    theory: { 
      title: "Operações Aritméticas em Binário", 
      content: "Computadores realizam operações aritméticas usando lógica digital. Flags indicam condições especiais como overflow, carry, zero, etc." 
    },
    KnowledgeTreeView: level2KnowledgeTree,
    exercises: ex2
  },
  {
    id: 3,
    name: "Arquitetura de Computadores",
    description: "Von Neumann, CPU, memória e ISA",
    icon: "Cpu",
    color: "#6d28d9", 
    xp: 200,
    theory: { 
      title: "Arquitetura von Neumann", 
      content: "Modelo onde programa e dados são armazenados na mesma memória. CPU busca e executa instruções sequencialmente." 
    },
    KnowledgeTreeView: level3KnowledgeTree,
    exercises: ex3
  },
  {
    id: 4,
    name: "Sistemas Operativos",
    description: "Processos, memória virtual e escalonamento",
    icon: "Settings",
    color: "#5b21b6",
    xp: 250,
    theory: { 
      title: "Conceitos de Sistemas Operativos", 
      content: "SO gerencia recursos de hardware, fornece interface para usuários e programas, e implementa abstrações como processos e memória virtual." 
    },
   KnowledgeTreeView: level4KnowledgeTree,
   exercises: ex4
  },
{
  id: 5,
  name: "Comandos Unix e Processamento de Texto",
  description: "Comandos básicos, pipes, redirecionamento e manipulação de texto",
  icon: "Terminal",
  color: "#4c1d95",
  xp: 200,
  theory: { 
    title: "Comandos Essenciais Unix/Linux", 
    content: "O shell Unix oferece comandos poderosos para manipular arquivos, processar texto e automatizar tarefas através de pipes e redirecionamento." 
  },
  KnowledgeTreeView: level5KnowledgeTree,
  exercises: ex5
},
{
  id: 6,
  name: "Scripting e Automação em Shell",
  description: "Programação shell, variáveis, loops, funções e automação",
  icon: "Code",
  color: "#3730a3",
  xp: 300,
  theory: { 
    title: "Programação em Shell Script", 
    content: "Shell scripts permitem automatizar tarefas complexas através de variáveis, estruturas de controle, funções e manipulação de parâmetros." 
  },
  exercises: [
    {
      id: 1,
      question: "Como criar script para atualizar múltiplos repositórios git?",
      code: "#!/bin/bash\n# Ficheiro com diretórios: repos.txt\nwhile read -r dir; do\n  cd \"$dir\" && git pull || echo \"Erro: $dir\"\ndone < repos.txt",
      options: [
        "Usar loop for sobre lista fixa",
        "Usar while read sobre ficheiro", 
        "Executar git pull sequencialmente",
        "Usar find para localizar repositórios"
      ],
      correct: 1,
      explanation: "while read -r linha lê cada linha do ficheiro. cd entra no diretório, git pull atualiza, || trata erros. Input redirection < fornece ficheiro.",
      theoryPoints: {
        title: "Automação com Shell Script",
        content: "Scripts automatizam tarefas repetitivas. Boas práticas: tratamento de erros, mensagens informativas, flexibilidade com parâmetros.",
        keyPoints: [
          "Shebang: #!/bin/bash",
          "Variáveis e parameter expansion",
          "Loops: while, for, until",
          "Tratamento de erros com && e ||"
        ],
        examples: "for file in *.txt; do echo \"Processando $file\"; done\nif [ -d \"$dir\" ]; then cd \"$dir\"; else echo \"Diretório inexistente\"; fi"
      },
      hints: ["Como processar cada linha de um ficheiro?", "Como lidar com diretórios inválidos?"]
    },
    {
      id: 2,
      question: "Qual estrutura usar para menu com múltiplas opções?",
      code: "#!/bin/bash\ncase \"$1\" in\n  start) echo \"Iniciando...\";;\n  stop) echo \"Parando...\";;\n  *) echo \"Uso: $0 {start|stop}\";;\nesac",
      options: [
        "case ... esac",
        "if ... elif ... else",
        "while ... do",
        "select ... in"
      ],
      correct: 0,
      explanation: "case é ideal para menus e múltiplas opções. Mais limpo que múltiplos if/elif quando há muitas condições.",
      theoryPoints: {
        title: "Estrutura Case para Menus",
        content: "Case permite testar variável contra múltiplos padrões. Sintaxe mais limpa que if/elif para muitas opções.",
        keyPoints: [
          "Padrões com wildcards: *, ?, [ ]",
          ";; termina cada clause",
          "*) caso padrão (default)",
          "Pattern matching flexível"
        ],
        examples: "case \"$opt\" in\n  [Yy]*) echo \"Sim\";;\n  [Nn]*) echo \"Não\";;\n  *) echo \"Inválido\";;\nesac"
      },
      hints: ["Qual estrutura é mais legível para muitas opções?", "Como lidar com input do usuário?"]
    },
    {
      id: 3,
      question: "Como medir tempo de execução de programas Python vs C?",
      code: "#!/bin/bash\necho \"Python:\"\ntime ./program.py\necho \"C:\"\ntime ./program_c",
      options: [
        "Usar comando time",
        "Usar date antes e depois",
        "Usar timer interno do shell",
        "Usar perf stat"
      ],
      correct: 0,
      explanation: "time medre tempo real, user e system. Mostra diferenças entre linguagens interpretadas (Python) e compiladas (C).",
      theoryPoints: {
        title: "Benchmarking e Performance",
        content: "time mostra tempo real de execução, tempo em user space e system space. Útil para comparar eficiência.",
        keyPoints: [
          "real: tempo total (wall clock)",
          "user: tempo em user space", 
          "sys: tempo em kernel space",
          "Python geralmente mais lento que C"
        ],
        examples: "time python script.py\ntime ./compiled_binary\ntime (command1 && command2)"
      },
      hints: ["Que comando mede tempo de execução?", "Quais métricas são importantes?"]
    },
    {
      id: 4,
      question: "Como criar função que retorna valores em shell?",
      code: "#!/bin/bash\nminha_funcao() {\n  local resultado=$(( $1 + $2 ))\n  echo $resultado\n}\nvalor=$(minha_funcao 5 3)",
      options: [
        "Usar echo para output e $() para capturar",
        "Usar return apenas para status",
        "Usar variáveis globais",
        "Usar printf e redirecionamento"
      ],
      correct: 0,
      explanation: "Funções shell retornam status com return, mas para valores usa-se echo e captura com $(). return só para 0-255.",
      theoryPoints: {
        title: "Funções e Retorno de Valores",
        content: "Shell functions têm limitações. return só para exit status. Para dados, usar stdout e command substitution.",
        keyPoints: [
          "return: apenas exit status (0-255)",
          "echo: output para stdout",
          "$(): command substitution captura output",
          "local: variáveis locais à função"
        ],
        examples: "get_date() { date +%F; }\nhoje=$(get_date)\nsum() { echo $(($1+$2)); }"
      },
      hints: ["Como capturar output de função?", "Qual diferença entre return e echo?"]
    }
  ]
}
];

export default prcmp;