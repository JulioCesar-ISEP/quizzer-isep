export const level2KnowledgeTree = {
  title: "Linux & Shell/Bash - Mapa Completo de Conhecimento",
  description: "Diagrama hierárquico top-down do conhecimento Linux e Shell/Bash",
  nodes: {
    // ===== NÍVEL 1: CATEGORIAS PRINCIPAIS =====
    "A": { id: "A", label: "Linux & Shell/Bash", level: 1, type: "root" },
    
    // ===== NÍVEL 1: CATEGORIAS PRINCIPAIS =====
    "A1": { id: "A1", label: "1. Fundamentos do Sistema", level: 1, parent: "A" },
    "A2": { id: "A2", label: "2. Gerenciamento Arquivos", level: 1, parent: "A" },
    "A3": { id: "A3", label: "3. Processamento Texto", level: 1, parent: "A" },
    "A4": { id: "A4", label: "4. Shell Scripting", level: 1, parent: "A" },
    "A5": { id: "A5", label: "5. Redirecionamentos", level: 1, parent: "A" },
    "A6": { id: "A6", label: "6. Administração Sistema", level: 1, parent: "A" },
    "A7": { id: "A7", label: "7. Rede", level: 1, parent: "A" },
    "A8": { id: "A8", label: "8. Tópicos Avançados", level: 1, parent: "A" },

    // ===== SUBDIAGRAMA 1: FUNDAMENTOS =====
    "A11": { id: "A11", label: "1.1 Conceitos Básicos", level: 2, parent: "A1" },
    "A12": { id: "A12", label: "1.2 Navegação e Comandos", level: 2, parent: "A1" },
    
    "A111": { id: "A111", label: "O que é Linux?", level: 3,type:'CONTENT', parent: "A11",content:`Linux é um sistema operativo de código aberto baseado no kernel Linux, amplamente utilizad...` },
    "A112": { id: "A112", label: "O que é Shell?", level: 3,type:'CONTENT', parent: "A11",content:`Shell é uma interface....` },
    "A113": { id: "A113", label: "CLI vs GUI", level: 3,type:'CONTENT', parent: "A11",content:`CLI (Command Line Interface) é uma inter...` },
    "A114": { id: "A114", label: "Hierarquia Diretórios", level: 3,type:'CONTENT', parent: "A11",content:``},
    "A115": { id: "A115", label: "Shells Populares",type: 'CONTENT', level: 3, parent: "A11",content:`Bash (Bourne Again SHell) é o shel...` },
    
    "A121": { id: "A121", label: "Comandos Básicos", level: 3,type:'CONTENT',parent: "A12",content:``},
    "A122": { id: "A122", label: "Comandos Básicos", level: 3,type:'CONTENT', parent: "A12",content:`` },
    "A123": { id: "A123", label: "Navegação Diretórios", level: 3,type:'CONTENT', parent: "A12",content:`` },
    "A124": { id: "A124", label: "Super User", level: 3,type:'CONTENT', parent: "A12",content:`` },
    "A125": { id: "A125", label: "Comandos Ajuda", level: 3,type:'CONTENT', parent: "A12",content:`` },
    "A126": { id: "A126", label: "Compleção Tab", level: 3,type:'CONTENT', parent: "A12",content:`` },

    // ===== SUBDIAGRAMA 2: GERENCIAMENTO ARQUIVOS =====
    "A21": { id: "A21", label: "2.1 Operações Básicas", level: 2, parent: "A2" },
    "A22": { id: "A22", label: "2.2 Permissões", level: 2, parent: "A2" },
    "A23": { id: "A23", label: "2.3 Sistemas Arquivos", level: 2, parent: "A2" },
    
    "A211": { id: "A211", label: "Criar/Excluir", level: 3,type:'CONTENT', parent: "A21",content:`` },
    "A212": { id: "A212", label: "Mover/Copiar/Renomear",level: 3,type:'CONTENT', parent: "A21",content:`` },
    "A213": { id: "A213", label: "Links", level: 3,type:'CONTENT', parent: "A21",content:`` },
    "A214": { id: "A214", label: "Busca: find", level: 3,type:'CONTENT', parent: "A21",content:`` },
    
    "A221": { id: "A221", label: "Permissões rwx", level: 3,type:'CONTENT', parent: "A22",content:`` },
    "A222": { id: "A222", label: "chmod,chown,chgrp", level: 3,type:'CONTENT', parent: "A22",content:`` },
    "A223": { id: "A223", label: "Usuários e Grupos", level: 3,type:'CONTENT', parent: "A22",content:`` },
    "A224": { id: "A224", label: "Criar/Excluir/Atualizar", level: 3,type:'CONTENT', parent: "A22",content:`` },
    "A225": { id: "A225", label: "Ulimits", level: 3,type:'CONTENT', parent: "A22",content:`` },
    
    "A231": { id: "A231", label: "Inodes", level: 3,type:'CONTENT', parent: "A23",content:`` },
    "A232": { id: "A232", label: "Sistemas Arquivos", level: 3,type:'CONTENT', parent: "A23",content:`` },
    "A233": { id: "A233", label: "Montagem Discos", level: 3,type:'CONTENT', parent: "A23",content:`` },
    "A234": { id: "A234", label: "Adição Discos", level: 3,type:'CONTENT', parent: "A23",content:`` },
    "A235": { id: "A235", label: "LVM", level: 3,type:'CONTENT', parent: "A23",content:`` },
    "A236": { id: "A236", label: "Swap", level: 3,type:'CONTENT', parent: "A23",content:`` },
    "A237": { id: "A237", label: "df,du", level: 3,type:'CONTENT', parent: "A23",content:`` },

    // ===== SUBDIAGRAMA 3: PROCESSAMENTO TEXTO =====
    "A31": { id: "A31", label: "3.1 Editores Texto", level: 2, parent: "A3" },
    "A32": { id: "A32", label: "3.2 Comandos Texto", level: 2, parent: "A3" },
    
    "A311": { id: "A311", label: "Nano", level: 3,type:'CONTENT', parent: "A31",content:`` },
    "A312": { id: "A312", label: "Vim/Vi", level: 3,type:'CONTENT', parent: "A31",content:`` },
    "A313": { id: "A313", label: "Emacs", level: 3,type:'CONTENT', parent: "A31",content:`` },
    "A314": { id: "A314", label: "Operações Básicas", level: 3,type:'CONTENT', parent: "A31",content:`` },
    
    "A321": { id: "A321", label: "Visualização", level: 3,type:'CONTENT', parent: "A32",content:`` },
    "A322": { id: "A322", label: "Transformação", level: 3,type:'CONTENT', parent: "A32",content:`` },
    "A323": { id: "A323", label: "Análise", level: 3,type:'CONTENT', parent: "A32",content:`` },
    "A324": { id: "A324", label: "Busca: grep", level: 3,type:'CONTENT', parent: "A32",content:`` },
    "A325": { id: "A325", label: "Avançado: awk,sed", level: 3,type:'CONTENT', parent: "A32",content:`` },

    // ===== SUBDIAGRAMA 4: SHELL SCRIPTING =====
    "A41": { id: "A41", label: "4.1 Fundamentos Bash", level: 2, parent: "A4" },
    "A42": { id: "A42", label: "4.2 Variáveis I/O", level: 2, parent: "A4" },
    "A43": { id: "A43", label: "4.3 Dados & Operadores", level: 2, parent: "A4" },
    "A44": { id: "A44", label: "4.4 Estruturas Controle", level: 2, parent: "A4" },
    "A45": { id: "A45", label: "4.5 Tópicos Avançados", level: 2, parent: "A4" },
    
    "A411": { id: "A411", label: "O que é Bash?", level: 3,type:'CONTENT', parent: "A41",content:`` },
    "A412": { id: "A412", label: "O que é Scripting?", level: 3,type:'CONTENT', parent: "A41",content:`` },
    "A413": { id: "A413", label: "Anatomia Script", level: 3,type:'CONTENT', parent: "A41",content:`` },
    "A414": { id: "A414", label: "Execução Direta", level: 3,type:'CONTENT', parent: "A41",content:`` },
    "A415": { id: "A415", label: "Execução Source", level: 3,type:'CONTENT', parent: "A41",content:`` },
    
    "A421": { id: "A421", label: "Variáveis Ambiente vs Shell", level: 3,type:'CONTENT', parent: "A42",content:`` },
    "A422": { id: "A422", label: "Escopos Variáveis", level: 3,type:'CONTENT', parent: "A42",content:`` },
    "A423": { id: "A423", label: "Criação/Impressão/Modificação", level: 3,type:'CONTENT', parent: "A42",content:`` },
    "A424": { id: "A424", label: "Variáveis Especiais", level: 3,type:'CONTENT', parent: "A42",content:`` },
    "A425": { id: "A425", label: "Leitura Input", level: 3,type:'CONTENT', parent: "A42",content:`` },
    "A426": { id: "A426", label: "Here documents/strings", level: 3,type:'CONTENT', parent: "A42",content:`` },
    "A427": { id: "A427", label: "printf formatting", level: 3,type:'CONTENT', parent: "A42",content:`` },
    
    "A431": { id: "A431", label: "Tipos Dados", level: 3,type:'CONTENT', parent: "A43",content:`` },
    "A432": { id: "A432", label: "Operadores", level: 3,type:'CONTENT', parent: "A43",content:`` },
    "A433": { id: "A433", label: "Teste Arquivo/Strings", level: 3,type:'CONTENT', parent: "A43",content:`` },
    "A434": { id: "A434", label: "Expansão Aritmética", level: 3,type:'CONTENT', parent: "A43",content:`` },
    "A435": { id: "A435", label: "let,expr,bc,awk", level: 3,type:'CONTENT', parent: "A43",content:`` },
    
    "A441": { id: "A441", label: "Condicionais: if,case", level: 3,type:'CONTENT', parent: "A44",content:`` },
    "A442": { id: "A442", label: "Loops: for,until,while", level: 3,type:'CONTENT', parent: "A44",content:`` },
    "A443": { id: "A443", label: "break,continue", level: 3,type:'CONTENT', parent: "A44",content:`` },
    "A444": { id: "A444", label: "Funções-> Escopos,Recursivas", level: 3,type:'CONTENT', parent: "A44",content:`` },
    
    "A451": { id: "A451", label: "Manipulação Strings", level: 3,type:'CONTENT', parent: "A45",content:`` },
    "A452": { id: "A452", label: "Expressões Regulares", level: 3,type:'CONTENT', parent: "A45",content:`` },
    "A453": { id: "A453", label: "Regex com grep,sed,awk", level: 3,type:'CONTENT', parent: "A45",content:`` },
    "A454": { id: "A454", label: "Códigos Saída", level: 3,type:'CONTENT', parent: "A45",content:`` },

    // ===== SUBDIAGRAMA 5: REDIRECIONAMENTOS =====
    "A51": { id: "A51", label: "stdin,stdout,stderr", level: 4,type:'CONTENT', parent: "A5",content:`` },
    "A52": { id: "A52", label: "Pipes", level: 4,type:'CONTENT', parent: "A5",content:`` },
    "A53": { id: "A53", label: "Redirecionamentos", level: 4,type:'CONTENT', parent: "A5",content:`` },
    "A54": { id: "A54", label: "Substituição Comandos", level: 4,type:'CONTENT', parent: "A5",content:`` },
    "A55": { id: "A55", label: "Substituição Processo", level: 4,type:'CONTENT', parent: "A5",content:`` },
    "A56": { id: "A56", label: "tee", level: 4,type:'CONTENT', parent: "A5",content:`` },

    // ===== SUBDIAGRAMA 6: ADMINISTRAÇÃO =====
    "A61": { id: "A61", label: "6.1 Gerenciamento Processos", level: 2, parent: "A6" },
    "A62": { id: "A62", label: "6.2 Gerenciamento Serviços", level: 2, parent: "A6" },
    "A63": { id: "A63", label: "6.3 Monitoramento", level: 2, parent: "A6" },
    "A64": { id: "A64", label: "6.4 Gerenciamento Pacotes", level: 2, parent: "A6" },
    
    "A611": { id: "A611", label: "Listar: ps", level: 3,type:'CONTENT', parent: "A61",content:`` },
    "A612": { id: "A612", label: "Background/Foreground", level: 3,type:'CONTENT', parent: "A61",content:`` },
    "A613": { id: "A613", label: "jobs,fg,bg,disown", level: 3,type:'CONTENT', parent: "A61",content:`` },
    "A614": { id: "A614", label: "Sinais Processos", level: 3,type:'CONTENT', parent: "A61",content:`` },
    "A615": { id: "A615", label: "Encerrar Processos", level: 3,type:'CONTENT', parent: "A61",content:`` },
    "A616": { id: "A616", label: "Prioridades", level: 3,type:'CONTENT', parent: "A61",content:`` },
    "A617": { id: "A617", label: "Forking", level: 3,type:'CONTENT', parent: "A61",content:`` },
    "A618": { id: "A618", label: "nohup", level: 3,type:'CONTENT', parent: "A61",content:`` },
    
    "A621": { id: "A621", label: "systemd", level: 3,type:'CONTENT', parent: "A62",content:`` },
    "A622": { id: "A622", label: "Criar Serviços", level: 3,type:'CONTENT', parent: "A62",content:`` },
    "A623": { id: "A623", label: "Status Serviços", level: 3,type:'CONTENT', parent: "A62",content:`` },
    "A624": { id: "A624", label: "Iniciar/Parar/Restart", level: 3,type:'CONTENT', parent: "A62",content:`` },
    "A625": { id: "A625", label: "Logs Serviços", level: 3,type:'CONTENT', parent: "A62",content:`` },
    
    "A631": { id: "A631", label: "Uptime", level: 3,type:'CONTENT', parent: "A63",content:`` },
    "A632": { id: "A632", label: "Carga: top,htop", level: 3,type:'CONTENT', parent: "A63",content:`` },
    "A633": { id: "A633", label: "Memória: free", level: 3,type:'CONTENT', parent: "A63",content:`` },
    "A634": { id: "A634", label: "Discos: iostat,vmstat", level: 3,type:'CONTENT', parent: "A63",content:`` },
    "A635": { id: "A635", label: "Logs Autenticação", level: 3,type:'CONTENT', parent: "A63",content:`` },
    "A636": { id: "A636", label: "Serviços Execução", level: 3,type:'CONTENT', parent: "A63",content:`` },
    
    "A641": { id: "A641", label: "Repositórios", level: 3,type:'CONTENT', parent: "A64",content:`` },
    "A642": { id: "A642", label: "Buscar/Instalar", level: 3,type:'CONTENT', parent: "A64",content:`` },
    "A643": { id: "A643", label: "Listar Instalados", level: 3,type:'CONTENT', parent: "A64",content:`` },
    "A644": { id: "A644", label: "Instalar/Remover/Atualizar", level: 3,type:'CONTENT', parent: "A64",content:`` },
    "A645": { id: "A645", label: "apt,dnf,yum,brew,snap", level: 3,type:'CONTENT', parent: "A64",content:`` },

    // ===== SUBDIAGRAMA 7: REDE =====
    "A71": { id: "A71", label: "7.1 Fundamentos Rede", level: 2, parent: "A7" },
    "A72": { id: "A72", label: "7.2 Ferramentas Protocolos", level: 2, parent: "A7" },
    
    "A711": { id: "A711", label: "Pilha TCP/IP", level: 3,type:'CONTENT', parent: "A71",content:`` },
    "A712": { id: "A712", label: "Subnetting", level: 3,type:'CONTENT', parent: "A71",content:`` },
    "A713": { id: "A713", label: "Ethernet & arp/rarp", level: 3,type:'CONTENT', parent: "A71",content:`` },
    "A714": { id: "A714", label: "DHCP", level: 3,type:'CONTENT', parent: "A71",content:`` },
    "A715": { id: "A715", label: "Roteamento IP", level: 3,type:'CONTENT', parent: "A71",content:`` },
    "A716": { id: "A716", label: "Resolução DNS", level: 3,type:'CONTENT', parent: "A71",content:`` },
    "A717": { id: "A717", label: "Netfilter/iptables", level: 3,type:'CONTENT', parent: "A71",content:`` },
    
    "A721": { id: "A721", label: "SSH", level: 3,type:'CONTENT', parent: "A72",content:`` },
    "A722": { id: "A722", label: "Transferência-> scp,rsync,wget,curl", level: 3,type:'CONTENT', parent: "A72",content:`` },
    "A723": { id: "A723", label: "Interface: ifconfig,ip", level: 3,type:'CONTENT', parent: "A72",content:`` },
    "A724": { id: "A724", label: "Estatísticas: netstat,ss", level: 3,type:'CONTENT', parent: "A72",content:`` },
    "A725": { id: "A725", label: "Diagnóstico: ping,traceroute", level: 3,type:'CONTENT', parent: "A72",content:`` },
    "A726": { id: "A726", label: "Análise Pacotes", level: 3,type:'CONTENT', parent: "A72",content:`` },

    // ===== SUBDIAGRAMA 8: TÓPICOS AVANÇADOS =====
    "A81": { id: "A81", label: "8.1 Containerização", level: 2, parent: "A8" },
    "A82": { id: "A82", label: "8.2 Compactação Backup", level: 2, parent: "A8" },
    "A83": { id: "A83", label: "8.3 Agendamento Tarefas", level: 2, parent: "A8" },
    "A84": { id: "A84", label: "8.4 Inicialização Boot", level: 2, parent: "A8" },
    "A85": { id: "A85", label: "8.5 Erros Depuração", level: 2, parent: "A8" },
    
    "A811": { id: "A811", label: "cgroups", level: 3,type:'CONTENT', parent: "A81",content:`` },
    "A812": { id: "A812", label: "Container Runtime", level: 3,type:'CONTENT', parent: "A81",content:`` },
    "A813": { id: "A813", label: "Docker", level: 3,type:'CONTENT', parent: "A81",content:`` },
    
    "A821": { id: "A821", label: "tar", level: 3,type:'CONTENT', parent: "A82",content:`` },
    "A822": { id: "A822", label: "gzip/gunzip,zip/unzip", level: 3,type:'CONTENT', parent: "A82",content:`` },
    "A823": { id: "A823", label: "bzip2,xz", level: 3,type:'CONTENT', parent: "A82",content:`` },
    
    "A831": { id: "A831", label: "cron/crontab", level: 3,type:'CONTENT', parent: "A83",content:`` },
    "A832": { id: "A832", label: "at", level: 3,type:'CONTENT', parent: "A83",content:`` },
    "A833": { id: "A833", label: "systemd timers", level: 3,type:'CONTENT', parent: "A83",content:`` },
    
    "A841": { id: "A841", label: "Processo Boot", level: 3,type:'CONTENT', parent: "A84",content:`` },
    "A842": { id: "A842", label: "Boot Loaders GRUB", level: 3,type:'CONTENT', parent: "A84",content:`` },
    "A843": { id: "A843", label: "Logs Sistema", level: 3,type:'CONTENT', parent: "A84",content:`` },
    
    "A851": { id: "A851", label: "set -e,set -o,set -u", level: 3,type:'CONTENT', parent: "A85",content:`` },
    "A852": { id: "A852", label: "Log erros,trap", level: 3,type:'CONTENT', parent: "A85",content:`` },
    "A853": { id: "A853", label: "Depuração-> set -x,bash -n,shellcheck", level: 3,type:'CONTENT', parent: "A85",content:`` },
    "A854": { id: "A854", label: "Solução Problemas", level: 3,type:'CONTENT', parent: "A85",content:`` }
  },

  // ===== CONEXÕES HIERÁRQUICAS COMPLETAS =====
  hierarchicalEdges: [
    // Estrutura principal
    { from: "A", to: "A1", type: "solid" },
    { from: "A", to: "A2", type: "solid" },
    { from: "A", to: "A3", type: "solid" },
    { from: "A", to: "A4", type: "solid" },
    { from: "A", to: "A5", type: "solid" },
    { from: "A", to: "A6", type: "solid" },
    { from: "A", to: "A7", type: "solid" },
    { from: "A", to: "A8", type: "solid" },
    
    // Fundamentos do Sistema
    { from: "A1", to: "A11", type: "solid" },
    { from: "A1", to: "A12", type: "solid" },
    
    { from: "A11", to: "A111", type: "solid" },
    { from: "A11", to: "A112", type: "solid" },
    { from: "A11", to: "A113", type: "solid" },
    { from: "A11", to: "A114", type: "solid" },
    { from: "A11", to: "A115", type: "solid" },
    
    { from: "A12", to: "A121", type: "solid" },
    { from: "A12", to: "A122", type: "solid" },
    { from: "A12", to: "A123", type: "solid" },
    { from: "A12", to: "A124", type: "solid" },
    { from: "A12", to: "A125", type: "solid" },
    { from: "A12", to: "A126", type: "solid" },
    
    // Gerenciamento de Arquivos
    { from: "A2", to: "A21", type: "solid" },
    { from: "A2", to: "A22", type: "solid" },
    { from: "A2", to: "A23", type: "solid" },
    
    { from: "A21", to: "A211", type: "solid" },
    { from: "A21", to: "A212", type: "solid" },
    { from: "A21", to: "A213", type: "solid" },
    { from: "A21", to: "A214", type: "solid" },
    
    { from: "A22", to: "A221", type: "solid" },
    { from: "A22", to: "A222", type: "solid" },
    { from: "A22", to: "A223", type: "solid" },
    { from: "A22", to: "A224", type: "solid" },
    { from: "A22", to: "A225", type: "solid" },
    
    { from: "A23", to: "A231", type: "solid" },
    { from: "A23", to: "A232", type: "solid" },
    { from: "A23", to: "A233", type: "solid" },
    { from: "A23", to: "A234", type: "solid" },
    { from: "A23", to: "A235", type: "solid" },
    { from: "A23", to: "A236", type: "solid" },
    { from: "A23", to: "A237", type: "solid" },
    
    // Processamento de Texto
    { from: "A3", to: "A31", type: "solid" },
    { from: "A3", to: "A32", type: "solid" },
    
    { from: "A31", to: "A311", type: "solid" },
    { from: "A31", to: "A312", type: "solid" },
    { from: "A31", to: "A313", type: "solid" },
    { from: "A31", to: "A314", type: "solid" },
    
    { from: "A32", to: "A321", type: "solid" },
    { from: "A32", to: "A322", type: "solid" },
    { from: "A32", to: "A323", type: "solid" },
    { from: "A32", to: "A324", type: "solid" },
    { from: "A32", to: "A325", type: "solid" },
    
    // Shell Scripting
    { from: "A4", to: "A41", type: "solid" },
    { from: "A4", to: "A42", type: "solid" },
    { from: "A4", to: "A43", type: "solid" },
    { from: "A4", to: "A44", type: "solid" },
    { from: "A4", to: "A45", type: "solid" },
    
    { from: "A41", to: "A411", type: "solid" },
    { from: "A41", to: "A412", type: "solid" },
    { from: "A41", to: "A413", type: "solid" },
    { from: "A41", to: "A414", type: "solid" },
    { from: "A41", to: "A415", type: "solid" },
    
    { from: "A42", to: "A421", type: "solid" },
    { from: "A42", to: "A422", type: "solid" },
    { from: "A42", to: "A423", type: "solid" },
    { from: "A42", to: "A424", type: "solid" },
    { from: "A42", to: "A425", type: "solid" },
    { from: "A42", to: "A426", type: "solid" },
    { from: "A42", to: "A427", type: "solid" },
    
    { from: "A43", to: "A431", type: "solid" },
    { from: "A43", to: "A432", type: "solid" },
    { from: "A43", to: "A433", type: "solid" },
    { from: "A43", to: "A434", type: "solid" },
    { from: "A43", to: "A435", type: "solid" },
    
    { from: "A44", to: "A441", type: "solid" },
    { from: "A44", to: "A442", type: "solid" },
    { from: "A44", to: "A443", type: "solid" },
    { from: "A44", to: "A444", type: "solid" },
    
    { from: "A45", to: "A451", type: "solid" },
    { from: "A45", to: "A452", type: "solid" },
    { from: "A45", to: "A453", type: "solid" },
    { from: "A45", to: "A454", type: "solid" },
    
    // Redirecionamentos
    { from: "A5", to: "A51", type: "solid" },
    { from: "A5", to: "A52", type: "solid" },
    { from: "A5", to: "A53", type: "solid" },
    { from: "A5", to: "A54", type: "solid" },
    { from: "A5", to: "A55", type: "solid" },
    { from: "A5", to: "A56", type: "solid" },
    
    // Administração do Sistema
    { from: "A6", to: "A61", type: "solid" },
    { from: "A6", to: "A62", type: "solid" },
    { from: "A6", to: "A63", type: "solid" },
    { from: "A6", to: "A64", type: "solid" },
    
    { from: "A61", to: "A611", type: "solid" },
    { from: "A61", to: "A612", type: "solid" },
    { from: "A61", to: "A613", type: "solid" },
    { from: "A61", to: "A614", type: "solid" },
    { from: "A61", to: "A615", type: "solid" },
    { from: "A61", to: "A616", type: "solid" },
    { from: "A61", to: "A617", type: "solid" },
    { from: "A61", to: "A618", type: "solid" },
    
    { from: "A62", to: "A621", type: "solid" },
    { from: "A62", to: "A622", type: "solid" },
    { from: "A62", to: "A623", type: "solid" },
    { from: "A62", to: "A624", type: "solid" },
    { from: "A62", to: "A625", type: "solid" },
    
    { from: "A63", to: "A631", type: "solid" },
    { from: "A63", to: "A632", type: "solid" },
    { from: "A63", to: "A633", type: "solid" },
    { from: "A63", to: "A634", type: "solid" },
    { from: "A63", to: "A635", type: "solid" },
    { from: "A63", to: "A636", type: "solid" },
    
    { from: "A64", to: "A641", type: "solid" },
    { from: "A64", to: "A642", type: "solid" },
    { from: "A64", to: "A643", type: "solid" },
    { from: "A64", to: "A644", type: "solid" },
    { from: "A64", to: "A645", type: "solid" },
    
    // Rede
    { from: "A7", to: "A71", type: "solid" },
    { from: "A7", to: "A72", type: "solid" },
    
    { from: "A71", to: "A711", type: "solid" },
    { from: "A71", to: "A712", type: "solid" },
    { from: "A71", to: "A713", type: "solid" },
    { from: "A71", to: "A714", type: "solid" },
    { from: "A71", to: "A715", type: "solid" },
    { from: "A71", to: "A716", type: "solid" },
    { from: "A71", to: "A717", type: "solid" },
    
    { from: "A72", to: "A721", type: "solid" },
    { from: "A72", to: "A722", type: "solid" },
    { from: "A72", to: "A723", type: "solid" },
    { from: "A72", to: "A724", type: "solid" },
    { from: "A72", to: "A725", type: "solid" },
    { from: "A72", to: "A726", type: "solid" },
    
    // Tópicos Avançados
    { from: "A8", to: "A81", type: "solid" },
    { from: "A8", to: "A82", type: "solid" },
    { from: "A8", to: "A83", type: "solid" },
    { from: "A8", to: "A84", type: "solid" },
    { from: "A8", to: "A85", type: "solid" },
    
    { from: "A81", to: "A811", type: "solid" },
    { from: "A81", to: "A812", type: "solid" },
    { from: "A81", to: "A813", type: "solid" },
    
    { from: "A82", to: "A821", type: "solid" },
    { from: "A82", to: "A822", type: "solid" },
    { from: "A82", to: "A823", type: "solid" },
    
    { from: "A83", to: "A831", type: "solid" },
    { from: "A83", to: "A832", type: "solid" },
    { from: "A83", to: "A833", type: "solid" },
    
    { from: "A84", to: "A841", type: "solid" },
    { from: "A84", to: "A842", type: "solid" },
    { from: "A84", to: "A843", type: "solid" },
    
    { from: "A85", to: "A851", type: "solid" },
    { from: "A85", to: "A852", type: "solid" },
    { from: "A85", to: "A853", type: "solid" },
    { from: "A85", to: "A854", type: "solid" }
  ],

  // ===== CONEXÕES CRUZADAS =====
  crossConnections: [
    // Conexões entre Fundamentos e Scripting
    { from: "A12", to: "A41", type: "dashed", color: "green", label: "Base → Aplicação" },
    { from: "A31", to: "A41", type: "dashed", color: "green", label: "Editores → Scripts" },
    
    // Conexões entre Gerenciamento Arquivos e Administração
    { from: "A22", to: "A61", type: "dashed", color: "blue", label: "Permissões → Processos" },
    { from: "A23", to: "A63", type: "dashed", color: "blue", label: "Sistemas → Monitoramento" },
    
    // Conexões entre Processamento Texto e Scripting
    { from: "A32", to: "A42", type: "dashed", color: "purple", label: "Texto → Variáveis" },
    { from: "A32", to: "A45", type: "dashed", color: "purple", label: "Comandos → Avançado" },
    
    // Conexões entre Scripting e Administração
    { from: "A4", to: "A6", type: "dashed", color: "orange", label: "Scripting → Automação" },
    { from: "A45", to: "A85", type: "dashed", color: "orange", label: "Avançado → Depuração" },
    
    // Conexões entre Redirecionamentos e Processamento Texto
    { from: "A5", to: "A32", type: "dashed", color: "red", label: "Pipes → Processamento" },
    
    // Conexões entre Administração e Rede
    { from: "A6", to: "A7", type: "dashed", color: "teal", label: "Admin → Rede" },
    { from: "A64", to: "A72", type: "dashed", color: "teal", label: "Pacotes → Ferramentas" },
    
    // Conexões entre Rede e Tópicos Avançados
    { from: "A7", to: "A81", type: "dashed", color: "brown", label: "Rede → Containers" },
    { from: "A72", to: "A83", type: "dashed", color: "brown", label: "Protocolos → Agendamento" },
    
    // Conexões entre Tópicos Avançados e Scripting
    { from: "A8", to: "A4", type: "dashed", color: "pink", label: "Avançado → Melhoria" },
    { from: "A83", to: "A41", type: "dashed", color: "pink", label: "Agendamento → Execução" },
    
    // Conexões Recursivas (melhoria contínua)
    { from: "A85", to: "A41", type: "dashed", color: "gray", label: "Depuração → Fundamentos" },
    { from: "A45", to: "A32", type: "dashed", color: "gray", label: "Scripting → Texto" }
  ],

  // ===== METADADOS PARA FRONTEND =====
  metadata: {
    totalNodes: 154,
    totalConnections: 187,
    lastUpdated: "2024-01-01",
    version: "1.0"
  }
};