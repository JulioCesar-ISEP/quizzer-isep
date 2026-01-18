export const B113 = `
# Evolução Histórica dos Sistemas Operacionais

## 📋 Visão Geral

Os primeiros computadores eletrónicos não tinham sistema operacional e executavam um programa de cada vez, com forte intervenção manual de operadores.
Com o aumento da velocidade do hardware e da complexidade dos programas, surgiram várias gerações de soluções até chegar aos sistemas modernos com multiprogramação, time-sharing e uso pessoal em massa.

---

## 🎯 Primeira Fase: Sem SO (Processamento em Série)

### Execução em Série

- Nos primeiros computadores de programa armazenado, cada programa era carregado manualmente em memória e executado até ao fim, sem interação com o utilizador.
- O operador configurava a máquina para o próximo programa (carregar código, dados, iniciar execução), o que era lento e deixava a CPU ociosa grande parte do tempo.

### Características

- Um programa de cada vez, sem multiprogramação.
- Detetar e corrigir erros exigia inspeção manual de registos e memória, o que tornava o uso do computador muito ineficiente apesar do seu elevado custo.

---

## 💡 Segunda Fase: Processamento em Batch e Monitor Residente

### Processamento em Lote (Batch)

- Com o aumento da velocidade do hardware, a solução foi automatizar a sequência de programas usando um monitor residente, o primórdio de um SO.
- O monitor permanecia em memória, carregava o próximo programa do lote quando o anterior terminava, reduzindo intervenção manual.

### Funcionamento

- Operador prepara um conjunto de jobs (programas + dados + cartões de controlo) e submete como um lote.
- Um loader e um interpretador de cartões de controlo fazem a leitura, carregamento e arranque de cada job automaticamente até ao fim do lote.

---

## 📊 Terceira Fase: Multiprogramação e Time-Sharing

### Multiprogramação

- Com mais memória, passou a ser possível manter vários programas na RAM ao mesmo tempo.
- Quando um programa iniciava uma operação de E/S (lenta), o sistema passava a CPU para outro programa pronto, aumentando a utilização da CPU.

### Time-Sharing

- A mesma ideia de multiprogramação foi adaptada para utilizadores interativos, ligados por terminais.
- Trocas de contexto rápidas criam a ilusão de que cada utilizador tem o computador só para si, apesar de compartilharem o mesmo hardware.

---

## 🧠 Quarta Fase: Sistemas Modernos e Diversificação

### De Mainframes a PCs e Dispositivos Móveis

- A integração em larga escala (circuitos integrados, microprocessadores) permitiu a criação de computadores pessoais e estações de trabalho acessíveis.
- Sistemas operacionais passaram a suportar ambientes gráficos, redes, múltiplos utilizadores e uma grande variedade de aplicações em PCs, smartphones, tablets e servidores.

### Especialização de Sistemas

- Paralelamente, surgiram sistemas de propósito específico (embebidos, IoT) que muitas vezes não usam SO tradicional ou usam RTOS enxutos, focados em tempo real e fiabilidade.
- Em supercomputadores, o modelo de processamento em batch continua relevante para grandes cargas de trabalho científicas e de dados, agora suportado por SOs avançados.

---

## 🎥 Material em Vídeo

### História dos Sistemas Operacionais
<iframe width="560" height="315" src="https://www.youtube.com/embed/vBURTt97EkA" title="History of Operating Systems (batch, multiprogramming, time-sharing)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Gerações de Computadores e SOs
<iframe width="560" height="315" src="https://www.youtube.com/embed/3zQ5bPPrcrg" title="Computer Generations and Operating Systems Evolution" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Para aprofundar a linha do tempo

- Slides da disciplina:
  - Evolução histórica dos computadores (gerações, mainframes, PCs, Internet)
  - Evolução dos sistemas operacionais: série → batch → multiprogramação → time-sharing
- Livros clássicos:
  - "Modern Operating Systems" – A. S. Tanenbaum (cap. histórico)
  - "Operating System Concepts" – Silberschatz et al. (secção de história de OS)

### Rotinas de Estudo Sugeridas

- Montar uma linha do tempo em 4 blocos:
  1. Sem SO / série
  2. Batch + monitor residente
  3. Multiprogramação + time-sharing
  4. Sistemas modernos (PCs, móveis, embebidos, nuvem)
- Para cada fase, listar:
  - Como os programas eram carregados e executados
  - Papel (ou ausência) do sistema operacional
  - Principais limitações e motivações para a fase seguinte

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]*
`; 
