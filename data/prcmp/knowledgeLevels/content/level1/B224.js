export const B224 = `
# Quando Ocorre Context Switch

## 📋 Visão Geral

Context Switch ocorre sempre que o SO precisa mudar a CPU de um processo para outro, acionado por interrupções específicas que alteram o estado do sistema ou prioridades de execução.
Os gatilhos mais comuns são timer interrupts, conclusão de E/S, chegada de processos prioritários e chamadas de sistema que bloqueiam.

---

## 🎯 Principais Causas de Context Switch

### 1. Timer Interrupt (Mais Comum)

\`\`\`
Quantum periódico esgota (ex: 10ms)
↓
Hardware gera interrupção
↓
SO salva contexto processo atual
↓
Escalonador escolhe próximo da fila prontos
\`\`\`

Propósito: garante fairness em Round Robin e time-sharing.

### 2. Conclusão de Operação de E/S

\`\`\`
Processo P1 bloqueado em read()
↓
Dispositivo completa E/S → IRQ
↓
ISR muda P1 de Bloqueado → Pronto
↓
Se P1 tem maior prioridade → preempt P2 atual
\`\`\`

Propósito: processo que esperava E/S pode agora progredir.

---

## 💡 Outras Causas Importantes

### 3. Chegada de Processo de Maior Prioridade

\`\`\`
P1 executa (prioridade baixa)
↓
P2 chega à fila prontos (prioridade alta)
↓
SO preempt P1 imediatamente (preemptive priority)
↓
P2 executa até quantum ou bloqueio
\`\`\`

Propósito: responsividade para tarefas críticas.

### 4. Chamadas de Sistema que Bloqueiam

\`\`\`
P1 chama sleep(5), semáforo, mutex bloqueante
↓
SO detecta bloqueio inevitável
↓
Salva contexto P1 → Bloqueado
↓
Escalonador ativa próximo processo
\`\`\`

Tipos comuns: read(), write(), wait(), sleep().

---

## 📊 Tabela Completa de Gatilhos

| Causa | Tipo | Preemptivo? | Frequência |
|---|---|---|---|
| Timer | Periódica | Sim | Alta (100Hz+) |
| E/S completa | Assíncrona | Opcional | Média |
| Prioridade alta chega | Assíncrona | Sim | Média |
| Chamada bloqueante | Síncrona | Sim | Média |
| Sinal (kill) | Assíncrona | Sim | Baixa |
| Fork/exec | Síncrona | Não | Baixa |
| Erro fatal | Assíncrona | Sim | Baixa |

Total: milhares de context switches por segundo em sistemas carregados.

---

## 🎥 Material em Vídeo

### Todos os Gatilhos de Context Switch
<iframe width="560" height="315" src="https://www.youtube.com/embed/LJ7b8vT3QfU" title="When Does Context Switching Occur?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### IRQ, Timer e Context Switches
<iframe width="560" height="315" src="https://www.youtube.com/embed/4q9T5nqKfZc" title="Interrupts Leading to Context Switches" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Leitura / Slides

- Timer interrupts para time-sharing, E/S interrupts para multiprogramming

### Rotinas Práticas

Cenário: Sistema com P1 (baixo prio), P2 (alta prio), quantum=10ms.

\`\`\`
t=0: P1 executa
t=5: P2 chega (alta prio) → Context switch Imediato
t=15: Timer P2 → volta fila, P1 retoma 5ms restantes
t=20: E/S P1 completa → P1 pronto (mas P2 tem prio)
\`\`\`

Liste causas: Timer, chegada prioridade, E/S completa.

Pergunta: Qual causa mais frequente em desktop interativo? (Timer).

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]*
`;
