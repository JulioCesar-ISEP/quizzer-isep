# ADR-001: Arquitetura Hexagonal

**Status:** Aceite  
**Data:** 2026-05-26

## Contexto

O projeto evolui de Quizzer monolítico para AprendiFluxo com RAG, vários minijogos e backend Python.

## Decisão

Adotar Ports & Adapters: `core`, `ports`, `adapters`, `infrastructure`, `shared`.

## Consequências

- Domínio não importa React nem localStorage
- Adaptador estático será removido quando RAG estiver ativo
- Migração gradual JS → TS nos contratos
