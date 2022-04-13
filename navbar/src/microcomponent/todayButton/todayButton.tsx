import * as React from "react";
import styled from "@emotion/styled";
import { FC } from "react";

type size = "small" | "medium" | "large";

export interface TodayButtonProps {
  onClick?: () => void;
  "data-testid"?: string;
  size?: size;
}

export const TodayButton: FC<TodayButtonProps> = ({
  children,
  onClick,
  size,
}) => {
  const props = {
    onClick,
    "data-testid": "todayButton",
    size,
  };
  return <DayButton {...props}>{children}</DayButton>;
};

interface buttonProps {
  size?: size;
}

export const DayButton = styled.button<buttonProps>`
  padding: 0.6em 2em;
  border-radius: 18px;
  color: #fff;
  //font-size: 0.8em;
  cursor: pointer;
  margin: 1em;
  border: 1px #fff solid;
  background-color: transparent;
  transition: scale 0.3s;
  &:active {
    transform: scale(1.02);
  }
  &:hover {
    filter: brightness(1.3);
  }

  font-size: ${({ size = "medium" }) =>
    size === "large" ? "1em" : size === "small" ? ".6em" : ".8em"};
`;
