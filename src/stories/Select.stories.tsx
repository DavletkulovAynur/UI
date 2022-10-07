import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ReactSelect } from "../components/Select/index";

const animals = [
  {
    label: "Tom",
    name: "Tom",
    type: "dinosaur",
    age: 25,
  },
  {
    label: "Alfred",
    name: "Alfred",
    type: "turtle",
    age: 12,
  },
  {
    label: "Jeff",
    name: "Jeff",
    type: "snail",
    age: 19,
  },
];

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ModuleUI/Select",
  component: ReactSelect,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    options: {
      description: "test",
    },
  },
} as ComponentMeta<typeof ReactSelect>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ReactSelect> = (args) => (
  <ReactSelect {...args} />
);

export const General = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
General.args = {
  options: animals,
};
