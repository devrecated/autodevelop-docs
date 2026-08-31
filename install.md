---
title: Install Autodevelop
description: Install the Autodevelop Cursor plugin once at user scope, then sign in and bind a product repository.
---

# Install

Copyright (c) 2026 Devrecated.

Install Autodevelop **once per machine** as a [Cursor Plugin](https://cursor.com/docs/plugins.md). Slash commands, rules, and hooks then load in every local workspace. Board ids, people, and mail settings stay in the **consumer** product repository.

How a team uses Autodevelop after install: [Client guide](guide.md). Machine login: [CLI](cli.md). GitHub: [GitHub App](github.md).

## 1. Import the plugin

From a checkout that has the kit, dry-run first:

```bash
pnpm autodevelop:import
```

If the list is right:

```bash
pnpm autodevelop:import --apply
```

Reload Cursor (**Developer: Reload Window**). The same outcome is Customize → Install → **user**.

After the first apply, `/import-autodevelop` is available in Cursor.

Do not put `config.json`, `people.json`, or instance policies in the plugin. Those files belong in the consumer repo.

## 2. Sign in

```bash
pnpm autodevelop login
```

When the thin package is published, the same command is `npx @devrecated/autodevelop login`. The CLI opens a browser page with a device code. Approve this machine. A lapsed organization stops with `Your billing has expired`.

Paste the subscription token under **Plugins → Configure** if the operator issued one. Never commit it.

## 3. Connect GitHub

An operator with org management opens **Connect GitHub** in the operator console and installs the Autodevelop GitHub App. Steps: [GitHub App](github.md).

## 4. Bind the repository

In the consumer repo, add an instance folder and people. First-day sequence: [Initial setup](workflows/initial-setup.md). Field names: [Configure](configure.md).

```bash
pnpm doctor
```

Doctor never writes mail and never invents a confirm token.

## Cloud Agents

Cloud Agents do not load user-scope plugins. Install the plugin at **project** scope in that workspace, or ask your operator for a workspace copy. Do not copy another organization’s instance folder.
