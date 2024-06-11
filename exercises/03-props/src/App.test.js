import { render, screen } from "@testing-library/react";

import Heading from "./components/Heading/Heading";
import Welcome from "./components/Welcome/Welcome";

describe("Welcome component", () => {
  test("If name is provided, the Welcome component should render Hello.", () => {
    render(<Welcome name="Jamal" />);
    screen.getByText("Hello Jamal");
  });
  test("If name is not provided, the Welcome component should render Hello user.", () => {
    render(<Welcome />);
    screen.getByText("Hello user");
  });
  test("The Heading component should render children text to the screen.", () => {
    render(<Heading>Welcome to my React App!</Heading>);
    screen.getByText("Welcome to my React App!");
  });
});
