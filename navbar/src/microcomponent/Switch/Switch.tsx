import { FC } from "react";
import { OptionA } from "./OptionA";
import { OptionB } from "./OptionB";
import ButtonGroup from '@mui/material/ButtonGroup';

export interface SwitchProps {
  "data-testid"?: string;
}

export const SwitchButton: FC<SwitchProps> = ({

}) => {
  const props = {
    "data-testid": "SwitchButton",
  };
  return (
    <ButtonGroup>
      <OptionA onClick={() => {
          console.log("Week button was clicked!");}}
          >Week</OptionA>
      <OptionB onClick={() => {
          console.log("Month button was clicked!");}}
          >Month</OptionB>
    </ButtonGroup>
  );
};
