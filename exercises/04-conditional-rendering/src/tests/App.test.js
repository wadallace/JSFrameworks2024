import { render, screen } from "@testing-library/react";
import App from "../App";

test("render an accordion with the middle section expanded", () => {
  const { container } = render(<App />);

  const titles = container.getElementsByClassName("title");
  expect(titles.length).toBe(3);
  expect(titles[0].matches(".active")).toBe(false);
  expect(titles[1].matches(".active")).toBe(true);
  expect(titles[2].matches(".active")).toBe(false);

  const content = container.getElementsByClassName("content");
  expect(content[0].matches(".active")).toBe(false);
  expect(content[1].matches(".active")).toBe(true);
  expect(content[2].matches(".active")).toBe(false);
});
