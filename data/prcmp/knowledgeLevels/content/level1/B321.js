export const B321 = `
# Processamento por Lotes

## 📋 Visão Geral

Processamento por lotes (batch processing) organiza vários jobs/programas numa sequência automática executada sem intervenção humana, usando um monitor residente para carregar e executar sequencialmente.
Ideal para tarefas não-interativas de grande volume, onde eficiência e automatização superam necessidade de resposta imediata.

---

## 🎯 Funcionamento Clássico

### Monitor Residente (Primeiro "SO")

\`\`\`
1. Operador prepara baralho de cartões:
   JOB1: compile + link + execute programaA
   JOB2: backup database
   JOB3: relatório vendas

2. Monitor residente lê cartões de controlo
3. Loader carrega programa em memória
4. Executa → regressa ao monitor
5. Repete até EOF lote
\`\`\`

Resultado: automatização total da sequência de jobs.

### Exemplo JCL (Job Control Language)

\`\`\`
COMPILE JOB
EXEC PGM=IFORT
INPUT  DD=FORTRAN.SRC
OUTPUT DD=SYSOUT

LINK JOB
EXEC PGM=LINK
INPUT  DD=OBJECT.OBJ
OUTPUT DD=EXECUTABLE

RUN JOB
EXEC PGM=EXECUTABLE
INPUT  DD=DATA.IN
OUTPUT DD=RESULTS.OUT
\`\`\`

---

## 💡 Vantagens do Batch

### Eficiência em Tarefas Repetitivas

| Vantagem | Benefício |
|---|---|
| Automatização | Zero intervenção entre jobs |
| Agrupamento | Setup fixo amortizado por N jobs |
| Noite/fins-de-semana | Executa tarefas chatas sem perturbar utilizadores |
| Recursos intensivos | Usa 100% CPU/disco durante horas |

Perfeito para: relatórios, backups, data processing, simulações científicas.

### Melhor que Execução Sequencial Manual

\`\`\`
Manual: operador carrega job1 → espera → job2 → espera → ...
Batch:  operador submete lote → monitor executa tudo sozinho ✓
\`\`\`

---

## 📊 Limitações e Problemas

### Problemas Inerentes

\`\`\`
1. CPU ainda ociosa durante E/S (mesmo com batch)
2. Sem interactividade (jobs não interagem com utilizador)
3. Erro em job do meio → lote inteiro para
4. Debug difícil (sem terminais interactivos)
\`\`\`

Evolução necessária: multiprogramming para overlap CPU/E/S.

---

## 🎥 Material em Vídeo

### Batch Processing Sistemas Históricos
<iframe width="560" height="315" src="https://www.youtube.com/embed/vBURTt97EkA" title="Batch Processing Operating Systems History" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### JCL e Job Submission
<iframe width="560" height="315" src="https://www.youtube.com/embed/_p8AdSRSZK4" title="Job Control Language Batch Systems" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Leitura / Slides

- Batch processing com monitor residente, solução para automatizar job sequencing

### Rotinas Práticas

Cenário IBM 360 (1960s):
\`\`\`
Lote nocturno:
1. Backup todos ficheiros → 2h
2. Relatórios vendas → 1h
3. Payroll processamento → 3h
↓
Monitor residente executa sequência automática
Sem operador nocturno ✓
\`\`\`

Batch moderno (ainda relevante):
- Hadoop/Spark jobs
- ETL pipelines
- Backup nightly
- Supercomputação científica

Pergunta: Por que batch continua relevante hoje apesar de PCs pessoais? (Escala, dados massivos).

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]*
`;
