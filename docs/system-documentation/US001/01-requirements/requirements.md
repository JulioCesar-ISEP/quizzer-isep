# US001 — Requisitos

## História de Utilizador

> Como **estudante**, quero **configurar o meu perfil básico** (nome, curso, ano) para que o sistema possa personalizar a experiência e apresentar os meus dados no dashboard.

## Requisitos Funcionais

| ID | Requisito |
|---|---|
| RF-001.1 | O sistema apresenta um ecrã de configuração de perfil na primeira utilização (ausência de perfil guardado). |
| RF-001.2 | O utilizador pode introduzir o seu nome (obrigatório). |
| RF-001.3 | O utilizador pode seleccionar o seu curso a partir de uma lista predefinida. |
| RF-001.4 | O utilizador pode seleccionar o seu ano lectivo (1.º ao 5.º ano). |
| RF-001.5 | O perfil é guardado localmente após confirmação. |
| RF-001.6 | O utilizador pode editar o perfil a qualquer momento nas definições. |
| RF-001.7 | O nome do utilizador é apresentado no cabeçalho da aplicação. |

## Requisitos Não Funcionais

| ID | Requisito |
|---|---|
| RNF-001.1 | O perfil é persistido no localStorage com a chave `aprendifluxo-user-profile`. |
| RNF-001.2 | A configuração inicial não requer ligação à internet. |
| RNF-001.3 | O perfil deve ser legível por qualquer componente via port `IUserProfileRepository`. |

## Critérios de Aceitação

- [ ] Dado que não existe perfil, quando a aplicação é aberta, então é apresentado o ecrã de configuração.
- [ ] Dado que o utilizador preenche nome e curso, quando confirma, então o perfil é guardado e o ecrã principal é exibido.
- [ ] Dado que existe um perfil, quando a aplicação é aberta, então o ecrã de configuração não é exibido automaticamente.
- [ ] Dado que o utilizador acede às definições, quando edita o nome, então o novo nome é apresentado no cabeçalho.
- [ ] Dado que o campo nome está vazio, quando o utilizador tenta confirmar, então é exibida uma mensagem de erro.

## Dependências

- Nenhuma (US001 é o ponto de entrada do sistema).

## Fora de âmbito

- Autenticação ou sincronização com servidor remoto (US028 — Phase 3).
- Foto de perfil ou avatar.
