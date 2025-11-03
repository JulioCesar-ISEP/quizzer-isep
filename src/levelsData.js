// levelsData.js - Dados Completos dos Níveis de Treinamento ARQCP
// Este arquivo contém toda a estrutura de níveis, teoria e exercícios

export const levels = [
    {
        id: 1,
        name: "Fundamentos: Memória e Endereços",
        icon: "Brain",
        color: "bg-blue-500",
        description: "Base essencial: Como o computador organiza dados na memória",
        theory: {
            title: "📚 Teoria: Modelo de Memória - Fundamentos Essenciais",
            content: `
**🎯 OBJETIVO DO NÍVEL:**
Compreender a memória como um array linear de bytes e dominar os conceitos de endereçamento e ponteiros.

**1. MEMÓRIA COMO ARRAY LINEAR:**
┌─────────────────────────────────────────────────────────┐
│ A memória RAM é uma sequência CONTÍNUA de bytes         │
│ Cada byte possui um ENDEREÇO único (como numeração de   │
│ casas numa rua)                                         │
│ Endereços em RV32: 32 bits = 0x00000000 a 0xFFFFFFFF    │
└─────────────────────────────────────────────────────────┘

**2. TIPOS DE DADOS E SEUS TAMANHOS (RV32):**
┌─────────────────┬──────────┬──────────┬─────────────────────────┐
│ Tipo            │ Bytes    │ Bits     │ Faixa de Valores        │
├─────────────────┼──────────┼──────────┼─────────────────────────┤
│ char            │ 1        │ 8        │ -128 a 127              │
│ unsigned char   │ 1        │ 8        │ 0 a 255                 │
│ short           │ 2        │ 16       │ -32,768 a 32,767        │
│ unsigned short  │ 2        │ 16       │ 0 a 65,535              │
│ int             │ 4        │ 32       │ -2³¹ a 2³¹-1            │
│ unsigned int    │ 4        │ 32       │ 0 a 4,294,967,295       │
│ float           │ 4        │ 32       │ IEEE 754                │
│ ponteiro (*)    │ 4        │ 32       │ 0x00000000-0xFFFFFFFF   │
└─────────────────┴──────────┴──────────┴─────────────────────────┘

**3. OPERADOR & (ADDRESS-OF) - OBTENDO ENDEREÇOS:**
int x = 42;        // x armazena o VALOR 42 em algum lugar da memória
int *p = &x;       // p armazena o ENDEREÇO onde x está guardado

EXEMPLO PRÁTICO:
┌───────────┬─────────┬─────────────────────────────────┐
│ Endereço  │ Valor   │ Descrição                       │
├───────────┼─────────┼─────────────────────────────────┤
│ 0x1000    │ 42      │ ← variável x está aqui          │
│ 0x1004    │ 0x1000  │ ← ponteiro p aponta para x      │
└───────────┴─────────┴─────────────────────────────────┘

**4. ARITMÉTICA DE PONTEIROS - CÁLCULO AUTOMÁTICO:**
int arr[3];        // Suponha: arr começa em 0x1000

CÁLCULOS:
&arr[0] = 0x1000 + (0 × 4) = 0x1000
&arr[1] = 0x1000 + (1 × 4) = 0x1004  (+4 bytes)
&arr[2] = 0x1000 + (2 × 4) = 0x1008  (+8 bytes)

**📝 REGRA FUNDAMENTAL:**
ptr + n = ptr + (n × sizeof(tipo_apontado))

**5. DECAIMENTO DE ARRAY (ARRAY DECAY):**
int arr[5];
printf("%p", arr);      // Equivale a &arr[0]
printf("%p", &arr[0]);  // Explícito

Ambos produzem o MESMO endereço! O nome do array "decai" para ponteiro.
`,
            visual: `
┌─────────────────────────────────────────────────────────┐
│          VISUALIZAÇÃO DA MEMÓRIA RAM                    │
├──────────┬──────────────────────────────────────────────┤
│ Endereço │ Conteúdo (4 bytes = 1 int)                   │
├──────────┼──────────────────────────────────────────────┤
│ 0x1000   │ [42]   [00]   [00]   [00]  ← int x = 42      │
│ 0x1004   │ [00]   [01]   [00]   [00]  ← int y = 256     │
│ 0x1008   │ [0x00] [0x00] [0x10] [0x00] ← ptr = 0x1000   │
│ 0x100C   │ [FF]   [FF]   [FF]   [FF]  ← int = -1        │
└──────────┴──────────────────────────────────────────────┘

LEGENDA:
• Cada linha = 4 bytes (1 int)
• Endereços aumentam de 4 em 4 bytes
• [XX] representa 1 byte em hexadecimal
`,
            keyPoints: [
                "Memória = array linear de bytes com endereços únicos",
                "sizeof(int) = 4 bytes SEMPRE em RV32",
                "&variavel → retorna ENDEREÇO, *ponteiro → acessa VALOR",
                "Arrays decaem para ponteiros quando usados em expressões"
            ]
        },
        exercises: [
            // EXERCÍCIOS ORIGINAIS (8 questões)
            {
                question: "Onde está armazenado fisicamente o VALOR 42?",
                code: `int x = 42;
int *p = &x;

// Assumindo que x está alocado no endereço 0x2000`,
                options: [
                    "No ponteiro p (que contém 0x2000)",
                    "No endereço de memória 0x2000",
                    "No endereço &p (onde p está guardado)",
                    "Em nenhum lugar físico, é apenas uma abstração"
                ],
                correct: 1,
                explanation: "A variável x está fisicamente armazenada no endereço 0x2000, onde o valor 42 reside na RAM. O ponteiro p contém 0x2000 (o endereço de x), mas não o valor 42 em si.",
                theory: "Distinção fundamental: VALOR vs ENDEREÇO. x = valor, &x = endereço, p = endereço, *p = valor",
                prerequisite: "Cada variável ocupa espaço físico na RAM com endereço único",
                difficulty: "Iniciante",
                timeEstimate: "1 minuto"
            },
            {
                question: "Qual a declaração CORRETA para armazenar um endereço de memória?",
                code: `int numero = 100;
// Quero guardar onde 'numero' está na memória`,
                options: [
                    "int endereco = numero;",
                    "int *endereco = &numero;",
                    "int endereco = &numero;",
                    "int *endereco = numero;"
                ],
                correct: 1,
                explanation: "Ponteiros (int*) armazenam endereços. Usamos & para obter o endereço de uma variável. A sintaxe correta é: TIPO *nome_ponteiro = &variavel;",
                theory: "Sintaxe de ponteiros: TIPO *nome = &variavel; → 'nome' é ponteiro para TIPO",
                prerequisite: "Operador & retorna endereço, operador * declara ponteiro",
                difficulty: "Iniciante",
                timeEstimate: "1 minuto"
            },
            {
                question: "Se arr[0] está em 0x1000, onde está arr[2]?",
                code: `unsigned int arr[5];
// arr[0] está no endereço 0x1000
// Qual endereço de arr[2]?`,
                options: [
                    "0x1002",
                    "0x1004", 
                    "0x1008",
                    "0x100C"
                ],
                correct: 2,
                explanation: "arr[2] = arr[0] + (2 × sizeof(unsigned int)) = 0x1000 + (2 × 4) = 0x1000 + 8 = 0x1008. Cada unsigned int ocupa 4 bytes em RV32.",
                theory: "Cálculo de endereço: endereço_base + (índice × sizeof(tipo))",
                prerequisite: "sizeof(unsigned int) = 4 bytes em RV32",
                difficulty: "Iniciante", 
                timeEstimate: "2 minutos"
            },
            {
                question: "Qual a diferença fundamental entre arr e &arr[0]?",
                code: `int arr[10];
printf("%p", arr);
printf("%p", &arr[0]);`,
                options: [
                    "arr é o array inteiro, &arr[0] é apenas o primeiro elemento",
                    "São endereços completamente diferentes",
                    "São semanticamente diferentes mas numericamente iguais", 
                    "arr é inválido, só &arr[0] funciona em C"
                ],
                correct: 2,
                explanation: "Ambos produzem exatamente o MESMO valor numérico (endereço), mas arr representa o 'array decay' - o nome do array automaticamente se converte para ponteiro para o primeiro elemento.",
                theory: "Array decay: int arr[] → int* quando usado como valor ou argumento de função",
                prerequisite: "Arrays e ponteiros são conceitos intimamente relacionados em C",
                difficulty: "Intermediário",
                timeEstimate: "2 minutos"
            },
            {
                question: "O que será impresso por este código?",
                code: `int x = 50;
int *p = &x;
printf("%d", *p);`,
                options: [
                    "50",
                    "Endereço de x em decimal", 
                    "Endereço de p em decimal",
                    "Erro de compilação"
                ],
                correct: 0,
                explanation: "*p desreferencia o ponteiro, acessando o VALOR armazenado no endereço que p contém. Como p aponta para x, *p acessa o valor 50.",
                theory: "Desreferenciação: *ptr acessa o valor no endereço armazenado em ptr",
                prerequisite: "Operador * tem dois usos: declaração (int *p) e acesso/desreferenciação (*p)",
                difficulty: "Iniciante",
                timeEstimate: "1 minuto"
            },
            {
                question: "Se p = 0x1000 e sizeof(int) = 4, quanto vale p + 3?",
                code: `int *p = (int*)0x1000;
int *resultado = p + 3;`,
                options: [
                    "0x1003",
                    "0x100C", 
                    "0x1012",
                    "Erro: não se pode somar ponteiros"
                ],
                correct: 1,
                explanation: "p + 3 = 0x1000 + (3 × sizeof(int)) = 0x1000 + (3 × 4) = 0x1000 + 12 = 0x100C. A aritmética de ponteiros considera automaticamente o tamanho do tipo apontado.",
                theory: "Ponteiros 'sabem' seu tipo: incremento automático pelo sizeof(tipo_apontado)",
                prerequisite: "Compilador ajusta automaticamente a aritmética baseada no tipo apontado",
                difficulty: "Intermediário",
                timeEstimate: "2 minutos"
            },
            {
                question: "Quantos bytes são alocados para este array?",
                code: `unsigned int sensors[8];
// Total de bytes alocados?`,
                options: [
                    "8 bytes (1 por elemento)",
                    "16 bytes (2 por elemento)", 
                    "32 bytes (4 por elemento)",
                    "64 bytes (8 por elemento)"
                ],
                correct: 2,
                explanation: "8 elementos × sizeof(unsigned int) = 8 × 4 = 32 bytes. Arrays são blocos contíguos de memória.",
                theory: "sizeof(array) = número_elementos × sizeof(tipo_elemento)",
                prerequisite: "Arrays são alocados como blocos contínuos de memória",
                difficulty: "Iniciante",
                timeEstimate: "1 minuto"
            },
            {
                question: "Qual destas operações modifica o valor de x?",
                code: `int x = 10;
int *p = &x;`,
                options: [
                    "p = 20;",
                    "*p = 20;", 
                    "&x = 20;",
                    "x = p;"
                ],
                correct: 1,
                explanation: "*p = 20; desreferencia o ponteiro p (que aponta para x) e modifica o valor no endereço apontado, alterando x para 20.",
                theory: "Modificação via ponteiro: *ptr = valor altera a variável apontada",
                prerequisite: "Ponteiros permitem acesso de leitura e escrita à memória",
                difficulty: "Iniciante",
                timeEstimate: "2 minutos"
            },

            // NOVOS EXERCÍCIOS EXPANDIDOS (12 questões adicionais)
            {
                question: "Qual é a diferença entre estes dois ponteiros?",
                code: `char *p1 = (char*)0x1000;
int *p2 = (int*)0x1000;

// Ambos apontam para 0x1000
// Qual o valor de (p1 + 1) e (p2 + 1)?`,
                options: [
                    "Ambos valem 0x1001",
                    "p1+1 = 0x1001, p2+1 = 0x1001",
                    "p1+1 = 0x1001, p2+1 = 0x1004",
                    "Ambos valem 0x1004"
                ],
                correct: 2,
                explanation: "p1+1 = 0x1000 + (1×1) = 0x1001 (char = 1 byte). p2+1 = 0x1000 + (1×4) = 0x1004 (int = 4 bytes). O tipo do ponteiro determina o tamanho do incremento.",
                theory: "Aritmética de ponteiros depende do TIPO: ptr + n = ptr + (n × sizeof(tipo))",
                prerequisite: "Diferentes tipos têm diferentes tamanhos, afetando a aritmética",
                difficulty: "Intermediário",
                timeEstimate: "3 minutos"
            },
            {
                question: "Analise este código. O que acontece?",
                code: `int arr[5] = {10, 20, 30, 40, 50};
int *p = arr;
p = p + 2;
*p = 99;

// Qual o valor de arr[2] agora?`,
                options: [
                    "30 (valor original)",
                    "99 (foi modificado)",
                    "20 (p aponta para arr[1])",
                    "Erro: não pode modificar array via ponteiro"
                ],
                correct: 1,
                explanation: "p = arr faz p apontar para arr[0]. p = p + 2 faz p apontar para arr[2]. *p = 99 modifica o valor em arr[2] para 99. Ponteiros permitem modificação de arrays.",
                theory: "Ponteiros e arrays: modificações via ponteiro afetam o array original",
                prerequisite: "Arrays são mutáveis através de ponteiros",
                difficulty: "Intermediário",
                timeEstimate: "3 minutos"
            },
            {
                question: "Quantos bytes separam arr[0] de arr[7]?",
                code: `short arr[10];
// arr[0] está em 0x2000
// Quantos bytes até arr[7]?`,
                options: [
                    "7 bytes",
                    "14 bytes",
                    "28 bytes",
                    "70 bytes"
                ],
                correct: 1,
                explanation: "short ocupa 2 bytes. Distância = 7 × sizeof(short) = 7 × 2 = 14 bytes. arr[7] está em 0x2000 + 14 = 0x200E.",
                theory: "Distância entre elementos: (índice_final - índice_inicial) × sizeof(tipo)",
                prerequisite: "sizeof(short) = 2 bytes em RV32",
                difficulty: "Intermediário",
                timeEstimate: "2 minutos"
            },
            {
                question: "Este código compila? Por quê?",
                code: `int x = 100;
int *p = &x;
&p = &x;  // Esta linha é válida?`,
                options: [
                    "Sim, está atribuindo o endereço de x a p",
                    "Não, & não pode aparecer no lado esquerdo",
                    "Sim, mas é redundante",
                    "Não, p já aponta para x"
                ],
                correct: 1,
                explanation: "&p retorna o endereço DE p (um lvalue temporário), não pode ser usado como destino de atribuição. & só funciona no lado DIREITO (rvalue). Correto seria: p = &x;",
                theory: "Operador & produz rvalue (valor temporário), não lvalue (locação de memória)",
                prerequisite: "Lvalues podem ser atribuídos, rvalues são apenas lidos",
                difficulty: "Avançado",
                timeEstimate: "3 minutos"
            },
            {
                question: "Qual a relação entre estes valores?",
                code: `int arr[4];
printf("arr     = %p\\n", arr);
printf("&arr    = %p\\n", &arr);
printf("&arr[0] = %p\\n", &arr[0]);

// Quais são iguais numericamente?`,
                options: [
                    "Apenas arr e &arr[0]",
                    "Apenas &arr e &arr[0]",
                    "Todos os três são numericamente iguais",
                    "Nenhum é igual"
                ],
                correct: 2,
                explanation: "Todos produzem o MESMO ENDEREÇO numericamente! Mas semanticamente: arr (decay para int*), &arr (ponteiro para array int[4]), &arr[0] (ponteiro para int). Tipos diferentes, mesmo valor.",
                theory: "arr, &arr e &arr[0] têm o mesmo valor mas TIPOS diferentes",
                prerequisite: "&arr tem tipo int(*)[4], arr e &arr[0] têm tipo int*",
                difficulty: "Avançado",
                timeEstimate: "4 minutos"
            },
            {
                question: "O que este código imprime?",
                code: `unsigned char buffer[6] = {0x41, 0x42, 0x43, 0x44, 0x45, 0x00};
char *str = (char*)buffer;
printf("%s", str);`,
                options: [
                    "ABCDE",
                    "414243444500",
                    "Buffer de 6 bytes",
                    "Erro de segmentação"
                ],
                correct: 0,
                explanation: "0x41='A', 0x42='B', 0x43='C', 0x44='D', 0x45='E', 0x00='\\0' (terminador). %s interpreta como string ASCII, imprimindo ABCDE. Arrays de bytes podem representar strings.",
                theory: "Chars podem ser interpretados como ASCII. Strings terminam em \\0 (byte zero)",
                prerequisite: "Correspondência hex-ASCII: 0x41='A', 0x42='B', etc.",
                difficulty: "Intermediário",
                timeEstimate: "3 minutos"
            },
            {
                question: "Qual expressão retorna o TAMANHO TOTAL do array em bytes?",
                code: `int data[20];
// Queremos saber: quantos bytes data ocupa?`,
                options: [
                    "sizeof(data)",
                    "sizeof(data[0]) * 20",
                    "strlen(data)",
                    "Tanto A quanto B estão corretos"
                ],
                correct: 3,
                explanation: "sizeof(data) retorna tamanho total (20×4=80 bytes). sizeof(data[0])×20 também = 4×20 = 80 bytes. Ambas funcionam. strlen() é para strings, não arrays numéricos.",
                theory: "sizeof(array) retorna bytes totais, sizeof(elemento)×contagem também funciona",
                prerequisite: "sizeof() é avaliado em tempo de compilação para arrays",
                difficulty: "Intermediário",
                timeEstimate: "2 minutos"
            },
            {
                question: "Ponteiros podem apontar para outros ponteiros?",
                code: `int x = 42;
int *p = &x;
int **pp = &p;

// O que **pp retorna?`,
                options: [
                    "Endereço de x",
                    "Endereço de p",
                    "Valor 42",
                    "Erro: ponteiro duplo inválido"
                ],
                correct: 2,
                explanation: "pp aponta para p, que aponta para x. *pp desreferencia para obter p (endereço de x). **pp desreferencia novamente para obter o valor de x = 42. Ponteiros multinível são válidos.",
                theory: "Ponteiros para ponteiros: int **pp significa 'ponteiro para ponteiro para int'",
                prerequisite: "Cada * adiciona um nível de indireção",
                difficulty: "Avançado",
                timeEstimate: "4 minutos"
            },
            {
                question: "Qual a diferença entre estas duas linhas?",
                code: `int arr[10];
int *ptr = arr;

// Qual operação é INVÁLIDA?`,
                options: [
                    "arr = arr + 1; (inválida)",
                    "ptr = ptr + 1; (inválida)",
                    "arr[5] = 100; (inválida)",
                    "Todas são válidas"
                ],
                correct: 0,
                explanation: "arr é constante (não pode ser modificado), mas ptr é variável. arr = arr + 1 é ERRO de compilação. ptr = ptr + 1 é válido. Arrays não podem ser reatribuídos, ponteiros sim.",
                theory: "Arrays são ponteiros CONSTANTES, ponteiros normais são VARIÁVEIS",
                prerequisite: "Nome do array é endereço fixo, não pode mudar",
                difficulty: "Avançado",
                timeEstimate: "3 minutos"
            },
            {
                question: "Analise este cenário de memória mista:",
                code: `// Memória em 0x3000:
char c = 'X';       // 0x3000: 1 byte
short s = 256;      // 0x3002: 2 bytes (alinhado)
int i = 1000;       // 0x3004: 4 bytes

// Quanto espaço total foi usado?`,
                options: [
                    "7 bytes (1+2+4)",
                    "8 bytes (com alinhamento)",
                    "12 bytes (todos alinhados em 4)",
                    "Depende da arquitetura"
                ],
                correct: 1,
                explanation: "c=1 byte (0x3000), padding de 1 byte (0x3001), s=2 bytes (0x3002-0x3003), i=4 bytes (0x3004-0x3007). Total = 8 bytes devido ao alinhamento de memória.",
                theory: "Compilador adiciona padding para alinhar tipos em endereços apropriados",
                prerequisite: "short alinha em múltiplos de 2, int em múltiplos de 4",
                difficulty: "Avançado",
                timeEstimate: "4 minutos"
            },
            {
                question: "Qual destas operações com ponteiros é PERIGOSA mas tecnicamente válida?",
                code: `int arr[5] = {1, 2, 3, 4, 5};
int *p = arr;`,
                options: [
                    "p = p + 10; (acessa além do array)",
                    "p = NULL; (ponteiro nulo)",
                    "*p = 999; (modifica arr[0])",
                    "p = &arr[2]; (aponta para meio do array)"
                ],
                correct: 0,
                explanation: "p + 10 move o ponteiro além do fim do array (undefined behavior). É válido sintaticamente mas PERIGOSO - acessa memória não alocada, pode causar crashes. Outras opções são seguras.",
                theory: "Aritmética de ponteiros além dos limites = comportamento indefinido (undefined behavior)",
                prerequisite: "Acessar memória fora dos limites alocados é bug grave",
                difficulty: "Avançado",
                timeEstimate: "3 minutos"
            },
            {
                question: "Desafio final: O que este código complexo faz?",
                code: `int matrix[3][4];  // matriz 3x4
int *flat = (int*)matrix;

// matrix[2][3] é o mesmo que flat[?]`,
                options: [
                    "flat[5]",
                    "flat[7]",
                    "flat[11]",
                    "flat[23]"
                ],
                correct: 2,
                explanation: "Matriz é armazenada linearmente: linha 0 (índices 0-3), linha 1 (índices 4-7), linha 2 (índices 8-11). matrix[2][3] = linha 2, coluna 3 = flat[2×4 + 3] = flat[11].",
                theory: "Matrizes 2D são arrays 1D 'disfarçados': índice = linha×colunas + coluna",
                prerequisite: "Matrizes multidimensionais são contíguas em memória (row-major order)",
                difficulty: "Avançado",
                timeEstimate: "5 minutos"
            }
        ]
    },
    {
        id: 2,
        name: "Representação: Bytes e Hexadecimal", 
        icon: "Code",
        color: "bg-green-500",
        description: "Como dados são realmente armazenados: binário, hexadecimal e bytes",
        theory: {
            title: "📚 Teoria: Sistemas Numéricos e Representação em Memória",
            content: `
**🎯 OBJETIVO DO NÍVEL:**
Dominar hexadecimal, entender little-endian e converter entre representações.

**1. SISTEMAS NUMÉRICOS COMPARADOS:**
┌──────────┬──────────────┬────────────────┬────────────────────┐
│ Decimal  │ Binário      │ Hexadecimal    │ Significado        │
├──────────┼──────────────┼────────────────┼────────────────────┤
│ 0        │ 0000 0000    │ 0x00           │ Mínimo valor       │
│ 10       │ 0000 1010    │ 0x0A           │                    │
│ 15       │ 0000 1111    │ 0x0F           │ Máximo 1 dígito hex│
│ 16       │ 0001 0000    │ 0x10           │ "Carry" hexadecimal│
│ 32       │ 0010 0000    │ 0x20           │ LIMITE DO EXAME!   │
│ 127      │ 0111 1111    │ 0x7F           │ Máximo signed char │
│ 128      │ 1000 0000    │ 0x80           │ Mínimo negativo    │
│ 255      │ 1111 1111    │ 0xFF           │ Máximo 1 byte      │
└──────────┴──────────────┴────────────────┴────────────────────┘

**2. POR QUE HEXADECIMAL É IDEAL PARA MEMÓRIA?**
- 1 byte = 8 bits = exatamente 2 dígitos hex (0x00 a 0xFF)
- Muito mais compacto: 0xFF vs "11111111"
- Alinhado com arquitetura: cada dígito hex = 4 bits (nibble)
- Fácil conversão mental

**3. CONVERSÃO HEX ↔ DECIMAL - MÉTODO PRÁTICO:**
0x2A = (2 × 16) + (10 × 1) = 32 + 10 = 42
0xFE = (15 × 16) + (14 × 1) = 240 + 14 = 254  
0x100 = (1 × 256) + (0 × 16) + (0 × 1) = 256

**MÉTODO RÁPIDO:** Lembre-se das potências de 16: 1, 16, 256, 4096...

**4. UNSIGNED INT (32 BITS = 4 BYTES):**
┌──────────┬──────────┬──────────┬──────────┐
│ Byte 3   │ Byte 2   │ Byte 1   │ Byte 0   │
│ (MSB)    │          │          │ (LSB)    │
├──────────┼──────────┼──────────┼──────────┤
│ 0xAA     │ 0xBB     │ 0xCC     │ 0xDD     │
└──────────┴──────────┴──────────┴──────────┘
Notação compacta: 0xAABBCCDD

**5. LITTLE-ENDIAN (ARQUITETURA RV32):**
VALOR: 0xAABBCCDD

MEMÓRIA (ordem little-endian):
┌──────────┬─────────────────────────────┐
│ Endereço │ Byte                        │
├──────────┼─────────────────────────────┤
│ 0x1000   │ 0xDD  ← LSB (menos sig.)    │
│ 0x1001   │ 0xCC                        │
│ 0x1002   │ 0xBB                        │
│ 0x1003   │ 0xAA  ← MSB (mais sig.)     │
└──────────┴─────────────────────────────┘

**REGRA MNEMÔNICA:** "Little-endian = byte PEQUENO (LSB) primeiro"
`,
            visual: `
┌─────────────────────────────────────────────────────────┐
│        EXEMPLO PRÁTICO: 0x1F2A3B4C NA MEMÓRIA           │
├──────────┬──────────────┬───────────────────────────────┤
│ Endereço │ Byte         │ Descrição                     │
├──────────┼──────────────┼───────────────────────────────┤
│ 0x1000   │ 0x4C         │ ← LSB (Least Significant)     │
│ 0x1001   │ 0x3B         │                               │
│ 0x1002   │ 0x2A         │                               │
│ 0x1003   │ 0x1F         │ ← MSB (Most Significant)      │
└──────────┴──────────────┴───────────────────────────────┘

CONVERSÃO PARA LITTLE-ENDIAN:
Valor:   0x 1F 2A 3B 4C
Memória: [4C] [3B] [2A] [1F]  (ordem invertida!)

┌─────────────────────────────────────────────────────────┐
│            COMPARAÇÃO ENDIANNESS                        │
├──────────────────┬──────────────────┬───────────────────┤
│ Big-Endian       │ Little-Endian    │ Arquitetura       │
├──────────────────┼──────────────────┼───────────────────┤
│ 0x1F 2A 3B 4C    │ 0x4C 3B 2A 1F    │ RV32 (RISC-V)     │
│ (ordem natural)  │ (ordem invertida)│ x86, ARM          │
└──────────────────┴──────────────────┴───────────────────┘
`,
            keyPoints: [
                "1 byte = 8 bits = 2 dígitos hex (0x00-0xFF)",
                "Little-endian: LSB no menor endereço (RV32 usa isso!)", 
                "0x20 = 32 decimal → LIMITE IMPORTANTE DO EXAME",
                "MSB = byte mais significativo, LSB = byte menos significativo"
            ]
        },
        exercises: [
            // EXERCÍCIOS ORIGINAIS (10 questões)
            {
                question: "Quanto vale 0x20 em decimal?",
                code: `unsigned char limite = 0x20;
// Valor decimal equivalente?`,
                options: [
                    "20",
                    "32", 
                    "200", 
                    "16"
                ],
                correct: 1,
                explanation: "0x20 = 2×16¹ + 0×16⁰ = 32 + 0 = 32 em decimal. Este é o limite crítico usado no exame ARQCP!",
                theory: "Conversão básica hexadecimal: 0x20 = 2 'dezesseis' = 32 decimal",
                prerequisite: "Sistema hexadecimal: cada dígito vale 16 vezes mais que o dígito à direita",
                difficulty: "Iniciante",
                timeEstimate: "1 minuto"
            },
            {
                question: "Qual byte está ABAIXO do limite 0x20?",
                code: `unsigned char bytes[] = {0x30, 0x1F, 0x20, 0x21};
// Qual índice tem valor < 0x20?`,
                options: [
                    "bytes[0] (0x30 = 48)",
                    "bytes[1] (0x1F = 31)", 
                    "bytes[2] (0x20 = 32)",
                    "bytes[3] (0x21 = 33)"
                ],
                correct: 1,
                explanation: "0x1F = 31 decimal, que é menor que 0x20 = 32 decimal. Apenas bytes[1] está abaixo do limite crítico.",
                theory: "Comparação: 0x1F < 0x20 < 0x21 → 31 < 32 < 33",
                prerequisite: "Comparar valores hexadecimais é como comparar decimais",
                difficulty: "Iniciante", 
                timeEstimate: "2 minutos"
            },
            {
                question: "Quantos bytes ocupa um unsigned int em RV32?",
                code: `unsigned int value;
sizeof(value) = ?`,
                options: [
                    "1 byte (8 bits)",
                    "2 bytes (16 bits)", 
                    "4 bytes (32 bits)", 
                    "8 bytes (64 bits)"
                ],
                correct: 2,
                explanation: "Em RV32, int e unsigned int têm SEMPRE 4 bytes (32 bits). Isso é fixo na arquitetura e nunca muda!",
                theory: "RV32: inteiros sempre 32 bits = 4 bytes = 8 dígitos hexadecimais",
                prerequisite: "32 bits ÷ 8 bits/byte = 4 bytes por inteiro",
                difficulty: "Iniciante",
                timeEstimate: "1 minuto"
            },
            {
                question: "Qual a ordem dos bytes de 0x12345678 em little-endian?",
                code: `unsigned int x = 0x12345678;
unsigned char *p = (unsigned char*)&x;
// Ordem na memória: p[0], p[1], p[2], p[3] = ?`,
                options: [
                    "0x12, 0x34, 0x56, 0x78 (big-endian)",
                    "0x78, 0x56, 0x34, 0x12 (little-endian)", 
                    "0x34, 0x12, 0x78, 0x56",
                    "0x56, 0x78, 0x12, 0x34"
                ],
                correct: 1,
                explanation: "Little-endian: byte MENOS significativo (mais à direita) primeiro. 0x78 no menor endereço, depois 0x56, 0x34, 0x12.",
                theory: "Little-endian: ordem dos bytes é INVERTIDA na memória em relação à notação escrita",
                prerequisite: "LSB (least significant byte) = byte mais à direita na notação hexadecimal",
                difficulty: "Intermediário",
                timeEstimate: "2 minutos"
            },
            {
                question: "Se quero verificar se byte < 0xFE, qual comparação usar?",
                code: `unsigned char sensor = 0xFA;
// Verificar se valor < 0xFE`,
                options: [
                    "if (sensor < 254)",
                    "if (sensor < 0xFE)", 
                    "Ambas estão corretas", 
                    "Preciso converter para binário primeiro"
                ],
                correct: 2,
                explanation: "0xFE = 254 decimal. Em C, pode comparar usando hexadecimal OU decimal - o compilador converte internamente. 0xFE é mais legível para manipulação de bytes.",
                theory: "Constantes hexadecimais e decimais são intercambiáveis em comparações C",
                prerequisite: "Compilador converte tudo para binário internamente antes de comparar",
                difficulty: "Iniciante",
                timeEstimate: "1 minuto"
            },
            {
                question: "Quanto vale o byte mais significativo (MSB) de 0xABCD1234?",
                code: `unsigned int data = 0xABCD1234;
// MSB = Most Significant Byte = ?`,
                options: [
                    "0x12",
                    "0x34", 
                    "0xAB", 
                    "0xCD"
                ],
                correct: 2,
                explanation: "MSB (Most Significant Byte) é o byte mais à ESQUERDA na notação: 0xAB. Em little-endian, este byte fica no MAIOR endereço da memória.",
                theory: "MSB = byte esquerdo (mais significativo), LSB = byte direito (menos significativo)",
                prerequisite: "Notação 0xAABBCCDD: AA=MSB, BB, CC, DD=LSB",
                difficulty: "Intermediário",
                timeEstimate: "2 minutos"
            },
            {
                question: "Qual valor hexadecimal representa 100 em decimal?",
                code: `unsigned char limite = 100;
// Representação hexadecimal?`,
                options: [
                    "0x64", 
                    "0x100", 
                    "0xA0", 
                    "0x46"
                ],
                correct: 0,
                explanation: "100 ÷ 16 = 6 resto 4 → 0x64. Método: dividir sucessivamente por 16, restos dão os dígitos hex da direita para esquerda.",
                theory: "Conversão decimal→hex: 100 = 6×16 + 4 = 0x64",
                prerequisite: "Divisão por 16 revela dígitos hexadecimais (quociente e resto)",
                difficulty: "Iniciante",
                timeEstimate: "2 minutos"
            },
            {
                question: "Quantos valores distintos cabem em 1 byte?",
                code: `unsigned char byte;
// Quantos valores possíveis?`,
                options: [
                    "128 (de -128 a 127)",
                    "255 (de 0 a 255)", 
                    "256 (de 0 a 255)", 
                    "512 (de 0 a 511)"
                ],
                correct: 2,
                explanation: "1 byte = 8 bits = 2⁸ = 256 valores possíveis (0 a 255). Inclui o zero! Para unsigned char: 0x00 (0) até 0xFF (255).",
                theory: "n bits → 2ⁿ valores possíveis. Para unsigned: 0 a 2ⁿ-1",
                prerequisite: "unsigned char: 0x00 (0) até 0xFF (255) = 256 valores distintos",
                difficulty: "Iniciante",
                timeEstimate: "1 minuto"
            },
            {
                question: "Se 0x1F < limite, quanto vale limite no MÍNIMO?",
                code: `if (0x1F < limite) {
    // limite deve ser pelo menos...
}`,
                options: [
                    "0x1E (30)",
                    "0x1F (31)", 
                    "0x20 (32)", 
                    "0x21 (33)"
                ],
                correct: 2,
                explanation: "0x1F < limite significa limite > 0x1F. O menor valor que satisfaz é 0x20 (32), pois 0x1F < 0x20 é verdadeiro.",
                theory: "Operador < é exclusivo: x < y ⟹ y ≥ x+1 (para inteiros)",
                prerequisite: "0x1F = 31 decimal, então limite ≥ 32 = 0x20",
                difficulty: "Intermediário",
                timeEstimate: "2 minutos"
            },
            {
                question: "Qual valor é MAIOR: 0x0F ou 0x10?",
                code: `unsigned char a = 0x0F;
unsigned char b = 0x10;
// Qual é maior?`,
                options: [
                    "0x0F (15)",
                    "0x10 (16)", 
                    "São iguais",
                    "Depende do endianness"
                ],
                correct: 1,
                explanation: "0x0F = 15 decimal, 0x10 = 16 decimal. Em hexadecimal, assim como em decimal, valores com mais dígitos à esquerda são maiores.",
                theory: "Comparação hexadecimal segue mesma lógica que decimal",
                prerequisite: "0x10 = 1×16 + 0 = 16, que é maior que 15",
                difficulty: "Iniciante",
                timeEstimate: "1 minuto"
            },
            {
                question: "Qual o LSB (byte menos significativo) de 0x9A7B3C1D?",
                code: `unsigned int valor = 0x9A7B3C1D;
// LSB (Least Significant Byte) = ?`,
                options: [
                    "0x9A",
                    "0x7B",
                    "0x3C",
                    "0x1D"
                ],
                correct: 3,
                explanation: "LSB é sempre o byte mais à DIREITA na notação: 0x1D. Em little-endian, este byte fica no MENOR endereço da memória.",
                theory: "LSB = byte mais à direita, ocupa o menor endereço em little-endian",
                prerequisite: "Notação 0xAABBCCDD: DD = LSB (último byte)",
                difficulty: "Iniciante",
                timeEstimate: "1 minuto"
            },
            {
                question: "Se p[0]=0xAB, p[1]=0xCD, p[2]=0xEF, p[3]=0x12, qual o valor do unsigned int em little-endian?",
                code: `unsigned char p[4] = {0xAB, 0xCD, 0xEF, 0x12};
unsigned int *value = (unsigned int*)p;
// *value = ?`,
                options: [
                    "0xABCDEF12",
                    "0x12EFCDAB",
                    "0xEFCDAB12",
                    "0x12ABCDEF"
                ],
                correct: 1,
                explanation: "Little-endian: LSB (p[0]) vira byte direito. p[3] p[2] p[1] p[0] → 0x12 EF CD AB. Ordem INVERTIDA dos bytes!",
                theory: "Leitura little-endian: bytes são lidos do menor para maior endereço, mas montados da direita para esquerda",
                prerequisite: "p[0] = menor endereço = LSB → fica mais à direita no valor",
                difficulty: "Avançado",
                timeEstimate: "3 minutos"
            },
            {
                question: "Quanto vale 0xFF em decimal?",
                code: `unsigned char max_byte = 0xFF;
// Valor decimal?`,
                options: [
                    "255",
                    "256",
                    "127",
                    "15"
                ],
                correct: 0,
                explanation: "0xFF = (15×16) + (15×1) = 240 + 15 = 255. É o MÁXIMO valor para um byte unsigned (todos os bits em 1).",
                theory: "0xFF = máximo byte unsigned = 2⁸ - 1 = 255",
                prerequisite: "F em hex = 15 decimal, FF = maior valor de 1 byte",
                difficulty: "Iniciante",
                timeEstimate: "1 minuto"
            },
            {
                question: "Qual destas representações está CORRETA para o número 42?",
                code: `int answer = 42;
// Representações equivalentes:`,
                options: [
                    "42 (decimal), 0x2A (hex), 0b00101010 (binário)",
                    "42 (decimal), 0x42 (hex), 0b01000010 (binário)",
                    "42 (decimal), 0x24 (hex), 0b00100100 (binário)",
                    "42 (decimal), 0xA2 (hex), 0b10100010 (binário)"
                ],
                correct: 0,
                explanation: "42 decimal = 0x2A hexadecimal = 0b00101010 binário. 42÷16=2 resto 10(A), logo 0x2A. Em binário: 32+8+2 = 00101010.",
                theory: "Conversão entre bases: 42₁₀ = 2A₁₆ = 00101010₂",
                prerequisite: "Mesmo valor, representações diferentes conforme a base numérica",
                difficulty: "Intermediário",
                timeEstimate: "2 minutos"
            },
            {
                question: "Onde na memória está o MSB de 0xDEADBEEF (little-endian)?",
                code: `unsigned int magic = 0xDEADBEEF;
// magic está em 0x2000
// MSB (0xDE) está em qual endereço?`,
                options: [
                    "0x2000 (menor endereço)",
                    "0x2001",
                    "0x2002",
                    "0x2003 (maior endereço)"
                ],
                correct: 3,
                explanation: "Little-endian inverte: [EF][BE][AD][DE]. MSB (0xDE) vai para o MAIOR endereço: 0x2003. LSB (0xEF) fica em 0x2000.",
                theory: "Little-endian: MSB no maior endereço, LSB no menor endereço",
                prerequisite: "Layout: 0x2000=[EF], 0x2001=[BE], 0x2002=[AD], 0x2003=[DE]",
                difficulty: "Avançado",
                timeEstimate: "3 minutos"
            },
            {
                question: "Quantos dígitos hexadecimais representam um unsigned short (2 bytes)?",
                code: `unsigned short port = 0x1234;
// Quantos dígitos hex no máximo?`,
                options: [
                    "2 dígitos (0x00-0xFF)",
                    "4 dígitos (0x0000-0xFFFF)",
                    "8 dígitos (0x00000000-0xFFFFFFFF)",
                    "Depende do valor armazenado"
                ],
                correct: 1,
                explanation: "2 bytes = 16 bits = 4 dígitos hex (cada dígito hex = 4 bits = 1 nibble). Faixa: 0x0000 até 0xFFFF.",
                theory: "1 byte = 2 dígitos hex, logo 2 bytes = 4 dígitos hex",
                prerequisite: "Cada dígito hexadecimal representa exatamente 4 bits (1 nibble)",
                difficulty: "Intermediário",
                timeEstimate: "2 minutos"
            },
            {
                question: "Qual valor é equivalente a 0x100?",
                code: `unsigned int valor = 0x100;
// Valor decimal?`,
                options: [
                    "100",
                    "256",
                    "1000",
                    "16"
                ],
                correct: 1,
                explanation: "0x100 = 1×16² + 0×16¹ + 0×16⁰ = 1×256 + 0 + 0 = 256. É 16² porque temos 3 dígitos hex (potência aumenta por posição).",
                theory: "0x100 = 16² = 256 (primeira potência com 3 dígitos hex)",
                prerequisite: "Potências de 16: 16⁰=1, 16¹=16, 16²=256, 16³=4096",
                difficulty: "Intermediário",
                timeEstimate: "2 minutos"
            },
            {
                question: "Como extrair apenas o segundo byte de 0xAABBCCDD?",
                code: `unsigned int data = 0xAABBCCDD;
// Quero obter 0xCC (terceiro byte da direita)`,
                options: [
                    "(data >> 8) & 0xFF",
                    "(data >> 16) & 0xFF",
                    "(data >> 24) & 0xFF",
                    "data & 0x00FF0000"
                ],
                correct: 1,
                explanation: "Shift right 16 bits (2 bytes) move CC para posição direita, & 0xFF isola apenas o byte desejado. data>>16 = 0x0000AABB, & 0xFF = 0xBB. Ops, seria 0xBB! Para 0xCC: (data>>8) & 0xFF.",
                theory: "Extração de byte: shift right (n×8) bits + máscara & 0xFF",
                prerequisite: "Shift >> desloca bits à direita, & 0xFF isola byte menos significativo",
                difficulty: "Avançado",
                timeEstimate: "4 minutos"
            },
            {
                question: "O que acontece com 0xFF + 0x01 em um unsigned char?",
                code: `unsigned char x = 0xFF;
x = x + 0x01;
// Valor de x após a operação?`,
                options: [
                    "0x100 (256)",
                    "0x00 (overflow, volta para 0)",
                    "0xFF (saturação no máximo)",
                    "Erro de compilação"
                ],
                correct: 1,
                explanation: "0xFF + 0x01 = 0x100 = 256, mas unsigned char só armazena 8 bits (0-255). Overflow: descarta bit mais significativo, resultado = 0x00. Comportamento modular.",
                theory: "Overflow em unsigned: wraps around (comportamento modular 2ⁿ)",
                prerequisite: "unsigned char armazena apenas 8 bits menos significativos",
                difficulty: "Intermediário",
                timeEstimate: "2 minutos"
            },
            {
                question: "Em memória little-endian, qual padrão de bytes representa 0x00000001?",
                code: `unsigned int one = 0x00000001;
// Padrão na memória (4 bytes consecutivos)?`,
                options: [
                    "[00] [00] [00] [01]",
                    "[01] [00] [00] [00]",
                    "[00] [01] [00] [00]",
                    "[01] [01] [01] [01]"
                ],
                correct: 1,
                explanation: "Little-endian: LSB (0x01) primeiro, depois MSBs (0x00). Memória: [01][00][00][00]. O único byte não-zero (0x01) fica no menor endereço.",
                theory: "Números pequenos em little-endian: byte não-zero no início, zeros no fim",
                prerequisite: "0x00000001: LSB=0x01 (menor endereço), MSBs=0x00 (endereços maiores)",
                difficulty: "Intermediário",
                timeEstimate: "2 minutos"
            },
            {
                question: "Qual o maior valor que pode ser representado com 12 bits?",
                code: `// 12 bits disponíveis
// Valor máximo em hexadecimal?`,
                options: [
                    "0xFFF (4095)",
                    "0xFFFF (65535)",
                    "0xFF (255)",
                    "0x7FF (2047)"
                ],
                correct: 0,
                explanation: "12 bits = 3 nibbles = 3 dígitos hex. Máximo: todos bits em 1 = 0xFFF = 2¹²-1 = 4096-1 = 4095 decimal.",
                theory: "n bits → máximo = 2ⁿ-1. 12 bits = 3 dígitos hex (FFF)",
                prerequisite: "Cada dígito hex = 4 bits, logo 12 bits = 3 dígitos hex",
                difficulty: "Intermediário",
                timeEstimate: "2 minutos"
            },
            {
                question: "Por que 0x80 é especial em signed char?",
                code: `signed char byte = 0x80;
printf("%d", byte);
// O que imprime?`,
                options: [
                    "128 (valor positivo)",
                    "-128 (valor negativo)",
                    "0 (zero)",
                    "Erro: overflow"
                ],
                correct: 1,
                explanation: "0x80 = 10000000 em binário. Em signed char, bit mais significativo = sinal. 1xxxxxxx = negativo. 0x80 = -128 (valor mínimo de signed char).",
                theory: "Signed char: bit 7 = sinal. 0x80 = 1000 0000 = menor valor negativo (-128)",
                prerequisite: "Two's complement: 0x80-0xFF = negativos, 0x00-0x7F = positivos",
                difficulty: "Avançado",
                timeEstimate: "3 minutos"
            },
            {
                question: "Convertendo para hexadecimal, quanto vale 200 decimal?",
                code: `unsigned char value = 200;
// Representação hexadecimal?`,
                options: [
                    "0xC8",
                    "0x200",
                    "0x2C",
                    "0xCA"
                ],
                correct: 0,
                explanation: "200 ÷ 16 = 12 resto 8. 12 em hex = C. Logo 200₁₀ = 0xC8₁₆. Verificação: (12×16) + 8 = 192 + 8 = 200 ✓",
                theory: "Método divisão: 200÷16 = 12(C) resto 8 → 0xC8",
                prerequisite: "Conversão: divide por 16 sucessivamente, restos formam dígitos hex",
                difficulty: "Intermediário",
                timeEstimate: "2 minutos"
            },
            {
                question: "Desafio: Qual byte precisa ser modificado para alterar 0xA1B2C3D4 para 0xA1B2C3FF?",
                code: `unsigned int valor = 0xA1B2C3D4;
// Queremos mudar apenas o LSB para 0xFF
// Qual byte modificar na memória little-endian?`,
                options: [
                    "Byte no endereço 0 (0xD4 → 0xFF)",
                    "Byte no endereço 1 (0xC3 → 0xFF)",
                    "Byte no endereço 2 (0xB2 → 0xFF)",
                    "Byte no endereço 3 (0xA1 → 0xFF)"
                ],
                correct: 0,
                explanation: "Para mudar de 0xA1B2C3D4 para 0xA1B2C3FF, apenas o LSB (byte menos significativo) muda: 0xD4 → 0xFF. Em little-endian, LSB está no menor endereço (endereço 0).",
                theory: "Modificação seletiva: identificar qual byte controla qual parte do valor",
                prerequisite: "LSB controla os últimos 2 dígitos hexadecimais",
                difficulty: "Intermediário",
                timeEstimate: "2 minutos"
            },
            {
                question: "Qual faixa de valores um nibble (4 bits) pode representar?",
                code: `// 1 nibble = 4 bits
// Quantos valores distintos?`,
                options: [
                    "0-7 (8 valores)",
                    "0-15 (16 valores)",
                    "0-31 (32 valores)", 
                    "0-255 (256 valores)"
                ],
                correct: 1,
                explanation: "1 nibble = 4 bits = 2⁴ = 16 valores possíveis (0-15). Em hex: 0x0 até 0xF. Cada dígito hexadecimal representa exatamente 1 nibble.",
                theory: "1 nibble = 4 bits = 1 dígito hexadecimal = 16 valores (0-15)",
                prerequisite: "2⁴ = 16 combinações possíveis com 4 bits",
                difficulty: "Iniciante",
                timeEstimate: "1 minuto"
            },
            {
                question: "Como representar 0b10101101 em hexadecimal?",
                code: `unsigned char bin = 0b10101101;
// Equivalente hexadecimal?`,
                options: [
                    "0xAD",
                    "0xB1", 
                    "0xD5",
                    "0xDA"
                ],
                correct: 0,
                explanation: "Dividindo em nibbles: 1010 1101. 1010₂ = A₁₆, 1101₂ = D₁₆. Logo: 0xAD. Método: cada grupo de 4 bits = 1 dígito hex.",
                theory: "Conversão bin→hex: agrupar em nibbles (4 bits), converter cada nibble",
                prerequisite: "Binário para hex: 0000=0, 0001=1, ..., 1110=E, 1111=F",
                difficulty: "Intermediário",
                timeEstimate: "2 minutos"
            },
            {
                question: "Se um sensor retorna valores de 0x00 a 0x3F, quantos valores distintos?",
                code: `unsigned char sensor = 0x3F;
// Quantos valores possíveis?`,
                options: [
                    "63 valores (0-63)",
                    "64 valores (0-63)",
                    "32 valores (0-31)",
                    "16 valores (0-15)"
                ],
                correct: 1,
                explanation: "0x00 até 0x3F = 64 valores (incluindo o 0). 0x3F = 63 decimal. Contagem: 0,1,2,...,63 = 64 valores distintos.",
                theory: "Contagem: máximo - mínimo + 1 = 63 - 0 + 1 = 64 valores",
                prerequisite: "0x3F = 3×16 + 15 = 48 + 15 = 63 decimal",
                difficulty: "Intermediário",
                timeEstimate: "2 minutos"
            },
            {
                question: "Qual a diferença entre 0x100 e 0x1000?",
                code: `unsigned int a = 0x100;
unsigned int b = 0x1000;
// Diferença em decimal?`,
                options: [
                    "256 vs 4096 (3840 de diferença)",
                    "100 vs 1000 (900 de diferença)", 
                    "16 vs 160 (144 de diferença)",
                    "São iguais"
                ],
                correct: 0,
                explanation: "0x100 = 1×256 = 256. 0x1000 = 1×4096 = 4096. Diferença: 4096 - 256 = 3840. Cada dígito extra em hex multiplica por 16.",
                theory: "0x100 = 256, 0x1000 = 4096 → potências de 16: 16² vs 16³",
                prerequisite: "Posicional: 0x100 = 1×16², 0x1000 = 1×16³",
                difficulty: "Intermediário",
                timeEstimate: "2 minutos"
            }
        ]
    },
    {
    "id": 3,
    "name": "Acesso: Cast e Manipulação de Bytes", 
    "icon": "Zap",
    "color": "bg-purple-500",
    "description": "Técnica essencial: Acessar bytes individuais via ponteiros e type casting",
    "theory": {
        "title": "📚 Teoria: Type Casting e Acesso a Bytes Individuais",
        "content": `
**🎯 OBJETIVO DO NÍVEL:**
Dominar a técnica de casting para unsigned char* para acessar bytes individuais de tipos maiores.

**1. O PROBLEMA PRÁTICO:**
unsigned int x = 0xAABBCCDD;
// Como acessar apenas o byte 0xBB individualmente?
// x >> 16? ❌ PROIBIDO NO EXAME! (sem operadores bitwise)

**2. A SOLUÇÃO: CAST PARA unsigned char*:**
unsigned char *bytes = (unsigned char*)&x;
// Agora podemos acessar: bytes[0], bytes[1], bytes[2], bytes[3]

**3. POR QUE FUNCIONA? ARITMÉTICA DE PONTEIROS:**
┌────────────────────────────────────────┐
│ unsigned int* → incrementa de 4 em 4   │
│ unsigned char* → incrementa de 1 em 1  │ ← QUEREMOS ISSO!
└────────────────────────────────────────┘

int *p = (int*)0x1000;   // p+1 = 0x1004
char *p = (char*)0x1000; // p+1 = 0x1001

**4. ANATOMIA DO CAST:**
unsigned char *bytes = (unsigned char*)&x;
       ↑                  ↑              ↑
   novo tipo          operador cast   endereço de x

**5. PADRÃO DE ACESSO LITTLE-ENDIAN:**
unsigned int value = 0x12345678;
unsigned char *b = (unsigned char*)&value;

Little-endian (RV32):
b[0] = 0x78  ← LSB (índice 0)
b[1] = 0x56
b[2] = 0x34  
b[3] = 0x12  ← MSB (índice 3)

**6. LOOP DE VERIFICAÇÃO (PADRÃO DO EXAME):**
for (int i = 0; i < 4; i++) {
    if (bytes[i] < LIMITE) {
        return 1;  // Problema encontrado
    }
}
return 0;  // Todos os bytes OK

**7. POR QUE unsigned char E NÃO char?**
- char pode ser signed (-128 a 127)
- unsigned char é SEMPRE 0 a 255
- Evita problemas com bytes altos (0x80-0xFF)

**8. CAST PARA OUTROS TIPOS:**
short (2 bytes): unsigned char *b = (unsigned char*)&short_var; // b[0], b[1]
float (4 bytes): unsigned char *b = (unsigned char*)&float_var; // mesmo tamanho
double (8 bytes): unsigned char *b = (unsigned char*)&double_var; // b[0]..b[7]

**9. PADRÕES AVANÇADOS DE ACESSO:**
- Acesso a bytes específicos por índice
- Modificação seletiva de bytes
- Verificação de múltiplas condições
- Casting entre diferentes tipos numéricos

**⚠️ ATENÇÃO: CAST NÃO CRIA CÓPIA!**
Cast apenas muda como interpretamos os dados no MESMO endereço.
`,
        "visual": `
┌─────────────────────────────────────────────────────────┐
│        ANTES DO CAST: VISÃO DE INT                      │
├──────────┬──────────────────────────────────────────────┤
│ Endereço │ Conteúdo (4 bytes como int)                  │
├──────────┼──────────────────────────────────────────────┤
│ 0x1000   │ [AA][BB][CC][DD] ← 1 incremento = +4 bytes   │
│ 0x1004   │ [EE][FF][00][11]                             │
└──────────┴──────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│        DEPOIS DO CAST: VISÃO DE BYTES                   │
├──────────┬──────────────────────────────────────────────┤
│ Endereço │ Conteúdo (1 byte) | Índice                   │
├──────────┼──────────────────────────────────────────────┤
│ 0x1000   │ [AA] ← bytes[3] (MSB)                        │
│ 0x1001   │ [BB] ← bytes[2]                              │
│ 0x1002   │ [CC] ← bytes[1]                              │
│ 0x1003   │ [DD] ← bytes[0] (LSB)                        │
│ 0x1004   │ [EE] ← próximo int...                        │
└──────────┴──────────────────────────────────────────────┘

OBSERVAÇÃO: Em little-endian, bytes[0] = LSB (menor endereço)

┌─────────────────────────────────────────────────────────┐
│            COMPARAÇÃO: DIFERENTES TIPOS                 │
├─────────────┬────────────┬────────────┬─────────────────┤
│ Tipo        │ Tamanho    │ Índices    │ Exemplo         │
├─────────────┼────────────┼────────────┼─────────────────┤
│ short       │ 2 bytes    │ [0],[1]    │ 0x1234 → [34][12]│
│ int         │ 4 bytes    │ [0]..[3]   │ 0x12345678 → ...│
│ float       │ 4 bytes    │ [0]..[3]   │ IEEE 754        │
│ long long   │ 8 bytes    │ [0]..[7]   │ 0x1234...       │
└─────────────┴────────────┴────────────┴─────────────────┘
`,
        "keyPoints": [
            "Cast (unsigned char*)&var permite acesso byte-a-byte",
            "unsigned char* incrementa de 1 em 1 (vs 4 em 4 de int*)", 
            "Sempre use unsigned char para evitar problemas de sinal",
            "Cast não copia dados - apenas muda a interpretação",
            "Padrão aplicável a qualquer tipo: short, int, float, etc"
        ]
    },
    "exercises": [
        // EXERCÍCIOS ORIGINAIS (10 questões)
        {
            "question": "Por que precisamos de cast para acessar bytes individuais?",
            "code": `unsigned int value = 0xAABBCCDD;
// Queremos acessar 0xBB separadamente`,
            "options": [
                "Para mudar o valor armazenado na variável",
                "Para mudar como o ponteiro INTERPRETA os dados", 
                "Para converter hexadecimal em decimal",
                "Não é necessário, qualquer ponteiro serve"
            ],
            "correct": 1,
            "explanation": "Cast muda a INTERPRETAÇÃO do ponteiro. unsigned char* trata cada byte independentemente, enquanto unsigned int* trata 4 bytes como um bloco único.",
            "theory": "Type casting não altera os dados, apenas muda como são LIDOS/INTERPRETADOS",
            "prerequisite": "Ponteiros carregam informação de TIPO para determinar aritmética de ponteiros",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Qual a sintaxe CORRETA para fazer o cast?",
            "code": `unsigned int x = 0x12345678;
// Quero um ponteiro para acessar bytes individuais`,
            "options": [
                "unsigned char *p = &x;",
                "unsigned char *p = (unsigned char)&x;", 
                "unsigned char *p = (unsigned char*)&x;", 
                "char *p = (char)x;"
            ],
            "correct": 2,
            "explanation": "(unsigned char*)&x é correto: (novo_tipo*)endereço. Parênteses no tipo + *, depois o endereço com &.",
            "theory": "Sintaxe de cast de ponteiro: (tipo_desejado*)expressão",
            "prerequisite": "Cast de ponteiro requer (tipo*) não apenas (tipo)",
            "difficulty": "Iniciante",
            "timeEstimate": "1 minuto"
        },
        {
            "question": "Após o cast, bytes[2] acessa qual parte em little-endian?",
            "code": `unsigned int val = 0xAABBCCDD;
unsigned char *bytes = (unsigned char*)&val;
// bytes[2] = ? (little-endian)`,
            "options": [
                "0xAA (MSB)",
                "0xBB", 
                "0xCC", 
                "0xDD (LSB)"
            ],
            "correct": 1,
            "explanation": "Little-endian: [DD][CC][BB][AA]. bytes[0]=0xDD (LSB), bytes[1]=0xCC, bytes[2]=0xBB, bytes[3]=0xAA (MSB).",
            "theory": "Índice 2 = terceiro byte = 0xBB em little-endian",
            "prerequisite": "Little-endian: ordem invertida - bytes[0] é LSB (mais à direita na notação hex)",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Por que usar unsigned char e não char simples?",
            "code": `// Qual escolha para manipulação de bytes?
char *bytes1;
unsigned char *bytes2;`,
            "options": [
                "Não faz diferença, são equivalentes",
                "char pode ter valores negativos, unsigned é sempre 0-255", 
                "char é mais rápido para acesso",
                "unsigned char ocupa mais memória"
            ],
            "correct": 1,
            "explanation": "char pode ser signed (-128 a 127) dependendo do compilador. unsigned char é SEMPRE 0 a 255, evitando problemas com interpretação de sinal para bytes altos (0x80-0xFF).",
            "theory": "unsigned char garante interpretação sem sinal 0x00-0xFF para dados binários",
            "prerequisite": "Bytes de memória são naturalmente unsigned (sem sinal positivo/negativo)",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Quantas iterações precisa o loop de verificação?",
            "code": `unsigned int battery = 0x12345678;
unsigned char *cells = (unsigned char*)&battery;
for (int i = 0; i < ???; i++) {
    // verificar cells[i]
}`,
            "options": [
                "2 (metade dos bytes)",
                "3 (bytes 0,1,2)", 
                "4 (todos os bytes)", 
                "8 (bits em vez de bytes)"
            ],
            "correct": 2,
            "explanation": "unsigned int tem SEMPRE 4 bytes em RV32, logo 4 iterações (i = 0, 1, 2, 3). O loop é fixo e não depende do valor armazenado.",
            "theory": "Loop fixo: sizeof(unsigned int) = 4 bytes = 4 células a verificar",
            "prerequisite": "O tamanho não depende do valor, mas do TIPO (sempre 4 bytes para unsigned int)",
            "difficulty": "Iniciante",
            "timeEstimate": "1 minuto"
        },
        {
            "question": "Qual célula verificar PRIMEIRO no padrão do exame?",
            "code": `unsigned char *cells = (unsigned char*)&battery;
for (int i = 0; i < 4; i++) {
    if (cells[i] < 0x20) {
        return 1;  // Problema
    }
}`,
            "options": [
                "Sempre cells[0] (LSB em little-endian)",
                "Sempre cells[3] (MSB em little-endian)", 
                "Não importa, ordem é irrelevante para o resultado", 
                "Depende do valor específico armazenado"
            ],
            "correct": 2,
            "explanation": "QUALQUER célula < limite → retorna 1. A ordem não importa para o resultado final, apenas para eficiência (early return na primeira falha).",
            "theory": "Lógica OR: basta UMA célula problemática para falhar toda a verificação",
            "prerequisite": "Padrão de early return: primeira falha encontrada interrompe a verificação",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "O que faz este código equivalente?",
            "code": `unsigned char *b = (unsigned char*)&value;
if (b[0] < 0x20) return 1;
if (b[1] < 0x20) return 1;  
if (b[2] < 0x20) return 1;
if (b[3] < 0x20) return 1;
return 0;`,
            "options": [
                "Conta quantos bytes estão abaixo de 0x20",
                "Retorna 1 se PELO MENOS UM byte < 0x20", 
                "Retorna 1 se TODOS os bytes < 0x20",
                "Sempre retorna 0 (código morto)"
            ],
            "correct": 1,
            "explanation": "Early return: primeira condição verdadeira → retorna 1 imediatamente. Este é exatamente o mesmo comportamento do loop - padrão check_battery do exame!",
            "theory": "Padrão de verificação: qualquer falha → retorna 1 imediatamente (early return)",
            "prerequisite": "return interrompe a função, não executa código seguinte",
            "difficulty": "Iniciante",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Qual alternativa ao loop é funcionalmente equivalente?",
            "code": `// Versão 1: Loop
for (int i = 0; i < 4; i++) {
    if (bytes[i] < 0x20) return 1;
}

// Versão 2: ???`,
            "options": [
                "Unroll manual com 4 ifs separados", 
                "Usar recursão",
                "Usar switch-case",
                "Nenhuma, loop é obrigatório"
            ],
            "correct": 0,
            "explanation": "Loop unrolling: escrever os 4 ifs manualmente. Menos elegante, mas funcionalmente equivalente. O loop é preferido por ser mais limpo.",
            "theory": "Loop é mais limpo e escalável (e se fossem 8 bytes no futuro?)",
            "prerequisite": "Ambas as versões produzem o mesmo assembly/máquina",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Após o cast, é possível MODIFICAR bytes individuais?",
            "code": `unsigned int x = 0xAABBCCDD;
unsigned char *b = (unsigned char*)&x;
b[2] = 0x00;
// x agora vale?`,
            "options": [
                "0xAABBCCDD (inalterado - cast é só leitura)",
                "0xAA00CCDD (modificado via ponteiro)", 
                "Erro de segmentação",
                "Comportamento indefinido"
            ],
            "correct": 1,
            "explanation": "Cast permite LEITURA e ESCRITA! b[2] = 0x00 modifica o segundo byte de x. Em little-endian, x vira 0xAA00CCDD.",
            "theory": "Ponteiros permitem modificação in-place via cast - cuidado!",
            "prerequisite": "Cast não cria cópia, aponta para a MESMA memória",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Qual erro NESTE código?",
            "code": `unsigned int value = 0x12345678;
char *bytes = (char*)&value;
if (bytes[0] < 0x20) return 1;`,
            "options": [
                "Deveria ser unsigned char*, não char*", 
                "O cast está sintaticamente incorreto",
                "Não tem erro, funciona perfeitamente",
                "bytes[0] deveria ser *bytes"
            ],
            "correct": 0,
            "explanation": "char pode ser signed (-128 a 127), causando problemas com bytes altos como 0x80-0xFF que seriam interpretados como negativos. unsigned char (0-255) é sempre correto para manipulação de bytes brutos.",
            "theory": "Boa prática: sempre usar unsigned char* para manipulação de dados binários/bytes brutos",
            "prerequisite": "Evitar interpretação de sinal em dados puramente binários",
            "difficulty": "Avançado",
            "timeEstimate": "3 minutos"
        },

        // NOVOS EXERCÍCIOS EXPANDIDOS (15 questões adicionais)
        {
            "question": "Como acessar bytes de um short (2 bytes) com cast?",
            "code": `unsigned short port = 0x1234;
unsigned char *bytes = (unsigned char*)&port;
// bytes[0] e bytes[1] em little-endian?`,
            "options": [
                "[0x12] [0x34] (big-endian)",
                "[0x34] [0x12] (little-endian)",
                "[0x00] [0x00] (erro de cast)",
                "[0x12] [0x34] (depende da arquitetura)"
            ],
            "correct": 1,
            "explanation": "short tem 2 bytes. Little-endian: LSB primeiro. 0x1234 → bytes[0]=0x34, bytes[1]=0x12. Mesma lógica do int, mas com 2 bytes.",
            "theory": "Cast funciona para QUALQUER tipo - short, int, float, etc",
            "prerequisite": "Little-endian aplica-se igualmente a todos os tipos multi-byte",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Qual problema com char signed para byte 0x80?",
            "code": `unsigned int data = 0x00000080;
char *bytes = (char*)&data;
if (bytes[0] < 0x20) {
    // Este if será verdadeiro?`,
            "options": [
                "Sim, porque 0x80 < 0x20",
                "Não, porque 0x80 > 0x20", 
                "Sim, porque 0x80 = -128 (signed) < 0x20",
                "Erro de compilação"
            ],
            "correct": 2,
            "explanation": "char signed: 0x80 = -128 decimal. -128 < 0x20 (32), então a condição é VERDADEIRA, mesmo que 0x80 > 0x20 em unsigned. Isso mostra o perigo do char signed!",
            "theory": "char signed: 0x80-0xFF são negativos, causando comparações incorretas",
            "prerequisite": "Comparação promove char para int, preservando o sinal",
            "difficulty": "Avançado",
            "timeEstimate": "3 minutos"
        },
        {
            "question": "Quantos bytes verificar para um array de 3 inteiros?",
            "code": `unsigned int batteries[3] = {0x12345678, 0xAABBCCDD, 0x11223344};
unsigned char *cells = (unsigned char*)batteries;
// Quantas células verificar no total?`,
            "options": [
                "3 células (uma por inteiro)",
                "4 células (tamanho de um int)",
                "12 células (3 ints × 4 bytes)",
                "Depende dos valores armazenados"
            ],
            "correct": 2,
            "explanation": "3 inteiros × 4 bytes cada = 12 bytes totais. O cast para unsigned char* permite acessar todos os 12 bytes individualmente.",
            "theory": "Arrays: casting do array inteiro permite acesso a TODOS os bytes de TODOS os elementos",
            "prerequisite": "Array de N inteiros ocupa N × sizeof(int) bytes",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Como modificar apenas o MSB de um inteiro?",
            "code": `unsigned int valor = 0x12345678;
unsigned char *b = (unsigned char*)&valor;
// Quero mudar MSB (0x12) para 0xFF`,
            "options": [
                "b[0] = 0xFF;  (modifica LSB)",
                "b[3] = 0xFF;  (modifica MSB em little-endian)",
                "b[2] = 0xFF;  (modifica terceiro byte)",
                "Não é possível modificar seletivamente"
            ],
            "correct": 1,
            "explanation": "Em little-endian: b[3] = MSB (0x12), b[2] = 0x34, b[1] = 0x56, b[0] = LSB (0x78). Para modificar MSB: b[3] = 0xFF.",
            "theory": "Modificação seletiva: identificar índice correto baseado em endianness",
            "prerequisite": "MSB = índice 3 em little-endian para inteiros de 4 bytes",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "O que acontece ao fazer cast de float para unsigned char*?",
            "code": `float temperature = 25.5;
unsigned char *bytes = (unsigned char*)&temperature;
// Podemos verificar bytes[0] < 0x20?`,
            "options": [
                "Sim, funciona igual a inteiros",
                "Não, porque float tem formato IEEE 754 diferente",
                "Sim, mas apenas bytes[0] e bytes[1]",
                "Erro: cast incompatível"
            ],
            "correct": 0,
            "explanation": "CAST FUNCIONA para QUALQUER tipo! O código verifica bytes individuais do float. Porém, a interpretação dos valores será diferente (IEEE 754), mas a verificação < 0x20 ainda é válida.",
            "theory": "Cast é apenas reinterpretação de bytes - funciona para qualquer tipo na memória",
            "prerequisite": "Todos os dados na memória são bytes - cast apenas muda a 'lente' de visualização",
            "difficulty": "Avançado",
            "timeEstimate": "3 minutos"
        },
        {
            "question": "Qual a diferença entre &array[0] e array no cast?",
            "code": `unsigned int data[2] = {0x12345678, 0xAABBCCDD};
// Opção 1:
unsigned char *p1 = (unsigned char*)&data[0];
// Opção 2:  
unsigned char *p2 = (unsigned char*)data;`,
            "options": [
                "p1 acessa primeiro elemento, p2 acessa array todo",
                "São equivalentes - ambos apontam para início do array",
                "p1 é ilegal, p2 é correto",
                "p1 acessa 4 bytes, p2 acessa 8 bytes"
            ],
            "correct": 1,
            "explanation": "Em C, &array[0] e array são equivalentes - ambos retornam ponteiro para o primeiro elemento do array. O cast resultará no mesmo endereço.",
            "theory": "array decai para ponteiro para primeiro elemento em expressões",
            "prerequisite": "array ≡ &array[0] em contextos de ponteiro",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Como verificar apenas bytes pares de um inteiro?",
            "code": `unsigned int value = 0xAABBCCDD;
unsigned char *b = (unsigned char*)&value;
for (int i = 0; i < 4; i += 2) {
    if (b[i] < 0x20) return 1;
}
// O que este loop verifica?`,
            "options": [
                "Todos os bytes (0,1,2,3)",
                "Apenas bytes pares (0,2) em little-endian",
                "Apenas bytes ímpares (1,3)",
                "Apenas MSB e LSB"
            ],
            "correct": 1,
            "explanation": "i += 2: itera sobre índices 0 e 2. Em little-endian: b[0]=0xDD (LSB), b[2]=0xBB. Verifica apenas esses dois bytes.",
            "theory": "Padrões de acesso seletivo: podemos escolher quais bytes verificar",
            "prerequisite": "Loop com passo 2: i=0,2 (não 1,3)",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Qual o valor após modificar múltiplos bytes?",
            "code": `unsigned int x = 0x11223344;
unsigned char *b = (unsigned char*)&x;
b[0] = 0xAA;
b[2] = 0xBB;
// x agora vale? (little-endian)`,
            "options": [
                "0x11BB33AA",
                "0xAABB3344", 
                "0x1122BBAA",
                "0xAA22BB44"
            ],
            "correct": 0,
            "explanation": "Little-endian: [44][33][22][11]. b[0]=0x44→0xAA, b[2]=0x22→0xBB. Resultado: [AA][33][BB][11] = 0x11BB33AA.",
            "theory": "Modificações múltiplas: cada atribuição altera byte específico",
            "prerequisite": "Em little-endian: b[0]=LSB (direita), b[3]=MSB (esquerda)",
            "difficulty": "Avançado",
            "timeEstimate": "3 minutos"
        },
        {
            "question": "Cast para unsigned char* preserva endianness?",
            "code": `unsigned int value = 0x12345678;
unsigned char *bytes = (unsigned char*)&value;
// bytes[0] depende da endianness?`,
            "options": [
                "Não, cast sempre mostra bytes em ordem big-endian",
                "Sim, bytes[0] será LSB em little-endian, MSB em big-endian",
                "Cast elimina endianness - ordem sempre sequencial",
                "Depende do compilador"
            ],
            "correct": 1,
            "explanation": "Cast PRESERVA a endianness! bytes[0] acessa o byte no menor endereço, que em little-endian é LSB, em big-endian é MSB.",
            "theory": "Cast não altera layout de memória - apenas expõe os bytes como estão",
            "prerequisite": "Endianness é propriedade do armazenamento, não da interpretação",
            "difficulty": "Avançado",
            "timeEstimate": "3 minutos"
        },
        {
            "question": "Como verificar se ALGUM byte está em faixa específica?",
            "code": `unsigned int sensor = 0x12345678;
unsigned char *b = (unsigned char*)&sensor;
// Verificar se algum byte entre 0x30 e 0x39`,
            "options": [
                "if (b[0] >= 0x30 && b[0] <= 0x39) return 1; ... if (b[4] >= 0x30 && b[4] <= 0x39) return 1;",
                "for (int i=0; i<4; i++) if (b[i] >= 0x30 && b[i] <= 0x39) return 1;",
                "Ambas funcionam",
                "Não é possível verificar faixa com cast"
            ],
            "correct": 2,
            "explanation": "Ambas as abordagens funcionam! Loop é mais elegante, unrolled é equivalente. Cast permite qualquer verificação byte-a-byte.",
            "theory": "Padrão verificação de faixa: valor >= min && valor <= max para cada byte",
            "prerequisite": "Operadores relacionais funcionam com unsigned char normalmente",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Qual erro ao usar ponteiro wrong type sem cast?",
            "code": `unsigned int value = 0x12345678;
unsigned char *bytes = &value;  // SEM CAST!
// O que acontece?`,
            "options": [
                "Compila com warning, funciona na prática",
                "Erro de compilação - tipos incompatíveis",
                "Comportamento indefinido",
                "Converte automaticamente"
            ],
            "correct": 1,
            "explanation": "ERRO DE COMPILAÇÃO! unsigned char* ← unsigned int* são tipos de ponteiro diferentes. Precisa de cast explícito: (unsigned char*)&value.",
            "theory": "C é fortemente tipado para ponteiros - cast explícito é necessário entre tipos diferentes",
            "prerequisite": "Ponteiros para diferentes tipos são tipos distintos em C",
            "difficulty": "Iniciante",
            "timeEstimate": "1 minuto"
        },
        {
            "question": "Cast funciona com variáveis locais e globais?",
            "code": `void func() {
    unsigned int local = 0x12345678;
    unsigned char *b1 = (unsigned char*)&local;
    
    extern unsigned int global;  
    unsigned char *b2 = (unsigned char*)&global;
}
// Ambos casts são válidos?`,
            "options": [
                "Apenas b1 funciona (local)",
                "Apenas b2 funciona (global)",
                "Ambos funcionam",
                "Nenhum funciona - cast apenas com malloc"
            ],
            "correct": 2,
            "explanation": "Cast funciona com QUALQUER variável na memória - locais, globais, parâmetros, malloc, etc. O operador & retorna endereço válido para qualquer variável com armazenamento.",
            "theory": "Cast depende apenas de ter um endereço válido - não importa o storage duration",
            "prerequisite": "& funciona com qualquer lvalue (variáveis com endereço)",
            "difficulty": "Iniciante",
            "timeEstimate": "1 minuto"
        },
        {
            "question": "Como acessar byte específico baseado em runtime index?",
            "code": `unsigned int data = 0xAABBCCDD;
int index = 2;  // calculado em runtime
unsigned char *b = (unsigned char*)&data;
unsigned char byte = b[index];
// Isto é válido?`,
            "options": [
                "Sim, índice pode ser variável",
                "Não, índice deve ser constante de compilação",
                "Sim, mas apenas para índices 0 e 3",
                "Não, deve usar switch-case"
            ],
            "correct": 0,
            "explanation": "Índices de array em C podem ser expressões arbitrárias, incluindo variáveis. b[index] é perfeitamente válido e comum.",
            "theory": "Aritmética de ponteiros + índice variável = acesso dinâmico a bytes",
            "prerequisite": "Array indexing em C aceita qualquer expressão inteira",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Qual a diferença entre *(b+i) e b[i]?",
            "code": `unsigned int x = 0x12345678;
unsigned char *b = (unsigned char*)&x;
// Opção 1: byte1 = b[1];
// Opção 2: byte1 = *(b + 1);`,
            "options": [
                "b[1] acessa byte, *(b+1) causa erro",
                "São equivalentes - syntax sugar",
                "*(b+1) é mais rápido que b[1]",
                "b[1] funciona, *(b+1) não compila"
            ],
            "correct": 1,
            "explanation": "b[i] é exatamente equivalente a *(b+i) em C. São syntax sugar um para o outro - geram o mesmo código assembly.",
            "theory": "Array indexing é syntax sugar para pointer arithmetic",
            "prerequisite": "a[i] ≡ *(a+i) por definição na linguagem C",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Cast entre int* e unsigned char* muda o valor?",
            "code": `unsigned int value = 0x12345678;
unsigned char *bytes = (unsigned char*)&value;
// bytes aponta para o mesmo valor que &value?`,
            "options": [
                "Não, cast cria nova cópia dos bytes",
                "Sim, ambos apontam para o MESMO endereço físico",
                "Não, bytes aponta para área diferente",
                "Cast realoca a memória"
            ],
            "correct": 1,
            "explanation": "Cast NÃO copia dados! Ambos &value e bytes apontam para o MESMO endereço físico na memória. Apenas a interpretação (tipo) muda.",
            "theory": "Cast de ponteiro é operação de zero custo - apenas muda tipo no compilador",
            "prerequisite": "Ponteiros são endereços de memória - cast não altera o endereço",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        }
    ]
},
   {
    "id": 4,
    "name": "Padrão check_battery - Implementação",
    "icon": "Target",
    "color": "bg-red-500",
    "description": "Função CORE do exame: implementar e entender check_battery",
    "theory": {
        "title": "📚 Teoria: Implementação da Função check_battery",
        "content": `
**🎯 OBJETIVO DO NÍVEL:**
Implementar corretamente a função check_battery que é o CERNE do exame ARQCP.

**1. ASSINATURA DA FUNÇÃO:**
int check_battery(unsigned int *x);
    ↑              ↑
 retorno       ponteiro para unsigned int

**2. COMPORTAMENTO ESPECIFICADO:**
- Recebe: ponteiro para unsigned int (ENDEREÇO de uma variável)
- Verifica: se ALGUM dos 4 bytes < limite (ex: 0x20)
- Retorna: 1 se problema encontrado, 0 se todos bytes OK

**3. ALGORITMO (5 PASSOS FUNDAMENTAIS):**
┌─────────────────────────────────────────┐
│ 1. CAST para unsigned char*             │
│ 2. LOOP de 0 a 3 (4 bytes)              │
│ 3. VERIFICAR se bytes[i] < LIMITE       │
│ 4. Se SIM → return 1 (early return)     │
│ 5. Após loop → return 0 (tudo OK)       │
└─────────────────────────────────────────┘

**4. TEMPLATE COMPLETO DA FUNÇÃO:**
int check_battery(unsigned int *x) {
    // Passo 1: Cast para acesso byte-a-byte
    unsigned char *cells = (unsigned char *)x;
    
    // Passos 2-4: Loop com verificação e early return
    for (int i = 0; i < 4; i++) {
        if (cells[i] < 0x20) {
            return 1;  // Problema encontrado
        }
    }
    
    // Passo 5: Todas células dentro do limite
    return 0;
}

**5. POR QUE unsigned int *x (PONTEIRO)?**
- Recebemos ENDEREÇO, não valor
- Permite cast para unsigned char* para acesso aos bytes
- Segue convenção C de passar estruturas por ponteiro

**6. EARLY RETURN - OTIMIZAÇÃO CRÍTICA:**
return 1;  ← sai IMEDIATAMENTE da função
// código aqui NUNCA executa se condição verdadeira

**7. CASOS DE TESTE ESSENCIAIS:**
0xFFFFFFFF → return 0 (todos 0xFF > 0x20)
0x10203040 → return 1 (0x10 < 0x20)  
0x1F1F1F1F → return 1 (todos 0x1F < 0x20)
0x20202020 → return 0 (todos = 0x20, não <)

**8. VARIAÇÕES COMUNS NO EXAME:**
- Com limite parametrizado
- Com arrays de inteiros
- Com diferentes tipos (short, long)
- Com condições invertidas
- Com contagem em vez de booleano

**9. PADRÃO PARA ARRAYS:**
int check_batteries(unsigned int *array, int size) {
    for (int j = 0; j < size; j++) {
        unsigned char *cells = (unsigned char*)&array[j];
        for (int i = 0; i < 4; i++) {
            if (cells[i] < 0x20) return 1;
        }
    }
    return 0;
}
`,
        "visual": `
┌─────────────────────────────────────────────────────────┐
│         FLUXOGRAMA check_battery                        │
├─────────────────────────────────────────────────────────┤
│  [Recebe unsigned int *x]                               │
│           ↓                                              │
│  [Cast: unsigned char *cells = (unsigned char*)x]       │
│           ↓                                              │
│  [i = 0]                                                 │
│     ↓                                                    │
│  [cells[i] < 0x20?] → SIM → [return 1] ←┐               │
│     ↓ NÃO                                │               │
│  [i++]                                   │               │
│     ↓                                    │               │
│  [i < 4?] → SIM → volta ────────────────┘               │
│     ↓ NÃO                                                │
│  [return 0]                                              │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│            EXEMPLOS PRÁTICOS                            │
├───────────────┬──────────────┬──────────────────────────┤
│ Valor         │ Bytes        │ Resultado                │
├───────────────┼──────────────┼──────────────────────────┤
│ 0xFFFFFFFF    │ FF FF FF FF  │ return 0 (todos OK)      │
│ 0x10203040    │ 10 20 30 40  │ return 1 (0x10 < 0x20)   │
│ 0x1F2A3B4C    │ 1F 2A 3B 4C  │ return 1 (0x1F < 0x20)   │
│ 0x20202020    │ 20 20 20 20  │ return 0 (todos = 0x20)  │
│ 0x00112233    │ 00 11 22 33  │ return 1 (0x00 < 0x20)   │
└───────────────┴──────────────┴──────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│            VARIAÇÕES DO PADRÃO                         │
├──────────────────┬──────────────────┬───────────────────┤
│ Variação         │ Assinatura       │ Uso               │
├──────────────────┼──────────────────┼───────────────────┤
│ Limite fixo      │ (unsigned int*x) | check_battery     │
│ Limite variável  │ (unsigned int*x, | Mais flexível     │
│                  │ unsigned char lim|                   │
│ Array de bats    │ (unsigned int*arr| Múltiplas bats    │
│                  │ , int size)      |                   │
│ Tipo diferente   │ (unsigned short*x| Batteries menores │
└──────────────────┴──────────────────┴───────────────────┘
`,
        "keyPoints": [
            "Assinatura: int check_battery(unsigned int *x)",
            "Sempre começar com cast para unsigned char*", 
            "Loop fixo de 4 iterações (0 a 3)",
            "Early return: primeira falha → return 1",
            "Loop completo sem falhas → return 0",
            "Padrão aplicável a arrays e outros tipos"
        ]
    },
    "exercises": [
        {
            "question": "Qual é o tipo de parâmetro exato que a função check_battery deve receber para permitir o acesso byte a byte?",
            "code": `int check_battery(???) {
    // Implementação
}`,
            "options": [
                "unsigned int x, pois permite verificação direta do valor inteiro",
                "unsigned int *x, pois recebe o endereço e permite cast para bytes individuais",
                "unsigned char *x, pois já recebe os bytes diretamente sem necessidade de cast",
                "void *x, pois é genérico e pode ser convertido para qualquer tipo"
            ],
            "correct": 1,
            "explanation": "O parâmetro deve ser unsigned int *x para receber o endereço de um unsigned int, permitindo o cast para unsigned char* e acesso aos bytes individuais sem perda de informação.",
            "theory": "Receber por ponteiro é essencial para permitir o cast e acesso byte-a-byte",
            "prerequisite": "Precisamos do endereço para fazer cast, não do valor",
            "difficulty": "Iniciante",
            "timeEstimate": "1 minuto"
        },
        {
            "question": "Qual deve ser a primeira instrução dentro da função check_battery para acessar os bytes individuais?",
            "code": `int check_battery(unsigned int *x) {
    // ??? (primeira linha)
}`,
            "options": [
                "if (*x < 0x20) return 1;, para verificar o valor inteiro diretamente",
                "unsigned char *cells = (unsigned char *)x;, para converter o ponteiro em acesso byte-a-byte",
                "for (int i = 0; i < 4; i++), para iniciar o loop de verificação imediatamente",
                "return 0;, para definir o caso base de sucesso"
            ],
            "correct": 1,
            "explanation": "O cast para unsigned char* é o primeiro passo obrigatório, permitindo acessar cada byte do unsigned int separadamente antes de qualquer verificação.",
            "theory": "Padrão obrigatório: cast → loop → verificação",
            "prerequisite": "Sem cast, não conseguimos acessar bytes individuais do unsigned int",
            "difficulty": "Iniciante",
            "timeEstimate": "1 minuto"
        },
        {
            "question": "Qual é o limite superior correto para o loop que verifica os 4 bytes de um unsigned int?",
            "code": `unsigned char *cells = (unsigned char *)x;
for (int i = 0; i < ???; i++) {`,
            "options": [
                "3, pois o loop deve parar no índice 3 sem incluir o 4",
                "4, pois deve executar exatamente 4 iterações para os índices 0 a 3",
                "sizeof(unsigned int), para torná-lo genérico em diferentes arquiteturas",
                "sizeof(*x), para calcular o tamanho baseado no ponteiro"
            ],
            "correct": 1,
            "explanation": "O loop deve usar i < 4 para garantir exatamente 4 iterações (índices 0, 1, 2, 3), correspondendo aos 4 bytes de um unsigned int em RV32.",
            "theory": "unsigned int = 4 bytes = índices 0,1,2,3 = 4 iterações",
            "prerequisite": "Loop de 0 a 3 (inclusive) = 4 iterações totais",
            "difficulty": "Iniciante",
            "timeEstimate": "1 minuto"
        },
        {
            "question": "Qual é a condição de verificação exata dentro do loop para detectar um byte abaixo do limite de 0x20?",
            "code": `for (int i = 0; i < 4; i++) {
    if (???) {
        return 1;
    }
}`,
            "options": [
                "cells[i] == 0x20, para verificar se o byte é exatamente o limite",
                "cells[i] > 0x20, para verificar se o byte está acima do limite",
                "cells[i] < 0x20, para verificar se o byte está abaixo do limite",
                "cells[i] <= 0x20, para incluir o limite como problema"
            ],
            "correct": 2,
            "explanation": "A condição cells[i] < 0x20 detecta bytes estritamente abaixo de 0x20, considerando 0x20 como aceitável, conforme a especificação.",
            "theory": "Condição de problema: valores MENORES que o limite (exclusivo)",
            "prerequisite": "Operador < é exclusivo: 0x1F < 0x20 (true), 0x20 < 0x20 (false)",
            "difficulty": "Iniciante",
            "timeEstimate": "1 minuto"
        },
        {
            "question": "Qual valor deve ser retornado imediatamente dentro do if quando um byte problemático é encontrado?",
            "code": `if (cells[i] < 0x20) {
    // ???
}`,
            "options": [
                "return 0;, indicando que não há problema",
                "return 1;, indicando que um problema foi encontrado",
                "return i;, retornando o índice do byte problemático",
                "break;, para sair apenas do loop sem retornar"
            ],
            "correct": 1,
            "explanation": "Retornar 1 imediatamente indica que um problema foi encontrado, implementando o early return e saindo da função sem verificar os bytes restantes.",
            "theory": "Convenção booleana em C: 1 = true = tem problema, 0 = false = sem problema",
            "prerequisite": "Early return: primeira falha encontrada termina a verificação",
            "difficulty": "Iniciante",
            "timeEstimate": "1 minuto"
        },
        {
            "question": "Qual valor deve ser retornado após o loop se nenhuma condição de problema for atendida?",
            "code": `for (int i = 0; i < 4; i++) {
    if (cells[i] < 0x20) {
        return 1;
    }
}
// ???`,
            "options": [
                "return 1;, assumindo que há um problema não detectado",
                "return 0;, indicando que todos os bytes estão OK",
                "return -1;, indicando um erro genérico",
                "Nada, pois a função termina automaticamente sem return"
            ],
            "correct": 1,
            "explanation": "Se o loop completar sem early return, significa que todos os bytes são >= 0x20, então retorna 0 para indicar que a bateria está OK.",
            "theory": "Loop completo sem early return → todas células passaram no teste",
            "prerequisite": "return dentro do loop impede chegar a este ponto se houver problema",
            "difficulty": "Iniciante",
            "timeEstimate": "1 minuto"
        },
        {
            "question": "Dado o valor 0xFFFFFFFF (todos bytes 0xFF), qual é o retorno esperado de check_battery?",
            "code": `unsigned int bat = 0xFFFFFFFF;
int result = check_battery(&bat);
// result = ?`,
            "options": [
                "0, pois todos os bytes são maiores que 0x20",
                "1, pois há um problema nos bytes altos",
                "-1, indicando erro no valor máximo",
                "4, contando o número de bytes verificados"
            ],
            "correct": 0,
            "explanation": "Todos os bytes são 0xFF (255), que é maior que 0x20 (32), então nenhum problema é detectado e retorna 0.",
            "theory": "0xFF é valor MÁXIMO de byte, sempre passa em qualquer limite razoável",
            "prerequisite": "0xFF = 255 >> 0x20 = 32",
            "difficulty": "Iniciante",
            "timeEstimate": "1 minuto"
        },
        {
            "question": "Dado o valor 0x10203040 (bytes: 0x10, 0x20, 0x30, 0x40 em little-endian), qual é o retorno esperado?",
            "code": `unsigned int bat = 0x10203040;
// Bytes (little-endian): 0x40, 0x30, 0x20, 0x10
int result = check_battery(&bat);`,
            "options": [
                "0, pois a média dos bytes é aceitável",
                "1, pois o byte 0x10 é menor que 0x20",
                "2, contando dois bytes problemáticos",
                "4, pois todos os bytes são verificados"
            ],
            "correct": 1,
            "explanation": "O byte 0x10 (16) é < 0x20, então retorna 1 no momento em que é detectado, sem verificar os restantes.",
            "theory": "Early return: não verifica células restantes após encontrar primeira falha",
            "prerequisite": "0x10 = 16 decimal < 32 = 0x20",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Dado o valor 0x20202020 (todos bytes exatamente 0x20), qual é o retorno esperado?",
            "code": `unsigned int bat = 0x20202020;
// Todos bytes exatamente 0x20
int result = check_battery(&bat);`,
            "options": [
                "0, pois 0x20 não é menor que 0x20",
                "1, pois os bytes estão no limite exato",
                "Depende da implementação do compilador",
                "Erro de execução por valor limite"
            ],
            "correct": 0,
            "explanation": "A condição < 0x20 é falsa para 0x20, então todos os bytes passam e retorna 0.",
            "theory": "Caso limite: valor exato do limite NÃO é considerado problema",
            "prerequisite": "Operador < vs ≤ → 0x20 NÃO é menor que 0x20",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Dado o valor 0x1F1F1F1F (todos bytes 0x1F), qual é o retorno esperado?",
            "code": `unsigned int bat = 0x1F1F1F1F;
// Todos bytes = 0x1F (31 decimal)
int result = check_battery(&bat);`,
            "options": [
                "0, pois todos os bytes são iguais",
                "1, pois o primeiro byte 0x1F é menor que 0x20",
                "4, contando todos os bytes problemáticos",
                "-1, indicando valor inválido"
            ],
            "correct": 1,
            "explanation": "O primeiro byte 0x1F < 0x20 dispara o early return com 1; não conta quantos bytes estão ruins.",
            "theory": "Função retorna booleano (sim/não tem problema), não contagem de problemas",
            "prerequisite": "0x1F = 31 < 32 em todas células - primeira já falha",
            "difficulty": "Iniciante",
            "timeEstimate": "1 minuto"
        },
        {
            "question": "Por que a função check_battery recebe o parâmetro por ponteiro em vez de por valor?",
            "code": `// Opção A - por valor
int check_battery(unsigned int x);

// Opção B - por ponteiro  
int check_battery(unsigned int *x);`,
            "options": [
                "Por valor é mais eficiente em RV32 para valores pequenos",
                "Por ponteiro permite cast para unsigned char* e acesso aos bytes",
                "Não há diferença prática entre as duas opções",
                "Por valor é mais segura contra modificações acidentais"
            ],
            "correct": 1,
            "explanation": "Receber por ponteiro fornece o endereço, permitindo o cast para unsigned char* e acesso aos bytes; por valor não permite isso diretamente.",
            "theory": "Cast de tipo requer ponteiro, não valor direto",
            "prerequisite": "unsigned char *b = (unsigned char*)&x só funciona se x for passado por ponteiro",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "A implementação alternativa usando operadores OR para verificar os bytes é equivalente à versão com loop?",
            "code": `int check_battery(unsigned int *x) {
    unsigned char *cells = (unsigned char *)x;
    if (cells[0] < 0x20 || cells[1] < 0x20 || 
        cells[2] < 0x20 || cells[3] < 0x20) {
        return 1;
    }
    return 0;
}`,
            "options": [
                "Não, pois a sintaxe do OR é inválida em C",
                "Não, pois a lógica verifica o oposto do esperado",
                "Sim, pois usa short-circuiting e retorna na primeira falha",
                "Não, pois falta um break após cada condição"
            ],
            "correct": 2,
            "explanation": "O OR lógico (||) usa short-circuiting, parando na primeira condição verdadeira, o que é equivalente ao loop com early return.",
            "theory": "Ambos os padrões (loop ou OR com short-circuiting) são válidos e equivalentes",
            "prerequisite": "Short-circuiting: OR para na primeira condição verdadeira",
            "difficulty": "Avançado",
            "timeEstimate": "3 minutos"
        },
        {
            "question": "Se removermos o early return e usarmos uma variável para rastrear problemas, qual é o impacto na função?",
            "code": `int check_battery(unsigned int *x) {
    unsigned char *cells = (unsigned char *)x;
    int problema = 0;
    for (int i = 0; i < 4; i++) {
        if (cells[i] < 0x20) {
            problema = 1;  // SEM early return
        }
    }
    return problema;
}`,
            "options": [
                "Funciona igual, mas verifica todos os bytes sempre, sendo menos eficiente",
                "Quebra a função, sempre retornando 1",
                "Sempre retorna 0, ignorando problemas",
                "Retorna o número de bytes problemáticos em vez de booleano"
            ],
            "correct": 0,
            "explanation": "Sem early return, a função sempre executa o loop completo, mas ainda retorna corretamente 1 se houver pelo menos um problema, embora menos otimizado.",
            "theory": "Early return é otimização, não requisito funcional",
            "prerequisite": "Ambas implementações produzem mesmo resultado, eficiência diferente",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Qual é o erro principal nesta versão da função que usa char* em vez de unsigned char*?",
            "code": `int check_battery(unsigned int *x) {
    char *cells = (char*)x;
    for (int i = 0; i < 4; i++) {
        if (cells[i] < 0x20) return 1;
    }
    return 0;
}`,
            "options": [
                "Usar char* pode interpretar bytes altos como negativos, causando comparações erradas",
                "O loop deveria ser while em vez de for para tipos signed",
                "Falta um cast no return para compatibilidade",
                "0x20 deveria ser expresso como 32 em decimal para signed char"
            ],
            "correct": 0,
            "explanation": "char pode ser signed, fazendo bytes 0x80-0xFF parecerem negativos e falharem em comparações com 0x20 de forma incorreta.",
            "theory": "Sempre usar unsigned char* para manipulação de bytes brutos",
            "prerequisite": "Evitar problemas de sinal em comparações de bytes",
            "difficulty": "Avançado",
            "timeEstimate": "3 minutos"
        },
        {
            "question": "Como adaptar o loop da função check_battery para verificar um unsigned short (2 bytes) em vez de unsigned int?",
            "code": `int check_battery_short(unsigned short *x) {
    unsigned char *cells = (unsigned char *)x;
    for (int i = 0; i < ???; i++) {
        if (cells[i] < 0x20) return 1;
    }
    return 0;
}`,
            "options": [
                "1, verificando apenas o primeiro byte como principal",
                "2, pois unsigned short tem exatamente 2 bytes em RV32",
                "4, mantendo o mesmo que para unsigned int",
                "sizeof(short), que é sempre 2 mas mais genérico"
            ],
            "correct": 1,
            "explanation": "Unsigned short tem 2 bytes, então o loop deve ser i < 2 para verificar os índices 0 e 1.",
            "theory": "Adaptação para diferentes tipos: mudar limite do loop conforme sizeof(tipo)",
            "prerequisite": "short = 2 bytes, int = 4 bytes, long long = 8 bytes",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Como modificar a condição dentro do loop para usar um limite passado como parâmetro?",
            "code": `int check_battery_limit(unsigned int *x, unsigned char limite) {
    unsigned char *cells = (unsigned char *)x;
    for (int i = 0; i < 4; i++) {
        if (cells[i] < ???) return 1;
    }
    return 0;
}`,
            "options": [
                "0x20, mantendo o limite fixo independentemente do parâmetro",
                "limite, usando o valor passado para maior flexibilidade",
                "*limite, tratando o limite como ponteiro",
                "&limite, usando o endereço do limite"
            ],
            "correct": 1,
            "explanation": "Substituir 0x20 por 'limite' permite que a função use o valor parametrizado, tornando-a mais versátil.",
            "theory": "Parametrização do limite torna função mais reutilizável",
            "prerequisite": "Parâmetros funcionam como variáveis locais dentro da função",
            "difficulty": "Iniciante",
            "timeEstimate": "1 minuto"
        },
        {
            "question": "A implementação para verificar um array de múltiplas baterias está correta e retorna 1 se qualquer byte em qualquer bateria for problemático?",
            "code": `int check_batteries(unsigned int *array, int size) {
    for (int j = 0; j < size; j++) {
        unsigned char *cells = (unsigned char*)&array[j];
        for (int i = 0; i < 4; i++) {
            if (cells[i] < 0x20) return 1;
        }
    }
    return 0;
}`,
            "options": [
                "Sim, o loop externo itera pelas baterias e o interno pelos bytes, com early return global",
                "Não, falta liberar memória com free() no final",
                "Não, deve usar array[j] diretamente em vez de &array[j]",
                "Não, o loop interno deve ser até 'size' em vez de 4"
            ],
            "correct": 0,
            "explanation": "A implementação é correta: &array[j] obtém o endereço da j-ésima bateria, e o early return para ao encontrar o primeiro problema em qualquer bateria.",
            "theory": "Padrão para arrays: loop externo para elementos, loop interno para bytes",
            "prerequisite": "&array[j] obtém endereço do j-ésimo elemento do array",
            "difficulty": "Intermediário",
            "timeEstimate": "3 minutos"
        },
        {
            "question": "O que acontece ao chamar check_battery com um ponteiro NULL?",
            "code": `int result = check_battery(NULL);
// O que acontece?`,
            "options": [
                "Retorna 0, tratando NULL como bateria válida sem problemas",
                "Retorna 1, considerando NULL como problema",
                "Comportamento indefinido, possivelmente segmentation fault ao dereferenciar NULL",
                "Erro de compilação por parâmetro inválido"
            ],
            "correct": 2,
            "explanation": "Dereferenciar NULL (acessar cells[0]) causa segmentation fault; ponteiros devem ser validados antes de uso.",
            "theory": "Sempre validar ponteiro NULL antes de dereferenciar em código de produção",
            "prerequisite": "Dereferenciar NULL causa segmentation fault",
            "difficulty": "Avançado",
            "timeEstimate": "3 minutos"
        },
        {
            "question": "Nesta variação, a função conta e retorna o número de bytes problemáticos em vez de um booleano?",
            "code": `int count_bad_cells(unsigned int *x) {
    unsigned char *cells = (unsigned char *)x;
    int count = 0;
    for (int i = 0; i < 4; i++) {
        if (cells[i] < 0x20) {
            count++;
        }
    }
    return count;
}`,
            "options": [
                "Não, retorna 1 se houver problema, 0 se não",
                "Sim, retorna a contagem exata de bytes < 0x20",
                "Não, retorna o índice do primeiro problema",
                "Não, sempre retorna 4 independentemente"
            ],
            "correct": 1,
            "explanation": "A função acumula 'count' para cada byte < 0x20 e retorna o total, sem early return.",
            "theory": "Variação: contagem em vez de detecção booleana",
            "prerequisite": "Sem early return = verifica todos os bytes sempre",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Qual é o erro se esquecermos o operador & ao chamar a função com uma variável?",
            "code": `unsigned int battery = 0x12345678;
int result = check_battery(battery);  // ESQUECEU &`,
            "options": [
                "Compila e executa normalmente, mas com comportamento indefinido",
                "Erro de compilação, pois tipos são incompatíveis (unsigned int vs unsigned int*)",
                "Comportamento indefinido durante execução",
                "Sempre retorna 0, ignorando o valor"
            ],
            "correct": 1,
            "explanation": "O compilador detecta incompatibilidade de tipos: a função espera um ponteiro, mas recebe um valor inteiro.",
            "theory": "C é fortemente tipado para ponteiros - & é necessário para obter endereço",
            "prerequisite": "variável vs &variável: valor vs endereço",
            "difficulty": "Iniciante",
            "timeEstimate": "1 minuto"
        },
        {
            "question": "Nesta variação, a função retorna 1 apenas se TODOS os bytes estiverem acima do limite?",
            "code": `int check_all_above(unsigned int *x, unsigned char min) {
    unsigned char *cells = (unsigned char *)x;
    for (int i = 0; i < 4; i++) {
        if (cells[i] <= min) return 0;  // early return se algum falhar
    }
    return 1;
}`,
            "options": [
                "Não, retorna 1 se algum byte > min",
                "Sim, retorna 1 se todos os bytes > min",
                "Não, retorna 1 se algum byte = min",
                "Não, retorna 1 se nenhum byte > min"
            ],
            "correct": 1,
            "explanation": "Retorna 0 se qualquer byte <= min; só chega ao return 1 se todos passarem.",
            "theory": "Padrão ALL: verificar falha early, retornar sucesso no final",
            "prerequisite": "ALL(x) ≡ NOT(ANY(NOT x)) - De Morgan's law",
            "difficulty": "Avançado",
            "timeEstimate": "3 minutos"
        },
        {
            "question": "Dado o valor 0x00000000 e um limite de 0x01, qual seria o retorno se o limite fosse alterado para 0x01?",
            "code": `unsigned int bat = 0x00000000;  // Todos bytes = 0x00
int result = check_battery(&bat);  // limite 0x20 padrão
// Mas e se limite fosse 0x01?`,
            "options": [
                "0, pois 0x00 > 0x01 é falso, mas lógica invertida",
                "1, pois 0x00 < 0x01 em todos os bytes",
                "Depende da ordem dos bytes (endianness)",
                "Erro, limite muito baixo para valores zero"
            ],
            "correct": 1,
            "explanation": "0x00 < 0x01 é verdadeiro, então retorna 1 na primeira iteração.",
            "theory": "0x00 é sempre problemático com qualquer limite > 0",
            "prerequisite": "0x00 = 0 decimal, menor que qualquer limite positivo",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Qual é o comportamento ao passar um ponteiro desalinhado para check_battery em algumas arquiteturas?",
            "code": `char buffer[10] = {0x10, 0x20, 0x30, 0x40, 0x50};
unsigned int *misaligned = (unsigned int*)(buffer + 1);
int result = check_battery(misaligned);`,
            "options": [
                "Funciona normalmente em todas as arquiteturas",
                "Erro de compilação por cast inválido",
                "Comportamento indefinido ou bus error em arquiteturas que não suportam unaligned access",
                "Sempre retorna 1 devido ao desalinhamento"
            ],
            "correct": 2,
            "explanation": "Acessos desalinhados podem causar erros em algumas arquiteturas; embora RV32 tolere, é má prática para portabilidade.",
            "theory": "Boa prática: sempre alinhar dados para evitar problemas de portabilidade",
            "prerequisite": "Unaligned access = endereço não múltiplo do tamanho do tipo",
            "difficulty": "Avançado",
            "timeEstimate": "3 minutos"
        },
        {
            "question": "Qual é a vantagem de performance do early return na implementação original comparado à versão sem ele?",
            "code": `// Com early return:
for (int i = 0; i < 4; i++) {
    if (cells[i] < 0x20) return 1;  // ← pode parar cedo
}
return 0;

// Sem early return: 
int problem = 0;
for (int i = 0; i < 4; i++) {
    if (cells[i] < 0x20) problem = 1;  // ← sempre 4 iterações
}
return problem;`,
            "options": [
                "Early return é sempre mais lento devido ao branch",
                "Early return pode executar menos iterações se encontrar problema cedo",
                "Não há diferença, o compilador otimiza ambas igualmente",
                "Early return consome mais memória para o stack"
            ],
            "correct": 1,
            "explanation": "Early return permite sair após a primeira falha, potencialmente executando menos instruções do que sempre rodar o loop completo.",
            "theory": "Early return = otimização de caso comum (problemas são raros)",
            "prerequisite": "Menos iterações = menos instruções executadas = mais rápido",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Como modificar o return dentro do loop para retornar o índice do primeiro byte problemático?",
            "code": `int find_first_bad_cell(unsigned int *x) {
    unsigned char *cells = (unsigned char *)x;
    for (int i = 0; i < 4; i++) {
        if (cells[i] < 0x20) {
            return ???;
        }
    }
    return -1;  // nenhum problema
}`,
            "options": [
                "1, retornando sempre positivo para problema",
                "i, o índice do primeiro byte < 0x20",
                "cells[i], o valor do byte problemático",
                "&cells[i], o endereço do byte problemático"
            ],
            "correct": 1,
            "explanation": "Retornar 'i' fornece o índice (0-3) do primeiro problema; -1 indica nenhum.",
            "theory": "Variação: retornar informação mais específica em vez de booleano",
            "prerequisite": "Índice identifica qual byte específico falhou",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Dado o valor 0x20000000 (bytes: 0x20, 0x00, 0x00, 0x00 em little-endian), qual é o retorno esperado?",
            "code": `unsigned int bat = 0x20000000;  // MSB = 0x20, outros = 0x00
int result = check_battery(&bat);
// result = ?`,
            "options": [
                "0, pois o byte MSB 0x20 compensa os zeros",
                "1, pois os bytes 0x00 são < 0x20",
                "Depende da ordem de iteração no loop",
                "Erro, valor com zeros inválido"
            ],
            "correct": 1,
            "explanation": "Bytes 0x00 < 0x20 disparam o return 1; basta um byte problemático.",
            "theory": "ANY condition: uma única falha falha toda a verificação",
            "prerequisite": "Condição OR: basta um verdadeiro para resultado verdadeiro",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Nesta variação, a função retorna 1 se algum byte estiver fora da faixa [min, max]?",
            "code": `int check_battery_range(unsigned int *x, unsigned char min, unsigned char max) {
    unsigned char *cells = (unsigned char *)x;
    for (int i = 0; i < 4; i++) {
        if (cells[i] < min || cells[i] > max) {
            return 1;
        }
    }
    return 0;
}`,
            "options": [
                "Sim, se algum byte < min ou > max",
                "Não, se algum byte > min e < max",
                "Sim, se todos os bytes estiverem entre min e max",
                "Não, se nenhum byte estiver entre min e max"
            ],
            "correct": 0,
            "explanation": "Retorna 1 na primeira detecção de byte fora da faixa (< min OU > max).",
            "theory": "Verificação de faixa: valor < min OU valor > max → problema",
            "prerequisite": "Fora da faixa = abaixo do mínimo OU acima do máximo",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Qual é a diferença prática entre usar < 0x20 e <= 0x20 na condição de verificação?",
            "code": `// Versão A: if (cells[i] < 0x20) return 1;
// Versão B: if (cells[i] <= 0x20) return 1;`,
            "options": [
                "A considera 0x20 OK e detecta < 0x20; B considera 0x20 problema também",
                "A detecta 0x20 como problema; B apenas < 0x20",
                "São equivalentes, sem diferença no comportamento",
                "A é mais restritiva, detectando mais problemas que B"
            ],
            "correct": 0,
            "explanation": "< é exclusivo (0x20 OK), <= é inclusivo (0x20 problema).",
            "theory": "< vs ≤ muda o comportamento no valor exato do limite",
            "prerequisite": "Operadores de comparação: < (exclusivo) vs ≤ (inclusivo)",
            "difficulty": "Iniciante",
            "timeEstimate": "1 minuto"
        },
        {
            "question": "A sintaxe de chamada usando compound literal é válida para testar a função sem declarar uma variável explícita?",
            "code": `int result = check_battery(&(unsigned int){0x12345678});`,
            "options": [
                "Não, sintaxe inválida e causa erro de compilação",
                "Sim, cria uma variável temporária anônima com o valor especificado",
                "Não, passa o valor diretamente sem endereço",
                "Sim, mas só funciona em C++ não em C padrão"
            ],
            "correct": 1,
            "explanation": "Compound literal (C99) cria uma temporária, e & obtém seu endereço para a chamada.",
            "theory": "Compound literal: (tipo){valor} cria variável temporária do tipo especificado",
            "prerequisite": "Recurso do C99 para literais compostos",
            "difficulty": "Avançado",
            "timeEstimate": "3 minutos"
        }
    ]
},
    {
    "id": 5,
    "name": "Makefile e Compilação",
    "icon": "Settings", 
    "color": "bg-orange-500",
    "description": "Automatização de compilação, flags e compilação cruzada para RV32",
    "theory": {
        "title": "📚 Teoria: Makefile e Processo de Compilação",
        "content": `
**🎯 OBJETIVO DO NÍVEL:**
Dominar Makefiles para automatizar compilação e entender compilação cruzada para RV32.

**1. ESTRUTURA BÁSICA DE UM MAKEFILE:**
┌─────────────────────────────────────────────────────────┐
│ alvo: dependências                                      │
│ → comando1                                             │
│ → comando2                                             │
└─────────────────────────────────────────────────────────┘

**EXEMPLO COMPLETO:**
programa: main.o funcoes.o
→ gcc main.o funcoes.o -o programa

main.o: main.c funcoes.h
→ gcc -c main.c -o main.o

funcoes.o: funcoes.c funcoes.h  
→ gcc -c funcoes.c -o funcoes.o

clean:
→ rm -f *.o programa

**2. VARIÁVEIS COMUNS NO MAKEFILE:**
CC = gcc                          # Compilador
CFLAGS = -Wall -Wextra -g        # Flags de compilação
TARGET = programa                # Executável final
SOURCES = main.c funcoes.c       # Fontes
OBJECTS = main.o funcoes.o       # Objetos

**3. FLAGS ESSENCIAIS PARA ARQCP:**
-Wall          # Ativa todos warnings básicos
-Wextra        # Warnings adicionais
-g             # Informação de debug
-fanalyzer     # Análise estática (DETECÇÃO DE ERROS!)
-O2            # Otimização (cuidado com debug)
-std=c99       # Padrão C (importante!)

**4. COMPILAÇÃO CRUZADA RV32:**
CC = riscv32-unknown-elf-gcc
CFLAGS = -Wall -Wextra -fanalyzer -g
ARCHFLAGS = -march=rv32im -mabi=ilp32

**5. PROCESSO DE COMPILAÇÃO EM ETAPAS:**
1. Pré-processamento: gcc -E main.c → main.i
2. Compilação:      gcc -S main.i → main.s  
3. Assembly:        gcc -c main.s → main.o
4. Linking:         gcc *.o → programa

**6. MAKEFILE PARA ARQCP (MODELO):**
CC = riscv32-unknown-elf-gcc
CFLAGS = -Wall -Wextra -fanalyzer -g
ARCHFLAGS = -march=rv32im -mabi=ilp32

programa.elf: main.o func1.o func2.o
→ $(CC) $(CFLAGS) $(ARCHFLAGS) main.o func1.o func2.o -o programa.elf

main.o: main.c func1.h func2.h
→ $(CC) $(CFLAGS) $(ARCHFLAGS) -c main.c

func1.o: func1.c func1.h
→ $(CC) $(CFLAGS) $(ARCHFLAGS) -c func1.c

clean:
→ rm -f *.o *.elf

**7. FLAGS DE ARQUITETURA RV32:**
-march=rv32im   # ISA: RV32I + Multiplicação
-mabi=ilp32     # ABI: int, long, pointer = 32 bits
-mcmodel=medany # Modelo de código

**8. REGRAS ÚTEIS:**
clean:      Remove arquivos objeto e executáveis
run:        Executa o programa (se nativo)
debug:      Prepara para debugging
all:        Compila tudo
distclean:  Limpeza completa

**9. DICAS IMPORTANTES:**
• SEMPRE use -Wall -Wextra -fanalyzer
• Teste o Makefile com 'make clean && make'
• Verifique se todos headers têm include guards
• Mantenha dependências atualizadas no Makefile
• Use $(RM) em vez de rm -f para portabilidade
`,
        "visual": `
┌─────────────────────────────────────────────────────────┐
│          FLUXO COMPILAÇÃO COM MAKEFILE                  │
├─────────────────────────────────────────────────────────┤
│  [make]                                                 │
│     ↓                                                   │
│  Verifica dependências:                                 │
│  - main.o precisa de main.c? Atualizado?                │
│  - func1.o precisa de func1.c? Atualizado?              │
│     ↓                                                   │
│  Compila o que precisa:                                 │
│  → gcc -c main.c -o main.o                              │
│  → gcc -c func1.c -o func1.o                            │
│     ↓                                                   │
│  Linkagem final:                                        │
│  → gcc main.o func1.o -o programa                       │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│          ESTRUTURA DE PASTAS TÍPICA                     │
├─────────────────────────────────────────────────────────┤
│  exercicio/                                             │
│  ├── Makefile                                           │
│  ├── main.c                                             │
│  ├── func1.h                                            │
│  ├── func1.c                                            │
│  ├── func2.h                                            │
│  └── func2.c                                            │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│          ETAPAS DE COMPILAÇÃO                           │
├─────────────┬────────────────────┬──────────────────────┤
│ Etapa       │ Comando           │ Saída                │
├─────────────┼────────────────────┼──────────────────────┤
│ Pré-process │ gcc -E main.c     │ main.i (C expandido) │
│ Compilação  │ gcc -S main.i     │ main.s (assembly)    │
│ Assembly    │ gcc -c main.s     │ main.o (objeto)      │
│ Linkagem    │ gcc main.o ...    │ programa (executável)│
└─────────────┴────────────────────┴──────────────────────┘
`,
        "keyPoints": [
            "Makefile automatiza compilação e só recompila o necessário",
            "Sempre use -Wall -Wextra -fanalyzer para detecção de erros", 
            "Compilação cruzada: riscv32-unknown-elf-gcc para RV32",
            "Dependências corretas = compilações eficientes",
            "Flags RV32: -march=rv32im -mabi=ilp32"
        ]
    },
    "exercises": [
        // EXERCÍCIOS ORIGINAIS (8 questões)
        {
            "question": "Qual comando compila main.c para main.o?",
            "code": `// Quero compilar main.c para objeto`,
            "options": [
                "gcc main.c -o main.o",
                "gcc -c main.c -o main.o",
                "gcc main.o -c main.c", 
                "gcc -o main.o main.c"
            ],
            "correct": 1,
            "explanation": "gcc -c main.c -o main.o: -c compila sem linkar, -o especifica output. Esta é a forma correta de gerar arquivos objeto.",
            "theory": "Flag -c: compila para objeto sem linkagem",
            "prerequisite": "Compilação separada: .c → .o (objeto) depois .o → executável",
            "difficulty": "Iniciante",
            "timeEstimate": "1 minuto"
        },
        {
            "question": "Qual a função da flag -fanalyzer?",
            "code": `CFLAGS = -Wall -Wextra -fanalyzer -g`,
            "options": [
                "Otimiza o código para velocidade",
                "Ativa análise estática de código", 
                "Compila para arquitetura RISC-V",
                "Gera informação de debug"
            ],
            "correct": 1,
            "explanation": "-fanalyzer faz análise estática profunda do código, detectando potenciais erros como memory leaks, use-after-free, etc. É ESSENCIAL para ARQCP.",
            "theory": "-fanalyzer = análise estática avançada (como um valgrind em tempo de compilação)",
            "prerequisite": "Análise estática encontra erros sem executar o programa",
            "difficulty": "Iniciante",
            "timeEstimate": "1 minuto"
        },
        {
            "question": "Qual problema este Makefile resolve?",
            "code": `programa: main.o funcoes.o
    gcc main.o funcoes.o -o programa

main.o: main.c funcoes.h
    gcc -c main.c -o main.o

funcoes.o: funcoes.c funcoes.h
    gcc -c funcoes.c -o funcoes.o`,
            "options": [
                "Compilação manual arquivo por arquivo",
                "Recompilação automática apenas do necessário", 
                "Otimização do código final",
                "Conversão entre arquiteturas"
            ],
            "correct": 1,
            "explanation": "Makefile verifica timestamps: se main.c foi modificado após main.o, recompila apenas main.o e relinka. Economiza tempo em projetos grandes.",
            "theory": "Make = sistema de build que só recompila o que mudou",
            "prerequisite": "make verifica datas de modificação dos arquivos",
            "difficulty": "Iniciante",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Para que serve a regra 'clean'?",
            "code": `clean:
    rm -f *.o programa`,
            "options": [
                "Compila o projeto rapidamente",
                "Remove arquivos objeto e executáveis", 
                "Limpa o código fonte",
                "Prepara para debugging"
            ],
            "correct": 1,
            "explanation": "'clean' remove todos arquivos gerados pela compilação (*.o, executáveis), útil para recompilação limpa ou antes de enviar para Moodle.",
            "theory": "clean = limpeza de arquivos buildados (obrigatório antes do zip para Moodle)",
            "prerequisite": "Arquivos .o e executáveis não devem ser enviados para Moodle",
            "difficulty": "Iniciante",
            "timeEstimate": "1 minuto"
        },
        {
            "question": "Qual compilador usar para RV32?",
            "code": `# Compilação cruzada para RISC-V 32 bits`,
            "options": [
                "gcc (compilador nativo)",
                "riscv32-unknown-elf-gcc", 
                "clang (alternativa rápida)",
                "rv32-gcc (versão especial)"
            ],
            "correct": 1,
            "explanation": "riscv32-unknown-elf-gcc é o compilador cruzado que gera código para RISC-V 32 bits a partir de uma máquina x86/ARM.",
            "theory": "Compilação cruzada: compilar em uma arquitetura para executar em outra",
            "prerequisite": "RV32 = RISC-V 32 bits, precisa de compilador específico",
            "difficulty": "Intermediário",
            "timeEstimate": "1 minuto"
        },
        {
            "question": "O que faz $(CC) no Makefile?",
            "code": `CC = gcc
programa: main.c
    $(CC) -o programa main.c`,
            "options": [
                "Chama o compilador C definido na variável CC", 
                "É um comando especial do Make",
                "Significa 'C Compiler' literalmente",
                "Gera código assembly"
            ],
            "correct": 0,
            "explanation": "$(CC) expande para o valor da variável CC (gcc neste caso). Variáveis deixam o Makefile mais flexível e fácil de manter.",
            "theory": "Variáveis no Makefile: $(NOME) expande para valor da variável",
            "prerequisite": "Makefile suporta variáveis para reutilização e configuração",
            "difficulty": "Iniciante",
            "timeEstimate": "1 minuto"
        },
        {
            "question": "Qual flag gera informação de debug?",
            "code": `# Para debugging com gdb`,
            "options": [
                "-O2",
                "-Wall", 
                "-g", 
                "-c"
            ],
            "correct": 2,
            "explanation": "-g inclui informação de debugging (símbolos, linhas) no executável, essencial para usar com gdb.",
            "theory": "-g = debugging symbols, necessário para gdb funcionar corretamente",
            "prerequisite": "Debugging requer informações adicionais no binário",
            "difficulty": "Iniciante",
            "timeEstimate": "1 minuto"
        },
        {
            "question": "Por que usar -Wall -Wextra?",
            "code": `CFLAGS = -Wall -Wextra -fanalyzer -g`,
            "options": [
                "Para compilar mais rápido",
                "Para ativar a maioria dos warnings do compilador", 
                "Para gerar código otimizado",
                "Para compatibilidade com C++"
            ],
            "correct": 1,
            "explanation": "-Wall ativa warnings importantes, -Wextra ativa warnings adicionais. Juntos detectam muitos erros potenciais antes da execução.",
            "theory": "Warnings são amigos! Detectam problemas potenciais no código",
            "prerequisite": "Compilador pode detectar muitos erros comuns se warnings estiverem ativos",
            "difficulty": "Iniciante",
            "timeEstimate": "1 minuto"
        },

        // NOVOS EXERCÍCIOS EXPANDIDOS (22 questões adicionais)
        {
            "question": "O que significa -march=rv32im?",
            "code": `ARCHFLAGS = -march=rv32im -mabi=ilp32`,
            "options": [
                "Compila para ARM 32 bits",
                "Arquitetura RV32I com extensão de multiplicação", 
                "Otimização nível 2 para RV32",
                "Modo de compatibilidade"
            ],
            "correct": 1,
            "explanation": "rv32im = RV32I (base) + M (multiplicação/divisão). É o conjunto de instruções suportado pelo processador RV32 do curso.",
            "theory": "-march especifica a arquitetura alvo: rv32i = base, m = multiplicação",
            "prerequisite": "RV32I = instruções base, M = multiplicação/divisão",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Qual a diferença entre -O0, -O1, -O2?",
            "code": `CFLAGS = -O2 -Wall -Wextra -g`,
            "options": [
                "-O0 sem otimização, -O1 básica, -O2 agressiva",
                "-O0 debug, -O1 release, -O2 experimental", 
                "-O0 compila rápido, -O2 executa rápido",
                "Todas são equivalentes"
            ],
            "correct": 0,
            "explanation": "-O0 = sem otimização (melhor para debug), -O1 = otimizações básicas, -O2 = otimizações agressivas (pode dificultar debug).",
            "theory": "Níveis de otimização: trade-off entre velocidade de compilação e performance",
            "prerequisite": "Otimização rearranja código - pode alterar ordem de execução",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Como criar uma regra 'all' que compila tudo?",
            "code": `# Quero que 'make all' compile o programa`,
            "options": [
                "all: clean programa",
                "all: programa", 
                "all: $(OBJECTS)",
                "all: ; make programa"
            ],
            "correct": 1,
            "explanation": "'all: programa' faz com que 'make all' construa o alvo 'programa'. É convenção ter 'all' como primeiro alvo.",
            "theory": "Regra 'all' é convenção para compilar o projeto completo",
            "prerequisite": "Primeira regra no Makefile é executada por padrão com 'make'",
            "difficulty": "Iniciante",
            "timeEstimate": "1 minuto"
        },
        {
            "question": "O que acontece se esquecer dependências de headers?",
            "code": `# MAU: esqueceu dependências
main.o: main.c           # falta funcoes.h!
    gcc -c main.c`,
            "options": [
                "Compila mas pode ter erros se header mudar",
                "Erro de compilação imediato", 
                "Make detecta automaticamente",
                "Funciona normalmente"
            ],
            "correct": 0,
            "explanation": "Se funcoes.h mudar, main.o não será recompilado automaticamente, podendo causar bugs sutis. Dependências incompletas = problemas!",
            "theory": "Dependências devem incluir TODOS arquivos que afetam a compilação",
            "prerequisite": "make só recompila se dependências listadas forem mais novas",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Para que serve -std=c99?",
            "code": `CFLAGS = -std=c99 -Wall -Wextra`,
            "options": [
                "Compila código C++ como C",
                "Especifica padrão C de 1999", 
                "Ativa extensões GNU",
                "Desabilita recursos modernos"
            ],
            "correct": 1,
            "explanation": "-std=c99 força o compilador a seguir o padrão C99, evitando extensões específicas do compilador e garantindo portabilidade.",
            "theory": "Padrões C: c89, c99, c11 - cada um adiciona/remove funcionalidades",
            "prerequisite": "C99 introduziu // comentários, variáveis em qualquer lugar, etc",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Como gerar assembly a partir de código C?",
            "code": `# Quero ver código assembly do main.c`,
            "options": [
                "gcc -E main.c",
                "gcc -S main.c", 
                "gcc -c main.c", 
                "gcc -A main.c"
            ],
            "correct": 1,
            "explanation": "gcc -S main.c gera main.s com código assembly. Útil para entender o que o compilador está gerando.",
            "theory": "-S = compila para assembly (para de compilar após geração do .s)",
            "prerequisite": "Compilação: .c → .s (assembly) → .o (objeto) → executável",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "O que significa -mabi=ilp32?",
            "code": `ARCHFLAGS = -march=rv32im -mabi=ilp32`,
            "options": [
                "ABI onde int, long, pointer são 32 bits",
                "ABI para Linux 32 bits", 
                "ABI com floats de 64 bits",
                "ABI experimental"
            ],
            "correct": 0,
            "explanation": "ilp32 = int, long, pointer = 32 bits. Esta é a ABI padrão para RV32. lp64 seria para RV64 (long, pointer = 64 bits).",
            "theory": "ABI = Application Binary Interface = convenções de chamada e tamanhos de tipos",
            "prerequisite": "ABI define como funções se chamam, tamanhos de tipos, etc",
            "difficulty": "Avançado",
            "timeEstimate": "3 minutos"
        },
        {
            "question": "Qual problema neste Makefile?",
            "code": `programa: main.o funcoes.o
    gcc main.o funcoes.o -o programa

main.o: main.c
    gcc -c main.c

clean:
    rm *.o programa`,
            "options": [
                "Falta -f nos comandos rm",
                "Dependências incompletas (faltam headers)", 
                "Variáveis não usadas",
                "Todas as anteriores"
            ],
            "correct": 1,
            "explanation": "Principal problema: dependências incompletas! main.o deveria depender também de funcoes.h se main.c o inclui. rm sem -f dá erro se arquivos não existirem.",
            "theory": "Dependências corretas são críticas para builds confiáveis",
            "prerequisite": "Headers afetam compilação - devem estar nas dependências",
            "difficulty": "Intermediário",
            "timeEstimate": "3 minutos"
        },
        {
            "question": "Como usar variáveis para lista de fontes?",
            "code": `# Quero definir SOURCES e OBJECTS`,
            "options": [
                "SOURCES = main.c funcoes.c; OBJECTS = main.o funcoes.o",
                "SOURCES = main.c funcoes.c\nOBJECTS = $(SOURCES:.c=.o)", 
                "SOURCES = *.c; OBJECTS = *.o",
                "Não é possível com make"
            ],
            "correct": 1,
            "explanation": "$(SOURCES:.c=.o) substitui .c por .o na lista SOURCES. Esta é a forma idiomática de gerar lista de objetos a partir de fontes.",
            "theory": "Pattern substitution: $(VAR:.old=.new) substitui sufixos",
            "prerequisite": "Make tem funções de string para manipulação de variáveis",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "O que faz o comando 'make -n'?",
            "code": `$ make -n`,
            "options": [
                "Compila sem warnings",
                "Mostra comandos que seriam executados (dry run)", 
                "Força recompilação de tudo",
                "Executa em modo silencioso"
            ],
            "correct": 1,
            "explanation": "'make -n' faz dry run - mostra os comandos que seriam executados sem realmente executá-los. Útil para debug de Makefiles.",
            "theory": "-n = modo simulação, mostra o que seria feito",
            "prerequisite": "Dry run ajuda a entender o que make faria",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Qual a vantagem de usar $(RM) em vez de rm -f?",
            "code": `clean:
    $(RM) *.o programa`,
            "options": [
                "$(RM) é mais rápido",
                "$(RM) é definido como 'rm -f' mas mais portável", 
                "$(RM) funciona no Windows",
                "$(RM) não precisa do -f"
            ],
            "correct": 1,
            "explanation": "$(RM) é uma variável padrão do make, normalmente definida como 'rm -f'. Usá-la torna o Makefile mais portável entre sistemas.",
            "theory": "Variáveis built-in do make: $(RM), $(CC), $(CFLAGS), etc",
            "prerequisite": "Make tem variáveis predefinidas para comandos comuns",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Como pré-processar um arquivo C?",
            "code": `# Quero ver código após pré-processamento`,
            "options": [
                "gcc -P main.c",
                "gcc -E main.c", 
                "gcc -C main.c",
                "gcc --preprocess main.c"
            ],
            "correct": 1,
            "explanation": "gcc -E main.c executa apenas o pré-processador, expandindo includes e macros. Saída vai para stdout.",
            "theory": "Pré-processamento: expande #include, #define, #ifdef, etc",
            "prerequisite": "Pré-processador roda antes da compilação propriamente dita",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "O que significa -mcmodel=medany?",
            "code": `ARCHFLAGS = -march=rv32im -mabi=ilp32 -mcmodel=medany`,
            "options": [
                "Modelo de código médio-anywhere (PC-relativo)",
                "Modelo de memória compacta", 
                "Modo de compatibilidade média",
                "Otimização para memória"
            ],
            "correct": 0,
            "explanation": "medany = Medium Anywhere - código e dados podem estar em qualquer lugar, mas offsets são PC-relativos de 32 bits. Comum em sistemas embedded.",
            "theory": "Modelos de código definem restrições de posicionamento de código/dados",
            "prerequisite": "RV32 tem diferentes modelos de memória para diferentes usos",
            "difficulty": "Avançado",
            "timeEstimate": "3 minutos"
        },
        {
            "question": "Como compilar com informações de profiling?",
            "code": `# Para análise de performance`,
            "options": [
                "-pg",
                "-O3", 
                "-fast",
                "-profile"
            ],
            "correct": 0,
            "explanation": "-pg inclui código de profiling para gprof. Gera dados de tempo de execução de funções para análise de performance.",
            "theory": "Profiling medica performance do código em execução",
            "prerequisite": "gprof é ferramenta de profiling do GCC",
            "difficulty": "Avançado",
            "timeEstimate": "3 minutos"
        },
        {
            "question": "Qual erro se usar -O2 com -g?",
            "code": `CFLAGS = -O2 -g -Wall -Wextra`,
            "options": [
                "Nenhum - são compatíveis",
                "Otimização remove informações de debug", 
                "Conflito de flags - erro de compilação",
                "-g sobrescreve -O2"
            ],
            "correct": 1,
            "explanation": "-O2 e -g são compatíveis, mas otimização pode rearranjar código, dificultando debugging (variáveis podem ser otimizadas fora, linhas não correspondem).",
            "theory": "Otimização + debugging = trade-off entre performance e debugabilidade",
            "prerequisite": "Otimizador modifica código - pode quebrar correspondência linha-fonte",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Como criar uma regra padrão para .c → .o?",
            "code": `# Quero regra implícita para compilar .c para .o`,
            "options": [
                ".c.o: ; $(CC) -c $< -o $@",
                "%.o: %.c ; $(CC) -c $< -o $@", 
                "pattern: *.c → *.o",
                "Make já tem esta regra por padrão"
            ],
            "correct": 3,
            "explanation": "Make já tem regras implícitas para .c → .o! Não precisa definir. Basta listar as dependências corretas.",
            "theory": "Make tem regras implícitas built-in para processos comuns",
            "prerequisite": "Regras implícitas automatizam tarefas comuns como .c → .o",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "O que são e para que servem os arquivos .d?",
            "code": `# Arquivos de dependência .d`,
            "options": [
                "Arquivos de documentação",
                "Arquivos gerados com dependências automáticas", 
                "Arquivos de dados",
                "Arquivos temporários do debugger"
            ],
            "correct": 1,
            "explanation": "Arquivos .d são gerados automaticamente (com -MMD) e contém dependências detectadas automaticamente, resolvendo o problema de dependências de headers.",
            "theory": "Dependências automáticas: gcc -MMD gera .d com dependências detectadas",
            "prerequisite": "Dependências manuais de headers são propensas a erro",
            "difficulty": "Avançado",
            "timeEstimate": "3 minutos"
        },
        {
            "question": "Como compilar para depuração sem otimização?",
            "code": `# Melhor para debugging`,
            "options": [
                "-O0 -g",
                "-O2 -g", 
                "-g -pg",
                "-O1 -g"
            ],
            "correct": 0,
            "explanation": "-O0 (sem otimização) + -g é melhor para debugging porque o código gerado corresponde exatamente ao código fonte, sem rearranjos do otimizador.",
            "theory": "-O0 garante que debugging seja mais previsível e fácil",
            "prerequisite": "Otimizador modifica código - dificulta debugging",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "O que faz a flag -v do gcc?",
            "code": `gcc -v main.c`,
            "options": [
                "Compila em modo verbose (mostra etapas)",
                "Valida sintaxe sem compilar", 
                "Habilita todos warnings",
                "Versão do compilador"
            ],
            "correct": 0,
            "explanation": "-v mostra informações detalhadas sobre o processo de compilação: versões, paths, comandos executados. Útil para debug de problemas de compilação.",
            "theory": "Verbose mode mostra o que o compilador está fazendo internamente",
            "prerequisite": "GCC tem várias flags de diagnóstico e informação",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Como definir diferentes flags para debug e release?",
            "code": `# Quero CFLAGS diferentes por configuração`,
            "options": [
                "ifdef DEBUG\nCFLAGS = -O0 -g\nelse\nCFLAGS = -O2\nendif",
                "DEBUG_CFLAGS = -O0 -g\nRELEASE_CFLAGS = -O2", 
                "CFLAGS = $(DEBUG_CFLAGS) ou CFLAGS = $(RELEASE_CFLAGS)",
                "Todas as anteriores são possíveis"
            ],
            "correct": 3,
            "explanation": "Todas as abordagens funcionam! Pode usar condicionais make, variáveis diferentes, ou até Makefiles separados para debug/release.",
            "theory": "Múltiplas configurações são comuns em projetos reais",
            "prerequisite": "Make suporta condicionais e múltiplas formas de configuração",
            "difficulty": "Intermediário",
            "timeEstimate": "3 minutos"
        },
        {
            "question": "Qual a diferença entre =, :=, ?= no Makefile?",
            "code": `VAR1 = valor1
VAR2 := valor2  
VAR3 ?= valor3`,
            "options": [
                "= expansão recursiva, := expansão imediata, ?= set if not set",
                "Todas são equivalentes", 
                "= global, := local, ?= temporária",
                "= string, := número, ?= booleano"
            ],
            "correct": 0,
            "explanation": "= expansão recursiva (lazy), := expansão imediata (eager), ?= define apenas se variável não existir. := é geralmente mais seguro.",
            "theory": "Diferentes tipos de atribuição afetam quando variáveis são expandidas",
            "prerequisite": "Make tem avaliação lazy vs eager de variáveis",
            "difficulty": "Avançado",
            "timeEstimate": "3 minutos"
        },
        {
            "question": "Como fazer o make continuar após erros?",
            "code": `# Quero compilar todos arquivos mesmo com erros`,
            "options": [
                "make --continue",
                "make -k", 
                "make --ignore-errors",
                "make --force"
            ],
            "correct": 1,
            "explanation": "make -k (--keep-going) continua o máximo possível após encontrar erros. Útil para ver todos os erros de uma vez.",
            "theory": "-k = continue após erros, tenta compilar outros alvos",
            "prerequisite": "Por padrão, make para no primeiro erro",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "O que significa linker e para que serve?",
            "code": `# Etapa final: linking`,
            "options": [
                "Junta todos objetos em um executável",
                "Remove código não usado", 
                "Otimiza o executável final",
                "Gera código assembly"
            ],
            "explanation": "Linker (ld) junta todos arquivos objeto (.o) e bibliotecas em um executável final, resolvendo referências entre arquivos.",
            "theory": "Linking: resolve símbolos externos, combina seções, gera executável",
            "prerequisite": "Compilação separada gera múltiplos .o - linker os une",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        }
    ]
},
        {
    "id": 6,
    "name": "Exame Simulado - Pressão dos Pneus",
    "icon": "FileText",
    "color": "bg-blue-500",
    "description": "Simulação completa de exame: implementação de funções, main e Makefile",
    "theory": {
        "title": "📚 Estratégia para o Exame Real",
        "content": `
**🎯 ESTRATÉGIA DE RESOLUÇÃO EM 7 PASSOS:**

**1. ANÁLISE INICIAL (5 minutos):**
- Ler TODOS os enunciados com atenção
- Identificar EXATAMENTE o que cada função deve fazer
- Verificar restrições (proibição de shifts, bitwise, etc)
- Anotar valores críticos (0xFE no exemplo)

**2. PLANEAMENTO DAS FUNÇÕES (10 minutos):**
- Esquematizar o algoritmo para cada função
- Definir assinaturas exatas
- Planejar uso de ponteiros e casts

**3. IMPLEMENTAÇÃO FUNÇÃO 1 (15 minutos):**
- Criar arquivo func1.c
- Implementar low_pressure com cast para unsigned char*
- Testar mentalmente com casos extremos

**4. IMPLEMENTAÇÃO FUNÇÃO 2 (20 minutos):**
- Criar arquivo func2.c  
- Implementar check_tires chamando low_pressure
- Gerir array de ponteiros fill corretamente

**5. IMPLEMENTAÇÃO MAIN (10 minutos):**
- Criar main.c com array de teste
- Chamar check_tires e mostrar resultados
- Adicionar identificação como comentário

**6. MAKEFILE (10 minutos):**
- Criar Makefile com regras específicas
- Usar flags obrigatórias (-Wall -Wextra -fanalyzer)
- Incluir regra clean

**7. REVISÃO FINAL (10 minutos):**
- Testar compilação: make clean && make
- Verificar ausência de warnings
- Validar zip final (apenas .c, .h e Makefile)

**⚠️ ERROS CRÍTICOS A EVITAR:**
- Usar shifts/bitwise = 0% na função
- Esquecer identificação como comentário
- Não compilar ou ter warnings
- Incluir arquivos .o no zip
- Implementar tudo em main.c

**📝 ESTRUTURA OBRIGATÓRIA DOS ARQUIVOS:**
ex1_1234567/
├── func1.c      # low_pressure
├── func2.c      # check_tires  
├── main.c       # função main
└── Makefile     # compilação

**🎯 CRITÉRIOS DE AVALIAÇÃO (LEMBRETE):**
- Implementação: 30% (modular + algoritmos)
- Compilação: 30% (sem warnings = 50-100%)
- Execução: 40% (resultados corretos)
- Makefile: 5% (regras específicas)
`,
        "visual": `
┌─────────────────────────────────────────────────────────┐
│         TIMELINE DO EXAME (110 minutos)                 │
├──────┬──────────────────────────────────────────────────┤
│ 0-5  │ 📋 Análise completa do enunciado                │
│ 5-15 │ 🏗️  Planeamento das funções                     │
│ 15-30| ⚙️  Implementação func1.c (low_pressure)        │
│ 30-50| ⚙️  Implementação func2.c (check_tires)         │
│ 50-60| 🖥️  Implementação main.c                        │
│ 60-70| 🛠️  Criação do Makefile                         │
│ 70-80| 🔍 Teste e compilação                           │
│ 80-110| ✏️  Revisão final e criação do zip              │
└──────┴──────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│         CHECKLIST ANTES DO ZIP                          │
├─────────────────────────────────────────────────────────┤
│ ✅ Identificação em TODOS os arquivos .c                │
│ ✅ Versão do exercício como comentário                  │
│ ✅ Makefile funciona (make clean && make)               │
│ ✅ Sem warnings na compilação                           │
│ ✅ Apenas .c, .h e Makefile no zip                      │
│ ✅ Nome do zip: 1234567.zip (seu número)                │
│ ✅ Pasta: ex1_1234567/ (seu número)                     │
└─────────────────────────────────────────────────────────┘
`,
        "keyPoints": [
            "7 passos: análise → planeamento → implementação → revisão",
            "NUNCA usar shifts/bitwise - usar cast para unsigned char*", 
            "Identificação obrigatória em todos arquivos como comentário",
            "Testar compilação: make clean && make SEM warnings",
            "Zip deve conter APENAS .c, .h e Makefile"
        ]
    },
    "exercises": [
        {
            "question": "Como deve começar a implementação de low_pressure?",
            "code": `// func1.c - low_pressure
int low_pressure(unsigned int *x) {
    // ??? Primeiras linhas`,
            "options": [
                "if (*x < 0xFE) return 1;",
                "unsigned char *bytes = (unsigned char*)x;", 
                "for (int i = 0; i < 4; i++) {",
                "return 0; // caso base"
            ],
            "correct": 1,
            "explanation": "SEMPRE começar com o cast para unsigned char* para acesso byte-a-byte. É o padrão obrigatório do exame.",
            "theory": "Padrão: cast → loop → verificação byte a byte",
            "prerequisite": "Sem cast não conseguimos acessar bytes individuais do unsigned int",
            "difficulty": "Iniciante",
            "timeEstimate": "1 minuto"
        },
        {
            "question": "Qual a condição CORRETA para detectar pressão baixa?",
            "code": `// Detectar se byte precisa de enchimento
if (bytes[i] ??? 0xFE) {
    return 1;
}`,
            "options": [
                "== (igual a)",
                "> (maior que)", 
                "< (menor que)", 
                "!= (diferente de)"
            ],
            "correct": 2,
            "explanation": "Pressão baixa = valor MENOR que 0xFE (254). Valores 0xFE e 0xFF estão OK, valores 0x00-0xFD precisam de enchimento.",
            "theory": "Condição: valor < 0xFE → problema detectado",
            "prerequisite": "0xFE = 254 decimal, limite mínimo aceitável",
            "difficulty": "Iniciante",
            "timeEstimate": "1 minuto"
        },
        {
            "question": "Como preencher o array 'fill' em check_tires?",
            "code": `// check_tires - preencher array de ponteiros
if (low_pressure(&cars[i])) {
    // ??? Adicionar ao array fill
}`,
            "options": [
                "fill[count] = cars[i]; (valor)",
                "fill[count] = &cars[i]; (endereço)", 
                "*fill[count] = cars[i]; (conteúdo)",
                "fill = &cars[i]; (atribuição direta)"
            ],
            "correct": 1,
            "explanation": "fill é array de PONTEIROS, então deve armazenar ENDEREÇOS: fill[count] = &cars[i]. Assim mantemos referência aos carros problemáticos.",
            "theory": "Array de ponteiros: armazena endereços, não valores",
            "prerequisite": "& operador obtém endereço de uma variável/array element",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Qual deve ser o retorno de check_tires?",
            "code": `// check_tires deve retornar:
return ???;`,
            "options": [
                "count (número de carros problemáticos)",
                "fill (array de ponteiros)", 
                "n (total de carros)",
                "1 se algum problema, 0 caso contrário"
            ],
            "correct": 0,
            "explanation": "A função retorna o número de carros com problemas (count), que é também o número de elementos válidos no array fill.",
            "theory": "Retorno = contador de elementos problemáticos encontrados",
            "prerequisite": "count é incrementado cada vez que encontramos um carro problemático",
            "difficulty": "Iniciante",
            "timeEstimate": "1 minuto"
        },
        {
            "question": "Como chamar check_tires na main?",
            "code": `// main.c - chamada da função
int result = check_tires(???, NCARS, fill);`,
            "options": [
                "cars (array)",
                "&cars[0] (endereço do primeiro elemento)", 
                "&cars (endereço do array)",
                "Todas as anteriores estão corretas"
            ],
            "correct": 3,
            "explanation": "Todas as formas são equivalentes em C! cars decai para &cars[0], e &cars também é válido (mesmo endereço, tipo diferente).",
            "theory": "Em C, array como parâmetro decai para ponteiro para primeiro elemento",
            "prerequisite": "cars ≡ &cars[0] em contextos de ponteiro",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Qual estrutura do Makefile para este exame?",
            "code": `# Estrutura recomendada:`,
            "options": [
                "Apenas: gcc *.c -o programa",
                "Regras específicas para cada .c → .o e linkagem final", 
                "Makefile complexo com variáveis avançadas",
                "Não precisa de Makefile, compila manualmente"
            ],
            "correct": 1,
            "explanation": "Regras específicas (cada .c → .o separadamente + linkagem) dão mais pontos. Mostra domínio do processo de compilação.",
            "theory": "Makefile com regras específicas = 51-100% da nota do Makefile",
            "prerequisite": "Critério: regras genéricas 1-50%, específicas 51-100%",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "O que NÃO pode ser usado em low_pressure?",
            "code": `// Restrições do exame:`,
            "options": [
                "Operadores de shift (>>, <<)",
                "Operadores bitwise (&, |, ^, ~)", 
                "Rotates (não existem em C)",
                "Todos os anteriores"
            ],
            "correct": 3,
            "explanation": "TODOS estão proibidos! O exame exige uso de ponteiros e cast para unsigned char*. Shifts e bitwise resultam em 0% na função.",
            "theory": "Proibição absoluta: shifts, rotates, operadores bitwise",
            "prerequisite": "Solução obrigatória: cast para unsigned char* + acesso por índice",
            "difficulty": "Iniciante",
            "timeEstimate": "1 minuto"
        },
        {
            "question": "Como testar low_pressure com 0xFFFFFFFA?",
            "code": `// Teste: 0xFFFFFFFA em little-endian
// Bytes: [FA][FF][FF][FF]`,
            "options": [
                "Return 0 (todos OK - FA > FE?)",
                "Return 1 (FA < FE - problema)", 
                "Depende da endianness",
                "Erro - valor inválido"
            ],
            "correct": 1,
            "explanation": "0xFA = 250 < 0xFE = 254 → byte problemático! Retorna 1 na primeira iteração (early return).",
            "theory": "0xFA = 250 decimal < 254 = 0xFE → precisa enchimento",
            "prerequisite": "Comparação: 250 < 254 = true",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Quantos carros problemáticos no array de exemplo?",
            "code": `unsigned int cars[5] = {
    0xFFFFFFFF,  // Todos FF = OK
    0xFFFFFFFA,  // FA < FE = Problema  
    0x00000000,  // 00 < FE = Problema
    0xFCFDEFAB,  // FC,FD < FE = Problema  
    0xFFFFFFFF   // Todos FF = OK
};`,
            "options": [
                "1 carro problemático",
                "2 carros problemáticos", 
                "3 carros problemáticos",
                "4 carros problemáticos"
            ],
            "correct": 2,
            "explanation": "Carros 1, 2 e 3 têm problemas (índices 1, 2, 3). Total = 3 carros problemáticos. Carros 0 e 4 estão OK.",
            "theory": "Contagem: verificar cada carro individualmente com low_pressure",
            "prerequisite": "low_pressure retorna 1 para carros com pelo menos um byte < 0xFE",
            "difficulty": "Intermediário",
            "timeEstimate": "3 minutos"
        },
        {
            "question": "Como implementar a lógica de contagem em check_tires?",
            "code": `// check_tires - algoritmo completo
int count = 0;
for (int i = 0; i < n; i++) {
    if (???) {
        fill[count] = &cars[i];
        count++;
    }
}
return count;`,
            "options": [
                "low_pressure(cars[i])",
                "low_pressure(&cars[i])", 
                "low_pressure(cars)",
                "low_pressure(*cars)"
            ],
            "correct": 1,
            "explanation": "low_pressure espera ponteiro para unsigned int, então passamos &cars[i] (endereço do i-ésimo elemento do array).",
            "theory": "Chamada correta: low_pressure(&cars[i]) para cada carro",
            "prerequisite": "low_pressure recebe unsigned int* (ponteiro)",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Qual a saída esperada do programa completo?",
            "code": `// Com array de exemplo:
// cars = {0xFFFFFFFF, 0xFFFFFFFA, 0x00000000, 0xFCFDEFAB, 0xFFFFFFFF}
// Resultado impresso na main?`,
            "options": [
                "1",
                "2", 
                "3",
                "4"
            ],
            "correct": 2,
            "explanation": "3 carros problemáticos (índices 1, 2, 3). A main deve imprimir este valor retornado por check_tires.",
            "theory": "Output final = número de carros que precisam encher pneus",
            "prerequisite": "check_tires retorna count = número de elementos em fill",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Que flags OBRIGATÓRIAS no Makefile?",
            "code": `CFLAGS = ???`,
            "options": [
                "-O2 -fast",
                "-Wall -Wextra -fanalyzer", 
                "-std=c99 -pedantic",
                "-g -pg"
            ],
            "correct": 1,
            "explanation": "-Wall -Wextra -fanalyzer são OBRIGATÓRIAS! Detectam erros e dão warnings essenciais. -fanalyzer é crítico para análise estática.",
            "theory": "Flags mínimas: -Wall -Wextra -fanalyzer para compilação segura",
            "prerequisite": "Compilar sem warnings = 51-100% da nota de compilação",
            "difficulty": "Iniciante",
            "timeEstimate": "1 minuto"
        },
        {
            "question": "Como deve ser a identificação nos arquivos?",
            "code": `// Formato correto:`,
            "options": [
                "Apenas número de estudante",
                "Número, nome, turma E versão do exercício", 
                "Apenas nome e turma",
                "Não é necessário"
            ],
            "correct": 1,
            "explanation": "Identificação COMPLETA obrigatória: número, nome, turma E versão do exercício em TODOS os arquivos .c como comentário.",
            "theory": "Identificação completa em todos arquivos = parte da avaliação",
            "prerequisite": "Critério: identificação como comentário em todos source files",
            "difficulty": "Iniciante",
            "timeEstimate": "1 minuto"
        },
        {
            "question": "O que deve conter o zip final?",
            "code": `// Conteúdo do 1234567.zip:`,
            "options": [
                "Todos arquivos: .c, .h, .o, executáveis",
                "Apenas .c e Makefile (sem .o, sem executáveis)", 
                "Apenas os .c, sem Makefile",
                "Todo o conteúdo da pasta"
            ],
            "correct": 1,
            "explanation": "Zip deve conter APENAS source code (.c, .h) e Makefile. Arquivos .o e executáveis devem ser excluídos (usar make clean antes).",
            "theory": "Zip limpo: apenas fontes e Makefile, sem binários",
            "prerequisite": "make clean remove todos arquivos gerados pela compilação",
            "difficulty": "Iniciante",
            "timeEstimate": "1 minuto"
        },
        {
            "question": "Como compilar e testar antes do zip?",
            "code": `// Sequência de testes:`,
            "options": [
                "make clean && make && ./programa",
                "gcc main.c -o programa && ./programa", 
                "Apenas make run",
                "Não é possível testar"
            ],
            "correct": 0,
            "explanation": "make clean && make compila tudo do zero, mostrando se há warnings. Depois executar para verificar resultados.",
            "theory": "Teste final: compilação limpa + execução para validar resultados",
            "prerequisite": "make clean remove antigos, make recompila tudo",
            "difficulty": "Iniciante",
            "timeEstimate": "1 minuto"
        },
        {
            "question": "Estratégia se encontrar erro durante compilação?",
            "code": `// Primeiro erro: undefined reference to low_pressure`,
            "options": [
                "Ignorar e continuar",
                "Verificar se func1.c está no Makefile e se low_pressure está definida corretamente", 
                "Comentar a função problemática",
                "Usar alternativa com shifts"
            ],
            "correct": 1,
            "explanation": "undefined reference = função não encontrada. Verificar: func1.c está nas dependências? low_pressure está definida com assinatura correta?",
            "theory": "Erros de linkagem = funções não encontradas ou assinaturas incorretas",
            "prerequisite": "Makefile deve compilar todos .c necessários",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Como lidar com array vazio em check_tires?",
            "code": `// Caso n == 0:`,
            "options": [
                "Retornar -1 (erro)",
                "Retornar 0 (sem carros = sem problemas)", 
                "Ignorar e processar normalmente",
                "Causar segmentation fault"
            ],
            "correct": 1,
            "explanation": "n == 0 significa array vazio = nenhum carro para verificar. Retornar 0 é o comportamento correto e seguro.",
            "theory": "Caso borda: array vazio = retornar 0 (sem elementos problemáticos)",
            "prerequisite": "Loop for (i=0; i<n; i++) não executa se n==0",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Qual o propósito do array 'fill'?",
            "code": `// check_tires recebe unsigned int **fill`,
            "options": [
                "Armazenar os VALORES dos carros problemáticos",
                "Armazenar os ENDEREÇOS dos carros problemáticos", 
                "Armazenar índices dos carros problemáticos",
                "Não é usado"
            ],
            "correct": 1,
            "explanation": "fill é array de PONTEIROS (unsigned int*), portanto armazena ENDEREÇOS dos carros problemáticos, não seus valores.",
            "theory": "unsigned int **fill = array de ponteiros para unsigned int",
            "prerequisite": "Ponteiro para ponteiro = array de ponteiros",
            "difficulty": "Avançado",
            "timeEstimate": "3 minutos"
        },
        {
            "question": "Como garantir ausência de warnings?",
            "code": `// Estratégia para compilação limpa:`,
            "options": [
                "Usar -w para suprimir warnings",
                "Usar -Wall -Wextra -fanalyzer e corrigir TODOS os warnings", 
                "Ignorar warnings, apenas erros importam",
                "Compilar com -O2 que remove warnings"
            ],
            "correct": 1,
            "explanation": "Warnings indicam problemas potenciais. Usar -Wall -Wextra -fanalyzer e CORRIGIR todos warnings encontrados. Compilar sem warnings = maior nota.",
            "theory": "Compilar sem warnings = 51-100% da nota de compilação",
            "prerequisite": "Warnings são amigos - ajudam a encontrar bugs",
            "difficulty": "Iniciante",
            "timeEstimate": "1 minuto"
        },
        {
            "question": "O que fazer se o tempo estiver a acabar?",
            "code": `// Últimos 10 minutos:`,
            "options": [
                "Implementar tudo em main.c rapidamente",
                "Focar em ter algo que COMPILE sem warnings", 
                "Tentar completar todas funções perfeitas",
                "Desistir e sair mais cedo"
            ],
            "correct": 1,
            "explanation": "É melhor ter código modular que COMPILE sem warnings do que código perfeito que não compila. Compilação vale 30%!",
            "theory": "Prioridade: código que COMPILA sem warnings > código perfeito incompleto",
            "prerequisite": "Não compilar = 0% na compilação (30% da nota total)",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Como testar low_pressure com todos bytes OK?",
            "code": `// Teste: 0xFFFFFFFF
// Bytes: [FF][FF][FF][FF]`,
            "options": [
                "Return 0 (todos FF >= FE)",
                "Return 1 (algum problema)", 
                "Return 4 (4 bytes OK)",
                "Comportamento indefinido"
            ],
            "correct": 0,
            "explanation": "0xFF = 255 > 0xFE = 254 → todos bytes OK. Loop completa sem early return → return 0.",
            "theory": "Todos bytes ≥ 0xFE → função retorna 0 (sem problemas)",
            "prerequisite": "0xFF = 255 > 254 = 0xFE",
            "difficulty": "Iniciante",
            "timeEstimate": "1 minuto"
        },
        {
            "question": "Qual erro neste código low_pressure?",
            "code": `int low_pressure(unsigned int *x) {
    char *bytes = (char*)x;
    for (int i = 0; i < 4; i++) {
        if (bytes[i] < 0xFE) return 1;
    }
    return 0;
}`,
            "options": [
                "Deveria ser unsigned char*, não char*", 
                "Loop deveria ser até 3",
                "Condição deveria ser > em vez de <",
                "Falta cast no return"
            ],
            "correct": 0,
            "explanation": "char pode ser signed! Bytes 0x80-0xFF seriam negativos e comparados incorretamente. Usar SEMPRE unsigned char*.",
            "theory": "unsigned char* garante interpretação 0-255, char pode ser -128-127",
            "prerequisite": "Evitar problemas de sinal em comparações de bytes",
            "difficulty": "Avançado",
            "timeEstimate": "3 minutos"
        },
        {
            "question": "Como inicializar o array fill na main?",
            "code": `// main.c - declaração do fill`,
            "options": [
                "unsigned int fill[NCARS];",
                "unsigned int *fill[NCARS];", 
                "unsigned int **fill = malloc(...);",
                "unsigned int fill;"
            ],
            "correct": 1,
            "explanation": "fill é array de ponteiros: unsigned int *fill[NCARS]; Cada elemento será um ponteiro para um carro problemático.",
            "theory": "Array de ponteiros: tipo* nome[tamanho]",
            "prerequisite": "check_tires espera unsigned int **fill (ponteiro para array de ponteiros)",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "O que retorna check_tires com n=0?",
            "code": `// Caso array vazio`,
            "options": [
                "0 (sem carros = sem problemas)",
                "-1 (erro)", 
                "NULL",
                "Comportamento indefinido"
            ],
            "correct": 0,
            "explanation": "n=0 → array vazio → nenhum carro para verificar → retorna 0 (zero carros problemáticos). Comportamento definido e seguro.",
            "theory": "Caso borda: n=0 → retornar 0 (lógica correta)",
            "prerequisite": "Loop não executa se n=0, count permanece 0",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Qual a complexidade do algoritmo?",
            "code": `// check_tires tem complexidade:`,
            "options": [
                "O(1) - tempo constante",
                "O(n) - linear no número de carros", 
                "O(n²) - quadrática",
                "O(4n) - linear com fator 4"
            ],
            "correct": 1,
            "explanation": "O(n) - para cada carro (n), verifica 4 bytes (constante). Complexidade linear no número de carros.",
            "theory": "Complexidade: O(n) onde n = número de carros",
            "prerequisite": "Loop externo: n iterações, loop interno: 4 iterações (constante)",
            "difficulty": "Avançado",
            "timeEstimate": "3 minutos"
        },
        {
            "question": "Como garantir portabilidade para RV32?",
            "code": `// No Makefile:`,
            "options": [
                "CC = gcc (compilador nativo)",
                "CC = riscv32-unknown-elf-gcc", 
                "CC = clang (alternativa)",
                "Não é necessário"
            ],
            "correct": 1,
            "explanation": "Para RV32, usar compilador cruzado: riscv32-unknown-elf-gcc. No exame pode ser testado com este compilador.",
            "theory": "Compilação cruzada: compilar para RV32 em máquina x86/ARM",
            "prerequisite": "RV32 = RISC-V 32 bits, arquitetura diferente do hospedeiro",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "O que fazer se não conseguir implementar low_pressure?",
            "code": `// Estratégia de contingência:`,
            "options": [
                "Implementar check_tires sem usar low_pressure",
                "Chamar low_pressure com implementação simples que compila", 
                "Deixar check_tires incompleta",
                "Usar shifts como último recurso"
            ],
            "correct": 1,
            "explanation": "É melhor ter low_pressure simples (ex: return 0;) que COMPILA, do que não compilar. check_tires pode ser testada e vale 40%.",
            "theory": "Algo que compila > código perfeito que não compila",
            "prerequisite": "Compilação vale 30% da nota total",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Como verificar o resultado antes de submeter?",
            "code": `// Validação final:`,
            "options": [
                "Executar e verificar output com array de exemplo",
                "Apenas compilar sem testar", 
                "Testar apenas alguns casos",
                "Confiar que está correto"
            ],
            "correct": 0,
            "explanation": "SEMPRE testar execução com o array de exemplo do enunciado! Verificar se o output corresponde ao esperado (3 no exemplo).",
            "theory": "Teste de aceitação: output esperado com input conhecido",
            "prerequisite": "Execução correta vale 40% da nota total",
            "difficulty": "Iniciante",
            "timeEstimate": "1 minuto"
        },
        {
            "question": "Qual a penalização por incluir .o no zip?",
            "code": `// Conteúdo do zip:`,
            "options": [
                "Nenhuma - são ignorados",
                "Penalização leve", 
                "Pode causar desqualificação", 
                "Não afeta a nota"
            ],
            "correct": 2,
            "explanation": "Incluir arquivos .o ou executáveis no zip pode causar desqualificação! Usar SEMPRE make clean antes de criar o zip.",
            "theory": "Zip deve conter APENAS source code e Makefile",
            "prerequisite": "make clean remove todos arquivos gerados pela compilação",
            "difficulty": "Iniciante",
            "timeEstimate": "1 minuto"
        },
        {
            "question": "Estratégia para debugging durante o exame?",
            "code": `// Como debugar erros:`,
            "options": [
                "Usar printf estratégicos para ver valores intermediários",
                "Usar gdb (complexo sob pressão)", 
                "Chutar valores e rezar",
                "Desistir da função problemática"
            ],
            "correct": 0,
            "explanation": "printf estratégicos são a ferramenta de debugging mais eficiente sob pressão. Mostrar valores de bytes, resultados de low_pressure, etc.",
            "theory": "Debugging printf: mostrar valores críticos para entender o fluxo",
            "prerequisite": "printf é simples e eficaz para debugging básico",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        }
    ]
},
{
    "id": 7,
    "name": "Exame Prático - Pressão dos Pneus",
    "icon": "FileCode",
    "color": "bg-indigo-500",
    "description": "Exame prático completo: implemente as funções, main e Makefile",
    "theory": {
        "title": "📝 Exame Prático - Instruções",
        "content": `
**🎯 OBJETIVO:**
Implementar um sistema para verificar a pressão dos pneus de uma frota de carros.

**📁 ESTRUTURA DE ARQUIVOS:**
ex1_1234567/
├── func1.c      # low_pressure
├── func2.c      # check_tires
├── main.c       # função main
└── Makefile     # compilação

**⏱️ TEMPO ESTIMADO:** 110 minutos

**🔧 FUNCIONALIDADES:**

1. **low_pressure:** Verifica se algum pneu de um carro está com pressão baixa (< 0xFE)
2. **check_tires:** Verifica uma frota de carros e recolhe os endereços dos carros problemáticos
3. **main:** Testa com um array de exemplos e mostra o resultado

**🚨 RESTRIÇÕES:**
- Proibido usar shifts, rotates ou operadores bitwise
- Obrigatório usar ponteiros e cast para unsigned char*
- Compilar sem warnings com -Wall -Wextra -fanalyzer

**📊 CRITÉRIOS:**
- Implementação: 30% (modularidade, algoritmos)
- Compilação: 30% (sem warnings)
- Execução: 40% (resultado correto)
- Makefile: 5% (regras específicas)
`,
        "visual": `
┌─────────────────────────────────────────────────────────┐
│         FLUXO DO PROGRAMA                               │
├─────────────────────────────────────────────────────────┤
│  main.c                                                 │
│  → Inicializa array de carros                           │
│  → Chama check_tires(cars, NCARS, fill)                │
│  ← Obtém número de carros problemáticos                 │
│  → Imprime resultado                                    │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│         FUNÇÃO low_pressure                             │
├─────────────────────────────────────────────────────────┤
│  Entrada: unsigned int *x (ponteiro para 4 pneus)       │
│  Processo:                                              │
│    1. Cast para unsigned char*                          │
│    2. Loop por 4 bytes                                  │
│    3. Se algum byte < 0xFE → return 1                   │
│    4. Senão → return 0                                  │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│         FUNÇÃO check_tires                              │
├─────────────────────────────────────────────────────────┤
│  Entrada: cars[] (array de carros), n (tamanho), fill[] │
│  Processo:                                              │
│    1. Para i de 0 a n-1:                                │
│    2.   Chama low_pressure(&cars[i])                    │
│    3.   Se retorno 1:                                   │
│    4.     fill[count] = &cars[i]                        │
│    5.     count++                                       │
│    6. Retorna count                                     │
└─────────────────────────────────────────────────────────┘
`,
        "keyPoints": [
            "low_pressure: verifica 4 bytes usando cast para unsigned char*",
            "check_tires: usa low_pressure e armazena endereços no array fill",
            "Main: define array de teste e imprime o resultado",
            "Makefile: compila com flags obrigatórias e tem regra clean"
        ]
    },
    "exercises": [
        {
            "question": "Como implementar low_pressure sem usar shifts/bitwise?",
            "code": `int low_pressure(unsigned int *x) {
    // Implementação correta:
    unsigned char *pressures = (unsigned char*)x;
    for (int i = 0; i < 4; i++) {
        if (pressures[i] < 0xFE) {
            return 1;
        }
    }
    return 0;
}`,
            "options": [
                "Usar pressures[i] < 0xFE e return 1 se encontrar",
                "Usar pressures[i] > 0xFE e return 0 se encontrar",
                "Usar bitwise AND para verificar cada bit",
                "Usar shift right para isolar cada byte"
            ],
            "correct": 0,
            "explanation": "A implementação correta usa cast para unsigned char* e verifica cada byte com < 0xFE, retornando 1 imediatamente se encontrar algum problema.",
            "theory": "Padrão: cast para unsigned char* + loop + comparação byte a byte",
            "prerequisite": "Sem shifts/bitwise, apenas ponteiros e cast",
            "difficulty": "Iniciante",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Qual o valor de retorno de check_tires para o array de exemplo?",
            "code": `unsigned int cars[5] = {
    0xFFFFFFFF,  // OK
    0xFFFFFFFA,  // Problema (FA < FE)
    0x00000000,  // Problema (00 < FE)
    0xFCFDEFAB,  // Problema (FC,FD < FE)
    0xFFFFFFFF   // OK
};`,
            "options": [
                "2",
                "3",
                "4",
                "5"
            ],
            "correct": 1,
            "explanation": "3 carros problemáticos: índices 1, 2 e 3. O carro 0 e 4 estão OK.",
            "theory": "Contagem: cada carro com pelo menos um byte < 0xFE é problemático",
            "prerequisite": "low_pressure retorna 1 para carros problemáticos",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Como armazenar o endereço de um carro problemático no array fill?",
            "code": `// Dentro de check_tires:
if (low_pressure(&cars[i])) {
    // Como armazenar o endereço?`,
            "options": [
                "fill[count] = cars[i];",
                "fill[count] = &cars[i];",
                "*fill[count] = cars[i];",
                "fill = &cars[i];"
            ],
            "correct": 1,
            "explanation": "fill é array de ponteiros, então armazenamos o endereço: fill[count] = &cars[i];",
            "theory": "Array de ponteiros: armazena endereços, não valores",
            "prerequisite": "& operador obtém o endereço de uma variável",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Qual a flag do GCC que faz análise estática?",
            "code": `CFLAGS = -Wall -Wextra ??? -g`,
            "options": [
                "-O2",
                "-fanalyzer",
                "-std=c99",
                "-c"
            ],
            "correct": 1,
            "explanation": "-fanalyzer faz análise estática avançada, detectando potenciais erros como memory leaks.",
            "theory": "-fanalyzer é obrigatório no exame para detecção de erros",
            "prerequisite": "Análise estática encontra erros em tempo de compilação",
            "difficulty": "Iniciante",
            "timeEstimate": "1 minuto"
        },
        {
            "question": "O que deve ser impresso na main?",
            "code": `// main.c - após chamar check_tires
int num_problems = check_tires(cars, NCARS, fill);
printf("???", num_problems);`,
            "options": [
                "Carros com pneus a baixa pressão: %d",
                "Problemas: %d",
                "Resultado: %d",
                "Número: %d"
            ],
            "correct": 0,
            "explanation": "O output deve ser claro: 'Carros com pneus a baixa pressão: X'",
            "theory": "Output claro e descritivo é importante para o usuário",
            "prerequisite": "printf com string formatada",
            "difficulty": "Iniciante",
            "timeEstimate": "1 minuto"
        },
        {
            "question": "Como compilar sem warnings?",
            "code": `// Comando de compilação:`,
            "options": [
                "gcc -o programa *.c",
                "gcc -Wall -Wextra -fanalyzer -g -o programa *.c",
                "gcc -O2 -o programa *.c",
                "gcc -c *.c"
            ],
            "correct": 1,
            "explanation": "As flags -Wall -Wextra -fanalyzer -g são obrigatórias para compilar sem warnings e com análise estática.",
            "theory": "Compilação com flags obrigatórias = maior nota na compilação",
            "prerequisite": "Flags ativam warnings e análises",
            "difficulty": "Iniciante",
            "timeEstimate": "1 minuto"
        },
        {
            "question": "O que a regra clean deve fazer?",
            "code": `clean:
    ???`,
            "options": [
                "rm -f *.o programa",
                "clean *.o",
                "delete all",
                "rm *.c"
            ],
            "correct": 0,
            "explanation": "A regra clean deve remover todos os arquivos objeto (.o) e o executável, para garantir uma compilação limpa.",
            "theory": "clean remove arquivos gerados pela compilação",
            "prerequisite": "make clean deve deixar apenas os fontes",
            "difficulty": "Iniciante",
            "timeEstimate": "1 minuto"
        },
        {
            "question": "Por que usar unsigned char* no cast?",
            "code": `unsigned char *pressures = (unsigned char*)x;`,
            "options": [
                "Porque char pode ser signed e causar problemas",
                "Porque unsigned char sempre representa 0-255",
                "Ambas as anteriores",
                "Porque é mais rápido"
            ],
            "correct": 2,
            "explanation": "char pode ser signed (-128 a 127) dependendo do compilador, enquanto unsigned char é sempre 0-255, evitando problemas com bytes altos (0x80-0xFF).",
            "theory": "unsigned char garante interpretação correta de bytes como 0-255",
            "prerequisite": "Bytes de memória são naturalmente unsigned",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Qual o propósito do array fill em check_tires?",
            "code": `int check_tires(unsigned int *cars, int n, unsigned int **fill)`,
            "options": [
                "Armazenar os valores dos carros problemáticos",
                "Armazenar os endereços dos carros problemáticos",
                "Armazenar o número de carros problemáticos",
                "Não é usado"
            ],
            "correct": 1,
            "explanation": "fill é array de ponteiros, então armazena endereços dos carros problemáticos, permitindo acesso posterior a esses carros.",
            "theory": "Array de ponteiros para referenciar os carros problemáticos",
            "prerequisite": "Ponteiros permitem acessar os dados originais",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        },
        {
            "question": "Como a main deve chamar check_tires?",
            "code": `// main.c
unsigned int *fill[NCARS];
int num = check_tires(???, NCARS, fill);`,
            "options": [
                "cars",
                "&cars[0]",
                "&cars",
                "Todas as anteriores"
            ],
            "correct": 3,
            "explanation": "Todas as formas são equivalentes em C. cars decai para &cars[0], e &cars também é válido (mesmo endereço, tipo diferente).",
            "theory": "Em C, array como parâmetro decai para ponteiro para primeiro elemento",
            "prerequisite": "cars ≡ &cars[0] em contextos de ponteiro",
            "difficulty": "Intermediário",
            "timeEstimate": "2 minutos"
        }
    ]
}

];


export default levels;
