const ex5 = [
    {
      id: 1,
      question: "Qual comando usar para procurar linhas com 'Silva' em ficheiro e mostrar apenas nome e telefone?",
      code: "// Ficheiro contactos.txt\nAbel Silva\\t970222986\\tabel.silva@mail.pt\nAna Silva\\t950098297\\tana.silva@mail.pt",
      options: [
        "grep 'Silva' contactos.txt | cut -f1,2",
        "grep 'Silva' contactos.txt | cut -f2,3", 
        "find 'Silva' contactos.txt",
        "search 'Silva' contactos.txt"
      ],
      correct: 0,
      explanation: "grep filtra linhas com 'Silva', cut -f1,2 extrai primeira e segunda colunas (nome e telefone), assumindo separação por TAB.",
      theoryPoints: {
        title: "Processamento de Texto com Pipe",
        content: "Unix permite encadear comandos com pipe (|). Cada comando faz uma coisa bem: grep filtra, cut corta colunas, sort ordena, etc.",
        keyPoints: [
          "grep: pesquisa padrões em texto",
          "cut: extrai colunas por delimitador",
          "sort: ordena linhas",
          "pipe: conecta saída de um comando à entrada do outro"
        ],
        examples: "grep 'error' log.txt | cut -f1,3 | sort -u\ncat file.txt | head -20 | tail -10\nwho | grep 'user' | cut -f1 -d' '"
      },
      hints: ["Precisa filtrar e depois extrair colunas", "Que colunas contêm nome e telefone?"]
    },
    {
      id: 2,
      question: "Como filtrar apenas linhas com email e ordenar alfabeticamente?",
      code: "// contactos.txt contém: nome TAB telefone TAB email\ncurl -s URL | grep '@' | sort",
      options: [
        "grep '@' contactos.txt | sort",
        "sort contactos.txt | grep '@'",
        "find '@' contactos.txt | sort",
        "cut -f3 contactos.txt | sort"
      ],
      correct: 0,
      explanation: "grep '@' filtra linhas que contêm o símbolo @ (presente em emails), e sort ordena o resultado alfabeticamente.",
      theoryPoints: {
        title: "Filtros e Ordenação",
        content: "Combinar grep com sort é comum para filtrar e organizar dados. grep seleciona linhas baseadas em padrões, sort organiza.",
        keyPoints: [
          "grep com padrões simples: '@', 'silva', '^A'",
          "sort ordena lexicograficamente",
          "sort -n para ordenação numérica",
          "sort -r para ordem reversa"
        ],
        examples: "grep 'error' log.txt | sort -u\ngrep '^A' nomes.txt | sort\nps aux | grep 'chrome' | sort -k3 -n"
      },
      hints: ["Qual símbolo identifica emails?", "A ordem dos comandos no pipe importa?"]
    },
    {
      id: 3,
      question: "Qual é o significado do exit status em Unix?",
      code: "// Execução de comandos\n$ mkdir temp\necho $?  # Mostra exit status\n0        # Sucesso\n$ rmdir nonexistent\necho $?\n1        # Erro",
      options: [
        "Tempo de execução do comando",
        "Número que indica sucesso (0) ou falha (≠0)",
        "Quantidade de memória usada",
        "Número de linhas de output"
      ],
      correct: 1,
      explanation: "Exit status 0 indica sucesso, qualquer outro valor indica falha. Pode ser verificado com $? e usado em condições if, while, etc.",
      theoryPoints: {
        title: "Exit Status e Controle de Fluxo",
        content: "Cada comando retorna status ao terminar. Scripts podem tomar decisões baseadas nesses valores usando && (AND), || (OR), if, etc.",
        keyPoints: [
          "0 = sucesso",
          "1-255 = códigos de erro",
          "$? = último exit status",
          "&& executa se anterior sucedeu",
          "|| executa se anterior falhou"
        ],
        examples: "mkdir dir && cd dir  # Só entra se criar\ncomando || echo 'Falhou'  # Mensagem se erro\nif [ $? -eq 0 ]; then echo 'OK'; fi"
      },
      hints: ["O que significa retorno 0?", "Como verificar se comando funcionou?"]
    },
    {
      id: 4,
      question: "Como baixar um arquivo remoto e salvar localmente?",
      code: "// Download e salvamento\ncurl -s https://exemplo.com/script.sh > local.sh",
      options: [
        "curl URL > arquivo",
        "wget URL -o arquivo", 
        "download URL arquivo",
        "get URL > arquivo"
      ],
      correct: 0,
      explanation: "curl -s faz download silencioso, > redireciona output para arquivo local. Alternativamente: curl -o arquivo URL",
      theoryPoints: {
        title: "Download e Redirecionamento",
        content: "curl/wget transferem dados de URLs. Redirecionamento > cria/sobrescreve arquivo, >> append.",
        keyPoints: [
          "curl -s: modo silencioso",
          ">: redireciona stdout para arquivo",
          ">>: adiciona ao final do arquivo",
          "2>: redireciona stderr"
        ],
        examples: "curl -s URL > arquivo\nwget -O arquivo URL\nls > lista.txt 2> erros.txt"
      },
      hints: ["Qual comando faz download?", "Como salvar output em arquivo?"]
    },
    {
      id: 5,
      question: "Como contar quantos processos do usuário estão em execução?",
      code: "// Lista de processos\n$ ps -u $USER | wc -l\n15",
      options: [
        "ps -u $USER | wc -l",
        "ps -a | grep $USER",
        "count -p $USER",
        "ps aux | count"
      ],
      correct: 0,
      explanation: "ps -u $USER lista processos do usuário, wc -l conta linhas. Subtrair 1 do resultado para excluir o cabeçalho.",
      theoryPoints: {
        title: "Contagem com wc e Listagem de Processos",
        content: "wc (word count) conta linhas, palavras e caracteres. ps lista processos do sistema.",
        keyPoints: [
          "wc -l: conta linhas",
          "ps -u user: processos de usuário específico",
          "ps aux: todos os processos",
          "grep -c: conta ocorrências"
        ],
        examples: "ps aux | grep chrome | wc -l\nwho | wc -l  # usuários logados\nfind . -name '*.txt' | wc -l"
      },
      hints: ["Qual comando conta linhas?", "Como listar apenas processos do usuário atual?"]
    },
    {
      id: 6,
      question: "Como encontrar todos os ficheiros .txt modificados nos últimos 2 dias?",
      code: "// Encontrar ficheiros por data\nfind . -name '*.txt' -mtime -2",
      options: [
        "find . -name '*.txt' -mtime -2",
        "find . -type txt -time 2",
        "ls -l *.txt | grep '2 days'",
        "search *.txt -modified 2"
      ],
      correct: 0,
      explanation: "find . -name '*.txt' -mtime -2 procura recursivamente ficheiros .txt modificados há menos de 2 dias.",
      theoryPoints: {
        title: "Busca Avançada com find",
        content: "find é poderoso para buscar ficheiros por nome, tipo, tamanho, data, permissões, etc.",
        keyPoints: [
          "-name: busca por nome",
          "-mtime: data de modificação",
          "-type: tipo de ficheiro",
          "-size: tamanho do ficheiro"
        ],
        examples: "find /var/log -name '*.log' -mtime -7\nfind . -size +1M -type f\nfind /home -user john -perm 644"
      },
      hints: ["Qual comando busca ficheiros?", "Como especificar extensão e data?"]
    },
    {
      id: 7,
      question: "Como substituir todas as vírgulas por pontos num ficheiro CSV?",
      code: "// Substituição de caracteres\ncat data.csv | tr ',' '.' > new_data.csv",
      options: [
        "tr ',' '.' < data.csv > new_data.csv",
        "sed 's/,/./g' data.csv",
        "replace ',' '.' data.csv",
        "Ambas A e B estão corretas"
      ],
      correct: 3,
      explanation: "Ambos tr e sed podem fazer a substituição. tr traduz caracteres, sed usa expressões regulares para substituição.",
      theoryPoints: {
        title: "Manipulação de Texto com tr e sed",
        content: "tr substitui ou remove caracteres. sed é mais poderoso para edição de texto com expressões regulares.",
        keyPoints: [
          "tr 'a' 'b': substitui caracteres",
          "sed 's/old/new/g': substituição global",
          "tr -d: remove caracteres",
          "sed -i: edição in-place"
        ],
        examples: "tr '[:lower:]' '[:upper:]' < file\nsed 's/foo/bar/g' file.txt\ntr -d '\\r' < file > newfile"
      },
      hints: ["Quais comandos manipulam texto?", "Como fazer substituição global?"]
    },
    {
      id: 8,
      question: "Como matar um processo específico pelo PID?",
      code: "// Terminar processo\n$ kill 12345",
      options: [
        "kill 12345",
        "stop 12345",
        "kill -9 12345",
        "Ambas A e C estão corretas"
      ],
      correct: 3,
      explanation: "kill PID envia sinal TERM (15) para terminação graciosa. kill -9 PID força terminação imediata com sinal KILL.",
      theoryPoints: {
        title: "Gestão de Processos com kill",
        content: "kill envia sinais para processos. Sinais comuns: TERM (15) para terminação normal, KILL (9) para forçar terminação.",
        keyPoints: [
          "kill PID: sinal TERM (15)",
          "kill -9 PID: sinal KILL",
          "kill -l: lista sinais",
          "pkill: mata por nome"
        ],
        examples: "kill 1234  # terminação normal\nkill -9 1234  # força terminação\npkill firefox  # mata por nome"
      },
      hints: ["Qual sinal para terminação normal?", "E para forçar terminação?"]
    },
    {
      id: 9,
      question: "Como ver as 10 linhas mais frequentes num ficheiro de log?",
      code: "// Análise de logs\ncat access.log | sort | uniq -c | sort -nr | head -10",
      options: [
        "sort access.log | uniq -c | sort -nr | head -10",
        "cat access.log | freq -top 10",
        "grep -c '' access.log | head -10",
        "count access.log | sort -n"
      ],
      correct: 0,
      explanation: "sort ordena, uniq -c conta ocorrências, sort -nr ordena numericamente em ordem reversa, head -10 mostra top 10.",
      theoryPoints: {
        title: "Análise de Dados com sort, uniq e head",
        content: "Combinar sort, uniq e head/tail é poderoso para análise de dados e logs.",
        keyPoints: [
          "uniq -c: conta ocorrências únicas",
          "sort -n: ordenação numérica",
          "sort -r: ordem reversa",
          "head/tail: primeiras/últimas linhas"
        ],
        examples: "cat file | sort | uniq -c | sort -nr\nps aux | sort -k4 -nr | head -5  # top 5 memória"
      },
      hints: ["Como contar ocorrências únicas?", "Como ordenar por frequência?"]
    },
    {
      id: 10,
      question: "Como criar um script que monitoriza mudanças num ficheiro?",
      code: "// Monitorização em tempo real\ntail -f /var/log/syslog | grep --line-buffered 'error'",
      options: [
        "tail -f ficheiro | grep 'padrao'",
        "watch 'grep padrao ficheiro'",
        "monitor ficheiro for 'padrao'",
        "Ambas A e B estão corretas"
      ],
      correct: 3,
      explanation: "tail -f mostra novas linhas em tempo real. watch executa comando periodicamente. Ambas são válidas para monitorização.",
      theoryPoints: {
        title: "Monitorização e Debugging",
        content: "tail -f e watch são ferramentas úteis para monitorizar ficheiros e processos em tempo real.",
        keyPoints: [
          "tail -f: segue novas linhas",
          "watch: executa comando repetidamente",
          "grep --line-buffered: buffer por linha",
          ">: redirecionamento em tempo real"
        ],
        examples: "tail -f /var/log/auth.log | grep 'Failed'\nwatch -n 1 'ps aux | grep python'\ntail -f log.txt > monitor.log &"
      },
      hints: ["Como ver novas linhas automaticamente?", "Como executar comando periodicamente?"]
    },
    {
      id: 11,
      question: "Como alterar as permissões de um ficheiro para rwx para owner, r-x para group, e r-- para others?",
      code: "// Alteração de permissões usando modo octal\n$ chmod 754 script.sh\n$ ls -l script.sh\n-rwxr-xr-- 1 user group 1024 Jan 1 10:00 script.sh",
      options: [
        "chmod 754 ficheiro",
        "chmod u=rwx,g=rx,o=r ficheiro",
        "chmod 755 ficheiro",
        "Ambas A e B estão corretas"
      ],
      correct: 3,
      explanation: "754 em octal equivale a rwxr-xr--. Também pode ser especificado com mnemónicos: u=rwx,g=rx,o=r. Ambas as formas são válidas.",
      theoryPoints: {
        title: "Permissões de Ficheiros com chmod",
        content: "chmod altera permissões usando modo octal (3 dígitos) ou mnemónicos (u,g,o + r,w,x). Cada dígito octal representa: owner(4+2+1), group(4+0+1), others(4+0+0).",
        keyPoints: [
          "Modo octal: 3 dígitos para owner/group/others",
          "r=4, w=2, x=1, soma para cada categoria",
          "u=user, g=group, o=others, a=all",
          "+ adiciona, - remove, = define exatamente"
        ],
        examples: "chmod 644 file.txt  # rw-r--r--\nchmod u+x script.sh  # adiciona execução ao owner\nchmod go-w file.conf  # remove escrita de group e others"
      },
      hints: ["Como calcular 754 em binário?", "Qual a equivalência entre octal e rwx?"]
    },
    {
      id: 12,
      question: "Como procurar ficheiros que contenham a palavra 'error' ignorando maiúsculas/minúsculas?",
      code: "// Busca case-insensitive\ngrep -i 'error' /var/log/syslog",
      options: [
        "grep -i 'error' ficheiro",
        "grep 'error' ficheiro --ignore-case",
        "grep -I 'error' ficheiro",
        "find 'error' ficheiro -i"
      ],
      correct: 0,
      explanation: "A opção -i do grep faz busca case-insensitive, encontrando 'Error', 'ERROR', 'error', etc. Útil para logs onde a formatação pode variar.",
      theoryPoints: {
        title: "Busca Avançada com grep",
        content: "grep oferece várias opções para buscas flexíveis: -i ignora case, -v inverte busca, -n mostra números de linha, -c conta ocorrências.",
        keyPoints: [
          "-i: ignore case",
          "-v: inverte match (linhas que NÃO contêm)",
          "-n: mostra número da linha",
          "-c: conta ocorrências",
          "-r: recursivo em diretórios"
        ],
        examples: "grep -rin 'error' /var/log/\ngrep -c 'warning' app.log\ngrep -v '^#' config.conf  # exclui comentários"
      },
      hints: ["Qual opção controla sensibilidade a maiúsculas?", "Como encontrar todas as variações de 'error'?"]
    },
    {
      id: 13,
      question: "Como comprimir um diretório inteiro mantendo a estrutura de paths?",
      code: "// Compressão recursiva\ntar -czf backup.tar.gz /home/user/documents/",
      options: [
        "tar -czf backup.tar.gz diretorio/",
        "zip -r backup.zip diretorio/",
        "gzip -r diretorio/ backup.gz",
        "Ambas A e B estão corretas"
      ],
      correct: 3,
      explanation: "tar -czf cria tarball comprimido com gzip, mantendo estrutura. zip -r também funciona mas com formato diferente. Ambos são válidos para compressão recursiva.",
      theoryPoints: {
        title: "Compressão e Arquivos tar",
        content: "tar agrupa múltiplos ficheiros, gzip comprime. Combinações comuns: -czf (create zip file), -xzf (extract zip file). zip é alternativa comum.",
        keyPoints: [
          "tar -c: create, -x: extract, -z: gzip, -f: file",
          "tar -czf: cria tarball comprimido",
          "tar -xzf: extrai tarball comprimido",
          "zip -r: comprime recursivamente",
          "unzip: extrai arquivos zip"
        ],
        examples: "tar -czf projeto.tar.gz src/ docs/\ntar -xzf backup.tar.gz\nzip -r site.zip public_html/\nunzip arquivo.zip"
      },
      hints: ["Qual comando para agrupar + comprimir?", "Como incluir subdiretórios?"]
    },
    {
      id: 14,
      question: "Como verificar o espaço em disco usado por um diretório específico?",
      code: "// Análise de uso de disco\ndu -sh /home/user/projetos/\n4.2G    /home/user/projetos/",
      options: [
        "du -sh diretorio/",
        "df -h diretorio/",
        "ls -la diretorio/ | grep total",
        "size -r diretorio/"
      ],
      correct: 0,
      explanation: "du -sh mostra uso de disco de forma legível (human-readable) para um diretório específico. df mostra espaço livre em filesystems.",
      theoryPoints: {
        title: "Gestão de Espaço em Disco",
        content: "du (disk usage) mostra espaço usado por ficheiros/diretórios. df (disk free) mostra espaço disponível em filesystems montados.",
        keyPoints: [
          "du -s: summary (total apenas)",
          "du -h: human readable (K,M,G)",
          "du -sh: summary human readable",
          "df -h: disk free human readable",
          "df -i: inodes livres"
        ],
        examples: "du -sh /var/log/  # tamanho do diretório\ndu -h --max-depth=1 /home/  # top-level apenas\ndf -h /  # espaço livre na root"
      },
      hints: ["Qual comando mostra uso real de disco?", "Como formatar saída para humanos?"]
    },
    {
      id: 15,
      question: "Como substituir 'foo' por 'bar' apenas na primeira ocorrência de cada linha?",
      code: "// Substituição seletiva com sed\nsed 's/foo/bar/' ficheiro.txt",
      options: [
        "sed 's/foo/bar/' ficheiro",
        "sed 's/foo/bar/g' ficheiro",
        "tr 'foo' 'bar' < ficheiro",
        "replace 'foo' 'bar' ficheiro --first"
      ],
      correct: 0,
      explanation: "sed 's/old/new/' substitui apenas a primeira ocorrência por linha. O 'g' no final faria substituição global em cada linha.",
      theoryPoints: {
        title: "Edição Seletiva com sed",
        content: "sed (stream editor) permite edição poderosa baseada em padrões. Sem 'g' substitui apenas primeira ocorrência, com 'g' substitui todas.",
        keyPoints: [
          "s/old/new/: substitui primeira ocorrência",
          "s/old/new/g: substitui todas ocorrências",
          "s/old/new/2: substitui segunda ocorrência",
          "/padrao/s/old/new/: só em linhas com padrão"
        ],
        examples: "sed 's/cat/dog/' file.txt  # só primeira\nsed 's/cat/dog/g' file.txt  # todas\nsed 's/cat/dog/2' file.txt  # só segunda\nsed '/error/s/warning/ALERT/' log.txt"
      },
      hints: ["Qual a diferença entre s/old/new/ e s/old/new/g?", "Como limitar a substituições?"]
    },
    {
      id: 16,
      question: "Como executar um comando periodicamente a cada 5 segundos?",
      code: "// Execução periódica\nwatch -n 5 'ps aux | grep python | wc -l'",
      options: [
        "watch -n 5 'comando'",
        "sleep 5 && comando",
        "repeat 5s 'comando'",
        "cron '*/5 * * * *' comando"
      ],
      correct: 0,
      explanation: "watch -n 5 executa o comando a cada 5 segundos, atualizando o output no terminal. Útil para monitorização em tempo real.",
      theoryPoints: {
        title: "Agendamento e Monitorização",
        content: "watch executa comandos periodicamente mostrando output atualizado. cron agenda tarefas em horários específicos. sleep pausa execução.",
        keyPoints: [
          "watch -n N: executa a cada N segundos",
          "cron: agendamento baseado em tempo",
          "sleep N: pausa por N segundos",
          "at: execução única agendada"
        ],
        examples: "watch -n 2 'free -h'  # memória a cada 2s\nwatch -d 'ls -l'  # destaca mudanças\n* * * * * comando  # cron a cada minuto"
      },
      hints: ["Qual comando para execução contínua?", "Como especificar intervalo em segundos?"]
    },
    {
      id: 17,
      question: "Como encontrar ficheiros com mais de 100MB e eliminá-los interativamente?",
      code: "// Busca e eliminação condicional\nfind . -size +100M -ok rm {} \\;",
      options: [
        "find . -size +100M -ok rm {} \\;",
        "find . -size +100M -exec rm {} \\;",
        "ls -l | grep 'M' | rm -i",
        "du -h | grep '100M' | xargs rm"
      ],
      correct: 0,
      explanation: "find . -size +100M encontra ficheiros >100MB, -ok pede confirmação antes de executar rm para cada ficheiro. Mais seguro que -exec.",
      theoryPoints: {
        title: "Busca Condicional com Ações",
        content: "find pode executar comandos nos ficheiros encontrados. -ok pede confirmação, -exec executa diretamente. {} é substituído pelo nome do ficheiro.",
        keyPoints: [
          "-exec comando {} \\;: executa comando",
          "-ok comando {} \\;: pede confirmação",
          "{}: placeholder para nome do ficheiro",
          "\\;: termina o comando -exec/-ok"
        ],
        examples: "find . -name '*.tmp' -exec rm {} \\;\nfind /tmp -mtime +30 -ok rm {} \\;\nfind . -size +1G -exec ls -lh {} \\;"
      },
      hints: ["Como pedir confirmação antes de eliminar?", "Qual a sintaxe para -exec/-ok?"]
    },
    {
      id: 18,
      question: "Como redirecionar stdout e stderr para ficheiros diferentes?",
      code: "// Redirecionamento separado\ncomando > output.log 2> error.log",
      options: [
        "comando > output.log 2> error.log",
        "comando 1> output.log 2> error.log",
        "comando > output.log 2>&1 error.log",
        "Ambas A e B estão corretas"
      ],
      correct: 3,
      explanation: "Ambas as formas redirecionam stdout para output.log e stderr para error.log. 2>&1 redirecionaria stderr para o mesmo local que stdout.",
      theoryPoints: {
        title: "Redirecionamento Avançado",
        content: "Unix usa file descriptors: 0=stdin, 1=stdout, 2=stderr. Podem ser redirecionados separadamente ou combinados.",
        keyPoints: [
          "> ou 1>: redireciona stdout",
          "2>: redireciona stderr",
          "2>&1: redireciona stderr para stdout",
          "&>: redireciona stdout e stderr",
          ">/dev/null: descarta output"
        ],
        examples: "cmd > out.txt 2> err.txt  # separados\ncmd > log.txt 2>&1  # combinados\ncmd &> /dev/null  # descarta tudo\ncmd 2> >(grep -v debug)  # filtra stderr"
      },
      hints: ["Qual file descriptor para stderr?", "Como redirecionar para ficheiros separados?"]
    },
    {
      id: 19,
      question: "Como extrair apenas as linhas únicas de um ficheiro, ordenadas?",
      code: "// Remoção de duplicados\nsort ficheiro.txt | uniq",
      options: [
        "sort ficheiro | uniq",
        "uniq ficheiro | sort",
        "sort -u ficheiro",
        "Ambas A e C estão corretas"
      ],
      correct: 3,
      explanation: "sort | uniq e sort -u produzem o mesmo resultado: linhas únicas ordenadas. uniq sozinho só remove duplicados consecutivos.",
      theoryPoints: {
        title: "Processamento de Dados Únicos",
        content: "uniq remove linhas duplicadas consecutivas. sort ordena linhas. sort -u combina ordenação e remoção de duplicados.",
        keyPoints: [
          "uniq: remove duplicados consecutivos",
          "sort: ordena linhas",
          "sort -u: ordena e remove duplicados",
          "uniq -c: conta ocorrências",
          "uniq -d: mostra apenas duplicados"
        ],
        examples: "sort file.txt | uniq  # único ordenado\nsort -u file.txt  # equivalente\nuniq -c file.txt  # conta frequências\nsort file.txt | uniq -d  # apenas duplicados"
      },
      hints: ["uniq funciona apenas em linhas consecutivas?", "Há atalho para sort + uniq?"]
    },
    {
      id: 20,
      question: "Como criar um link simbólico para um ficheiro ou diretório?",
      code: "// Criação de links simbólicos\nln -s /caminho/original /caminho/link",
      options: [
        "ln -s alvo link",
        "link -s alvo link",
        "symlink alvo link",
        "cp -s alvo link"
      ],
      correct: 0,
      explanation: "ln -s cria link simbólico (soft link) que aponta para o alvo. Links simbólicos podem cruzar filesystems e apontar para diretórios.",
      theoryPoints: {
        title: "Links Simbólicos e Hard Links",
        content: "ln cria links: -s para simbólicos (apontadores), sem -s para hard links (mesmo inode). Links simbólicos são mais flexíveis.",
        keyPoints: [
          "ln -s: link simbólico (soft link)",
          "ln: hard link (mesmo inode)",
          "Links simbólicos: podem cruzar filesystems",
          "Hard links: só mesmo filesystem, não para diretórios"
        ],
        examples: "ln -s /usr/bin/python3 /usr/local/bin/python\nln file.txt hardlink.txt  # hard link\nreadlink link_simbolico  # mostra destino"
      },
      hints: ["Qual opção para link simbólico?", "Links simbólicos podem apontar para diretórios?"]
      },
        {
      id: 21,
      question: "Qual é a forma mais direta e limpa de encontrar apenas os Process IDs (PIDs) de um serviço chamado 'nginx', sem mostrar o próprio comando 'grep'?",
      code: "// Método 1: Clássico, mas mostra o 'grep'\n$ ps aux | grep 'nginx'\nnginx     1234 ...\nuser      5678 grep nginx\n\n// Método 2: Direto\n$ pgrep nginx\n1234",
      options: [
        "ps aux | grep 'nginx'",
        "pgrep nginx",
        "who | grep 'nginx'",
        "find --pid 'nginx'"
      ],
      correct: 1,
      explanation: "O comando 'pgrep' (process grep) é desenhado especificamente para procurar processos pelo nome e retornar apenas os seus PIDs. O método 'ps aux | grep' funciona, mas polui a saída com o próprio processo 'grep', o que 'pgrep' evita.",
      theoryPoints: {
        title: "Gestão de Processos Eficiente",
        content: "Enquanto 'ps | grep' é comum, 'pgrep' é uma ferramenta mais limpa para encontrar PIDs. 'pkill' é o seu equivalente para enviar sinais (como 'kill') diretamente pelo nome.",
        keyPoints: [
          "ps: mostra snapshot dos processos",
          "grep: filtra texto",
          "ps aux | grep 'nome': método clássico, mas 'sujo'",
          "pgrep 'nome': método moderno, retorna PIDs",
          "pkill 'nome': envia sinal (default TERM) para PIDs"
        ],
        examples: "pgrep sshd\npgrep -u root chrome\nps aux | grep '[s]shd' # Truque para evitar 'grep'\npkill -9 nginx"
      },
      hints: [
        "Como evitar que o 'grep' se encontre a si mesmo?",
        "Existe um comando 'grep' específico para processos?"
      ]
    },
    {
      id: 22,
      question: "Como encontrar linhas em 'config.conf' que começam com a palavra 'Listen' (ex: 'Listen 80', 'Listen 443')?",
      code: "// Exemplo de config.conf\n# Ouve na porta 80\nListen 80\nListen 443\n\nErrorLog /var/log/error.log",
      options: [
        "grep 'Listen$' config.conf",
        "grep 'Listen' config.conf",
        "grep '^Listen' config.conf",
        "grep 'Listen.*' config.conf"
      ],
      correct: 2,
      explanation: "O acento circunflexo '^' é uma expressão regular que significa 'início da linha'. Isso garante que apenas linhas *começando* com 'Listen' sejam encontradas, ignorando linhas onde 'Listen' possa aparecer no meio (como em comentários).",
      theoryPoints: {
        title: "Expressões Regulares (Regex) Básicas",
        content: "O 'grep' usa expressões regulares para padrões. '^' (início da linha) e '$' (fim da linha) são os mais básicos e úteis para ancorar buscas.",
        keyPoints: [
          "^: ancora no início da linha",
          "$: ancora no fim da linha",
          ".: qualquer caractere único",
          "*: zero ou mais do caractere anterior",
          "[abc]: um caractere da lista"
        ],
        examples: "grep '^root' /etc/passwd # Linhas que começam com 'root'\ngrep 'sh$' /etc/passwd   # Linhas que terminam com 'sh'\ngrep '^#' config.conf     # Linhas de comentário"
      },
      hints: [
        "Como o 'grep' sabe onde a linha começa?",
        "Qual caractere especial representa o 'início'?"
      ]
    },
    {
      id: 23,
      question: "O comando 'ls -l' produz colunas separadas por *vários espaços*. Como extrair de forma fiável apenas a 9ª coluna (nome do ficheiro)?",
      code: "// Saída de 'ls -l' (espaços variados)\n-rw-r--r-- 1 user group   4096 Jan  1 10:00 file1.txt\ndrwxr-xr-x 2 user group   4096 Feb 15 12:30 pasta\n\n// Comando corrigido\nls -l | tr -s ' ' | cut -d' ' -f9",
      options: [
        "ls -l | cut -d' ' -f9",
        "ls -l | tr -s ' ' | cut -d' ' -f9",
        "ls -l | cut -f9",
        "ls -l | grep -f9"
      ],
      correct: 1,
      explanation: "'ls -l' usa espaços inconsistentes. 'cut -d' ' -f9' (Opção A) falha porque trata cada espaço como um delimitador. 'tr -s ' '' ('squeeze') comprime múltiplos espaços num só. Depois disso, 'cut -d' ' -f9' pode usar o espaço único como delimitador para extrair o 9º campo.",
      theoryPoints: {
        title: "Limpeza de Saída com 'tr'",
        content: "Muitos comandos (como 'ls -l' ou 'ps') usam múltiplos espaços para alinhamento. Para processar esta saída com 'cut', é essencial primeiro 'espremer' (squeeze) os espaços repetidos num só usando 'tr -s'.",
        keyPoints: [
          "tr: translitera ou apaga caracteres",
          "tr -s 'char': 'squeeze' (comprime) 'char' repetidos",
          "tr -d 'char': 'delete' (apaga) 'char'",
          "Pipeline: ls -l | tr -s ' ' | cut -d' ' -f<N>"
        ],
        examples: "ls -l | tr -s ' ' | cut -d' ' -f1,9\nps aux | tr -s ' ' | cut -d' ' -f2,11"
      },
      hints: [
        "O 'cut' funciona bem com múltiplos espaços?",
        "Como posso reduzir '    ' para ' '?"
      ]
    },
    {
      id: 24,
      question: "Qual o efeito do comando 'ls -l | tee file_list.txt | grep 'Jan''?",
      code: "// O comando 'tee' divide o fluxo\n$ ls -l | tee file_list.txt | grep 'Jan'\n-rw-r--r-- 1 user group   4096 Jan  1 10:00 file1.txt\n\n$ cat file_list.txt\n-rw-r--r-- 1 user group   4096 Jan  1 10:00 file1.txt\ndrwxr-xr-x 2 user group   4096 Feb 15 12:30 pasta",
      options: [
        "Guarda a lista *completa* de 'ls -l' em 'file_list.txt' E mostra no terminal apenas as linhas que contêm 'Jan'.",
        "Guarda a lista *filtrada* (apenas linhas com 'Jan') em 'file_list.txt' E mostra o mesmo no terminal.",
        "Apenas guarda a lista completa em 'file_list.txt', não mostrando nada no terminal.",
        "Mostra um erro, pois 'tee' não pode ser usado com 'grep'."
      ],
      correct: 0,
      explanation: "O comando 'tee' é usado para duplicar um stream. Ele recebe a saída de 'ls -l', guarda uma cópia *completa* em 'file_list.txt' E, simultaneamente, passa a mesma saída completa para o 'grep 'Jan'', que filtra e mostra o resultado no terminal.",
      theoryPoints: {
        title: "Dividindo Streams com 'tee'",
        content: "'tee' lê da entrada padrão e escreve na saída padrão *e* em um ou mais ficheiros. É útil para guardar resultados intermédios de um pipeline sem o interromper.",
        keyPoints: [
          "tee <ficheiro>: escreve para stdout E para o <ficheiro>",
          "tee -a <ficheiro>: (append) adiciona ao ficheiro em vez de sobrescrever",
          "Útil para logar e ver ao mesmo tempo"
        ],
        examples: "who | tee users.log | wc -l\ndate | tee current_date.txt\nls | tee file_list.txt | sort -r"
      },
      hints: [
        "O 'tee' vem antes ou depois do 'grep'?",
        "O que o 'tee' faz com o pipeline?"
      ]
    },
    {
      id: 25,
      question: "Qual comando é mais *eficiente* para apagar milhares de ficheiros '.tmp' encontrados pelo 'find'?",
      code: "// Opção 1: Lenta, um 'rm' por ficheiro\n$ find . -name '*.tmp' -exec rm {} \\;\n\n// Opção 2: Rápida, um 'rm' para muitos ficheiros\n$ find . -name '*.tmp' | xargs rm\n\n// Opção 3: Rápida, mas com '+'\n$ find . -name '*.tmp' -exec rm {} +",
      options: [
        "find . -name '*.tmp' -exec rm {} \\;",
        "find . -name '*.tmp' | xargs rm",
        "rm $(find . -name '*.tmp')",
        "Ambas B e C (se -exec rm {} + for opção) são mais eficientes que A"
      ],
      correct: 1,
      explanation: "O comando 'xargs' é mais eficiente. 'find ... -exec ... \\;' (Opção A) lança um novo processo 'rm' para *cada* ficheiro. 'xargs' (Opção B) agrupa muitos nomes de ficheiros e passa-os de uma só vez para o 'rm' (ex: 'rm file1 file2...'), reduzindo o número de processos criados. (A Opção C, `rm $(...)`, pode falhar se a lista for muito longa - 'Argument list too long').",
      theoryPoints: {
        title: "Processamento em Lote com 'xargs'",
        content: "'xargs' lê itens da entrada padrão e constrói e executa linhas de comando com esses itens. É a forma padrão de 'x-args' (eXtended arguments) e é muito mais eficiente do que 'find -exec ... \\;' para operações em massa.",
        keyPoints: [
          "find | xargs <cmd>: pipeline padrão para eficiência.",
          "find ... -exec <cmd> {} \\;: um processo <cmd> por ficheiro.",
          "find ... -exec <cmd> {} +: (Alternativa moderna a xargs) um processo <cmd> para múltiplos ficheiros.",
          "$(...): substituição de comando, pode falhar com 'Argument list too long'."
        ],
        examples: "find . -name '*.log' | xargs grep 'ERROR'\nfind . -name '*.bak' | xargs rm\nfind . -type f -print0 | xargs -0 chown user:group"
      },
      hints: [
        "Como 'find -exec' lida com 10.000 ficheiros?",
        "Existe uma forma de agrupar os ficheiros antes de chamar o 'rm'?"
      ]
    }
];
export default ex5;