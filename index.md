---
title: Autodevelop handbook
description: Install Autodevelop in a product repository, connect GitHub, and use tickets, confirmed mail, and ship gates.
---

# Autodevelop handbook

Copyright (c) 2026 Devrecated.

Autodevelop is a Cursor plugin for GitHub Projects, tickets, and confirmed stakeholder mail. These pages explain how to install it, connect the GitHub App, bind a product repository, and use the product day to day.

Start with the [Client guide](guide.md) if you are sending a link to a team. Then [install](install.md), [sign in with the CLI](cli.md), and [connect the GitHub App](github.md).

| Page | When |
|---|---|
| [What is Autodevelop](overview.md) | What the product does |
| [Client guide](guide.md) | Day-to-day use and phrases |
| [Install](install.md) | Cursor plugin once per machine |
| [CLI](cli.md) | Login, status, install, GitHub token |
| [GitHub App](github.md) | Connect GitHub from the operator console |
| [Configure](configure.md) | Instance files in the consumer repo |
| [Integration](integration.md) | Add Autodevelop to an application |
| [Hosted apps](hosted.md) | Ticket UI, operator console, business console |

## Workflows

| Workflow | When |
|---|---|
| [Initial setup](workflows/initial-setup.md) | First day: plugin, CLI, GitHub App, doctor |
| [Create tickets](workflows/create-tickets.md) | A request becomes a GitHub Project issue |
| [Notify stakeholders](workflows/notify-stakeholders.md) | Confirmed stakeholder mail |
| [Ship to staging](workflows/ship-to-staging.md) | Local staging. Phrase `DEPLOYED TO STAGING` |
| [Ship to production](workflows/ship-to-production.md) | Production ship. Phrase `DEPLOYED TO PRODUCTION` |
| [When something breaks](workflows/when-something-breaks.md) | Doctor, billing, missing config |
