# API

## Pre requisites - Installation

You must use the `npm` as a package library; because I want to add in a standard way into github actions.
Please Node version v20

## Installation

For installation; assuming your inside this folder `api`

```shell
npm install
```

## Execution or development mode

Go to terminal and type

```shell
npm start
```

### CI / CD

This repository uses the library <https://pactumjs.github.io/>, to validate the responses inside the github actions.
The command to install was `npx pactum-init` please see the official documentation <https://pactumjs.github.io/introduction/quick-start.html>

### Added TS compatibility

Because hard to see errors on functions without response types.

- Installed Type script building with library <https://tsup.egoist.dev/#bundle-formats>
- Installed corresponding types for express and libraries
- Added the simplest tsconfig.json for typescript basic configurations.

