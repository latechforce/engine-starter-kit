# Engine Starter Kit

Build a web application from a JSON configuration with [Engine by La Tech Force](https://github.com/latechforce/engine).

## Requirements

- [Bun](https://bun.sh/) v1.2 or later

## Getting Started

[Generate](https://github.com/latechforce/engine-starter-kit/generate) a new project
from this template, clone it, install project dependencies, and start hacking:

```
$ git clone https://github.com/latechforce/engine-starter-kit.git example
$ cd ./example
$ bun install
$ bun start
```

The app will become available at [`http://localhost:3000/`](http://localhost:3000/) (press `q` + `Enter` to exit).

You can find the Open API documentation at [`http://localhost:3000/api/docs`](http://localhost:3000/api/docs) (press `q` + `Enter` to exit).

**IMPORTANT**: Ensure that VSCode is using the workspace [version of TypeScript](https://code.visualstudio.com/docs/typescript/typescript-compiling#_using-newer-typescript-versions)
and ESLint.

## How to Deployment

The project is configured to be deployed to [Scalingo](https://sclng.io/r/270b5ab212db4ba4?utm_source=scalingo&utm_medium=email&utm_campaign=referral) using GitHub Actions.

You can create a Scalingo account using our [referral link](https://sclng.io/r/270b5ab212db4ba4?utm_source=scalingo&utm_medium=email&utm_campaign=referral).

### Setup Github Actions

You have to create a new Scalingo API token to use in the repository settings in actions secrets.

You need to setup the `GH_TOKEN` and `SCALINGO_API_TOKEN` environment variables in the repository settings in actions secrets.

### Use Semantic Commit Messages

The project is configured to be released on Github with semantic commit messages.
Each commit will trigger a new release on Github and a new deployment on Scalingo.

For examples:

```
chore(release): update dependencies
```

This will run the tests and stay on the same version v1.0.0.

```
fix(release): fix release
```

This will run the tests and create a new release on GitHub with the next version v1.0.1.

```
feat(release): add new feature
```

This will run the tests and create a new release on GitHub with the next version v1.1.0.

```
BREAKING CHANGE: add new feature
```

This will run the tests and create a new release on GitHub with the next version v2.0.0.


More information about semantic commit messages can be found [here](https://semantic-release.gitbook.io/semantic-release).

## Scripts

- `bun run format` — Format the code using Prettier
- `bun run lint` — Validate the code using ESLint
- `bun run build` — Compiles and bundles the app for deployment
- `bun run start` — Launches the app in development mode on [`http://localhost:3000/`](http://localhost:3000/)
- `bun run test` — Run unit tests with Bun

## How to Update

- `bun upgrade` — Bump Bun to the latest version
- `bun update` — Update Node.js modules (dependencies)

## License

Copyright (c) 2024-present Thomas JEANNEAU, La Tech Force (thomas.jeanneau@latechforce.com). This source code is licensed under the Fair Use License found in the
[LICENSE](https://github.com/latechforce/engine-starter-kit/blob/main/LICENSE) file.
