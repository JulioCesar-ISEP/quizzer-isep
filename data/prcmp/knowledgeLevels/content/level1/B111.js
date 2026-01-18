export const B111 = `
# O que é um Sistema Operacional?

## 📋 Visão Geral

Um sistema operacional (SO) é um software que atua como intermediário entre o usuário, as aplicações e o hardware do computador. Ele gerencia todos os recursos disponíveis e coordena a execução dos programas de forma eficiente e segura.

---

## 🎯 Conceitos Fundamentais

### Definição
Um Sistema Operacional é tecnicamente um conjunto de programas responsável por:
- Gerenciar recursos de hardware (CPU, memória, dispositivos de E/S)
- Fornecer uma interface entre hardware e software (chamadas de sistema)
- Controlar processos, tarefas e usuários
- Gerenciar arquivos e dispositivos de armazenamento

### Por que precisamos de um SO?

- Permite executar vários programas aparentemente ao mesmo tempo (multiprogramação)
- Resolve problemas de compartilhamento seguro de CPU, memória e dispositivos
- Oferece abstração: usuários não precisam conhecer detalhes do hardware
- Em sistemas com múltiplos programas, o SO garante isolamento, segurança e boa utilização dos recursos

---

## 💡 Características Principais

### 1. Abstração de Hardware
- Esconde detalhes de baixo nível (registradores, controladores, temporização)
- Oferece objetos simples: processos, arquivos, sockets, pipes, etc.

### 2. Gestão de Recursos
- Decide qual processo usa a CPU em cada instante (escalonamento)
- Aloca memória, controla E/S e resolve conflitos de acesso a dispositivos

### 3. Isolamento e Proteção
- Mantém programas em espaços de memória separados
- Impede acesso direto a hardware crítico; tudo passa pelo SO via chamadas de sistema

---

## 📊 Arquitetura do Sistema

\`\`\`mermaid
graph TB
    A[Usuários] --> B[Aplicações<br/>Programas do Usuário]
    B --> C[Programas do Sistema<br/>Compiladores, Shells, Utilitários]
    C --> D[Sistema Operacional<br/>Gerenciador de Recursos]
    D --> E[Hardware<br/>CPU, Memória, Discos, Rede, E/S]

    style A fill:#e1f5ff
    style B fill:#e0ffe0
    style C fill:#fff3e0
    style D fill:#ffebee
    style E fill:#f3e5f5
\`\`\`

---

## 💻 Exemplos Práticos

### Verificar informações do SO (Linux/Unix)

\`\`\`bash
# Ver processos em execução
ps aux

# Monitorizar CPU e memória
top    # ou: htop

# Listar arquivos
ls -la

# Informações do sistema
uname -a
\`\`\`

### Sistemas sem SO (Bare-Metal)

Em muitos microcontroladores e sistemas embarcados:
- O programa corre diretamente sobre o hardware, sem kernel, sem escalonador
- Vantagens: menor uso de memória e arranque mais rápido
- Ideal para funções muito específicas

---

## 🖼️ Recursos Visuais

### Camadas de um Sistema de Computação

![Camadas SO](./data/prcmp/knowledgeLevels/content/level2/images/os-layers.png)
*Visão em camadas: Usuários → Aplicações → SO → Hardware*

### Sistemas com e sem SO

![Sistemas com e sem SO](./data/prcmp/knowledgeLevels/content/level2/images/os-with-without.png)
*Comparação conceitual entre um sistema com SO e um sistema bare-metal (sem SO)*

---

## 🎥 Material em Vídeo

### Introdução a Sistemas Operacionais
<iframe width="560" height="315" src="https://www.youtube.com/embed/26QPDBe-NB8" title="Introdução a Sistemas Operacionais" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Multiprogramação e Time-Sharing
<iframe width="560" height="315" src="https://www.youtube.com/embed/_p8AdSRSZK4" title="Multiprogramming and Time Sharing in Operating Systems" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 📐 Conceitos Importantes

### Multiprogramação
- Vários programas são mantidos na memória principal ao mesmo tempo
- Quando um programa faz uma operação de E/S lenta, o SO coloca outro programa na CPU
- Evita que o processador fique ocioso

### Time-Sharing
- Extensão da multiprogramação para múltiplos usuários interativos
- Cada usuário parece ter uma máquina só para si
- O SO divide a CPU em pequenos "fatias de tempo" entre vários processos

---

## 🔗 Recursos Adicionais

### Documentação / Leitura
- Slides da disciplina:
  - Introdução a Sistemas Operacionais
  - Construção de Sistemas (propósito específico, RTOS, propósito geral)
- "Modern Operating Systems" – Andrew S. Tanenbaum
- "Operating System Concepts" – Silberschatz, Galvin, Gagne

### Tutoriais e Prática
- Procurar "Operating Systems Lab" no GitHub (mini-kernels, escalonadores)
- Projetos com microcontroladores:
  - Um firmware bare-metal (sem SO)
  - Um projeto equivalente usando RTOS (ex.: FreeRTOS)

### Comunidades
- Stack Overflow - Tag [operating-systems]
- Linux Questions
- Computer Science Stack Exchange

---

## ⚡ Comparação: Com SO vs Sem SO

| Característica | Com SO (Geral) | Sem SO (Bare-Metal) |
|----------------|----------------|-------------------|
| Número de programas | Vários, concorrentes | Normalmente um único programa |
| Overhead | Maior (kernel, escalonador, abstrações) | Menor, mais próximo do hardware |
| Flexibilidade | Alta: múltiplos usuários, aplicações diversas | Baixa: função bem específica |
| Previsibilidade | Menor, depende de carga do SO | Maior, fluxo mais controlado |
| Exemplos | PCs, smartphones, servidores | Microcontroladores, sistemas embarcados |

---

## 🎓 Rotinas Práticas

### Nível Iniciante
1. Desenhe as camadas: Usuário → Aplicações → SO → Hardware
2. Liste as três funções principais: gerenciar CPU, memória e E/S
3. Dê dois exemplos de sistemas com SO e dois sem SO

### Nível Intermediário
1. Descreva o que o SO faz quando um programa inicia uma E/S longa
2. Compare execução em série vs multiprogramação vs time-sharing
3. Pesquise um RTOS (ex.: FreeRTOS) e liste seus serviços básicos

### Nível Avançado
1. Leia sobre chamadas de sistema de um SO real (Linux: fork, execve, open)
2. Implemente um simulador de escalonador Round-Robin
3. Compare um projeto IoT bare-metal vs um com RTOS

---

## 📌 Resumo

Pontos-Chave:
- ✅ Sistema Operacional = camada que gerencia hardware e oferece serviços aos programas
- ✅ Permite multiprogramação, time-sharing e isolamento entre processos
- ✅ Sistemas sem SO continuam relevantes em aplicações específicas e embarcadas
- ✅ Entender o papel do SO ajuda a compreender tópicos relacionados

---

## 📝 Notas de Rodapé

[^1]: As chamadas de sistema (syscalls) são a forma padrão de um programa solicitar serviços ao SO
[^2]: O escalonador é o componente do SO responsável por decidir qual processo usa a CPU
[^3]: RTOS (Real-Time Operating System) é um SO otimizado para sistemas que exigem respostas em tempo real

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Lista de contribuidores]*
`;
