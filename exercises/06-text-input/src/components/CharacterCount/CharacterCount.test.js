import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
//import character count
import CharacterCount from "./CharacterCount";

/**
 *   1. Create a component named "CharacterCount". (It will not require any props.)
2. Import and display your "CharacterCount" component inside of _exercises/05-state/src/App.jsx_.
3. It will render a `<textarea>` textbox that will capture user input.
4. It will then render count of the number of characters in the textbox on the screen
 * 
 */
test("should render the character count", () => {
    //render the component
    const { container } = render(<CharacterCount />);

    //find the textarea and type in some text
    const textarea = container.querySelector("textarea");
    fireEvent.change(textarea, {
        target: { value: "hello" },
    });

    //check if the text is rendered
    expect(screen.getByText(/5/));
});
