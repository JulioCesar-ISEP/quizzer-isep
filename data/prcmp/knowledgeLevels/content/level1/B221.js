export const B221 = `
# O que é Context Switch

## 📋 Visão Geral

Context Switch é a operação em que o SO suspende um processo em execução e ativa outro, salvando o estado do primeiro no seu PCB e restaurando o estado do segundo.
Esta operação é o coração da multiprogramação e time-sharing, permitindo que múltiplos processos partilhem a CPU de forma eficiente.

---

## 🎯 Mecanismo do Context Switch

### Passos Detalhados

1. Interrupção: timer, E/S completa, sinal, chegada de processo prioritário
2. Salvar contexto: SO guarda registos CPU (contador programa, stack pointer, registos gerais) no PCB do processo atual
3. Escalonamento: escalonador de curto prazo escolhe próximo processo da fila de prontos
4. Restaurar contexto: carrega registos do PCB do processo escolhido
5. Retoma execução: CPU continua do ponto exato onde o novo processo parou

### Diagrama Sequencial

\`\`\`mermaid
sequenceDiagram
    CPU->>P1: Executa P1
    Timer->>SO: Interrupção Timer
    Note over SO: Salva PC, SP, registos<br/>no PCB[P1]
    SO->>Escalonador: Escolhe P2
    Note over SO: Carrega PC, SP, registos<br/>do PCB[P2]
    CPU->>P2: Retoma P2
\`\`\`

---

## 💡 Tipos de Context Switch

### 1. Process to Process

- Mais custoso: mudança de espaço de endereçamento (TLB flush, troca de tabelas de páginas)
- Entre processos diferentes (diferentes PCBs, espaços de memória isolados)

### 2. Thread to Thread (mesmo processo)

- Mais rápido: mesmo espaço de endereçamento, só muda stack pointer e registos
- Entre threads do mesmo processo (TCBs diferentes, mas contexto partilhado)

### 3. Kernel to User / User to Kernel

- Mudança de modo de privilégio (ring 0 → ring 3 ou inverso)
- Acionado por chamadas de sistema, interrupções, exceções

---

## 📊 Custos e Overhead

### Overhead Típico

| Tipo | Tempo aproximado | Causas principais |
|---|---|---|
| Thread→Thread | 0.1-1μs | Salvar/carregar registos |
| Processo→Processo | 1-10μs | + Flush TLB, troca tabelas páginas |
| User↔Kernel | 0.05-0.5μs | Mudança modo privilégio |

Quantum ideal: deve ser >> tempo de context switch para compensar overhead.

### Quando Context Switch Ocorre

- Timer interrupt (quantum esgotado – Round Robin)
- E/S completa (processo bloqueado volta a pronto)
- Sinal (kill, SIGTERM)
- Fork/exec (novo processo)
- Prioridade dinâmica (processo mais urgente chega)

---

## 🎥 Material em Vídeo

### Context Switch Completo
<iframe width="560" height="315" src="https://www.youtube.com/embed/LJ7b8vT3QfU" title="What is Context Switching Animated" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Overhead e Tipos de Context Switch
<iframe width="560" height="315" src="https://www.youtube.com/embed/4q9T5nqKfZc" title="Context Switch Costs and Types Explained" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Leitura / Slides

- Time-sharing e multiprogramming dependem de context switches frequentes
- Programas executam em isolamento, SO coordena via trocas de contexto

### Rotinas Práticas

Simulação: 3 processos, quantum=4s. Mostre context switches:

\`\`\`
t=0: P1 inicia | t=4: Timer→guarda PCB[P1]→carrega PCB[P2] | t=6: E/S P1→guarda PCB[P2]→carrega PCB[P1]
\`\`\`

Perguntas:
1. Por que processo→processo é mais lento que thread→thread? (TLB flush)
2. Qual interrupção mais comum causa context switch? (Timer)
3. Quantum = 1ms, context switch = 10μs → % overhead? (1%)

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]*
`;
