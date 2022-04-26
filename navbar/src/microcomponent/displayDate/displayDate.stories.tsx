import * as React from "react";
import { Story, Meta } from "@storybook/react";
import {DatesProps, DisplayDate} from "../displayDate/displayDate";
import {dates} from "../../data/dates";

export default {
    title: "Header/displayDates",
    component: DisplayDate,
} as Meta;

const Template: Story<DatesProps> = (args) => <DisplayDate {...args} />;

export const DefaultDate = Template.bind({});
DefaultDate.args = {
    color: "default",
    dates
};
export const PrimaryDate = Template.bind({});
PrimaryDate.args = {
    color: "primary",
    dates
};
DefaultDate.parameters = {
    backgrounds: {
        default: "blue",
        values: [{ name: "blue", value: "#1976d2" }],
    },
};
