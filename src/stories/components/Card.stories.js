import React from "react";

import { Card } from "../../components";

export default {
  title: "02-Components/Card",
  component: Card,
  argTypes: {
    suit: {
      control: {
        type: "radio",
        options: ["Diamond", "Heart", "Club", "Spade"],
      },
    },
    cardRanking: {
      control: {
        type: "select",
        options: [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "J",
          "Q",
          "K",
          "A",
        ],
      },
    },
  },
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  suit: "Diamond",
  front: true,
};
