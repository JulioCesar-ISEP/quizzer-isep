export const B214 = `
# Critérios de Escalonamento

## 📋 Visão Geral

Os critérios de escalonamento são as métricas que determinam a qualidade de um algoritmo de escalonamento, medindo se ele atinge os objetivos do sistema (eficiência, responsividade, equidade).
Cada algoritmo otimiza alguns critérios mas sacrifica outros, exigindo compromisso adequado ao tipo de carga de trabalho.

---

## 🎯 Critérios CPU-Cêntricos

### 1. Utilização da CPU

- Definição: percentagem de tempo em que CPU executa processos úteis (não ociosa)
- Objetivo: próximo de 100% em sistemas com carga
- Bom para: servidores, batch processing
- Exemplo: multiprogramação mantém CPU ocupada enquanto processos esperam E/S

### 2. Throughput

- Definição: número de processos completados por unidade de tempo
- Objetivo: maximizar (processos/segundo)
- Bom para: batch jobs, supercomputação
- Conflito: algoritmos responsivos podem ter menor throughput

---

## 💡 Critérios Utilizador-Cêntricos

### 3. Tempo de Resposta

- Definição: tempo desde chegada do processo até primeira saída (output)
- Crítico para: sistemas interativos (terminais, web servers)
- Exemplo: Round Robin com quantum pequeno tem boa resposta. FCFS com processo longo à frente tem resposta péssima

### 4. Tempo de Espera

- Definição: tempo total que processo passa na fila de prontos (não inclui execução)
- Objetivo: minimizar média
- SJF é ótimo para este critério (teoricamente mínimo)

### 5. Tempo de Virada (Turnaround)

- Definição: tempo desde chegada até conclusão total = espera + execução
- Bom para: batch jobs onde o utilizador espera pelo resultado final

---

## 📊 Relações e Trade-offs

### Matriz de Compromissos

| Algoritmo | CPU | Throughput | Resposta | Espera | Virada |
|---|---|---|---|---|---|
| FCFS | Média | Baixa | Péssima | Alta | Alta |
| SJF | Alta | Alta | Boa | Mínima | Mínima |
| RR | Alta | Média | Excelente | Média | Média |
| Prioridade | Depende | Depende | Depende | Depende | Depende |

Observação: geralmente não se pode otimizar todos simultaneamente.

### Exemplo Numérico

\`\`\`
Processos: P1(t=0,8s), P2(t=1,4s), P3(t=2,9s), P4(t=3,5s)
\`\`\`

| Critério | FCFS | SJF | RR(q=4) |
|---|---|---|---|
| CPU | 100% | 100% | 100% |
| Resposta P2 | 8s | 1s | 4s |
| Espera Média | 5.75s | 2.75s | 4.5s |

---

## 🎥 Material em Vídeo

### Critérios e Métricas de Escalonamento
<iframe width="560" height="315" src="https://www.youtube.com/embed/XuRdlJE9Kwg" title="CPU Scheduling Criteria Explained" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Trade-offs entre Algoritmos
<iframe width="560" height="315" src="https://www.youtube.com/embed/WjN1cHDt9FA" title="Scheduling Criteria and Algorithm Trade-offs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Leitura / Slides

- Multiprogramming maximiza utilização CPU, time-sharing minimiza tempo resposta

### Rotinas Práticas

Exercício: 4 processos (chegada,tCPU): P1(0,24), P2(3,3), P3(6,3)

1. Calcule média tempo espera para FCFS e SJF
2. Qual tem melhor tempo resposta para P2 (chega em t=3)?
3. Para servidor web interativo, qual critério é mais importante?

Respostas:
\`\`\`
FCFS: espera = (0 + 3 + 9) / 3 = 4s
SJF:  espera = (0 + 0 + 6) / 3 = 2s ✓
Resposta P2 FCFS: 24s, SJF: 3s ✓
Web server: TEMPO RESPOSTA ✓
\`\`\`

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]*
`;
