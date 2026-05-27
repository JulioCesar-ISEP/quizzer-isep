# Roadmap AprendiFluxo

## Phase 1: MVP (Foco: 1 utilizador estudar 3 cadeiras do zero ao Survival Mode)

Objetivo: upload dos PDFs, pipeline mínimo funcional, geração de minijogos e Survival Mode com adaptatividade básica.

### Epic 1: Configuração Inicial

- **US001**: Configurar perfil básico (nome, curso, ano)
- **US002**: Criar e gerir até 3 cadeiras

### Epic 2: Pipeline de Ingestão de PDFs

- **US003**: Upload de PDF Teórico
- **US004**: Upload de PDF de Exames Anteriores
- **US005**: Classificação automática do tipo da cadeira (`CALCULUS`, `DISCRETE_MATH`, `CODE`, `SYSTEMS`)
- **US006**: Executar Pipeline completo de processamento (Builder Pattern)
- **US007**: Preview + correção manual básica dos dados extraídos
- **US008**: Reprocessar uma cadeira

### Epic 3: Motor de Minijogos

- **US009**: Jogar Diff (adaptado por `SubjectType`)
- **US010**: Jogar Molde (templates/lacunas)
- **US011**: Jogar Follow Bit
- **US012**: Jogar Survival Mode (simulador de exame)

### Epic 4: Adaptatividade Básica + Progresso

- **US013**: Sistema adaptativo simples (erro no Survival → sugerir/forçar minijogo corretivo)
- **US014**: Guardar progresso básico por cadeira
- **US015**: Ver progresso simples por cadeira (taxa de acerto)

## Phase 2: Enhanced (Melhoria de Experiência e Robustez)

Objetivo: tornar o sistema agradável, estável e útil no dia a dia.

- **US016**: Sistema de Repetição Espaçada (Spaced Repetition)
- **US017**: Deteção automática de tópicos fracos
- **US018**: Recomendação inteligente da próxima sessão
- **US019**: Guardar e retomar sessões
- **US020**: Modo Treino Livre
- **US021**: Estatísticas mais detalhadas por cadeira
- **US022**: Histórico de sessões
- **US023**: Configuração avançada da IA (Ollama vs Groq, prompts, temperatura)
- **US024**: Feedback motivacional após jogos
- **US025**: Tutoriais interativos dos minijogos
- **US026**: Tema dark/light + melhorias de UI/UX
- **US027**: Exportar relatório básico de progresso

## Phase 3: Advanced / Full (Versão Completa e Escalável)

Objetivo: produto maduro com gamificação, análise e expansão.

- **US028**: Autenticação completa + segurança
- **US029**: Sistema de pontos, níveis e streaks
- **US030**: Conquistas (achievements)
- **US031**: Notificações inteligentes (lembretes diários, streak alerts)
- **US032**: Dashboard global com gráficos e heatmaps
- **US033**: Exportar relatório completo em PDF
- **US034**: Backup / importar cadeira
- **US035**: Eliminar dados de uma cadeira com segurança
- **US036**: Modo Offline (cache de jogos)
- **US037**: Análise preditiva de desempenho
- **US038**: Suporte a múltiplos cursos
- **US039**: Partilha de cadeira com colegas (read-only)
- **US040**: Reportar problemas + feedback de qualidade dos PDFs

## Estado atual (hoje)

- **Concluído**: rebrand + arquitetura hexagonal no frontend
- **Em progresso**: US015 (Survival Mode — contrato + motor + integração UI)
- **Pendente**: US001–US014 (pipeline e minijogos Diff/Molde/Follow Bit)

**Última atualização:** 2026-05-26
