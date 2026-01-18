export const B512 = `# Hard vs Soft Real-time

## 📋 Visão Geral

Hard real-time exige cumprimento absoluto de deadlines onde falha significa falha catastrófica do sistema, enquanto soft real-time tolera algumas violações de prazo com degradação graciosa da qualidade.
A distinção determina o nível de garantias exigido ao RTOS e o custo da certificação.

---

## 🎯 Definições Operacionais

### Hard Real-Time

\`\`\`
Deadline miss = system failure
↓
RTOS deve GARANTIR worst-case timing
↓
Certificação rigorosa (DO-178C aviões, ISO 26262 automotivo)
\`\`\`

Exemplos:
\`\`\`
✅ Airbag: 2ms para inflar
✅ ABS: 5ms ciclo controlo
✅ Pacemaker: 10ms heartbeat
✅ Motor controlo: 100μs loop
\`\`\`

---

## 💡 Soft Real-Time

\`\`\`
Deadline miss = qualidade degradada (não crash)
↓
Estatística: 99% dentro prazo aceitável
↓
Sem certificação crítica
\`\`\`

Exemplos:
\`\`\`
✅ Video streaming: 1 frame drop/seg OK
✅ VoIP: 5% pacotes perdidos tolerado
✅ Audio playback: pequenos glitches aceitáveis
✅ Web server: 99th percentile 200ms
\`\`\`

---

## 📊 Comparação Técnica

| Característica | Hard RT | Soft RT |
|---|---|---|
| Miss deadline | Catástrofe | Degradação |
| Garantia | 100% worst-case | 99% estatístico |
| Certificação | DO-178C, ISO26262 | Nenhuma |
| RTOS | VxWorks, QNX | Linux PREEMPT_RT |
| Jitter | μs | ms |
| Custo | $$$ | $ |

Hard: nunca falha | Soft: raramente falha.

---

## 🎥 Material em Vídeo

### Hard vs Soft Real-Time Exemplos
<iframe width="560" height="315" src="https://www.youtube.com/embed/1UqQwW9rGkE" title="Hard vs Soft Real-Time Systems Examples" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### RTOS Schedulling Diferenças
<iframe width="560" height="315" src="https://www.youtube.com/embed/XuRdlJE9Kwg" title="Hard Real-Time Scheduling Guarantees" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Leitura / Slides

- RTOS: tempo constraints rígidos, predictable performance

### Rotinas Práticas

Classifique:
\`\`\`
✅ HARD:
- Motor eléctrico controlo (100μs)
- Travões ABS (5ms)
- Insulin pump (1s)

✅ SOFT:
- Netflix streaming (frame drops OK)
- Zoom call (audio/video jitter)
- Stock trading (99.9% < 100ms)

❓ MIXTO:
- Carro autónomo (câmaras soft, travões hard)
\`\`\`

Pergunta crítica: Avião fly-by-wire é hard real-time?
Resposta: SIM - falha controlo = queda.

Linux para hard RT? Não (PREEMPT_RT soft apenas).

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]* `;
