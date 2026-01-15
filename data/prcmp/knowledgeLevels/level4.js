// ===== IMPORTS DE CONTEÚDO NÍVEL 4 - LINUX/SHELL BÁSICO =====

// 1.1 Comandos de Arquivos
import { E111 } from './content/level4/E111'  // cp (copy)
import { E112 } from './content/level4/E112'  // mv (move/rename)
import { E113 } from './content/level4/E113'  // rm (remove)
import { E114 } from './content/level4/E114'  // ls (list)
import { E115 } from './content/level4/E115'  // cat (concatenate)
import { E116 } from './content/level4/E116'  // Wildcards (*, ?, [])
import { E117 } from './content/level4/E117'  // Diretório Home (~, $HOME)

// 1.2 Comandos de Diretórios
import { E121 } from './content/level4/E121'  // cd (change directory)
import { E122 } from './content/level4/E122'  // pwd (print working directory)
import { E123 } from './content/level4/E123'  // mkdir (make directory)
import { E124 } from './content/level4/E124'  // rmdir (remove directory)

// 2.1 Permissões Básicas
import { E211 } from './content/level4/E211'  // chmod (change mode)
import { E212 } from './content/level4/E212'  // Notação Octal (755, 644)
import { E213 } from './content/level4/E213'  // Notação Simbólica (u+x, go-w)
import { E214 } from './content/level4/E214'  // Permissões rwx
import { E215 } from './content/level4/E215'  // chown/chgrp

// 2.2 Propriedades de Arquivos
import { E221 } from './content/level4/E221'  // file (tipo de arquivo)
import { E222 } from './content/level4/E222'  // stat (estatísticas)
import { E223 } from './content/level4/E223'  // touch (alterar timestamp)
import { E224 } from './content/level4/E224'  // ln (links)

// 3.1 Processamento de Texto Básico
import { E311 } from './content/level4/E311'  // grep (busca padrões)
import { E312 } from './content/level4/E312'  // wc (word count)
import { E313 } from './content/level4/E313'  // head/tail
import { E314 } from './content/level4/E314'  // sort/uniq
import { E315 } from './content/level4/E315'  // cut (extrair colunas)

// 3.2 Transformação de Texto
import { E321 } from './content/level4/E321'  // tr (translate)
import { E322 } from './content/level4/E322'  // sed (stream editor básico)
import { E323 } from './content/level4/E323'  // awk básico
import { E324 } from './content/level4/E324'  // paste/join

// 4.1 Redirecionamentos
import { E411 } from './content/level4/E411'  // STDIN, STDOUT, STDERR
import { E412 } from './content/level4/E412'  // > (sobrescrever)
import { E413 } from './content/level4/E413'  // >> (acrescentar)
import { E414 } from './content/level4/E414'  // < (entrada de arquivo)
import { E415 } from './content/level4/E415'  // 2> (redirecionar stderr)

// 4.2 Pipelines
import { E421 } from './content/level4/E421'  // Pipe (|)
import { E422 } from './content/level4/E422'  // Encadeamento de comandos
import { E423 } from './content/level4/E423'  // tee (split output)
import { E424 } from './content/level4/E424'  // named pipes (básico)

// 5.1 Shell Básico
import { E511 } from './content/level4/E511'  // Estrutura da linha de comando
import { E512 } from './content/level4/E512'  // Variáveis de ambiente
import { E513 } from './content/level4/E513'  // Comandos built-in
import { E514 } from './content/level4/E514'  // Histórico (history)
import { E515 } from './content/level4/E515'  // Tab completion

// 5.2 Shell Scripting Básico
import { E521 } from './content/level4/E521'  // O que são shell scripts
import { E522 } from './content/level4/E522'  // Shebang (#!)
import { E523 } from './content/level4/E523'  // Execução de scripts
import { E524 } from './content/level4/E524'  // Scripts simples

// 6.1 Busca de Arquivos
import { E611 } from './content/level4/E611'  // find (busca básica)
import { E612 } from './content/level4/E612'  // Critérios do find (name, type, size)
import { E613 } from './content/level4/E613'  // -exec e -ok
import { E614 } from './content/level4/E614'  // locate/which/whereis

// 6.2 Busca de Conteúdo
import { E621 } from './content/level4/E621'  // grep vs find
import { E622 } from './content/level4/E622'  // grep recursivo (-r)
import { E623 } from './content/level4/E623'  // Opções do grep (-i, -v, -n)
import { E624 } from './content/level4/E624'  // Expressões regulares básicas

// 7.1 Processos Básicos
import { E711 } from './content/level4/E711'  // ps (process status)
import { E712 } from './content/level4/E712'  // top/htop
import { E713 } from './content/level4/E713'  // kill/pkill
import { E714 } from './content/level4/E714'  // jobs/fg/bg

// 7.2 Controle de Execução
import { E721 } from './content/level4/E721'  // & (background)
import { E722 } from './content/level4/E722'  // Ctrl+C, Ctrl+Z, Ctrl+D
import { E723 } from './content/level4/E723'  // nohup
import { E724 } from './content/level4/E724'  // time (tempo de execução)


export const level4KnowledgeTree = {
  title: "Linux/Shell Básico - Mapa Completo de Conhecimento",
  description: "Diagrama hierárquico top-down do conhecimento em Linux/Shell Básico baseado no ex4",
  nodes: {
    // ===== NÍVEL 1: CATEGORIAS PRINCIPAIS =====
    "E": { id: "E", label: "Linux/Shell Básico", level: 1, type: "root" },
    
    // ===== CATEGORIAS PRINCIPAIS =====
    "E1": { id: "E1", label: "1. Comandos de Arquivos e Diretórios", level: 1, parent: "E" },
    "E2": { id: "E2", label: "2. Permissões e Propriedades", level: 1, parent: "E" },
    "E3": { id: "E3", label: "3. Processamento de Texto", level: 1, parent: "E" },
    "E4": { id: "E4", label: "4. Redirecionamentos e Pipelines", level: 1, parent: "E" },
    "E5": { id: "E5", label: "5. Shell Básico e Scripting", level: 1, parent: "E" },
    "E6": { id: "E6", label: "6. Busca e Localização", level: 1, parent: "E" },
    "E7": { id: "E7", label: "7. Processos e Controle", level: 1, parent: "E" },

    // ===== SUBDIAGRAMA 1: COMANDOS DE ARQUIVOS E DIRETÓRIOS =====
    "E11": { id: "E11", label: "1.1 Comandos de Arquivos", level: 2, parent: "E1" },
    "E12": { id: "E12", label: "1.2 Comandos de Diretórios", level: 2, parent: "E1" },
    
    "E111": { id: "E111", label: "cp (copy)", level: 3, type: 'CONTENT', parent: "E11", content: E111 },
    "E112": { id: "E112", label: "mv (move/rename)", level: 3, type: 'CONTENT', parent: "E11", content: E112 },
    "E113": { id: "E113", label: "rm (remove)", level: 3, type: 'CONTENT', parent: "E11", content: E113 },
    "E114": { id: "E114", label: "ls (list)", level: 3, type: 'CONTENT', parent: "E11", content: E114 },
    "E115": { id: "E115", label: "cat (concatenate)", level: 3, type: 'CONTENT', parent: "E11", content: E115 },
    "E116": { id: "E116", label: "Wildcards (*, ?, [])", level: 3, type: 'CONTENT', parent: "E11", content: E116 },
    "E117": { id: "E117", label: "Diretório Home (~, $HOME)", level: 3, type: 'CONTENT', parent: "E11", content: E117 },
    
    "E121": { id: "E121", label: "cd (change directory)", level: 3, type: 'CONTENT', parent: "E12", content: E121 },
    "E122": { id: "E122", label: "pwd (print working directory)", level: 3, type: 'CONTENT', parent: "E12", content: E122 },
    "E123": { id: "E123", label: "mkdir (make directory)", level: 3, type: 'CONTENT', parent: "E12", content: E123 },
    "E124": { id: "E124", label: "rmdir (remove directory)", level: 3, type: 'CONTENT', parent: "E12", content: E124 },

    // ===== SUBDIAGRAMA 2: PERMISSÕES E PROPRIEDADES =====
    "E21": { id: "E21", label: "2.1 Permissões Básicas", level: 2, parent: "E2" },
    "E22": { id: "E22", label: "2.2 Propriedades de Arquivos", level: 2, parent: "E2" },
    
    "E211": { id: "E211", label: "chmod (change mode)", level: 3, type: 'CONTENT', parent: "E21", content: E211 },
    "E212": { id: "E212", label: "Notação Octal (755, 644)", level: 3, type: 'CONTENT', parent: "E21", content: E212 },
    "E213": { id: "E213", label: "Notação Simbólica (u+x, go-w)", level: 3, type: 'CONTENT', parent: "E21", content: E213 },
    "E214": { id: "E214", label: "Permissões rwx", level: 3, type: 'CONTENT', parent: "E21", content: E214 },
    "E215": { id: "E215", label: "chown/chgrp", level: 3, type: 'CONTENT', parent: "E21", content: E215 },
    
    "E221": { id: "E221", label: "file (tipo de arquivo)", level: 3, type: 'CONTENT', parent: "E22", content: E221 },
    "E222": { id: "E222", label: "stat (estatísticas)", level: 3, type: 'CONTENT', parent: "E22", content: E222 },
    "E223": { id: "E223", label: "touch (alterar timestamp)", level: 3, type: 'CONTENT', parent: "E22", content: E223 },
    "E224": { id: "E224", label: "ln (links)", level: 3, type: 'CONTENT', parent: "E22", content: E224 },

    // ===== SUBDIAGRAMA 3: PROCESSAMENTO DE TEXTO =====
    "E31": { id: "E31", label: "3.1 Processamento de Texto Básico", level: 2, parent: "E3" },
    "E32": { id: "E32", label: "3.2 Transformação de Texto", level: 2, parent: "E3" },
    
    "E311": { id: "E311", label: "grep (busca padrões)", level: 3, type: 'CONTENT', parent: "E31", content: E311 },
    "E312": { id: "E312", label: "wc (word count)", level: 3, type: 'CONTENT', parent: "E31", content: E312 },
    "E313": { id: "E313", label: "head/tail", level: 3, type: 'CONTENT', parent: "E31", content: E313 },
    "E314": { id: "E314", label: "sort/uniq", level: 3, type: 'CONTENT', parent: "E31", content: E314 },
    "E315": { id: "E315", label: "cut (extrair colunas)", level: 3, type: 'CONTENT', parent: "E31", content: E315 },
    
    "E321": { id: "E321", label: "tr (translate)", level: 3, type: 'CONTENT', parent: "E32", content: E321 },
    "E322": { id: "E322", label: "sed (stream editor básico)", level: 3, type: 'CONTENT', parent: "E32", content: E322 },
    "E323": { id: "E323", label: "awk básico", level: 3, type: 'CONTENT', parent: "E32", content: E323 },
    "E324": { id: "E324", label: "paste/join", level: 3, type: 'CONTENT', parent: "E32", content: E324 },

    // ===== SUBDIAGRAMA 4: REDIRECIONAMENTOS E PIPELINES =====
    "E41": { id: "E41", label: "4.1 Redirecionamentos", level: 2, parent: "E4" },
    "E42": { id: "E42", label: "4.2 Pipelines", level: 2, parent: "E4" },
    
    "E411": { id: "E411", label: "STDIN, STDOUT, STDERR", level: 3, type: 'CONTENT', parent: "E41", content: E411 },
    "E412": { id: "E412", label: "> (sobrescrever)", level: 3, type: 'CONTENT', parent: "E41", content: E412 },
    "E413": { id: "E413", label: ">> (acrescentar)", level: 3, type: 'CONTENT', parent: "E41", content: E413 },
    "E414": { id: "E414", label: "< (entrada de arquivo)", level: 3, type: 'CONTENT', parent: "E41", content: E414 },
    "E415": { id: "E415", label: "2> (redirecionar stderr)", level: 3, type: 'CONTENT', parent: "E41", content: E415 },
    
    "E421": { id: "E421", label: "Pipe (|)", level: 3, type: 'CONTENT', parent: "E42", content: E421 },
    "E422": { id: "E422", label: "Encadeamento de comandos", level: 3, type: 'CONTENT', parent: "E42", content: E422 },
    "E423": { id: "E423", label: "tee (split output)", level: 3, type: 'CONTENT', parent: "E42", content: E423 },
    "E424": { id: "E424", label: "named pipes (básico)", level: 3, type: 'CONTENT', parent: "E42", content: E424 },

    // ===== SUBDIAGRAMA 5: SHELL BÁSICO E SCRIPTING =====
    "E51": { id: "E51", label: "5.1 Shell Básico", level: 2, parent: "E5" },
    "E52": { id: "E52", label: "5.2 Shell Scripting Básico", level: 2, parent: "E5" },
    
    "E511": { id: "E511", label: "Estrutura da linha de comando", level: 3, type: 'CONTENT', parent: "E51", content: E511 },
    "E512": { id: "E512", label: "Variáveis de ambiente", level: 3, type: 'CONTENT', parent: "E51", content: E512 },
    "E513": { id: "E513", label: "Comandos built-in", level: 3, type: 'CONTENT', parent: "E51", content: E513 },
    "E514": { id: "E514", label: "Histórico (history)", level: 3, type: 'CONTENT', parent: "E51", content: E514 },
    "E515": { id: "E515", label: "Tab completion", level: 3, type: 'CONTENT', parent: "E51", content: E515 },
    
    "E521": { id: "E521", label: "O que são shell scripts", level: 3, type: 'CONTENT', parent: "E52", content: E521 },
    "E522": { id: "E522", label: "Shebang (#!)", level: 3, type: 'CONTENT', parent: "E52", content: E522 },
    "E523": { id: "E523", label: "Execução de scripts", level: 3, type: 'CONTENT', parent: "E52", content: E523 },
    "E524": { id: "E524", label: "Scripts simples", level: 3, type: 'CONTENT', parent: "E52", content: E524 },

    // ===== SUBDIAGRAMA 6: BUSCA E LOCALIZAÇÃO =====
    "E61": { id: "E61", label: "6.1 Busca de Arquivos", level: 2, parent: "E6" },
    "E62": { id: "E62", label: "6.2 Busca de Conteúdo", level: 2, parent: "E6" },
    
    "E611": { id: "E611", label: "find (busca básica)", level: 3, type: 'CONTENT', parent: "E61", content: E611 },
    "E612": { id: "E612", label: "Critérios do find (name, type, size)", level: 3, type: 'CONTENT', parent: "E61", content: E612 },
    "E613": { id: "E613", label: "-exec e -ok", level: 3, type: 'CONTENT', parent: "E61", content: E613 },
    "E614": { id: "E614", label: "locate/which/whereis", level: 3, type: 'CONTENT', parent: "E61", content: E614 },
    
    "E621": { id: "E621", label: "grep vs find", level: 3, type: 'CONTENT', parent: "E62", content: E621 },
    "E622": { id: "E622", label: "grep recursivo (-r)", level: 3, type: 'CONTENT', parent: "E62", content: E622 },
    "E623": { id: "E623", label: "Opções do grep (-i, -v, -n)", level: 3, type: 'CONTENT', parent: "E62", content: E623 },
    "E624": { id: "E624", label: "Expressões regulares básicas", level: 3, type: 'CONTENT', parent: "E62", content: E624 },

    // ===== SUBDIAGRAMA 7: PROCESSOS E CONTROLE =====
    "E71": { id: "E71", label: "7.1 Processos Básicos", level: 2, parent: "E7" },
    "E72": { id: "E72", label: "7.2 Controle de Execução", level: 2, parent: "E7" },
    
    "E711": { id: "E711", label: "ps (process status)", level: 3, type: 'CONTENT', parent: "E71", content: E711 },
    "E712": { id: "E712", label: "top/htop", level: 3, type: 'CONTENT', parent: "E71", content: E712 },
    "E713": { id: "E713", label: "kill/pkill", level: 3, type: 'CONTENT', parent: "E71", content: E713 },
    "E714": { id: "E714", label: "jobs/fg/bg", level: 3, type: 'CONTENT', parent: "E71", content: E714 },
    
    "E721": { id: "E721", label: "& (background)", level: 3, type: 'CONTENT', parent: "E72", content: E721 },
    "E722": { id: "E722", label: "Ctrl+C, Ctrl+Z, Ctrl+D", level: 3, type: 'CONTENT', parent: "E72", content: E722 },
    "E723": { id: "E723", label: "nohup", level: 3, type: 'CONTENT', parent: "E72", content: E723 },
    "E724": { id: "E724", label: "time (tempo de execução)", level: 3, type: 'CONTENT', parent: "E72", content: E724 }
  },

  // ===== CONEXÕES HIERÁRQUICAS COMPLETAS =====
  hierarchicalEdges: [
    // Estrutura principal
    { from: "E", to: "E1", type: "solid" },
    { from: "E", to: "E2", type: "solid" },
    { from: "E", to: "E3", type: "solid" },
    { from: "E", to: "E4", type: "solid" },
    { from: "E", to: "E5", type: "solid" },
    { from: "E", to: "E6", type: "solid" },
    { from: "E", to: "E7", type: "solid" },
    
    // Comandos de Arquivos e Diretórios
    { from: "E1", to: "E11", type: "solid" },
    { from: "E1", to: "E12", type: "solid" },
    
    { from: "E11", to: "E111", type: "solid" },
    { from: "E11", to: "E112", type: "solid" },
    { from: "E11", to: "E113", type: "solid" },
    { from: "E11", to: "E114", type: "solid" },
    { from: "E11", to: "E115", type: "solid" },
    { from: "E11", to: "E116", type: "solid" },
    { from: "E11", to: "E117", type: "solid" },
    
    { from: "E12", to: "E121", type: "solid" },
    { from: "E12", to: "E122", type: "solid" },
    { from: "E12", to: "E123", type: "solid" },
    { from: "E12", to: "E124", type: "solid" },
    
    // Permissões e Propriedades
    { from: "E2", to: "E21", type: "solid" },
    { from: "E2", to: "E22", type: "solid" },
    
    { from: "E21", to: "E211", type: "solid" },
    { from: "E21", to: "E212", type: "solid" },
    { from: "E21", to: "E213", type: "solid" },
    { from: "E21", to: "E214", type: "solid" },
    { from: "E21", to: "E215", type: "solid" },
    
    { from: "E22", to: "E221", type: "solid" },
    { from: "E22", to: "E222", type: "solid" },
    { from: "E22", to: "E223", type: "solid" },
    { from: "E22", to: "E224", type: "solid" },
    
    // Processamento de Texto
    { from: "E3", to: "E31", type: "solid" },
    { from: "E3", to: "E32", type: "solid" },
    
    { from: "E31", to: "E311", type: "solid" },
    { from: "E31", to: "E312", type: "solid" },
    { from: "E31", to: "E313", type: "solid" },
    { from: "E31", to: "E314", type: "solid" },
    { from: "E31", to: "E315", type: "solid" },
    
    { from: "E32", to: "E321", type: "solid" },
    { from: "E32", to: "E322", type: "solid" },
    { from: "E32", to: "E323", type: "solid" },
    { from: "E32", to: "E324", type: "solid" },
    
    // Redirecionamentos e Pipelines
    { from: "E4", to: "E41", type: "solid" },
    { from: "E4", to: "E42", type: "solid" },
    
    { from: "E41", to: "E411", type: "solid" },
    { from: "E41", to: "E412", type: "solid" },
    { from: "E41", to: "E413", type: "solid" },
    { from: "E41", to: "E414", type: "solid" },
    { from: "E41", to: "E415", type: "solid" },
    
    { from: "E42", to: "E421", type: "solid" },
    { from: "E42", to: "E422", type: "solid" },
    { from: "E42", to: "E423", type: "solid" },
    { from: "E42", to: "E424", type: "solid" },
    
    // Shell Básico e Scripting
    { from: "E5", to: "E51", type: "solid" },
    { from: "E5", to: "E52", type: "solid" },
    
    { from: "E51", to: "E511", type: "solid" },
    { from: "E51", to: "E512", type: "solid" },
    { from: "E51", to: "E513", type: "solid" },
    { from: "E51", to: "E514", type: "solid" },
    { from: "E51", to: "E515", type: "solid" },
    
    { from: "E52", to: "E521", type: "solid" },
    { from: "E52", to: "E522", type: "solid" },
    { from: "E52", to: "E523", type: "solid" },
    { from: "E52", to: "E524", type: "solid" },
    
    // Busca e Localização
    { from: "E6", to: "E61", type: "solid" },
    { from: "E6", to: "E62", type: "solid" },
    
    { from: "E61", to: "E611", type: "solid" },
    { from: "E61", to: "E612", type: "solid" },
    { from: "E61", to: "E613", type: "solid" },
    { from: "E61", to: "E614", type: "solid" },
    
    { from: "E62", to: "E621", type: "solid" },
    { from: "E62", to: "E622", type: "solid" },
    { from: "E62", to: "E623", type: "solid" },
    { from: "E62", to: "E624", type: "solid" },
    
    // Processos e Controle
    { from: "E7", to: "E71", type: "solid" },
    { from: "E7", to: "E72", type: "solid" },
    
    { from: "E71", to: "E711", type: "solid" },
    { from: "E71", to: "E712", type: "solid" },
    { from: "E71", to: "E713", type: "solid" },
    { from: "E71", to: "E714", type: "solid" },
    
    { from: "E72", to: "E721", type: "solid" },
    { from: "E72", to: "E722", type: "solid" },
    { from: "E72", to: "E723", type: "solid" },
    { from: "E72", to: "E724", type: "solid" }
  ],

  // ===== CONEXÕES CRUZADAS =====
  crossConnections: [
    // Conexões entre Arquivos e Permissões
    { from: "E11", to: "E21", type: "dashed", color: "blue", label: "Arquivos → Permissões" },
    { from: "E111", to: "E211", type: "dashed", color: "blue", label: "cp → chmod" },
    
    // Conexões entre Processamento de Texto e Pipelines
    { from: "E3", to: "E4", type: "dashed", color: "green", label: "Texto → Pipelines" },
    { from: "E311", to: "E421", type: "dashed", color: "green", label: "grep → Pipe" },
    
    // Conexões entre Shell e Scripting
    { from: "E51", to: "E52", type: "dashed", color: "purple", label: "Shell → Scripting" },
    { from: "E511", to: "E521", type: "dashed", color: "purple", label: "Linha comando → Scripts" },
    
    // Conexões entre Busca e Processamento de Texto
    { from: "E6", to: "E3", type: "dashed", color: "orange", label: "Busca → Texto" },
    { from: "E611", to: "E311", type: "dashed", color: "orange", label: "find → grep" },
    
    // Conexões entre Redirecionamentos e Shell
    { from: "E4", to: "E5", type: "dashed", color: "red", label: "Redirecionamentos → Shell" },
    { from: "E411", to: "E511", type: "dashed", color: "red", label: "STDIN/OUT → Linha comando" },
    
    // Conexões entre Processos e Shell
    { from: "E7", to: "E5", type: "dashed", color: "teal", label: "Processos → Shell" },
    { from: "E714", to: "E513", type: "dashed", color: "teal", label: "jobs/fg/bg → Built-ins" },
    
    // Conexões entre Wildcards e Busca
    { from: "E116", to: "E61", type: "dashed", color: "brown", label: "Wildcards → find" },
    
    // Conexões entre Transformação de Texto e Pipelines
    { from: "E32", to: "E42", type: "dashed", color: "pink", label: "Transformação → Pipelines" },
    { from: "E321", to: "E422", type: "dashed", color: "pink", label: "tr → Encadeamento" },
    
    // Conexões entre Permissões e Execução
    { from: "E21", to: "E52", type: "dashed", color: "gray", label: "Permissões → Scripts" },
    { from: "E212", to: "E523", type: "dashed", color: "gray", label: "755 → Execução scripts" }
  ],

  // ===== METADADOS PARA FRONTEND =====
  metadata: {
    totalNodes: 76,
    totalConnections: 116,
    lastUpdated: "2024-01-15",
    version: "1.0",
    examFocus: ["PRCMP - Exames Linux/Shell Básico"],
    keyTopics: [
      "Comandos cp, mv, rm, ls, cat",
      "Wildcards (*, ?, [])",
      "Permissões chmod (notação octal e simbólica)",
      "Comandos grep, wc, head/tail",
      "Redirecionamentos (>, >>, <, 2>, |)",
      "Estrutura da linha de comando",
      "Comando find com -exec/-ok",
      "Shell scripts básicos",
      "Controle de processos (jobs, fg, bg)"
    ]
  }
};