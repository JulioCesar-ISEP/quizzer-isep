export const B521 = `# Conceitos Básicos (Sistemas Distribuídos)

## 📋 Visão Geral

Um sistema distribuído é um conjunto de computadores independentes que se apresentam ao utilizador como um único sistema coerente, ligado por rede e coordenado por software. O objetivo é partilhar recursos (cálculo, dados, serviços) de forma transparente, tolerante a falhas e escalável.

---

## 🎯 Conceitos-Chave

### Nodos
Máquinas físicas ou virtuais ligadas em rede
Cada uma: SO próprio, CPU, memória, disco
Comunicação: mensagens via rede
Exemplos: servidores, Docker, VMs cloud

### Transparência
Esconder detalhes de distribuição do utilizador:
Localização: não saber onde está o recurso
Migração: recurso move-se sem interrupção
Replicação: cópias múltiplas invisíveis
Concorrência: acesso simultâneo coordenado
Falha: sistema mascara falhas parciais

### Escalabilidade
Capacidade de crescer mantendo desempenho:
Horizontal: adicionar mais nodos
Vertical: aumentar recursos por nodo
Geográfica: expandir para outras regiões
Desafio: evitar gargalos centralizados

### Tolerância a Falhas
Sistema continua operacional com falhas parciais:
Redundância: replicação dados/serviços
Deteção: heartbeats, timeouts
Recuperação: failover automático
Consistência: manter estado coerente

### Consistência
Garantias sobre visibilidade de atualizações:
Forte: todos veem mesma versão (lenta)
Eventual: convergência com delay (rápida)
Causal: ordem lógica preservada
Trade-off: CAP theorem

### Comunicação
Paradigmas de troca de mensagens:
RPC/RMI: chamadas remotas como locais
Message Queues: assíncrono (RabbitMQ, Kafka)
Pub/Sub: produtores/consumidores desacoplados
REST/gRPC: APIs HTTP e protocolos binários

---

## 📊 Comparação: Centralizado vs Distribuído

| Característica | Centralizado | Distribuído |
|---|---|---|
| Arquitetura | Único servidor | Múltiplos nodos |
| Falha | Ponto único | Tolerância parcial |
| Escalabilidade | Limitada (vertical) | Horizontal ilimitada |
| Latência | Baixa (local) | Variável (rede) |
| Complexidade | Simples | Alta (coordenação) |
| Exemplos | Desktop app, MySQL | Google, Netflix |

---

## 🎯 Arquiteturas por Tipo

### Cliente-Servidor
Latência: 10-100ms
Características: cliente solicita, servidor responde
Exemplos: Web (browser-servidor), email
Limitação: servidor pode ser gargalo

### Peer-to-Peer (P2P)
Latência: variável (50-500ms)
Características: todos os nodos iguais
Exemplos: BitTorrent, blockchain
Vantagem: descentralização total

### Multicamada (n-tier)
Latência: 20-200ms
Arquitetura: Frontend → Backend → BD → Cache
Exemplos: apps web (React + Node.js + PostgreSQL + Redis)
Vantagem: separação de responsabilidades

### Microserviços
Latência: 10-100ms por serviço
Características: serviços independentes, BD própria
Exemplos: Netflix, Uber, Amazon
Orquestração: Kubernetes

### Event-Driven
Latência: 1-50ms (assíncrono)
Características: comunicação via eventos
Exemplos: IoT, sistemas financeiros
Ferramentas: Apache Kafka, AWS EventBridge

---

## 📊 Tabela por Arquitetura

| Arquitetura | Latência Típica | Escalabilidade | Complexidade | Exemplos |
|---|---|---|---|---|
| Cliente-Servidor | 10-100ms | Média | Baixa | Web, Email |
| P2P | 50-500ms | Alta | Média | BitTorrent |
| Multicamada | 20-200ms | Alta | Média | Apps web |
| Microserviços | 10-100ms | Muito alta | Alta | Netflix, Uber |
| Event-Driven | 1-50ms | Muito alta | Alta | IoT, Trading |

---

## 💡 Exemplos Reais 2026

### Google Search
- Milhares de servidores globais
- Índice replicado, queries paralelas
- Latência: <100ms para biliões de páginas
- Arquitetura: distribuída geograficamente

### Netflix
- Microserviços AWS (centenas)
- CDN global para streaming
- Chaos Engineering: falhas intencionais
- Tolerância: ~99.99% uptime

### Blockchain (Bitcoin/Ethereum)
- Rede P2P descentralizada
- Consenso distribuído (Proof-of-Work)
- Tolerância bizantina (nodos maliciosos)
- ~15.000 nodos Bitcoin globalmente

### Cassandra (BD Distribuída)
- Eventual consistency, AP no CAP
- Latência escrita: 1-10ms
- Escalabilidade: linear com nodos
- Usado: Apple, Netflix, Instagram

---

## 🔧 Desafios Técnicos

### Relógios e Ordenação
Problema: nodos com relógios desincronizados
Soluções:
Relógios lógicos: Lamport timestamps, Vector clocks
Sincronização: NTP (Network Time Protocol)
Precisão NTP: ~1-50ms

### Consenso
Problema: acordo entre nodos (líder, valor)
Algoritmos:
Paxos: complexo, teórico
Raft: prático, mais simples
Byzantine: tolerância a nodos maliciosos
Uso: Zookeeper, etcd, Consul

### CAP Theorem
Impossível ter simultaneamente:
Consistência
Availability
Partition tolerance
Escolha:
CP: MongoDB, HBase
AP: Cassandra, DynamoDB

### Deadlocks Distribuídos
Problema: ciclos de espera entre nodos
Soluções:
Deteção: grafos de espera, timeouts
Prevenção: ordenação de locks
Timeout: abortar após X segundos

---

## 🎥 Material em Vídeo

### Introdução a Sistemas Distribuídos
<iframe width="560" height="315" src="https://www.youtube.com/embed/UEAMfLPZZhE" title="Distributed Systems Introduction" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Microserviços e Arquiteturas Modernas
<iframe width="560" height="315" src="https://www.youtube.com/embed/CdBtNQZH8a4" title="Microservices Architecture Explained" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Leitura / Slides
- "Designing Data-Intensive Applications" (Martin Kleppmann)
- Paper: "Time, Clocks, and Ordering" (Leslie Lamport, 1978)
- Curso: MIT 6.824 Distributed Systems (grátis online)

### Rotinas Práticas

Identifique sistemas distribuídos no dia-a-dia:
\`\`\`
✅ WhatsApp (mensagens replicadas)
✅ Gmail (storage distribuído)
✅ Uber (matching geoespacial)
✅ Netflix (streaming CDN)
✅ Google Maps (routing distribuído)
\`\`\`

Ferramentas populares 2026:
\`\`\`
Docker/Kubernetes: orquestração contentores
Apache Kafka: streaming eventos
Redis: cache distribuída in-memory
Consul/etcd: service discovery
Prometheus/Grafana: monitoring
\`\`\`

Experimente localmente:
\`\`\`
Docker Compose: 3 nodos Nginx + load balancer
Simular falha de 1 nodo → observar failover
Testar latência com/sem cache Redis
\`\`\`

Pergunta: Facebook Messenger é CP ou AP no CAP?
Resposta: AP (prioriza disponibilidade, eventual consistency nas mensagens).

---

*Última atualização: ${new Date().toLocaleDateString('pt-PT')}*
*Contribuidores: [Equipa de Sistemas Distribuídos]*
`