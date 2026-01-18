export const B422 = `# Controladores e Drivers

## 📋 Visão Geral

Controladores são hardware dedicados nos dispositivos que executam operações I/O autonomamente, enquanto drivers são software do SO que se comunicam com esses controladores através de registos específicos.
Esta separação permite que CPU delegue operações lentas para hardware especializado, recebendo só interrupções quando concluídas.

---

## 🎯 Controladores (Hardware)

### Microprocessador Dedicado no Dispositivo

\`\`\`
Disco SATA:
CPU → Controlador SATA (microcontrolador ARM)
↓
Controlador lê dados do platter NAND → buffer interno
↓
Controlador DMA para RAM → IRQ "concluído"
\`\`\`

Responsabilidades do controlador:
- Executar comando especificado pela CPU
- Gerir electrónica específica do dispositivo
- Buffer dados (evitar picos velocidade)
- Sinalizar conclusão via interrupção

### Registos de Comunicação

\`\`\`
CPU escreve nos registos do controlador:
Registo 0: comando (READ/WRITE)
Registo 1: sector inicial
Registo 2: número sectores
Registo 3: endereço buffer RAM
↓
Controlador lê registos → executa → IRQ
\`\`\`

Exemplo registos SATA: centenas de registos para comandos, estado, erros.

---

## 💡 Drivers (Software)

### Camada Abstração SO ↔ Hardware

\`\`\`
Programa: read(fd, buffer, size)
↓
Kernel: traduz para comandos controlador via driver
↓
Driver: escreve registos específicos controlador
↓
Controlador executa → IRQ → driver → programa
\`\`\`

Driver específico por modelo:
\`\`\`
/dev/sda → driver ahci.ko (SATA)
/dev/ttyUSB0 → driver cdc_acm.ko (USB serial)
\`\`\`

Linux: 1000+ drivers kernel (~70% código kernel).

---

## 📊 Fluxo Completo I/O

### Diagrama Operação Típica

\`\`\`mermaid
sequenceDiagram
    User->>Kernel: read(fd,buf,1024)
    Kernel->>Driver: device_read()
    Driver->>Controlador: escrever registos comando
    Note over Controlador: Executa autonomamente
    Controlador->>RAM: DMA dados
    Controlador->>CPU: IRQ concluído
    ISR->>Driver: irq_handler()
    Driver->>Kernel: copia buffer user space
    Kernel->>User: retorna dados
\`\`\`

Tempo CPU: ~10μs vs tempo dispositivo ~10ms.

---

## 🎥 Material em Vídeo

### Controlador Hardware vs Driver Software
<iframe width="560" height="315" src="https://www.youtube.com/embed/XuRdlJE9Kwg" title="Device Controllers and Drivers Explained" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### I/O Programming com Drivers
<iframe width="560" height="315" src="https://www.youtube.com/embed/3zQ5bPPrcrg" title="Linux Device Driver Architecture" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Leitura / Slides

- I/O devices têm controladores autónomos que sinalizam CPU via interrupções

### Rotinas Práticas

Comandos Linux:
\`\`\`
lspci -v          # Controladores PCI
lsmod              # Drivers carregados
dmesg | grep -i ahci  # Mensagens driver SATA
cat /proc/interrupts # IRQs por controlador
\`\`\`

Exemplo driver SSD NVMe:
\`\`\`
Intel P3700 NVMe → nvme.ko → controlador PCIe
↓
10000 IOPS → CPU só vê interrupções conclusão
\`\`\`

Pergunta: Sem controlador autónomo, quanto tempo CPU espera leitura 4K SSD?
Resposta: ~50μs (polling) vs ~10μs (IRQ) → 5x mais eficiente com controlador.

Driver crash → dispositivo fica "morto" até reboot driver.

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]* `;
