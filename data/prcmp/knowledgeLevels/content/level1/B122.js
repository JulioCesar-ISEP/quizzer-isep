export const B122 = `# Process Control Block (PCB)

## 📋 Visão Geral

O Process Control Block (PCB) é a estrutura de dados onde o sistema operacional guarda todas as informações necessárias para gerir um processo.
Ele permite que o SO pause e retome processos, faça escalonamento, contabilize recursos e mantenha isolamento entre diferentes processos em execução.

---

## 🎯 O que é o PCB?

### Definição

O PCB é um registo mantido pelo SO que descreve o estado atual de um processo, incluindo contexto de CPU, informação de memória, recursos abertos e dados de controlo.
Sempre que o SO precisa trocar a CPU de um processo para outro, guarda o contexto no PCB do primeiro e carrega o contexto do segundo a partir do PCB correspondente.

### Papel no Ciclo de Vida do Processo

- Quando um processo é criado, o SO cria um PCB e inicializa os seus campos (estado, prioridade, apontadores de memória, etc.)
- Durante a execução, o PCB é atualizado sempre que o processo muda de estado (pronto, em execução, bloqueado) ou adquire/liberta recursos

---

## 💡 Campos Típicos de um PCB

### Informação de Contexto de CPU

- Registos gerais e especiais (por exemplo, contador de programa, ponteiro de pilha)
- Dados necessários para retomar a execução exatamente no ponto onde o processo foi interrompido

### Informação de Gestão e Recursos

- Identificador do processo (PID), estado (pronto, executando, bloqueado), prioridade
- Apontadores para o espaço de endereçamento (tabelas de páginas, segmentos)
- Lista de ficheiros abertos, dispositivos de E/S associados, quotas de tempo de CPU, estatísticas de uso, etc.

---

## 📊 PCB e Troca de Contexto

### Como o PCB é usado na prática

Troca de contexto (context switch):
- O SO guarda os registos atuais da CPU no PCB do processo que está a ser interrompido
- Em seguida, carrega os valores de registos a partir do PCB do próximo processo a executar, retomando a sua execução

Este mecanismo é a base da multiprogramação e do time-sharing, permitindo que vários processos pareçam avançar ao mesmo tempo.

### Vários PCBs em Memória

- O SO mantém uma coleção de PCBs (tipicamente organizados em filas/listas) representando todos os processos do sistema: prontos, bloqueados, terminados, etc.
- As estruturas de escalonamento (filas de prontos, filas de bloqueados por evento) contêm referências para os PCBs, não para o código em si.

---

## 🎥 Material em Vídeo

### Process Control Block em Sistemas Operacionais
<iframe width="560" height="315" src="https://www.youtube.com/embed/4q9T5nqKfZc" title="Process Control Block (PCB) - Operating System Concepts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Context Switch e PCB
<iframe width="560" height="315" src="https://www.youtube.com/embed/LJ7b8vT3QfU" title="Context Switching and PCB in Operating Systems" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Leitura / Slides

- Introdução a sistemas operacionais (multiprogramming, time-sharing e necessidade de guardar contexto de processos)
- General purpose systems (programas a pedir recursos ao OS, que coordena e isola execução)

### Rotinas Práticas

- Desenhe um PCB genérico com quatro grupos de campos: contexto de CPU, informação de memória, recursos de E/S, informação de controlo (PID, estado, prioridade)
- Descreva passo a passo um context switch:
  1. Guardar registos do processo A no PCB de A
  2. Atualizar estado de A (por exemplo, de executando para bloqueado/pronto)
  3. Escolher processo B
  4. Carregar registos a partir do PCB de B e colocá-lo em estado de execução
- Pense em que tipo de problemas surgiriam se o SO não mantivesse PCBs separados para cada processo (corrupção de estado, mistura de recursos, falhas de isolamento)

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]* `;
