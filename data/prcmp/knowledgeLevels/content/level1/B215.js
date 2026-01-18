export const B215 = `
# Diagrama de Estados de Processo

## 📋 Visão Geral

O diagrama de estados mostra todas as transições possíveis entre os estados de um processo durante o seu ciclo de vida completo.
Ele ilustra como o SO gere processos desde a criação até à destruição, passando por filas de prontos, execução e bloqueios por eventos.

---

## 🎯 Diagrama Completo

### Estados e Transições

\`\`\`mermaid
graph TD
    A[Novo] -->|Recursos alocados| B[Pronto]
    B -->|Escalonador<br/>CPU livre| C[Executando]
    
    C -->|Timer<br/>Quantum esgotado| B
    C -->|Chamada E/S<br/>Bloqueio voluntário| D[Bloqueado]
    C -->|exit()<br/>Erro fatal| E[Terminado]
    
    D -->|E/S completa<br/>Sinal recebido| B
    
    F[Suspenso<br/>Swap para disco] -->|Memória livre| B
    C -->|Falta memória| F
    D -->|Falta memória| F

    style C fill:#fee2e2
    style B fill:#dcfce7
    style D fill:#fef3c7
    style E fill:#f3f4f6
    style F fill:#f3e8ff
\`\`\`

---

## 💡 Transições Detalhadas

### Novo → Pronto

\`\`\`
SO recebe pedido de criação (fork/exec)
↓
Aloca PCB + memória mínima
↓
Coloca em fila de "novos/prontos"
\`\`\`

Causa: recursos básicos alocados com sucesso.

### Pronto → Executando

\`\`\`
Escalonador de curto prazo escolhe processo
↓
Dispatcher carrega contexto do PCB
↓
CPU salta para endereço da próxima instrução
\`\`\`

Causa: CPU ficou livre + este processo escolhido pelo algoritmo.

### Executando → Bloqueado

\`\`\`
Processo invoca read(), sleep(), wait()
↓
SO salva contexto no PCB
↓
Muda estado para Bloqueado + fila específica
\`\`\`

Causa: processo precisa de evento externo (E/S, timer, sinal).

---

## 📊 Estados Auxiliares Importantes

### Zombie (Estado Zumbi)

\`\`\`
Processo chama exit()
↓
SO marca PCB como Zombie (estado especial)
↓
Mantém PCB até pai chamar wait()
↓
Pai lê código de saída → PCB destruído
\`\`\`

Propósito: permitir comunicação pai-filho sobre resultado da execução.

### Estados Suspensos

\`\`\`
Falta memória física disponível
↓
SO move processo (Pronto/Bloqueado) para disco
↓
Volta a memória quando há espaço livre
\`\`\`

Propósito: gerir memória quando há mais processos prontos do que RAM permite.

---

## 🎥 Material em Vídeo

### Diagrama Completo de Estados de Processo
<iframe width="560" height="315" src="https://www.youtube.com/embed/czD3e2oq6uQ" title="Process State Diagram Full Explanation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Transições e Context Switches
<iframe width="560" height="315" src="https://www.youtube.com/embed/LJ7b8vT3QfU" title="Process State Transitions Animated" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Leitura / Slides

- Multiprogramming (transições Pronto ↔ Executando ↔ Bloqueado)

### Rotinas Práticas

Simule com 3 processos (sequência de eventos):

\`\`\`
t=0: SO cria P1 → Novo → Pronto
t=1: Escalonador → P1 Executando
t=3: P1 read() → Executando → Bloqueado
t=4: P2 chega → Pronto
t=5: Escalonador → P2 Executando
t=7: E/S P1 completa → P1 Pronto (atrás de P2)
\`\`\`

Desenhe o diagrama temporal mostrando estados e filas em cada instante.

Pergunta: Qual fila fica vazia quando todos estão Bloqueados? (Resposta: fila de prontos).

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]*
`;
