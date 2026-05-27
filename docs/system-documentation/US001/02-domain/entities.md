# US001 — Entidades e Regras de Domínio

## Entidade: UserProfile

Representa o perfil básico do estudante. Sem identidade remota — identificado localmente.

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `name` | `string` | ✓ | Nome do estudante |
| `course` | `string` | ✓ | Curso seleccionado |
| `year` | `number` | ✓ | Ano lectivo (1–5) |
| `createdAt` | `string` (ISO 8601) | ✓ | Data de criação do perfil |
| `updatedAt` | `string` (ISO 8601) | ✓ | Data da última actualização |

## Regras de Domínio

### RD-001.1 — Nome obrigatório e não vazio

O campo `name` não pode ser uma string vazia ou composta apenas por espaços.

### RD-001.2 — Ano lectivo válido

O campo `year` deve ser um inteiro no intervalo `[1, 5]`.

### RD-001.3 — Curso pertence ao catálogo

O campo `course` deve corresponder a um dos cursos disponíveis no catálogo predefinido da aplicação.

### RD-001.4 — Perfil único por dispositivo

Existe apenas um `UserProfile` activo por vez. Editar o perfil actualiza o existente; não cria um novo registo.

## Links

- [Contratos](../05-contracts/interfaces.ts)
- [Ports](../03-ports/ports.md)
