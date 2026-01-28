const ex2 = [
  {
    id: 1,
    question: "Qual das seguintes opções é uma característica da arquitetura de von Neumann?",
    code: "",
    options: [
      "Estabelece uma separação física entre a memória de instruções e a memória de dados",
      "Os dados e as instruções partilham espaço na mesma memória física",
      "A execução de múltiplos programas simultaneamente em núcleos distintos",
      "A Unidade Aritmética e Lógica coordena as operações do processador"
    ],
    correct: 1,
    explanation:
      "Na arquitetura von Neumann, dados e instruções são armazenados na mesma memória física, diferenciados apenas pela forma como são interpretados pelo processador.",
    theoryPoints: {
      title: "Arquitetura de von Neumann",
      content:
        "Modelo proposto por John von Neumann em 1945, caracterizado por: 1) Memória única para dados e instruções, 2) Unidade de controlo que busca instruções da memória, 3) Execução sequencial de instruções, 4) Computador com programa armazenado.",
      keyPoints: [
        "Memória unificada para dados e instruções",
        "CPU com UC (busca/decodifica) e UAL (executa)",
        "Execução sequencial (uma instrução de cada vez)",
        "Programa armazenado na memória (não hardwired)"
      ],
      examples:
        "Quase todos os computadores modernos seguem este modelo. Harvard architecture (usada em alguns microcontroladores) tem memórias separadas."
    },
    hints: ["Pense na diferença entre programa e dados", "Como a CPU sabe se um valor na memória é instrução ou dado?"]
  },

  {
    id: 2,
    question: "Superscalar é uma técnica de optimização do desempenho de uma CPU em que...",
    code: "",
    options: [
      "as três fases do ciclo fetch-decode-execute são executadas simultaneamente para uma única instrução",
      "instruções de programas distintos são executadas simultaneamente em núcleos de processamento (cores) diferentes",
      "se pode observar uma diminuição na taxa de instruções concluídas por unidade de tempo",
      "duas ou mais instruções do mesmo programa são executadas simultaneamente em unidades de execução distintas da CPU"
    ],
    correct: 3,
    explanation:
      "Arquitetura superscalar permite executar múltiplas instruções do mesmo programa em paralelo, usando múltiplas unidades de execução dentro de uma única CPU.",
    theoryPoints: {
      title: "Arquitetura Superscalar",
      content:
        "CPU superscalar pode executar mais de uma instrução por ciclo de clock, explorando paralelismo a nível de instrução (ILP). Requer múltiplas unidades funcionais e lógica de despacho complexa.",
      keyPoints: [
        "Múltiplas instruções por ciclo de clock",
        "Paralelismo a nível de instrução (ILP)",
        "Múltiplas unidades de execução (ALU, FPU, load/store)",
        "Despacho dinâmico de instruções"
      ],
      examples:
        "Processadores Intel Pentium (a partir do P5) e AMD usam superscalar. Pode executar, por exemplo, uma operação inteira e um acesso à memória simultaneamente."
    },
    hints: ["Quantas instruções podem ser executadas ao mesmo tempo?", "O que diferencia superscalar de pipeline simples?"]
  },

  {
    id: 3,
    question: "Qual é a principal função dos registos de uma CPU num computador?",
    code: "",
    options: [
      "Manter um registo de eventos do sistema operativo",
      "Facilitar a comunicação entre diferentes periféricos",
      "Gerir o armazenamento de longo prazo no disco rígido",
      "Armazenar temporariamente dados e instruções durante a execução de programas"
    ],
    correct: 3,
    explanation:
      "Registos são pequenas memórias de alta velocidade dentro da CPU usadas para armazenar dados temporários, endereços e resultados intermediários durante a execução.",
    theoryPoints: {
      title: "Registos da CPU",
      content:
        "Registos são o nível mais rápido da hierarquia de memória. Tipos incluem: 1) Registos de propósito geral (dados), 2) Registos de endereço (ponteiros), 3) Registos de controlo (flags, PC), 4) Registos de segmento.",
      keyPoints: [
        "Memória mais rápida (acesso em 1 ciclo de clock)",
        "Tamanho limitado (32, 64 bits típicos)",
        "Visíveis ao programador em assembly",
        "PC (Program Counter): endereço da próxima instrução"
      ],
      examples:
        "Em x86: EAX/RAX (acumulador), EBX/RBX (base), ECX/RCX (contador), EDX/RDX (dados), ESP/RSP (stack pointer), EBP/RBP (base pointer)"
    },
    hints: ["Por que a CPU precisa de armazenamento ultrarrápido?", "O que acontece se todos os dados tiverem que vir da RAM?"]
  },

  {
    id: 4,
    question:
      "É necessário colocar a zero os 16 bits menos significativos de uma palavra de 32 bits, deixando os restantes 16 mais significativos inalterados. Uma solução é aplicar à palavra...",
    code: "// Palavra original: 0xABCD1234\n// Resultado desejado: 0xABCD0000",
    options: [
      "16 deslocamentos lógicos para a direita seguidos de 16 deslocamentos lógicos para a esquerda",
      "a operação lógica AND com a máscara de bits 0xFFFF0000",
      "a operação lógica OR com a máscara de bits 0xFFFF0000",
      "a operação lógica AND com a máscara de bits 0x0000FFFF"
    ],
    correct: 1,
    explanation:
      "AND com 0xFFFF0000 mantém os 16 bits superiores (AND com 1) e zera os 16 bits inferiores (AND com 0).",
    theoryPoints: {
      title: "Operações Bitwise (AND, OR, XOR, NOT)",
      content:
        "Operações lógicas bit-a-bit são fundamentais para manipulação de bits. AND é usado para limpar bits (com máscara de 0s), OR para setar bits (com máscara de 1s), XOR para alternar bits.",
      keyPoints: [
        "AND: bit resultante = 1 se ambos bits de entrada = 1",
        "OR: bit resultante = 1 se pelo menos um bit de entrada = 1",
        "XOR: bit resultante = 1 se bits de entrada diferentes",
        "NOT: inverte cada bit"
      ],
      examples:
        "Limpar bits baixos: valor & 0xFFFFFF00\nSetar bits altos: valor | 0xFF000000\nAlternar bits: valor ^ 0x0000FFFF\nMáscara: padrão de bits usado para selecionar bits específicos"
    },
    hints: ["Qual operação preserva bits quando tem 1 e limpa quando tem 0?", "Que máscara mantém os primeiros 16 bits e limpa os últimos 16?"]
  },

  {
    id: 5,
    question: "Quando abordamos os termos arquitectura do conjunto de instruções (ISA) e microarquitectura...",
    code: "",
    options: [
      "ambos os termos referem-se ao mesmo conceito",
      "a microarquitectura é a especificação que determina o conjunto de instruções suportado por uma família de processadores",
      "a ISA estabelece a organização física (electrónica) do processador",
      "a microarquitectura consiste numa implementação física que atende aos requisitos especificados pela ISA"
    ],
    correct: 3,
    explanation:
      "ISA é a interface (o que o processador faz), microarquitetura é a implementação (como é feito fisicamente). Várias microarquiteturas podem implementar a mesma ISA.",
    theoryPoints: {
      title: "ISA vs Microarquitetura",
      content:
        "ISA (Instruction Set Architecture) define: 1) Conjunto de instruções, 2) Modos de endereçamento, 3) Registos visíveis ao programador, 4) Modelo de memória. Microarquitetura define: 1) Pipeline, 2) Cache, 3) Unidades funcionais, 4) Previsão de saltos.",
      keyPoints: [
        "ISA: interface software/hardware (ABI)",
        "Microarquitetura: implementação interna",
        "Mesma ISA pode ter múltiplas microarquiteturas",
        "Ex: x86 ISA implementada por Intel e AMD com microarquiteturas diferentes"
      ],
      examples:
        "ARM ISA: implementada por Cortex-A, Cortex-M (diferentes microarquiteturas). x86: implementada por Intel (Core, Atom) e AMD (Ryzen, EPYC)."
    },
    hints: ["Pense em especificação vs implementação", "Por que diferentes CPUs podem executar os mesmos programas?"]
  },

  {
    id: 6,
    question: "Na arquitectura de Von Neumann, qual das seguintes afirmações é verdadeira?",
    code: "",
    options: [
      "o programa é executado a partir da leitura sequencial das instruções em fita magnética ou disco",
      "a memória ROM pertence ao subsistema de I/O, enquanto a memória RAM pertence ao subsistema de memória",
      "o programa é armazenado na memória como uma sequência de números, que representam os códigos das instruções a executar",
      "o programa é implementado através de ligações eléctricas, estabelecendo a sequência de circuitos aritméticos pretendida"
    ],
    correct: 2,
    explanation:
      "Na arquitetura von Neumann, o programa é armazenado na memória como números binários (opcodes), que a CPU busca, decodifica e executa sequencialmente.",
    theoryPoints: {
      title: "Programa Armazenado",
      content:
        "Conceito fundamental: o programa é armazenado na memória como dados, permitindo: 1) Programas auto-modificáveis, 2) Carregamento dinâmico de programas, 3) Compiladores e sistemas operacionais.",
      keyPoints: [
        "Programa = sequência de instruções na memória",
        "CPU busca instrução do endereço apontado por PC",
        "PC é incrementado após cada fetch",
        "Instruções e dados indistinguíveis na memória"
      ],
      examples:
        "Computadores anteriores (como ENIAC) eram 'programados' por recabulação física. Von Neumann permitiu programas armazenados."
    },
    hints: ["Como a CPU sabe que um valor na memória é uma instrução?", "O que diferencia arquitetura von Neumann de máquinas programadas por hardware?"]
  },

  {
    id: 7,
    question: "No ciclo fetch-decode-execute...",
    code: "// Ciclo básico de instrução:\n// 1. FETCH: buscar instrução da memória\n// 2. DECODE: decodificar opcode\n// 3. EXECUTE: executar operação",
    options: [
      "a unidade de controlo lê da memória o código da próxima operação na fase fetch",
      "os valores dos dados a operar são copiados da memória para os registos internos na fase fetch",
      "é na fase decode que a CPU determina qual a operação a realizar, a partir do código de operação actual",
      "a unidade de controlo incrementa o stack pointer na fase fetch"
    ],
    correct: 2,
    explanation:
      "Na fase decode, a CPU interpreta o opcode (código de operação) para determinar que operação executar e quais operandos são necessários.",
    theoryPoints: {
      title: "Ciclo Fetch-Decode-Execute",
      content:
        "Ciclo básico de execução de instruções: 1) FETCH: buscar instrução do endereço em PC para IR (Instruction Register), 2) DECODE: decodificar opcode e operandos, 3) EXECUTE: executar operação (UAL, acesso memória, etc.), 4) (opcional) WRITE-BACK: escrever resultado em registrador.",
      keyPoints: [
        "PC (Program Counter): aponta para próxima instrução",
        "IR (Instruction Register): guarda instrução atual",
        "Ciclo completo pode levar vários clocks",
        "Pipelining divide ciclo em estágios para execução simultânea de múltiplas instruções"
      ],
      examples:
        "Instrução simples (ADD R1, R2): fetch opcode, decode (ADD), execute (soma R1+R2), write-back (resultado em R1)"
    },
    hints: ["Quando a CPU 'entende' o que fazer com uma instrução?", "O que acontece entre buscar a instrução e executá-la?"]
  },

  {
    id: 8,
    question: "Multi-core é um termo que designa a tecnologia que permite que...",
    code: "",
    options: [
      "as três fases do ciclo fetch-decode-execute sejam executadas simultaneamente para uma única instrução",
      "instruções de programas distintos sejam executadas simultaneamente em núcleos de processamento (cores) diferentes",
      "permite diminuir a taxa de instruções concluídas por unidade de tempo",
      "duas ou mais instruções do mesmo programa são executadas simultaneamente em unidades de execução distintas da CPU"
    ],
    correct: 1,
    explanation:
      "Multi-core refere-se a múltiplos núcleos de processamento (cores) independentes num único chip, permitindo execução paralela de múltiplos programas ou threads.",
    theoryPoints: {
      title: "Processadores Multi-core",
      content:
        "Cada core é uma CPU independente, com seus próprios registos, UAL e cache L1, mas compartilhando cache L2/L3 e barramento. Permite paralelismo a nível de thread (TLP).",
      keyPoints: [
        "Múltiplos cores físicos no mesmo die",
        "Cada core executa threads independentes",
        "Compartilham memória e periféricos",
        "Escalonamento de threads pelo SO"
      ],
      examples:
        "Intel Core i7 (4-8 cores), AMD Ryzen (até 16 cores), servidores com 64+ cores. Diferente de hyper-threading (cores lógicos)."
    },
    hints: ["Qual a diferença entre multi-core e superscalar?", "Como vários programas podem rodar ao mesmo tempo?"]
  },

  {
    id: 9,
    question: "Relativamente a uma sistema computacional de 64 bits, qual das seguintes afirmações é falsa?",
    code: "",
    options: [
      "Os registos de uso genérico da CPU têm largura de 64 bits",
      "A Unidade Aritmética-Lógica está construída para operar palavras de 64 bits",
      "A maior representação possível de um valor inteiro tem 64 bits",
      "Permite endereços de memória com largura de 64 bits"
    ],
    correct: 2,
    explanation:
      "A afirmação é falsa porque o facto de a arquitetura ser 64-bit não impede representar inteiros maiores via software (ex.: múltiplas palavras).",
    theoryPoints: {
      title: "Arquitetura 64-bit",
      content:
        "Em arquitetura 64-bit: registos gerais e operações nativas são de 64 bits, e o modelo de endereçamento usa (conceitualmente) endereços de 64 bits.",
      keyPoints: [
        "Registos de 64 bits",
        "UAL com operações nativas de 64 bits",
        "Endereçamento com 64 bits (conceitualmente)",
        "Inteiros maiores que 64 bits podem ser feitos por software"
      ],
      examples: "Big integers em bibliotecas usam múltiplas palavras (ex.: 2×64 bits para 128 bits)."
    },
    hints: ["64 bits limita o tamanho do registo, não necessariamente o tamanho do inteiro em software.", "Pense em bibliotecas de big integers."]
  },

  {
    id: 10,
    question: "Uma CPU com tecnologia (optimização) superescalar permite executar...",
    code: "",
    options: [
      "instruções de programas distintos, em paralelo, em unidades de execução distintas",
      "múltiplas instruções do mesmo programa, em paralelo, em unidades de execução distintas",
      "as três fases do ciclo fetch-decode-execute em paralelo, para uma única instrução",
      "múltiplas instruções do mesmo programa, em paralelo, na mesma unidade de execução"
    ],
    correct: 1,
    explanation:
      "Superscalar executa múltiplas instruções do mesmo programa em paralelo, usando múltiplas unidades de execução dentro do mesmo core.",
    theoryPoints: {
      title: "ILP (Instruction-Level Parallelism)",
      content:
        "Superscalar explora paralelismo a nível de instruções (ILP), emitindo várias instruções por ciclo para unidades funcionais diferentes (ALU, FPU, load/store).",
      keyPoints: [
        "Múltiplas instruções por ciclo",
        "Unidades funcionais paralelas",
        "Limitado por dependências de dados e controlo",
        "Pode usar execução fora-de-ordem"
      ],
      examples: "Emitir 1 load + 1 add no mesmo ciclo, se forem independentes."
    },
    hints: ["É dentro do mesmo core.", "A ideia é ter várias unidades funcionais."]
  },

  {
    id: 11,
    question: "A memória principal de um computador permite dois tipos de operações: leitura e escrita. Qual afirmação é verdadeira?",
    code: "",
    options: [
      "A memória ROM não permite operações de escrita",
      "Uma operação de escrita na RAM conserva o conteúdo nos endereços acedidos",
      "Uma operação de leitura na RAM destrói o conteúdo nos endereços acedidos",
      "Uma operação de acesso à memória, quer seja de leitura ou de escrita, destrói o conteúdo nos endereços acedidos"
    ],
    correct: 0,
    explanation:
      "ROM (Read-Only Memory) é, em condições normais, apenas de leitura; RAM permite escrita, mas escrever substitui o conteúdo anterior.",
    theoryPoints: {
      title: "RAM vs ROM",
      content:
        "RAM é volátil e leitura/escrita; ROM é não volátil e usada para firmware/arranque (normalmente não escrita durante operação normal).",
      keyPoints: [
        "RAM: leitura/escrita, volátil",
        "ROM: firmware/boot, não volátil",
        "Escrita substitui conteúdo anterior",
        "Leitura normalmente não destrutiva"
      ],
      examples: "BIOS/UEFI em ROM; sistema operativo e programas em RAM."
    },
    hints: ["ROM = Read-Only (na operação normal).", "RAM é usada para dados e código em execução."]
  },

  {
    id: 12,
    question: "Suponha dois processadores de fabricantes diferentes. Qual afirmação é verdadeira?",
    code: "",
    options: [
      "Os dois processadores só podem suportar a mesma arquitectura do conjunto de instruções (ISA) se forem exactamente iguais",
      "Os dois processadores podem suportar a mesma arquitectura do conjunto de instruções (ISA) mesmo tendo microarquitecturas diferentes",
      "Para suportarem a mesma arquitectura do conjunto de instruções (ISA), é necessário que ambos os processadores apresentem a mesma configuração de caches",
      "Os dois processadores podem implementar a mesma arquitectura do conjunto de instruções (ISA), e apresentar conjuntos de registos diferentes"
    ],
    correct: 1,
    explanation:
      "ISA é uma especificação (interface). Diferentes fabricantes podem implementar a mesma ISA com microarquiteturas diferentes (ex.: Intel vs AMD em x86).",
    theoryPoints: {
      title: "Compatibilidade por ISA",
      content:
        "A compatibilidade binária depende da ISA; a microarquitetura (pipeline, caches, unidades funcionais) pode variar e afeta desempenho/consumo/custo.",
      keyPoints: [
        "ISA define o que a CPU faz (visível ao software)",
        "Microarquitetura define como faz (implementação)",
        "Mesma ISA → executa o mesmo código-máquina",
        "Caches/pipeline podem diferir"
      ],
      examples: "x86: Intel Core vs AMD Ryzen."
    },
    hints: ["ISA ≠ microarquitetura.", "Compatibilidade vem da ISA."]
  },

  {
    id: 13,
    question: "Qual a função principal da memória primária num computador?",
    code: "",
    options: [
      "Armazenar dados e instruções para a execução imediata de programas",
      "Permitir a comunicação de eventos assíncronos para o processador",
      "Fornecer armazenamento de longo prazo para dados e programas, mesmo quando o computador está desligado",
      "Armazenar temporariamente na CPU os dados usados durante a execução de uma instrução"
    ],
    correct: 0,
    explanation:
      "Memória primária (RAM) armazena código e dados em execução para acesso rápido pela CPU.",
    theoryPoints: {
      title: "Hierarquia de Memória",
      content:
        "A memória organiza-se numa hierarquia (registos, caches, RAM, disco). RAM é o nível principal para execução imediata de programas.",
      keyPoints: [
        "RAM: acesso rápido comparado com disco",
        "Volátil",
        "Guarda programa e dados em execução",
        "Cache acelera acessos frequentes"
      ],
      examples: "Programa é carregado do SSD para RAM antes de executar."
    },
    hints: ["Pense no que é necessário para executar já.", "Disco é longo prazo; RAM é execução."]
  },

  {
    id: 14,
    question: "Instruction pipelining é uma técnica de optimização do desempenho de uma CPU em que se...",
    code: "// Pipeline de 5 estágios:\n// IF: Instruction Fetch\n// ID: Instruction Decode\n// EX: Execute\n// MEM: Memory Access\n// WB: Write Back",
    options: [
      "executam as três fases do ciclo fetch-decode-execute em paralelo, para uma única instrução",
      "executam duas ou mais instruções em paralelo, em unidades de execução distintas",
      "executam duas ou mais instruções em paralelo, em núcleos de processamento (cores) distintos",
      "executam as três fases do ciclo fetch-decode-execute em paralelo, para três instruções consecutivas"
    ],
    correct: 3,
    explanation:
      "Pipeline permite sobrepor as fases do ciclo de instrução em instruções diferentes (linha de montagem).",
    theoryPoints: {
      title: "Pipeline de Instruções",
      content:
        "Divide a execução em estágios e permite que várias instruções estejam em estágios diferentes simultaneamente, aumentando throughput.",
      keyPoints: [
        "Aumenta throughput (não necessariamente latência)",
        "Stalls por hazards",
        "Forwarding reduz hazards de dados",
        "Branch mispredict afeta hazards de controlo"
      ],
      examples: "Com pipeline cheio, idealmente sai 1 instrução por ciclo."
    },
    hints: ["Uma instrução está em fetch enquanto outra está em execute.", "Linha de montagem."]
  },

  {
    id: 15,
    question:
      "Os constituintes básicos de um processador são a Unidade de Controlo, a Unidade Aritmética e Lógica, e os registos. Qual afirmação é verdadeira?",
    code: "",
    options: [
      "A Unidade Aritmética e Lógica é responsável pelas operações de acesso à memória",
      "Os registos são de uso exclusivo da Unidade de Controlo",
      "Os registos são de uso exclusivo da Unidade Aritmética e Lógica",
      "A Unidade de Controlo é responsável pela descodificação do código da instrução (opcode) a executar de seguida"
    ],
    correct: 3,
    explanation:
      "A Unidade de Controlo decodifica instruções e coordena o fluxo de dados/sinais na CPU.",
    theoryPoints: {
      title: "Componentes da CPU",
      content:
        "UC coordena e decodifica; UAL executa operações aritméticas/lógicas; registos guardam operandos/resultados temporários.",
      keyPoints: [
        "UC: decodifica opcode e gera sinais de controlo",
        "UAL: operações aritméticas e lógicas",
        "Registos: armazenamento interno rápido",
        "Barramentos internos ligam componentes"
      ],
      examples: "ADD: UC decodifica e manda UAL somar, resultado vai para um registo."
    },
    hints: ["Quem decodifica o opcode?", "UAL não decodifica; ela executa."]
  },

  // ====== A partir daqui (16–24) foram substituídas por questões reais de exames ======

  {
    id: 16,
    question: "O assembler é uma ferramenta que...",
    code: "",
    options: [
      "traduz um programa numa linguagem de alto-nível para linguagem-máquina",
      "traduz um programa numa linguagem de alto-nível para assembly",
      "traduz um programa em assembly para linguagem-máquina",
      "interpreta e executa linha-a-linha um programa numa linguagem de alto-nível"
    ],
    correct: 2,
    explanation:
      "Um assembler traduz código em assembly para código-máquina (linguagem-máquina).",
    theoryPoints: {
      title: "Assembler",
      content:
        "Assembler é um tradutor que converte instruções simbólicas (assembly) em opcodes (código-máquina) para uma ISA específica.",
      keyPoints: [
        "Entrada: assembly",
        "Saída: código-máquina / objeto",
        "Depende da ISA",
        "Diferente de compilador (alto nível) e interpretador"
      ],
      examples: "Assembly x86 → opcodes x86; Assembly ARM → opcodes ARM."
    },
    hints: ["Assembly não é alto nível.", "Assembler produz código-máquina."]
  },

  {
    id: 17,
    question: "Na arquitectura de Von Neumann...",
    code: "",
    options: [
      "os discos fazem parte do subsistema de memória",
      "o processador pode comunicar com todos os outros subsistemas através de um barramento",
      "não existe ligação directa entre o subsistema de I/O e o subsistema de memória",
      "o programa é implementado através de ligações eléctricas, estabelecendo a sequência de circuitos aritméticos pretendida"
    ],
    correct: 1,
    explanation:
      "Na arquitetura de Von Neumann, a CPU comunica com os restantes subsistemas (memória e I/O) através de barramentos.",
    theoryPoints: {
      title: "Barramentos no sistema",
      content:
        "O barramento (dados/endereço/controlo) permite a comunicação entre CPU, memória e I/O.",
      keyPoints: [
        "CPU ↔ Memória via barramento",
        "CPU ↔ I/O via barramento",
        "Conceito central em arquiteturas clássicas",
        "Base para o ciclo fetch-decode-execute"
      ],
      examples: "CPU faz fetch de instruções na memória usando endereço+dados no barramento."
    },
    hints: ["A CPU não fala 'direto' com tudo sem interligação.", "Pense em bus."]
  },

  {
    id: 18,
    question: "Uma interface de linha de comando é uma aplicação...",
    code: "",
    options: [
      "que corre no espaço do kernel, executando comandos ordenados pelo utilizador",
      "que não faz parte do kernel do SO, mas que expõe os serviços do SO ao utilizador",
      "tornada obsoleta pelas interfaces gráficas do utilizador, nos SO contemporâneos",
      "que não permite a interacção do computador com o utilizador"
    ],
    correct: 1,
    explanation:
      "A shell/CLI é uma aplicação em espaço de utilizador que permite invocar serviços do sistema operativo (não é o kernel).",
    theoryPoints: {
      title: "Shell / CLI",
      content:
        "A shell interpreta comandos e inicia programas, usando chamadas ao sistema (system calls) para pedir serviços ao kernel.",
      keyPoints: [
        "Shell é user-space",
        "Kernel fornece system calls",
        "CLI continua útil (administração/automação)",
        "Scripts automatizam tarefas"
      ],
      examples: "bash, zsh, fish (Unix)."
    },
    hints: ["Kernel ≠ shell.", "A shell usa system calls."]
  },

  {
    id: 19,
    question: "A memória ROM nas suas várias tecnologias...",
    code: "",
    options: [
      "é utilizada pelo SO para carregar o código e os dados dos programas solicitados pelos utilizadores",
      "existe exclusivamente em sistemas dedicados que executam sempre a mesma função",
      "deixou de ser utilizada por apresentar tempos de acesso maiores do que a memória RAM",
      "tem habitualmente o código que arranca o sistema"
    ],
    correct: 3,
    explanation:
      "ROM contém habitualmente firmware/código de arranque (ex.: BIOS/UEFI), usado para iniciar o sistema.",
    theoryPoints: {
      title: "ROM e arranque",
      content:
        "ROM é não volátil e guarda firmware necessário para inicialização e bootstrap do sistema.",
      keyPoints: [
        "Não volátil",
        "Firmware de arranque",
        "BIOS/UEFI",
        "Início antes do SO"
      ],
      examples: "Reset → firmware (ROM) → bootloader → SO."
    },
    hints: ["ROM guarda o quê quando o sistema ainda não carregou o SO?", "Pense em BIOS/UEFI."]
  },

  {
    id: 20,
    question: "Um sistema distribuído é composto...",
    code: "",
    options: [
      "por vários processadores que partilham recursos através de um barramento comum",
      "por vários computadores geridos de uma forma centralizada, que executam cada um parte de uma aplicação e comunicam através de uma rede de comunicações",
      "por um computador que se conecta aos seus periféricos através de uma rede sem-fios",
      "por vários computadores que cooperam entre si, executando cada um parte de uma aplicação e comunicando através de uma rede de comunicações"
    ],
    correct: 3,
    explanation:
      "Um sistema distribuído envolve vários computadores que cooperam e comunicam pela rede para realizar uma aplicação/tarefa.",
    theoryPoints: {
      title: "Sistemas distribuídos",
      content:
        "Vários nós (computadores) comunicam por rede e cooperam para atingir um objetivo comum (distribuição de processamento/dados).",
      keyPoints: [
        "Vários computadores (nós)",
        "Comunicação por rede",
        "Cooperação para a aplicação",
        "Falhas parciais e latência de rede são desafios típicos"
      ],
      examples: "Serviços distribuídos (microservices), clusters, sistemas de ficheiros distribuídos."
    },
    hints: ["Não é só vários CPUs num mesmo barramento.", "Rede + cooperação."]
  },

  {
    id: 21,
    question: "Os dispositivos de entrada e saída (I/O devices)...",
    code: "",
    options: [
      "nunca podem comunicar directamente com a memória",
      "são habitualmente tão rápidos quanto os processadores",
      "têm um controlador incorporado que opera o dispositivo autonomamente do processador",
      "são controlados directamente pelo processador durante toda a sua operação"
    ],
    correct: 2,
    explanation:
      "Dispositivos de I/O tipicamente têm um controlador que gere o dispositivo, reduzindo a necessidade de controlo contínuo pela CPU.",
    theoryPoints: {
      title: "Controladores de I/O",
      content:
        "O controlador (hardware) gere detalhes do dispositivo; a CPU inicia operações e recebe interrupções quando termina (consoante o modelo).",
      keyPoints: [
        "Controlador de dispositivo",
        "CPU não controla cada micro-operação",
        "Interrupções/DMA podem ser usados",
        "I/O costuma ser mais lento que CPU"
      ],
      examples: "Controlador de disco/SSD, controlador USB."
    },
    hints: ["CPU não fica 'a segurar na mão' do dispositivo.", "Existe controlador."]
  },

  {
    id: 22,
    question: "Qual dos seguintes aspectos não é geralmente especificado pela arquitectura do conjunto de instruções (ISA)?",
    code: "",
    options: [
      "O conjunto de instruções suportado pela CPU",
      "O tamanho e a organização dos registos",
      "O formato dos códigos de operações (opcodes)",
      "O número de núcleos presentes no processador"
    ],
    correct: 3,
    explanation:
      "A ISA especifica instruções/registos/opcodes visíveis ao software, mas não especifica o número de núcleos (isso é decisão de implementação/microarquitetura).",
    theoryPoints: {
      title: "O que a ISA especifica",
      content:
        "A ISA define a interface entre software e hardware (instruções, registos, formatos), não as escolhas de paralelismo físico como número de cores.",
      keyPoints: [
        "ISA: interface software-hardware",
        "Registos e instruções fazem parte da ISA",
        "Formato de opcodes faz parte da ISA",
        "Número de cores é da implementação (microarquitetura/produto)"
      ],
      examples: "ARMv8 pode existir em chips com 2, 4, 8+ cores."
    },
    hints: ["ISA é o que o programador/compilador vê.", "Nº de cores é decisão de hardware."]
  },

  {
    id: 23,
    question: "Qual a função principal da memória secundária num computador?",
    code: "",
    options: [
      "Armazenar dados (e.g. variáveis) para a execução imediata de programas",
      "Permitir a comunicação entre diferentes CPU no mesmo computador",
      "Fornecer armazenamento de longo prazo para dados e programas, mesmo quando o computador está desligado",
      "Armazenar temporariamente na CPU os dados usados durante a execução de uma instrução"
    ],
    correct: 2,
    explanation:
      "Memória secundária (SSD/HDD) serve para armazenamento persistente de longo prazo, mesmo sem energia.",
    theoryPoints: {
      title: "Memória secundária",
      content:
        "Armazenamento não volátil para dados e programas, com maior capacidade e menor custo por byte do que RAM, mas mais lento.",
      keyPoints: [
        "Não volátil",
        "Grande capacidade",
        "Mais lenta que RAM",
        "Persistência de dados"
      ],
      examples: "SSD, HDD, armazenamento flash."
    },
    hints: ["Pense no que guarda dados quando o PC desliga.", "RAM perde; disco não."]
  },

  {
    id: 24,
    question: "É necessário colocar a zero os 16 bits mais significativos de uma palavra de 32 bits. Uma solução é aplicar à palavra...",
    code: "// Exemplo: palavra = 0xABCD1234\n// Queremos: 0x00001234\n// AND com 0x0000FFFF",
    options: [
      "16 deslocamentos lógicos para a direita seguidos de 16 deslocamentos lógicos para a esquerda",
      "a operação AND com a máscara 0x0000FFFF",
      "a operação OR com a máscara 0x0000FFFF",
      "a operação XOR com a máscara 0x0000FFFF"
    ],
    correct: 1,
    explanation:
      "AND com 0x0000FFFF zera os 16 bits mais significativos e preserva os 16 bits menos significativos.",
    theoryPoints: {
      title: "Zerar bits altos com AND",
      content:
        "Para limpar bits, usa-se AND com máscara que tenha 0 nos bits a limpar e 1 nos bits a preservar.",
      keyPoints: [
        "AND com 0 → força 0",
        "AND com 1 → preserva",
        "0x0000FFFF preserva os 16 bits baixos",
        "Útil para isolar partes de uma palavra"
      ],
      examples: "valor & 0x0000FFFF mantém apenas a metade baixa (lower 16 bits)."
    },
    hints: ["Máscara tem 0s onde quer limpar.", "0xFFFF são 16 bits a 1 (parte baixa)."]
  }
];

export default ex2;
