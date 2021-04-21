import React from 'react';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import ExposurePlus1Icon from '@material-ui/icons/ExposurePlus1';
import ImportExportIcon from '@material-ui/icons/ImportExport';

import { ButtonGroup, Button } from '../../components';

export default {
  title: '02-Components/ButtonGroup',
  component: ButtonGroup,
  argTypes: {},
};

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
