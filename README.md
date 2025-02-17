# Engine Starter Kit

Generate backend from a JSON configuration with [La Tech Force Engine](https://github.com/latechforce/engine).

## Requirements

- [Bun](https://bun.sh/) v1.2.2
- [VS Code](https://code.visualstudio.com/) editor

## Getting Started

[Generate](https://github.com/latechforce/engine-starter-kit/generate) a new project
from this template, clone it, install project dependencies, create an
environment variables file `.env`, and start hacking:

```
$ git clone https://github.com/latechforce/engine-starter-kit.git example
$ cd ./example
$ bun install
$ bun run dev
```

The app will become available at [http://localhost:3000/](http://localhost:3000/) (press `q` + `Enter` to exit).

You can find the Open API documentation at [`http://localhost:3000/api/docs`](http://localhost:3000/api/docs) (press `q` + `Enter` to exit).

**IMPORTANT**: Ensure that VSCode is using the workspace [version of TypeScript](https://code.visualstudio.com/docs/typescript/typescript-compiling#_using-newer-typescript-versions)
and ESLint.

## Scripts

- `bun run format` — Format the code using Prettier
- `bun run lint` — Validate the code using ESLint
- `bun run build` — Compiles and bundles the app for deployment
- `bun run dev` — Launches the app in development mode on [`http://localhost:3000/`](http://localhost:3000/)
- `bun run start` — Launches the app on [`http://localhost:3000/`](http://localhost:3000/)
- `bun run test` — Run unit tests with Bun

## How to Update

- `bun upgrade` — Bump Bun to the latest version
- `bun update` — Update Node.js modules (dependencies)

## License

Copyright © 2025-present La Tech Force. This source code is licensed under the MIT license found in the
[LICENSE](https://github.com/latechforce/engine-starter-kit/blob/main/LICENSE) file.