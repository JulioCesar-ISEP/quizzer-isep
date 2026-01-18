export const B424 = `# DMA (Acesso Direto à Memória)

## 📋 Visão Geral

DMA (Direct Memory Access) permite que dispositivos de alta velocidade (disco, rede, GPU) transfiram dados directamente para/para da RAM sem intervenção contínua da CPU.
A CPU apenas inicia a transferência e é notificada por interrupção quando concluída, libertando-a para outras tarefas durante os ~ms da operação.

---

## 🎯 Funcionamento DMA

### Sequência de Operações

\`\`\`
1. CPU programa controlador DMA:
   - Endereço RAM destino/origem
   - Tamanho transferência (ex: 64KB)
   - Modo (read disk→RAM ou write RAM→disk)

2. CPU continua outras tarefas

3. Controlador DMA copia dados em paralelo
   RAM ↔ dispositivo (disco, NIC, etc.)

4. DMA completa → IRQ para CPU
5. ISR apenas confirma conclusão
\`\`\`

Resultado: CPU livre durante transferência inteira.

---

## 💡 DMA Controller (Hardware Dedicado)

### Microprocessador DMA

\`\`\`
CPU → DMA Controller (registos):
Registo 0: endereço RAM inicial
Registo 1: contador bytes
Registo 2: canal dispositivo (disco=3, NIC=5)
Registo 3: modo (read/write)
↓
DMA Controller gerencia bus memória
↓
Copia dados bloco a bloco
\`\`\`

Canais DMA: múltiplos canais para dispositivos simultâneos.

### Modos DMA

\`\`\`
1. Burst Mode: monopoliza bus até completar
2. Cycle Stealing: intercalado com CPU (1 ciclo memória)
3. Transparent: só quando CPU ociosa
\`\`\`

Moderno: scatter-gather DMA (listas não-contíguas).

---

## 📊 CPU Polling vs DMA

### Comparação Performance

\`\`\`
Ler 1MB de disco (HDD 100MB/s):
\`\`\`

| Método | Tempo CPU | Tempo Total | CPU Livre |
|---|---|---|---|
| Polling | 10ms | 10ms | 0% |
| Interrupt | 10μs | 10ms | 99.9% |
| DMA | 10μs | 10ms | 100% |

DMA essencial para dispositivos rápidos (SSD, 10GbE).

---

## 🎥 Material em Vídeo

### DMA vs CPU Copy
<iframe width="560" height="315" src="https://www.youtube.com/embed/XuRdlJE9Kwg" title="DMA Direct Memory Access Explained" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### DMA Controller Operação
<iframe width="560" height="315" src="https://www.youtube.com/embed/3zQ5bPPrcrg" title="DMA Controller Hardware Operation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Leitura / Slides

- Dispositivo controller executa operação, transfere dados via DMA sem coordenação CPU

### Rotinas Práticas

Verificar DMA Linux:
\`\`\`
lspci -v | grep -i dma     # Dispositivos DMA
cat /sys/class/dma/dma*/devices  # Canais DMA
dmesg | grep -i dma        # Mensagens DMA
\`\`\`

Exemplo NVMe SSD:
\`\`\`
CPU: "DMA lê sector 12345 para RAM 0x7000, 4K bytes"
↓
NVMe controller copia NAND→RAM directamente
↓
CPU só vê IRQ "concluído" ✓
\`\`\`

Pergunta: Sem DMA, ler 1GB SSD (5GB/s):
CPU polling: 100% CPU 0.2s | DMA: 0.2s dispositivo + 2μs CPU ✓

Moderno: NVMe ~1M IOPS possíveis só por DMA eficiente.

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]* `;
