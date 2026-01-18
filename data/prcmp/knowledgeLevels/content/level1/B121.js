export const B121 = `# Conceito de Processo

## 📋 Visão Geral

Em sistemas operacionais, um processo é a unidade básica de execução gerida pelo SO.
Enquanto um programa é código passivo armazenado em disco, o processo é esse programa em execução, com contexto próprio e recursos associados.

---

## 🎯 Definição e Intuição

### Programa vs Processo

- Programa: ficheiro contendo instruções e dados, armazenado em disco (entidade estática)
- Processo: instância em execução de um programa, com estado próprio (registos, memória, recursos de E/S), gerida pelo sistema operacional

### Definição de Processo

Um processo pode ser visto como:

- Código do programa + dados em uso + pilha + heap
- Estado da CPU (registos, contador de programa) + informação de gestão mantida pelo SO (PCB – Process Control Block)

---

## 💡 Componentes de um Processo

### Espaço de Endereçamento

Cada processo possui um espaço de endereçamento lógico, tipicamente dividido em:

- Segmento de código (instruções do programa)
- Segmento de dados (variáveis globais, estáticas)
- Heap (memória dinâmica alocada em tempo de execução)
- Stack (pilha de chamadas de função e variáveis locais)

Esse isolamento de memória é essencial para que processos não interfiram uns nos outros.

### Contexto de Execução

O SO guarda, para cada processo:

- Registos da CPU (incluindo o contador de programa)
- Informação de agendamento (prioridade, estado pronto/bloqueado)
- Recursos associados (descritores de ficheiros, dispositivos de E/S em uso, etc.)

Essa informação compõe o PCB, usado pelo SO para pausar e retomar processos de forma transparente.

---

## 📊 Processo como Entidade Gerida pelo SO

### Papel do Sistema Operacional

- Cria e termina processos conforme pedidos de programas (e do próprio sistema)
- Decide qual processo executa em cada instante (escalonamento), implementando multiprogramação e time-sharing
- Garante isolamento e coordenação quando vários processos partilham recursos (CPU, memória, E/S)

### Múltiplos Processos do Mesmo Programa

- O mesmo programa pode originar vários processos distintos (por exemplo, abrir duas instâncias do mesmo editor de texto)
- Cada processo tem contexto, memória e recursos próprios, mesmo que partilhe o mesmo código binário

---

## 🎥 Material em Vídeo

### Conceito de Processo em Sistemas Operacionais
<iframe width="560" height="315" src="https://www.youtube.com/embed/m6UOo2YGbIE" title="What is a Process in Operating Systems?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Programa vs Processo
<iframe width="560" height="315" src="https://www.youtube.com/embed/3ZxZ_6q8G4Y" title="Program vs Process - OS Concepts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Leitura / Slides

- Introdução a sistemas operacionais (motivação para multiprogramação e gestão de execução de programas)
- General purpose systems (programas a pedir recursos ao OS, que coordena acesso e execução)

### Rotinas Práticas

- Escreva, em 2-3 frases, a diferença entre programa e processo, com um exemplo do dia a dia (ex.: abrir o mesmo app duas vezes)
- Desenhe um diagrama simples de um processo com: código, dados, heap, stack e PCB associado pelo SO
- Pegue num comando simples (ex.: ls ou notepad) e descreva: programa em disco → pedido ao SO → criação de processo → início de execução

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]* `;
