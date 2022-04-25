import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { BasicPopover, HoursProps } from "../displayhrs/DisplayHrs";
import { hrsT } from "../../data/hours";

export default {
    title: "Header/DisplayHrs",
    component: BasicPopover,
} as Meta;

const Template: Story<HoursProps> = (args) => <BasicPopover {...args} />;

export const DefaultHours = Template.bind({});
DefaultHours.args = {
    hours: hrsT
};

DefaultHours.parameters = {
    backgrounds: {
        default: "blue",
        values: [{ name: "blue", value: "#1976d2" }],
    },
};
