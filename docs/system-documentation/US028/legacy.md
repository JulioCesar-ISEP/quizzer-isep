# US028 — Autenticação completa + segurança

**Épico:** Advanced / Full  
**Phase:** Phase 3 — Advanced  
**Prioridade:** Baixa (Phase 3)  
**Status:** Planeado

## Resumo

Adicionar autenticação e segurança (contas, permissões, proteção de dados) quando o produto evoluir para multi-utilizador/sync.

## Requisitos

- Login/logout, gestão de sessão.
- Políticas de segurança (tokens, armazenamento seguro).
- Migração de local-first “single-user” para sync com identidade.

## Ports

- Entrada: `AuthUseCases` (login/logout/register)
- Saída: `IAuthProviderPort`, `IUserRepository`
