import * as React from "react";
import { render, screen, fireEvent, createEvent, getByTestId } from "@testing-library/react";
import mainDrawer from "./Drawer";
import Appbar from "../Appbar";
import { IconButton } from "@mui/material";
import Drawer from "./Drawer";
import MainDrawer from "./Drawer";

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

    describe("Fire event when a key is pressed", () => {
 /*       test("toggle changes correctly", () => {
            const doSomething = jest.fn();
            const doOtherThing = jest.fn();
            const { container } = render(
            <MainDrawer x ={doSomething} y={doOtherThing} />
            );
            //const toggle = getByTestId(container, "toggle");
            //fireEvent.change(toggle, { target: { value: "foo" } });
            //expect(doOtherThing.mock.calls.length).toBe(1);
        });
        test("input key press correctly", () => {
            const doSomething = jest.fn();
            const doOtherThing = jest.fn();
            const { container } = render(
            <MainDrawer x={doSomething} y={doOtherThing} />
            );
            const toggle = getByTestId(container, "toggle");
            fireEvent.keyPress(toggle, { key: "Enter", code: 13 });
            expect(doSomething.mock.calls.length).toBe(null);
        })
//        const handleKeydown = jest.fn()
 //       fireEvent.keyDown( setRightOpen, {key: 'Enter', code: 'Enter', charCode: 13})

   //     fireEvent.keyDown(domNode, {key: 'A', code: 'KeyA'})
    })*/
    test("Should render Drawer if breakpoint is true", () => {
        const doSomething = jest.fn();
        render(<Appbar matchesSM={true}/>);
        const drawerComponent = screen.getByTestId("mainDrawer");
        expect(drawerComponent).toBeInTheDocument();
        //const toggle = getByTestId(container, "toggle");
        
        //fireEvent.click(drawerComponent);
        const buttonComponent = screen.getByRole("button");
        fireEvent.keyDown(buttonComponent, { key: "Tab", code: 9 });
        expect(buttonComponent).toBeInTheDocument();


    });
})
})
