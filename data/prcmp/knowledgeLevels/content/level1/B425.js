export const B425 = `# Estados e I/O

## 📋 Visão Geral

Operações de I/O afectam directamente os estados dos processos, fazendo-os transitar de Executando → Bloqueado durante operações lentas e regressar a Pronto quando completas via interrupção.
Este mecanismo é a base da multiprogramação eficiente: CPU não espera I/O, passa imediatamente para outro processo.

---

## 🎯 Transições de Estado por I/O

### Fluxo Típico read()

\`\`\`mermaid
sequenceDiagram
    P1->>Kernel: read(fd,buf,1024)
    Kernel->>Driver: device_read()
    Driver->>Controlador: inicia operação
    Note over P1: PCB[P1].estado = BLOQUEADO<br/>fila_E/S[disco]
    Note over SO: CPU → próximo processo P2 EXECUTANDO ✓
    Controlador->>IRQ: operação completa
    ISR->>Kernel: acorda P1
    Note over P1: PCB[P1].estado = PRONTO ✓
\`\`\`

Resultado: CPU 100% utilizada durante E/S lenta.

---

## 💡 Estados Específicos de I/O

### 1. Bloqueado (Waiting)

\`\`\`
Processo invoca operação bloqueante:
read(), write(), sleep(), wait(semáforo), poll()
↓
SO: guarda contexto → PCB.estado = BLOQUEADO
↓
Adiciona a fila específica: bloqueados_disco, bloqueados_rede, etc.
\`\`\`

Vantagem: CPU livre para outros processos.

### 2. Pronto Após I/O

\`\`\`
IRQ E/S completa → ISR
↓
ISR procura fila bloqueados_disco
↓
Encontra P1 → PCB[P1].estado = PRONTO
↓
P1 compete CPU normalmente
\`\`\`

Escalonador decide se executa imediatamente ou espera.

---

## 📊 Impacto na Multiprogramação

### Sem Multiprogramming (Polling)

\`\`\`
P1: read() → CPU POLLA dispositivo 10ms
↓
CPU 100% ociosa durante E/S
↓
Sistema ineficiente
\`\`\`

### Com Multiprogramming + Blocking

\`\`\`
P1: read() → BLOQUEADO
↓
CPU → P2, P3, P4 (todos aproveitam)
↓
IRQ → P1 PRONTO → junta-se à concorrência
↓
CPU ~100% útil ✓
\`\`\`

Ganho: de 10% para 90% utilização CPU.

---

## 🎥 Material em Vídeo

### I/O Blocking e Estados de Processo
<iframe width="560" height="315" src="https://www.youtube.com/embed/LJ7b8vT3QfU" title="I/O Operations and Process States" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Multiprogramming I/O Overlap
<iframe width="560" height="315" src="https://www.youtube.com/embed/_p8AdSRSZK4" title="CPU I/O Overlap Multiprogramming" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Leitura / Slides

- I/O controllers autónomos sinalizam via interrupções
- Multiprogramming: processo IO → CPU para outro via context switch

### Rotinas Práticas

Ver bloqueios I/O com strace:
\`\`\`
strace -e trace=read,write ls -la /
↓
read(3, ...) = 4096  ← bloqueou até dados prontos
\`\`\`

Estados I/O comuns:
\`\`\`
read() → BLOQUEADO (disco)
poll() → BLOQUEADO (múltiplos fd)
select() → BLOQUEADO (timeout)
write() → BLOQUEADO (buffer cheio)
\`\`\`

Pergunta: Sem estados Bloqueado, qual impacto em sistema com disco?
Resposta: CPU 100% polling disco → sistema para.

Thrashing I/O: todos processos bloqueados E/S → filas enormes → latência explode.

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]* `;
