---
title: Ship to production
description: Promote staging to production, then a local production deploy. Phrase DEPLOYED TO PRODUCTION is required.
---

# Ship to production

On a two-branch instance, staging is `master` and production is `release` unless the instance renamed them.

1. Promote staging to production after `YES PUSH TO RELEASE` (git).
2. A local production deploy needs `DEPLOYED TO PRODUCTION` (all caps) before production env or deploy scripts.
3. A hotfix on the production branch does not merge staging.

Ask stakeholders before the promote when your process requires it. Send a release digest after Done tickets land.

A single-branch instance has no separate production branch. Use the staging ship path there.
