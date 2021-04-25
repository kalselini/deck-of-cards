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


### Initial install

```
yarn
```


### Git hooks

We use git hooks to run lint, test and formatting on staged files on `git commit`
commands.

Details are in `package.json` .

## <a name="dev">Development mode ⚠️</a>

### Deck of Cards React App

Run Deck of Cards app on a dev server at [localhost:3000](http://localhost:3000)

```
yarn start
```

## <a name="lint">JS and SCSS Linting 🧹</a>

### Stylelint

We use [StyleLint](https://stylelint.io/) to avoid errors and enforce consistent
conventions in the stylesheets.

`yarn lint:css` Project-wide configuration is defined in `./.stylelintrc`

### ESLint

`yarn lint:js` Project-wide configuration is defined in `./.eslintrc`.

## <a name="tests">Tests 📊</a>

We use [@testing-library](https://testing-library.com/) to run unit and snapshot
tests where available across the application.

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

Build storybook`

```
yarn build-storybook
```

Storybook config is in `./.storybook/`
