export const B513 = `# Deadlines e Garantias

## 📋 Visão Geral

Deadlines são prazos absolutos que tarefas de tempo real devem cumprir, enquanto garantias são as promessas matemáticas do RTOS de que essas tarefas completarão dentro dos prazos mesmo no pior caso.
Em hard real-time, falha em cumprir garantia = falha crítica do sistema.

---

## 🎯 Tipos de Deadlines

### 1. Hard Deadline

\`\`\`
Tarefa deve completar antes T = T0 + D
↓
Miss = falha catastrófica (airbag não infla)
\`\`\`

Exemplo:
\`\`\`
T0 = sensor crash detectado
D = 2ms (deadline absoluto)
T = 2ms (máximo permitido)
\`\`\`

---

## 💡 2. Soft Deadline

\`\`\`
Tarefa deve completar preferencialmente antes deadline
↓
Miss ocasional = qualidade degradada (frame drop)
\`\`\`

Exemplo video:
\`\`\`
T0 = frame N deve renderizar
D = 16.6ms (60 FPS)
Miss 1/1000 = stutter tolerável
\`\`\`

---

## 📊 Modelos de Garantia RTOS

### Rate Monotonic Scheduling (RMS)

\`\`\`
Tarefas periódicas com períodos fixos:
T1: período 10ms, WCET 4ms
T2: período 20ms, WCET 8ms
↓
RMS: prioridade = 1/período (T1 > T2)
↓
Garante cumprimento se: Utilization < 69%
\`\`\`

Utilização máxima teórica: ln(2) = 69.3%

### Priority Inheritance

\`\`\`
T1 (alta prio) bloqueado em mutex M
T2 (baixa prio) tem M
↓
T2 herda prio T1 temporariamente
↓
Evita Priority Inversion ✓
\`\`\`

---

## 🎥 Material em Vídeo

### Rate Monotonic Scheduling
<iframe width="560" height="315" src="https://www.youtube.com/embed/1UqQwW9rGkE" title="Rate Monotonic Scheduling RMS Explained" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Priority Inversion e Inheritance
<iframe width="560" height="315" src="https://www.youtube.com/embed/XuRdlJE9Kwg" title="Priority Inheritance Protocol Real-Time" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Leitura / Slides

- RTOS garante deterministic scheduling, tasks completam dentro time constraints

### Rotinas Práticas

Exemplo automotivo:
\`\`\`
Motor controlo:
T1: sensor throttle (D=500μs)
T2: injecção combustível (D=1ms)
T3: diagnóstico OBD (D=10ms)
↓
Prioridades: T1 > T2 > T3
Garantia: todos cumprem mesmo pico carga
\`\`\`

Teste garantia:
\`\`\`
Stress test: todas tarefas pior caso simultâneas
↓
Medir jitter, latência, misses
↓
Se 0 misses → sistema certificável
\`\`\`

Pergunta: Sistema com 80% utilização RMS funciona?
Resposta: NÃO - só até 69% garantido.

Ferramentas: Tracealyzer, RTOS Inspector (análise timing).

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]* `;
