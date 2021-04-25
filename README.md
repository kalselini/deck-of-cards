## Description

React SPA displaying a deck of playing cards.
You have 3 actions:
- shuffle
- deal a random card
- show/hide the deck
Cards picked are displayed below.

## Launch project

To see this this project, you can clone it directly.
Then run (in root folder):

### `npm install`
or
### `yarn install`

This will install dependencies.

Finally

### `npm start`
or
### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Next steps

- Add Redux for state management
- Add Flow for type checking
- Improve UI/UX


# iX Experience Orchestrator Front End Monorepo 🚀

[![Build Status](https://travis.ibm.com/ixliberty/ixl-frontend.svg?token=x3JKTqwpbqPH3PVo5n39&branch=develop)](https://travis.ibm.com/ixliberty/ixl-frontend)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

## Features 😍

- Monorepo supported by Lerna
- Client Side and Server Rendering
- Multiple component libraries
- Demo apps avaliable

## Tutorial 🤓

This README is designed to help people who know why they're here get up and
running.

You will not find it to be an exhaustive list of topics, so we really recommend
visiting the tutorial website:
https://pages.github.ibm.com/ixliberty/ixl-tutorial-website/

This contains tutorials on the concepts, information on env vars, decisions
we've made on advanced topics, and a whole lot more besides

## Whitewater tool status

Both Github Enterprise and Travis are maintained by the IBM Whitewater team. If
you have infra issues, the status can be found here:
https://ibmtoolbox.statuspage.io/

## Contents 📋

- [Getting Started](#start)
- [Running Apps](#dev)
- [Configuration](#config)
- [Environment Variables](#env)
- [Git workflow](#git)
- [Linting](#lint)
- [Testing](#tests)
- [CMS Integration](#cms)
- [StorybookJS](#storybookjs)
- [Apps](#apps)
- [New Project](#create)
- [Help](#help)

## <a name="start">Getting Started 🛠</a>

### Prerequisites

- Node 14
- `lerna` installed globally
- `npx` installed globally

```
npm i -g npx lerna
```

### Initial install

```
npm i
npm run bootstrap
```

Note that `npm i` will copy any `.env.example` to `.env` . Please verify and
adjust the content of the `.env` files in accordance with your environment.

### VSCode

If you use VSCode editor, there is a set of recommended extensions to install in
`./.vscode` to help you on this project.

### Git hooks

We use git hooks to run lint, test and formatting on staged files on `git push`
commands.

Details are in `package.json` .

### Running on Windows

In order for all scripts to run properly on windows, each script needs to be
prepended with `root-exec` and a dev depedendency to
`@exo/frontend-common-root-exec` needs to be added. So for instance instead of

```
  "scripts": {
    "build": "webpack --env ssr,client"
  }
```

you need to do

```
  "scripts": {
    "build": "root-exec webpack --env ssr,client"
  }
```

#### Local windows development environment

To run locally on windows you need to run all scripts using the "Git bash"
environment. This comes with the official git distribution.

To run this within VSCode, you need to configure your default terminal to "Git
bash". You do this through `Ctrl-Shif-P` and search for _Terminal: Select
Default Shell_ and then select _Git Bash_

## <a name="dev">Development mode ⚠️</a>

### B2C Storefront React App

Run B2C Example app on a dev server at [localhost:3100](http://localhost:3100)

```
npm run dev:app:b2c:csr
```

Build B2C Client Side React App

```
npm run build:app:b2c:csr
```

Serve B2C Client Side production build (note: to serve you must first have performaced the above build step)

```
npm run start:csr:b2c
```

Run the below commands from `/packages/apps/commerce/` directory for SSR, this
has not yet been linked up with lerna:

Run B2C Example app on a dev server SSR

```
npm run dev:app:b2c:ssr
```

Build B2C Server Side React App

```
npm run build:app:b2c
```

Serve B2C Sever Side production build (note: to serve you must first have performaced the above build step)

```
npm run start:prod
```

### Automotive Car Configurator React App

To run the Automotive Example app development server on
[localhost:3200](http://localhost:3200):

```
npm run dev:app:automotive:csr
```

To build and serve the app (production):

```
npm run build:app:automotive:csr
npm run start:csr:automotive
```

### GraphQL Server

To connect to a GraphQL server, update the `GRAPHQL_ENDPOINT` in your
application's `.env` file. (More below)


## <a name="config">Configuration ⚙️</a>

Configuration in done in `.env`-files, but to simplify management and sharing of such configuration we've provided a number of npm scripts as a convenience

### Importing / exporing the configuration

When you start working with EXO you will likely be provided a configuration file with all config needed by your project. To import it, run

```
npm run config:import <filename> <name> <password>
npm run config:load <name>
```

where `<name>` is the name you want to give your config, for instance `my-config` and `<password>` is an optional password in case the config has been encrypted

Similarly, you can export your config (if you want to share it), using

```
npm run config:save <name>
npm run config:export <name> <filename> <password>
```

### Switching between multiple configs

Sometimes you need to switch between multiple configs, for instance if you are working on multiple simultaneous projects.

All configs are stored in the `.config/` folder - which is ignored from GIT

To see all configs you have defined, you run

```
npm run config:list
```

To save you current config, i.e. save the contents of all config files, you run

```
npm run config:save <name>
```

To to load a saved config you run

```
npm run config:load <name>
```

And finally, to delete a saved config you run

```
npm run config:delete <name>
```


## <a name="env">Environment Variables 🌳</a>

The following `.env` variables are used across the features

- `PORT` - defines the TCP port used when running the SSR server in production
- `GRAPHQL_ENDPOINT` - defines graphql endpoint to be used, e.g.

  'http://localhost:4000/graphql`

- `GRAPHQL_BATCH` - set to `true` to batch GraphQL requests, this improves

overall performance and overhead as fewer requests are made, but reduces latency
as the app needs to wait for the slowest request to respond

- `HTTPS` - set to `true` for running with HTTPS
- `HTTPS_KEY` - path to private key, typically something like `privkey.pem`
- `HTTPS_CERT` - path to certificate, typically something like `cert.pem`
- `HTTPS_CA` - path to CA, typically something like `chain.pem` You
  control/configure this typically through the `.env` file in the app folder,
  e.g. `packages/apps/commerce/app-shell-server` .

There are a number of further `env` variables explained in the tutorial for the
frontend, in the frontend tutorial.

## <a name="git">Git workflow 🧰</a>

- Branch off of `develop`
- Follow the

  [branching stragegy](https://github.ibm.com/ixliberty/ixl-frontend/wiki/Creating-Branches-and-Pull-Requests)

- When your feature is complete, create a pull request and fill as much

  information into the template as possible.

- Use [labels](#labels)
- Follow

  [PR guidance](https://github.ibm.com/ixliberty/ixl-frontend/wiki/Creating-Branches-and-Pull-Requests)

- Use

[Git keywords](https://docs.github.com/en/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword)
to link to related issues or close github issues

- Please note any important steps, for example, if running `npm i` is required

  or if there are new `.env` variables required.

- All tests must pass and builds must not be broken (enforced by CI)
- Pull request reviews are welcome from everyone and encouraged, however,
- A PR will require at least one repo owner's approval to merge
- Developers should squash + merge their own pull requests, once approved
- Do not merge PRs that do not belong to you
- Please delete your branch after merge

### <a name="labels">Labels for PRs and Issues</a>

Use [labels](/labels) to organise

- Feature specific work: `feature:cart` , `feature:profile` , etc.
- App specific work: `app:auto` , `app:b2c` , etc.
- For changes to tools, tidying, chores: `chore`
- For bugs/bug-fixes: `bug`

## <a name="lint">JS and CSS Linting 🧹</a>

### Stylelint

We use [StyleLint](https://stylelint.io/) to avoid errors and enforce consistent
conventions in the stylesheets.

- `npm run lint:css` StyleLint allows us to:

- use plugins to enforce conventions
- use custom plugins to enforce design system rules like 0.25rem multiples for

  spacing

- detect subtle mistakes like overriding shorthand properties
- opt-in to a small subset of the CSS language it to keep things consistent and

  easy to use/learnCSS

- enforce conventions that make it easier to collaborate and review code liked

ordered declarations

Project-wide configuration is defined in `stylelint.config.js`

### ESLint

`npm run lint:js` Project-wide configuration is defined in `eslintrc.js` , but
packages may override these defaults by placing an `.eslintrc` file in the
package folder.

## <a name="tests">Tests 📊</a>

We use [@testing-library](https://testing-library.com/) to run unit and snapshot
tests where available across the application.

Project-wide config, including code coverage can be found in `./jest.config.js`
Run tests (with coverage report)

```
npm t

```

Watch mode

```
npm run test:w

```

### Running E2E Cypress tests in B2C App

The tests can be run in two different modes; headless and with a full-fledged
browser.

To run in headless mode

```
npm run test:e2e:hcl
(or npm run test:e2e:sap)
```

and to run with a full-fledged browser

```
cd packages/apps/commerce
npm start test:e2e:start-test-server:hcl
npm run test:e2e:open-cypress:hcl
(or CONFIG_FILE=cypress/cypress-hcl-mobile.json npm run test:e2e:open-cypress)
```

## <a name="cms">CMS Integration 🎨</a>

Currently, the CMS is integrated to the B2C commerce app, to provide content
capabilities wherever the `CmsContainer` or `CmsSpot` is provided. More
information on how this works is avaliable in the tutorial.

### AEM Integration to B2C

The B2C app has the required files for AEM integration, and this can be
implemented through running `./deploy-to-aem.sh .env.aem.development` , with the
environment variables set correctly.

## <a name="storybookjs">Storybook 📕</a>

We use [Storybook](https://storybook.js.org) to develop components in isolation.

Run storybook on a development server at [localhost:6006](http://localhost:6006)

```
npm run storybook
```

Build storybook to `./storybook-dist/`

```
npm run build:storybook
```

Serve storybook (production)

```
npm run prod:storybook
```

Storybook config is in `./.storybook/`

## <a name="apps">Starter Apps 🚀</a>

In packages/apps live the following applications. These can be used for demos or
as a starting point for your project.

- B2C Commerce - commerce store with basic retail capabilities
- B2B Commerce - commerce store with basic B2B capabilities
- Automotive Commerce - auto retail solution with car configuration, financing

  and subscription products

- Simple Content - a basic content app - perfect as a lightweight boilerplate

## <a name="create">How to create a new client/demo project</a>

1. Fork the repo - https://github.ibm.com/ixliberty/ixl-frontend/fork

2. Copy one of the app folders (listed below) as the base for your project and

   copy it within the packages/apps directory

3. Modify the "dev" scripts within /packages.json and

   /packages/apps/YOUR_APP/packages.json for running the server

4. Create/modify/copy feature packages as required to build custom functionality

5. Contribute back by raising PRs to this repo

## <a name="help">Help 🤷🏻‍♂️</a>

- We have a tutorial site here:

  https://pages.github.ibm.com/ixliberty/ixl-tutorial-website/

- There is some info on our decision making on this repos wiki page
- Please use slack channel: https://ibm-ix.slack.com/archives/C017673FWDB

We also have two further Slack channels:

- For technically interested parties:

  https://ibm-ix.slack.com/archives/C017678BP61

- For a wider asset and business perspective:

https://ibm-ix.slack.com/archives/CREPR2J92

## Copyright

Licensed Materials - Property of IBM 694906H

&copy; Copyright IBM Corp. 2020 All Rights Reserved

US Government Users Restricted Rights - Use, duplication or disclosure
restricted by GSA ADP Schedule Contract with IBM Corp.
