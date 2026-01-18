export const B421 = `# Dispositivos de I/O

## 📋 Visão Geral

Dispositivos de I/O comunicam dados entre o mundo exterior e a memória do computador, variando enormemente em velocidade (teclado 10 bytes/s vs SSD 7GB/s) e natureza de acesso (sequencial vs aleatório).
O SO abstrai estas diferenças através de drivers e controladores, permitindo programação uniforme independentemente do hardware específico.

---

## 🎯 Hierarquia Velocidade I/O

### Classes de Dispositivos

| Classe | Velocidade | Exemplo | Tipo |
|---|---|---|---|
| Humano | 10 bytes/s | Teclado, rato | Interativo |
| Baixa | 100KB/s | Série, impressora | Sequencial |
| Média | 100MB/s | Disco HDD | Aleatório |
| Alta | 7GB/s | NVMe SSD, 10GbE | Aleatório |
| Ultra | TB/s | GPU, NVLink | Paralelo |

Desafio: CPU 3GHz vs disco 10ms → 300 milhões x mais lento.

---

## 💡 Organização Hardware I/O

### CPU ↔ Dispositivo Comunicação

\`\`\`
1. CPU escreve comando em registos do controlador
2. Controlador executa operação AUTONOMAMENTE
3. Controlador sinaliza CPU via INTERRUPÇÃO quando pronto
\`\`\`

Controlador: microprocessador dedicado no dispositivo (ex: controlador SATA no SSD).

### Tipos de Dispositivos por Acesso

\`\`\`
1. Block devices: acesso aleatório por bloco (512B-4K)
   - Disco, SSD

2. Character devices: fluxo bytes (sem blocos)
   - Teclado, série

3. Network devices: pacotes Ethernet
   - NICs

4. GPU/accelerators: memória partilhada + comandos
\`\`\`

---

## 📊 Abstração SO: Dispositivos Uniformes

### Modelos de Programação

\`\`\`
char device: read(fd, buffer, size) → fluxo bytes
block device: read(fd, block#, buffer) → bloco específico
network: sendto()/recvfrom() → datagramas
\`\`\`

SO esconde diferenças hardware:
\`\`\`
Programa: open("/dev/sda"), read()
↓
Kernel: reconhece SATA → driver SATA → controlador
\`\`\`

Device files Linux: /dev/sda1, /dev/ttyUSB0.

---

## 🎥 Material em Vídeo

### Hierarquia I/O e Controladores
<iframe width="560" height="315" src="https://www.youtube.com/embed/XuRdlJE9Kwg" title="I/O Devices CPU Controller Interaction" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Block vs Character Devices
<iframe width="560" height="315" src="https://www.youtube.com/embed/3zQ5bPPrcrg" title="Linux Device Drivers Block Character Network" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Leitura / Slides

- I/O mais lento que memória, controladores autónomos sinalizam CPU
- Multiprogramming motivado por discrepância velocidades CPU vs I/O

### Rotinas Práticas

Identifique tipo dispositivo:
\`\`\`
✅ Block: /dev/sda (disco)
✅ Char: /dev/tty (terminal)
✅ Network: eth0
✅ GPU: /dev/nvidia0
\`\`\`

Teste velocidades:
\`\`\`
dd if=/dev/zero of=testfile bs=1M count=1024  # Disco
time cat /proc/cpuinfo                    # CPU
\`\`\`

Pergunta: Por que controlador autónomo essencial?
Resposta: CPU 3GHz vs disco 10ms → CPU esperaria eternidade sem ele.

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]* `;
