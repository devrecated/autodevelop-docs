---
title: Initial setup
description: Install the plugin, sign in, connect the GitHub App, and run doctor.
---

# Initial setup

First day on a repository, or mail / board commands started failing.

1. Install the plugin ([Install](../install.md)): `pnpm autodevelop:import --apply`, then Reload Window.
2. In the consumer repo, add an instance folder and `people.json` ([Configure](../configure.md)).
3. Sign in: `pnpm autodevelop login` (or `npx @devprecated/autodevelop login`). A lapsed organization stops with `Your billing has expired`.
4. An operator opens **Connect GitHub**, installs the Autodevelop GitHub App, and saves the Project ([GitHub App](../github.md)).
5. Developers use `pnpm autodevelop github token` when `gh` should act as the App. The CLI prints expiry, not the token.
6. Then:

```bash
pnpm doctor
pnpm doctor -- --fix
```

Doctor exits non-zero on hard misses. `--fix` prints the next commands. Neither writes email nor invents a confirm token.

## What must work

- `node`, `pnpm`
- A paid organization and a stored CLI or plugin token
- Autodevelop GitHub App installed on the customer org
- Instance `config.json` with Project and field ids
- Staging Firebase credentials for mail (never print the key)
- `.cursor/hooks.json`

Next: [create tickets](create-tickets.md). If something fails: [when something breaks](when-something-breaks.md).
