export const B314 = `
# Sistemas Multi-utilizador

## 📋 Visão Geral

Sistemas multi-utilizador permitem que múltiplos utilizadores interajam simultaneamente com o mesmo computador, partilhando recursos de forma segura e eficiente através de terminais ou sessões remotas.
O time-sharing é a técnica central, usando context switches rápidos para dar a cada utilizador a ilusão de ter o sistema só para si.

---

## 🎯 Time-Sharing: O Coração dos Multi-utilizador

### Funcionamento

\`\`\`
Múltiplos utilizadores em terminais
↓
Cada um executa processos próprios
↓
SO faz context switches ~100ms
↓
Cada utilizador pensa: "Tenho CPU dedicada"
\`\`\`

- Quantum curto (10-100ms) garante resposta rápida
- Preemptivo: processo interativo toma prioridade sobre batch jobs

### Arquitectura Típica

\`\`\`
Terminal1 ──┐
Terminal2 ──┼─> Mainframe UNIX/Multics ──> Disco partilhado
TerminalN ──┘          │
                       └─> Impressoras partilhadas
\`\`\`

Exemplos históricos: Multics, UNIX inicial, VMS.

---

## 💡 Características Técnicas

### Isolamento e Segurança

- Espaços de endereçamento separados: utilizador A não vê/accede dados de B
- Controlo de acesso: permissões em ficheiros, dispositivos (proprietário/grupo/outros)
- Quotas: limite uso disco/CPU por utilizador

### Recursos Partilhados Geridos

\`\`\`
Disco: SO serializa acesso (file locks)
Impressora: fila de impressão + spooling
CPU: escalonamento por utilizador/processo
Memória: paginação + swap para suportar todos
\`\`\`

Spooling: jobs de impressão vão para disco temporário → daemon imprime sequencialmente.

---

## 📊 Vantagens vs Desvantagens

### Vantagens

| Vantagem | Benefício |
|---|---|
| Aproveitamento | 1 mainframe = 100 terminais |
| Custo | Hardware caro partilhado |
| Centralização | Backup, segurança, administração única |
| Recursos | Impressoras caras partilhadas |

### Desvantagens

| Problema | Impacto |
|---|---|
| Responsividade | Processo pesado afecta todos |
| Segurança | Bug num utilizador pode crash sistema |
| Complexidade | Isolamento, quotas, accounting |

---

## 🎥 Material em Vídeo

### Time-Sharing Sistemas Multi-utilizador
<iframe width="560" height="315" src="https://www.youtube.com/embed/_p8AdSRSZK4" title="Time-Sharing Multi-User Systems Explained" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### História: Multics → UNIX
<iframe width="560" height="315" src="https://www.youtube.com/embed/vBURTt97EkA" title="Evolution of Multi-User Operating Systems" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Leitura / Slides

- Time-sharing: usuários interagem via terminais, process switching rápido

### Rotinas Práticas

Cenário mainframe 1970: 20 programadores, 1 CPU rápida.

\`\`\`
Sem time-sharing: programador A monopoliza 1h → outros esperam
Com time-sharing: todos digitam em terminais, CPU alterna 100ms →
todos produtivos simultaneamente ✓
\`\`\`

Perguntas:
1. Quantum típico para multi-utilizador interativo? (10-100ms)
2. Principal risco? (Utilizador malicioso consome todos recursos)
3. Solução moderna? (Containers, VMs, cloud instâncias)

Exemplo actual: Linux server com SSH para 100 devs simultâneos.

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]*
`;
