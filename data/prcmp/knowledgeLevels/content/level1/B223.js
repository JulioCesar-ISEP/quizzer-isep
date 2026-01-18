export const B223 = `
# Overhead e Custos de Context Switch

## 📋 Visão Geral

O overhead de context switch representa o tempo e recursos "perdidos" quando o SO troca de processo, que incluem salvar/carregar registos, actualizar estruturas de memória e overhead de cache/TLB.
Este custo é o principal factor que limita a frequência de trocas de contexto e define o tamanho ideal do quantum de tempo.

---

## 🎯 Componentes do Overhead

### 1. Overhead de Registos CPU

\`\`\`
Salvar 16 registos: ~20 ciclos cada = 320 ciclos
Carregar 16 registos: ~20 ciclos cada = 320 ciclos
Total registos: ~640 ciclos (~0.2μs @ 3GHz)
\`\`\`

Inclui: PC, SP, registos gerais, flags de estado.

### 2. Overhead de Memória (TLB e Cache)

\`\`\`
TLB flush completo: 100-1000 ciclos
Cache L1/L2 invalidação: 100-500 ciclos
MMU page table switch: 200-1000 ciclos
Total memória: ~1-2μs
\`\`\`

Principal custo em trocas entre processos (não ocorre em threads do mesmo processo).

---

## 💡 Medidas de Overhead

### Tempos Típicos Modernos

| Plataforma | Thread→Thread | Process→Process |
|---|---|---|
| Linux x86_64 | 0.2-0.5μs | 2-5μs |
| Windows x86_64 | 0.3-0.8μs | 3-7μs |
| RTOS ARM | 0.1-0.3μs | 1-3μs |

Quantum mínimo viável: 10-100x tempo de context switch.

### Formula Overhead

\`\`\`
Overhead(%) = (N_switches × Tempo_switch) / Tempo_total × 100
\`\`\`

Exemplo: 1000 switches/s, 5μs/switch, app 1s → 0.5% overhead (aceitável).
10000 switches/s → 5% (preocupante).

---

## 📊 Impacto em Diferentes Cenários

### Impacto do Quantum

\`\`\`
Quantum muito pequeno (1μs):
→ 50% tempo overhead → CPU desperdiçada

Quantum médio (10ms):
→ 0.05% overhead → eficiente

Quantum muito grande (1s):
→ sem responsividade para interativos
\`\`\`

Quantum ótimo: depende do workload (interativo vs batch).

### Thread vs Process Context Switch

\`\`\`
Thread→Thread: só registos (~0.5μs)
Process→Process: registos + TLB + page tables (~5μs)
\`\`\`

Motivação para multi-threading: reduzir overhead em aplicações com paralelismo lógico.

---

## 🎥 Material em Vídeo

### Medindo Overhead de Context Switch
<iframe width="560" height="315" src="https://www.youtube.com/embed/3zQ5bPPrcrg" title="Context Switch Overhead Measurement" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Impacto do Quantum no Overhead
<iframe width="560" height="315" src="https://www.youtube.com/embed/WjN1cHDt9FA" title="Quantum Size vs Context Switch Overhead" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Leitura / Slides

- Time-sharing equilibra responsividade com custo de context switch
- Trade-off entre quantum pequeno (responsivo) e grande (eficiente)

### Rotinas Práticas

Calcule overhead para diferentes cenários:

\`\`\`
Cenário 1: Quantum 10ms, Context Switch 3μs
Overhead = (1000 switches/s × 3μs) / 10000000μs = 0.03% ✓

Cenário 2: Quantum 1μs, Context Switch 3μs
Overhead = (1000000 switches/s × 3μs) / 1000000μs = 300% ✗

Cenário 3: Quantum 1s, Context Switch 3μs
Overhead = (1 switch/s × 3μs) / 1000000000μs = 0.0003% ✓
(mas sem responsividade!)
\`\`\`

Perguntas:
1. Por que thread→thread é 10x mais rápido que process→process?
2. Quantum ideal para aplicação web interativa? (1-100ms)
3. Quantum ideal para job batch longo? (100ms-1s)

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]*
`;
