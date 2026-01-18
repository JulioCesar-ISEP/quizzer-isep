export const B126 = `
# Operações sobre Processos

## 📋 Visão Geral

As operações sobre processos são as ações fundamentais que o sistema operacional executa para criar, gerir, coordenar e terminar processos: criação, terminação, troca de contexto e comunicação.
Estas operações permitem multiprogramação, time-sharing e isolamento seguro entre processos concorrentes.

---

## 🎯 Operações Principais

### 1. Criação de Processos

- Processo pai invoca chamadas de sistema (fork(), CreateProcess()) para criar um novo processo filho
- SO aloca PCB, memória, inicializa contexto e pode carregar novo executável (exec())
- Processo filho recebe PID único e pode herdar recursos do pai ou começar limpo

### 2. Terminação de Processos

- Voluntária: processo invoca exit(), muda para estado Zombie, pai lê resultado com wait()
- Forçada: SO mata processo por erro (segmentation fault), timeout CPU ou sinal kill()
- Recursos são libertados, PCB destruído após comunicação pai-filho

---

## 💡 Troca de Contexto (Context Switch)

### Mecanismo Central

\`\`\`mermaid
sequenceDiagram
    CPU->>P1: Executa Processo 1
    Note over P1: Interrupção<br/>(timer, E/S, sinal)
    P1->>SO: Salva contexto no PCB[P1]
    SO->>Escalonador: Escolhe próximo processo
    SO->>P2: Carrega contexto do PCB[P2]
    CPU->>P2: Executa Processo 2
\`\`\`

- Guarda: registos CPU, contador de programa, estado no PCB do processo atual
- Carrega: contexto do próximo processo escolhido pelo escalonador
- Essencial para multiprogramação: permite CPU passar de um processo para outro sem perda de estado

---

## 📊 Comunicação e Sincronização entre Processos

### IPC (Inter-Process Communication)

- Pipes: canal unidirecional para comunicação pai-filho
- Sockets: comunicação entre processos em máquina local ou remota
- Memória partilhada: região de memória comum com semáforos/mutex para sincronização
- Mensagens: troca de estruturas de dados via filas de mensagens

### Problemas de Coordenação

- Condições de corrida: dois processos acedem simultaneamente a recurso partilhado
- Deadlock: processos ficam bloqueados mutuamente à espera de recursos
- Starvation: processo fica indefinidamente sem CPU devido a prioridades desfavoráveis

---

## 🎥 Material em Vídeo

### Context Switching e Operações de Processo
<iframe width="560" height="315" src="https://www.youtube.com/embed/LJ7b8vT3QfU" title="Context Switching in Operating Systems" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### IPC - Comunicação entre Processos
<iframe width="560" height="315" src="https://www.youtube.com/embed/3zQ5bPPrcrg" title="Inter-Process Communication (IPC) Methods" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Leitura / Slides

- Multiprogramming e time-sharing (context switches, troca entre processos)
- Programas pedem recursos ao SO via chamadas de sistema (criação, comunicação, terminação)

### Rotinas Práticas

- Simulação de Context Switch:
  Liste 4 processos e mostre sequência de execução:
  \`\`\`
  t=0: P1 executa (2s) → timer → guarda PCB[P1] → P2 executa
  t=2: P2 executa (1s) → E/S → guarda PCB[P2] → P3 executa
  ...
  \`\`\`

- Perguntas de revisão:
  1. Qual chamada de sistema cria processo? E qual o termina voluntariamente?
  2. Por que context switch entre processos é mais lento que entre threads?
  3. Nomeie 3 mecanismos de IPC e quando usar cada um.

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]*
`;
