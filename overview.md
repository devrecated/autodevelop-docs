---
title: What is Autodevelop
description: A Cursor plugin that turns requests into GitHub Project tickets, keeps an audit trail, and sends allowlisted stakeholder mail only after an explicit confirm.
---

# What is Autodevelop

Copyright (c) 2026 Devrecated.

Autodevelop turns an AI coding tool into a project-management and communication layer. Work is planned, executed, verified, and reported without leaving the editor.

## What you get

- **Tickets are the source of truth.** Chat, notes, or the ticket UI become GitHub Project issues with acceptance criteria. Product work does not ship without a ticket.
- **An audit trail.** Claim, progress, verification, pull requests, and stakeholder email write back to the ticket.
- **Confirmed stakeholder mail.** Email is written only after an explicit confirmation, and only to allowlisted recipients.
- **Ship gates.** Staging and production deploys wait for an exact phrase in that conversation.
- **Hosted surfaces.** Invited members file tickets. Operators connect GitHub and manage the organization. Owners review work and delivery.

## How a request flows

1. Someone files a request in chat, from notes, or in the ticket UI.
2. Autodevelop opens a GitHub Project ticket with acceptance criteria.
3. A developer claims the ticket in Cursor and implements the work.
4. Progress and verification stay on the ticket.
5. A pull request and optional preview follow.
6. Stakeholder mail goes out only after the human confirms the draft.

## Next

- [Client guide](guide.md)
- [Install](install.md)
- [CLI](cli.md)
- [GitHub App](github.md)
