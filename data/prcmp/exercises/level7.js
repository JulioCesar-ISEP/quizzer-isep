const ex7 = [
  {
    id: 1,
    question: "O assembler tem como função:",
    code: "",
    options: [
      "traduzir um programa em assembly para linguagem-máquina",
      "traduzir um programa em linguagem de alto-nível para linguagem-máquina",
      "traduzir um programa em linguagem de alto-nível para assembly",
      "interpretar e executar as instruções em assembly de um programa"
    ],
    correct: 0,
    explanation: "O assembler (montador) converte código assembly (linguagem simbólica de baixo nível) em código de máquina binário. Cada instrução em assembly corresponde a uma instrução em código de máquina.",
    theoryPoints: {
      title: "Assembler (Montador)",
      content: "Assembler traduz código assembly para código de máquina. Assembly é uma linguagem de baixo nível com instruções mnemónicas correspondentes diretamente a instruções de máquina. O assembler resolve símbolos (labels) para endereços.",
      keyPoints: [
        "Entrada: código assembly (.asm, .s)",
        "Saída: código objeto (.o, .obj)",
        "Tabela de símbolos: associa labels a endereços",
        "Um-para-um: cada instrução assembly → uma instrução máquina"
      ],
      examples: "NASM (Netwide Assembler) para x86\nGNU Assembler (as) para múltiplas arquiteturas\nMARS para MIPS\nUm programa simples: MOV AX, 5 → código binário específico da CPU"
    },
    hints: ["Qual a relação entre assembly e código de máquina?", "O que o assembler faz com labels como 'loop:'?"]
  },
  {
    id: 2,
    question: "O linker é um utilitário que:",
    code: "",
    options: [
      "resolve todas as referências a símbolos, substituindo-as pelos seus endereços",
      "transforma as instruções em assembly para linguagem-máquina",
      "liga as instruções aos dados de um programa, em tempo de execução",
      "carrega um ficheiro executável para memória"
    ],
    correct: 0,
    explanation: "O linker (ligador) combina múltiplos ficheiros objeto, resolve referências externas (símbolos) entre eles, e produz um executável. Também liga código do programa com bibliotecas.",
    theoryPoints: {
      title: "Linker (Ligador)",
      content: "Linker junta vários módulos objeto compilados/assemblados separadamente. Funções: 1) Resolução de símbolos (encontrar definições para referências), 2) Relocação (ajustar endereços), 3) Ligação com bibliotecas.",
      keyPoints: [
        "Entrada: ficheiros objeto (.o) e bibliotecas (.a, .lib)",
        "Saída: executável (.exe) ou biblioteca compartilhada (.so, .dll)",
        "Símbolos: funções e variáveis referenciadas entre módulos",
        "Bibliotecas estáticas: código copiado para executável; dinâmicas: carregadas em runtime"
      ],
      examples: "ld (GNU linker) no Linux\nlink.exe no Windows\nBiblioteca padrão C: printf() definida em libc, ligada ao programa\nLigação estática: -static no gcc; dinâmica: padrão"
    },
    hints: ["Por que precisamos de linker se temos vários ficheiros .c?", "O que acontece se uma função não for encontrada durante linking?"]
  },
  {
    id: 3,
    question: "Um compilador serve para:",
    code: "",
    options: [
      "interpretar um programa em tempo de execução",
      "resolver as referências a símbolos e ligar ao código disponível em bibliotecas",
      "traduzir código numa linguagem de alto-nível para uma de mais baixo nível",
      "traduzir código em linguagem assembly para código máquina"
    ],
    correct: 2,
    explanation: "Compilador traduz código de alto nível (ex: C, Java) para código de baixo nível (assembly ou máquina). O processo inclui análise lexical, sintática, semântica, otimização e geração de código.",
    theoryPoints: {
      title: "Compilador",
      content: "Compilador traduz toda a fonte de uma vez para código alvo. Fases: front-end (análise) → middle-end (otimização) → back-end (geração de código). Produz código objeto que depois precisa de linking.",
      keyPoints: [
        "Compilação ahead-of-time (AOT): antes da execução",
        "Código nativo: executável específico da plataforma",
        "Otimizações: durante compilação, análise de todo o programa",
        "Erros detectados antes da execução"
      ],
      examples: "gcc (C), javac (Java bytecode), ghc (Haskell)\nCross-compiler: compila para plataforma diferente\nJIT (Just-In-Time): compila durante execução (Java HotSpot, .NET)"
    },
    hints: ["Qual a diferença entre compilação e interpretação?", "Por que C é mais rápido que Python (geralmente)?"]
  },
  {
    id: 4,
    question: "O depurador (debugger) é um utilitário que:",
    code: "",
    options: [
      "permite analisar a execução de um programa, permitindo pausar o programa em pontos-chave e inspecionar a memória",
      "liga as palavras-chave de um programa interpretado ao código objecto a ser executado",
      "liga as instruções de um programa aos seus respectivos dados em tempo de execução",
      "liga o código objecto do programa com o código objecto fornecido por bibliotecas"
    ],
    correct: 0,
    explanation: "Debugger permite controlar a execução de um programa (pausar, continuar, passo-a-passo), inspecionar variáveis, memória, stack trace, e modificar estado durante depuração.",
    theoryPoints: {
      title: "Debugger (Depurador)",
      content: "Ferramenta para encontrar e corrigir bugs. Funcionalidades: breakpoints, watchpoints, step into/over/out, inspeção de registos, memória, variáveis. Pode ser standalone ou integrado a IDE.",
      keyPoints: [
        "Breakpoint: pausa execução em linha específica",
        "Step: executa uma instrução/linha de cada vez",
        "Backtrace: mostra pilha de chamadas",
        "Condições: breakpoints condicionais"
      ],
      examples: "gdb (GNU Debugger) para C/C++\npdb para Python\nChrome DevTools para JavaScript\nVisual Studio Debugger\nDebugging remoto: para sistemas embarcados"
    },
    hints: ["Como parar um programa em linha específica?", "Como ver valor de variável durante execução?"]
  },
  {
    id: 5,
    question: "Um programa interpretado:",
    code: "",
    options: [
      "é escrito numa linguagem de alto-nível e traduzido por um interpretador em tempo de execução",
      "é escrito numa linguagem de alto-nível e traduzido para um ficheiro executável por um interpretador",
      "é escrito em assembly e traduzido pelo assembler em tempo de execução",
      "é escrito numa linguagem de alto-nível e compilado para um ficheiro executável"
    ],
    correct: 0,
    explanation: "Interpretador lê e executa código fonte linha-a-linha (ou bytecode) em tempo de execução. Não produz executável standalone. Exemplos: Python, JavaScript, Ruby (MRI).",
    theoryPoints: {
      title: "Interpretador",
      content: "Interpretador executa código diretamente, traduzindo e executando instrução por instrução. Vantagens: portabilidade (mesmo código roda em qualquer plataforma com interpretador), facilidade de debugging. Desvantagens: geralmente mais lento que código compilado.",
      keyPoints: [
        "Execução linha-a-linha: traduz e executa imediatamente",
        "Portabilidade: só precisa do interpretador para cada plataforma",
        "REPL: Read-Eval-Print Loop comum em linguagens interpretadas",
        "Bytecode: intermediário entre fonte e máquina (Python .pyc, Java .class)"
      ],
      examples: "Python: interpretador CPython\nJavaScript: interpretador no navegador\nRuby: MRI (Matz's Ruby Interpreter)\nPHP: interpretador Zend"
    },
    hints: ["Qual a vantagem de interpretação vs compilação?", "Por que Python é mais lento que C?"]
  },
  {
    id: 6,
    question: "O linker é um utilitário que:",
    code: "",
    options: [
      "liga as palavras-chave de um programa interpretado ao código objecto a ser executado",
      "permite depurar um programa, permitindo pausar o programa em pontos-chave e inspecionar a memória",
      "liga as instruções de um programa aos seus respectivos dados em tempo de execução",
      "liga o código objecto do programa com o código objecto fornecido por bibliotecas"
    ],
    correct: 3,
    explanation: "Linker combina código objeto do programa com código objeto de bibliotecas (standard library, user libraries). Bibliotecas estáticas são copiadas para o executável; dinâmicas são referenciadas.",
    theoryPoints: {
      title: "Ligação com Bibliotecas",
      content: "Bibliotecas fornecem código reutilizável. Estáticas (.a, .lib): código copiado para executável. Dinâmicas (.so, .dll): carregadas em tempo de execução, compartilhadas entre processos. Linker resolve referências a funções de biblioteca.",
      keyPoints: [
        "Bibliotecas estáticas: executável maior, não depende de ficheiros externos",
        "Bibliotecas dinâmicas: executável menor, atualizações fáceis, compartilhamento de memória",
        "DLL Hell: problemas de versão com bibliotecas dinâmicas",
        "LD_LIBRARY_PATH (Linux) / PATH (Windows): onde procurar bibliotecas dinâmicas"
      ],
      examples: "C: libc.a (estática) ou libc.so (dinâmica)\nWindows: kernel32.dll, user32.dll\nLinux: glibc, libm.so (matemática)\n-lm no gcc: liga com biblioteca matemática"
    },
    hints: ["Qual a diferença entre .a e .so no Linux?", "Por que um programa diz 'DLL missing' no Windows?"]
  },
  {
    id: 7,
    question: "As linguagens de programação de alto nível surgiram na década de 1960. Qual é uma característica fundamental?",
    code: "",
    options: [
      "São diretamente executáveis pela CPU, sem necessidade de tradução",
      "Possuem um conjunto limitado de instruções de baixo nível para optimizar o desempenho",
      "Exigem a escrita de código em linguagem máquina para obter maior eficiência",
      "Oferecem uma maior abstração, permitindo que os programadores se concentrem na lógica do problema"
    ],
    correct: 3,
    explanation: "Linguagens de alto nível (Python, Java, C) abstraem detalhes do hardware, usando estruturas mais próximas do pensamento humano (variáveis, funções, objetos) em vez de instruções de máquina.",
    theoryPoints: {
      title: "Linguagens de Alto Nível",
      content: "Características: 1) Abstração (esconder detalhes de hardware), 2) Legibilidade (sintaxe próxima do humano), 3) Portabilidade (mesmo código em diferentes máquinas), 4) Produtividade (menos código para fazer mais).",
      keyPoints: [
        "Níveis: alto (Python, Java), médio (C), baixo (assembly)",
        "Paradigmas: imperativo, OO, funcional, lógico",
        "Geração de código: 3GL (third-generation languages)",
        "Trade-off: abstração vs controle vs performance"
      ],
      examples: "Python: muito alto nível, tipagem dinâmica\nC: médio nível, controle de hardware\nCOBOL: primeiro sucesso de alto nível (negócios)\nFORTRAN: primeiro alto nível (científico)"
    },
    hints: ["Por que não programamos tudo em assembly?", "Qual a vantagem de Python sobre C para prototipagem?"]
  },
  {
    id: 8,
    question: "Admita um programa escrito numa linguagem de programação de alto-nível. Qual afirmação é verdadeira?",
    code: "",
    options: [
      "O código-fonte desse programa é directamente executado pelo processador",
      "Um compilador traduz e executa o programa linha por linha",
      "O programa executará mais depressa se compilado em vez de interpretado",
      "Um interpretador traduz o programa para código-máquina e liga-o a bibliotecas, produzindo um ficheiro executável"
    ],
    correct: 2,
    explanation: "Programas compilados geralmente executam mais rápido que interpretados porque: 1) Otimizações durante compilação, 2) Código nativo vs interpretação linha-a-linha, 3) Análise de todo o programa possível.",
    theoryPoints: {
      title: "Desempenho: Compilado vs Interpretado",
      content: "Compilado: otimizações estáticas, código nativo, overhead zero em runtime. Interpretado: overhead de interpretação, otimizações limitadas (a não ser JIT). JIT (Just-In-Time) combina vantagens: compila durante execução com profiling.",
      keyPoints: [
        "Compilação AOT: todas otimizações feitas antes de executar",
        "Interpretação pura: tradução + execução para cada instrução, repetidamente",
        "JIT: compila hotspots durante execução, com conhecimento do runtime",
        "VMs: Java, .NET usam JIT para portabilidade + desempenho"
      ],
      examples: "C compilado: muito rápido, otimizações agressivas\nPython interpretado: mais lento, mas mais flexível\nJava JIT: compila bytecode para nativo durante execução\nJavaScript JIT (V8): compila para nativo no navegador"
    },
    hints: ["Por que C é usado para sistemas operativos e Python para scripting?", "O que é JIT compilation?"]
  },
  {
    id: 9,
    question: "Um shell script é um programa interpretado pela interface da linha de comando:",
    code: "",
    options: [
      "desenvolvido numa linguagem de alto nível, sobretudo para resolver problemas de computação numérica",
      "escrito em assembly, para resolver problemas de carácter genérico",
      "que é utilizado para carregar o SO no arranque do computador",
      "desenvolvido numa linguagem de alto nível, sobretudo para automatizar tarefas de gestão e manutenção do sistema"
    ],
    correct: 3,
    explanation: "Shell scripts (Bash, PowerShell) automatizam tarefas administrativas: backup, monitorização, instalação, processamento de ficheiros. Não são para computação numérica intensiva (para isso usam-se Python, MATLAB).",
    theoryPoints: {
      title: "Shell Scripting",
      content: "Linguagem específica da shell para automação. Vantagens: acesso direto a comandos do sistema, rápido prototipar, ideal para tarefas de sistema. Desvantagens: menos estruturado que linguagens de propósito geral, performance para tarefas complexas.",
      keyPoints: [
        "Bash: shell mais comum em Linux/Unix",
        "Sintaxe: variáveis, control structures (if, for, while), funções",
        "Shebang: #!/bin/bash define interpretador",
        "Uso típico: automação, cron jobs, instalação, log analysis"
      ],
      examples: "Backup: tar, gzip, cp\nProcessamento de logs: grep, awk, sed\nInstalação: apt-get, yum, make\nMonitorização: ps, top, df, du"
    },
    hints: ["Por que usar shell script em vez de Python para tarefas simples?", "O que significa '#!/bin/bash' na primeira linha?"]
  },
  {
    id: 10,
    question: "Um compilador específico para uma linguagem de programação:",
    code: "",
    options: [
      "executa as instruções em código-máquina, necessárias para levar a cabo cada instrução do programa",
      "traduz o código-fonte, produzindo um ficheiro executável em código-máquina",
      "interpreta o código-fonte linha a linha em tempo de execução",
      "apenas verifica erros sintáticos sem produzir código"
    ],
    correct: 1,
    explanation: "Compilador traduz código fonte para código máquina (ou código objeto que depois é ligado). Não executa o programa - isso é feito pelo sistema operativo carregando o executável.",
    theoryPoints: {
      title: "Fases da Compilação",
      content: "1) Análise léxica (tokens), 2) Análise sintática (árvore), 3) Análise semântica (tipos, escopo), 4) Otimização, 5) Geração de código. Produz código objeto que precisa de linking para se tornar executável.",
      keyPoints: [
        "Front-end: análise dependente da linguagem fonte",
        "Middle-end: otimizações independentes da máquina",
        "Back-end: geração de código dependente da máquina alvo",
        "Toolchain: pré-processador → compilador → assembler → linker"
      ],
      examples: "gcc hello.c -o hello\nPré-processa (#include) → compila C para assembly → assembla para objeto → liga com bibliotecas\nCross-compilation: compilar para ARM num PC x86"
    },
    hints: ["Qual a diferença entre compilar e executar?", "Por que precisamos de 'gcc -c' para compilar sem linking?"]
  },
  {
    id: 11,
    question: "Se a linguagem de programação for interpretada, será sempre necessário:",
    code: "",
    options: [
      "ter um compilador específico à linguagem para executar o programa linha-a-linha",
      "ter um interpretador que execute o código fonte diretamente",
      "primeiro compilar para código de máquina",
      "usar um assembler para traduzir para código de máquina"
    ],
    correct: 1,
    explanation: "Linguagens interpretadas requerem um interpretador (máquina virtual, runtime) que execute o código. Exemplos: Python precisa do interpretador Python, JavaScript precisa do motor JavaScript (V8, SpiderMonkey).",
    theoryPoints: {
      title: "Runtime de Linguagens Interpretadas",
      content: "Interpretador é o programa que executa código fonte ou bytecode. Inclui: leitor de código, executor, biblioteca padrão, garbage collector (se aplicável), interface com sistema operativo.",
      keyPoints: [
        "Bytecode: intermediário mais eficiente que fonte (Python .pyc, Java .class)",
        "REPL: Read-Eval-Print Loop para interação",
        "Portabilidade: mesmo bytecode roda em qualquer plataforma com runtime",
        "JIT: alguns interpretadores usam compilação just-in-time para melhor performance"
      ],
      examples: "Python: python3 script.py\nJavaScript: node app.js\nRuby: ruby program.rb\nPHP: php index.php"
    },
    hints: ["Como executar um ficheiro .py?", "Por que Java é 'write once, run anywhere'?"]
  },
  {
    id: 12,
    question: "Qual das seguintes NÃO é uma função do assembler?",
    code: "",
    options: [
      "Traduzir instruções mnemónicas para código binário",
      "Resolver endereços de símbolos (labels)",
      "Ligar múltiplos ficheiros objeto em um executável",
      "Gerar código objeto relocável"
    ],
    correct: 2,
    correct: 2,
    explanation: "Ligar múltiplos ficheiros objeto é função do linker, não do assembler. O assembler trabalha com um ficheiro fonte de cada vez, produzindo código objeto que pode ser ligado posteriormente.",
    theoryPoints: {
      title: "Assembler vs Linker",
      content: "Assembler: converte assembly para objeto, resolve símbolos locais. Linker: combina objetos, resolve símbolos externos, ajusta endereços, produz executável. São fases separadas na toolchain.",
      keyPoints: [
        "Assembler: entrada .s/.asm, saída .o",
        "Linker: entrada .o + bibliotecas, saída executável",
        "Duas-pass assembler: primeira pass recolhe símbolos, segunda gera código",
        "Objeto relocável: endereços não finais, ajustados pelo linker"
      ],
      examples: "nasm -f elf64 file.asm → file.o\nld file.o -o file\ngcc faz tudo: gcc file.c (chama pré-processador, compilador, assembler, linker)"
    },
    hints: ["O que faz 'as' (assembler) vs 'ld' (linker)?", "Por que compiladores C produzem ficheiros .o intermediários?"]
  },
  {
    id: 13,
    question: "Um interpretador difere de um compilador porque:",
    code: "",
    options: [
      "produz um ficheiro executável que pode ser executado independentemente",
      "executa o programa traduzindo e executando instrução por instrução em tempo real",
      "requer um linker para produzir código executável",
      "só funciona com linguagens de baixo nível como assembly"
    ],
    correct: 1,
    explanation: "Interpretador executa código diretamente, sem produzir executável standalone. Compilador produz executável que roda sem o compilador. Interpretação permite mais flexibilidade (eval, REPL) mas geralmente é mais lenta.",
    theoryPoints: {
      title: "Comparação Compilador vs Interpretador",
      content: "Compilador: traduz tudo antes, produz executável, execução rápida, detecção de erros antecipada. Interpretador: traduz durante execução, mais lento, mais flexível (dynamic code, REPL), portabilidade total.",
      keyPoints: [
        "Tempo: compilação (antes) vs interpretação (durante)",
        "Portabilidade: executável específico vs código fonte universal",
        "Debugging: mais fácil em interpretado (acesso ao fonte durante execução)",
        "Distribuição: executável vs fonte + interpretador"
      ],
      examples: "C: compilado (gcc), distribui executável\nPython: interpretado, distribui .py + pede para instalar Python\nJava: compilado para bytecode, interpretado/JIT pela JVM"
    },
    hints: ["Qual é mais rápido para desenvolvimento rápido?", "Como distribuir um programa Python vs um programa C?"]
  },
  {
    id: 14,
    question: "O depurador (debugger) permite:",
    code: "",
    options: [
      "compilar código com otimizações avançadas",
      "ligar bibliotecas estáticas ao executável",
      "inspecionar o estado do programa em pontos específicos da execução",
      "traduzir código de alto nível para assembly"
    ],
    correct: 2,
    explanation: "Debugger permite pausar execução (breakpoints), examinar variáveis, stack, memória, registos. Essencial para encontrar bugs lógicos e entender comportamento do programa.",
    theoryPoints: {
      title: "Técnicas de Debugging",
      content: "1) Breakpoints: parar em linha específica, 2) Watchpoints: parar quando variável muda, 3) Step: executar linha a linha, 4) Backtrace: ver chamadas de função, 5) Conditional breakpoints: parar apenas se condição for verdadeira.",
      keyPoints: [
        "Symbolic debugging: mapeia código máquina para fonte original",
        "Core dumps: snapshot de memória após crash",
        "Remote debugging: depurar programa em máquina remota/embarcada",
        "Post-mortem debugging: analisar após término/crash"
      ],
      examples: "gdb: run, break, next, step, print, backtrace\nIDE debuggers: Visual Studio, Eclipse, PyCharm\nprintf debugging: adicionar prints (rudimentar mas útil)\nLogging: mais estruturado que printf"
    },
    hints: ["Como ver por que um programa crashou?", "Qual a diferença entre 'step into' e 'step over'?"]
  },
  {
    id: 15,
    question: "Um programa em linguagem de alto nível necessita de um processo intermédio de tradução porque:",
    code: "",
    options: [
      "as CPUs só executam código em linguagem máquina",
      "as linguagens de alto nível são demasiado complexas para os programadores",
      "é necessário ocultar o código fonte dos utilizadores",
      "as linguagens de alto nível são independentes do sistema operativo"
    ],
    correct: 0,
    explanation: "CPUs executam apenas instruções em código binário específico da arquitetura. Linguagens de alto nível precisam ser traduzidas (compiladas ou interpretadas) para esse código.",
    theoryPoints: {
      title: "Hierarquia de Linguagens",
      content: "Nível 1: máquina (binário), Nível 2: assembly (mnemónicos), Nível 3: linguagens de alto nível (C, Java), Nível 4: linguagens de muito alto nível (Python, SQL). Cada nível abstrai detalhes do nível abaixo.",
      keyPoints: [
        "Abstração crescente: facilita programação, esconde complexidade",
        "Tradução necessária: entre cada nível",
        "Performance: geralmente diminui com aumento de abstração",
        "Portabilidade: aumenta com abstração"
      ],
      examples: "Python → bytecode → interpretado/C\nC → assembly → objeto → executável\nJava → bytecode → JIT para nativo\nWeb: JavaScript → bytecode → JIT no navegador"
    },
    hints: ["Por que não podemos escrever Python diretamente para CPU?", "Qual a vantagem de múltiplos níveis de abstração?"]
  }
];

export default ex7;