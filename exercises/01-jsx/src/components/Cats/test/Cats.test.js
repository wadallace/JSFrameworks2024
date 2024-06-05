import { render, screen } from "@testing-library/react";
import Cats from "../Cats";

//create a test check for the cats component
// test for 3 images in the component

test("renders cats", () => {
  render(<Cats />);
  const cats = screen.getAllByAltText("pictures of cats");
  expect(cats.length).toBe(3);
});
