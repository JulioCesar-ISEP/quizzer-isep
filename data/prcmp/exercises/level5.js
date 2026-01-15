const ex5 = [
  {
    id: 1,
    question: "O processamento por lotes (batch processing) é caracterizado por:",
    code: "",
    options: [
      "ser ideal para trabalhos interactivos",
      "ser utilizado em supercomputadores para correr longos trabalhos não-interactivos",
      "já ter caído em desuso, não sendo actualmente utilizado",
      "ser o modelo utilizado nos sistemas computacionais que controlam automaticamente outros sistemas físicos"
    ],
    correct: 1,
    explanation: "O processamento por lotes é apropriado para trabalhos não-interativos de longa duração, como em supercomputadores para cálculos científicos. Continua sendo usado hoje.",
    theoryPoints: {
      title: "Processamento por Lotes (Batch)",
      content: "Processamento por lotes executa sequências de trabalhos (jobs) automaticamente, sem intervenção do operador. Ideal para trabalhos pesados em CPU, não-interativos. Surgiu para melhorar utilização do processador quando os programas eram executados manualmente um de cada vez.",
      keyPoints: [
        "Não-interativo: entrada e saída são ficheiros",
        "Sequencial: trabalhos executados em fila",
        "Boa utilização de CPU: minimiza tempo ocioso",
        "Ainda usado: renderização, simulações, processamento de dados"
      ],
      examples: "Supercomputadores: simulações climáticas, pesquisa farmacêutica\nServidores: processamento de imagens, conversão de vídeo\nFinanceiro: processamento de transações noturno"
    },
    hints: ["O que significa 'não-interativo'?", "Quando surgiu o processamento por lotes e por quê?"]
  },
  {
    id: 2,
    question: "Quando termina uma operação de I/O lançada por um processo:",
    code: "",
    options: [
      "é enviada uma interrupção ao processo P1 que actualiza o seu estado para Ready",
      "é enviada uma interrupção ao sistema operativo, que actualiza o estado do processo P1 para Ready",
      "é enviada uma interrupção ao processo P1 que actualiza o seu estado para Running",
      "é enviada uma interrupção ao sistema operativo, que actualiza o estado do processo P1 para Terminated"
    ],
    correct: 1,
    explanation: "O dispositivo de I/O gera uma interrupção de hardware que é tratada pelo SO. O SO então atualiza o estado do processo de Waiting para Ready, tornando-o elegível para execução.",
    theoryPoints: {
      title: "Interrupções de I/O",
      content: "Quando um dispositivo de I/O completa uma operação, gera uma interrupção de hardware. A CPU para o que está fazendo e executa uma rotina de tratamento de interrupção no kernel. O kernel atualiza o estado do processo e pode escaloná-lo para execução.",
      keyPoints: [
        "Interrupção: sinal assíncrono do hardware à CPU",
        "Rotina de tratamento: código no kernel que responde à interrupção",
        "Mudança de estado: Waiting → Ready",
        "Não é o processo que trata a interrupção (está suspenso)"
      ],
      examples: "Disco completa leitura → interrupção\nRede recebe pacote → interrupção\nTeclado pressionado → interrupção\nTimer expira → interrupção"
    },
    hints: ["Quem trata as interrupções de hardware?", "Qual estado tem um processo que aguarda I/O?"]
  },
  {
    id: 3,
    question: "Os dispositivos de entrada e saída (I/O devices):",
    code: "",
    options: [
      "nunca podem comunicar directamente com a memória",
      "são habitualmente tão rápidos quanto os processadores",
      "têm um controlador incorporado que opera o dispositivo autonomamente do processador",
      "são controlados directamente pelo processador durante toda a sua operação"
    ],
    correct: 2,
    explanation: "Os dispositivos I/O têm controladores próprios que executam operações de baixo nível autonomamente. O processador inicia a operação e é notificado via interrupção quando termina.",
    theoryPoints: {
      title: "Controladores de Dispositivo",
      content: "Cada dispositivo tem um controlador (hardware especializado) que gerencia o dispositivo. O processador comunica com o controlador via registros de I/O ou memory-mapped I/O. O controlador executa operações complexas sem intervenção constante da CPU.",
      keyPoints: [
        "Controlador: circuito especializado para dispositivo específico",
        "Registros de controlo/status: CPU escreve comandos, lê status",
        "Buffer: memória temporária no controlador",
        "Autonomia: controlador executa operações (ex: ler setor do disco)"
      ],
      examples: "Controlador de disco: converte setores lógicos em posições físicas\nControlador de rede: monta/desmonta pacotes\nControlador gráfico: renderização 3D acelerada"
    },
    hints: ["O que é um controlador de dispositivo?", "Como a CPU interage com um disco rígido?"]
  },
  {
    id: 4,
    question: "A técnica de swapping permite:",
    code: "",
    options: [
      "parar a execução de um processo, cedendo a CPU a um outro processo Ready com maior prioridade",
      "parar a execução de um processo que pediu uma operação de I/O, cedendo a CPU a um outro processo Ready",
      "libertar memória RAM transferindo (parcial ou totalmente) um processo da RAM principal para a memória secundária",
      "libertar memória RAM transferindo (parcial ou totalmente) da RAM para a memória secundária, o processo que está a ser executado pela CPU"
    ],
    correct: 2,
    explanation: "Swapping move processos inativos (geralmente em estado Waiting) da memória principal para o disco, libertando RAM para outros processos. Não afeta diretamente a CPU, apenas a gestão de memória.",
    theoryPoints: {
      title: "Swapping",
      content: "Técnica de gestão de memória que move processos entre RAM e disco. Usada quando há mais processos do que memória física disponível. Swap out: RAM → disco. Swap in: disco → RAM. Processos em Waiting são bons candidatos.",
      keyPoints: [
        "Swap out: processo da RAM para área de swap no disco",
        "Swap in: processo do disco para RAM quando precisa executar",
        "Overhead: tempo de transferência disco/RAM é alto",
        "Thrashing: quando sistema passa mais tempo em swapping que em executar"
      ],
      examples: "Linux: partição swap ou ficheiro swap\nWindows: ficheiro pagefile.sys\nProcesso inativo há muito tempo é movido para swap\nQuando precisa executar, trazido de volta (swap in)"
    },
    hints: ["Qual a diferença entre swapping e paginação?", "Por que mover processos para disco?"]
  },
  {
    id: 5,
    question: "Num computador, dois processos concorrem para operar o mesmo dispositivo (ex: um disco) praticamente ao mesmo tempo:",
    code: "",
    options: [
      "O sistema operativo disponibiliza a configuração do dispositivo, e os processos coordenam entre si as operações do dispositivo",
      "Todos os pedidos de operação são aceites pelo sistema operativo, que os organiza e executa (em nome dos processos) de acordo pela ordem que definir",
      "Os processos acedem directamente ao dispositivo. O dispositivo organiza autonomamente as operações concorrentes solicitadas pelos processos",
      "Todos os pedidos de operação são aceites pelo sistema operativo, que os organiza. Após estabelecida uma ordem, cada processo opera directamente o dispositivo"
    ],
    correct: 1,
    explanation: "O SO gerencia o acesso concorrente a dispositivos através de filas de pedidos e scheduling de I/O. Processos fazem chamadas ao sistema, e o kernel executa as operações em seu nome, garantindo acesso seguro e ordenado.",
    theoryPoints: {
      title: "Gestão Concorrente de Dispositivos",
      content: "O kernel do SO atua como intermediário entre processos e dispositivos. Mantém filas de pedidos de I/O e implementa políticas de scheduling (FCFS, SSTF, etc.) para otimizar o acesso. Processos não acessam dispositivos diretamente por questões de segurança e consistência.",
      keyPoints: [
        "Abstração: dispositivos aparecem como ficheiros ou recursos gerenciados",
        "Sincronização: kernel evita condições de corrida",
        "Scheduling de I/O: otimiza ordem de acesso (ex: elevação do disco)",
        "Segurança: previne acesso não autorizado"
      ],
      examples: "Dois processos querem escrever no mesmo ficheiro → kernel serializa\nMúltiplos pedidos de leitura de disco → kernel ordena por setor\nSpooling de impressão: múltiplos processos podem 'imprimir' simultaneamente"
    },
    hints: ["Por que processos não podem acessar dispositivos diretamente?", "Como o SO evita que dois processos corrompam um dispositivo?"]
  },
  {
    id: 6,
    question: "Os sistemas de tempo-real:",
    code: "",
    options: [
      "requerem que os resultados calculados sejam funcionalmente correctos e disponibilizados dentro de prazos definidos",
      "caracterizam-se pela elevada interatividade com o utilizador",
      "implementam-se sobretudo em computadores de alto-desempenho",
      "são utilizados predominantemente em simulações (meteorologia, farmacêutica, etc.)"
    ],
    correct: 0,
    explanation: "Sistemas de tempo-real têm requisitos temporais rigorosos. A corretude inclui não só o resultado mas também o tempo de resposta. Perder um deadline pode ser catastrófico (hard real-time) ou degradar qualidade (soft real-time).",
    theoryPoints: {
      title: "Sistemas de Tempo-Real",
      content: "Sistemas onde a corretude depende não apenas do resultado lógico mas também do tempo de entrega. Hard real-time: perder deadline é falha total. Soft real-time: degradação aceitável. Usados em controle de processos, robótica, multimédia.",
      keyPoints: [
        "Deadlines: prazos rígidos ou flexíveis",
        "Previsibilidade: comportamento temporal previsível",
        "Escalonamento: algoritmos específicos (Rate-monotonic, EDF)",
        "Latência: tempo de resposta limitado"
      ],
      examples: "Hard: controle de frenagem ABS, aviónica, marcapasso\nSoft: streaming de vídeo, jogos, VoIP\nEmbedded: maioria dos microprocessadores no mundo são em sistemas embarcados de tempo-real"
    },
    hints: ["Qual a diferença entre tempo-real e tempo rápido?", "O que acontece se um sistema de tempo-real perder um deadline?"]
  },
  {
    id: 7,
    question: "Os dispositivos de entrada e saída podem comunicar directamente com a memória se o sistema dispor da técnica de:",
    code: "",
    options: [
      "Interrupções programadas",
      "Polling",
      "Acesso directo à memória (DMA)",
      "Memory-mapped I/O"
    ],
    correct: 2,
    explanation: "DMA (Direct Memory Access) permite que dispositivos transfiram dados diretamente para/da memória sem envolvimento da CPU para cada byte. A CPU programa o controlador DMA com endereços e tamanho, e o DMA executa a transferência.",
    theoryPoints: {
      title: "DMA - Acesso Direto à Memória",
      content: "Técnica que permite a dispositivos de I/O acessar memória principal diretamente, sem intervenção da CPU para cada palavra transferida. A CPU inicializa a transferência (endereço inicial, tamanho, direção) e é notificada por interrupção quando termina.",
      keyPoints: [
        "Vantagem: liberta CPU durante transferências grandes",
        "Controlador DMA: hardware especializado que gerencia transferências",
        "Ciclo stealing: DMA 'rouba' ciclos de memória da CPU",
        "Buffer: dados transferidos diretamente para área de memória pré-definida"
      ],
      examples: "Leitura de disco: DMA transfere setor do disco para buffer na RAM\nCarta de rede: DMA transfere pacotes da interface para memória\nSom: DMA transfere samples de áudio para placa de som"
    },
    hints: ["Qual a vantagem principal do DMA?", "Quem controla a transferência DMA?"]
  },
  {
    id: 8,
    question: "Num sistema de processamento por lotes, consegue-se uma boa utilização da capacidade de processamento com processos que:",
    code: "",
    options: [
      "realizam várias operações de I/O",
      "são puramente computacionais (CPU-bound)",
      "são interactivos com o utilizador",
      "têm tempos de execução muito curtos"
    ],
    correct: 1,
    explanation: "Em sistemas batch, processos CPU-bound (intensivos em computação) maximizam a utilização do processador porque minimizam tempos de espera por I/O. Processos I/O-bound deixam a CPU ociosa enquanto aguardam dispositivos lentos.",
    theoryPoints: {
      title: "CPU-bound vs I/O-bound",
      content: "CPU-bound: gastam maior parte do tempo em computação (ex: cálculos científicos). I/O-bound: gastam maior parte do tempo à espera de I/O (ex: editores de texto, servidores web). Sistemas batch favorecem CPU-bound para maximizar utilização.",
      keyPoints: [
        "CPU-bound: alto uso de CPU, pouco I/O",
        "I/O-bound: muito tempo em estado Waiting",
        "Throughput: número de trabalhos completados por unidade de tempo",
        "Utilização CPU: percentagem de tempo que CPU está ocupada"
      ],
      examples: "CPU-bound: renderização 3D, simulações, mineração de criptomoedas\nI/O-bound: compilação (lê/escreve muitos ficheiros), backup, transferência de dados"
    },
    hints: ["O que acontece à CPU quando um processo espera por I/O?", "Por que sistemas batch históricos tinham trabalhos longos?"]
  },
  {
    id: 9,
    question: "Quando um processo solicita uma operação de I/O, o seu estado passa para:",
    code: "",
    options: [
      "Running",
      "Ready", 
      "Waiting",
      "Terminated"
    ],
    correct: 2,
    explanation: "Quando um processo solicita I/O (ex: ler de disco), não pode continuar executando até que a operação complete. O SO coloca-o em estado Waiting (blocked) e escalona outro processo.",
    theoryPoints: {
      title: "Estados do Processo",
      content: "Processos podem estar em: New (criado), Ready (pronto para executar), Running (em execução na CPU), Waiting (bloqueado à espera de evento, como I/O), Terminated (finalizado). Transições são controladas pelo SO.",
      keyPoints: [
        "Running → Waiting: quando pede I/O ou espera por evento",
        "Waiting → Ready: quando I/O completa ou evento ocorre",
        "Running → Ready: preempção (time-slice expira ou processo de maior prioridade)",
        "Ready → Running: escalonador atribui CPU"
      ],
      examples: "Ler teclado: Running → Waiting\nDisco completa leitura: Waiting → Ready\nTime-slice expira: Running → Ready\nEscalonador escolhe processo: Ready → Running"
    },
    hints: ["Qual estado indica que processo está bloqueado?", "Quando um processo volta a ficar Ready?"]
  },
  {
    id: 10,
    question: "Os dispositivos de I/O informam o processador de que terminaram uma operação através de:",
    code: "",
    options: [
      "Polling",
      "Uma interrupção",
      "Memory-mapped I/O",
      "Acesso direto à memória"
    ],
    correct: 1,
    explanation: "Dispositivos usam interrupções para sinalizar conclusão de operações. A alternativa seria polling (CPU verifica periodicamente status), que desperdiça ciclos de CPU.",
    theoryPoints: {
      title: "Interrupções vs Polling",
      content: "Interrupção: dispositivo notifica CPU quando evento ocorre. Polling: CPU verifica periodicamente status do dispositivo. Interrupções são mais eficientes para eventos infrequentes, polling pode ser melhor para dispositivos muito rápidos ou quando latência precisa ser mínima.",
      keyPoints: [
        "Interrupção: assíncrona, CPU interrompida quando evento ocorre",
        "Polling: CPU verifica em intervalos regulares",
        "Overhead: interrupções têm overhead de mudança de contexto",
        "Latência: polling pode ter menor latência se frequência alta"
      ],
      examples: "Interrupção: disco, rede, teclado\nPolling: gráficos de alta performance (GPU), controlo de motores\nHíbrido: NAPI em redes - interrupção inicial, depois polling"
    },
    hints: ["Qual método desperdiça menos ciclos de CPU?", "Como a CPU sabe que um botão foi pressionado?"]
  },
  {
    id: 11,
    question: "O processamento por lotes permite que:",
    code: "",
    options: [
      "múltiplos programas intercalem a sua execução no processador",
      "o programador supervise a execução do programa e corrija erros imediatamente",
      "programas interactivos solicitem dados ao utilizador",
      "processos sejam executados em tempo-real"
    ],
    correct: 0,
    explanation: "Sistemas batch modernos (com multiprogramação) permitem que múltiplos jobs compartilhem a CPU, alternando entre eles. Isso difere dos sistemas batch primitivos que executavam um job de cada vez.",
    theoryPoints: {
      title: "Multiprogramação em Sistemas Batch",
      content: "Sistemas batch evoluíram para suportar multiprogramação: múltiplos jobs na memória simultaneamente, compartilhando CPU. Quando um job fica à espera de I/O, outro pode usar a CPU. Aumenta drasticamente a utilização do sistema.",
      keyPoints: [
        "Job pool: conjunto de jobs prontos para executar",
        "Escalonador de longo prazo (job scheduler): escolhe jobs para carregar em memória",
        "CPU utilizada enquanto jobs esperam I/O",
        "Throughput aumenta"
      ],
      examples: "Mainframes IBM: JCL (Job Control Language)\nServidores batch modernos: Hadoop MapReduce, render farms\nSistemas académicos: submissão de jobs a clusters"
    },
    hints: ["Qual a diferença entre batch simples e batch com multiprogramação?", "Por que multiprogramação aumenta utilização?"]
  },
  {
    id: 12,
    question: "A técnica de swapping era essencial nos sistemas de processamento por lotes porque:",
    code: "",
    options: [
      "permitia executar jobs maiores que a memória física",
      "permitia alternar rapidamente entre jobs interactivos",
      "era necessária para suportar multiprogramação",
      "melhorava o tempo de resposta de jobs interactivos"
    ],
    correct: 2,
    explanation: "Swapping permitia manter múltiplos jobs em memória simultaneamente (multiprogramação), movendo jobs inativos para disco quando necessário. Isso era crucial para manter a CPU ocupada enquanto jobs aguardavam I/O.",
    theoryPoints: {
      title: "Swapping e Multiprogramação",
      content: "Com swapping, o SO pode manter um pool de jobs prontos na memória. Quando um job bloqueia para I/O, pode ser swapped out para dar lugar a outro job. Isso mantém a CPU ocupada e aumenta o throughput.",
      keyPoints: [
        "Grau de multiprogramação: número de processos em memória",
        "Swapping aumenta grau de multiprogramação artificialmente",
        "Trade-off: tempo de swap vs tempo de CPU ganho",
        "Memória virtual moderna usa paginação, não swapping completo"
      ],
      examples: "Sistemas batch antigos: jobs swapped entre memória e fita\nCTSS (Compatible Time-Sharing System): primeiro sistema com swapping\nUnix早期版本: swapping para multiprogramação"
    },
    hints: ["Como manter a CPU ocupada se só há um job em memória e ele espera I/O?", "Qual a relação entre swapping e número de jobs executando concorrentemente?"]
  },
  {
    id: 13,
    question: "Num sistema com escalonamento sem preempção, quando um processo pede uma operação de I/O:",
    code: "",
    options: [
      "o seu estado passa para Terminated",
      "o seu estado continua em Running, ficando o processador parado durante todo o tempo da operação de I/O",
      "o seu estado passa para Ready e o processador fica parado se não houver outros processos prontos",
      "o seu estado passa para Waiting e o processador é cedido a outro processo pronto"
    ],
    correct: 3,
    explanation: "Em sistemas sem preempção, um processo só deixa a CPU voluntariamente (pedindo I/O ou terminando). Quando pede I/O, passa para Waiting e a CPU é dada a outro processo Ready, se houver.",
    theoryPoints: {
      title: "Escalonamento Sem Preempção",
      content: "Também chamado cooperativo. Processo mantém CPU até bloquear (I/O) ou terminar. Vantagem: baixo overhead de mudança de contexto. Desvantagem: processo mal-comportado pode monopolizar CPU. Usado em alguns sistemas embarcados e versões antigas do Windows/Mac.",
      keyPoints: [
        "Cooperative: processos 'cooperam' cedendo CPU",
        "Bloqueio: única forma de perder CPU voluntariamente",
        "Responsividade: baixa se processo faz computação longa",
        "Simplicidade: fácil de implementar"
      ],
      examples: "Windows 3.x: cooperative multitasking\nMac OS até versão 9\nSistemas embarcados simples\nAlguns RTOS (Real-Time Operating Systems)"
    },
    hints: ["Como um processo perde a CPU em sistema não-preemptivo?", "Qual problema surge com processos CPU-bound?"]
  },
  {
    id: 14,
    question: "Os sistemas interativos multi-utilizador com partilha de tempo apresentam a vantagem de:",
    code: "",
    options: [
      "permitir que o programador supervisione a execução do programa e corrija erros imediatamente",
      "não necessitarem de protecção de memória",
      "explorarem o facto de sessões interactivas utilizarem pouco processador enquanto aguardam acções do utilizador",
      "executarem programas mais rapidamente que sistemas batch"
    ],
    correct: 2,
    explanation: "Time-sharing explora o fato de que usuários interativos passam muito tempo pensando ou digitando. Enquanto um usuário está inativo, outros podem usar a CPU. Isso permite suportar muitos usuários com uma só CPU.",
    theoryPoints: {
      title: "Time-Sharing (Partilha de Tempo)",
      content: "Sistemas que compartilham CPU entre múltiplos usuários interativos, dando a cada um a ilusão de ter uma máquina dedicada. Usa preempção por timer para alternar entre processos rapidamente. Revolucionou a computação pessoal.",
      keyPoints: [
        "Quantum (time-slice): fatia de tempo que cada processo recebe",
        "Preempção por timer: processo interrompido quando quantum expira",
        "Responsividade: tempo de resposta rápido para usuários",
        "Overhead: mudanças de contexto frequentes"
      ],
      examples: "CTSS: primeiro sistema time-sharing (MIT 1961)\nMultics → Unix → Linux\nWindows NT em diante\nTodos os SOs modernos para desktop/servidores"
    },
    hints: ["Qual a diferença entre batch e time-sharing?", "Como time-sharing dá ilusão de máquina dedicada?"]
  },
  {
    id: 15,
    question: "Quando abordamos I/O programado (polling) vs I/O por interrupções:",
    code: "",
    options: [
      "polling é sempre mais eficiente que interrupções",
      "interrupções são sempre mais eficientes que polling",
      "polling é melhor para dispositivos rápidos com eventos frequentes",
      "interrupções são melhores apenas para dispositivos de rede"
    ],
    correct: 2,
    explanation: "Polling pode ser mais eficiente quando eventos são muito frequentes, pois evita overhead de interrupções (mudança de contexto). Para dispositivos lentos (teclado) ou eventos infrequentes, interrupções são melhores.",
    theoryPoints: {
      title: "Eficiência: Polling vs Interrupções",
      content: "Trade-off entre overhead de interrupção e desperdício de ciclos de CPU. Polling: verifica periodicamente; bom para alta frequência de eventos. Interrupções: notificação assíncrona; bom para baixa frequência. Sistemas modernos usam ambos conforme apropriado.",
      keyPoints: [
        "Overhead de interrupção: salvar/restaurar contexto",
        "CPU wasting: polling verifica mesmo quando não há eventos",
        "Latência: polling pode detectar evento mais rápido se frequência alta",
        "Adaptativo: alguns sistemas começam com interrupção, mudam para polling sob carga"
      ],
      examples: "Rede gigabit: NAPI (Linux) usa polling sob alta carga\nGPUs: polling para máxima performance\nTeclado: interrupções (eventos raros)\nDisco: interrupções (operações relativamente infrequentes)"
    },
    hints: ["Qual método gasta mais ciclos de CPU quando não há eventos?", "Quando o overhead de interrupção se justifica?"]
  }
];

export default ex5;