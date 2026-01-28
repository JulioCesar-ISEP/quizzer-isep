const ex7 = [
  {
    id: 1,
    question: "O assembler é uma ferramenta que...",
    code: "",
    options: [
      "traduz um programa numa linguagem de alto-nível para linguagem-máquina",
      "traduz um programa numa linguagem de alto-nível para assembly",
      "traduz um programa em assembly para linguagem-máquina",
      "interpreta e executa linha-a-linha um programa numa linguagem de alto-nível"
    ],
    correct: 2,
    explanation: "O assembler traduz código em assembly para linguagem-máquina.",
    hints: ["Assembler ≠ compilador.", "Assembly → máquina."]
  },
  {
    id: 2,
    question: "O linker é um utilitário que...",
    code: "",
    options: [
      "resolve todas as referências a símbolos, substituindo-as pelos seus endereços",
      "transforma as instruções em assembly para linguagem-máquina",
      "liga as instruções aos dados de um programa, em tempo de execução",
      "carrega um ficheiro executável para memória"
    ],
    correct: 0,
    explanation: "O linker resolve referências a símbolos entre módulos e produz o executável (ou prepara a ligação).",
    hints: ["Pensa em vários ficheiros .o.", "Erro típico: undefined reference."]
  },
  {
    id: 3,
    question: "Admita um programa escrito numa linguagem de programação de alto-nível. Qual afirmação é verdadeira?",
    code: "",
    options: [
      "O código-fonte desse programa é directamente executado pelo processador",
      "Se a linguagem de programação for interpretada, será sempre necessário ter um compilador específico à linguagem para executar o programa linha-a-linha",
      "Um compilador específico a essa linguagem irá executar as instruções em código-máquina, necessárias para levar a cabo cada instrução do programa",
      "Um compilador específico a essa linguagem irá traduzir o código-fonte, produzindo um ficheiro executável em código-máquina"
    ],
    correct: 3,
    explanation: "Um compilador traduz o código-fonte e produz (direta ou indiretamente) um executável em código-máquina.",
    hints: ["Compilar ≠ executar.", "Executável é saída do processo de compilação+ligação."]
  },
  {
    id: 4,
    question: "Em Unix, a shell é uma interface da linha de comando. Qual das seguintes afirmações é falsa?",
    code: "",
    options: [
      "O comando chmod é utilizado para redefinir as permissões de acesso a um ficheiro para os vários tipos de utilizador",
      "O comando find localiza e apresenta uma expressão regular no interior de ficheiros de texto",
      "O comando fg traz para primeiro plano (foreground) um processo que está a correr em segundo plano (background)",
      "O comando mv permite alterar o nome de um ficheiro"
    ],
    correct: 1,
    explanation: "A afirmação do find é falsa: quem procura expressões dentro de ficheiros é tipicamente o grep (entre outros), não o find.",
    hints: ["find procura ficheiros/directórios.", "grep procura padrões em texto."]
  },
  {
    id: 5,
    question: "Uma interface de linha de comando é uma aplicação...",
    code: "",
    options: [
      "que corre no espaço do kernel, executando comandos ordenados pelo utilizador",
      "que não faz parte do kernel do SO, mas que expõe os serviços do SO ao utilizador",
      "tornada obsoleta pelas interfaces gráficas do utilizador, nos SO contemporâneos",
      "que não permite a interacção do computador com o utilizador"
    ],
    correct: 1,
    explanation: "A shell/CLI é user-space e expõe serviços do SO; não é o kernel.",
    hints: ["Kernel ≠ shell.", "Shell usa system calls."]
  },
  {
    id: 6,
    question: "Um shell script é um programa interpretado pela interface da linha de comando...",
    code: "",
    options: [
      "desenvolvido numa linguagem de alto nível, sobretudo para resolver problemas de computação numérica",
      "escrito em assembly, para resolver problemas de carácter genérico",
      "que é utilizado para carregar o SO no arranque do computador",
      "desenvolvido numa linguagem de alto nível, sobretudo para automatizar tarefas de gestão e manutenção do sistema"
    ],
    correct: 3,
    explanation: "Shell scripts são usados sobretudo para automação de tarefas de sistema.",
    hints: ["Automatização (backup, logs, etc.).", "Não é para boot do SO."]
  },
  {
    id: 7,
    question: "Na elaboração de um programa normal, é comum que a ordem de utilização das ferramentas auxiliares seja:",
    code: "",
    options: [
      "Editor, compilador e linker",
      "Editor, linker e compilador",
      "Linker, editor e compilador",
      "Linker, compilador e editor"
    ],
    correct: 0,
    explanation: "Fluxo típico: escrever (editor) → compilar → ligar (linker).",
    hints: ["Escreves antes de compilar.", "Linkar vem depois de compilar."]
  }
];

export default ex7;
