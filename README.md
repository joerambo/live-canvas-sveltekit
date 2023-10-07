<picture>
  <source media="(prefers-color-scheme: dark)"  srcset="/static/gh-live-canvas.png">
  <source media="(prefers-color-scheme: light)" srcset="/static/gh-live-canvas.png">
  <img alt="Live Canvas: Real-Time Canvas Collaboration" src="/static/gh-live-canvas.png">
</picture>

# Live Canvas

Experiment with real-time canvas collaboration using sveltekit.

The goal is to create an interactive canvas with controls to manipulate images and text. Users create projects and share sessions with external users for real-time collaboration. Projects always reflect the latest canvas state from the most recent session without the need for timed autosaves or user interaction.

## Stack

List of key libraries and services used in the project.

###### note: list may change over the course of the project while trying different strategies. I'll update as roadmap items are closed and considered stable.

| library / service                            | scope       | description                      |
| :------------------------------------------- | :---------- | :------------------------------- |
| [SvelteKit](https://github.com/sveltejs/kit) | `framework` | app framework with svelte + vite |

## Roadmap

- [ ] layout - app structure and core pages
- [ ] auth - user sign up / sign in
- [ ] projects - create new project with general settings
- [ ] projects - launch and edit existing project
- [ ] projects - share collaborative session via url

## Develop

#### Setup

```bash
# create environment variables
cp .env.example .env

# install packages
pnpm install
```

#### Local Dev Server

```bash
pnpm dev

# shortcuts:
  # r - to restart server
  # u - to show server url
  # o - to open in browser
  # c - to clear console
  # q - to quit
```

## Build / Preview

```bash
# output production build
pnpm build

# preview production build
pnpm preview
```
