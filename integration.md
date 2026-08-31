---
title: Integration
description: Add Autodevelop to a product repository, store credentials the team owns, and embed the ticket UI.
---

# Integration

Copyright (c) 2026 Devrecated.

How Autodevelop is wired into a product repository, how each machine signs in, and how a customer application opens the ticket UI.

Day-to-day use: [Client guide](guide.md). Plugin install: [Install](install.md). CLI: [CLI](cli.md).

## Add Autodevelop to a repo

Work in the **consumer** product repo.

1. Choose an instance folder slug (`<instance>`, kebab-case). It must not be `autodevelop` or `third-party`.
2. Import the plugin on one machine and reload Cursor ([Install](install.md)).
3. Sign in: `pnpm autodevelop login`.
4. An operator connects the GitHub App ([GitHub App](github.md)).
5. Commit only the instance trees:

```text
.cursor/skills/<instance>/
.cursor/rules/<instance>/            # if you have organization-specific rules
.cursor/hooks/<instance>/            # if you have organization-specific hooks
.cursor/skills/<instance>/autodevelop/config.json
.cursor/skills/<instance>/autodevelop/people.json
.cursor/skills/<instance>/autodevelop/.policies/
.cursor/hooks.json                   # merge Autodevelop hooks; keep your own
```

6. Do not commit a copy of the shared plugin trees once the plugin is installed.
7. Fill `people.json` ([Configure](configure.md)).
8. Run `pnpm doctor`.

Each additional developer imports the plugin, signs in, and reloads Cursor. They do not copy another organization’s instance folder.

## Credentials the team adds

Bindings are not secrets. Secrets never go in git, chat, or handbook examples.

| Item | Where | Secret? |
|---|---|---|
| Board ids, preview project, mail allowlist | Consumer `config.json` | No |
| Names, GitHub logins, emails | Consumer `people.json` | PII. Do not log raw |
| GitHub CLI (operator fallback) | `gh auth login` on that machine | Yes. Lives in the `gh` store |
| Staging Firebase for mail | ADC or a gitignored local staging key | Yes. Key **names** only in chat |
| Subscription token | Plugin **Configure**, `AUTODEVELOP_TOKEN`, or the CLI credentials file | Yes. Shown once. Never print it |

Do not put GitHub tokens, Firebase JSON, or the subscription token in `config.json`.

## Embed tickets in your application

Invited members can open the same ticket UI from your product. Add a link or button and load `embed.js` from the Autodevelop ticket origin.

```html
<a
  href="https://tickets.example.com/?embed=1&view=submit"
  class="autodevelop-trigger"
  data-autodevelop="tickets"
  data-autodevelop-view="submit"
  >Request a change</a
>
<script src="https://tickets.example.com/embed.js" defer></script>
```

Replace the origin with the ticket host your operator gives you. `data-autodevelop-view` is `submit` or `mine`. Optional `data-autodevelop-theme` is a JSON object of theme tokens (`primary`, `background`, `foreground`, `radius`, `fontSans`, optional `logo`).

Sign-in stays on the Autodevelop origin. Do not put a subscription token on the customer page. Every embed surface shows Autodevelop, a Devrecated Solutions product.

Without JavaScript, the `href` opens the full ticket UI.

## Related

- [Configure](configure.md)
- [Hosted apps](hosted.md)
- [Initial setup](workflows/initial-setup.md)
