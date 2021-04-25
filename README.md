# Deck of Cards Game 🃏


## Tutorial 🤓

This README is designed to help people who know why they're here get up and
running.

You will not find it to be an exhaustive list of topics, so we really recommend
visiting the tutorial website:
https://pages.github.ibm.com/ixliberty/ixl-tutorial-website/

This contains tutorials on the concepts, information on env vars, decisions
we've made on advanced topics, and a whole lot more besides


## Contents 📋

- [Getting Started](#start)
- [Running Apps](#dev)
- [Linting](#lint)
- [Testing](#tests)
- [StorybookJS](#storybookjs)

## <a name="start">Description 💬</a>

### Description

React SPA displaying a deck of playing cards.
You have 3 actions:
- shuffle
- deal a random card
- show/hide the deck
Cards picked are displayed below.

## <a name="start">Demo 🎮</a>

### Demo

Place gif here

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
