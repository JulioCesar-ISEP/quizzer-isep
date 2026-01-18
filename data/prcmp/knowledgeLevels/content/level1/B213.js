export const B213 = `
# Algoritmos Básicos de Escalonamento

## 📋 Visão Geral

Os algoritmos básicos de escalonamento definem políticas simples para escolher qual processo da fila de prontos recebe a CPU, cada um otimizando critérios diferentes.
Os principais são FCFS, SJF, Round Robin e por Prioridade, cada um com vantagens e limitações específicas.

---

## 🎯 FCFS (First Come First Served)

### Funcionamento

- Política: primeiro processo a chegar à fila executa até completar ou bloquear
- Não-preemptivo: processo mantém CPU até terminar voluntariamente
- Implementação: fila FIFO simples

### Características

- Vantagens: simples, justo em termos de ordem de chegada
- Problema: Convoy Effect – processo longo no início bloqueia todos os seguintes (P1 longo + P2,P3 curtos = todos esperam)

---

## 💡 SJF (Shortest Job First)

### Funcionamento

- Política: escolhe processo com menor tempo de CPU estimado/necessário
- Não-preemptivo (SJF) ou preemptivo (SRTF – Shortest Remaining Time First)
- Requer estimativa precisa do tempo de CPU (difícil na prática)

### Características

- Ótimo para tempo médio de espera (teoricamente mínimo)
- Problema: Starvation – processos longos ficam indefinidamente atrás de curtos que chegam continuamente

---

## 📊 Round Robin (RR)

### Funcionamento

\`\`\`mermaid
sequenceDiagram
    chegadaP1->>+Fila: P1 chega (quantum=4)
    scheduler->>+CPU: P1 executa 4s
    chegadaP2->>+Fila: P2 chega durante P1
    scheduler->>+CPU: P1 volta fila, P2 executa 4s
    scheduler->>+CPU: P2 volta fila, P1 executa restantes 2s
    Note over CPU: P1 termina
\`\`\`

- Política preemptiva: cada processo recebe quantum fixo (ex: 10ms), depois volta ao fim da fila
- Fairness: todos têm chance regular de CPU

### Características

- Ideal para time-sharing: boa responsividade para interativos
- Quantum muito pequeno → overhead alto. Quantum muito grande → aproxima-se de FCFS

---

## 🎥 Material em Vídeo

### Algoritmos de Escalonamento: FCFS, SJF, RR
<iframe width="560" height="315" src="https://www.youtube.com/embed/WjN1cHDt9FA" title="FCFS SJF Round Robin Scheduling Algorithms" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Comparação Visual dos Algoritmos
<iframe width="560" height="315" src="https://www.youtube.com/embed/1UqQwW9rGkE" title="CPU Scheduling Algorithms Animation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Leitura / Slides

- Time-sharing e multiprogramming (motivação para algoritmos preemptivos)

### Rotinas Práticas

Exercício numérico (Processos: chegada, tempo CPU):
\`\`\`
P1: t=0, 24s | P2: t=3, 3s | P3: t=6, 3s
\`\`\`

Calcule (média tempo espera, tempo virada):
1. FCFS: ordem chegada
2. SJF não-preemptivo: menor tempo primeiro
3. Round Robin quantum=4s

Respostas esperadas:
- FCFS: espera médio = (0+3+6) = 3s
- SJF: espera médio = (0+24-3+6-3) ≈ 8s (mas menor que FCFS)
- RR: mais equilibrado, P2/P3 respondem cedo

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]*
`;
