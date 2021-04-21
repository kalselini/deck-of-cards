import React from "react";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import ExposurePlus1Icon from "@material-ui/icons/ExposurePlus1";
import ImportExportIcon from "@material-ui/icons/ImportExport";

import { ButtonGroup, Button } from "../../components";

export default {
  title: "02-Components/ButtonGroup",
  component: ButtonGroup,
  argTypes: {},
};

const Template = (args) => <ButtonGroup {...args} />;

const buttonsArray = [
  {
    label: "Shuffle",
    startIcon: <ShuffleIcon />,
  },
  {
    label: "Deal one card",
    startIcon: <ExposurePlus1Icon />,
  },
  {
    label: "Arrange",
    startIcon: <ImportExportIcon />,
  },
];

const buttons = buttonsArray.map((button) => (
  <Button startIcon={button.startIcon} label={button.label} />
));

export const Primary = Template.bind({});

Primary.args = {
  children: buttons,
};
