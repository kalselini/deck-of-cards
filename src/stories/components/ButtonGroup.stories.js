import React from 'react';
import { ShuffleIcon, ExposurePlus1Icon, ImportExportIcon } from '../../assets';

import { ButtonGroup, Button } from '../../components';

export default {
  title: '02-Components/ButtonGroup',
  component: ButtonGroup,
  argTypes: {},
};

/* eslint-disable react/jsx-props-no-spreading */
const Template = (args) => <ButtonGroup {...args} />;

const buttonsArray = [
  {
    children: 'Shuffle',
    startIcon: <ShuffleIcon />,
  },
  {
    children: 'Deal one card',
    startIcon: <ExposurePlus1Icon />,
  },
  {
    children: 'Arrange',
    startIcon: <ImportExportIcon />,
  },
];

const buttons = buttonsArray.map((button) => (
  <Button startIcon={button.startIcon}>{button.children}</Button>
));

export const Primary = Template.bind({});

Primary.args = {
  children: buttons,
};
