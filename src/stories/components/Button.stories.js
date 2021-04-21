import React from "react";
import ShuffleIcon from "@material-ui/icons/Shuffle";

import { Button } from "../../components";

export default {
  title: "02-Components/Button",
  component: Button,
  argTypes: {},
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: "Shuffle",
  startIcon: <ShuffleIcon />,
};
