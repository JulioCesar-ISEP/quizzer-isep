import ex5 from "./exercises/ex5.js";


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
    exercises: [
      {
        id: 1,
        question: "Qual é a representação em decimal do número binário '10101.110'?",
        code: "// Conversão binário para decimal\nbinário: 10101.110\ndecimal: ?",
        options: ["21.75", "15.5", "23.25", "19.125"],
        correct: 0,
        explanation: "Parte inteira: 1×2⁴ + 0×2³ + 1×2² + 0×2¹ + 1×2⁰ = 16+0+4+0+1 = 21. Parte decimal: 1×2⁻¹ + 1×2⁻² + 0×2⁻³ = 0.5+0.25+0 = 0.75. Total: 21.75",
        theoryPoints: {
          title: "Conversão Binário-Decimal",
          content: "Para converter binário para decimal, some as potências de 2 para cada bit '1'. Para parte fracionária, use potências negativas de 2.",
          keyPoints: [
            "Bits inteiros: 2⁰, 2¹, 2², 2³...",
            "Bits fracionários: 2⁻¹, 2⁻², 2⁻³...",
            "Bit mais à esquerda = mais significativo"
          ],
          examples: "1101.101 = 8+4+0+1 + 0.5+0+0.125 = 13.625"
        },
        hints: ["Calcule parte inteira e fracionária separadamente", "Lembre-se que 2⁻¹ = 0.5, 2⁻² = 0.25"]
      },
      {
        id: 2,
        question: "Como representar o número -23 em complemento para 2 com 6 bits?",
        code: "// Representação de -23 em 6 bits\nDecimal: -23\nBinário: ?",
        options: ["101001", "111001", "100111", "110101"],
        correct: 0,
        explanation: "Primeiro: 23 em binário = 010111. Complemento de 1: 101000. Adicione 1: 101001. Esta é a representação de -23 em complemento para 2.",
        theoryPoints: {
          title: "Complemento para 2",
          content: "Método mais comum para representar números negativos. Para encontrar -X: (1) represente X em binário, (2) inverta todos os bits, (3) some 1.",
          keyPoints: [
            "Bit mais significativo indica sinal (1=negativo)",
            "Faixa com n bits: -2ⁿ⁻¹ a +2ⁿ⁻¹-1",
            "Única representação do zero"
          ],
          examples: "-5 em 4 bits: 5=0101, complemento=1010, +1=1011\n-1 em 8 bits: 1=00000001, complemento=11111110, +1=11111111"
        },
        hints: ["Encontre primeiro o valor positivo", "Aplique complemento de 1 e depois some 1"]
      },
      {
        id: 3,
        question: "Complete a tabela verdade para X = ~(A + B + C) + (~A · ~B · C) + (A · ~B · ~C) + (A · ~B · C)",
        code: "A B C | X\n0 0 0 | 1\n0 0 1 | 1\n0 1 0 | 0\n0 1 1 | 0\n1 0 0 | 1\n1 0 1 | 1\n1 1 0 | 0\n1 1 1 | ?",
        options: ["0", "1", "Indefinido", "Depende do contexto"],
        correct: 0,
        explanation: "Para A=1, B=1, C=1: ~(1+1+1) = ~1 = 0, (~1·~1·1) = (0·0·1) = 0, (1·~1·~1) = (1·0·0) = 0, (1·~1·1) = (1·0·1) = 0. Soma: 0+0+0+0 = 0",
        theoryPoints: {
          title: "Álgebra Booleana e Tabelas Verdade",
          content: "Expressões booleanas podem ser analisadas usando tabelas verdade. Operações básicas: AND(·), OR(+), NOT(~).",
          keyPoints: [
            "AND: só é 1 se todos forem 1",
            "OR: é 1 se algum for 1", 
            "NOT: inverte o valor",
            "Avalie por partes complexas"
          ],
          examples: "A·B + ~A·~B = XOR\n~(A+B) = ~A·~B (Lei de De Morgan)"
        },
        hints: ["Avalie cada termo separadamente", "Lembre-se que AND tem precedência sobre OR"]
      }
    ]
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
    exercises: [
      {
        id: 1,
        question: "Qual é o resultado de 0x17 AND 0x18 em binário?",
        code: "// Operação AND entre hexadecimais\n0x17 = 00010111\n0x18 = 00011000\nAND    = ????????",
        options: ["00010000", "00010111", "00011000", "00011111"],
        correct: 0,
        explanation: "0x17 = 00010111, 0x18 = 00011000. AND bit a bit: 0&0=0, 0&0=0, 0&0=0, 1&1=1, 0&1=0, 1&0=0, 1&0=0, 1&0=0. Resultado: 00010000 = 0x10",
        theoryPoints: {
          title: "Operações Lógicas Bit a Bit",
          content: "AND, OR, XOR, NOT operam em cada bit individualmente. Úteis para máscaras e manipulação de bits específicos.",
          keyPoints: [
            "AND: extrai bits (máscara)",
            "OR: seta bits",
            "XOR: toggle bits", 
            "NOT: inverte bits"
          ],
          examples: "0xF0 AND 0x0F = 0x00\n0xF0 OR 0x0F = 0xFF\n0xF0 XOR 0x0F = 0xFF"
        },
        hints: ["Converta primeiro para binário", "Aplique AND em cada posição de bit"]
      },
      {
        id: 2,
        question: "Que máscara XOR usar para inverter bits b₁, b₂, b₃ em palavra de 8 bits?",
        code: "// Inverter bits específicos\nPalavra: b₇b₆b₅b₄b₃b₂b₁b₀\nMáscara: ????????",
        options: ["00001110", "00011100", "00111000", "01110000"],
        correct: 1,
        explanation: "Bits b₁, b₂, b₃ correspondem às posições 1, 2, 3 (da direita). Para inverter com XOR, coloque 1 nessas posições: 00011100",
        theoryPoints: {
          title: "Máscaras com XOR",
          content: "XOR com 1 inverte o bit, XOR com 0 mantém o bit. Para inverter bits específicos, use máscara com 1s nas posições desejadas.",
          keyPoints: [
            "XOR é comutativo e associativo",
            "XOR com 0 mantém valor",
            "XOR com 1 inverte valor",
            "Dois XORs com mesma máscara cancelam"
          ],
          examples: "1010 XOR 1111 = 0101 (inverte todos)\n1010 XOR 0011 = 1001 (inverte 2 bits menos significativos)"
        },
        hints: ["Lembre-se que b₀ é o bit menos significativo", "XOR com 1 inverte, com 0 mantém"]
      },
      {
        id: 3,
        question: "Quais flags são setadas após 0x52 + 0x31 em processador 8-bit?",
        code: "// Soma hexadecimal\n0x52 = 01010010\n0x31 = 00110001\nSoma   = 10000011",
        options: [
          "Z=0, S=1, C=0, O=1",
          "Z=0, S=0, C=0, O=0", 
          "Z=1, S=0, C=1, O=0",
          "Z=0, S=1, C=0, O=0"
        ],
        correct: 0,
        explanation: "Resultado: 10000011 = 0x83. Z=0 (não zero), S=1 (bit de sinal=1 negativo), C=0 (sem carry), O=1 (overflow em aritmética signed: 82+49=131 > 127)",
        theoryPoints: {
          title: "Flags de Status",
          content: "Processadores mantém flags que indicam condições após operações: Zero, Sinal, Carry, Overflow, etc.",
          keyPoints: [
            "Z=1 se resultado for zero",
            "S=bit mais significativo", 
            "C=carry/borrow da operação",
            "O=overflow em aritmética signed"
          ],
          examples: "127+1 = 10000000: Z=0, S=1, C=0, O=1\n255+1 = 00000000: Z=1, S=0, C=1, O=0"
        },
        hints: ["Calcule o resultado em decimal signed", "Verifique limites para signed (-128 a 127)"]
      }
    ]
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
    exercises: [
      {
        id: 1,
        question: "Qual afirmação sobre arquitetura von Neumann é CORRETA?",
        code: "// Modelo von Neumann\nCPU ↔ Memória (Instruções + Dados)\n↓\nDispositivos E/S",
        options: [
          "Instruções e dados são armazenados em memórias separadas",
          "Instruções e dados são armazenados na mesma memória",
          "Não é possível executar múltiplos programas",
          "Requer sistema operativo para funcionar"
        ],
        correct: 1,
        explanation: "Na arquitetura von Neumann, instruções e dados compartilham a mesma memória, diferentemente da Harvard que separa.",
        theoryPoints: {
          title: "Princípios von Neumann",
          content: "Quatro componentes principais: CPU, Memória, Dispositivos E/S, Barramento. Característica fundamental: programa armazenado.",
          keyPoints: [
            "Programa armazenado na memória",
            "Instruções e dados na mesma memória",
            "Execução sequencial de instruções",
            "Barramento compartilhado"
          ],
          examples: "Computadores modernos usam variações\nHarvard usada em microcontroladores: memória separada para instruções/dados"
        },
        hints: ["Pense onde programa é armazenado", "Diferença entre von Neumann e Harvard"]
      },
      {
        id: 2,
        question: "O que NÃO é responsabilidade da CPU?",
        code: "// Funções da CPU\n- Fetch instruções\n- Decodificar instruções  \n- Executar operações\n- ???",
        options: [
          "Realizar operações aritméticas e lógicas",
          "Armazenar dados de programa permanentemente",
          "Transferir dados com a memória",
          "Descodificar opcodes"
        ],
        correct: 1,
        explanation: "CPU não armazena dados permanentemente - isso é feito pela memória. CPU só armazena temporariamente em registos durante processamento.",
        theoryPoints: {
          title: "Unidade Central de Processamento",
          content: "CPU é o cérebro do computador: busca, decodifica e executa instruções. Usa ALU para operações, UC para controle, e registos para armazenamento temporário.",
          keyPoints: [
            "ALU: operações aritméticas/lógicas",
            "UC: controle do fluxo de execução",
            "Registos: armazenamento temporário rápido",
            "Busca-decodifica-execução cíclica"
          ],
          examples: "Registos típicos: AC, PC, IR, MAR, MBR\nCiclo: fetch → decode → execute → repeat"
        },
        hints: ["CPU vs Memória - funções diferentes", "O que é armazenamento volátil vs permanente?"]
      },
      {
        id: 3,
        question: "Qual máscara usar para zerar 16 bits mais significativos de palavra 32-bit?",
        code: "// Zerar bits 31-16\nPalavra: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\nMáscara: ????????????????????????????????\nResultado: 0000000000000000xxxxxxxxxxxxxxxx",
        options: ["0xFFFF0000", "0x0000FFFF", "0xFFFFFFFF", "0x00000000"],
        correct: 1,
        explanation: "Para zerar bits com AND, use 0 nas posições desejadas. Bits 31-16 devem ser 0, bits 15-0 devem ser 1: 00000000000000001111111111111111 = 0x0000FFFF",
        theoryPoints: {
          title: "Manipulação de Bits com Máscaras",
          content: "AND com máscara permite isolar, zerar ou testar bits específicos. OR para setar bits, XOR para inverter.",
          keyPoints: [
            "AND com 0 zera bits",
            "AND com 1 mantém bits", 
            "Para zerar: AND com 0 na posição",
            "Para manter: AND com 1 na posição"
          ],
          examples: "Isolar byte menos significativo: AND 0x000000FF\nZerar byte menos significativo: AND 0xFFFFFF00"
        },
        hints: ["Que operação zera bits?", "Onde colocar 0s e 1s na máscara?"]
      }
    ]
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
    exercises: [
      {
        id: 1,
        question: "O que é time-sharing (partilha de tempo)?",
        code: "// Sistema time-sharing\nCPU → Processo A → Processo B → Processo C → ...",
        options: [
          "Execução sequencial de programas para máximo desempenho",
          "Atribuição de recursos por intervalos fixos a utilizadores",
          "Compartilhamento simultâneo de recursos entre múltiplos utilizadores",
          "Execução de múltiplas instâncias idênticas para redundância"
        ],
        correct: 2,
        explanation: "Time-sharing permite que múltiplos usuários interajam com o sistema simultaneamente, compartilhando recursos de CPU por pequenos intervalos de tempo.",
        theoryPoints: {
          title: "Sistemas de Partilha de Tempo",
          content: "Desenvolvido nos anos 1960, permite interatividade e compartilhamento justo de recursos. Base para sistemas multiutilizador modernos.",
          keyPoints: [
            "Múltiplos usuários simultâneos",
            "Tempo de CPU dividido em fatias",
            "Troca rápida entre processos",
            "Ilusão de execução exclusiva"
          ],
          examples: "Unix, Linux, Windows Server\nCada usuário tem sessão independente\nSO gerencia conflitos de recursos"
        },
        hints: ["Pense em múltiplos usuários ao mesmo tempo", "Como a CPU é compartilhada?"]
      },
      {
        id: 2,
        question: "Quando ocorre preempção em escalonamento?",
        code: "// Estados do processo\nNew → Ready ↔ Running → Terminated\n         ↑↓ Waiting",
        options: [
          "Quando processo termina voluntariamente",
          "Quando processo atinge tempo máximo e é interrompido",
          "Quando processo entra em waiting",
          "Quando sistema é desligado"
        ],
        correct: 1,
        explanation: "Preempção ocorre quando SO interrompe processo em execução (geralmente por esgotar sua fatia de tempo) para dar CPU a outro processo.",
        theoryPoints: {
          title: "Escalonamento Preemptivo",
          content: "SO controla quando processos executam. Preemptivo permite melhor fair sharing e responsividade. Não-preemptivo dá controle ao processo.",
          keyPoints: [
            "Preemptivo: SO decide trocas",
            "Não-preemptivo: processo decide",
            "Fatia de tempo típica: 10-100ms",
            "Evita monopolização de CPU"
          ],
          examples: "Round Robin: preemptivo com fatias de tempo\nFCFS: não-preemptivo (primeiro a chegar, primeiro a ser servido)"
        },
        hints: ["Quem controla a troca entre processos?", "O que impede um processo de monopolizar CPU?"]
      },
      {
        id: 3,
        question: "Qual é função principal da memória secundária?",
        code: "// Hierarquia de memória\nRegistos ← Cache ← RAM ← Disco ← Fita",
        options: [
          "Armazenar dados para execução imediata",
          "Comunicação entre CPUs",
          "Armazenamento permanente de dados e programas",
          "Armazenamento temporário na CPU"
        ],
        correct: 2,
        explanation: "Memória secundária (discos, SSDs) fornece armazenamento não-volátil para dados e programas, mantendo-os quando computador está desligado.",
        theoryPoints: {
          title: "Memória Secundária",
          content: "Mais lenta que memória principal, mas não-volátil e de maior capacidade. Inclui discos rígidos, SSDs, unidades USB, etc.",
          keyPoints: [
            "Não-volátil (persistente)",
            "Alta capacidade, baixo custo/bit",
            "Acesso mais lento que RAM",
            "Backing store para memória virtual"
          ],
          examples: "HDD: 1-10TB, 5-15ms acesso\nSSD: 500GB-4TB, 0.1ms acesso\nRAM: 8-64GB, 10-100ns acesso"
        },
        hints: ["O que acontece quando desliga o computador?", "Onde programas são armazenados permanentemente?"]
      }
    ]
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