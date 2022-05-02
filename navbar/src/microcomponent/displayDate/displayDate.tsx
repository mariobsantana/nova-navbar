import * as React from "react";
import moment from "moment";

import { FC } from "react";
import { useTheme, styled } from "@mui/material";
import { themeColors } from "../../types/customs";

export interface Dates {
  startDate: moment.Moment;
  endDate: moment.Moment;
}
export interface DatesProps extends DisplayProps {
  dates: Dates;
  "data-testid": string;
}

interface DisplayProps {
  color?: themeColors;
}

export const DisplayDate: FC<DatesProps> = ({ dates, color }) => {
  const props = {
    "data-testid": "displayDate",
    color,
  };
  const theme = useTheme();
  const { startDate, endDate } = dates;

  const colors: { [key in themeColors]: string } = {
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    default: "#fff",
  };

  const StyledDiv = styled("div")<DisplayProps>`
    font-size: 1rem;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;

    line-height: normal;
    letter-spacing: -0.3px;

    font-family: Work-Sans, sans-serif;

    color: ${({ color = "default" }) => colors[color as themeColors]};
  `;

  const weekHeaderDate =
    `${startDate.format("MMM")}` === `${endDate.format("MMM")}`
      ? `${startDate.format("MMM YYYY")}`
      : `${startDate.format("MMM")} - ${endDate.format("MMM YYYY")}`;

  return <StyledDiv {...props}>{weekHeaderDate}</StyledDiv>;
};
