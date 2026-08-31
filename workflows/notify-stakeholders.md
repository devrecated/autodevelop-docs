---
title: Notify stakeholders
description: Send allowlisted stakeholder mail only after an explicit confirm. Hooks never send mail.
---

# Notify stakeholders

Stakeholder email is written only after you confirm the draft. Recipients must be on `mail.allowlist`. To send elsewhere, retype the address.

1. Review **to, subject, body-as-text, ticket link, and project**.
2. Say yes.
3. Confirm with the token the agent shows. Do not invent a token.

Hooks never send mail and never invent a confirm token.

Recipients are `people.json` stakeholders plus anyone marked always-notify.
