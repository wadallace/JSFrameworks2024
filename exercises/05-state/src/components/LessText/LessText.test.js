// import react testing library
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
//import component
import LessText from "./LessText";
import "@testing-library/jest-dom";

//write a test that will be named "text" and it will accept a string

test("should render all text", () => {
    //render the component
    render(<LessText text="hello" maxLength={1} />);
    // import debug

    //check if the text is rendered
    expect(screen.getByText(/h/)).toBeInTheDocument();
    //check if the text is rendered
});

test("clicking on the button does not render all the text", () => {
    //render the component
    render(<LessText text="hello" maxLength={1} />);
    //find a button and click it
    fireEvent.click(screen.getByText("Read More"));
    //check if the text is rendered
    expect(screen.queryByText("hello")).toBeInTheDocument();
});
