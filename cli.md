---
title: Autodevelop CLI
description: Sign in on this machine, apply the kit tar, install the organization pack, and mint a short-lived GitHub App token.
---

# Autodevelop CLI

Copyright (c) 2026 Devrecated.

The customer CLI authorizes a developer machine for a paid Autodevelop organization. An operator issues the private `@devrecated/autodevelop` package. `login` writes skills into this repository, then the organization pack ([Install](install.md)).

```bash
npx @devrecated/autodevelop
npx @devrecated/autodevelop login
npx @devrecated/autodevelop logout
npx @devrecated/autodevelop status
npx @devrecated/autodevelop install [--slug <instance>]
npx @devrecated/autodevelop github init
npx @devrecated/autodevelop github status
npx @devrecated/autodevelop github token
```

In a kit checkout the same commands are `pnpm autodevelop …`.

`AUTODEVELOP_HOST` selects the host when you are not on the default production host. Consumer apps select the API with `AUTODEVELOP_API_ORIGIN` and the ticket UI with `NEXT_PUBLIC_AUTODEVELOP_TICKETS_ORIGIN`. Local sandbox defaults apply only on a local machine. `AUTODEVELOP_TOKEN` wins over the credentials file when set. Do not put the token in `config.json`.
