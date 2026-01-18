export const B115 = `
# Arquitetura de um Sistema Operacional

## 📋 Visão Geral

A arquitetura de um sistema operacional descreve como o SO se organiza internamente para gerir recursos e oferecer serviços a aplicações e utilizadores.
Em sistemas de propósito geral, é comum pensar nessa arquitetura em camadas: hardware, kernel, serviços do sistema e aplicações.

---

## 🎯 Visão em Camadas (Modelo Conceitual)

### Camadas Básicas

De forma simplificada, um sistema de computação com SO pode ser visto assim:

- Hardware: CPU, memória, discos, rede, dispositivos de E/S
- Sistema Operacional (kernel + serviços): gere recursos e expõe chamadas de sistema às aplicações
- Programas de sistema: compiladores, shells, utilitários, bibliotecas
- Aplicações de utilizador: editores, browsers, IDEs, serviços, etc.

### Diagrama em Camadas

\`\`\`mermaid
graph TB
    A[Aplicações de Utilizador] --> B[Programas de Sistema<br/>Shells, Compiladores, Utilitários]
    B --> C[Núcleo do SO (Kernel)<br/>Gestão de CPU, Memória, IO, Sistema de Ficheiros]
    C --> D[Hardware<br/>CPU, Memória, Discos, Rede, Dispositivos]

    style A fill:#dcfce7
    style B fill:#e0f2fe
    style C fill:#fee2e2
    style D fill:#f3e5f5
\`\`\`

---

## 💡 Componentes Essenciais da Arquitetura

### Núcleo (Kernel) do SO

- Parte central do sistema operacional, responsável por gerir processos, memória, dispositivos de E/S e sistema de ficheiros.
- Fornece um conjunto de chamadas de sistema que as aplicações usam para pedir serviços (criar processos, abrir ficheiros, comunicar com dispositivos, etc.).

### Interface de Sistema (Chamadas de Sistema)

- Aplicações não acedem diretamente ao hardware; em vez disso, invocam funções do SO através de chamadas de sistema.
- O kernel valida pedidos, aplica políticas de proteção e coordena o acesso a recursos físicos, garantindo isolamento entre programas.

---

## 🧠 Arquitetura em Sistemas de Propósito Específico vs Geral

### Sistemas Sem SO Tradicional (Bare-Metal)

- A arquitetura é essencialmente: Aplicação + bibliotecas → Hardware, sem camada de kernel genérico.
- O próprio programa principal assume a lógica de inicialização, gestão de interrupções e acesso direto a registos e periféricos.

### Sistemas com RTOS

- RTOS adiciona um kernel enxuto com escalonador de tarefas, mecanismos de comunicação e sincronização, gestão de memória e tratamento de interrupções com tempos garantidos.
- A aplicação é decomposta em tarefas/threads, e o kernel do RTOS decide qual tarefa corre em cada instante para cumprir prazos temporais.

---

## 📊 Arquitetura de um Sistema de Propósito Geral

### Vista "Hardware ↔ SO ↔ Aplicações"

Num sistema de propósito geral, como PCs e smartphones:

- Hardware: máquina física que executa as instruções.
- Sistema Operacional: software especializado que gere CPU, memória, IO e ficheiros, mantendo o sistema estável e eficiente.
- Programas de sistema + aplicações: usam chamadas de sistema para obter serviços do SO sem aceder diretamente a recursos físicos.

### Diagrama Conceitual

\`\`\`mermaid
graph LR
    HW[Hardware] --> OS[Sistema Operacional]
    OS --> SP[Programas de Sistema]
    OS --> AP[Aplicações de Utilizador]

    style HW fill:#f9fafb,stroke:#cbd5f5
    style OS fill:#fee2e2,stroke:#f97373
    style SP fill:#e0f2fe,stroke:#60a5fa
    style AP fill:#dcfce7,stroke:#22c55e
\`\`\`

---

## 🎥 Material em Vídeo

### Estrutura de Sistemas Operacionais
<iframe width="560" height="315" src="https://www.youtube.com/embed/Vz9V8uYna3Y" title="Operating System Structure: Kernel, System Calls and User Space" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Kernel, User Space e System Calls
<iframe width="560" height="315" src="https://www.youtube.com/embed/26QPDBe-NB8" title="Operating Systems Basics (Kernel and User Space Concepts)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Leitura / Slides

- Introdução a sistemas operacionais (computers with OS, multiprogramming, time-sharing)
- General purpose systems (hardware, operating system, system and application programs, utilizadores)

### Rotinas Práticas

- Desenhe dois diagramas de arquitetura:
  1. Sistema bare-metal (Aplicação → Hardware)
  2. Sistema de propósito geral (Aplicações → SO → Hardware), indicando o papel das chamadas de sistema
- Pegue numa operação simples (ex.: escrever num ficheiro) e descreva os passos: chamada de sistema da aplicação, verificação pelo kernel, acesso ao dispositivo de disco.

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]*
`;
