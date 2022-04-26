import * as React from "react";
import { render, screen, fireEvent, createEvent } from "@testing-library/react";
import MainDrawer from "./Drawer";
import Appbar from "../Appbar";

describe("Today button tests", () => {
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

});
