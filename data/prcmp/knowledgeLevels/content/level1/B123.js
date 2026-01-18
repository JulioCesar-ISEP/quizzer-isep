export const B123 = `
# Estados de Processo

## 📋 Visão Geral

Um processo passa por vários estados durante o seu ciclo de vida, desde a criação até à terminação, e o SO usa estes estados para decidir quais processos executam em cada momento.
Os principais estados são Novo, Pronto, Em Execução, Bloqueado e Terminado, cada um representando uma situação específica na gestão do processo.

---

## 🎯 Ciclo de Vida de um Processo

### Estados Principais

- Novo (New): processo foi criado mas ainda não está pronto para executar (aguarda alocação de recursos de memória, etc.)
- Pronto (Ready): processo tem todos os recursos necessários e está à espera apenas da CPU (na fila de prontos)
- Em Execução (Running): processo está a usar a CPU e a executar as suas instruções
- Bloqueado (Blocked/Waiting): processo foi suspenso porque está à espera de um evento (E/S completa, sinal, temporizador)
- Terminado (Terminated): processo terminou a sua execução e o SO vai libertar os seus recursos

### Diagrama de Transições

\`\`\`mermaid
graph TD
    A[Novo] -->|Recursos alocados| B[Pronto]
    B -->|Escalonador| C[Em Execução]
    B -->|Bloqueado| D[Bloqueado]
    C -->|Tempo esgotado<br/>ou interrupção| B
    C -->|Aguarda evento| D
    D -->|Evento concluído| B
    C -->|Termina| E[Terminado]
    A -->|Falha na criação| E

    style B fill:#dcfce7
    style C fill:#fee2e2
    style D fill:#fef3c7
    style E fill:#f3f4f6
\`\`\`

---

## 💡 Transições Entre Estados

### Pronto → Em Execução

- O escalonador do SO escolhe um processo da fila de prontos e atribui-lhe a CPU
- O SO carrega o contexto do processo a partir do seu PCB (registos, contador de programa, etc.)

### Em Execução → Bloqueado

- O processo faz uma chamada de sistema para uma operação de E/S (ler ficheiro, aguardar input, temporizador)
- O SO suspende o processo, guarda o contexto no PCB e coloca-o numa fila de bloqueados

### Bloqueado → Pronto

- O dispositivo de E/S completa a operação e gera uma interrupção
- O SO move o processo para a fila de prontos (mas não lhe atribui CPU imediatamente)

---

## 📊 Estados em Diferentes Contextos

### Multiprogramação e Time-Sharing

- Pronto: vários processos competem pela CPU; o escalonador decide a ordem
- Em Execução: apenas um processo por núcleo de CPU em cada instante; trocas frequentes mantêm a ilusão de simultaneidade
- Bloqueado: essencial para manter a CPU ocupada, pois permite que outros processos avancem enquanto um espera por E/S lenta

### Estados Adicionais (Opcionais)

Alguns SOs distinguem:

- Suspenso (Suspended): processo foi movido para disco por falta de memória física (swap)
- Pronto Suspenso e Bloqueado Suspenso: variantes para processos em disco

---

## 🎥 Material em Vídeo

### Estados de Processo e Ciclo de Vida
<iframe width="560" height="315" src="https://www.youtube.com/embed/czD3e2oq6uQ" title="Process States and Transitions in Operating Systems" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Context Switches entre Estados
<iframe width="560" height="315" src="https://www.youtube.com/embed/LJ7b8vT3QfU" title="Process State Transitions and Context Switching" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Leitura / Slides

- Introdução a sistemas operacionais (multiprogramming, time-sharing, troca de processos)
- General purpose systems (programas executam em isolamento, SO coordena acesso a recursos)

### Rotinas Práticas

- Desenhe o diagrama de estados (Novo → Pronto → Executando ↔ Bloqueado → Terminado) e escreva uma causa para cada transição principal
- Simulação manual: liste 3 processos (P1, P2, P3) com tempos de CPU e eventos de bloqueio, e mostre a sequência de estados ao longo do tempo
  Exemplo:
  - t=0: P1 executa (2s CPU) → P1 bloqueado (E/S) → P2 executa → ...
- Pergunta de revisão: Por que é essencial ter o estado Bloqueado para sistemas eficientes? (Resposta: permite CPU continuar com outros processos enquanto um espera E/S lenta)

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]* `;
