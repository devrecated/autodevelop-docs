---
title: Initial setup
description: Install the private package, sign in, connect the GitHub App, and run doctor.
---

# Initial setup

First day on a repository, or mail / board commands started failing.

1. In the consumer repo, install the private package the operator issued.
2. Sign in: `npx @devrecated/autodevelop login`. A lapsed organization stops with `Your billing has expired`.
3. Add an instance folder and `people.json` ([Configure](../configure.md)).
4. Connect GitHub: `npx @devrecated/autodevelop github init` ([GitHub App](../github.md)).
5. Then:

```bash
pnpm doctor
pnpm doctor -- --fix
```

Doctor exits non-zero on hard misses. `--fix` prints the next commands. Neither writes email nor invents a confirm token.

## What must work

- `node`, `npm` or `pnpm`
- The private `@devrecated/autodevelop` package installed from the operator-issued tarball
- A paid organization and a stored CLI credential
- Autodevelop GitHub App installed on the customer org
- Instance `config.json` with Project and field ids
- Staging Firebase credentials for mail (never print the key)
- `.cursor/hooks.json`

Next: [create tickets](create-tickets.md). If something fails: [when something breaks](when-something-breaks.md).
