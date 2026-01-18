export const B413 = `# Swapping

## 📋 Visão Geral

Swapping é a técnica de mover processos completos entre memória principal (RAM) e disco secundário quando a RAM física é insuficiente para todos os processos ativos.
Serve como solução temporária para suportar mais processos simultâneos do que RAM permite, mas é lenta devido ao acesso disco (~10ms vs ~100ns RAM).

---

## 🎯 Mecanismo de Swapping

### Quando e Como Ocorre

\`\`\`
RAM cheia (todos processos > RAM disponível)
↓
Escalonador médio prazo escolhe "vítima"
↓
SO copia processo inteiro para ficheiro swap (disco)
↓
Liberta suas páginas físicas
↓
Carrega processo aguardado da swap para RAM
\`\`\`

Estados envolvidos:
\`\`\`
Pronto → Suspenso (swap out)
Suspenso → Pronto (swap in)
\`\`\`

### Arquitectura

\`\`\`
RAM: Processo A (executando) | B (pronto) | C (pronto)
↓ RAM cheia
Swap: Copia C para swapfile | Carrega D do swapfile → RAM
\`\`\`

---

## 💡 Algoritmos de Seleção para Swap

### Critérios da "Vítima"

1. Least Recently Used (LRU): processo menos usado recentemente
2. Menor prioridade: sacrifica processos menos importantes
3. Menor tamanho: minimiza I/O disco
4. Zero page count: processo sem páginas referenciadas recentemente

### Swap Daemon

\`\`\`
Processo kernel contínuo:
Monitora pressão memória
↓
Se RAM < threshold → inicia swap out
↓
Mantém balanceamento automático
\`\`\`

Linux: kswapd, out_of_memory killer.

---

## 📊 Problemas e Limitações

### Thrashing (Maior Problema)

\`\`\`
Swap excessivo:
Processo A swap out → B swap out → C swap out → ...
↓
Disco 100% ocupado com swapping bidireccional
↓
Sistema para (thrashing)
\`\`\`

Solução: limitar número processos simultâneos (working set).

### Comparação Performance

| Local | Latency Leitura |
|---|---|
| RAM | 100ns |
| SSD | 50μs |
| HDD | 10ms |

Swap HDD: 100,000x mais lento que RAM → só em último caso.

---

## 🎥 Material em Vídeo

### Swapping e Thrashing
<iframe width="560" height="315" src="https://www.youtube.com/embed/XuRdlJE9Kwg" title="Memory Swapping and Thrashing Explained" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Working Set vs Swapping
<iframe width="560" height="315" src="https://www.youtube.com/embed/3zQ5bPPrcrg" title="Swapping Algorithm and Thrashing Prevention" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Leitura / Slides

- Aumento capacidade memória levou a técnicas como swapping para suportar multiprogramação

### Rotinas Práticas

Simule swapping (RAM 300K, processos: P1=100K, P2=150K, P3=200K):

\`\`\`
Estado1: RAM[P1,P2] | P3 swap out
Estado2: Usuário interage P3 → swap in P3
↓ RAM cheia → escolhe vítima (P2 LRU) → swap out P2
\`\`\`

Thrashing detectado quando:
\`\`\`
Swap in rate + swap out rate > threshold
↓
SO mata processos ou suspende novos ✓
\`\`\`

Comando Linux: swapon, vmstat si/so (swap in/out).

Pergunta: Swapping resolve fragmentação externa? (Não, só gerencia pressão RAM).

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]* `;
