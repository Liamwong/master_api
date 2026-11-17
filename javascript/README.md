# JavaScript

Node.js implementation of the master API.

## Layout

```
javascript/
├── .nvmrc        # pinned Node version (24)
├── server/       # API server
└── client/       # API client that calls the server
```

## Stack

The server deliberately uses built-in Node modules where it can, so the HTTP layer is written by hand.

| Concern     | Choice                     | Notes                                 |
| ----------- | -------------------------- | ------------------------------------- |
| HTTP server | `node:http` (built-in)     | Routing and body parsing done by hand |
| Validation  | [Zod](https://zod.dev)     | Only external dependency              |
| Persistence | In-memory `Map` (built-in) | Data is lost on restart               |
| Testing     | `node:test` (built-in)     | Run with `npm test`                   |

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

### Client

With the server running, from `javascript/client`:

```sh
npm start   # calls every endpoint and prints the results
```

The client targets `http://localhost:3000` by default. Set `API_BASE_URL` to point it elsewhere.

## Test

From `javascript/server`:

```sh
npm test
```

This uses Node's built-in test runner (`node --test`), which finds files named `*.test.js` and files in `test/` folders.
