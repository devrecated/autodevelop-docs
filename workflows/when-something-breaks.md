---
title: When something breaks
description: Doctor, billing, missing config, and mail tokens — without logging secrets.
---

# When something breaks

```bash
pnpm doctor
pnpm autodevelop status
```

- Mail confirm token missing → ask the agent to issue one. Never invent a token.
- Preview denied → check `preview.firebaseProject` and `forbiddenProjects`.
- Config not found → instance folder missing or still using example placeholders.
- Hooks silent → the hook path is missing from `.cursor/hooks.json`.
- `Your billing has expired` → the organization is lapsed or the token was revoked. Ask the operator to set the organization active and issue a new token.
- GitHub token fails → confirm **Connect GitHub** finished ([GitHub App](../github.md)), then run `pnpm autodevelop github token` again.

Do not log mail bodies, tokens, or raw personal data.

Credential map: [Integration](../integration.md).
