const ex4 = [
  {
    id: 1,
    question: "No directório actual da sua sessão encontra-se um conjunto de ficheiros de vários formatos. Para copiar os ficheiros JPG (com a extensão .jpg) desse directório para o directório ~/photos/import/, deverá executar o comando:",
    code: "",
    options: [
      "$ cp *jpg $HOME/photos/import",
      "$ cp ~/photos/import *jpg", 
      "$ cp *jpg /$HOME/photos/import",
      "$ cp ~/jpg /photos/import"
    ],
    correct: 0,
    explanation: "O comando correto usa o wildcard *jpg para selecionar todos os ficheiros .jpg e copia para o diretório destino usando $HOME ou ~ para o diretório home.",
    theoryPoints: {
      title: "Comando cp e Wildcards",
      content: "O comando cp (copy) copia ficheiros. Wildcards como * (qualquer sequência) permitem selecionar múltiplos ficheiros. $HOME é variável que aponta para o diretório home do utilizador.",
      keyPoints: [
        "cp origem destino - copia ficheiro(s)",
        "*jpg - seleciona todos os ficheiros terminados em .jpg",
        "~/ - atalho para diretório home",
        "$HOME - variável de ambiente com caminho do home"
      ],
      examples: "Copiar todos .txt: cp *.txt ~/docs/\nCopiar com path absoluto: cp /home/user/*.jpg /backup/"
    },
    hints: ["Qual opção usa wildcard corretamente?", "Como referenciar o diretório home?"]
  },
  {
    id: 2,
    question: "O comando mv permite:",
    code: "",
    options: [
      "alterar as permissões de acesso de ficheiros e directórios",
      "copiar ficheiros e directórios para outra localização do sistema de ficheiros",
      "definir o novo directório actual de trabalho", 
      "alterar o nome de um directório"
    ],
    correct: 3,
    explanation: "mv (move) permite mover ou renomear ficheiros e diretórios. Para alterar permissões usa-se chmod, para copiar usa-se cp, para mudar diretório usa-se cd.",
    theoryPoints: {
      title: "Comando mv",
      content: "mv origem destino - move ou renomeia ficheiros/diretórios. Se destino for diferente do diretório atual, move; se no mesmo diretório, renomeia.",
      keyPoints: [
        "Renomear: mv antigo novo",
        "Mover: mv ficheiro /outro/directorio/",
        "Sobrescreve destino se existir (a menos que usar -i)",
        "Pode mover múltiplos ficheiros para diretório"
      ],
      examples: "Renomear: mv relatorio.txt relatorio_final.txt\nMover: mv *.jpg ~/fotos/\nMover diretório: mv projeto/ projetos/antigo/"
    },
    hints: ["Qual a diferença entre mv e cp?", "O que acontece ao mover para mesmo diretório com nome diferente?"]
  },
  {
    id: 3,
    question: "Assuma que tem três ficheiros: file1.txt contém 'Paris Braga', file2.txt contém 'London Porto', file3.txt contém 'John Silver Mark Gold Nelson Steel Adam Iron'. Qual será o resultado do comando 'cat file1.txt file3.txt'?",
    code: "cat file1.txt file3.txt",
    options: [
      "John Silver Mark Gold Nelson Steel Adam Iron",
      "John Silver Mark Gold Nelson Steel Adam Iron Paris Braga London Porto",
      "Paris John Silver Braga Mark Gold London Nelson Steel Porto Adam Iron",
      "Paris Braga John Silver Mark Gold Nelson Steel Adam Iron"
    ],
    correct: 3,
    explanation: "cat concatena ficheiros na ordem fornecida. Primeiro exibe conteúdo de file1.txt ('Paris Braga'), depois file3.txt ('John Silver Mark Gold Nelson Steel Adam Iron').",
    theoryPoints: {
      title: "Comando cat",
      content: "cat (concatenate) exibe conteúdo de ficheiros no terminal. Pode concatenar múltiplos ficheiros sequencialmente. Útil para visualizar, combinar ou redirecionar conteúdo.",
      keyPoints: [
        "cat ficheiro - mostra conteúdo",
        "cat f1 f2 - mostra f1 depois f2",
        "cat > novo - cria novo ficheiro (com entrada teclado)",
        "cat f1 f2 > f3 - combina f1 e f2 em f3"
      ],
      examples: "Ver ficheiro: cat /etc/passwd\nConcatenar: cat intro.txt corpo.txt > documento.txt\nNumerar linhas: cat -n script.sh"
    },
    hints: ["Em que ordem cat processa os argumentos?", "O que significa concatenar?"]
  },
  {
    id: 4,
    question: "No directório ~/python contém ficheiros com extensão .py. Pretende definir o modo dos ficheiros .py para rwxr-xr-x. O comando mais apropriado é:",
    code: "Permissões: rwxr-xr-x = 111 101 101 = 755 em octal",
    options: [
      "$ chmod 755 ~/python/*.py",
      "$ chmod ugo=rx ~/python/*.py",
      "$ chmod ugo+rx ~/python/*.py", 
      "$ chmod 764 ~/python/*.py"
    ],
    correct: 0,
    explanation: "rwxr-xr-x corresponde a 755 em octal (owner: rwx=7, group: r-x=5, others: r-x=5). chmod 755 aplica estas permissões. As outras opções não dão permissão de escrita ao owner.",
    theoryPoints: {
      title: "Comando chmod e Permissões",
      content: "chmod altera permissões de ficheiros/diretórios. Permissões: r(read)=4, w(write)=2, x(execute)=1. Notação octal: owner/group/others (ex: 755). Notação simbólica: u(user), g(group), o(others), a(all) com +, -, =.",
      keyPoints: [
        "rwxr-xr-x = 755 (owner tem tudo, group/others leem e executam)",
        "chmod 755 ficheiro - aplica permissões",
        "chmod u+x script.sh - adiciona execução ao owner",
        "chmod go-w documento.txt - remove escrita de group e others"
      ],
      examples: "Script executável: chmod 755 script.sh\nPrivado: chmod 600 segredo.txt\nLeitura geral: chmod 444 leitura.txt"
    },
    hints: ["Como converter rwx para número octal?", "Qual notação é mais precisa para permissões exatas?"]
  },
  {
    id: 5,
    question: "O comando wc permite:",
    code: "",
    options: [
      "visualizar as últimas linhas de um ficheiro",
      "determinar o número de palavras de um ficheiro", 
      "ver que utilizadores estão actualmente ligados ao sistema",
      "determinar o directório de trabalho actual"
    ],
    correct: 1,
    explanation: "wc (word count) conta linhas, palavras e bytes. tail mostra últimas linhas, who mostra utilizadores ligados, pwd mostra diretório atual.",
    theoryPoints: {
      title: "Comando wc",
      content: "wc [opções] ficheiro - conta linhas, palavras, caracteres e bytes. Opções: -l (apenas linhas), -w (apenas palavras), -c (apenas bytes), -m (apenas caracteres).",
      keyPoints: [
        "wc ficheiro - mostra linhas, palavras, bytes",
        "wc -l ficheiro - apenas número de linhas",
        "wc -w ficheiro - apenas número de palavras",
        "Útil para análise de texto e scripts"
      ],
      examples: "Contar linhas: wc -l /etc/passwd\nContar palavras: wc -w documento.txt\nTudo: wc script.sh (mostra linhas, palavras, bytes)"
    },
    hints: ["O que significa 'wc'?", "Qual comando conta elementos de texto?"]
  },
  {
    id: 6,
    question: "Um shell script é um programa interpretado pela interface da linha de comando:",
    code: "",
    options: [
      "desenvolvido numa linguagem de alto nível, sobretudo para resolver problemas de computação numérica",
      "escrito em assembly, para resolver problemas de carácter genérico",
      "que é utilizado para carregar o SO no arranque do computador",
      "desenvolvido numa linguagem de alto nível, sobretudo para automatizar tarefas de gestão e manutenção do sistema"
    ],
    correct: 3,
    explanation: "Shell scripts são programas que automatizam tarefas do sistema (backup, monitorização, instalação) usando comandos shell. Não são para computação numérica intensiva (para isso usam-se linguagens como Python).",
    theoryPoints: {
      title: "Shell Scripts",
      content: "Shell script é um ficheiro de texto com comandos shell executáveis. Usado para automatização, administração de sistemas, processamento de ficheiros. Bash é shell comum em Linux/Unix.",
      keyPoints: [
        "Primeira linha: #!/bin/bash (shebang)",
        "Tornar executável: chmod +x script.sh",
        "Executar: ./script.sh ou bash script.sh",
        "Vantagens: rápido prototipar, acesso direto a comandos sistema"
      ],
      examples: "Script simples: #!/bin/bash\necho \"Hello, $USER\"\ndate\nBackup: tar -czf backup.tar.gz ~/docs"
    },
    hints: ["Para que são usados scripts shell no dia a dia?", "Qual a vantagem de shell sobre linguagens compiladas para automação?"]
  },
  {
    id: 7,
    question: "Identifique a afirmação verdadeira, relativa à shell do Unix:",
    code: "",
    options: [
      "A primeira palavra numa linha de comando é necessariamente um comando",
      "O operador > (símbolo 'maior') redirecciona a saída de um comando (STDOUT) para a entrada do comando seguinte (STDIN)",
      "O operador | (pipe) redirecciona a saída de um comando (STDOUT) para um ficheiro novo",
      "A comunicação entre processos realiza-se exclusivamente através de ficheiros na memória secundária"
    ],
    correct: 0,
    explanation: "Na shell, a primeira palavra é o comando a executar. > redireciona para ficheiro, | redireciona para entrada de outro comando (pipe). Comunicação entre processos pode ser via pipes, sinais, memória partilhada, etc.",
    theoryPoints: {
      title: "Sintaxe da Shell",
      content: "Linha de comando: comando [argumentos] [redirecionamentos]. Comando pode ser programa executável, built-in, alias ou função. Redirecionamentos: > (sobrescreve), >> (acrescenta), < (entrada), | (pipe entre comandos).",
      keyPoints: [
        "Estrutura: comando opções argumentos",
        "Redirecionamento: comando > ficheiro (saída para ficheiro)",
        "Pipe: comando1 | comando2 (saída de 1 é entrada de 2)",
        "Background: comando & (executa em background)"
      ],
      examples: "Redirecionar: ls -l > lista.txt\nPipe: ps aux | grep bash\nBackground: long_task &"
    },
    hints: ["O que vem primeiro numa linha de comando?", "Qual a diferença entre > e |?"]
  },
  {
    id: 8,
    question: "O comando grep permite:",
    code: "",
    options: [
      "procurar ficheiros que correspondam a um critério baseado nas propriedades dos ficheiros",
      "procurar padrões de texto dentro de ficheiros", 
      "compactar ficheiros e directórios",
      "alterar o grupo proprietário de ficheiros"
    ],
    correct: 1,
    explanation: "grep procura padrões (expressões regulares) em ficheiros de texto. Para procurar ficheiros por propriedades usa-se find, para compactar usa-se tar/gzip, para alterar grupo usa-se chgrp.",
    theoryPoints: {
      title: "Comando grep",
      content: "grep [opções] padrão ficheiros - procura linhas que correspondam ao padrão. Opções comuns: -i (case-insensitive), -v (inverter, não correspondem), -n (mostrar números de linha), -r (recursivo).",
      keyPoints: [
        "grep 'erro' log.txt - procura 'erro' no ficheiro",
        "grep -r 'function' ~/code/ - procura recursivamente",
        "grep -v '^#' config.txt - exclui linhas começando com #",
        "Usa expressões regulares: grep '^[A-Z]' ficheiro"
      ],
      examples: "Procurar IPs: grep -E '[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}' log\nContar ocorrências: grep -c 'error' sistema.log\nContexto: grep -B2 -A2 'crash' trace.log"
    },
    hints: ["O que significa 'grep'? (Global Regular Expression Print)", "Qual comando procura texto dentro de ficheiros?"]
  },
  {
    id: 9,
    question: "Para procurar no directório /var/log/ ficheiros do utilizador 'dartwhader' com tamanho inferior a 50KB, mostrar as 10 últimas linhas e perguntar antes de apagar, o comando adequado é:",
    code: "",
    options: [
      "$ find /var/log/ -user dartwhader -size -50k | tail {} | rm {};",
      "$ find /var/log/ -user dartwhader -size -50k -exec tail {}; -exec rm {};",
      "$ find /var/log/ -user dartwhader -size -50k -exec tail {} | rm {};", 
      "$ find /var/log/ -user dartwhader -size -50k -exec tail {}; -ok rm {};"
    ],
    correct: 3,
    explanation: "find com -exec executa comando para cada ficheiro encontrado. -ok pede confirmação antes de executar. A opção 4 usa tail para mostrar últimas linhas e -ok rm para perguntar antes de apagar.",
    theoryPoints: {
      title: "Comando find com -exec e -ok",
      content: "find diretório critérios -exec comando {} \\; - executa comando para cada ficheiro encontrado. {} substitui pelo nome do ficheiro. -ok pede confirmação interativa antes de executar.",
      keyPoints: [
        "find . -name '*.txt' - exec ls -l {} \\; - lista detalhes de cada .txt",
        "find /var -size +100M - exec du -h {} \\; - mostra tamanho de ficheiros >100MB",
        "find ~ -mtime -7 - exec tar -rf backup.tar {} \\; - adiciona ficheiros modificados nos últimos 7 dias a tar",
        "-ok mais seguro que -exec para operações destrutivas"
      ],
      examples: "Apagar .tmp com confirmação: find /tmp -name '*.tmp' -ok rm {} \\;\nProcurar e copiar: find . -name '*.jpg' -exec cp {} ~/fotos/ \\;\nContar linhas: find . -type f -name '*.py' -exec wc -l {} \\;"
    },
    hints: ["Qual opção pede confirmação antes de executar?", "Como usar {} em find?"]
  },
  {
    id: 10,
    question: "O comando para extrair nome, latitude e longitude de montanhas do distrito da Guarda de um ficheiro CSV, convertendo nomes para maiúsculas, é:",
    code: "grep \"Guarda\" montanhas.csv | cut -f2,5,6 -d \",\" | tr '[a-z]' '[A-Z]' > guarda.txt",
    options: [
      "$ grep \"Guarda\" montanhas.csv | cut -f2,5,6 -d \",\" | tr '[lower:]' '[upper:]' > guarda.txt",
      "$ grep \"Guarda\" montanhas.csv | cut -f2,5,6 -d \",\" | tr '[lower:]' '[upper:]' >> guarda.txt", 
      "$ grep \"Guarda\" montanhas.csv | cut -f2,5,6 -d \",\" | tr '[a-z]' '[A-Z]' > guarda.txt",
      "$ grep \"Guarda\" montanhas.csv | cut -f2,5,6 -d \",\" | tr '[upper:]' '[lower:]' > guarda.txt"
    ],
    correct: 2,
    explanation: "grep filtra linhas com 'Guarda', cut extrai campos 2,5,6 (nome, lat, long) separados por vírgula, tr converte minúsculas para maiúsculas ([a-z] para [A-Z]), e > redireciona para ficheiro.",
    theoryPoints: {
      title: "Pipeline de Comandos",
      content: "Pipe (|) liga saída de um comando à entrada do próximo. Comandos úteis: grep (filtrar), cut (extrair colunas), tr (traduzir caracteres), sort, uniq, awk, sed.",
      keyPoints: [
        "Pipeline: comando1 | comando2 | comando3",
        "cut -d ',' -f1,3 extrai primeira e terceira coluna separadas por vírgula",
        "tr '[a-z]' '[A-Z]' converte minúsculas para maiúsculas",
        "> sobrescreve ficheiro, >> acrescenta"
      ],
      examples: "Contar palavras únicas: cat texto.txt | tr ' ' '\\n' | sort | uniq -c\nExtrair colunas: ps aux | awk '{print $1, $2, $3}'\nConverter fim de linha: dos2unix arquivo.txt"
    },
    hints: ["Qual sintaxe correta para tr converter case?", "Como especificar delimitador no cut?"]
  },
  {
    id: 11,
    question: "Suponha que quer copiar todos os ficheiros MP3 dentro do seu diretório de utilizador para /mount/mp3player/library. O comando correto é:",
    code: "",
    options: [
      "$ find ~ -iname \"*.mp3\" -exec cp {} /mount/mp3player/library/;",
      "$ ls ~/*.mp3 | cp /mount/mp3player/library/", 
      "$ find ~ -iname \"*.mp3\" | cp /mount/mp3player/library/",
      "$ grep \"*.mp3\" ~/* -exec cp {} /mount/mp3player/library/;"
    ],
    correct: 0,
    explanation: "find com -iname (case-insensitive) encontra ficheiros .mp3 recursivamente a partir do home, e -exec cp copia cada um para o destino. As outras opções têm erros de sintaxe.",
    theoryPoints: {
      title: "find com -iname",
      content: "find diretório -iname \"padrão\" - procura ficheiros com padrão ignorando maiúsculas/minúsculas. Útil para extensões .mp3, .jpg, etc. Combinar com -exec para processar resultados.",
      keyPoints: [
        "-iname vs -name: -iname case-insensitive",
        "Padrões com wildcards: \"*.mp3\"",
        "Diretório inicial: ~ (home), . (atual), / (raiz)",
        "Evitar pipe para cp porque cp espera argumentos, não stdin"
      ],
      examples: "Procurar imagens: find . -iname \"*.jpg\" -o -iname \"*.png\"\nProcurar e listar: find /home -name \"*.conf\" -exec ls -l {} \\;\nProcurar por tipo: find . -type f -name \"*.txt\""
    },
    hints: ["Como fazer busca case-insensitive?", "Por que não usar ls com pipe para cp?"]
  },
  {
    id: 12,
    question: "Em Unix, qual das afirmações é falsa?",
    code: "",
    options: [
      "O comando chmod é utilizado para redefinir as permissões de acesso a um ficheiro",
      "O comando find localiza e apresenta uma expressão regular no interior de ficheiros de texto", 
      "O comando fg traz para primeiro plano (foreground) um processo em background",
      "O comando mv permite alterar o nome de um ficheiro"
    ],
    correct: 1,
    explanation: "find localiza ficheiros no sistema de ficheiros, não procura texto dentro de ficheiros (isso é grep). chmod altera permissões, fg traz jobs para foreground, mv renomeia ou move.",
    theoryPoints: {
      title: "Comandos Unix Comuns",
      content: "Comandos essenciais: ls (listar), cd (mudar diretório), cp (copiar), mv (mover/renomear), rm (remover), chmod (alterar permissões), grep (procurar texto), find (procurar ficheiros), ps (processos), jobs/fg/bg (controlo jobs).",
      keyPoints: [
        "find procura ficheiros por nome, tamanho, data, etc.",
        "grep procura padrões dentro de ficheiros",
        "jobs lista jobs em background",
        "fg %1 traz job 1 para foreground"
      ],
      examples: "Procurar ficheiro: find / -name \"passwd\" 2>/dev/null\nProcurar texto: grep -r \"TODO\" ~/projeto/\nMover job para background: Ctrl+Z, bg\nTrazer para frente: fg %1"
    },
    hints: ["Qual comando procura texto em ficheiros?", "Qual a diferença entre find e grep?"]
  },
  {
    id: 13,
    question: "Identifique a afirmação falsa sobre a shell do Unix:",
    code: "",
    options: [
      "Numa linha de comando, a primeira palavra é o nome do comando",
      "O operador > redirecciona a saída de um comando (STDOUT) para a entrada do comando seguinte (STDIN)", 
      "O comando ls permite visualizar os conteúdos de um directório, sendo possível filtrar resultados pelo nome",
      "O comando rm permite apagar ficheiros do sistema de ficheiros"
    ],
    correct: 1,
    explanation: "> redireciona para ficheiro, não para outro comando. Para redirecionar entre comandos usa-se | (pipe). ls lista diretório, rm remove ficheiros.",
    theoryPoints: {
      title: "Redirecionamento vs Pipe",
      content: "Redirecionamento: comando > ficheiro (sobrescreve), comando >> ficheiro (acrescenta), comando < ficheiro (entrada de ficheiro). Pipe: comando1 | comando2 (saída de 1 é entrada de 2).",
      keyPoints: [
        "> cria/sobrescreve ficheiro",
        ">> acrescenta a ficheiro existente",
        "< lê entrada de ficheiro",
        "| conecta saída de um comando à entrada de outro"
      ],
      examples: "Redirecionar: ls -l > lista.txt\nAcrescentar: echo \"nova linha\" >> log.txt\nPipe: cat ficheiro.txt | grep \"palavra\" | sort\nEntrada: wc -l < dados.txt"
    },
    hints: ["Para onde vai a saída com >?", "Como ligar dois comandos?"]
  },
  {
    id: 14,
    question: "A primeira palavra numa linha de comando da shell Unix:",
    code: "",
    options: [
      "é necessariamente um comando", 
      "pode ser uma opção",
      "pode ser um redirecionamento",
      "é sempre um caminho de ficheiro"
    ],
    correct: 0,
    explanation: "A primeira palavra é sempre o comando a executar. Opções, argumentos e redirecionamentos vêm depois. Exceção: se linha começar com redirecionamento, aplica-se ao comando anterior (em scripts).",
    theoryPoints: {
      title: "Estrutura da Linha de Comando",
      content: "Formato: comando [opções] [argumentos] [redirecionamentos]. Comando pode ser: programa no PATH, built-in da shell, alias, função, ou caminho para executável.",
      keyPoints: [
        "comando opção1 opção2 argumento1 argumento2",
        "Opções começam com - ou --",
        "Redirecionamentos podem aparecer em qualquer lugar na linha",
        "; separa múltiplos comandos na mesma linha"
      ],
      examples: "ls -l /home\ncp -r origem/ destino/\necho \"texto\" > ficheiro.txt\ncat < entrada.txt | grep \"padrão\" > saida.txt"
    },
    hints: ["O que a shell procura primeiro quando interpreta uma linha?", "Onde ficam opções como -l ou --help?"]
  },
  {
    id: 15,
    question: "O operador | (pipe) na shell Unix:",
    code: "",
    options: [
      "redirecciona a saída de um comando para um ficheiro",
      "redirecciona a saída de um comando para a entrada do comando seguinte", 
      "executa dois comandos em paralelo",
      "conecta a entrada padrão a um ficheiro"
    ],
    correct: 1,
    explanation: "Pipe conecta STDOUT de um comando a STDIN do próximo, permitindo encadeamento de processamento. Para redirecionar para ficheiro usa-se >, para executar em paralelo usa-se & ou ;.",
    theoryPoints: {
      title: "Pipe (|) e Encadeamento",
      content: "Pipe permite composição de comandos simples para tarefas complexas. Cada comando no pipeline executa em processo separado, com comunicação via buffer.",
      keyPoints: [
        "comando1 | comando2 | comando3",
        "Cada comando executa simultaneamente (concorrente)",
        "Buffer entre comandos evita bloqueio",
        "Só STDIN/STDOUT são redirecionados, STDERR não"
      ],
      examples: "Contar processos do usuário: ps aux | grep $USER | wc -l\nTop 10 IPs em log: cat access.log | awk '{print $1}' | sort | uniq -c | sort -rn | head -10\nMonitorizar logs: tail -f app.log | grep \"ERROR\""
    },
    hints: ["O que acontece com a saída do primeiro comando?", "Como processar dados em múltiplos passos?"]
  }
];

export default ex4;