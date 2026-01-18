export const B211 = `
# Conceito de Escalonamento

## 📋 Visão Geral

O escalonamento é a operação do sistema operacional que decide qual processo pronto recebe a CPU em cada momento, determinando a ordem e duração da execução de cada processo.
O escalonador tenta otimizar critérios como utilização da CPU, tempo de resposta, throughput e equidade, mantendo o sistema responsivo e eficiente.

---

## 🎯 Objetivos do Escalonamento

### Critérios de Otimização

- Utilização da CPU: maximizar o tempo em que a CPU executa processos úteis (evitar ociosidade)
- Throughput: número de processos concluídos por unidade de tempo
- Tempo de resposta: tempo desde pedido até primeira resposta (crítico para interativos)
- Tempo de espera: tempo total que processos passam na fila de prontos
- Tempo de virada: tempo desde submissão até conclusão completa

Diferentes algoritmos privilegiam critérios diferentes.

---

## 💡 Componentes do Escalonador

### Escalonadores Hierárquicos

\`\`\`mermaid
graph TB
    LongoPrazo[Escalonador de Longo Prazo<br/>Novo → Pronto] --> MedioPrazo[Escalonador de Médio Prazo<br/>Suspenso ↔ Pronto]
    MedioPrazo --> CurtoPrazo[Escalonador de Curto Prazo<br/>Pronto ↔ Executando]
    CurtoPrazo --> Dispatcher[Dispatcher<br/>Carrega contexto PCB]
\`\`\`

- Longo prazo: decide quais processos admitir no sistema (criação)
- Médio prazo: gerir memória (swap processos para disco e volta)
- Curto prazo: escolhe próximo processo da fila de prontos para CPU

### Dispatcher

- Módulo que efetua a troca de contexto: guarda PCB do processo atual, carrega PCB do próximo
- Executado sempre que há interrupção (timer, E/S, sinal) que muda o processo em execução

---

## 📊 Tipos de Escalonamento

### Não-Preemptivo (Cooperativo)

- Processo executa até completar ou bloquear voluntariamente (E/S, exit)
- Simples, mas problema: processo malicioso/bugado pode monopolizar CPU indefinidamente

### Preemptivo

- SO pode interromper processo a qualquer momento (timer, prioridade maior chegada, E/S de processo de alta prioridade)
- Timer periódico força trocas regulares, essencial para time-sharing e responsividade

---

## 🎥 Material em Vídeo

### Conceitos de Escalonamento de CPU
<iframe width="560" height="315" src="https://www.youtube.com/embed/1UqQwW9rGkE" title="CPU Scheduling Concepts - Operating Systems" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Escalonadores: Longo/Médio/Curto Prazo
<iframe width="560" height="315" src="https://www.youtube.com/embed/3ZxZ_6q8G4Y" title="Types of Schedulers in OS (Long, Medium, Short Term)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Leitura / Slides

- Multiprogramming e time-sharing (necessidade de escalonamento para alternar processos)
- RTOS scheduling determinístico vs scheduling geral

### Rotinas Práticas

- Simulação simples: 3 processos (P1, P2, P3) com tempos CPU: 4s, 2s, 3s
  - Não-preemptivo FCFS: ordem de chegada → calcular tempo de espera/virada
  - Preemptivo Round-Robin (quantum 2s): mostrar trocas de contexto

- Perguntas de revisão:
  1. Qual escalonador decide Pronto ↔ Executando? (Curto prazo)
  2. Por que preemptivo é essencial para time-sharing?
  3. Nomeie 3 objetivos conflitantes do escalonamento

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]*
`;
