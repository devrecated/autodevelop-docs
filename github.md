---
title: Install the Autodevelop GitHub App
description: Connect GitHub from the operator console so Autodevelop can use the organization board and repositories.
---

# GitHub App

Copyright (c) 2026 Devrecated.

Autodevelop uses a GitHub App on your organization. Agents then act with a short-lived installation token, not a personal `gh` login. Sign-in to Autodevelop stays email and password ([CLI](cli.md)). GitHub is a connected install.

## Who installs it

An operator with organization management signs in to the **operator console** and opens **Connect GitHub**.

## Steps

1. Sign in to the operator console.
2. Open **Connect GitHub**.
3. GitHub shows the Autodevelop App install screen. Choose the GitHub organization.
4. Choose all repositories or selected repositories.
5. Finish the hosted wizard: Project, status and priority fields, and invites.
6. Save. Autodevelop stores the installation and board field ids.

The installer picks the repository set on GitHub’s screen. Autodevelop does not ask for administration or secrets permissions.

## After install

Developers on that organization run:

```bash
pnpm autodevelop github token
```

The CLI prints when the token expires and which account it is for. It does not print the token. Use it so `gh` acts as the Autodevelop GitHub App.

If the hosted wizard has not written field ids yet, an operator can still bind the Project by hand or with the bootstrap fallback ([Configure](configure.md)).

## Related

- [CLI](cli.md)
- [Initial setup](workflows/initial-setup.md)
- [Configure](configure.md)
