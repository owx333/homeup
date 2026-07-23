# HomeUP

Marketing site for **HomeUP Management Sdn Bhd** — one-stop renovation & property solutions in the Klang Valley.

**Live:** [https://www.guanzun.my/homeup/](https://www.guanzun.my/homeup/)

## Stack

- Next.js (static export)
- Tailwind CSS v4
- Framer Motion
- EN / 中文 toggle

## Local

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:3000/homeup](http://127.0.0.1:3000/homeup) (`basePath` is `/homeup`).

## Deploy

Static files are published into [`owx333/manisystem`](https://github.com/owx333/manisystem) under `/homeup` (GitHub Pages for `www.guanzun.my`).

Pushing to `main` runs `.github/workflows/deploy.yml`.

For CI cross-repo push, add a repo secret `DEPLOY_TOKEN` (classic PAT with `repo` scope) on this repository. Without it, deploy from your machine:

```bash
npm run build
# then copy ./out into manisystem/homeup and push
```
