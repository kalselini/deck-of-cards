import React from 'react';

import { CardDeck, deckArray } from '../../components';

export default {
  title: '02-Components/CardDeck',
  component: CardDeck,
  argTypes: {
    // Hides className from the storybook controls
    deckArray: {
      table: { disable: true },
    },
  },
};

const Template = (args) => <CardDeck {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  deckArray: deckArray,
  shuffle: false,
};
