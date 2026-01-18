export const B411 = `# Alocação de Memória

## 📋 Visão Geral

Alocação de memória é o processo pelo qual o SO atribui regiões de memória física aos processos, mapeando endereços lógicos para endereços físicos através de tabelas ou segmentos.
O objectivo é isolamento (processo A não acede memória de B) e eficiência (evitar desperdício e fragmentação).

---

## 🎯 Métodos de Alocação Contígua

### 1. Alocação Contígua Fixa

\`\`\`
Memória dividida em partições fixas:
| 0-64K | 64-128K | 128-192K | ...
↓
Cada processo ocupa 1 partição inteira
\`\`\`

Problemas:
- Internal fragmentation: processo usa 20K numa partição 64K → 44K desperdiçados
- Inflexível: processos > partição maior não executam

### 2. Alocação Contígua Dinâmica

\`\`\`
Lista de buracos livres:
Tempo 0: |Job1 100K| buraco 200K |buraco 50K|
↓
Chega Job2 150K → aloca do buraco 200K
\`\`\`

Algoritmos:
- First Fit: primeiro buraco grande o suficiente
- Best Fit: buraco menor que serve
- Worst Fit: maior buraco disponível

---

## 💡 Problema da Fragmentação Externa

### External Fragmentation

\`\`\`
Após execuções: |P1 20K| buraco 30K |P2 40K| buraco 10K |P3 15K|
↓
Chega P4 35K → nenhum buraco contíguo suficiente ✗
Total livre: 40K > 35K mas fragmentado
\`\`\`

Soluções históricas:
\`\`\`
1. Compacting: mover processos juntos (custoso)
2. Multiprogramming limitado: manter buracos pequenos
3. Não-contíguo: paginação/segmentação (moderno)
\`\`\`

### Internal vs External

| Tipo | Causa | Solução |
|---|---|---|
| Interna | Processo < partição | Partições variáveis |
| Externa | Buracos pequenos não contíguos | Compacting, paginação |

---

## 📊 Exemplo Prático First Fit

### Simulação

\`\`\`
Tempo 0: buracos livres [100K, 500K, 200K, 300K]
1. P1 110K → First Fit pega 500K → resta 390K
   Buracos: [100K, 390K, 200K, 300K]
2. P2 105K → pega 390K → resta 285K
3. P3 25K → pega 100K → resta 75K
\`\`\`

Resultado: buracos pequenos → external fragmentation.

---

## 🎥 Material em Vídeo

### Alocação Contígua e Fragmentação
<iframe width="560" height="315" src="https://www.youtube.com/embed/XuRdlJE9Kwg" title="Contiguous Memory Allocation First Best Fit" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Internal vs External Fragmentation
<iframe width="560" height="315" src="https://www.youtube.com/embed/3zQ5bPPrcrg" title="Memory Fragmentation Visualized" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Leitura / Slides

- Evolução levou a mais memória → necessidade alocação eficiente

### Rotinas Práticas

Simule First Fit:
\`\`\`
Buracos iniciais: [212K, 417K, 112K, 426K]
Processos: P1=14K, P2=123K, P3=426K, P4=432K
\`\`\`

Passo a passo:
\`\`\`
P1 → 212K→198K | [198K, 417K, 112K, 426K]
P2 → 417K→294K | [198K, 294K, 112K, 426K]
P3 → 426K→0K   | [198K, 294K, 112K]
P4 432K? → ✗ nenhum buraco suficiente (external frag)
\`\`\`

Pergunta: Melhor algoritmo reduz frag? (Não, todos sofrem).

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]* `;
