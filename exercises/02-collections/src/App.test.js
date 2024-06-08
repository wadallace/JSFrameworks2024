import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders 4 images", () => {
  render(<App />);
  const images = screen.getAllByRole("img");
  expect(images.length).toBe(7);
});
