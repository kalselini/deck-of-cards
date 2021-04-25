import React from 'react';
import { ShuffleIcon } from '../../assets';

import { Button } from '../../components';

export default {
  title: '02-Components/Button',
  component: Button,
  argTypes: {},
};

/* eslint-disable react/jsx-props-no-spreading */
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'Shuffle',
  startIcon: <ShuffleIcon />,
};
