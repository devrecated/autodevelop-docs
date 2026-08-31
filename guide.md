---
title: Client guide
description: How to use Autodevelop day to day — install, tickets, confirmed mail, and ship phrases.
---

# Client guide

Copyright (c) 2026 Devrecated.

This page is the handbook you can send to a team. It covers how the product is used after install.

## Day to day

| Step | What you do | What you say |
|---|---|---|
| Install once | Import the Cursor plugin, then reload the window | `/import-autodevelop` |
| Sign in | Authorize this machine and install the organization pack | `pnpm autodevelop login` or `npx @devrecated/autodevelop login` |
| Connect GitHub | An operator installs the Autodevelop GitHub App on the GitHub org | Connect GitHub in the operator console |
| Check the machine | Run doctor. It never sends mail | `pnpm doctor` |
| File or claim work | A request becomes a numbered preview, then a board ticket | **create**, **use #N**, or claim an item |
| Mail a stakeholder | Review to, subject, body-as-text, and ticket link | An explicit yes, then the confirm token |
| Ship | Land git, then deploy only after the matching phrase | `YES PUSH TO MASTER`, `DEPLOYED TO STAGING`, `YES PUSH TO RELEASE`, `DEPLOYED TO PRODUCTION` |

Details: [Install](install.md), [CLI](cli.md), [GitHub App](github.md), [Configure](configure.md).

Organization members who use the **ticket UI** are invited, then they sign in. They choose a request type (bug, improvement, tweak, new feature, new microfrontend, or new web app) and answer the questions for that type. The same UI can open from a button or link in your own product. There is no public registration.

Owners and executives sign in to the **business console** to review work, team activity, delivery value, usage, payment, and weekly meetings. An operator assigns what each person can do.

The Cursor plugin uses a subscription token under **Plugins → Configure**. That token is not a website login.

## What you can do

| Area | What it is for |
|---|---|
| Tickets and the board | Turn a request into a GitHub Project issue, claim it, comment, and verify acceptance |
| Stakeholder mail | Draft allowlisted email. Hooks never send. A human confirms every draft |
| Ship | Phrase-gated git and local deploys. Staging and production stay separate unless the instance is single-branch |
| Setup | Plugin, CLI, GitHub App, instance files, and `pnpm doctor` |
| In-app tickets | Open submit and “my tickets” from a button or link in your application |

## Workflows

| Workflow | When |
|---|---|
| [Initial setup](workflows/initial-setup.md) | First day, or mail / `gh` broke |
| [Create tickets](workflows/create-tickets.md) | Notes or a chat request → GitHub Project issues |
| [Notify stakeholders](workflows/notify-stakeholders.md) | Confirmed stakeholder mail |
| [Ship to staging](workflows/ship-to-staging.md) | Local staging. Phrase `DEPLOYED TO STAGING` |
| [Ship to production](workflows/ship-to-production.md) | Production ship. Phrase `DEPLOYED TO PRODUCTION` |
| [When something breaks](workflows/when-something-breaks.md) | Doctor, billing, preview denied |

## What Autodevelop does not do

- **No Jira, Linear, Asana, or Trello.** The shipped board is GitHub Projects.
- **No SMTP as shipped.** Mail uses Firestore on the consumer Firebase project.
- **Hooks never send mail** and never invent a confirm token.
- **Hooks never create issues** in the same turn as the numbered preview.
- **No public signup** on the ticket UI. Members are invited, then they sign in.
- **Doctor is not a deploy.** `--fix` prints commands. It does not write mail.

## Next

- [Install](install.md)
- [CLI](cli.md)
- [Integration](integration.md)
