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

## Deployment

Hosted on **AWS Amplify** with continuous deployment — every push to the `main` branch automatically builds and deploys the site to [varunbalan.com](https://varunbalan.com).
