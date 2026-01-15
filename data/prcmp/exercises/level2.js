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
    explanation: "Na arquitetura von Neumann, dados e instruções são armazenados na mesma memória física, diferenciados apenas pela forma como são interpretados pelo processador.",
    theoryPoints: {
      title: "Arquitetura de von Neumann",
      content: "Modelo proposto por John von Neumann em 1945, caracterizado por: 1) Memória única para dados e instruções, 2) Unidade de controle que busca instruções da memória, 3) Execução sequencial de instruções, 4) Computador com programa armazenado.",
      keyPoints: [
        "Memória unificada para dados e instruções",
        "CPU com UC (busca/decodifica) e UAL (executa)",
        "Execução sequencial (uma instrução de cada vez)",
        "Programa armazenado na memória (não hardwired)"
      ],
      examples: "Quase todos os computadores modernos seguem este modelo. Harvard architecture (usada em alguns microcontroladores) tem memórias separadas."
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
    explanation: "Arquitetura superscalar permite executar múltiplas instruções do mesmo programa em paralelo, usando múltiplas unidades de execução dentro de uma única CPU.",
    theoryPoints: {
      title: "Arquitetura Superscalar",
      content: "CPU superscalar pode executar mais de uma instrução por ciclo de clock, explorando paralelismo a nível de instrução (ILP). Requer múltiplas unidades funcionais e lógica de despacho complexa.",
      keyPoints: [
        "Múltiplas instruções por ciclo de clock",
        "Paralelismo a nível de instrução (ILP)",
        "Múltiplas unidades de execução (ALU, FPU, load/store)",
        "Despacho dinâmico de instruções"
      ],
      examples: "Processadores Intel Pentium (a partir do P5) e AMD usam superscalar. Pode executar, por exemplo, uma operação inteira e um acesso à memória simultaneamente."
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
    explanation: "Registros são pequenas memórias de alta velocidade dentro da CPU usadas para armazenar dados temporários, endereços e resultados intermediários durante a execução.",
    theoryPoints: {
      title: "Registros da CPU",
      content: "Registros são o nível mais rápido da hierarquia de memória. Tipos incluem: 1) Registros de propósito geral (dados), 2) Registros de endereço (ponteiros), 3) Registros de controle (flags, PC), 4) Registros de segmento.",
      keyPoints: [
        "Memória mais rápida (acesso em 1 ciclo de clock)",
        "Tamanho limitado (32, 64 bits típicos)",
        "Visíveis ao programador em assembly",
        "PC (Program Counter): endereço da próxima instrução"
      ],
      examples: "Em x86: EAX/RAX (acumulador), EBX/RBX (base), ECX/RCX (contador), EDX/RDX (dados), ESP/RSP (stack pointer), EBP/RBP (base pointer)"
    },
    hints: ["Por que a CPU precisa de armazenamento ultrarrápido?", "O que acontece se todos os dados tiverem que vir da RAM?"]
  },
  {
    id: 4,
    question: "É necessário colocar a zero os 16 bits menos significativos de uma palavra de 32 bits, deixando os restantes 16 mais significativos inalterados. Uma solução é aplicar à palavra...",
    code: "// Palavra original: 0xABCD1234\n// Resultado desejado: 0xABCD0000",
    options: [
      "16 deslocamentos lógicos para a direita seguidos de 16 deslocamentos lógicos para a esquerda",
      "a operação lógica AND com a máscara de bits 0xFFFF0000",
      "a operação lógica OR com a máscara de bits 0xFFFF0000",
      "a operação lógica AND com a máscara de bits 0x0000FFFF"
    ],
    correct: 1,
    explanation: "AND com 0xFFFF0000 mantém os 16 bits superiores (todos 1s nessa parte) e zera os 16 bits inferiores (todos 0s nessa parte).",
    theoryPoints: {
      title: "Operações Bitwise (AND, OR, XOR, NOT)",
      content: "Operações lógicas bit-a-bit são fundamentais para manipulação de bits. AND é usado para limpar bits (com máscara de 0s), OR para setar bits (com máscara de 1s), XOR para alternar bits.",
      keyPoints: [
        "AND: bit resultante = 1 se ambos bits de entrada = 1",
        "OR: bit resultante = 1 se pelo menos um bit de entrada = 1",
        "XOR: bit resultante = 1 se bits de entrada diferentes",
        "NOT: inverte cada bit"
      ],
      examples: "Limpar bits baixos: valor & 0xFFFFFF00\nSetar bits altos: valor | 0xFF000000\nAlternar bits: valor ^ 0x0000FFFF\nMáscara: padrão de bits usado para selecionar bits específicos"
    },
    hints: ["Qual operação 'preserva' bits quando tem 1 e 'limpa' quando tem 0?", "Que máscara mantém os primeiros 16 bits e limpa os últimos 16?"]
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
    explanation: "ISA é a interface (o que o processador faz), microarquitetura é a implementação (como é feito fisicamente). Várias microarquiteturas podem implementar a mesma ISA.",
    theoryPoints: {
      title: "ISA vs Microarquitetura",
      content: "ISA (Instruction Set Architecture) define: 1) Conjunto de instruções, 2) Modos de endereçamento, 3) Registros visíveis ao programador, 4) Modelo de memória. Microarquitetura define: 1) Pipeline, 2) Cache, 3) Unidades funcionais, 4) Previsão de saltos.",
      keyPoints: [
        "ISA: interface software/hardware (ABI)",
        "Microarquitetura: implementação interna",
        "Mesma ISA pode ter múltiplas microarquiteturas",
        "Ex: x86 ISA implementada por Intel e AMD com microarquiteturas diferentes"
      ],
      examples: "ARM ISA: implementada por Cortex-A, Cortex-M (diferentes microarquiteturas). x86: implementada por Intel (Core, Atom) e AMD (Ryzen, EPYC)."
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
    explanation: "Na arquitetura von Neumann, o programa é armazenado na memória como números binários (opcodes), que a CPU busca, decodifica e executa sequencialmente.",
    theoryPoints: {
      title: "Programa Armazenado",
      content: "Conceito fundamental: o programa é armazenado na memória como dados, permitindo: 1) Programas auto-modificáveis, 2) Carregamento dinâmico de programas, 3) Compiladores e sistemas operacionais.",
      keyPoints: [
        "Programa = sequência de instruções na memória",
        "CPU busca instrução do endereço apontado por PC",
        "PC é incrementado após cada fetch",
        "Instruções e dados indistinguíveis na memória"
      ],
      examples: "Computadores anteriores (como ENIAC) eram 'programados' por recabulação física. Von Neumann permitiu programas armazenados."
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
    explanation: "Na fase decode, a CPU interpreta o opcode (código de operação) para determinar que operação executar e quais operandos são necessários.",
    theoryPoints: {
      title: "Ciclo Fetch-Decode-Execute",
      content: "Ciclo básico de execução de instruções: 1) FETCH: buscar instrução do endereço em PC para IR (Instruction Register), 2) DECODE: decodificar opcode e operandos, 3) EXECUTE: executar operação (UAL, acesso memória, etc.), 4) (opcional) WRITE-BACK: escrever resultado em registrador.",
      keyPoints: [
        "PC (Program Counter): aponta para próxima instrução",
        "IR (Instruction Register): guarda instrução atual",
        "Ciclo completo pode levar vários clocks",
        "Pipelining divide ciclo em estágios para execução simultânea de múltiplas instruções"
      ],
      examples: "Instrução simples (ADD R1, R2): fetch opcode, decode (ADD), execute (soma R1+R2), write-back (resultado em R1)"
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
    explanation: "Multi-core refere-se a múltiplos núcleos de processamento (cores) independentes num único chip, permitindo execução paralela de múltiplos programas ou threads.",
    theoryPoints: {
      title: "Processadores Multi-core",
      content: "Cada core é uma CPU independente, com seus próprios registros, UAL e cache L1, mas compartilhando cache L2/L3 e barramento. Permite paralelismo a nível de thread (TLP).",
      keyPoints: [
        "Múltiplos cores físicos no mesmo die",
        "Cada core executa threads independentes",
        "Compartilham memória e periféricos",
        "Escalonamento de threads pelo SO"
      ],
      examples: "Intel Core i7 (4-8 cores), AMD Ryzen (até 16 cores), servidores com 64+ cores. Diferente de hyper-threading (cores lógicos)."
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
    explanation: "Sistemas 64-bit podem representar inteiros maiores que 64 bits usando múltiplos registradores (ex: 128-bit com dois registradores). A limitação não é de bits, mas de largura dos registradores.",
    theoryPoints: {
      title: "Arquitetura 64-bit",
      content: "Em arquitetura 64-bit: 1) Registros gerais têm 64 bits, 2) Endereços de memória são 64-bit (teoricamente 16 exabytes), 3) UAL opera em 64 bits por padrão, 4) Pode operar em modos de 32 e 16 bits para compatibilidade.",
      keyPoints: [
        "Registros de 64 bits (RAX, RBX, etc.)",
        "Espaço de endereçamento de 2⁶⁴ bytes",
        "Operações aritméticas nativas de 64 bits",
        "Suporte a inteiros de 128+ bits via software"
      ],
      examples: "x86-64 (AMD64/Intel 64): extensão 64-bit do x86. Diferenças de x86: mais registradores, endereçamento maior, convenções de chamada diferentes."
    },
    hints: ["64 bits é o tamanho nativo, mas pode representar números maiores?", "Como processadores 8-bit faziam matemática de 16 bits?"]
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
    explanation: "Superscalar executa múltiplas instruções do mesmo programa em paralelo, usando múltiplas unidades de execução (ALU, FPU, etc.) dentro do mesmo core.",
    theoryPoints: {
      title: "Paralelismo a Nível de Instrução (ILP)",
      content: "Superscalar explora ILP detectando instruções independentes que podem ser executadas simultaneamente. Requer: 1) Múltiplas unidades funcionais, 2) Despacho fora-de-ordem, 3) Previsão de saltos.",
      keyPoints: [
        "Window de instruções: buffer de instruções prontas",
        "Scoreboarding: controle de dependências",
        "Tomasulo algorithm: renomeação de registradores",
        "Commit em ordem para manter semântica sequencial"
      ],
      examples: "CPU pode executar: 1 instrução inteira + 1 FP + 1 load/store simultaneamente. Limitado por dependências de dados e controle."
    },
    hints: ["Como uma CPU sabe que instruções não dependem umas das outras?", "Por que não podemos executar todas as instruções em paralelo?"]
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
    explanation: "ROM (Read-Only Memory) é não-volátil e não permite escrita em condições normais. RAM permite leitura e escrita, mas escrita substitui o conteúdo anterior.",
    theoryPoints: {
      title: "Memória: RAM vs ROM",
      content: "RAM (Random Access Memory): volátil, leitura/escrita rápida, para dados e programas em execução. ROM (Read-Only Memory): não-volátil, apenas leitura (normalmente), para firmware/bootstrap.",
      keyPoints: [
        "RAM: DRAM (mais lenta, mais densa) e SRAM (mais rápida, cache)",
        "ROM: PROM, EPROM, EEPROM, Flash (permite escrita especial)",
        "Leitura não destrutiva (exceto DRAM que precisa refresh)",
        "Escrita destrutiva (sobrescreve conteúdo anterior)"
      ],
      examples: "BIOS/UEFI em ROM, sistema operacional carregado em RAM. Cache L1/L2 em SRAM, memória principal em DRAM."
    },
    hints: ["O que 'Random Access' significa realmente?", "Por que a RAM perde dados sem energia?"]
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
    explanation: "ISA é uma especificação. Diferentes fabricantes podem implementar a mesma ISA com microarquiteturas diferentes (ex: Intel e AMD com x86).",
    theoryPoints: {
      title: "Compatibilidade de ISA",
      content: "ISA define interface binária (ABI). Microarquiteturas diferentes podem: 1) Ter diferentes números de estágios de pipeline, 2) Tamanhos de cache diferentes, 3) Número de unidades funcionais diferentes, 4) Tecnologias de fabrico diferentes.",
      keyPoints: [
        "ISA garante compatibilidade binária",
        "Microarquitetura afeta desempenho, consumo, custo",
        "Registros visíveis devem ser os mesmos (ou superconjunto)",
        "Extensões de ISA (MMX, SSE, AVX) podem ser opcionais"
      ],
      examples: "x86: Intel Core vs AMD Ryzen. ARM: Apple M1 vs Qualcomm Snapdragon vs Samsung Exynos (todos ARMv8)."
    },
    hints: ["Por que programas compilados para x86 rodam em Intel e AMD?", "O que é mais importante para compatibilidade: ISA ou microarquitetura?"]
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
    explanation: "Memória primária (RAM) armazena código e dados em execução para acesso rápido pela CPU. É volátil e muito mais rápida que armazenamento secundário.",
    theoryPoints: {
      title: "Hierarquia de Memória",
      content: "Memória organizada em hierarquia: 1) Registros (CPU), 2) Cache L1/L2/L3, 3) RAM (primária), 4) Armazenamento secundário (SSD/HDD), 5) Armazenamento terciário (fita, cloud). Cada nível é maior, mais lento e mais barato.",
      keyPoints: [
        "Princípio da localidade: temporal e espacial",
        "Cache: reduz latência média de acesso à memória",
        "RAM: volátil, acesso aleatório, ~100ns de latência",
        "SSD/HDD: não-volátil, acesso em blocos, ~ms de latência"
      ],
      examples: "Programa carregado do SSD para RAM, instruções/dados usados frequentemente em cache, valores atuais em registradores."
    },
    hints: ["O que acontece quando abrimos um programa?", "Por que não rodamos programas diretamente do disco?"]
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
    explanation: "Pipeline divide o ciclo de instrução em estágios, permitindo que múltiplas instruções estejam em diferentes estágios ao mesmo tempo (como uma linha de montagem).",
    theoryPoints: {
      title: "Pipeline de Instruções",
      content: "Divide execução de instrução em estágios sequenciais. Cada estágio processa parte de uma instrução diferente a cada ciclo. Aumenta throughput, mas não reduz latência individual.",
      keyPoints: [
        "Estágios: Fetch, Decode, Execute, Memory, Write-back",
        "Throughput ideal: 1 instrução/clock (com pipeline cheio)",
        "Hazards: estrutural, de dados, de controle (causam stalls)",
        "Forwarding/By-passing: reduz hazards de dados"
      ],
      examples: "Pipeline clássico de 5 estágios (MIPS). Processadores modernos têm 10-20+ estágios (deep pipeline)."
    },
    hints: ["Como uma fábrica monta vários carros ao mesmo tempo?", "Qual a diferença entre latência e throughput?"]
  },
  {
    id: 15,
    question: "Os constituintes básicos de um processador são a Unidade de Controlo, a Unidade Aritmética e Lógica, e os registos. Qual afirmação é verdadeira?",
    code: "",
    options: [
      "A Unidade Aritmética e Lógica é responsável pelas operações de acesso à memória",
      "Os registos são de uso exclusivo da Unidade de Controlo",
      "Os registos são de uso exclusivo da Unidade Aritmética e Lógica",
      "A Unidade de Controlo é responsável pela descodificação do código da instrução (opcode) a executar de seguida"
    ],
    correct: 3,
    explanation: "A Unidade de Controle (UC) decodifica as instruções, gera sinais de controle para outros componentes e coordena o fluxo de dados através da CPU.",
    theoryPoints: {
      title: "Componentes da CPU",
      content: "1) UC (Unidade de Controle): decodifica instruções, gera sinais de controle, controla fluxo de execução. 2) UAL (Unidade Aritmética e Lógica): executa operações aritméticas (+, -, ×, ÷) e lógicas (AND, OR, NOT). 3) Registros: armazenamento temporário rápido.",
      keyPoints: [
        "UC: sequenciador, decodificador, controlador",
        "UAL: operações matemáticas e lógicas",
        "Registros: dados, endereços, status",
        "Barramento interno: conecta componentes"
      ],
      examples: "Instrução ADD: UC decodifica, sinaliza UAL para somar, UAL opera, resultado vai para registro. Instrução LOAD: UC sinaliza memória, dado vem para registro."
    },
    hints: ["Quem 'manda' na CPU?", "O que acontece quando a CPU encontra uma instrução desconhecida?"]
  }
];

export default ex2;