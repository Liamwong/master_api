# JavaScript

Node.js implementation of the master API.

## Layout

```
javascript/
├── .nvmrc        # pinned Node version (24)
├── server/       # API server
└── client/       # API client (not started yet)
```

## Prerequisites

- [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager)

  ```sh
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
  ```

  Restart your terminal afterwards, then confirm with `nvm --version`.

Node and npm come with nvm, so you don't install them separately.

## Setup

```sh
cd javascript/server
nvm install   # installs and switches to the Node version in .nvmrc
npm install   # installs dependencies from package.json
```

In each new terminal, run `nvm use` from inside `javascript/` to switch back to the pinned version.

## Run

From `javascript/server`:

| Command       | What it does                                      |
| ------------- | ------------------------------------------------- |
| `npm start`   | Runs the server (`src/index.js`)                  |
| `npm run dev` | Runs the server and restarts it when files change |

## Test

From `javascript/server`:

```sh
npm test
```

This uses Node's built-in test runner (`node --test`), which finds files named `*.test.js` and files in `test/` folders.
