const ex6 = [
  {
    id: 1,
    question: "Um cluster é constituído por:",
    code: "",
    options: [
      "diversos computadores ligados através de uma rede local de alto débito, que realizam a computação de forma muito coesa, como se fosse um sistema multiprocessador",
      "múltiplos processadores que partilham recursos através de um barramento comum",
      "múltiplos processadores que comunicam entre si, partilham dispositivos e memória principal através de um barramento comum, mas cada processador tem a sua memória privada",
      "diversos computadores autónomos que comunicam entre si através de uma rede de comunicações, cooperando para executar um programa"
    ],
    correct: 3,
    explanation: "Um cluster consiste em computadores independentes (nodes) ligados por rede, cooperando para executar tarefas. Cada node tem seu próprio sistema operativo e recursos, mas trabalham em conjunto para um objetivo comum.",
    theoryPoints: {
      title: "Clusters de Computadores",
      content: "Cluster: conjunto de computadores (nodes) interligados por rede, vistos como um único sistema. Alta disponibilidade, balanceamento de carga, processamento paralelo. Difere de multiprocessadores pois não compartilham memória fisicamente.",
      keyPoints: [
        "Nodes independentes: cada computador é autónomo",
        "Rede de interconexão: Ethernet, InfiniBand, Myrinet",
        "Middleware: software que coordena os nodes (ex: MPI, Hadoop)",
        "Tipos: HA (alta disponibilidade), load balancing, HPC (alta performance)"
      ],
      examples: "Google: clusters de milhares de máquinas\nSupercomputadores: clusters Beowulf\nServiços web: clusters Apache/Tomcat\nBancos de dados: clusters Oracle RAC"
    },
    hints: ["Qual a diferença entre cluster e multiprocessador?", "Como os nodes de um cluster comunicam?"]
  },
  {
    id: 2,
    question: "Num sistema distribuído:",
    code: "",
    options: [
      "múltiplos processadores partilham dispositivos através de um barramento comum e comunicam entre si, mas cada processador tem a sua memória privada",
      "múltiplos processadores partilham recursos através de um barramento comum",
      "diversos computadores comunicam entre si e partilham recursos através de uma rede de comunicação, cooperando para executar um programa",
      "vários computadores são ligados entre si através de uma rede local de alto débito, sendo a computação gerida de forma centralizada"
    ],
    correct: 2,
    explanation: "Sistemas distribuídos envolvem múltiplos computadores independentes ligados por rede, cooperando para atingir um objetivo comum. Os computadores partilham recursos (processamento, armazenamento) através da rede.",
    theoryPoints: {
      title: "Sistemas Distribuídos",
      content: "Coleção de computadores autónomos ligados por rede, com software que os faz aparecer como um sistema único e coerente. Desafios: transparência, comunicação, coordenação, tolerância a falhas.",
      keyPoints: [
        "Transparência: ocultar distribuição (acesso, localização, migração, replicação, concorrência, falhas)",
        "Escalabilidade: capacidade de crescer",
        "Heterogeneidade: diferentes hardware/software",
        "Concorrência: múltiplos acessos simultâneos"
      ],
      examples: "WWW: maior sistema distribuído\nSistemas de ficheiros: NFS, CIFS, GFS\nComputação em grid: SETI@home\nComputação em nuvem: AWS, Azure"
    },
    hints: ["Qual a diferença entre sistema distribuído e centralizado?", "Que problemas surgem quando computadores estão separados?"]
  },
  {
    id: 3,
    question: "Os sistemas de tempo-real:",
    code: "",
    options: [
      "requerem que os resultados calculados sejam funcionalmente correctos e disponibilizados dentro de prazos definidos",
      "caracterizam-se pela elevada interatividade com o utilizador",
      "implementam-se sobretudo em computadores de alto-desempenho",
      "são utilizados predominantemente em simulações (meteorologia, farmacêutica, etc.)"
    ],
    correct: 0,
    explanation: "Sistemas de tempo-real têm requisitos temporais rigorosos. A corretude inclui não só o resultado lógico mas também o cumprimento de deadlines (prazos). Falhar um deadline pode causar falha do sistema.",
    theoryPoints: {
      title: "Sistemas de Tempo-Real",
      content: "Sistemas onde a corretude depende do resultado lógico e do tempo de entrega. Hard real-time: perder deadline é falha catastrófica. Soft real-time: degradação aceitável. Firm real-time: valor zero após deadline.",
      keyPoints: [
        "Deadline: prazo máximo para completar tarefa",
        "Latência: tempo entre evento e resposta",
        "Jitter: variação na latência",
        "Escalonamento: algoritmos específicos (RM, EDF)"
      ],
      examples: "Hard: controle de voo, airbags, marcapasso\nSoft: streaming vídeo, VoIP, jogos\nFirm: sistemas multimédia com buffers"
    },
    hints: ["O que distingue tempo-real de tempo rápido?", "Qual a consequência de perder um deadline em tempo-real duro?"]
  },
  {
    id: 4,
    question: "Actualmente, a maior fatia de processadores existentes no mundo está aplicada em:",
    code: "",
    options: [
      "sistemas computacionais de tempo-real",
      "computadores pessoais e servidores",
      "supercomputadores e clusters HPC",
      "dispositivos móveis e tablets"
    ],
    correct: 0,
    explanation: "A grande maioria dos processadores produzidos hoje está em sistemas embarcados de tempo-real (automóveis, eletrodomésticos, dispositivos médicos, controlo industrial), não em PCs ou servidores.",
    theoryPoints: {
      title: "Processadores em Sistemas Embarcados",
      content: "Sistemas embarcados são computadores dedicados a funções específicas dentro de dispositivos maiores. Geralmente têm requisitos de tempo-real, baixo consumo, baixo custo. Quantidade produzida é muito superior a CPUs para PCs.",
      keyPoints: [
        "Ubiquidade: em tudo (carros, telemóveis, electrodomésticos)",
        "Restrições: custo, tamanho, consumo, calor",
        "Especialização: otimizados para tarefa específica",
        "Tempo-real: maioria tem requisitos temporais"
      ],
      examples: "Automóvel: 50-100 processadores (motor, airbag, ABS, entretenimento)\nCasa inteligente: termostato, frigorífico, TV\nDispositivos médicos: monitor cardíaco, bombas de insulina"
    },
    hints: ["Onde estão os processadores além de computadores?", "Quantos processadores tem um carro moderno?"]
  },
  {
    id: 5,
    question: "Os computadores que controlam sistemas físicos (ex: automóveis, robots) têm requisitos não-funcionais específicos:",
    code: "",
    options: [
      "Têm de ser bastante responsivos na interação com o utilizador",
      "Têm de realizar o maior número de cálculos por unidade de tempo",
      "Têm de conseguir lidar com um aumento no número de tarefas sem comprometer o desempenho geral",
      "Têm de determinar resultados correctos dentro de prazos temporais estritos"
    ],
    correct: 3,
    explanation: "Sistemas de controle físico são tipicamente sistemas de tempo-real duro, onde deadlines devem ser cumpridos para segurança e funcionamento correto. Respostas atrasadas podem causar acidentes.",
    theoryPoints: {
      title: "Sistemas de Controle Físico",
      content: "Sistemas que interagem com o mundo físico através de sensores e atuadores. Requerem: resposta dentro de deadlines, tolerância a falhas, operação contínua, baixa latência, previsibilidade.",
      keyPoints: [
        "Sensores: leem ambiente (temperatura, posição, etc.)",
        "Atuadores: agem sobre ambiente (motores, válvulas)",
        "Ciclo de controle: ler sensores → calcular → agir",
        "Deadlines: determinados pela dinâmica do sistema físico"
      ],
      examples: "ABS: detecta derrapagem, modula frenagem em milissegundos\nRobô industrial: movimentos precisos e sincronizados\nUsina nuclear: monitorização e controle em tempo-real"
    },
    hints: ["Por que tempo é crítico em controle de processos?", "O que acontece se um sistema de frenagem responder tarde?"]
  },
  {
    id: 6,
    question: "Um sistema distribuído é composto por:",
    code: "",
    options: [
      "vários processadores que partilham recursos através de um barramento comum",
      "vários computadores geridos de forma centralizada, que executam cada um parte de uma aplicação e comunicam através de uma rede de comunicações",
      "um computador que se conecta aos seus periféricos através de uma rede sem-fios",
      "vários computadores que cooperam entre si, executando cada um parte de uma aplicação e comunicando através de uma rede de comunicações"
    ],
    correct: 3,
    explanation: "Sistemas distribuídos envolvem cooperação entre computadores independentes, cada um executando parte da aplicação e comunicando via rede. A gestão pode ser descentralizada.",
    theoryPoints: {
      title: "Características de Sistemas Distribuídos",
      content: "Ausência de relógio global, falhas independentes, concorrência, heterogeneidade. Vantagens: partilha de recursos, escalabilidade, tolerância a falhas. Desvantagens: complexidade, segurança, consistência.",
      keyPoints: [
        "Escalabilidade: capacidade de crescer adicionando nodes",
        "Tolerância a falhas: sistema continua funcionando com falhas parciais",
        "Transparência: ocultar distribuição do utilizador",
        "Consistência: manter dados coerentes entre nodes"
      ],
      examples: "DNS: sistema de nomes distribuído\nBitcoin: rede P2P descentralizada\nGoogle Search: milhares de servidores distribuídos\nAirbnb/Uber: plataformas distribuídas"
    },
    hints: ["Como um sistema distribuído difere de um centralizado?", "Por que é difícil manter relógios sincronizados?"]
  },
  {
    id: 7,
    question: "Num sistema distribuído, diversos computadores:",
    code: "",
    options: [
      "partilham memória principal através de um barramento comum",
      "são geridos por um sistema operativo central que controla todos os recursos",
      "comunicam entre si e partilham recursos através de uma rede, cooperando para executar um programa",
      "executam exactamente as mesmas instruções em lockstep para garantir consistência"
    ],
    correct: 2,
    explanation: "Computadores em sistema distribuído mantêm sua autonomia mas cooperam através da rede para alcançar objetivos comuns. Podem partilhar processamento, armazenamento, dados, etc.",
    theoryPoints: {
      title: "Cooperação em Sistemas Distribuídos",
      content: "Computadores colaboram através de comunicação por mensagens. Modelos: cliente-servidor, peer-to-peer, multicamadas. Middleware fornece abstração comum (ex: RPC, objetos distribuídos).",
      keyPoints: [
        "Comunicação: mensagens via rede (TCP/IP, UDP)",
        "Cooperação: divisão de tarefas, replicação",
        "Coordenação: eleição de líder, consenso, exclusão mútua distribuída",
        "Transparência de acesso: recursos remotos acessados como locais"
      ],
      examples: "Cliente-servidor: navegador e servidor web\nP2P: BitTorrent, Skype (antigo)\nArquiteturas de 3 camadas: web, aplicação, base de dados\nMicroserviços: serviços independentes colaborando"
    },
    hints: ["Como computadores em locais diferentes trabalham juntos?", "O que é middleware?"]
  },
  {
    id: 8,
    question: "Para além de terem que ser funcionalmente correctos, os sistemas de tempo-real:",
    code: "",
    options: [
      "têm que disponibilizar os resultados ou actuar dentro de janelas de tempo bem definidas",
      "têm que reagir imediatamente às interacções com o utilizador",
      "têm que apresentar os resultados o mais depressa possível",
      "têm que ser compostos de milhares de processadores"
    ],
    correct: 0,
    explanation: "Tempo-real não significa necessariamente rápido, mas sim previsível e dentro de deadlines. Janelas de tempo podem ser milissegundos ou minutos, dependendo da aplicação.",
    theoryPoints: {
      title: "Deadlines e Janelas Temporais",
      content: "Deadline: instante máximo pelo qual resposta deve ser produzida. Janela temporal: intervalo entre earliest start time e deadline. Sistemas de tempo-real são caracterizados por seus deadlines, não velocidade absoluta.",
      keyPoints: [
        "Response time: tempo entre estímulo e resposta",
        "Deadline: pode ser periódico, aperiódico ou esporádico",
        "Schedulability: capacidade de cumprir todos os deadlines",
        "Análise de pior caso (WCET): tempo máximo de execução"
      ],
      examples: "Controle de motor: deadline de 1ms periódico\nMonitor cardíaco: resposta dentro de 2 segundos\nSistema multimédia: frames a 30fps (33ms por frame)"
    },
    hints: ["Tempo-real significa sempre super rápido?", "O que é mais importante: velocidade média ou pior caso?"]
  },
  {
    id: 9,
    question: "Os sistemas de tempo-real são sistemas computacionais que:",
    code: "",
    options: [
      "precisam de interagir instantaneamente com utilizador",
      "têm que ter os resultados da computação instantaneamente",
      "são usados predominantemente em simulações científicas",
      "falham quando um resultado correcto é disponibilizado depois de um prazo especificado"
    ],
    correct: 3,
    explanation: "Em sistemas de tempo-real duro, mesmo resultados corretos são inúteis se entregues após o deadline. Em tempo-real mole, atrasos degradam qualidade mas não causam falha catastrófica.",
    theoryPoints: {
      title: "Consequências de Perder Deadlines",
      content: "Hard real-time: perder deadline = falha do sistema, possivelmente catastrófica. Soft real-time: degradação gradual de qualidade. Firm real-time: resultado tem valor zero após deadline.",
      keyPoints: [
        "Hard: segurança crítica (aviação, medicina)",
        "Soft: qualidade de serviço (multimédia)",
        "Firm: alguns sistemas industriais",
        "Penalidades diferentes para atrasos"
      ],
      examples: "Hard: airbag não disparar dentro de 10ms pode matar\nSoft: vídeo com lag é irritante mas não perigoso\nFirm: dados de radar após 2 segundos são inúteis"
    },
    hints: ["Todos os atrasos em tempo-real são igualmente graves?", "O que acontece se um vídeo bufferizar?"]
  },
  {
    id: 10,
    question: "Um cluster é composto por:",
    code: "",
    options: [
      "vários processadores que partilham recursos através de um barramento comum",
      "vários processadores num único chip",
      "vários computadores que cooperam entre si, executando cada um parte de uma aplicação e comunicando através de uma rede de comunicações",
      "vários computadores situados na mesma instalação, geridos de uma forma centralizada para executar a mesma aplicação"
    ],
    correct: 2,
    explanation: "Cluster é um tipo de sistema distribuído onde computadores (normalmente homogêneos) são ligados por rede de alta velocidade e trabalham em conjunto, muitas vezes aparecendo como um único sistema.",
    theoryPoints: {
      title: "Arquiteturas de Clusters",
      content: "Clusters podem ser: 1) Alta disponibilidade (failover), 2) Balanceamento de carga, 3) Alta performance (HPC). Normalmente usam hardware commodity e software especializado (MPI, Hadoop).",
      keyPoints: [
        "Beowulf clusters: clusters HPC com hardware commodity",
        "Single System Image (SSI): cluster aparece como uma máquina",
        "Interconexão: Gigabit Ethernet, InfiniBand, Myrinet",
        "Middleware: MPI, PVM, Hadoop MapReduce"
      ],
      examples: "Google data centers: clusters de milhares de máquinas\nRender farms: clusters para renderização 3D\nClusters científicos: para simulações (meteorologia, genética)"
    },
    hints: ["Qual a diferença entre cluster e grade computacional?", "Por que clusters são populares para HPC?"]
  },
  {
    id: 11,
    question: "Múltiplos processadores que partilham dispositivos através de um barramento comum e comunicam entre si, mas cada processador tem a sua memória privada, descreve:",
    code: "",
    options: [
      "Um sistema distribuído",
      "Um cluster",
      "Um sistema multiprocessador com memória partilhada",
      "Um sistema multiprocessador com memória distribuída"
    ],
    correct: 3,
    explanation: "Multiprocessadores com memória distribuída (também chamados multicomputadores) têm cada CPU com sua memória privada, comunicando via barramento ou rede. Difere de memória partilhada onde todos acessam mesma memória.",
    theoryPoints: {
      title: "Arquiteturas Multiprocessador",
      content: "Multiprocessadores: múltiplas CPUs num sistema. 1) Memória partilhada (UMA, NUMA): todas CPUs veem mesmo espaço de endereçamento. 2) Memória distribuída: cada CPU tem memória privada, comunicam por mensagens.",
      keyPoints: [
        "UMA (Uniform Memory Access): acesso igual a toda memória",
        "NUMA (Non-Uniform): acesso mais rápido à memória local",
        "MPP (Massively Parallel Processors): muitos nós com memória privada",
        "Comunicação: via barramento (shared) ou rede/interconexão (distributed)"
      ],
      examples: "UMA: servidores SMP com 2-8 CPUs\nNUMA: servidores com dezenas de CPUs (AMD Opteron, Intel Xeon)\nMPP: Cray T3E, IBM Blue Gene"
    },
    hints: ["Qual a diferença entre acessar memória local e remota?", "Por que NUMA tem acesso não-uniforme?"]
  },
  {
    id: 12,
    question: "Os sistemas de tempo-real são utilizados predominantemente em:",
    code: "",
    options: [
      "simulações científicas (meteorologia, farmacêutica, etc.)",
      "aplicações empresariais e de gestão",
      "sistemas embarcados e de controle",
      "computação gráfica e jogos"
    ],
    correct: 2,
    explanation: "Sistemas de tempo-real são ubíquos em sistemas embarcados (automóveis, aviônica, dispositivos médicos, automação industrial) onde o tempo de resposta é crítico para correção e segurança.",
    theoryPoints: {
      title: "Aplicações de Tempo-Real",
      content: "Praticamente todos os sistemas embarcados têm requisitos de tempo-real. Setores: automotivo, aeroespacial, industrial, médico, telecomunicações, militar, consumer electronics.",
      keyPoints: [
        "Automotivo: ABS, controle de motor, airbags",
        "Aeroespacial: controle de voo, navegação",
        "Médico: monitorização, bombas de infusão, marcapasso",
        "Industrial: robótica, controle de processos"
      ],
      examples: "Carro moderno: >50 microcontroladores com tempo-real\nAvionics: sistemas fly-by-wire\nFábrica: robôs com deadlines precisos\nTelecom: processamento de pacotes com QoS"
    },
    hints: ["Onde encontramos sistemas de tempo-real no dia a dia?", "Por que um micro-ondas precisa de tempo-real?"]
  },
  {
    id: 13,
    question: "Num sistema distribuído, a computação é:",
    code: "",
    options: [
      "gerida de forma centralizada por um nó mestre",
      "distribuída pelos vários nós que cooperam",
      "executada apenas num nó, com os outros como backup",
      "alternada entre nós conforme disponibilidade"
    ],
    correct: 1,
    explanation: "Em sistemas distribuídos, a computação é distribuída entre os nós. Pode haver coordenação centralizada (cliente-servidor) ou descentralizada (peer-to-peer), mas a carga é distribuída.",
    theoryPoints: {
      title: "Distribuição de Computação",
      content: "Tarefas são divididas entre nós: 1) Partição de dados (cada nó processa parte dos dados), 2) Pipeline (cada nó faz uma etapa), 3) Replicação (cada nó faz cálculo completo para tolerância a falhas).",
      keyPoints: [
        "Balanceamento de carga: distribuir tarefas equitativamente",
        "Comunicação vs computação: trade-off",
        "Granularidade: tamanho das tarefas distribuídas",
        "Escalabilidade: capacidade de adicionar nós"
      ],
      examples: "MapReduce: partição de dados em clusters\nCDN (Content Delivery Network): cópias distribuídas de conteúdo\nComputação voluntária: SETI@home divide análise de dados"
    },
    hints: ["Como dividir um problema grande em partes menores?", "O que é mais caro: comunicação ou computação?"]
  },
  {
    id: 14,
    question: "Um sistema com 8 CPUs exactamente iguais (simétricos) num chip (multicore):",
    code: "",
    options: [
      "é um sistema distribuído",
      "é um cluster",
      "é um sistema multiprocessador com memória partilhada",
      "é uma rede de computadores"
    ],
    correct: 2,
    explanation: "Multicore com CPUs simétricas compartilhando memória é um sistema multiprocessador com memória partilhada (SMP - Symmetric Multiprocessing). Todos os cores acessam a mesma memória física.",
    theoryPoints: {
      title: "Multicore e SMP",
      content: "Chip multicore: múltiplos núcleos de processamento num único chip. SMP: sistema onde múltiplos processadores compartilham memória e são controlados por um único SO. Cores em chip multicore normalmente são SMP.",
      keyPoints: [
        "Cache hierarquia: L1 privado, L2/L3 compartilhado",
        "Coerência de cache: protocolos (MESI, MOESI)",
        "Escalonamento: SO vê cada core como CPU separada",
        "Contenção: competição por recursos compartilhados (memória, barramento)"
      ],
      examples: "Intel Core i7: 4-8 cores, memória compartilhada\nAMD Ryzen: até 16 cores, memória compartilhada\nSmartphones: 8-core ARM big.LITTLE"
    },
    hints: ["Como os cores em um chip multicore comunicam?", "Qual a vantagem de memória compartilhada?"]
  },
  {
    id: 15,
    question: "Os sistemas de tempo-real caracterizam-se por:",
    code: "",
    options: [
      "terem que operar o mais depressa possível",
      "continuarem correctos mesmo que disponibilizem um resultado errado desde que dentro do prazo",
      "falharem quando um resultado correcto é disponibilizado depois de um prazo especificado",
      "precisarem de interagir instantaneamente com utilizador"
    ],
    correct: 2,
    explanation: "Em tempo-real duro, um resultado correto após o deadline é uma falha. Tempo-real não é sobre velocidade máxima, mas sobre cumprimento de prazos e previsibilidade.",
    theoryPoints: {
      title: "Previsibilidade em Tempo-Real",
      content: "Sistemas de tempo-real devem ser previsíveis: tempo de resposta no pior caso (WCET) deve ser conhecido e garantido. Aleatoriedade e imprevisibilidade são indesejáveis.",
      keyPoints: [
        "Análise estática: determinar WCET através de análise de código",
        "Medição empírica: testar em pior cenário",
        "Recursos reservados: garantir capacidade para pior caso",
        "Schedulability analysis: verificar se todos deadlines serão cumpridos"
      ],
      examples: "Controle de reator nuclear: WCET conhecido e garantido\nSistema de frenagem: resposta dentro de 10ms no pior caso\nAvionics: certificação requer análise de pior caso"
    },
    hints: ["O que é mais importante: tempo médio ou pior caso?", "Como garantir que um sistema sempre responda a tempo?"]
  },
  {
  id: 16,
  question: "Os sistemas multiprocessador com n processadores assimétricos:",
  code: "",
  options: [
    "partilham o barramento, relógio e memória",
    "não partilham o barramento, relógio e memória",
    "podem correr em paralelo até n processos",
    "são geridos por um único SO central"
  ],
  correct: 1,
  explanation: "Assimétricos (ASMP): um master + slaves especializados; não partilham barramento/relógio/memória uniformemente. Diferem de simétricos (SMP).",
  theoryPoints: {
    title: "Multiprocessadores Assimétricos (ASMP)",
    content: "Master-slave: um processador master controla slaves especializados. Sem partilha uniforme de recursos.",
    keyPoints: [
      "Master: coordena/schedule",
      "Slaves: tarefas específicas",
      "Não SMP: recursos não uniformes"
    ],
    examples: "Master: I/O + scheduling; Slaves: aceleração gráfica."
  },
  hints: ["Master-slave?", "Partilha uniforme?"]  
},
{
  id: 17,
  question: "Sistemas multiprocessador simétricos com n processadores podem correr em paralelo:",
  code: "",
  options: [
    "no máximo n-1 processos",
    "até n processos",
    "apenas 1 processo (master)",
    "ilimitado (com threads)"
  ],
  correct: 1,
  explanation: "Simétricos (SMP): todos os n processadores iguais, partilham memória/barramento; executam n processos em paralelo verdadeiro.",
  theoryPoints: {
    title: "SMP (Symmetric Multiprocessing)",
    content: "Todos processadores idênticos, memória partilhada (UMA/NUMA), um SO único.",
    keyPoints: [
      "Paralelismo: até n processos simultâneos",
      "Escalonamento: SO distribui por todos cores",
      "Coerência cache obrigatória"
    ],
    examples: "Servidor 4-core: 4 threads simultâneos."
  },
  hints: ["SMP vs assimétrico?", "Quantos em paralelo?"]  
},
{
  id: 18,
  question: "Um sistema composto por várias unidades de processamento interligadas por rede de comunicações permite:",
  code: "",
  options: [
    "execução transparente num multiprocessador simétrico",
    "várias partes do mesmo programa executadas em diferentes máquinas",
    "execução transparente num multiprocessador assimétrico",
    "partilha direta de memória física"
  ],
  correct: 1,
  explanation: "Rede → **cluster/MPP** (memória distribuída); programa dividido (MPI), executa partes em nodes separados.",
  theoryPoints: {
    title: "Clusters/MPP via Rede",
    content: "Computadores independentes + rede (Ethernet/InfiniBand); comunicação por mensagens (MPI).",
    keyPoints: [
      "Memória distribuída",
      "Programação paralela: divide et impera",
      "Não transparente como SMP"
    ],
    examples: "MPI_Send/Recv entre nodes."
  },
  hints: ["Rede = barramento?", "Como dividir programa?"]  
},
{
  id: 19,
  question: "Num sistema com 8 CPUs simétricas num chip multicore, qual afirmação é falsa?",
  code: "",
  options: [
    "Pode executar no máximo 8 processos em paralelo",
    "Pode ter >8 processos concorrentes (intercalados)",
    "Um CPU pode alterar registos de outro CPU diretamente",
    "Todos CPUs competem por recursos partilhados"
  ],
  correct: 2,
  explanation: "Em multicore **SMP**, registos são privados por core; não há acesso direto entre eles (proteção SO).",
  theoryPoints: {
    title: "Multicore SMP",
    content: "Cores partilham cache L3/memória, mas registos/PC privados por core.",
    keyPoints: [
      "Registos privados: isolamento",
      ">8 processos: time-sharing",
      "Contenção: bus/memória"
    ],
    examples: "Core0 não lê RAX de Core1."
  },
  hints: ["Registos partilhados?", "Como >8 processos?"]  
},
{
  id: 20,
  question: "Múltiplos processadores que comunicam, partilham dispositivos/memória via barramento comum, mas cada tem memória privada, é:",
  code: "",
  options: [
    "Cluster",
    "SMP (memória partilhada)",
    "MPP (memória distribuída)",
    "Sistema uniprocessador"
  ],
  correct: 2,
  explanation: "**MPP** (Massively Parallel Processor): memória privada por processador, comunicação via interconexão/barramento.",
  theoryPoints: {
    title: "MPP vs SMP",
    content: "MPP: escala milhares, memória distribuída; SMP: dezenas, memória partilhada.",
    keyPoints: [
      "Barramento dedicado",
      "Cada CPU: memória local",
      "Comunicação: mensagens"
    ],
    examples: "Cray T3D, Intel Paragon."
  },
  hints: ["Memória privada + barramento?", "MPP ou SMP?"]  
},
{
  id: 21,
  question: "Sistemas assimétricos vs simétricos: qual diferença chave?",
  code: "",
  options: [
    "Assimétricos partilham todos recursos; simétricos não",
    "Simétricos têm todos processadores iguais e partilham uniformemente",
    "Assimétricos escalam melhor",
    "Simétricos usam rede em vez de barramento"
  ],
  correct: 1,
  explanation: "Simétricos (SMP): todos CPUs iguais, acesso uniforme a memória/recursos. Assimétricos: master especializa slaves.",
  theoryPoints: {
    title: "SMP vs ASMP",
    content: "SMP: escalabilidade limitada (contenção); ASMP: especialização.",
    keyPoints: [
      "SMP: um SO, memória UMA/NUMA",
      "ASMP: master coordena"
    ],
    examples: "SMP: desktop multicore; ASMP: embedded master-slave."
  },
  hints: ["CPUs iguais?", "Partilha uniforme?"]  
},
{
  id: 22,
  question: "Num cluster, a computação é coesa como multiprocessador porque:",
  code: "",
  options: [
    "partilha memória física direta",
    "middleware simula memória partilhada",
    "usa barramento comum",
    "todos nodes têm mesmo SO"
  ],
  correct: 1,
  explanation: "Middleware (OpenMPI, SLURM) abstrai rede, dando ilusão de SMP via mensagens.",
  theoryPoints: {
    title: "SSI (Single System Image)",
    content: "Cluster aparece como uma máquina única via software.",
    keyPoints: [
      "MPI: programação paralela",
      "Não partilha hardware"
    ],
    examples: "Beowulf clusters."
  },
  hints: ["Como cluster simula SMP?", "Middleware?"]  
},
{
  id: 23,
  question: "Sistemas tempo-real hard vs soft: diferença?",
  code: "",
  options: [
    "Hard: perde deadline = falha; Soft: degrada qualidade",
    "Hard: mais rápido; Soft: interativo",
    "Hard: simulações; Soft: controlo",
    "Hard: multicore; Soft: uniprocessador"
  ],
  correct: 0,
  explanation: "Hard: falha catastrófica (ex: airbag); Soft: aceitável ocasionalmente (ex: vídeo lag).",
  theoryPoints: {
    title: "Tipos Tempo-Real",
    content: "Garantia vs melhor esforço.",
    keyPoints: [
      "Hard: análise schedulability",
      "Soft: QoS degradável"
    ],
    examples: "Hard: ABS; Soft: streaming."
  },
  hints: ["Consequência deadline?", "Falha ou degradação?"]  
},
{
  id: 24,
  question: "Processadores em sistemas embarcados tempo-real dominam porque:",
  code: "",
  options: [
    "PCs consomem mais energia",
    "ubiquidade: carros, electrodomésticos, medicina (>90% produção)",
    "mais caros que desktop",
    "usam clusters"
  ],
  correct: 1,
  explanation: "Milhares de milhões/ano em embedded vs milhões em PCs.",
  theoryPoints: {
    title: "Embedded Dominância",
    content: "Microcontroladores baratos/específicos.",
    keyPoints: [
      ">50/carros, smart homes",
      "Baixo custo/consumo"
    ],
    examples: "MCU em tudo."
  },
  hints: ["Onde mais processadores?", "% produção?"]  
},
{
  id: 25,
  question: "Sistema com rede: permite programar como SMP porque:",
  code: "",
  options: [
    "transparente (bibliotecas MPI/OpenMP)",
    "partilha barramento",
    "memória única",
    "relógio global"
  ],
  correct: 0,
  explanation: "Bibliotecas abstraem rede; programador escreve paralelo sem saber se SMP/cluster.",
  theoryPoints: {
    title: "Programação Paralela Distribuída",
    content: "MPI para clusters.",
    keyPoints: [
      "Send/Recv simula shared mem"
    ],
    examples: "HPC apps rodam SMP/cluster."
  },
  hints: ["MPI?", "Abstração rede?"]  
},
{
  id: 26,
  question: "Relativamente ao método de escalonamento Multinível com Realimentação por Filas, podemos afirmar que:",
  code: "",
  options: [
    "O método de escalonamento de curto-prazo em cada fila afeta a performance",
    "A performance não está relacionada com o método para atribuir processos às filas",
    "Não está relacionada com escalonamento de curto-prazo em cada fila",
    "Favorece processos IO-bound"
  ],
  correct: 0,
  explanation: "**Multilevel Feedback Queue**: filas múltiplas; escalonamento por fila (RR, SJF) afeta performance global; realimentação move processos entre filas.",
  theoryPoints: {
    title: "MLFQ (Multilevel Feedback Queue)",
    content: "Filas com prioridades diferentes; processos movem-se para baixo (mais CPU = menor prioridade).",
    keyPoints: [
      "Filas: alta prioridade (RR curto), baixa (FCFS)",
      "Realimentação: degrada prioridade",
      "Aproxima SJF adaptativo"
    ],
    examples: "Linux CFS usa variantes [file:9]."
  },
  hints: ["Realimentação?", "Escalonamento por fila?"]  
},

{
  id: 27,
  question: "Qual o estado de um processo após execução de operação IO?",
  code: "",
  options: [
    "Running",
    "Ready",
    "Waiting",
    "New"
  ],
  correct: 2,
  explanation: "**Waiting**: bloqueado aguardando IO completar (interrupt). Depois → Ready.",
  theoryPoints: {
    title: "Estados Processo IO",
    content: "Running → Waiting (bloqueia) → Ready (IO done).",
    keyPoints: [
      "Bloqueio voluntário",
      "Dispatcher agenda outro"
    ],
    examples: "read() → sleep até dados."
  },
  hints: ["Pós-IO?", "Bloqueado?"]  
},

{
  id: 28,
  question: "Sistema com várias unidades processamento interligadas por rede permite:",
  code: "",
  options: [
    "Programa executado em várias máquinas (cluster/MPP)",
    "Execução transparente multiprocessador assimétrico",
    "Execução transparente multiprocessador simétrico",
    "Partilha memória física direta"
  ],
  correct: 0,
  explanation: "**Rede** → cluster/distribuído; divide programa por nodes (MPI).",
  theoryPoints: {
    title: "Clusters MPP",
    content: "Memória distribuída; comunicação mensagens.",
    keyPoints: [
      "Não SMP (sem memória shared)",
      "Escala milhares nodes"
    ],
    examples: "Beowulf [file:9]."
  },
  hints: ["Rede vs barramento?", "Dividir programa?"]  
},

{
  id: 29,
  question: "Escalonador que determina próximo processo a executar:",
  code: "",
  options: [
    "Escalonador longo prazo",
    "Médio prazo",
    "Curto prazo (CPU dispatcher)",
    "Todos"
  ],
  correct: 2,
  explanation: "**Curto prazo (short-term)**: escolhe Ready → Running (quantum).",
  theoryPoints: {
    title: "Escalonadores",
    content: "Longo: New → Ready; Médio: suspend/resume; Curto: Ready → Running.",
    keyPoints: [
      "Dispatcher: context switch"
    ],
    examples: "Linux scheduler."
  },
  hints: ["CPU quem escolhe?", "Short-term?"]  
},

{
  id: 30,
  question: "Num SO com escalonamento não-preemptivo, processo requisita IO:",
  code: "",
  options: [
    "Continua Running (CPU idle)",
    "Sai CPU → Waiting",
    "Sai CPU → Ready",
    "Terminado"
  ],
  correct: 1,
  explanation: "**Não-preemptivo**: processo cede CPU voluntariamente (IO block) → Waiting.",
  theoryPoints: {
    title: "Não-Preemptivo IO",
    content: "Processo libera CPU ao bloquear; dispatcher agenda outro.",
    keyPoints: [
      "Voluntário: syscall block"
    ],
    examples: "read() bloqueia."
  },
  hints: ["Não-preemptivo block?", "CPU idle?"]  
},

{
  id: 31,
  question: "Sistemas mono-processador com escalonamento prioridades preemptivo:",
  code: "",
  options: [
    "Processo Running → Ready (prioridade alta chega)",
    "Ready → Waiting",
    "Waiting → Running",
    "Monopoliza CPU"
  ],
  correct: 0,
  explanation: "**Preemptivo**: suspende Running por Ready mais prioritário.",
  theoryPoints: {
    title: "Prioridades Preemptivas",
    content: "Timer/interrupt: checa prioridades.",
    keyPoints: [
      "Starvation possível (fix: aging)"
    ],
    examples: "Unix nice [file:9]."
  },
  hints: ["Preempção?", "Running → Ready?"]  
},

{
  id: 32,
  question: "Sistemas interativos: algoritmo mais adequado:",
  code: "",
  options: [
    "SJF preemptivo",
    "Prioridades preemptivo",
    "Round-Robin",
    "Prioridades não-preemptivo"
  ],
  correct: 2,
  explanation: "**RR**: quantum igual; responsivo para interativo.",
  theoryPoints: {
    title: "RR Interativo",
    content: "Time-sharing: ilusão simultaneidade.",
    keyPoints: [
      "Quantum ~10-100ms"
    ],
    examples: "Unix [file:9]."
  },
  hints: ["Interativo?", "Fairness?"]  
},

{
  id: 33,
  question: "Batch processing: objetivo principal:",
  code: "",
  options: [
    "Interação utilizador",
    "Fatia equitativa CPU",
    "Tempo IO dominante",
    "Todos"
  ],
  correct: 2,
  explanation: "**Batch**: CPU-bound; IO espera permite multiprogramação.",
  theoryPoints: {
    title: "Batch Multiprogramado",
    content: "Jobs sequenciais; overlap CPU/IO.",
    keyPoints: [
      "Não interativo"
    ],
    examples: "Cobol jobs [file:9]."
  },
  hints: ["Batch CPU/IO?", "Overlap?"]  
},

{
  id: 34,
  question: "Processo é:",
  code: "",
  options: [
    "Programa múltiplos fluxos",
    "Programa em execução",
    "Programa único fluxo",
    "Todos"
  ],
  correct: 1,
  explanation: "**Processo**: instância programa em execução (PCB, memória, etc.).",
  theoryPoints: {
    title: "Definição Processo",
    content: "Programa + estado execução.",
    keyPoints: [
      "PCB: PID, registos, memória"
    ],
    examples: "`ps`: lista processos."
  },
  hints: ["Programa vs processo?", "PCB?"]  
},

{
  id: 35,
  question: "Linguagem máquina é:",
  code: "",
  options: [
    "Alto-nível",
    "Assembly",
    "Conjunto instruções CPU entende",
    "Para programador"
  ],
  correct: 2,
  explanation: "**Máquina**: binário específico ISA (x86, ARM).",
  theoryPoints: {
    title: "Níveis Linguagem",
    content: "Máquina → assembly → alto-nível.",
    keyPoints: [
      "Opcode + operandos"
    ],
    examples: "0xB8 para MOV [file:9]."
  },
  hints: ["CPU lê quê?", "Binário?"]  
},
{
  id: 36,
  question: "Sistemas multiprocessador assimétricos com n processadores:",
  code: "",
  options: [
    "partilham barramento, relógio e memória",
    "não partilham barramento, relógio e memória",
    "podem correr em paralelo até n processos",
    "são geridos por único SO central"
  ],
  correct: 1,
  explanation: "Assimétricos (ASMP): master + slaves especializados; **não partilham uniformemente** barramento/relógio/memória. [file:1][file:8]",
  theoryPoints: {
    title: "ASMP Assimétricos",
    content: "Master coordena; slaves tarefas específicas. Recursos **não uniformes**.",
    keyPoints: [
      "Master: scheduling/IO",
      "Slaves: especializados",
      "Não SMP"
    ],
    examples: "Master I/O + coordenação; slaves aceleração gráfica."
  },
  hints: ["Partilha uniforme?", "Master-slave?"]  
},
{
  id: 37,
  question: "SMP simétricos com n processadores correm em paralelo:",
  code: "",
  options: [
    "máximo n-1 processos",
    "até n processos",
    "apenas 1 (master)",
    "ilimitado (threads)"
  ],
  correct: 1,
  explanation: "**SMP**: todos n processadores iguais, partilham memória; **n processos paralelos**. [file:1][file:8]",
  theoryPoints: {
    title: "SMP Simétricos",
    content: "CPUs idênticas, memória UMA/NUMA, único SO.",
    keyPoints: [
      "**Paralelismo: n processos**",
      "Cache coherence (MESI)",
      "SO escalona todos cores"
    ],
    examples: "Servidor 4-core: 4 threads simultâneos."
  },
  hints: ["n ou n-1?", "SMP vs ASMP?"]  
},
{
  id: 38,
  question: "Múltiplos processadores comunicam/partilham via barramento, memória privada cada: ",
  code: "",
  options: [
    "Cluster",
    "SMP (memória partilhada)",
    "MPP (memória distribuída)",
    "Uniprocessador"
  ],
  correct: 2,
  explanation: "**MPP**: memória privada + barramento/interconexão. Escala milhares. [file:1][file:8]",
  theoryPoints: {
    title: "MPP vs SMP",
    content: "**MPP**: distributed memory; **SMP**: shared memory.",
    keyPoints: [
      "Memória local cada CPU",
      "Comunicação mensagens",
      "Escala > SMP"
    ],
    examples: "Cray T3D, Intel Paragon."
  },
  hints: ["Memória privada + barramento?", "MPP?"]  
}
];

export default ex6;