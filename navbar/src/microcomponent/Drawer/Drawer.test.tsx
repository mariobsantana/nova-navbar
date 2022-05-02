import * as React from "react";
import { render, screen, fireEvent, createEvent } from "@testing-library/react";
import MainDrawer from "./Drawer";
import Appbar from "../Appbar";
import { IconButton } from "@mui/material";
import Drawer from "./Drawer";

describe("Drawer button tests", () => {
    describe("Rendering tests", () => {
        test("Should render Drawer if breakpoint is true", () => {
            render(<Appbar matchesSM={true}/>);
            const drawerComponent = screen.getByTestId("mainDrawer");
            expect(drawerComponent).toBeInTheDocument();
        });
        test("Should not render Drawer if breakpoint is false", () => {
            render(<Appbar matchesSM={false}/>);
            // queryByTestId returns either a value or null
            expect(screen.queryByTestId("mainDrawer")).toBeNull()
        });

    });
    describe("Display content when menu button is clicked", () => {
        test("Show content when the button is clicked once", () => {
            const handleClick= jest.fn()
            render(<IconButton onClick={handleClick}>a</IconButton>)
            fireEvent.click(screen.getByText(/a/i));
            expect(handleClick).toHaveBeenCalledTimes(1);
        })
        test("Show content when the button is clicked once", () => {
            const handleClick= jest.fn()
            render(<IconButton onClick={handleClick}>a</IconButton>)
            fireEvent.click(screen.getByText(/a/i));
            expect(handleClick).toHaveBeenCalledTimes(1);
        })
        it("should trigger drawer", async () => {
            const { getByTestId } = render(<Drawer />);
          
            fireEvent.click(getByTestId("mainDrawer"));
            expect(getByTestId("mainDrawer")).toBeVisible();
          
          
          });
    })
});
