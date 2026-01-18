export const B313 = `
# Concorrência vs Paralelismo

## 📋 Visão Geral

Concorrência significa estruturar um programa para lidar com múltiplas tarefas "ao mesmo tempo" (lógico), enquanto paralelismo significa executar múltiplas tarefas simultaneamente em múltiplos núcleos físicos (hardware).
A concorrência é sobre design de software; o paralelismo é sobre capacidade de hardware.

---

## 🎯 Definições Claras

### Concorrência (Logical)

\`\`\`
Um núcleo CPU, múltiplas threads/processos alternando via context switch
\`\`\`

- Definição: múltiplas tarefas fazem progresso, não necessariamente ao mesmo instante físico
- Mecanismo: escalonador do SO alterna threads/processos (context switches)
- Exemplo: browser com UI thread + rede + JavaScript (1 núcleo)

### Paralelismo (Physical)

\`\`\`
Múltiplos núcleos CPUs executando threads simultaneamente
\`\`\`

- Definição: múltiplas tarefas executam verdadeiramente ao mesmo tempo em hardware paralelo
- Mecanismo: threads mapeadas para núcleos físicos diferentes
- Exemplo: renderização 3D usando 8 núcleos simultaneamente

---

## 💡 Diagrama Visual

### Concorrência (1 CPU)

\`\`\`mermaid
graph TD
    T1[Thread 1] -.->|Context<br/>Switch| CPU1[CPU Núcleo 1]
    T2[Thread 2] -.->|Context<br/>Switch| CPU1
    T3[Thread 3] -.->|Context<br/>Switch| CPU1
    
    T1 -.->|Avança| Progresso1[⭕⭕⭕]
    T2 -.->|Avança| Progresso2[⭕⭕⭕]
    T3 -.->|Avança| Progresso3[⭕⭕⭕]
\`\`\`

### Paralelismo (4 CPUs)

\`\`\`mermaid
graph TD
    T1 --> CPU1[CPU 1]
    T2 --> CPU2[CPU 2]
    T3 --> CPU3[CPU 3]
    T4 --> CPU4[CPU 4]
    
    T1 -->|Simultâneo| ProgressoP1[⭕⭕⭕]
    T2 -->|Simultâneo| ProgressoP2[⭕⭕⭕]
    T3 -->|Simultâneo| ProgressoP3[⭕⭕⭕]
    T4 -->|Simultâneo| ProgressoP4[⭕⭕⭕]
\`\`\`

---

## 📊 Exemplos Práticos

### Programa Concorrente (Funciona em 1 ou + núcleos)

\`\`\`
Servidor web: 1 thread aceita conexões
N threads processam requests em paralelo lógico
→ Responsivo mesmo em CPU single-core
\`\`\`

### Programa Paralelo (Requer múltiplos núcleos)

\`\`\`
Renderização vídeo: divide frame em 16x16 tiles
Cada tile processado em núcleo separado
→ 4 núcleos = 4x mais rápido
\`\`\`

Concorrência ✓ 1 núcleo | Paralelismo ✗ 1 núcleo

---

## 🎥 Material em Vídeo

### Concurrency vs Parallelism (Rob Pike)
<iframe width="560" height="315" src="https://www.youtube.com/embed/cN_DpYBzKso" title="Concurrency is not Parallelism - Rob Pike" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Visualização Animada
<iframe width="560" height="315" src="https://www.youtube.com/embed/XuRdlJE9Kwg" title="Concurrency vs Parallelism Visualized" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Leitura / Slides

- Multiprogramming cria concorrência via context switches

### Rotinas Práticas

Identifique (C=Concorrência, P=Paralelismo, A=Ambos):

1. Browser com 10 abas abertas → C (context switch entre threads)
2. Video encoding usando 8 núcleos → P (execução simultânea)
3. Editor texto + música background → C (1 CPU alterna tarefas)
4. Renderização ray-tracing GPU → P (milhares núcleos simultâneos)

Pergunta fundamental:

"Concorrência sem paralelismo é possível?" → Sim (1 núcleo, múltiplas threads)
"Paralelismo sem concorrência é possível?" → Não (paralelismo é concorrência + hardware)

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]*
`;
