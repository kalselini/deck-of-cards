# Deck of Cards Game 🃏


## Contents 📋

- [Getting Started](#start)
- [Running Apps](#dev)
- [Linting](#lint)
- [Testing](#tests)
- [StorybookJS](#storybookjs)

## <a name="start">Description 💬</a>

React Single Page Application displaying a deck of playing cards.
You have 3 actions:
- shuffle the deck of cards
- draw any given number of cards from the deck
- sort the drawn card by suit: Clubs, Spades, Hearts, Diamonds; then by value: Ace is high

Drawn cards are removed from the original deck and displayed below.

## <a name="start">Demo 🎮</a>

![Demo of game](./public/demo.gif)

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
yarn
```


### Git hooks

We use git hooks to run lint, test and formatting on staged files on `git commit`
commands.

Details are in `package.json` .

## <a name="dev">Development mode ⚠️</a>

### B2C Storefront React App

Run B2C Example app on a dev server at [localhost:3000](http://localhost:3000)

```
yarn start
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

`npm run lint:js` Project-wide configuration is defined in `eslintrc.js`.

## <a name="tests">Tests 📊</a>

We use [@testing-library](https://testing-library.com/) to run unit and snapshot
tests where available across the application.

Project-wide config, including code coverage can be found in `./jest.config.js`
Run tests (with coverage report)

```
yarn test

```


## <a name="storybookjs">Storybook 📕</a>

We use [Storybook](https://storybook.js.org) to develop components in isolation.

Run storybook on a development server at [localhost:6006](http://localhost:6006)

```
yarn storybook
```

Build storybook to `./storybook-dist/`

```
yarn build:storybook
```

Serve storybook (production)

```
yarn prod:storybook
```

Storybook config is in `./.storybook/`
