export const B312 = `
# Vantagens e Desvantagens da Multiprogramação

## 📋 Visão Geral

A multiprogramação revolucionou a eficiência dos computadores, mas introduziu complexidade e novos problemas de coordenação entre processos concorrentes.
O trade-off principal é entre melhor utilização de hardware e maior complexidade de software para gerir isolamento e concorrência.

---

## 🎯 Vantagens Principais

### 1. Utilização Máxima da CPU

\`\`\`
Sem multiprogramação: CPU ociosa 80-90% do tempo (espera E/S)
Com multiprogramação: CPU ~100% ocupada (overlap CPU/E/S)
\`\`\`

- Quando um processo bloqueia em E/S lenta (disco, rede), CPU imediatamente passa para outro processo pronto
- Ganho: de 10-20% utilização para 90-100%

### 2. Throughput Elevado

- Mais processos completam por unidade de tempo (jobs/segundo)
- Batch processing mais eficiente: múltiplos jobs processados em paralelo na memória

### 3. Melhor Amortização de Custos Fixos

\`\`\`
Setup job (carregar programa): ~1min
Tempo execução: 1min
↓
Tempo total por job: 2min (50% overhead)
\`\`\`

Multiprogramação: vários jobs amortizam custo fixo de setup.

---

## 💡 Desvantagens e Problemas

### 1. Complexidade Dramática

\`\`\`
Sem multiprogramação: 1 processo = código sequencial simples
Multiprogramação: N processos = isolamento + sincronização + deadlocks
\`\`\`

- Isolamento: prevenir que P1 corrompa memória de P2
- Sincronização: coordenar acesso a recursos partilhados (impressora, disco)
- Deadlocks: P1 espera R1, P2 espera R2 (cíclico)

### 2. Overhead Administrativo

| Overhead | Sem MP | Com MP |
|---|---|---|
| Context switch | 0 | Alto |
| PCB por processo | 1 | N |
| Tabelas memória | 1 | N |
| Filas escalonamento | 0 | Múltiplas |

Resultado: SO cresce de ~KB para MB.

---

## 📊 Impacto Quantitativo

### Comparação Prática

\`\`\`
3 jobs: CPU=1s, E/S=9s cada
\`\`\`

| Cenário | Tempo Total | Utilização CPU |
|---|---|---|
| Sequencial | 30s | 10% |
| Multiprogramação | 11s | 90% |

Ganho: 3x mais rápido, 9x melhor utilização CPU.

---

## 🎥 Material em Vídeo

### Trade-offs da Multiprogramação
<iframe width="560" height="315" src="https://www.youtube.com/embed/_p8AdSRSZK4" title="Multiprogramming Advantages and Disadvantages" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Problemas de Concorrência
<iframe width="560" height="315" src="https://www.youtube.com/embed/vBURTt97EkA" title="Concurrency Issues in Multiprogramming" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Leitura / Slides

- Multiprogramming resolve problema de CPU ociosa mas introduz complexidade de coordenação

### Rotinas Práticas

Perguntas de revisão:

1. Principal vantagem: CPU ociosa 90% → 10%
2. Principal desvantagem: Deadlocks, condições de corrida, isolamento complexo
3. Cenário onde NÃO usar: Processo único, contínuo, sem E/S (ex: supercomputação simples)
4. Overhead cresce com: número processos simultâneos (N² problemas de coordenação)

Exercício: Sistema com 1 job longo (90% CPU, 10% E/S) vs 10 jobs balanceados. Qual beneficia mais da multiprogramação? (Os 10 balanceados).

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]*
`;
