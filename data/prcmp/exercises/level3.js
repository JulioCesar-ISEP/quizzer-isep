const ex3 = [
  {
    id: 1,
    question: "Qual é a forma direta mais precisa (ou seja, com menor erro) de representar o número -2,6 num computador?",
    code: "",
    options: [
      "Número inteiro sem sinal de 32 bits",
      "Número inteiro com sinal (complemento para 2) de 32 bits",
      "Número em vírgula flutuante (IEEE 754) de 32 bits",
      "Número em vírgula flutuante (IEEE 754) de 64 bits"
    ],
    correct: 3,
    explanation: "IEEE 754 de 64 bits (double precision) tem maior precisão que 32 bits (single precision). Números fracionários devem usar vírgula flutuante, não representação inteira.",
    theoryPoints: {
      title: "IEEE 754 - Ponto Flutuante",
      content: "Padrão IEEE 754 para números reais: single precision (32 bits) tem 23 bits de mantissa, double (64 bits) tem 52 bits. Maior precisão para números fracionários.",
      keyPoints: [
        "32 bits: 1 sinal, 8 expoente, 23 mantissa",
        "64 bits: 1 sinal, 11 expoente, 52 mantissa",
        "Precisão dupla: ~15-17 dígitos decimais",
        "Números inteiros podem ser representados exatamente se couberem na mantissa"
      ],
      examples: "-2,6 em IEEE 754 double: 1 (sinal negativo) + expoente + mantissa binária de 2,6. Erro de arredondamento menor que em single."
    },
    hints: ["Qual formato tem mais bits para precisão?", "Números decimais fracionários são representados exatamente em binário?"]
  },
  {
    id: 2,
    question: "Observe a seguinte representação de um valor inteiro de 8 bits: 10001100. Se for uma representação sem sinal, este número é:",
    code: "// Valor binário: 10001100\n// Conversão para decimal: 1×2⁷ + 0×2⁶ + 0×2⁵ + 0×2⁴ + 1×2³ + 1×2² + 0×2¹ + 0×2⁰",
    options: [
      "Negativo",
      "Positivo",
      "Zero",
      "Impossível determinar"
    ],
    correct: 1,
    explanation: "Em representação sem sinal, todos os 8 bits representam magnitude. 10001100₂ = 140₁₀, que é positivo. Em complemento para 2 seria negativo.",
    theoryPoints: {
      title: "Representação sem Sinal vs com Sinal",
      content: "Sem sinal: todos os bits representam magnitude (0 a 2ⁿ-1). Com sinal: bit mais significativo indica sinal (0=positivo, 1=negativo). Complemento para 2 é padrão para inteiros com sinal.",
      keyPoints: [
        "Sem sinal: range 0 a (2ⁿ - 1)",
        "Complemento para 2: range -2ⁿ⁻¹ a (2ⁿ⁻¹ - 1)",
        "Bit mais significativo: 0=positivo, 1=negativo (em complemento 2)",
        "10001100 sem sinal: 140, com sinal (comp 2): -116"
      ],
      examples: "8 bits sem sinal: 0 a 255. 8 bits com sinal (comp 2): -128 a 127. 10001100 = 140 (sem sinal) = -116 (comp 2)."
    },
    hints: ["O que significa 'sem sinal'?", "Como interpretar o bit mais à esquerda em cada representação?"]
  },
  {
    id: 3,
    question: "A norma IEEE 754 permite:",
    code: "",
    options: [
      "representar conjuntos de caracteres que permitem formar texto",
      "representar números inteiros com sinal, com uma única representação do valor zero",
      "representar números inteiros com sinal, havendo duas representações para o valor zero",
      "representar números reais com sinal em vírgula flutuante"
    ],
    correct: 3,
    explanation: "IEEE 754 é o padrão para representação de números reais (racionais) em vírgula flutuante em computadores, incluindo formatos para precisão simples e dupla.",
    theoryPoints: {
      title: "Padrão IEEE 754",
      content: "Padroniza representação de números de ponto flutuante: formato, operações aritméticas, arredondamento, tratamento de exceções (NaN, infinito). Usado em hardware e software.",
      keyPoints: [
        "Formatos: binary32 (single), binary64 (double), binary128 (quad)",
        "Componentes: sinal, expoente (biased), mantissa (significando)",
        "Valores especiais: ±0, ±infinito, NaN (Not a Number)",
        "Subnormal numbers: números muito próximos de zero"
      ],
      examples: "Float em C (32 bits), double em C (64 bits). Valores: 1.5, -3.14159, 2.0×10³⁸. Especial: NaN para resultados inválidos (√-1)."
    },
    hints: ["IEEE 754 é para que tipo de números?", "Qual a diferença entre inteiros e números reais em computação?"]
  },
  {
    id: 4,
    question: "Nas operações lógicas binárias com cadeias de bits (bitwise operations), qual operador é selecionado para forçar o bit UM (1) em determinadas posições da cadeia?",
    code: "// Exemplo: forçar bit 3 (0-indexed)\nvalor = 00101100\nmascara = 00001000  // bit 3 = 1\nresultado = valor OR mascara = 00101100",
    options: [
      "Operador AND",
      "Operador OR",
      "Operador NOT",
      "Operador XOR"
    ],
    correct: 1,
    explanation: "OR com máscara onde bits desejados são 1 força esses bits para 1, independentemente do valor original. AND com 0 limpa bits, XOR alterna bits.",
    theoryPoints: {
      title: "Operações Bitwise",
      content: "Operações lógicas aplicadas bit-a-bit: AND (&), OR (|), XOR (^), NOT (~). Usadas para manipulação de flags, máscaras, otimização.",
      keyPoints: [
        "AND: limpa bits (máscara com 0s)",
        "OR: seta bits (máscara com 1s)",
        "XOR: alterna bits (1 alterna, 0 mantém)",
        "NOT: inverte todos os bits",
        "Deslocamentos: << (esquerda), >> (direita)"
      ],
      examples: "Setar bit 3: valor | (1 << 3)\nLimpar bit 3: valor & ~(1 << 3)\nAlternar bit 3: valor ^ (1 << 3)\nTestar bit 3: (valor & (1 << 3)) != 0"
    },
    hints: ["Qual operação com 1 resulta sempre em 1?", "Como garantir que um bit específico fique em 1?"]
  },
  {
    id: 5,
    question: "Qual é a forma mais precisa de representar o número π num computador?",
    code: "",
    options: [
      "Número inteiro sem sinal de 32 bits",
      "Número inteiro com sinal (complemento para 2) de 32 bits",
      "Número em vírgula flutuante (IEEE 754) de 32 bits",
      "Número em vírgula flutuante (IEEE 754) de 64 bits"
    ],
    correct: 3,
    explanation: "π é um número real irracional. IEEE 754 double (64 bits) tem maior precisão (~15-17 dígitos decimais) que single (32 bits, ~7-8 dígitos).",
    theoryPoints: {
      title: "Representação de Números Irracionais",
      content: "Números irracionais (π, e, √2) não têm representação exata finita em nenhuma base. Precisamos de aproximação. Mais bits = melhor aproximação.",
      keyPoints: [
        "π ≈ 3.141592653589793...",
        "Float (32 bits): ~3.1415927 (7 dígitos)",
        "Double (64 bits): ~3.141592653589793 (15 dígitos)",
        "Erro de arredondamento inevitável"
      ],
      examples: "Em C: float pi = 3.1415927f; double pi = 3.141592653589793; Em Python: pi é float de 64 bits por padrão."
    },
    hints: ["π tem infinitas casas decimais. Como aproximar?", "Qual formato tem mais precisão: 32 ou 64 bits?"]
  },
  {
    id: 6,
    question: "É necessário colocar a UM os 16 bits mais significativos de uma palavra de 32 bits, deixando os restantes 16 menos significativos inalterados. Uma solução é:",
    code: "// Palavra original: 0x12345678\n// Resultado desejado: 0xFFFF5678\n// Operação: OR com 0xFFFF0000",
    options: [
      "Aplicar 16 deslocamentos lógicos para a direita seguidos de 16 deslocamentos lógicos para a esquerda",
      "Aplicar a operação lógica AND com a máscara 0xFFFF0000",
      "Aplicar a operação lógica OR com a máscara 0xFFFF0000",
      "Aplicar a operação lógica AND com a máscara 0x0000FFFF"
    ],
    correct: 2,
    explanation: "OR com 0xFFFF0000 seta os 16 bits superiores para 1 (todos F) e mantém os inferiores inalterados (0s na máscara). AND limparia os bits inferiores.",
    theoryPoints: {
      title: "Manipulação de Bits com Máscaras",
      content: "Máscaras são padrões de bits usados para isolar, setar, limpar ou alternar bits específicos. OR seta bits onde a máscara tem 1, AND limpa onde tem 0.",
      keyPoints: [
        "Bits mais significativos: posições altas (leftmost)",
        "OR com 1 seta bit para 1",
        "AND com 0 limpa bit para 0",
        "Hexadecimal útil para máscaras: cada dígito = 4 bits"
      ],
      examples: "Setar bits 31-16: valor | 0xFFFF0000\nLimpar bits 15-0: valor & 0xFFFF0000\nExtrair bits 15-0: valor & 0x0000FFFF\nExtrair bits 31-16: (valor >> 16) & 0xFFFF"
    },
    hints: ["Qual operação 'força' bits para 1?", "Que máscara tem 1s nos 16 bits superiores e 0s nos inferiores?"]
  },
  {
    id: 7,
    question: "Utiliza-se a representação em complemento para 2:",
    code: "",
    options: [
      "para representar números com sinal em vírgula flutuante",
      "para representar números inteiros com sinal, com uma única representação do valor zero",
      "para representar números inteiros com sinal, havendo duas representações para o valor zero",
      "para representar os valores lógicos verdadeiro e falso"
    ],
    correct: 1,
    explanation: "Complemento para 2 é o padrão para representação de inteiros com sinal em computadores modernos. Tem representação única do zero e aritmética simples.",
    theoryPoints: {
      title: "Complemento para 2",
      content: "Representação de inteiros com sinal: 1) Inverter todos os bits do valor absoluto, 2) Adicionar 1. Vantagens: representação única do zero, aritmética simples (soma/subtração iguais), range simétrico em torno do zero.",
      keyPoints: [
        "Zero: 000...0 (apenas uma representação)",
        "Número negativo: complemento do positivo + 1",
        "Range: -2ⁿ⁻¹ a 2ⁿ⁻¹-1 para n bits",
        "Overflow: quando resultado excede range"
      ],
      examples: "8 bits: +5 = 00000101, -5 = 11111010 + 1 = 11111011\nSoma: 5 + (-3) = 00000101 + 11111101 = 00000010 (2) com carry ignorado."
    },
    hints: ["Quantas representações de zero existem em complemento para 2?", "Por que complemento para 2 é melhor que sinal e magnitude?"]
  },
  {
    id: 8,
    question: "Observe a representação 10001100. Se for uma representação com sinal em complemento para 2, este número é:",
    code: "// Binário: 10001100\n// Complemento para 2: bit mais significativo = 1 → negativo\n// Para achar magnitude: complementar e somar 1",
    options: [
      "Negativo",
      "Positivo",
      "Zero",
      "Impossível determinar sem mais informação"
    ],
    correct: 0,
    explanation: "Em complemento para 2, o bit mais significativo (MSB) indica sinal: 0 = positivo, 1 = negativo. 10001100 tem MSB=1, portanto é negativo.",
    theoryPoints: {
      title: "Interpretação de Complemento para 2",
      content: "Para determinar valor de número negativo em complemento 2: 1) Inverter todos os bits, 2) Somar 1, 3) Resultado é magnitude (positiva), 4) Aplicar sinal negativo.",
      keyPoints: [
        "MSB = 1 → número negativo",
        "MSB = 0 → número positivo ou zero",
        "Para negativo: magnitude = ~valor + 1",
        "10001100: MSB=1 → negativo, magnitude = 01110011 + 1 = 01110100 = 116 → valor = -116"
      ],
      examples: "10001100: inverter → 01110011, +1 → 01110100 = 116, negativo → -116\n00001100: MSB=0 → positivo = 12"
    },
    hints: ["O que o bit mais à esquerda indica em complemento para 2?", "Como converter um número negativo em complemento 2 para decimal?"]
  },
  {
    id: 9,
    question: "A conversão de um número fraccionário exacto em decimal para binário:",
    code: "// Exemplo: 0,1 (decimal) para binário\n// 0,1 × 2 = 0,2 → 0\n// 0,2 × 2 = 0,4 → 0\n// 0,4 × 2 = 0,8 → 0\n// 0,8 × 2 = 1,6 → 1\n// 0,6 × 2 = 1,2 → 1 (repetição)\n// Resultado: 0,0001100110011... (periódico)",
    options: [
      "resulta sempre num número fraccionário também exacto (sem erro)",
      "pode resultar num número binário com erro de representação",
      "só é possível para números inteiros",
      "requer conversão prévia para hexadecimal"
    ],
    correct: 1,
    explanation: "Muitas frações decimais exatas têm representação binária infinita periódica (ex: 0,1 decimal = 0,0001100110011... binário). Com bits limitados, há erro de arredondamento.",
    theoryPoints: {
      title: "Erros de Representação em Binário",
      content: "Decimal exato ≠ Binário exato. Fração decimal finita pode ser binária infinita periódica se denominador não for potência de 2. Ex: 1/10 = 0,1 decimal periódico em binário.",
      keyPoints: [
        "Decimal exato: denominador é potência de 10",
        "Binário exato: denominador é potência de 2",
        "Interseção: denominador é potência de 2 e 5 (2×5=10)",
        "1/10 = 1/(2×5) → binário infinito periódico"
      ],
      examples: "Exatos em ambos: 0,5 = 1/2 = 0,1₂; 0,25 = 1/4 = 0,01₂; 0,125 = 1/8 = 0,001₂\nPeriódico: 0,1 = 0,0001100110011...₂; 0,2 = 0,001100110011...₂"
    },
    hints: ["0,1 em decimal é exato. E em binário?", "Que frações têm representação finita em binário?"]
  },
  {
    id: 10,
    question: "É necessário colocar a zero os 16 bits menos significativos de uma palavra de 32 bits. Uma solução é:",
    code: "// Palavra original: 0xABCD1234\n// Resultado desejado: 0xABCD0000\n// Operação: AND com 0xFFFF0000",
    options: [
      "Aplicar 16 deslocamentos lógicos para a direita seguidos de 16 deslocamentos lógicos para a esquerda",
      "Aplicar a operação lógica AND com a máscara 0xFFFF0000",
      "Aplicar a operação lógica OR com a máscara 0xFFFF0000",
      "Aplicar a operação lógica XOR com a máscara 0x0000FFFF"
    ],
    correct: 1,
    explanation: "AND com 0xFFFF0000 mantém os 16 bits superiores (AND com 1) e limpa os 16 bits inferiores (AND com 0). Deslocamentos perderiam dados ou introduziriam zeros em ambos os lados.",
    theoryPoints: {
      title: "Limpeza de Bits com AND",
      content: "AND bitwise é usado para limpar (clear) bits específicos. Padrão: máscara com 0s onde quer limpar, 1s onde quer preservar. AND com 0 sempre resulta em 0, AND com 1 preserva o bit original.",
      keyPoints: [
        "Limpar bits: AND com máscara que tem 0s nessas posições",
        "Preservar bits: AND com máscara que tem 1s nessas posições",
        "Máscara para limpar bits 15-0: 0xFFFF0000",
        "Deslocamentos alternativos mas menos eficientes"
      ],
      examples: "Limpar byte baixo: valor & 0xFFFFFF00\nLimpar nibble baixo: valor & 0xFFFFFFF0\nLimpar bit 0: valor & 0xFFFFFFFE"
    },
    hints: ["Qual operação sempre produz 0 quando um operando é 0?", "Como 'zerar' bits específicos mantendo outros inalterados?"]
  },
  {
    id: 11,
    question: "A representação de um valor inteiro em binário:",
    code: "",
    options: [
      "pode não ser exacta (apresenta erro), mesmo que sejam utilizados bits suficientes",
      "requer tantos algarismos quantos a representação do mesmo valor em hexadecimal",
      "resulta sempre numa representação exacta se houver bits suficientes",
      "é sempre mais compacta que a representação decimal"
    ],
    correct: 2,
    explanation: "Inteiros podem ser representados exatamente em binário se houver bits suficientes para a magnitude. Diferente de números reais que podem ter erros de arredondamento.",
    theoryPoints: {
      title: "Representação Exata de Inteiros",
      content: "Inteiros têm representação finita em qualquer base inteira (binário, decimal, hexadecimal). N bits podem representar exatamente 2ⁿ valores distintos. Overflow ocorre se valor excede capacidade, mas dentro do range é exato.",
      keyPoints: [
        "Inteiros: representação exata possível",
        "Reais: podem exigir representação infinita",
        "Range: n bits sem sinal → 0 a 2ⁿ-1",
        "Range: n bits com sinal (comp2) → -2ⁿ⁻¹ a 2ⁿ⁻¹-1"
      ],
      examples: "Inteiro 42 em 8 bits: 00101010 (exato)\nInteiro 1000 em 16 bits: 0000001111101000 (exato)\nInteiro 10⁹ em 32 bits: cabe (exato), em 16 bits: overflow"
    },
    hints: ["Inteiros são discretos ou contínuos?", "Qual a diferença entre overflow e erro de arredondamento?"]
  },
  {
    id: 12,
    question: "Qual operador bitwise é selecionado para forçar o bit ZERO (0) em determinadas posições?",
    code: "// Exemplo: limpar bit 2\nvalor = 00101101\nmascara = 11111011  // bit 2 = 0\nresultado = valor AND mascara = 00101001",
    options: [
      "Operador AND",
      "Operador OR",
      "Operador XOR",
      "Operador NOT"
    ],
    correct: 0,
    explanation: "AND com máscara onde bits desejados são 0 força esses bits para 0, independentemente do valor original. AND com 0 sempre resulta em 0.",
    theoryPoints: {
      title: "Limpeza de Bits com AND",
      content: "Para limpar bits específicos: criar máscara com 1s em todas as posições EXCETO nas que quer limpar (onde coloca 0s). Aplicar AND bitwise.",
      keyPoints: [
        "AND com 0 → 0 (limpa)",
        "AND com 1 → preserva bit original",
        "Máscara de limpeza: bits a limpar = 0, outros = 1",
        "Máscara = ~(1 << posição) para limpar bit único"
      ],
      examples: "Limpar bit 3: valor & ~(1 << 3)\nLimpar bits 3-0: valor & 0xFFFFFFF0\nLimpar bits 7-4: valor & 0xFFFFFF0F"
    },
    hints: ["Qual operação sempre produz 0 quando um operando é 0?", "Como 'zerar' bits específicos?"]
  },
  {
    id: 13,
    question: "A representação de um qualquer valor em binário requer:",
    code: "",
    options: [
      "tantos algarismos quantos a representação do mesmo valor em hexadecimal",
      "mais algarismos que a representação decimal",
      "menos algarismos que a representação octal",
      "exatamente 8, 16, 32 ou 64 bits dependendo do tipo"
    ],
    correct: 1,
    explanation: "Binário usa apenas dígitos 0 e 1, então precisa de mais posições que decimal (0-9) ou hexadecimal (0-9,A-F) para representar o mesmo valor. Hexadecimal é mais compacto: 1 dígito hex = 4 bits.",
    theoryPoints: {
      title: "Comparação de Bases Numéricas",
      content: "Base b usa b símbolos. Para representar valor N: número de dígitos ≈ log_b(N). Base maior → menos dígitos. Binário (b=2) precisa de mais dígitos que decimal (b=10) que precisa de mais que hexadecimal (b=16).",
      keyPoints: [
        "Binário: 2 símbolos (0,1), ~3,32× dígitos vs decimal",
        "Decimal: 10 símbolos (0-9)",
        "Hexadecimal: 16 símbolos (0-9,A-F), 1 dígito = 4 bits",
        "Octal: 8 símbolos (0-7), 1 dígito = 3 bits"
      ],
      examples: "255 decimal = 11111111₂ (8 dígitos) = FF₁₆ (2 dígitos) = 377₈ (3 dígitos)\n4095 = 111111111111₂ (12 dígitos) = FFF₁₆ (3 dígitos)"
    },
    hints: ["Qual base tem mais símbolos: binário ou hexadecimal?", "Por que endereços de memória são mostrados em hex?"]
  },
  {
    id: 14,
    question: "Um número racional com representação finita em decimal:",
    code: "// Exemplo: 0,2 decimal = 1/5\n// Binário: 0,2 × 2 = 0,4 → 0\n// 0,4 × 2 = 0,8 → 0\n// 0,8 × 2 = 1,6 → 1\n// 0,6 × 2 = 1,2 → 1\n// 0,2 × 2 = 0,4 → 0 (repetição)\n// Resultado: 0,001100110011... (periódico)",
    options: [
      "é sempre convertido num número racional também com representação finita em binário",
      "pode ser convertido num número racional com representação infinita periódica em binário",
      "tem que ser convertido em número inteiro para representação binária",
      "nunca pode ser representado exatamente em computador"
    ],
    correct: 1,
    explanation: "Frações decimais finitas podem ter representação binária infinita se o denominador (na forma reduzida) tiver fatores primos diferentes de 2. Ex: 1/5 = 0,2 decimal finito, mas binário periódico.",
    theoryPoints: {
      title: "Frações em Diferentes Bases",
      content: "Fração a/b tem representação finita na base b se todos os fatores primos de b (após simplificação) estão entre os fatores primos da base. Decimal: fatores 2 e 5. Binário: apenas fator 2.",
      keyPoints: [
        "Decimal finito → denominador tem apenas fatores 2 e 5",
        "Binário finito → denominador tem apenas fator 2",
        "Decimal finito pode ser binário infinito se denominador tiver fator 5",
        "Exceção: se denominador for potência de 2 → binário finito"
      ],
      examples: "1/2 = 0,5 decimal finito = 0,1₂ binário finito\n1/5 = 0,2 decimal finito = 0,00110011...₂ binário periódico\n1/10 = 0,1 decimal finito = 0,000110011...₂ binário periódico"
    },
    hints: ["Que fatores primos tem o denominador 10?", "E o denominador 8?"]
  },
  {
    id: 15,
    question: "O operador XOR em operações bitwise:",
    code: "// XOR: 1 se bits diferentes, 0 se iguais\n// 0 XOR 0 = 0\n// 0 XOR 1 = 1\n// 1 XOR 0 = 1\n// 1 XOR 1 = 0",
    options: [
      "força o bit UM (1) em determinadas posições",
      "força o bit ZERO (0) em determinadas posições",
      "alterna (inverte) bits em determinadas posições",
      "preserva os bits originais"
    ],
    correct: 2,
    explanation: "XOR com 1 inverte o bit (0→1, 1→0), XOR com 0 preserva o bit. Usado para alternar (toggle) bits específicos.",
    theoryPoints: {
      title: "Operação XOR (OU Exclusivo)",
      content: "XOR retorna 1 se os bits de entrada forem diferentes, 0 se forem iguais. Propriedades: A XOR A = 0, A XOR 0 = A, A XOR 1 = NOT A. Usado em criptografia, checksums, gráficos.",
      keyPoints: [
        "XOR com 1: inverte bit",
        "XOR com 0: mantém bit",
        "Auto-inverso: (A XOR B) XOR B = A",
        "Troca sem variável temporária: a = a XOR b; b = a XOR b; a = a XOR b"
      ],
      examples: "Alternar bit 3: valor ^ (1 << 3)\nChecksum simples: XOR de todos os bytes\nMascaramento: valor ^ máscara inverte bits onde máscara tem 1"
    },
    hints: ["O que XOR faz quando um operando é 1?", "Como inverter um bit específico?"]
  }
];

export default ex3;