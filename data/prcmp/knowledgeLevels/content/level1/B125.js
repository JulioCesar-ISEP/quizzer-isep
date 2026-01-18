export const B125 = `
# Criação e Terminação de Processos

## 📋 Visão Geral

A criação de processos é iniciada por um processo pai que pede ao SO para executar um novo programa, resultando num novo PCB e espaço de endereçamento.
A terminação ocorre quando um processo completa a sua tarefa ou é forçado a terminar, libertando todos os seus recursos para o SO reutilizar.

---

## 🎯 Criação de Processos

### Como um Processo é Criado

- Um processo pai executa uma chamada de sistema como fork() (Unix/Linux) ou CreateProcess() (Windows)
- O SO aloca memória para o novo processo, cria o seu PCB, inicializa o contexto e pode copiar/carregar o código do executável

### Mecanismo fork() + exec()

\`\`\`mermaid
sequenceDiagram
    pai->>SO: fork()
    SO->>SO: Cria PCB filho<br/>Copia espaço de endereçamento<br/>Filho recebe PID
    SO->>pai: Retorna PID do filho
    SO->>filho: Retorna 0 (é filho)
    filho->>SO: exec("novo_programa")
    SO->>SO: Substitui imagem do processo
\`\`\`

- fork(): cria uma cópia quase idêntica do processo pai
- exec(): substitui a imagem do processo por um novo executável

---

## 💡 Terminação de Processos

### Formas de Terminação

- Voluntária (Normal): processo completa a sua tarefa e invoca exit() ou retorna do main()
- Forçada: SO termina processo por erro (segmentation fault), limite de tempo CPU, ou pedido explícito (kill())
- Morte em cascata: pai termina e força terminação dos filhos

### O que Acontece na Terminação

1. Processo chama exit() → estado muda para Zombie (PCB mantido para comunicação com pai)
2. SO liberta memória, ficheiros e outros recursos associados
3. PCB é destruído quando o pai lê o estado de saída (ou após timeout)

---

## 📊 Fluxo Completo: Nascimento à Morte

### Diagrama de Criação/Terminação

\`\`\`mermaid
graph TD
    Pai[Processo Pai] --> fork[Chama fork()]
    fork --> SO[SO cria Processo Filho<br/>Novo PCB + Espaço Memória]
    SO --> Filho[Filho inicia<br/>PID único]
    Filho --> exec[exec(novo_programa)]
    Filho --> Execução[Executa tarefa]
    Execução --> exit[Chama exit()]
    exit --> Zombie[Estado Zombie]
    Pai --> wait[wait() lê estado]
    Zombie --> Morto[PCB destruído<br/>Recursos libertos]

    style Filho fill:#fee2e2
    style Zombie fill:#fef3c7
\`\`\`

---

## 🎥 Material em Vídeo

### Fork, Exec e Criação de Processos
<iframe width="560" height="315" src="https://www.youtube.com/embed/0yF0Q3z8V9k" title="Fork and Exec in Unix/Linux Systems" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Processo Zombie e Orphan
<iframe width="560" height="315" src="https://www.youtube.com/embed/4q9T5nqKfZc" title="Process Termination, Zombies and Orphans" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Leitura / Slides

- Multiprogramming (criação de múltiplos jobs/processos em execução)
- Programas pedem recursos ao SO, que cria e gere processos em isolamento

### Rotinas Práticas

- Exemplo Unix/Linux:
  \`\`\`bash
  # Pai cria filho
  echo "Sou pai $$"
  ./filho_programa &
  wait $!
  echo "Filho terminou"
  \`\`\`

- Questões de revisão:
  1. Qual a diferença entre fork() e exec()?
  2. Por que processos terminados ficam em estado Zombie?
  3. O que acontece com processos órfãos (pai morreu primeiro)?

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]*
`;
