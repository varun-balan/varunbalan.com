# varunbalan.com

My personal website — live at **[varunbalan.com](https://varunbalan.com)**.

Built with [React](https://react.dev/) (bootstrapped with [Create React App](https://github.com/facebook/create-react-app)) and hosted on **AWS Amplify**, which auto-deploys on every push to the `main` branch.

## Tech stack

- **React 18** + **react-router-dom** — UI
- **Create React App** (`react-scripts`) — build tooling
- **AWS Amplify Hosting** — build, deploy, CDN, and custom domain
- **Amazon S3** — hosts the resume PDF linked from the homepage

## Local development

```bash
npm install      # first time only
npm start        # starts the dev server at http://localhost:3000
```

The page hot-reloads as you edit. Lint warnings show in the terminal and browser console.

### Previewing desktop vs. mobile

There's nothing extra to install — use your browser's built-in device tools:

- **Chrome / Edge:** open DevTools (`Cmd+Option+I`), then toggle the device toolbar (`Cmd+Shift+M`). Pick a device preset or drag to resize; the pixel width shows as you go.
- **Quick check:** just drag the browser window narrow/wide.
- **On a real phone:** with `npm start` running, visit `http://<your-computer-LAN-IP>:3000` from a phone on the same Wi-Fi (find the IP with `ipconfig getifaddr en0`).

## Other scripts

| Command | What it does |
|---|---|
| `npm start` | Run the dev server (`http://localhost:3000`) |
| `npm run build` | Produce an optimized production build in `build/` |
| `npm test` | Run the test runner in watch mode |

You normally never run `npm run build` by hand — Amplify does it on deploy (see below).

## Deployment (AWS Amplify)

This site uses **continuous deployment**: there is no manual deploy step. The flow is:

1. You commit and push to `main`:
   ```bash
   git push origin main
   ```
2. The GitHub repo (`varun-balan/varunbalan.com`) is connected to an AWS Amplify app. Amplify is notified of the push via a webhook.
3. Amplify spins up a build, runs the build steps (install deps → `npm run build`), and publishes the contents of the `build/` folder to its CDN.
4. Once the build succeeds, the new version is live at **varunbalan.com** — usually within a couple of minutes.

You can watch build progress and see logs in the **AWS Amplify Console** for this app.

### Build settings

Amplify uses the standard Create React App build settings (configured in the Amplify Console, not committed to this repo). The equivalent build spec is:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: build
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

> To pin these settings in the repo instead of the console, save the block above as `amplify.yml` at the project root — Amplify will use that file on the next build.

### Custom domain

`varunbalan.com` is connected to the Amplify app under **Domain management** in the Amplify Console, which provisions the TLS certificate and DNS records. No DNS changes are needed for normal deploys.

### Rolling back

If a deploy goes wrong, the Amplify Console keeps previous builds — you can redeploy an earlier successful build, or revert the offending commit on `main` and push (which triggers a fresh deploy).
