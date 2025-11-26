export const A111 = `
# O que é Linux?

## 📋 Visão Geral

Linux é um sistema operacional de código aberto baseado em Unix, criado por Linus Torvalds em 1991. É amplamente utilizado em servidores, dispositivos móveis, supercomputadores e sistemas embarcados.

---

## 🎯 Conceitos Fundamentais

### Definição
Linux é tecnicamente apenas o kernel (núcleo) do sistema operacional, responsável por:
- Gerenciar recursos de hardware (CPU, memória, dispositivos)
- Fornecer interface entre hardware e software
- Controlar processos e permissões
- Gerenciar sistema de arquivos

### Distribuições Linux
Uma distribuição Linux combina o kernel Linux com software adicional:
- Ubuntu/Debian: Foco em facilidade de uso
- Fedora/RHEL/CentOS: Empresarial e estável
- Arch Linux: Minimalista e personalizável
- Alpine Linux: Leve para containers

---

## 💡 Características Principais

### 1. Código Aberto
- Código fonte disponível gratuitamente
- Licença GPL (GNU General Public License)
- Comunidade ativa de desenvolvimento

### 2. Multiusuário e Multitarefa
- Múltiplos usuários simultâneos
- Isolamento de processos
- Sistema de permissões robusto

### 3. Portabilidade
- Roda em diversas arquiteturas (x86, ARM, RISC-V)
- Do smartphone ao supercomputador

---

## 📊 Arquitetura do Sistema

\`\`\`mermaid
graph TB
    A[Aplicações e Shell] --> B[Bibliotecas do Sistema glibc]
    B --> C[Kernel Linux]
    C --> D[Hardware]
    
    style A fill:#e1f5ff
    style B fill:#fff3e0
    style C fill:#ffebee
    style D fill:#f3e5f5
\`\`\`

---

## 💻 Exemplos Práticos

### Verificar versão do Kernel
\`\`\`bash
# Exibir informações do kernel
uname -a

# Exemplo de saída:
# Linux hostname 5.15.0-56-generic #62-Ubuntu SMP x86_64 GNU/Linux

# Apenas a versão
uname -r
# 5.15.0-56-generic
\`\`\`

### Informações do Sistema
\`\`\`bash
# Informações detalhadas do sistema
cat /etc/os-release

# Informações de hardware
lscpu          # CPU
free -h        # Memória
df -h          # Disco
\`\`\`

---

## 🖼️ Recursos Visuais

### Linha do Tempo do Linux
![Timeline Linux](./data/prcmp/knowledgeLevels/content/level2/images/linux-timeline.png)
*Evolução do Linux desde 1991 até hoje*

### Distribuições Populares
![Distribuições](./data/prcmp/knowledgeLevels/content/level2/images/linux-distros.jpg)
*Principais distribuições Linux e suas relações*

---

## 🎥 Material em Vídeo

### Introdução ao Linux
<iframe width="560" height="315" src="https://www.youtube.com/embed/CT6BZBzbpWA?si=RAK5TnDg3wXkvJlC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
---

## 📐 Conceitos Importantes

### Modelo de Permissões (Notação Octal)

As permissões em Linux podem ser representadas em octal:

$$
P = u \\times 2^6 + g \\times 2^3 + o \\times 2^0
$$

Onde:
- $u$ = permissões do usuário (user)
- $g$ = permissões do grupo (group)  
- $o$ = permissões de outros (others)

Cada componente é calculado como:

$$
valor = r \\times 4 + w \\times 2 + x \\times 1
$$

Exemplo:
Para permissões \`rwxr-xr--\` (755):
- User: $4 + 2 + 1 = 7$
- Group: $4 + 0 + 1 = 5$
- Others: $4 + 0 + 0 = 4$

---

## 🔗 Recursos Adicionais

### Documentação Oficial
- [The Linux Kernel Archives](https://www.kernel.org/)
- [Linux Documentation Project](https://tldp.org/)
- [GNU Operating System](https://www.gnu.org/)

### Tutoriais Recomendados
- [Linux Journey - Aprenda Linux](https://linuxjourney.com/)
- [Arch Wiki](https://wiki.archlinux.org/) - Excelente referência
- [Ubuntu Documentation](https://help.ubuntu.com/)

### Livros
- "The Linux Command Line" - William Shotts
- "How Linux Works" - Brian Ward
- "Linux Kernel Development" - Robert Love

### Comunidades
- [r/linux](https://reddit.com/r/linux) - Reddit
- [Linux Questions](https://www.linuxquestions.org/)
- [Stack Overflow - Linux Tag](https://stackoverflow.com/questions/tagged/linux)

---

## ⚡ Comparação: Linux vs Unix vs Windows

| Característica | Linux | Unix | Windows |
|---------------|-------|------|---------|
| Licença | Open Source | Proprietário | Proprietário |
| Custo | Gratuito | Pago | Pago |
| Código Fonte | Disponível | Não disponível | Não disponível |
| Interface | CLI/GUI | CLI/GUI | Principalmente GUI |
| Customização | Alta | Média | Baixa |
| Uso | Servidores, IoT, Desktop | Servidores empresariais | Desktop, Servidores |

---

## 🎓 Rotinas Práticas

### Nível Iniciante
1. Instale uma distribuição Linux em uma VM
2. Execute \`uname -a\` e interprete a saída
3. Explore o sistema de arquivos com \`ls\` e \`cd\`

### Nível Intermediário
1. Compare diferentes distribuições Linux
2. Compile um programa simples no Linux
3. Configure permissões de arquivo usando notação octal

### Nível Avançado
1. Compile o kernel Linux do zero
2. Crie sua própria mini-distribuição com Linux From Scratch
3. Contribua com um patch para um projeto open source

---

## 📌 Resumo

Pontos-Chave:
- ✅ Linux é um kernel de código aberto criado por Linus Torvalds
- ✅ Forma a base de diversas distribuições
- ✅ Amplamente usado em servidores e sistemas embarcados
- ✅ Sistema multiusuário com forte modelo de segurança
- ✅ Comunidade ativa e documentação extensa

---


## 📝 Notas de Rodapé

[^1]: Linus Torvalds anunciou o Linux em 25 de agosto de 1991 no grupo de notícias comp.os.minix
[^2]: O nome "Linux" é uma combinação de "Linus" + "Unix"
[^3]: Cerca de 96.3% dos top 1 milhão de servidores web rodam Linux (W3Techs, 2024)

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*  
*Contribuidores: [Lista de contribuidores]*
`;