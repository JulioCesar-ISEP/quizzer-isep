export const B514 = `
# Aplicações Práticas de RTOS

## 📋 Visão Geral

Sistemas de tempo real estão presentes em praticamente todos os domínios críticos: automotivo, aeroespacial, médico, industrial e até consumer devices com requisitos de latência determinística.
Diferentes setores exigem diferentes níveis de garantia, certificação e RTOS appropriados.

---

## 🎯 Exemplos por Domínio

### Automotivo

PLC: 1ms controlo máquina
Requisitos: 100μs-5ms latência
Exemplos: motor, travões ABS, airbag
RTOS: AUTOSAR, QNX
Certificação: ISO 26262

### Aeroespacial

Latência: 10μs-1ms
Requisitos: voo crítico, redundância
RTOS: VxWorks (61% aviões comerciais)
Certificação: DO-178C

### Médico

Latência: 1-10ms
Exemplos: pacemaker, insulin pump, ventilador
RTOS: Green Hills, VxWorks
Certificação: FDA 510k

### Industrial/PLC

SCADA: 100ms supervisão
PLC: 1ms controlo máquina
RTOS: TwinCAT, Beckhoff
Certificação: IEC 61508

### Robótica

Requisitos: 5ms posição→actuação
Exemplos: robô industrial, drone autónomo
RTOS: ROS 2 (em Linux PREEMPT_RT), FreeRTOS
Certificação: Nenhuma (tipicamente)

### Consumer

Latência: 5-50ms (soft)
Exemplos: smartwatch, gaming controller
RTOS: FreeRTOS, Zephyr
Certificação: Nenhuma

---

## 📊 Tabela por Domínio

| Domínio | Latência Típica | Hard/Soft | RTOS Exemplos | Certificação |
|---|---|---|---|---|
| Automotivo | 100μs-5ms | Hard | AUTOSAR, QNX | ISO 26262 |
| Aeroespacial | 10μs-1ms | Hard | VxWorks | DO-178C |
| Médico | 1-10ms | Hard | Green Hills | FDA 510k |
| Industrial | 1-50ms | Hard/Soft | TwinCAT | IEC 61508 |
| Consumer | 5-50ms | Soft | FreeRTOS | Nenhuma |

---

## 💡 RTOS Populares 2026

### FreeRTOS/Zephyr
- IoT, dispositivos embarcados
- Leve, open-source
- Sem certificação formal

### VxWorks
- Aeroespacial, defesa, médico
- ~5 bilhões dispositivos
- Certificado DO-178C

### QNX
- Automotivo, médico
- Microkernel robusto
- ISO 26262, FDA aprovado

### Linux RT (PREEMPT_RT)
- Industrial, soft real-time
- Determinismo ~ms
- Open-source

---

## 🎥 Material em Vídeo

### Aplicações RTOS Setor por Setor
<iframe width="560" height="315" src="https://www.youtube.com/embed/1UqQwW9rGkE" title="Real-Time Applications Automotive Aerospace Medical" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### FreeRTOS em Prática
<iframe width="560" height="315" src="https://www.youtube.com/embed/XuRdlJE9Kwg" title="FreeRTOS Practical Applications IoT Robotics" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Leitura / Slides

- RTOS aplicações: automotivo, controlo industrial, aeroespacial

### Rotinas Práticas

Identifique tempo real no dia-a-dia:

\`\`\`
✅ Telemóvel câmaras (soft)
✅ Carro travões (hard)
✅ Smartwatch sensor (soft)
✅ Avião autopilot (hard)
✅ PLC fábrica (hard)
\`\`\`

RTOS populares 2026:

\`\`\`
FreeRTOS/Zephyr: IoT, embedded
VxWorks: aeroespacial, defesa
QNX: automotivo, médico
Linux RT: industrial soft
\`\`\`

Pergunta: Smartphone OS é tempo real?
Resposta: Não (Android/iOS priorizam throughput, não deadlines rígidos).

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]*
`
