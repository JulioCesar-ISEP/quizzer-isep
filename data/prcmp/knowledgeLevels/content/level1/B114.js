export const B114 = `
# Tipos de Sistemas Operacionais

## 📋 Visão Geral

Existem diferentes tipos de sistemas operacionais, desenhados para contextos e objetivos distintos: desde dispositivos muito específicos até computadores de uso geral e sistemas de tempo real.
Entender esses tipos ajuda a escolher a arquitetura certa para cada solução, equilibrando desempenho, previsibilidade, custo e flexibilidade.

---

## 🎯 Visão Geral dos Tipos

### Principais categorias

De forma prática, podemos organizar os tipos de SO em quatro grupos:

- Sistemas de propósito específico sem SO tradicional (bare-metal / firmware)
- Sistemas de Tempo Real (RTOS)
- Sistemas de propósito geral (PCs, smartphones, servidores)
- Sistemas de grande escala e batch (supercomputadores, processamento em lote intensivo)

Cada categoria equilibra de forma diferente os objetivos de eficiência, previsibilidade e conveniência para o utilizador.

---

## 💡 Sistemas de Propósito Específico (Sem SO Completo)

### Bare-Metal / Sem SO

- Um único programa corre diretamente sobre o hardware, sem kernel a fazer escalonamento ou abstração complexa de recursos.
- Vantagens: menor consumo de memória e CPU, arranque rápido, controlo fino de temporização e de periféricos, ideal para sistemas embebidos simples e dispositivos IoT.

### Firmware e Controladores Dedicados

- Muitos routers, switches, controladores de automação e equipamentos dedicados usam firmware específico em vez de um SO genérico.
- O foco está em fiabilidade, segurança e desempenho previsível para um conjunto restrito de funções.

---

## ⏱️ Sistemas de Tempo Real (RTOS)

### Características de um RTOS

- Um RTOS é desenhado para garantir que certas tarefas são concluídas dentro de prazos temporais bem definidos (determinismo).
- Fornece serviços de escalonamento de tarefas, sincronização, comunicação entre tarefas, gestão de memória e tratamento de interrupções com tempo limitado.

### Onde são usados

- Automotivo (ECUs, travagem, airbags), equipamentos médicos, robótica e automação industrial avançada.
- Cada tarefa trata um aspeto específico do sistema, e o kernel do RTOS prioriza a execução de acordo com requisitos temporais críticos.

---

## 💻 Sistemas de Propósito Geral

### Sistemas Operacionais de Uso Geral

- Desenhados para executar uma grande variedade de aplicações: edição de texto, navegação web, jogos, desenvolvimento, análise de dados, etc.
- Correm em PCs, portáteis, smartphones e tablets, interagindo com vários periféricos e utilizadores.

### Características

- Focam em flexibilidade, suporte a múltiplos programas e utilizadores, e interfaces ricas (CLI e GUI).
- Exemplos típicos incluem Windows, distribuições Linux, macOS, Android e iOS em diferentes plataformas de hardware.

---

## 🧮 Sistemas Batch e de Grande Escala

### Processamento em Batch Moderno

- Embora os monitores residentes históricos sejam hoje raros, o modelo de processamento em batch permanece importante para grandes volumes de dados.
- Supercomputadores e sistemas de data mining frequentemente executam jobs em lotes, otimizando a utilização de recursos em cargas intensivas.

### Sistemas de Alto Desempenho e Servidores

- Em HPC (High Performance Computing), o SO suporta agendadores de jobs, filas e partilha de nós de computação entre utilizadores.
- Em servidores empresariais e de nuvem, sistemas operacionais gerem múltiplos serviços, máquinas virtuais e contentores para servir muitos clientes simultâneos.

---

## ⚡ Tabela Resumo: Tipos de SO na Prática

| Tipo de Sistema | Uso Típico | Vantagens principais | Exemplos de contexto |
|---|---|---|---|
| Sem SO (bare-metal) | Sistemas embebidos simples, IoT, controladores | Baixo overhead, alta previsibilidade | Microcontrolador em sensor IoT |
| RTOS | Tempo real crítico, automação, automotivo, médico | Determinismo, serviços de tarefas e timing | FreeRTOS em controlo industrial |
| Propósito geral | PCs, smartphones, tablets, servidores | Flexibilidade, multiusuário, multitarefa | Windows, Linux, Android |
| Batch / grande escala | Supercomputadores, jobs científicos e de dados | Alta produtividade em jobs longos e massivos | Clusters HPC, pipelines de backup |

---

## 🎥 Material em Vídeo

### Tipos de Sistemas Operacionais (Visão Geral)
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ml3YtANq7cQ" title="Types of Operating Systems (Batch, Real-Time, General-Purpose, etc.)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Sistemas de Tempo Real (RTOS)
<iframe width="560" height="315" src="https://www.youtube.com/embed/1UqQwW9rGkE" title="Real-Time Operating Systems (RTOS) Basics and Use Cases" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Leitura / Slides

- Introdução a sistemas operacionais (motivações, multiprogramação, batch)
- Building systems (specific-purpose, RTOS, general-purpose systems)
- Gerações de computadores e evolução do uso de sistemas operacionais

### Rotinas Práticas

- Classifique 5 dispositivos do dia a dia (PC, smartphone, router, PLC, smartwatch) em: sem SO, RTOS, propósito geral ou batch/HPC, justificando a escolha.
- Para cada tipo de SO, liste:
  - O principal objetivo (determinismo, flexibilidade, throughput…)
  - Um risco se esse objetivo não for atingido (ex.: falha de tempo real, baixa utilização de CPU, etc.)

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]* 
`;
