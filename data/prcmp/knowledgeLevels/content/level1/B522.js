export const B522 = `
# Clusters vs Distribuídos

## 📋 Visão Geral

Clusters e sistemas distribuídos são formas de usar múltiplas máquinas, mas com objetivos e características diferentes. Clusters focam-se em máquinas homogéneas num ambiente controlado, enquanto sistemas distribuídos abraçam heterogeneidade e distribuição geográfica.

---

## 🎯 Conceitos-Chave

### Clusters
Conjunto de máquinas idênticas, rede rápida
Gestão: centralizada, como um único recurso
Ambiente: homogéneo, tipicamente um datacenter
Objetivos: HPC, alta disponibilidade, load balancing
Exemplos: clusters científicos, clusters BD

### Sistemas Distribuídos "Largos"
Máquinas heterogéneas, múltiplos locais
Gestão: descentralizada, autónoma por região
Ambiente: heterogéneo, multi-datacenter
Objetivos: serviços globais, replicação geográfica
Exemplos: CDNs, plataformas cloud multi-região

### Diferenças Fundamentais
**Localização**: cluster (local) vs distribuído (global)
**Homogeneidade**: cluster (uniforme) vs distribuído (variado)
**Latência**: cluster (<1ms) vs distribuído (10-300ms)
**Falhas**: cluster (raras, coordenadas) vs distribuído (frequentes, independentes)
**Gestão**: cluster (centralizada) vs distribuído (federada)

---

## 📊 Comparação: Clusters vs Distribuídos

| Característica | Cluster | Sistema Distribuído |
|---|---|---|
| Localização | Um datacenter | Múltiplos locais |
| Máquinas | Homogéneas | Heterogéneas |
| Rede | Rápida (1-10 Gbps) | Variável (Internet) |
| Latência | <1ms | 10-300ms |
| Gestão | Centralizada | Descentralizada |
| Falhas | Coordenadas | Independentes |
| Escalabilidade | Limitada (rack) | Global |
| Uso | HPC, HA | Serviços web, CDN |

---

## 🎯 Tipos de Clusters

### HPC (High Performance Computing)
Objetivo: computação paralela massiva
Latência rede: <1μs (InfiniBand)
Exemplos: simulações científicas, clima, CFD
Tecnologias: MPI, SLURM, PBS
Casos: CERN, supercomputadores Top500

### HA (High Availability)
Objetivo: disponibilidade 99.99%+
Latência failover: <5s
Exemplos: clusters BD (MySQL Cluster, Oracle RAC)
Tecnologias: Pacemaker, Corosync, DRBD
Casos: bancos, hospitais, telecoms

### Load Balancing
Objetivo: distribuir carga HTTP/TCP
Latência: <10ms
Exemplos: web servers, proxies reversos
Tecnologias: HAProxy, Nginx, F5
Casos: e-commerce, streaming

### Storage Clusters
Objetivo: armazenamento partilhado/replicado
Latência: 1-10ms
Exemplos: Ceph, GlusterFS, HDFS
Tecnologias: block/object storage
Casos: cloud storage, backups

---

## 📊 Tabela por Tipo de Cluster

| Tipo Cluster | Latência | Disponibilidade | Uso Principal | Tecnologias |
|---|---|---|---|---|
| HPC | <1μs | Média | Computação científica | MPI, InfiniBand |
| HA | <5s failover | 99.99%+ | Bases de dados críticas | Pacemaker, RAC |
| Load Balancing | <10ms | 99.9%+ | Web servers | HAProxy, Nginx |
| Storage | 1-10ms | 99.9%+ | Armazenamento partilhado | Ceph, HDFS |

---

## 💡 Arquiteturas Distribuídas Globais

### CDN (Content Delivery Network)
Distribuição: 100+ POPs globais
Latência: 10-50ms (edge caching)
Exemplos: Cloudflare, Akamai, AWS CloudFront
Objetivo: conteúdo estático próximo do utilizador
Casos: Netflix, YouTube, websites

### Multi-Region Cloud
Distribuição: 20+ regiões geográficas
Latência: 50-300ms inter-região
Exemplos: AWS, Azure, GCP
Objetivo: redundância geográfica, conformidade legal
Casos: SaaS global, e-commerce internacional

### Edge Computing
Distribuição: milhares de edge nodes
Latência: 5-20ms
Exemplos: Cloudflare Workers, AWS Lambda@Edge
Objetivo: computação próxima do utilizador
Casos: IoT, gaming, AR/VR

### P2P Global
Distribuição: descentralizado, milhões de nodos
Latência: variável (50-500ms)
Exemplos: BitTorrent, IPFS, blockchain
Objetivo: descentralização total
Casos: file sharing, Web3

---

## 📊 Tabela por Arquitetura Distribuída

| Arquitetura | Nodos | Latência Típica | Gestão | Exemplos |
|---|---|---|---|---|
| CDN | 100-1000 POPs | 10-50ms | Centralizada | Cloudflare, Akamai |
| Multi-Region | 10-30 regiões | 50-300ms | Federada | AWS, Azure, GCP |
| Edge Computing | 1000+ edges | 5-20ms | Híbrida | Lambda@Edge |
| P2P Global | Milhões | 50-500ms | Descentralizada | BitTorrent, IPFS |

---

## 🔧 Desafios Específicos

### Desafios de Clusters

**Scaling Vertical**:
Problema: limite físico de expansão (rack, energia)
Solução: migrar para cloud ou distribuído
Limite típico: 100-1000 nodos por cluster

**Single Point of Failure**:
Problema: datacenter inteiro pode falhar
Solução: disaster recovery, backup geográfico
Mitigação: generators, redundância ISP

**Network Bottleneck**:
Problema: switch central saturado
Solução: topologia fat-tree, RDMA
Largura de banda: 10-100 Gbps por nodo

### Desafios de Sistemas Distribuídos

**Particionamento de Rede**:
Problema: regiões isoladas (split-brain)
Solução: quorum, consensus (Raft, Paxos)
Deteção: heartbeats, timeouts

**Consistência Eventual**:
Problema: réplicas dessincronizadas
Solução: vector clocks, CRDTs
Convergência: segundos a minutos

**Latência Variável**:
Problema: WAN imprevisível
Solução: retry exponencial, circuit breakers
Variação: 10ms a 5s (congestion, falhas)

**Heterogeneidade**:
Problema: versões software diferentes
Solução: APIs versionadas, backward compatibility
Gestão: rolling updates, canary deploys

---

## 💡 Exemplos Reais 2026

### Google Search (Distribuído Global)
- Datacenters em 30+ locais
- Latência query: <100ms global
- Replicação: índice multi-região
- Tolerância: continua com DCs offline
- Arquitetura: distribuída largamente

### CERN LHC Computing (Cluster HPC)
- 170 datacenters, 1.4M cores
- Rede: 100 Gbps InfiniBand
- Latência: <1μs intra-cluster
- Processamento: 50 PB/ano
- Arquitetura: cluster científico

### Netflix Streaming (Híbrido)
- AWS multi-região (backend distribuído)
- Open Connect CDN (cluster por POP)
- Latência: 10-50ms (edge)
- Disponibilidade: 99.99%
- Arquitetura: distribuído + clusters edge

### Kubernetes Cluster (Cluster HA)
- Típico: 10-100 nodos por cluster
- Rede: Flannel, Calico (overlay)
- Latência: 1-5ms intra-cluster
- Multi-cluster: federação (distribuído)
- Arquitetura: cluster orquestrado

---

## 🎥 Material em Vídeo

### Clusters vs Distributed Systems
<iframe width="560" height="315" src="https://www.youtube.com/embed/Y6Ev8GIlbxc" title="Clusters vs Distributed Systems" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### HPC Clusters Explained
<iframe width="560" height="315" src="https://www.youtube.com/embed/5s5DXoiNDkA" title="HPC Clusters Architecture" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🔗 Recursos Adicionais

### Leitura / Slides
- "Beowulf Cluster Computing" (Sterling et al.)
- Paper: "The Google File System" (Ghemawat et al., 2003)
- Tutorial: Kubernetes Cluster Setup (oficial)

### Rotinas Práticas

Identifique clusters vs distribuídos:
\`\`\`
CLUSTERS:
✅ Supercomputador universidade (HPC)
✅ MySQL cluster 3 nodos (HA)
✅ Nginx load balancer pool (LB)

DISTRIBUÍDOS:
✅ AWS multi-região (cloud)
✅ Cloudflare CDN (edge)
✅ WhatsApp servidores globais (messaging)
\`\`\`

Tecnologias por categoria:
\`\`\`
CLUSTERS:
MPI, SLURM: HPC scheduling
Pacemaker, Corosync: HA clustering
HAProxy, Keepalived: load balancing
Ceph, GlusterFS: storage clustering

DISTRIBUÍDOS:
Kubernetes Federation: multi-cluster
Consul, etcd: service discovery
Cassandra, DynamoDB: distributed DBs
Kafka, Pulsar: distributed messaging
\`\`\`

Experimente localmente:
\`\`\`
Simular cluster:
Docker Swarm: 3 nodos num portátil
Minikube: Kubernetes local

Simular distribuído:
Docker Compose multi-host
Latência artificial: tc netem delay 100ms
\`\`\`

Pergunta: Kubernetes é cluster ou distribuído?
Resposta: Ambos. Cada K8s é um cluster, mas pode federar múltiplos clusters num sistema distribuído.

---

## 🧩 Quando Usar Cada Um?

### Use CLUSTER quando:
- Máquinas no mesmo local físico
- Latência <1ms crítica (HPC)
- Hardware homogéneo disponível
- Gestão centralizada preferida
- Budget para infraestrutura própria

### Use DISTRIBUÍDO quando:
- Utilizadores geograficamente dispersos
- Redundância geográfica necessária
- Escalabilidade global requerida
- Tolerância a falhas de datacenter
- Cloud-native, pay-as-you-go

### Híbrido (comum em 2026):
- Backend: cluster Kubernetes por região
- Global: múltiplos clusters federados
- Edge: CDN para conteúdo estático
- Exemplo: Netflix, Spotify, Uber

---

*Última atualização: 28/01/2026*
*Contribuidores: [Equipa de Sistemas Distribuídos]*
`
