# US023 — Configuração avançada da IA (Ollama vs Groq, prompts, temperatura)

**Épico:** Enhanced  
**Phase:** Phase 2 — Enhanced  
**Prioridade:** Baixa/Média  
**Status:** Planeado

## Resumo

Permitir configurar provedor/modelo/parâmetros e prompts do pipeline e geração de conteúdo.

## Requisitos

- Escolher provedor (local vs cloud) e modelo.
- Ajustar parâmetros (temperatura, max tokens, etc.) com defaults seguros.
- Persistir configurações localmente por utilizador.

## Ports

- Entrada: `UpdateAiSettingsUseCase`, `GetAiSettingsUseCase`
- Saída: `IAiSettingsRepository`
