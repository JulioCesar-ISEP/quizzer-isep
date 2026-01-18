export const B412 = `# Proteção de Memória

## 📋 Visão Geral

Proteção de memória garante que processos só acedem à sua própria memória alocada, impedindo corrupção de dados de outros processos ou do próprio SO.
Implementada via hardware (MMU) + software (tabelas de páginas/segmentos), essencial para sistemas multi-utilizador e multiprogramação segura.

---

## 🎯 Mecanismos de Proteção

### 1. Base e Limite Registers

\`\`\`
Cada processo tem:
BASE = endereço inicial da sua memória
LIMIT = tamanho da sua memória
\`\`\`

Verificação hardware em cada acesso memória:
\`\`\`
Endereço lógico L → Endereço físico = BASE + L
Se (BASE + L) > (BASE + LIMIT) → TRAP → Segmentation Fault
\`\`\`

Simples, mas sofre fragmentação externa.

### 2. Bits de Proteção por Página

\`\`\`
Cada entrada de tabela de páginas tem:
R (Read), W (Write), X (Execute), U (User), S (Supervisor)
\`\`\`

Controlo fino:
\`\`\`
Processo user: só R/W em suas páginas user ✓
Kernel pages: só S (supervisor) pode aceder ✓
Stack separada de código ✓
\`\`\`

---

## 💡 Modos de Privilégio (Rings)

### Hardware Protection Rings

\`\`\`
Ring 0 (Kernel): acesso total
Ring 3 (User): só suas páginas + system calls
\`\`\`

Transição User→Kernel:
\`\`\`
User process chama read()
↓
Hardware muda para Ring 0 automaticamente
↓
Kernel executa, valida, faz E/S real
↓
Retorna Ring 3 com resultado
\`\`\`

Evita: user code aceder directamente dispositivos.

---

## 📊 Implementação Moderna (x86_64)

### Exemplos Práticos

\`\`\`
Processo A: páginas 0x1000-0x2000 R/W/X (seu código)
Processo B: páginas 0x3000-0x4000 R/W/X (seu código)
Kernel:     páginas 0xFFFF8000... só Ring 0 ✓
\`\`\`

Page Fault se:
\`\`\`
P1 tenta escrever em página de P2 → Hardware TRAP
P1 tenta executar código kernel → Privilege violation
\`\`\`

Hardware MMU verifica cada acesso memória em paralelo com execução.

---

## 🎥 Material em Vídeo

### Hardware Memory Protection MMU
<iframe width="560" height="315" src="https://www.youtube.com/embed/XuRdlJE9Kwg" title="Memory Protection Base Limit Registers MMU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Rings de Proteção x86
<iframe width="560" height="315" src="https://www.youtube.com/embed/3zQ5bPPrcrg" title="x86 Protection Rings User vs Kernel" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Leitura / Slides

- General purpose systems: programas executam em isolamento, recursos não acessíveis directamente

### Rotinas Práticas

Cenário violação:
\`\`\`
P1 (base=0x1000, limit=0x2000) tenta aceder 0x3000
↓
Hardware: 0x1000+0x2000=0x3000 == limite → TRAP ✓
Kernel mata P1: Segmentation fault (core dumped)
\`\`\`

Validações típicas:
\`\`\`
✅ P1 escreve sua stack
✅ P1 chama system call read()
❌ P1 escreve em kernel memory
❌ P1 acede memória P2 ✓ protegido
\`\`\`

Pergunta: Sem proteção, o que acontece em sistema multi-utilizador?
Resposta: Processo malicioso corrompe SO/outros processos → crash total.

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]* `;
