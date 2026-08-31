---
title: Ship to staging
description: Local staging ship. Phrase DEPLOYED TO STAGING is required before staging env or deploy scripts.
---

# Ship to staging

Local staging deploy. Git `master` is staging unless the instance renamed the staging branch. There is no `main` unless the instance names it.

1. If HEAD is a feature branch, land it on the staging branch first.
2. HEAD must be the staging branch and match the remote.
3. Do not run staging env or deploy scripts until this conversation contains `DEPLOYED TO STAGING` (all caps).

If the instance requires a staging push phrase, that phrase is `YES PUSH TO MASTER`.

Confirm the app project is staging. Do not switch to production env.
