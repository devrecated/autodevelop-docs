---
title: Configure an instance
description: Bind GitHub Projects, people, mail, and policies in the consumer repository — not inside the Autodevelop plugin.
---

# Configure

Copyright (c) 2026 Devrecated.

Instance data stays in the **consumer** product repo. Pick a folder name that is not `autodevelop` or `third-party`.

```text
.cursor/skills/<instance>/autodevelop/config.json
.cursor/skills/<instance>/autodevelop/people.json
.cursor/skills/<instance>/autodevelop/.policies/
.cursor/skills/<instance>/autodevelop/.configuration/
```

First day: [sign in](cli.md), then [connect the GitHub App](github.md). The pack may write Project and field ids into `config.json`. You can still fill the files by hand.

## config.json

Required:

- `github.owner`, `github.repo`, `github.projectNumber`, `github.projectId`
- Status field id and status option ids from the Project
- `mail.firestoreProject` and `mail.allowlist`
- `forbiddenProjects` (production Firebase ids Autodevelop must never write)
- `preview.firebaseProject` and `preview.baseBranch` (usually `master`)
- `board.provider` — `github` is the shipped board

Optional:

- `docs.home` / `docs.changelog` — links used in release mail
- `firebase.staging` / `firebase.production` — environment checks
- `productName` / `stakeholderLabel` — labels in generated copy
- `singleBranch` — `true` when the repo has one shared branch
- `branches.staging` / `branches.production` — git branch names (defaults `master` / `release`)

Mail today is Firestore Trigger Email on the consumer Firebase project. Do not put passwords in `config.json`.

## people.json

- `developers` — assignees (GitHub login and email)
- `stakeholders` — reviewers who receive ticket mail
- `alwaysNotify` or `alwaysNotifyEmails` — always on release digest and production-approval mail

In chat you can add people who are not in the file: type `@login` and/or an email. The agent updates `people.json` after you confirm, then invites when you say **invite**.

## Policies

Copy the kit example policy files into `.policies/`, dropping the `.example` suffix. A missing folder uses the kit defaults. Typical files:

| File | What it sets |
|---|---|
| `branch-policy.yaml` | Staging and production branch names and ask flags |
| `email-policy.yaml` | Confirm required; allowlist lives in `config.json` |
| `security-policy.yaml` | No env or admin JSON in git |
| `ticket-policy.yaml` | Ticket required for product work |
| `commit-policy.yaml` | Subject style; no force-push |
| `environments-policy.yaml` | `staging`, `production`, `preview` |

When `askStaging` or `askProduction` is true, the matching phrase is required before a push to that branch: `YES PUSH TO MASTER` or `YES PUSH TO RELEASE`.

`pnpm autodevelop login` installs the organization’s versioned policy pack into the current repository. When the hosted pack version differs from the local version, the agent asks in chat before installing again.

## Related

- [Install](install.md)
- [CLI](cli.md)
- [Initial setup](workflows/initial-setup.md)
- [Integration](integration.md)
