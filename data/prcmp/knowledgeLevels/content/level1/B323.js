export const B323 = `
# Sistemas Históricos Batch

## 📋 Visão Geral

Os sistemas batch históricos foram a primeira evolução significativa além da execução sequencial manual, usando monitores residentes para automatizar sequências de jobs em mainframes dos anos 1950-60.
IBM OS/360, EXEC-II e monitor residente IBM 701 foram pioneiros, resolvendo ineficiências da operação manual mas limitados por CPU ociosa durante E/S.

---

## 🎯 Primeiros Sistemas Batch

### IBM 701/704 (1950s)

\`\`\`
Hardware: válvulas, ~10k ops/seg
Memória: tambores magnéticos (~10KB)
Entrada: cartões perfurados manual
\`\`\`

Problema: operador manual carregava 1 job → esperava → próximo → 90% tempo ocioso.

### Monitor Residente IBM 701 (1956)

\`\`\`
Evolução1: Programa residente em memória
↓
Automatiza: lê cartões → carrega → executa → próximo
↓
Operador só prepara baralhos de cartões
\`\`\`

Primeiro "SO": sempre residente, primeira automatização.

---

## 💡 IBM OS/360 (1964) - Auge do Batch

### Características Revolucionárias

\`\`\`
JCL (Job Control Language) inventado
↓
Jobs complexos: compile → link → execute → cleanup
↓
SYSIN/SYSOUT/SYSPRINT padronizados
↓
Spooling: jobs para disco → daemon processa
\`\`\`

Exemplo JCL OS/360:
\`\`\`
SORT JOB CLASS=A,MSGCLASS=X
//SYSIN DD *
  SORT FIELDS=(1,10,CH,A)
  OUTFIL FIELDS=(1:21,10)
/*
\`\`\`

Impacto: programação mainframe profissionalizada.

### EXEC-II (IBM)

\`\`\`
Sistema batch puro para IBM 360/370
↓
Sequências complexas de compilação/link/execução
↓
Base para sistemas empresariais décadas
\`\`\`

---

## 📊 Evolução e Limitações

### Limitações dos Sistemas Históricos

\`\`\`
CPU ociosa durante E/S ← Principal problema
↓
Motiva multiprogramming (1960s)
↓
Jobs não-interativos ← Motiva time-sharing (1970s)
\`\`\`

Batch foi essencial mas transitório na evolução dos SOs.

### Linha do Tempo

\`\`\`
1952: Execução manual
1956: Monitor residente IBM 701 ✓
1964: OS/360 JCL ✓
1968: Multiprogramming
1973: UNIX time-sharing
\`\`\`

---

## 🎥 Material em Vídeo

### História Sistemas Batch IBM
<iframe width="560" height="315" src="https://www.youtube.com/embed/vBURTt97EkA" title="History of Batch Operating Systems IBM 701-360" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### JCL OS/360 em Ação
<iframe width="560" height="315" src="https://www.youtube.com/embed/_p8AdSRSZK4" title="IBM OS/360 JCL Demonstration" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Leitura / Slides

- Batch processing histórico: monitor residente, cartões controlo, loader

### Rotinas Práticas

Reconheça sistemas batch históricos:

1. IBM 701 (1956): primeiro monitor residente ✓
2. OS/360 (1964): JCL, spooling, jobs compostos ✓
3. EXEC-II: batch puro para programação sistemática ✓

Pergunta: Qual invenção batch ainda usamos hoje?
Resposta: JCL → scripts modernos (bash, makefiles, CI/CD pipelines).

Legado: batch mindset vive em cron jobs, ETL, big data pipelines (Hadoop, Spark).

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]*
`;
