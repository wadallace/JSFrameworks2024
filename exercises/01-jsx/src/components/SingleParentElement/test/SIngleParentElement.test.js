import { render, screen } from "@testing-library/react";
import SingleParentElement from "../SingleParentElement";

//a create called SingleParentElement
// Test to ensure that SingleParentElement renders two p tags

test("It should render two paragraphs", () => {
  render(<SingleParentElement />);
  const p = screen.getAllByText(/p/i);
  expect(p.length).toBe(2);
});
