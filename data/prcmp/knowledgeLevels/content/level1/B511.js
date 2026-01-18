export const B511 = `# Conceito de Tempo Real

## 📋 Visão Geral

Sistemas de tempo real (RTOS) são sistemas onde a temporalidade é tão crítica quanto a correcção lógica dos resultados, garantindo que tarefas críticas completem dentro de prazos (deadlines) específicos.
Diferem de sistemas gerais onde atrasos são tolerados, desde que o resultado final seja correcto a longo prazo.

---

## 🎯 Definição Fundamental

### Tempo Real vs Geral

\`\`\`
Sistema geral: "Programa correcto, mais cedo melhor"
Tempo real:   "Programa correcto E dentro do prazo"
\`\`\`

Requisito: não basta ser correcto, tem que ser oportuno.

### Hard vs Soft (Próximo tópico)

\`\`\`
Hard Real-Time:  falha no deadline = desastre (airbag)
Soft Real-Time:  atraso degradado mas aceitável (video streaming)
\`\`\`

---

## 💡 Características do RTOS

### 1. Escalonamento Determinístico

\`\`\`
Tarefa A: deadline 10ms, pior caso 9ms
Tarefa B: deadline 20ms, pior caso 15ms
↓
SO GARANTE cumprimento mesmo no pior caso
\`\`\`

Prioridades fixas: tarefas críticas têm prioridade absoluta.

### 2. Baixa Latência

\`\`\`
ISR → tarefa → resposta < 1ms (microcontroladores)
vs Sistemas gerais: 1-10ms aceitável
\`\`\`

Kernel enxuto, sem overhead desnecessário.

---

## 📊 Componentes RTOS

### Estrutura Típica

\`\`\`
Kernel mínimo:
- Task scheduler determinístico
- Inter-task sync (semáforos, mutex)
- Timers precisos
- ISR handling rápido

Aplicação: conjunto tarefas com prioridades/deadlines
\`\`\`

Exemplos: FreeRTOS, Zephyr, VxWorks, QNX.

---

## 🎥 Material em Vídeo

### O que é Tempo Real?
<iframe width="560" height="315" src="https://www.youtube.com/embed/1UqQwW9rGkE" title="Real-Time Operating Systems Explained" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Hard vs Soft Real-Time
<iframe width="560" height="315" src="https://www.youtube.com/embed/XuRdlJE9Kwg" title="Hard Real-Time vs Soft Real-Time Systems" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Leitura / Slides

- RTOS: tempo-constrained, tasks com prioridades e deadlines

### Rotinas Práticas

Exemplos por tipo:

\`\`\`
✅ HARD: Airbag (10ms), ABS travões, pacemaker
✅ SOFT: Video streaming (frame drop OK), VoIP (jitter tolerado)
❌ GERAL: Editor texto, browser web

Questão crítica: "Miss deadline 1ms em pacemaker = morte"
\`\`\`

RTOS vs Linux:
\`\`\`
RTOS: garantia 1ms worst-case
Linux: média 1ms, worst-case 100ms+ (não determinístico)
\`\`\`

Pergunta: SO de aviões é hard real-time? Sim (falha = catástrofe).

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]* `;  
