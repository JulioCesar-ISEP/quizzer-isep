const ex1 = [
  {
    id: 1,
    question: "O que caracteriza um sistema operativo multiprogramado?",
    code: "",
    options: [
      "Um programa tem acesso exclusivo ininterrupto à CPU",
      "Apenas um programa é carregado na memória de cada vez",
      "Vários programas podem residir na memória ao mesmo tempo e serem executados concorrentemente",
      "A execução de múltiplos programas só é possível em sistemas com múltiplos processadores"
    ],
    correct: 2,
    explanation: "Sistemas multiprogramados permitem que múltiplos programas residam na memória simultaneamente, com a CPU alternando entre eles para melhor utilização dos recursos.",
    theoryPoints: {
      title: "Multiprogramação",
      content: "Multiprogramação aumenta a utilização da CPU mantendo múltiplos programas na memória. Quando um programa espera por I/O, outro pode usar a CPU.",
      keyPoints: [
        "Múltiplos programas na memória simultaneamente",
        "CPU alterna entre programas quando há espera por I/O",
        "Aumenta throughput do sistema",
        "Diferente de multiprocessamento (múltiplas CPUs)"
      ],
      examples: "Sistema com 4 programas na memória: editor de texto, compilador, navegador, cliente de email"
    },
    hints: ["Pense em como maximizar o uso da CPU", "O que acontece quando um programa aguarda entrada do usuário?"]
  },
  {
    id: 2,
    question: "Numa mudança de contexto (context switch)...",
    code: "",
    options: [
      "o processador pára de executar as instruções de um processo para passar a executar as de outro processo",
      "um novo processo é criado quando o programa é carregado de um ficheiro para a memória",
      "o processo em execução é parado temporariamente para que o SO possa tratar uma interrupção de hardware",
      "um processo é transferido da memória para o disco"
    ],
    correct: 0,
    explanation: "Context switch é quando o SO para de executar um processo e começa a executar outro, salvando e restaurando o estado dos processos.",
    theoryPoints: {
      title: "Context Switch",
      content: "Durante um context switch, o SO salva o estado do processo atual (registros, PC, etc.) no PCB e carrega o estado do próximo processo.",
      keyPoints: [
        "Salva estado do processo atual no PCB",
        "Carrega estado do próximo processo do PCB",
        "Overhead de tempo (tempo perdido na troca)",
        "Ocorre devido a interrupção, I/O, preempção"
      ],
      examples: "Processo A → Interrupção → Salva estado A → Carrega estado B → Processo B"
    },
    hints: ["O que precisa ser salvo para retomar um processo depois?", "Como o SO alterna entre processos?"]
  },
  {
    id: 3,
    question: "Num sistema operativo, o termo preempção refere-se a:",
    code: "",
    options: [
      "A capacidade de um processo ser voluntariamente suspenso",
      "A execução simultânea de múltiplos processos",
      "A capacidade de um processo ser retirado da CPU involuntariamente pelo sistema operativo",
      "O escalonamento de processos em fila"
    ],
    correct: 2,
    explanation: "Preempção é quando o SO interrompe um processo em execução (involuntariamente) para dar a CPU a outro processo, geralmente de maior prioridade.",
    theoryPoints: {
      title: "Escalonamento Preemptivo",
      content: "Em escalonamento preemptivo, o SO pode interromper um processo em execução. Em não-preemptivo, o processo mantém a CPU até terminar ou ceder voluntariamente.",
      keyPoints: [
        "Preemptivo: SO pode interromper processo",
        "Não-preemptivo: processo mantém CPU até terminar",
        "Preempção permite maior responsividade",
        "Usado em sistemas time-sharing"
      ],
      examples: "Sistema interativo (preemptivo) vs. sistemas batch (não-preemptivo)"
    },
    hints: ["O que permite que um sistema responda rapidamente a eventos?", "Como tratar processos de alta prioridade?"]
  },
  {
    id: 4,
    question: "Os sistemas operativos mantêm um conjunto de registos, designados por Process Control Block (PCB). Qual afirmação é verdadeira?",
    code: "",
    options: [
      "O PCB de um dado processo permite obter informação de outros processos concorrentes",
      "O PCB de um processo não inclui a lista de ficheiros abertos",
      "O PCB mantém o registo atualizado dos blocos de memória que o processo ocupa",
      "Um PCB permite determinar o tempo de execução restante para a conclusão do processo"
    ],
    correct: 2,
    explanation: "O PCB contém informações sobre alocação de memória do processo, entre outros dados como estado, registros, prioridade, recursos alocados.",
    theoryPoints: {
      title: "Process Control Block (PCB)",
      content: "O PCB é uma estrutura de dados que armazena todas as informações necessárias para gerenciar um processo: estado, contador de programa, registros, informações de memória, etc.",
      keyPoints: [
        "Identificador do processo (PID)",
        "Estado do processo (Ready, Running, Waiting)",
        "Registros da CPU (quando processo não está em execução)",
        "Informações de memória (ponteiros, tabelas de página)",
        "Recursos alocados (arquivos abertos, dispositivos I/O)"
      ],
      examples: "Quando ocorre context switch, o SO salva registros no PCB do processo saindo e carrega do PCB do processo entrando."
    },
    hints: ["Que informações o SO precisa para retomar um processo?", "O que é salvo durante um context switch?"]
  },
  {
    id: 5,
    question: "Qual a característica associada ao processamento por lotes (batch processing)?",
    code: "",
    options: [
      "A execução de tarefas de forma interativa em tempo real",
      "A necessidade de uma resposta imediata do utilizador para cada tarefa",
      "O processamento de uma sequência de tarefas sem intervenção direta do utilizador",
      "Diversos programas intercalam a sua execução no processador ao longo do tempo"
    ],
    correct: 2,
    explanation: "Processamento por lotes envolve executar uma sequência de trabalhos (jobs) automaticamente, sem intervenção do operador entre cada trabalho.",
    theoryPoints: {
      title: "Processamento Batch",
      content: "Sistemas batch eram comuns nos primeiros computadores. Trabalhos eram submetidos em cartões perfurados e processados sequencialmente sem interação.",
      keyPoints: [
        "Execução sequencial de trabalhos",
        "Sem intervenção humana durante processamento",
        "Bom para trabalhos não-interativos e longos",
        "Baixa utilização de CPU (muita espera por I/O)"
      ],
      examples: "Processamento de folhas de pagamento, compilação de programas, processamento científico"
    },
    hints: ["Como os primeiros computadores processavam muitos trabalhos?", "O que acontece entre a submissão e o resultado?"]
  },
  {
    id: 6,
    question: "Um sistema operativo atual...",
    code: "",
    options: [
      "deve permitir o acesso directo ao hardware às aplicações do sistema",
      "oculta os pormenores do hardware através de um conjunto de serviços que podem ser requisitados pelas aplicações",
      "estabelece uma interface para as aplicações, que é específica à arquitetura do sistema",
      "requer que as aplicações coordenem entre si a utilização dos recursos da máquina"
    ],
    correct: 1,
    explanation: "Um dos principais objetivos do SO é abstrair o hardware, fornecendo uma interface uniforme e serviços que simplificam o desenvolvimento de aplicações.",
    theoryPoints: {
      title: "Abstração de Hardware",
      content: "O SO esconde a complexidade do hardware através de chamadas de sistema (system calls) e APIs. Aplicações não precisam saber detalhes de dispositivos específicos.",
      keyPoints: [
        "Fornece interface uniforme independente de hardware",
        "Gerencia acesso concorrente aos recursos",
        "Oferece serviços como sistemas de arquivos, rede, interface gráfica",
        "Protege o sistema de aplicações mal comportadas"
      ],
      examples: "Aplicação usa fopen() em C sem saber se disco é SSD ou HDD, ou qual sistema de arquivos"
    },
    hints: ["Por que programas não precisam saber detalhes do hardware?", "Como o SO facilita a portabilidade?"]
  },
  {
    id: 7,
    question: "Num sistema com escalonamento sem preempção, quando um processo termina a sua execução:",
    code: "",
    options: [
      "O processo passa do estado Running para o estado Waiting",
      "O escalonador selecciona um processo no estado Waiting para executar a seguir",
      "O escalonador selecciona um processo no estado Running para executar a seguir",
      "O processo encontrava-se no estado Running antes de terminar"
    ],
    correct: 3,
    explanation: "Em sistemas não-preemptivos, um processo executa até terminar ou ceder voluntariamente a CPU. Se terminou, estava no estado Running.",
    theoryPoints: {
      title: "Escalonamento Não-Preemptivo",
      content: "Também chamado de 'cooperativo'. O processo mantém a CPU até: terminar, fazer uma chamada de sistema (e.g., I/O), ou ceder explicitamente a CPU.",
      keyPoints: [
        "Processo executa até bloquear ou terminar",
        "Simples de implementar",
        "Pode causar starvation de processos de baixa prioridade",
        "Baixa responsividade para sistemas interativos"
      ],
      examples: "Sistemas batch antigos, alguns sistemas embarcados"
    },
    hints: ["O que acontece se um processo nunca faz I/O?", "Como processos de baixa prioridade são tratados?"]
  },
  {
    id: 8,
    question: "Num sistema com escalonamento preemptivo, um processo no estado New pode passar ao estado:",
    code: "",
    options: [
      "Ready",
      "Running", 
      "Waiting",
      "Terminated"
    ],
    correct: 0,
    explanation: "Um processo recém-criado (New) é admitido no sistema e passa para Ready, aguardando para ser escalonado para a CPU.",
    theoryPoints: {
      title: "Estados de Processo",
      content: "Processos passam por diferentes estados: New → Ready → Running → Waiting → Ready → Terminated. Transições são controladas pelo SO.",
      keyPoints: [
        "New: processo sendo criado",
        "Ready: pronto para executar, aguardando CPU",
        "Running: executando na CPU",
        "Waiting: aguardando evento (I/O, sinal, etc.)",
        "Terminated: terminou execução"
      ],
      examples: "Diagrama de transição de estados: Running → Waiting (faz I/O), Waiting → Ready (I/O completo), Ready → Running (escalonado)"
    },
    hints: ["Qual o primeiro estado após a criação?", "Quando um processo está pronto mas não executando?"]
  },
  {
    id: 9,
    question: "Quando abordamos os termos arquitectura do conjunto de instruções (ISA) e microarquitectura:",
    code: "",
    options: [
      "ambos os termos referem-se ao mesmo conceito",
      "a microarquitectura é a especificação que determina o conjunto de instruções suportado por uma família de processadores",
      "a ISA estabelece a organização física (electrónica) do processador",
      "a microarquitectura consiste numa implementação física que atende aos requisitos especificados pela ISA"
    ],
    correct: 3,
    explanation: "ISA é a interface (conjunto de instruções, registros, etc.) que o software vê. Microarquitetura é como isso é implementado fisicamente.",
    theoryPoints: {
      title: "ISA vs Microarquitetura",
      content: "ISA define o que o processador faz (interface software-hardware). Microarquitetura define como é feito (implementação interna).",
      keyPoints: [
        "ISA: conjunto de instruções, modos de endereçamento, registros visíveis",
        "Microarquitetura: pipeline, cache, unidades de execução paralela",
        "Várias microarquiteturas podem implementar mesma ISA",
        "Ex: Intel e AMD têm microarquiteturas diferentes para x86 ISA"
      ],
      examples: "ARM ISA implementada por diferentes microarquiteturas da Apple, Qualcomm, Samsung"
    },
    hints: ["Pense em interface vs implementação", "Por que diferentes CPUs podem executar os mesmos programas?"]
  },
  {
    id: 10,
    question: "A técnica de swapping permite:",
    code: "",
    options: [
      "libertar memória às custas de um processo que é enviado parcial ou totalmente da RAM principal para a memória secundária",
      "libertar memória enviando parcial ou totalmente da RAM para a memória secundária, o processo que está a ser executado pela CPU",
      "parar a execução de um processo, cedendo a CPU a um outro processo Ready com maior prioridade",
      "parar a execução de um processo que pediu uma operação de I/O, cedendo a CPU a um outro processo Ready"
    ],
    correct: 0,
    explanation: "Swapping move processos (ou partes) entre RAM e disco para liberar memória para outros processos. Normalmente processos em Waiting são candidatos.",
    theoryPoints: {
      title: "Swapping",
      content: "Técnica de gestão de memória onde processos são movidos temporariamente para disco (swap space) para liberar RAM. Útil quando há mais processos que memória física.",
      keyPoints: [
        "Processo inteiro movido para disco/swap",
        "Swap out: memória → disco",
        "Swap in: disco → memória",
        "Overhead de tempo (acesso a disco é lento)",
        "Pode causar thrashing se excessivo"
      ],
      examples: "Linux usa partição ou arquivo de swap. Windows usa arquivo pagefile.sys"
    },
    hints: ["O que fazer quando a RAM está cheia?", "Que processos são bons candidatos para swap?"]
  },
  {
    id: 11,
    question: "Qual é a operação que NÃO é necessariamente realizada durante uma mudança de contexto?",
    code: "",
    options: [
      "Copiar os valores dos registos do processador para o PCB do processo que estava a ser executado",
      "Admitir um processo novo (New) para o conjunto de processos prontos (Ready)",
      "Seleccionar o próximo processo a executar, do conjunto de processos prontos (Ready)",
      "Restaurar os valores nos registos do processador a partir do PCB do processo que foi escalonado para execução"
    ],
    correct: 1,
    explanation: "Admitir um novo processo (New → Ready) é função do escalonador de longo prazo, não ocorre necessariamente em cada context switch.",
    theoryPoints: {
      title: "Operações do Context Switch",
      content: "Context switch envolve: 1) salvar estado do processo atual, 2) selecionar próximo processo (escalonador de curto prazo), 3) restaurar estado do próximo processo.",
      keyPoints: [
        "Salvar registros do processo atual no PCB",
        "Atualizar estruturas do SO (filas de processos)",
        "Restaurar registros do próximo processo do PCB",
        "Mudar espaço de memória (se necessário)",
        "Tempo de context switch é overhead puro"
      ],
      examples: "Context switch típico leva 1-100μs. Muito frequente em sistemas interativos."
    },
    hints: ["O que é específico para trocar entre processos já existentes?", "Quando novos processos são criados?"]
  },
  {
    id: 12,
    question: "A proteção de memória é muito importante em sistemas multiprogramados, porque:",
    code: "",
    options: [
      "impede que o sistema operativo remova um processo da RAM para o disco",
      "evita que os processos possam partilhar bibliotecas ligadas dinamicamente",
      "previne que um processo altere as suas instruções e dados",
      "impede que um processo aceda às instruções e dados de outro processo"
    ],
    correct: 3,
    explanation: "Proteção de memória garante que um processo só acesse sua própria memória, não a de outros processos ou do SO, essencial para segurança e estabilidade.",
    theoryPoints: {
      title: "Proteção de Memória",
      content: "Implementada com hardware (registros base/limite, MMU) e software. Cada processo tem espaço de endereçamento próprio isolado.",
      keyPoints: [
        "Hardware: registros base e limite, MMU com tabelas de página",
        "Cada acesso é verificado",
        "Violação gera exceção (segmentation fault)",
        "Essencial para segurança e estabilidade"
      ],
      examples: "Processo tenta acessar endereço fora de seu espaço → segmentation fault (SIGSEGV)"
    },
    hints: ["O que acontece se um processo bugado escreve na memória de outro?", "Como o SO isola processos uns dos outros?"]
  },
  {
    id: 13,
    question: "Os sistemas de tempo-real...",
    code: "",
    options: [
      "têm de ser bastante responsivos na interação com o utilizador",
      "têm de realizar o maior número de cálculos por unidade de tempo",
      "têm de conseguir lidar com um aumento no número de tarefas sem comprometer o desempenho geral",
      "têm de determinar resultados correctos dentro de prazos temporais estritos"
    ],
    correct: 3,
    explanation: "Sistemas de tempo real são caracterizados por deadlines rígidos. Corretude inclui não apenas resultado funcional, mas também temporal.",
    theoryPoints: {
      title: "Sistemas de Tempo Real",
      content: "Classificados em hard real-time (deadlines absolutamente críticos) e soft real-time (deadlines importantes mas não catastróficos se perdidos).",
      keyPoints: [
        "Hard real-time: falha catastrófica se deadline perdido",
        "Soft real-time: degradação de serviço se deadline perdido",
        "Escalonamento específico (RM, EDF)",
        "Previsibilidade mais importante que throughput"
      ],
      examples: "Hard: controle de freios de carro, marcapasso. Soft: streaming de vídeo, sistemas multimídia"
    },
    hints: ["O que diferencia tempo real de 'rápido'?", "O que acontece se a resposta chegar tarde?"]
  },
  {
    id: 14,
    question: "Quando uma operação de I/O lançada por um processo é concluída:",
    code: "",
    options: [
      "o sistema operativo recebe uma interrupção, modificando o estado do processo de Waiting para Ready",
      "é enviada uma interrupção ao sistema operativo, que actualiza o estado do processo de Ready para Running",
      "é enviada uma interrupção ao processo que modifica o seu estado de Waiting para Ready",
      "o processo recebe uma interrupção e actualiza o seu estado de Ready para Running"
    ],
    correct: 0,
    explanation: "O dispositivo de I/O gera uma interrupção quando completa a operação. O SO trata a interrupção e muda o processo de Waiting para Ready.",
    theoryPoints: {
      title: "I/O e Interrupções",
      content: "Processos bloqueiam em I/O (Waiting). Quando I/O completa, dispositivo gera interrupção, SO trata e coloca processo em Ready.",
      keyPoints: [
        "Processo em Waiting aguarda I/O",
        "Dispositivo gera interrupção ao terminar",
        "SO trata interrupção (driver)",
        "SO move processo para fila Ready",
        "Processo será escalonado quando chegar sua vez"
      ],
      examples: "Processo lê arquivo → bloqueia → disco completa leitura → interrupção → SO acorda processo"
    },
    hints: ["Quem notifica o SO que I/O terminou?", "Para onde vai um processo que estava esperando I/O?"]
  },
  {
    id: 15,
    question: "Sobre os termos 'multiprogramação' e 'paralelismo':",
    code: "",
    options: [
      "é possível ter multiprogramação num computador com uma única CPU",
      "têm o mesmo significado",
      "é possível ter paralelismo num computador com uma única CPU", 
      "é possível ter multiprogramação e paralelismo num computador com uma única CPU"
    ],
    correct: 0,
    explanation: "Multiprogramação (múltiplos programas na memória, CPU alterna entre eles) é possível com uma CPU. Paralelismo (execução simultânea) requer múltiplas CPUs/cores.",
    theoryPoints: {
      title: "Multiprogramação vs Paralelismo",
      content: "Multiprogramação é concorrência (aparente simultaneidade em CPU única). Paralelismo é execução verdadeiramente simultânea em múltiplas CPUs.",
      keyPoints: [
        "Multiprogramação: CPU única, alternância rápida",
        "Paralelismo: múltiplas CPUs executando simultaneamente",
        "Concorrência: múltiplas tarefas em progresso",
        "Simultaneidade: múltiplas tarefas ao mesmo tempo"
      ],
      examples: "CPU única: multiprogramação (concorrência). CPU multi-core: paralelismo verdadeiro."
    },
    hints: ["Quantas CPUs são necessárias para execução simultânea?", "Como dar a ilusão de múltiplos programas rodando juntos?"]
  }
];

export default ex1;