import React from 'react';

import { CardDeck, deckArray } from '../../components';

export default {
  title: '02-Components/CardDeck',
  component: CardDeck,
  argTypes: {},
};

const Template = (args) => <CardDeck {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  deckArray: deckArray,
  shuffle: false,
};
