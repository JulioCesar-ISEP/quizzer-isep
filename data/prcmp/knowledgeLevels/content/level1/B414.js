export const B414 = `# Fragmentação

## 📋 Visão Geral

Fragmentação ocorre quando a memória livre existe em quantidade suficiente mas não pode ser utilizada devido a distribuição inadequada em blocos pequenos ou desalinhados.
Existem dois tipos principais: fragmentação interna (desperdício dentro de partições) e fragmentação externa (memória livre fragmentada em buracos pequenos).

---

## 🎯 Fragmentação Interna

### Definição e Causa

\`\`\`
Partição fixa 64K
↓
Processo ocupa 20K
↓
44K desperdiçados dentro da partição
\`\`\`

Características:
\`\`\`
- Desperdício DENTRO das partições alocadas
- Cada partição tem seu próprio desperdício
- Soma pode ser significativa (50%+)
\`\`\`

Solução: partições de tamanhos variáveis (mas cria fragmentação externa).

---

## 💡 Fragmentação Externa

### O Problema Clássico

\`\`\`
Estado inicial: | ProcessoA 100K | BURACO 400K |
↓
Executa/termina vários processos
↓
Estado final: |P1 50K| buraco 30K |P2 80K| buraco 20K |P3 60K|
Total livre: 50K mas NENHUM buraco contíguo para P4=55K ✗
\`\`\`

Causa: processos de tamanhos variados entram/saem criando buracos pequenos.

### Visualização

\`\`\`
Antes:     |==========| [400K LIVRE] |
Depois:    |==| [30K] |=======| [20K] |=====|
P4 55K → NÃO tem buraco contíguo suficiente
\`\`\`

---

## 📊 Soluções Históricas

### 1. Compacting (Reorganização)

\`\`\`
Move todos processos juntos:
|==| [30K] |=======| [20K] |=====|
↓ Compact
|======[======[=====| [100K LIVRE] ✓
\`\`\`

Problema: custoso (~1s em mainframes antigos).

### 2. Alocação Não-Contígua

\`\`\`
Paginação: processo dividido em páginas 4K
↓
P4=55K = 14 páginas 4K
↓
Pega 14 buracos livres quaisquer ✓
\`\`\`

Solução moderna (elimina fragmentação externa).

---

## 🎥 Material em Vídeo

### Fragmentação Interna vs Externa
<iframe width="560" height="315" src="https://www.youtube.com/embed/XuRdlJE9Kwg" title="Internal vs External Fragmentation Animated" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Compacting e Soluções
<iframe width="560" height="315" src="https://www.youtube.com/embed/3zQ5bPPrcrg" title="Memory Compaction and Fragmentation Solutions" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Leitura / Slides

- Aumento memória levou a problemas de alocação eficiente

### Rotinas Práticas

Simulação fragmentação externa:
\`\`\`
Buracos: [212, 417, 112, 426]
Processos: P1=14K, P2=123K, P3=426K, P4=432K

Passo a passo First Fit:
P1 → 212→198 | [198, 417, 112, 426]
P2 → 417→294 | [198, 294, 112, 426]
P3 → 426→0   | [198, 294, 112]
P4 432K → ✗ NENHUM BURACO SUFICIENTE (50%+ fragmentado)
\`\`\`

Métrica: 50% buracos < 128K = fragmentação severa.

Pergunta: Qual solução elimina fragmentação externa?
Resposta: Paginação (alocação não-contígua).

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]* `;
