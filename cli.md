---
title: Autodevelop CLI
description: Sign in on this machine, install the organization pack, and mint a short-lived GitHub App token.
---

# Autodevelop CLI

Copyright (c) 2026 Devrecated.

The customer CLI authorizes a developer machine for a paid Autodevelop organization. Cursor still loads the kit as a user-scope plugin ([Install](install.md)).

```bash
npx @devprecated/autodevelop
npx @devprecated/autodevelop login
npx @devprecated/autodevelop logout
npx @devprecated/autodevelop status
npx @devprecated/autodevelop install [--slug <instance>]
npx @devprecated/autodevelop github token
```

In a kit checkout the same commands are `pnpm autodevelop …`.

`AUTODEVELOP_HOST` selects the host when you are not on the default production host. `AUTODEVELOP_TOKEN` wins over the credentials file when set. Do not put the token in `config.json`.

## Commands

| Command | What it does |
|---|---|
| `login` | Opens a device-code page. After you approve this machine, stores a credential and installs the organization pack |
| `logout` | Removes the stored credential on this machine. Environment variables are unchanged |
| `status` | Shows whether this machine is signed in, the host, and the local pack version |
| `install` | Installs or refreshes the organization pack into the current repository |
| `github token` | Mints a short-lived GitHub App installation token for `gh`. Prints expiry and account, not the token |

## Paywall

| State | What happens |
|---|---|
| No credential | Device login opens. No pack. No GitHub token. |
| Signed in, organization not active | Stop. `Your billing has expired`. No files written. |
| Active subscription | Login, pack install, and GitHub token mint run. |

There is no public signup. An operator invites the owner, then the owner signs in.

## GitHub token

Connect the App first ([GitHub App](github.md)). Then:

```bash
pnpm autodevelop github token
```

Export `GH_TOKEN` yourself if you want `gh` to use it for that process. The CLI does not print the token. Do not persist it in `config.json`.

## Related

- [Install](install.md)
- [GitHub App](github.md)
- [Initial setup](workflows/initial-setup.md)
- [When something breaks](workflows/when-something-breaks.md)
