
import { Story, Meta } from "@storybook/react";
import { PopoverPopupState, HoursProps } from "../displayhrs/DisplayHrs";
import { hrsT } from "../../data/hours";

export default {
    title: "Header/DisplayHrs",
    component: PopoverPopupState,
} as Meta;

const Template: Story<HoursProps> = (args) => <PopoverPopupState {...args} />;

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
