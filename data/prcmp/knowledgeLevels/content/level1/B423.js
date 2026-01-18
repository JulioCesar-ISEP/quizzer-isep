export const B423 = `# Interrupções e Exceções

## 📋 Visão Geral

Interrupções são sinais assíncronos de hardware (dispositivos, timer) que pausam a execução normal para tratar eventos urgentes, enquanto exceções são condições síncronas geradas pelo próprio programa em execução (divisão zero, page fault).
Ambas desviam o fluxo normal CPU para rotinas especiais (ISR), essencial para reactividade do sistema e suporte a dispositivos.

---

## 🎯 Tipos de Interrupções

### 1. Hardware Interrupts (Assíncronas)

\`\`\`
Dispositivo completa operação → IRQ linha
↓
CPU para imediatamente, salta ISR
↓
ISR reconhece dispositivo → limpa IRQ
↓
Retoma programa original
\`\`\`

Exemplos:
- Timer (context switch)
- Disco (E/S completa)
- Teclado (tecla pressionada)
- Rede (pacote recebido)

### 2. Software Interrupts (Exceções)

\`\`\`
Programa divide por zero → TRAP
↓
CPU detecta → muda modo kernel
↓
Kernel trata (SIGFPE → kill processo)
\`\`\`

Exemplos: page fault, system call, divisão zero.

---

## 💡 Vector de Interrupções

### IDT (Interrupt Descriptor Table)

\`\`\`
CPU tem:
Interrupt Vector = 0-255 (256 entradas possíveis)
↓
Cada vector aponta ISR específica:
0: Divisão zero
14: Page fault
32: Timer IRQ0
80h: System call (Linux)
\`\`\`

Hardware salva:
\`\`\`
PC (próxima instrução), flags, stack pointer
ISR acessa via registos especiais
\`\`\`

Exemplo x86:
\`\`\`
int $0x80    # Software interrupt (syscall)
\`\`\`

---

## 📊 Fluxo de Tratamento de Interrupção

### Sequência Automática

\`\`\`mermaid
sequenceDiagram
    CPU->>P1: Executa processo user
    Timer->>CPU: IRQ0 Timer
    Note over CPU: Hardware salva PC,flags na stack kernel
    CPU->>ISR: salta vector 32 (timer_isr)
    ISR->>ISR: ACK hardware + salva registos user
    ISR->>Escalonador: escolhe próximo processo
    ISR->>Dispatcher: Context switch
    Dispatcher->>P2: Carrega contexto P2
    CPU->>P2: Retoma P2
\`\`\`

Tempo total: ~5μs (moderno).

---

## 🎥 Material em Vídeo

### Interrupts Hardware vs Software
<iframe width="560" height="315" src="https://www.youtube.com/embed/XuRdlJE9Kwg" title="Hardware vs Software Interrupts x86" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Tratamento de Interrupção Assembly
<iframe width="560" height="315" src="https://www.youtube.com/embed/3zQ5bPPrcrg" title="Interrupt Service Routine Flow" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Leitura / Slides

- I/O autónomo sinaliza CPU via interrupções externas
- Timer interrupts para time-sharing/context switches

### Rotinas Práticas

Verificar interrupções Linux:
\`\`\`
cat /proc/interrupts    # Contadores por IRQ
watch -n1 cat /proc/interrupts  # Em tempo real
\`\`\`

Exemplo saída:
\`\`\`
CPU0    CPU1
  1234:  10234  IO-APIC  timer
  1235:     45  IO-APIC  ide0
\`\`\`

Pergunta: Sem interrupções, como CPU sabe que teclado foi pressionado?
Resposta: Polling (CPU verifica constantemente) → 100% CPU ociosa = ineficiente.

ISR mal escrita → ISR aninhada → stack overflow → panic.

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]* `;
