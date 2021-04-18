import React from "react";

import { ActionsButtons } from "../../components";

export default {
  title: "02-Components/ActionsButtons",
  component: ActionsButtons,
  argTypes: {},
};

const Template = (args) => <ActionsButtons {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
