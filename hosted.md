---
title: Hosted apps
description: How people sign in to the ticket UI, operator console, and business console.
---

# Hosted apps

Copyright (c) 2026 Devrecated.

Autodevelop hosted apps do not offer public registration. The Cursor plugin token under **Plugins → Configure** is not a website login.

| App | Who signs in | How they get an account |
|---|---|---|
| Ticket UI | Organization members | An operator invites the member. The member signs in and files a typed request. They can review tickets they filed. The same UI opens from a button in your product ([Integration](integration.md)). |
| Operator console | Operators | Create the user in the dashboard, then they sign in. Operators connect GitHub, invite members, and review the organization. |
| Business console | Owners and executives | An operator assigns access, then they sign in. Owners review work, team activity, delivery value, weekly jobs, usage, payment, and weekly meetings. |
| CLI login | People who run the Autodevelop CLI | The same email and password. The CLI opens this page with a device code. |

An operator issues each subscription. The secret is shown once. Never commit it.

When an organization is lapsed or canceled, paid tools return **`Your billing has expired`**. GitHub issues and instance `config.json` stay in the consumer repository.

Root license is [PolyForm Noncommercial](https://github.com/devrecated/autodevelop-docs/blob/master/LICENSE.md). Commercial use needs a license from Devrecated.

## Related

- [Client guide](guide.md)
- [CLI](cli.md)
- [GitHub App](github.md)
- [Integration](integration.md)
