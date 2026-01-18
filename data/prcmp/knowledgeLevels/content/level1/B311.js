export const B311 = `
# Multiprogramação vs Multitarefa

## 📋 Visão Geral

Multiprogramação refere-se a manter vários programas na memória simultaneamente para melhor utilização da CPU, enquanto multitarefa enfatiza a execução aparentemente simultânea de tarefas para o utilizador.
Ambos conceitos são relacionados mas têm focos e contextos ligeiramente diferentes na evolução dos sistemas operacionais.

---

## 🎯 Multiprogramação

### Conceito Clássico

- Objectivo: maximizar utilização da CPU em sistemas onde E/S é muito mais lenta que computação
- Múltiplos programas na memória; quando um bloqueia em E/S, CPU passa imediatamente para outro processo pronto
- Foco técnico: eficiência do hardware (CPU ociosa mínima)

### Exemplo Visual

\`\`\`
Sem multiprogramação: |CPU comp.|E/S lenta|ociosa|CPU comp.|E/S|ociosa|
Com multiprogramação:  |CPU P1| E/S P1 |CPU P2| CPU P1  |E/S P2 |CPU P1|
\`\`\`

Resultado: CPU ~100% ocupada.

---

## 💡 Multitarefa

### Conceito Utilizador-Cêntrico

- Objectivo: dar ao utilizador a ilusão de múltiplas tarefas simultâneas (ex: editar texto enquanto música toca em background)
- Evolução da multiprogramação para sistemas interativos com trocas de contexto frequentes
- Foco utilizador: responsividade, tempo de resposta baixo

### Time-Sharing (Subtipo Multitarefa)

- Vários utilizadores em terminais partilham um computador central
- Quantum pequeno (~10-100ms) + preemptividade garantem resposta rápida a todos

---

## 📊 Comparação Detalhada

| Característica | Multiprogramação | Multitarefa |
|---|---|---|
| Foco | Eficiência CPU | Responsividade utilizador |
| Quantum | Grande ou ausente | Pequeno (10-100ms) |
| Preemptivo | Opcional | Obrigatório |
| Interactividade | Batch jobs | Terminais interativos |
| Métrica principal | Utilização CPU | Tempo resposta |
| Exemplo workload | Mainframes científicos | Workstations multiusuário |

Nota: Multitarefa é uma evolução da multiprogramação para cenários interativos.

---

## 🎥 Material em Vídeo

### Multiprogramming vs Multitasking Explained
<iframe width="560" height="315" src="https://www.youtube.com/embed/_p8AdSRSZK4" title="Multiprogramming vs Multitasking vs Multiprocessing" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Evolução: Batch → Multiprogramming → Time-Sharing
<iframe width="560" height="315" src="https://www.youtube.com/embed/vBURTt97EkA" title="OS Evolution: Batch to Multiprogramming to Time-Sharing" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Leitura / Slides

- Multiprogramming (CPU overlap com E/S), time-sharing (multiutilizador interativo)

### Rotinas Práticas

Cenário: Sistema com música (P1: E/S áudio contínua), editor texto (P2: CPU + E/S disco ocasional).

\`\`\`
Sem multiprogramming: música para → editor → música retoma (trava)
Com multiprogramming: editor E/S → música continua sem pausas ✓
Com multitarefa: ambos "simultâneos", editor responsivo ✓
\`\`\`

Pergunta: Qual termo descreve PCs modernos com browser + editor + música? (Multitarefa).

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]*
`;
