export const B212 = `
# Preemptivo vs Não-Preemptivo

## 📋 Visão Geral

Escalonamento não-preemptivo permite que um processo execute até completar ou bloquear voluntariamente, enquanto o preemptivo permite que o SO interrompa um processo a qualquer momento para dar CPU a outro.
O não-preemptivo é mais simples mas arriscado; o preemptivo é essencial para sistemas interativos e responsivos.

---

## 🎯 Escalonamento Não-Preemptivo

### Características

- Processo uma vez selecionado executa até:
  - Completar totalmente (exit())
  - Bloquear em E/S (read(), sleep())
  - Ocorrer erro fatal (segmentation fault)
- Sem interrupções: SO não tira CPU de um processo em execução normal

### Exemplos

- FCFS (First Come First Served): fila simples, primeiro a chegar executa até acabar ou bloquear
- SJF (Shortest Job First): escolhe processo com menor tempo CPU estimado, mas mantém até completar

---

## 💡 Escalonamento Preemptivo

### Características

- SO pode interromper processo a qualquer momento por:
  - Timer: quantum periódico (ex: 10ms) força trocas regulares
  - Processo de maior prioridade chega à fila de prontos
  - Interrupção de E/S de processo de alta prioridade termina

### Exemplos

- Round Robin: cada processo recebe quantum fixo (ex: 10ms), depois volta ao fim da fila
- Prioridades Preemptivas: processo de prioridade mais alta toma CPU imediatamente

---

## 📊 Comparação Visual

### Diagrama de Execução

\`\`\`mermaid
graph TD
    subgraph "Não-Preemptivo (FCFS)"
        P1a[P1: 8s] -->|Executa até fim| P2a[P2: 4s]
        P2a --> P3a[P3: 3s]
    end
    
    subgraph "Preemptivo (Round Robin - quantum 3s)"
        P1b[P1: 3s] --> P2b[P2: 3s] --> P3b[P3: 3s]
        P1b -.->|volta fila| P1c[P1: 3s] --> P2c[P2: 1s]
        P1c -.->|volta fila| P1d[P1: 2s] --> P3c[P3: fim]
    end
\`\`\`

Não-preemptivo: P3 espera P1+P2 = 12s (convoy effect).
Preemptivo: P3 começa após 3s, responde mais cedo.

---

## 🎥 Material em Vídeo

### Preemptivo vs Não-Preemptivo
<iframe width="560" height="315" src="https://www.youtube.com/embed/WjN1cHDt9FA" title="Preemptive vs Non-Preemptive Scheduling" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Efeito Convoy e Round Robin
<iframe width="560" height="315" src="https://www.youtube.com/embed/1UqQwW9rGkE" title="Round Robin vs FCFS Scheduling Animation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Leitura / Slides

- Time-sharing requer escalonamento preemptivo para responsividade
- RTOS usa variantes preemptivas com determinismo temporal

### Rotinas Práticas

- Simulação manual (3 processos: P1=8s, P2=4s, P3=3s):
  \`\`\`
  FCFS não-preemptivo:  |P1......|P2....|P3...|
                        0       8     12   15s
  
  Round Robin preemptivo (quantum 3s):
  |P1...|P2...|P3...|P1...|P2..|P1..|P3 fim|
  0     3     6     9    12   14  16  19s
  \`\`\`

- Perguntas de revisão:
  1. Qual problema do não-preemptivo causa convoy effect?
  2. Por que time-sharing exige preemptivo?
  3. Quantum muito pequeno → overhead alto. Quantum muito grande → sem responsividade.

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]*
`;
