export const B124 = `
# Threads vs Processos

## 📋 Visão Geral

Processos e threads são as duas principais unidades de execução em sistemas operacionais modernos, mas diferem fundamentalmente na forma como partilham memória e recursos.
Processos têm isolamento completo (cada um com espaço de endereçamento próprio), enquanto threads do mesmo processo partilham código, dados e recursos de ficheiros, mas têm pilha e registos separados.

---

## 🎯 Diferenças Fundamentais

### Processo

- Isolamento total: cada processo tem o seu próprio espaço de endereçamento virtual (código, dados, heap, stack separados)
- PCB próprio: registos CPU, PID, recursos de E/S, tabela de páginas são independentes
- Custo elevado: criação e troca de contexto são mais lentas devido à mudança de espaço de endereçamento

### Thread

- Partilha dentro do processo: todas as threads do mesmo processo partilham código, dados globais, heap e descritores de ficheiros
- TCB (Thread Control Block): cada thread tem registos CPU, stack e contador de programa próprios, mas partilha a maior parte da informação de gestão
- Custo reduzido: troca de contexto entre threads é muito mais rápida (mesmo espaço de endereçamento)

---

## 💡 Modelo de Execução

### Processo Multi-Thread

\`\`\`mermaid
graph TB
    P[Processo] --> T1[Thread 1<br/>Stack T1<br/>Registos T1]
    P --> T2[Thread 2<br/>Stack T2<br/>Registos T2]
    P --> T3[Thread 3<br/>Stack T3<br/>Registos T3]
    
    subgraph "Recursos Partilhados"
        P --> Codigo[Código]
        P --> Dados[Dados Globais]
        P --> Heap[Heap]
        P --> Files[Ficheiros Abertos]
    end
    
    style T1 fill:#fee2e2
    style T2 fill:#fee2e2
    style T3 fill:#fee2e2
\`\`\`

### Vantagens da Multi-Threading

- Responsividade: UI thread principal + threads de trabalho em background
- Partilha de dados: comunicação fácil entre threads (sem IPC complexo)
- Utilização de CPU multi-core: threads podem executar em paralelo real em núcleos diferentes

---

## 📊 Comparação Prática

| Característica | Processo | Thread (mesmo processo) |
|---|---|---|
| Espaço de memória | Isolado | Partilhado |
| Troca de contexto | Lenta | Rápida |
| Comunicação | IPC (pipes, sockets, memória partilhada) | Direta (variáveis partilhadas) |
| Sobrecarga de criação | Alta | Baixa |
| Isolamento | Total | Nenhum (partilha tudo) |
| Escalonamento | Pelo SO | Pelo SO (user/kernel threads) |

---

## 🎥 Material em Vídeo

### Processos vs Threads
<iframe width="560" height="315" src="https://www.youtube.com/embed/lF0Rq6HlsKk" title="Processes vs Threads - Operating Systems" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Multi-Threading em Sistemas Operacionais
<iframe width="560" height="315" src="https://www.youtube.com/embed/XuRdlJE9Kwg" title="Threads vs Processes - Real Examples" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Leitura / Slides

- Multiprogramming e time-sharing (base para entender necessidade de múltiplas unidades de execução)
- RTOS tasks (similar a threads, com escalonamento determinístico)

### Rotinas Práticas

- Exemplo concreto:
  - Abra o browser → 1 processo com múltiplas threads (UI, renderização, rede, JavaScript)
  - Abra 2 instâncias do mesmo browser → 2 processos separados, cada um com suas threads

- Perguntas de revisão:
  1. Por que é mais eficiente ter 10 threads num processo do que 10 processos separados?
  2. Qual o risco principal de usar threads (resposta: condições de corrida em dados partilhados)?
  3. Em que cenários prefere processos em vez de threads (resposta: isolamento total necessário)?

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]*
`;
