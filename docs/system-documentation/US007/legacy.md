# US007 — Preview + correção manual básica dos dados extraídos

**Épico:** Pipeline de Ingestão de PDFs  
**Phase:** Phase 1 — MVP  
**Prioridade:** Alta  
**Status:** Planeado

## Resumo

Como estudante, quero ver um preview do que foi extraído do PDF e corrigir manualmente erros óbvios.

## Requisitos

### User story

Como estudante, quero validar (e corrigir) tópicos/perguntas extraídas antes de jogar, para evitar estudo com base em dados errados.

### Critérios de aceitação

- O sistema mostra um preview dos outputs do pipeline por cadeira.
- O utilizador consegue editar pelo menos:
  - `SubjectType` (override US005)
  - perguntas (texto), opções e resposta correta
  - explicação (opcional)
- As alterações ficam persistidas localmente como “override” do conteúdo.
- É possível reverter overrides.

## Domínio (design)

- `UserOverride`: patch sobre o conteúdo extraído
- Regras: overrides não destroem o original (são camada adicional)

## Ports

- Entrada: `ReviewExtractedContentUseCase`
- Saída: `IOverridesRepository`, `IKnowledgeBaseRepository`

## Adapters

- UI: editor simples (lista/edição inline)
- Persistência: storage local-first
