import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { HasLocale } from "./HasLocale";

export default {
  title: "Example/HasLocale",
  component: HasLocale,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof HasLocale>;

const Template: ComponentStory<typeof HasLocale> = (args) => (
  <HasLocale {...args} />
);

export const Default = Template.bind({});
