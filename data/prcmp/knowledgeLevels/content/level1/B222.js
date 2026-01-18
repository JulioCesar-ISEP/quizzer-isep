export const B222 = `# Operações durante Context Switch

## 📋 Visão Geral

Durante um Context Switch, o SO executa uma sequência precisa de operações para salvar o estado completo de um processo e restaurar o estado de outro, garantindo que cada processo retome exatamente onde parou.
Esta sequência envolve registos CPU, estruturas de memória e informação de controlo, tudo armazenado no PCB.

---

## 🎯 Sequência Detalhada de Operações

### 1. Tratamento da Interrupção

\`\`\`
Interrupção (timer, E/S, sinal) → Salva registos automáticos
↓
Salta para rotina de tratamento (ISR)
↓
ISR identifica causa → chama dispatcher
\`\`\`

Operações automáticas do hardware: salva alguns registos na stack do kernel.

### 2. Salvar Contexto do Processo Atual

\`\`\`mermaid
sequenceDiagram
    ISR->>SO: SO = r14
    SO->>SO: SP = sp_user
    SO->>SO: PC = lr_user
    SO->>SO: R0-R12 = registos gerais
    SO->>PCB: Salva tudo no PCB[Processo Atual]
\`\`\`

Registos salvos no PCB:
- Contador de programa (PC)
- Stack pointer (SP)
- Registos gerais (R0-R12)
- Estado da CPU (flags, modo)

### 3. Atualizar Estado do Processo

\`\`\`
PCB[Atual].estado = BLOQUEADO/PRONTO/ZOMBIE
PCB[Atual].tempo_cpu += quantum_usado
PCB[Atual].espera_cpu += tempo_bloqueado
\`\`\`

Actualiza contadores e move para fila adequada (prontos, bloqueados, etc.).

---

## 💡 4. Escalonamento e Seleção

### Escalonador de Curto Prazo

\`\`\`
Verifica fila de prontos
↓
Aplica algoritmo (RR, SJF, Prioridade)
↓
Seleciona próximo processo P'
↓
Atualiza PCB[P'].estado = EXECUTANDO
\`\`\`

Possíveis causas de troca:
- Timer esgotado
- Processo prioritário chegou
- E/S de processo prioritário completou

---

## 📊 5. Restaurar Contexto do Próximo Processo

### Carregar Contexto

\`\`\`mermaid
sequenceDiagram
    SO->>PCB: Carrega PC, SP, registos do PCB[P']
    SO->>CPU: r14 = PCB[P'].PC
    SO->>CPU: sp_user = PCB[P'].SP
    SO->>CPU: R0-R12 = PCB[P'].registos
    CPU->>P': Retoma execução
\`\`\`

Operações críticas:
\`\`\`
TLB flush (Translation Lookaside Buffer)
Actualizar MMU (Memory Management Unit)
Carregar Page Table Pointer
\`\`\`

---

## 🎥 Material em Vídeo

### Operações Internas do Context Switch
<iframe width="560" height="315" src="https://www.youtube.com/embed/4q9T5nqKfZc" title="Detailed Context Switch Operations" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Assembly Level Context Switch
<iframe width="560" height="315" src="https://www.youtube.com/embed/LJ7b8vT3QfU" title="Context Switching Assembly Code Walkthrough" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Leitura / Slides

- Time-sharing depende de context switches frequentes e eficientes

### Rotinas Práticas

Liste a sequência (8 passos principais):
\`\`\`
1. Timer interrupt salva registos automáticos
2. ISR chama dispatcher
3. Salva PC, SP, R0-R12 no PCB[atual]
4. PCB[atual].estado = PRONTO
5. Escalonador escolhe P'
6. PCB[P'].estado = EXECUTANDO
7. Carrega PC, SP, R0-R12 do PCB[P']
8. CPU retoma execução de P'
\`\`\`

Pergunta crítica: Qual operação mais custosa entre processos?
Resposta: TLB flush + troca de tabelas de páginas.

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]* `;
