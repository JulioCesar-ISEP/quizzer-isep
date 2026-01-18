export const B415 = `# Memória Virtual (básico)

## 📋 Visão Geral

Memória virtual permite que processos usem mais memória lógica do que a RAM física disponível, usando o disco como extensão da memória através de paginação.
Processos têm a ilusão de um espaço de endereçamento contíguo e grande (~64-bit = 16 exabytes), mapeado para RAM + disco sob demanda.

---

## 🎯 Conceito Fundamental

### Paginação: Base da Memória Virtual

\`\`\`
Processo vê: [0 ........ 4GB contínuo]
Realidade:   [RAM 2GB] + [Disco 2GB]
↓
Páginas 4K: RAM ou disco sob demanda
\`\`\`

Mapeamento transparente:
\`\`\`
Endereço lógico 0x12345678 → Página 0x1234 → Frame RAM 0x567
Endereço lógico 0x87654321 → Página 0x8765 → Frame DISCO 0x432
\`\`\`

MMU traduz automaticamente em hardware.

---

## 💡 Funcionamento: Page Fault

### Sequence de Eventos

\`\`\`
1. Processo acede endereço X (página Y)
2. MMU consulta tabela páginas → "não em RAM"
3. PAGE FAULT → TRAP para kernel
4. Kernel: aloca frame RAM + carrega página do disco
5. Actualiza tabela páginas → marca "em RAM"
6. Retoma processo → acede X ✓
\`\`\`

Custo: ~10ms (disco) vs 100ns (RAM) → usar cache (TLB).

---

## 📊 Componentes da Memória Virtual

### Estruturas Principais

\`\`\`
1. Tabela de Páginas: página lógica → frame físico (RAM ou disco)
2. TLB (Translation Lookaside Buffer): cache hardware das traduções
3. Page Table Base Register (CR3 x86): aponta para tabela do processo actual
4. Swap space: área disco reservada para páginas
\`\`\`

Diagrama:
\`\`\`
Processo → MMU → TLB → Tabela Páginas → RAM/Disco
         ↑ Page Fault se TLB miss + tabela miss
\`\`\`

---

## 🎥 Material em Vídeo

### Memória Virtual e Page Faults
<iframe width="560" height="315" src="https://www.youtube.com/embed/XuRdlJE9Kwg" title="Virtual Memory Page Faults Explained" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Paginação e Endereços Lógicos
<iframe width="560" height="315" src="https://www.youtube.com/embed/3zQ5bPPrcrg" title="Virtual Memory Address Translation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Leitura / Slides

- Evolução: mais memória → necessidade memória virtual para isolamento + eficiência

### Rotinas Práticas

Exemplo concreto (RAM 8GB, processo quer 16GB):

\`\`\`
Processo: código 1GB + dados 5GB + heap/stack 10GB = 16GB
Realidade: só carrega páginas usadas (working set ~2GB RAM)
Páginas não usadas ficam em disco ✓
\`\`\`

Comandos Linux:
\`\`\`
free -h          # RAM + swap
cat /proc/PID/maps # mapa memória processo
vmstat 1         # page faults/segundo
\`\`\`

Pergunta: MV resolve fragmentação externa?
Resposta: Sim! Páginas 4K alocadas independentemente.

Thrashing: page faults > capacidade TLB → sistema trava.

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]* `;
