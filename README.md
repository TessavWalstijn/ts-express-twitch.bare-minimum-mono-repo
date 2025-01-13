# ts.simple-monorepo-test

On a recent stream of [GhostlyTuna](https://www.twitch.tv/ghostlytuna) we discovered some issues in his repo.  
I originally helped him to convert his repo to TS with TSC.

However we discovered that TSC does include packages with a build.

This repo is to have a simple test environment.

The question:

> How to minimally update this to include packages
> Logically TSC should pick up the imported packages

## Setup

We expect you to run NVM and NPM.

Mac and Linux based

```
nvm use
npm i
```

Windows

```
nvm use <version from .nvmrc file>
npm i
```

## Running

Development

```
npm run dev
```

Production like

```
npm build
npm start
```

Serves to localhost:3030

# Socials

Watch us code life on twitch:

- [GhostlyTuna](https://www.twitch.tv/ghostlytuna)
- [MsTess](https://www.twitch.tv/mstess)

# NOTES

I am aware of:

- Yarn Workspaces
- pnpm Workspaces

We know these are options to migrate to.  
The main thing is "Why doesn't TSC include packages?"
