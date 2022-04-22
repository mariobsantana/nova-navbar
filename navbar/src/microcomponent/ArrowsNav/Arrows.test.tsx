import React from "react";
import { render, screen, fireEvent} from "@testing-library/react";
import ArrowsButtons  from "./Arrows";

describe("Testing arrow buttons", () => {
  const props = {
    onClick: jest.fn(),
    "data-testid": "arrowsButton",
  };

  describe("Functionality tests", () => {
    test("Should call onClick function", () => {
      render(<ArrowsButtons {...props}></ArrowsButtons>);
      const buttonComponent = screen.getByTestId("arrowsButton");
      fireEvent.click(buttonComponent);
      expect(props.onClick).toBeCalled();
    });
  });
});