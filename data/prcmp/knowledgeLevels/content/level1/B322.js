export const B322 = `
# Características do Batch

## 📋 Visão Geral

O processamento batch tem características específicas que o distinguem de sistemas interativos: não-interactividade, execução sequencial automática, monitor residente e foco em eficiência para tarefas de longa duração.
Estas características tornam-no ideal para workloads previsíveis e não-interativos, mas inadequado para aplicações que requerem resposta imediata.

---

## 🎯 Características Técnicas Principais

### 1. Não-Interativo

\`\`\`
Sem terminais ou entrada do utilizador durante execução
↓
Jobs pré-programados com todos inputs preparados
↓
Monitor executa sequencialmente sem intervenção humana
\`\`\`

- Entrada: cartões perfurados, JCL, ficheiros de input
- Saída: impressora, ficheiros SYSOUT, cartões de erro

### 2. Monitor Residente Permanente

\`\`\`
Memória: [Monitor residente] + [Área utilizador rotativa]
↓
Monitor nunca sai da memória
↓
Carrega/Executa/Descarrega jobs na área utilizador
\`\`\`

- Primeira forma de SO: sempre presente, gere sequência de jobs
- Loader: módulo do monitor que carrega código em memória

---

## 💡 Características Operacionais

### 3. Sequencialização Automática

\`\`\`
Cartões de controlo definem sequência:
JOB1: compile Fortran → link → execute
JOB2: backup dataset X → compress
JOB3: generate relatório vendas
↓
Monitor interpreta e executa sem intervenção
\`\`\`

JCL (Job Control Language): linguagem para definir jobs compostos.

### 4. CPU Ociosa Durante E/S

\`\`\`
Tempo job = max(CPU_time, IO_time)
CPU espera E/S mesmo com batch → ainda ineficiente
↓
Motivação para multiprogramming (overlap CPU/E/S)
\`\`\`

Limitação fundamental do batch clássico.

---

## 📊 Comparação Batch vs Interativo

| Característica | Batch | Interativo |
|---|---|---|
| Entrada | Cartões JCL | Teclado/terminal |
| Saída | Impressora/ficheiros | Ecrã |
| Resposta | Horas/dias | Segundos |
| Intervenção | Operador prepara lote | Utilizador interage |
| CPU Usage | 10-20% (E/S bound) | 90-100% (overlap) |
| SO | Monitor residente | Time-sharing completo |

Batch: eficiência para tarefas chatas, não responsivo.

---

## 🎥 Material em Vídeo

### Características Técnicas Batch Processing
<iframe width="560" height="315" src="https://www.youtube.com/embed/vBURTt97EkA" title="Batch Processing Technical Characteristics" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### JCL e Monitor Residente
<iframe width="560" height="315" src="https://www.youtube.com/embed/_p8AdSRSZK4" title="Job Control Language and Resident Monitor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Leitura / Slides

- Batch: monitor residente carrega próximo programa automaticamente, CPU ociosa durante E/S

### Rotinas Práticas

Identifique características batch num workload moderno:

\`\`\`
Noite: backup 10TB → compress → encrypt → cloud → 6h
↓
Características batch ✓:
- Não-interativo ✓
- Sequencial automático ✓
- Longa duração ✓
- Inputs/saídas ficheiros ✓
\`\`\`

Não batch (exige interactividade):
\`\`\`
Web server responde requests HTTP em tempo real ✗
Database query ad-hoc do utilizador ✗
\`\`\`

Pergunta: Por que batch é perfeito para backups mas péssimo para web servers? (Resposta: resposta não importa vs resposta em ms crítica).

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]*
`;
