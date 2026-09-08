---
title: Install Autodevelop
description: Install the private package in the product repository, then sign in.
---

# Install

Copyright (c) 2026 Devrecated.

Install the private `@devrecated/autodevelop` package an operator issues. The package includes the kit tar. `login` writes skills, rules, hooks, and the organization pack into that repo. Board ids, people, and mail settings stay in the consumer repository.

How a team uses Autodevelop after install: [Client guide](guide.md). Machine login: [CLI](cli.md). GitHub: [GitHub App](github.md).

## 1. Install the package

Place the operator-issued tarball in the consumer repo and install it. Autodevelop is not on the public npm registry.

```bash
npm install /path/to/devrecated-autodevelop-0.1.0.tgz
```

## 2. Sign in

```bash
npx @devrecated/autodevelop login
```

The CLI opens a browser page with a device code. Approve this machine. A lapsed organization stops with `Your billing has expired`.

## 3. Connect GitHub

```bash
npx @devrecated/autodevelop github init
```

Approve the Autodevelop GitHub App. Steps: [GitHub App](github.md).

## 4. Bind the repository

In the consumer repo, add people and remaining instance fields. First-day sequence: [Initial setup](workflows/initial-setup.md). Field names: [Configure](configure.md).
