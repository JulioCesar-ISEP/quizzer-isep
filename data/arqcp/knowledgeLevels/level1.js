export const level1KnowledgeTree = {
  conceptsCount: 8,
  topicsCount: 12,
  examplesCount: 15,
  
  // METADADOS DE ORIENTAÇÃO INTEGRADOS
  studyGuide: {
    prerequisites: [
      "Conceitos básicos de programação",
      "Noções de hardware (o que é CPU, memória, etc.)"
    ],
    learningObjectives: [
      "Compreender o modelo von Neumann e suas características",
      "Identificar os componentes principais de um sistema computacional", 
      "Entender a hierarquia de memória e sua importância",
      "Conhecer os conceitos básicos da arquitetura RISC-V"
    ],
    examFocus: [
      "Questões conceituais sobre modelos de arquitetura",
      "Identificação de componentes em diagramas", 
      "Perguntas sobre função de componentes",
      "Conversão simples entre C e Assembly"
    ],
    commonMistakes: [
      "Confundir memória unificada vs separada",
      "Não identificar o gargalo de von Neumann",
      "Errar convenções básicas de registradores"
    ]
  },

  // ROTEIRO INTEGRADO NA ÁRVORE
  studyPath: [
    "1. Comece pelos Componentes Básicos (30min)",
    "2. Entenda Modelos de Arquitetura (45min)", 
    "3. Explore Hierarquia de Memória (30min)",
    "4. Conheça RISC-V Básico (45min)",
    "5. Revise com Exemplos Práticos (30min)"
  ],

  // ÁRVORE COM PROGRESSÃO BOTTOM-UP
  root: {
    id: 'root',
    type: 'concept', 
    title: 'Arquitetura de Sistemas de Computadores',
    description: 'Fundamentos dos componentes e modelos de sistemas computacionais',
    
    // ORDEM BOTTOM-UP: do mais básico para o mais complexo
    children: [
      // BLOCO 1: COMPONENTES BÁSICOS (fundação)
      {
        id: 'componentes-basicos',
        type: 'topic',
        title: '🚀 Componentes Básicos',
        description: 'Elementos fundamentais que compõem um computador',
        studyTime: '30 minutos',
        importance: 'Alta',
        children: [
          {
            id: 'cpu',
            type: 'concept',
            title: 'CPU - Cérebro do Computador',
            description: 'Unidade Central de Processamento - executa instruções',
            keyPoints: [
              "Processa instruções de programa",
              "Contém UC (Unidade de Controle) e ALU",
              "Trabalha com registradores internos"
            ]
          },
          {
            id: 'memoria-principal',
            type: 'concept',
            title: 'Memória Principal (RAM)',
            description: 'Armazena programas e dados durante execução',
            keyPoints: [
              "Volátil - perde dados sem energia",
              "Acessada via endereços",
              "Tempo de acesso: nanosegundos"
            ]
          },
          {
            id: 'dispositivos-e-s',
            type: 'concept',
            title: 'Dispositivos de Entrada/Saída',
            description: 'Comunicação com o mundo externo',
            keyPoints: [
              "Entrada: teclado, mouse, sensores",
              "Saída: monitor, impressora, atuadores", 
              "Interface com usuário e outros sistemas"
            ]
          },
          {
            id: 'ex-componentes-interacao',
            type: 'example',
            title: '💡 Exemplo: Como os Componentes Trabalham Juntos',
            description: 'CPU lê instrução da Memória → Processa na ALU → Escreve resultado → Envia para E/S',
            code: `// Fluxo básico de execução
CPU:    lw a0, 0(sp)     // Busca dado da memória
        addi a0, a0, 1    // Processa na ALU  
        sw a0, 4(sp)      // Armazena resultado
E/S:    output(a0)        // Envia para dispositivo`
          }
        ]
      },

      // BLOCO 2: COMO SE COMUNICAM (conexões)
      {
        id: 'comunicacao-componentes',
        type: 'topic', 
        title: '🔗 Comunicação entre Componentes',
        description: 'Como os componentes básicos se conectam e comunicam',
        studyTime: '25 minutos',
        importance: 'Alta',
        children: [
          {
            id: 'barramentos',
            type: 'concept',
            title: 'Sistema de Barramentos',
            description: 'Vias de comunicação entre componentes',
            keyPoints: [
              "Barramento de Dados: transporta dados",
              "Barramento de Endereços: seleciona localização", 
              "Barramento de Controle: coordena operações"
            ]
          },
          {
            id: 'ex-barramento-dados',
            type: 'example',
            title: '💡 Exemplo: Transferência via Barramento',
            description: 'CPU envia endereço → Memória responde com dados',
            code: `// CPU lê da memória
CPU -> [Endereço: 0x1000] -> Memória
CPU <- [Dados: 42] <- Memória`
          }
        ]
      },

      // BLOCO 3: MODELOS DE ORGANIZAÇÃO (padrões)
      {
        id: 'modelos-arquitetura',
        type: 'topic',
        title: '🏛️ Modelos de Arquitetura', 
        description: 'Padrões de organização dos componentes',
        studyTime: '40 minutos',
        importance: 'Média',
        children: [
          {
            id: 'von-neumann',
            type: 'concept',
            title: 'Modelo von Neumann',
            description: 'Arquitetura com memória unificada para dados e instruções',
            keyPoints: [
              "Memória única para código e dados",
              "Barramento compartilhado",
              "Gargalo de von Neumann: acesso sequencial",
              "Base da maioria dos computadores modernos"
            ]
          },
          {
            id: 'harvard',
            type: 'concept',
            title: 'Modelo Harvard', 
            description: 'Arquitetura com memórias separadas para dados e instruções',
            keyPoints: [
              "Memórias separadas: uma para código, outra para dados",
              "Acesso paralelo a instruções e dados",
              "Maior desempenho, mais complexo",
              "Usado em microcontroladores e DSPs"
            ]
          },
          {
            id: 'ex-comparacao-modelos',
            type: 'example',
            title: '💡 Exemplo: Comparação von Neumann vs Harvard',
            description: 'Diferenças práticas no acesso à memória',
            code: `// von Neumann - mesmo barramento
CPU <-> Memória (Instruções + Dados)

// Harvard - barramentos separados  
CPU <-> Memória Instruções
CPU <-> Memória Dados`
          }
        ]
      },

      // BLOCO 4: HIERARQUIA (otimização)
      {
        id: 'hierarquia-memoria',
        type: 'topic',
        title: '📊 Hierarquia de Memória',
        description: 'Organização em níveis para otimizar velocidade/custo',
        studyTime: '35 minutos', 
        importance: 'Média',
        children: [
          {
            id: 'principio-localidade',
            type: 'concept',
            title: 'Princípio de Localidade',
            description: 'Fundamento que justifica a hierarquia',
            keyPoints: [
              "Localidade Temporal: dados usados serão reusados",
              "Localidade Espacial: dados próximos serão acessados",
              "Base para caches eficientes"
            ]
          },
          {
            id: 'niveis-hierarquia',
            type: 'concept',
            title: 'Níveis da Hierarquia',
            description: 'Do mais rápido e caro ao mais lento e barato',
            keyPoints: [
              "Registradores: mais rápido, menor capacidade",
              "Cache L1/L2/L3: velocidade intermediária", 
              "RAM: memória principal, volátil",
              "Disco: armazenamento persistente, lento"
            ]
          },
          {
            id: 'ex-fluxo-hierarquia',
            type: 'example',
            title: '💡 Exemplo: Fluxo na Hierarquia',
            description: 'Como os dados se movem entre níveis',
            code: `CPU precisa do dado X:
1. ✅ Registradores - encontrou! (1 ciclo)
2. 🔍 Cache L1 - encontrou! (3 ciclos) 
3. 🔍 Cache L2 - encontrou! (10 ciclos)
4. 🔍 RAM - encontrou! (100 ciclos)
5. 💾 Disco - encontrou! (10M ciclos)`
          }
        ]
      },

      // BLOCO 5: APLICAÇÃO PRÁTICA (RISC-V)
      {
        id: 'arquitetura-riscv',
        type: 'topic',
        title: '⚡ Arquitetura RISC-V na Prática',
        description: 'Como esses conceitos se aplicam na arquitetura RISC-V',
        studyTime: '45 minutos',
        importance: 'Alta', 
        children: [
          {
            id: 'isa-riscv',
            type: 'concept',
            title: 'ISA RISC-V - Conjunto de Instruções',
            description: 'Linguagem que a CPU entende',
            keyPoints: [
              "RISC (Reduced Instruction Set Computer)",
              "Poucas instruções simples",
              "Formato regular para fácil decodificação",
              "Extensões: I (base), M (multiplicação), etc."
            ]
          },
          {
            id: 'registradores-riscv',
            type: 'concept',
            title: 'Registradores RV32I',
            description: 'Os 32 registradores de propósito geral',
            keyPoints: [
              "x0: sempre zero (constante 0)",
              "x1 (ra): return address", 
              "x2 (sp): stack pointer",
              "a0-a7: argumentos/retorno",
              "s0-s11: valores preservados"
            ]
          },
          {
            id: 'ex-instructions-basic',
            type: 'example',
            title: '💡 Exemplo: Instruções Fundamentais',
            description: 'Primeiras instruções que você deve conhecer',
            code: `# Aritméticas
add a0, a1, a2    # a0 = a1 + a2
sub a0, a1, a2    # a0 = a1 - a2

# Memória  
lw a0, 0(sp)      # Carrega word da memória
sw a1, 4(sp)      # Armazena word na memória

# Controle
beq a0, a1, label # Se iguais, vai para label
jal ra, function  # Chama função`
          }
        ]
      }
    ]
  }
};