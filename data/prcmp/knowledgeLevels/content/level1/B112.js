export const B112 = `# Funções e Objetivos de um Sistema Operacional

## 📋 Visão Geral

O objetivo principal de um sistema operacional (SO) é permitir que um computador execute programas que resolvem problemas do utilizador de forma eficiente e conveniente.
Para isso, o SO assume o papel de gestor de recursos (CPU, memória, E/S) e de fornecedor de serviços básicos para aplicações e utilizadores.

---

## 🎯 Objetivos Centrais

### 1. Eficiência de Utilização do Hardware

- Manter a CPU ocupada o máximo de tempo possível, evitando que fique ociosa enquanto programas esperam por operações de entrada/saída lentas.
- Usar a multiprogramação e o time-sharing para intercalar a execução de vários programas em memória, aumentando a utilização global do sistema.

### 2. Conveniência para o Utilizador

- Esconder a complexidade do hardware, oferecendo abstrações mais simples (ficheiros, processos, dispositivos lógicos) em vez de lidar com registos, controladores e endereços físicos.
- Permitir que programas sejam carregados, executados e terminados de forma automática, sem intervenção manual a cada tarefa, ao contrário da execução em série nos primeiros computadores.

---

## 💡 Funções Principais do Sistema Operacional

### Gestão de Processador (CPU)

- Decide qual programa usa a CPU em cada instante, segundo políticas de escalonamento (por exemplo, alternando entre processos quando há espera de E/S).
- Implementa trocas de contexto rápidas para que a CPU passe de um programa para outro, mantendo o processador ocupado enquanto existirem tarefas prontas a executar.

### Gestão de Memória e E/S

- Controla que programas estão na memória principal e quanto espaço cada um pode usar, garantindo isolamento entre eles.
- Media o acesso a dispositivos de entrada/saída (discos, rede, terminais), fornecendo uma interface uniforme e protegida para operações de leitura/escrita.

---

## 📊 Motivação: Com SO vs Sem SO

### Custo de ter um SO

- O SO ocupa espaço em memória e consome ciclos de CPU que poderiam ser usados por programas do utilizador.
- Apesar desse custo, o ganho em automatização, multiprogramação e utilização eficiente dos recursos torna o SO essencial em sistemas com múltiplos programas e utilizadores.

### Quando não usar SO?

- Sistemas de propósito específico, que executam um único programa dedicado durante toda a sua vida útil, podem dispensar um SO tradicional.
- Exemplos: vários sistemas embebidos, controladores industriais simples e dispositivos IoT, em que se privilegia baixo overhead, arranque rápido e controlo direto do hardware.

---

## 🎥 Material em Vídeo

### Objetivos e Funções de Sistemas Operacionais
<iframe width="560" height="315" src="https://www.youtube.com/embed/2i1GTFf8cCk" title="Objectives and Functions of an Operating System (OS Basics)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Multiprogramming e Eficiência de CPU
<iframe width="560" height="315" src="https://www.youtube.com/embed/_p8AdSRSZK4" title="Multiprogramming and CPU Utilization in Operating Systems" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 📐 Conceitos Importantes (Resumo Rápido)

### Propósito do Computador vs. Propósito do SO

- O propósito do computador: executar programas que resolvem problemas do utilizador tão eficientemente quanto possível.
- O propósito do SO: organizar essa execução, gerindo recursos e automatizando carregamento, execução e troca de programas para atingir essa eficiência com segurança e conveniência.

### "Usar um SO ou não?"

- Sem SO: faz sentido quando há um único programa, com função fixa e ambiente bem controlado.
- Com SO: obrigatório quando há múltiplos programas concorrentes, utilizadores distintos e necessidade de partilha organizada e protegida de recursos.

---

## 🔗 Recursos Adicionais

### Leitura Recomendada

- Slides da disciplina:
  - Introdução a Sistemas Operacionais (propósito, custo e motivação para usar SO)
  - Construção de Sistemas (sistemas de propósito específico, RTOS, sistemas gerais)
- Livros:
  - "Modern Operating Systems" – Andrew S. Tanenbaum (capítulo de objetivos e funções do SO)
  - "Operating System Concepts" – Silberschatz, Galvin, Gagne

### Onde treinar o tema

- Criar pequenos simuladores de:
  - Escalonamento de CPU (mostrar quanto tempo a CPU fica ociosa com e sem multiprogramação)
  - Fila de jobs em execução em série vs. com um "monitor residente" que automatiza a sequência (ideia de batch processing)
- Projetos simples em placas de desenvolvimento:
  - Um firmware bare-metal (sem SO) para ver o controlo direto de hardware
  - Um exemplo com RTOS (FreeRTOS ou similar) para comparar gestão de tarefas e recursos

---

## 🎓 Rotinas Práticas

### Nível Iniciante

1. Escreva, em 2-3 frases, qual é o propósito de um SO e por que ele implica custo em memória e CPU.
2. Desenhe uma linha do tempo simples mostrando execução em série (um programa de cada vez) versus multiprogramação com SO.
3. Liste dois cenários em que vale a pena ter SO e dois em que não vale (sistemas embebidos simples, por exemplo).

### Nível Intermediário

1. Com papel e caneta, simule a utilização da CPU em:
   - Cenário A: execução em série de 2 programas com muita E/S
   - Cenário B: multiprogramação, trocando de programa quando um bloqueia em E/S
2. Explique a diferença entre "propósito do computador" e "propósito do SO" em termos de eficiência e conveniência.
3. Analise um dispositivo do dia a dia (router, smartwatch, PLC) e discuta se ele provavelmente usa SO completo, RTOS ou corre bare-metal.

### Nível Avançado

1. Projete uma métrica simples de utilização da CPU (porcentagem de tempo em que a CPU está ativa) e aplique-a a diferentes cenários simulados de carga.
2. Esboce como um "monitor residente" de batch processing automatiza a sequência de jobs, em comparação com um SO moderno.
3. Faça um pequeno relatório comparando um sistema industrial sem SO (lógica fixa) com um com RTOS, enfatizando objetivos e funções extras trazidas pelo SO.

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]*`
