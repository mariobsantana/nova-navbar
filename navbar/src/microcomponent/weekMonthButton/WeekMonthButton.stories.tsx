import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { WeekMonthButton, WeekMonthButtons } from "./WeekMonthButton";


export default {
    title: "Header/WeekMonthButton",
    component: WeekMonthButtons,
} as Meta;

const Template: Story<WeekMonthButton> = (args) => <WeekMonthButtons {...args} />;

export const DefaultWMB = Template.bind({});
DefaultWMB.args = {
    size: "small",
    box: "contained"
};
export const PrimaryWMB = Template.bind({});
PrimaryWMB.args = {
    size: "small",
    box: "contained"
};
DefaultWMB.parameters = {
    backgrounds: {
        default: "blue",
        values: [{ name: "blue", value: "#1976d2" }],
    },
};
