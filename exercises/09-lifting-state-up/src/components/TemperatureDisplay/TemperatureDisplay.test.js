import TemperatureDisplay from "./TemperatureDisplay";
import { render } from "@testing-library/react";

test("it renders text that says 'current Temperature' with Fahrenheit symbol", () => {
  const { container } = render(
    <TemperatureDisplay temperature={30} scale={"F"} />
  );
  expect(container.textContent).toMatch("Current Temperature:30 ° F");
});

test("it renders text that says 'current Temperature' with Celsius symbol", () => {
  const { container } = render(
    <TemperatureDisplay temperature={30} scale={"C"} />
  );
  expect(container.textContent).toMatch("Current Temperature:30 ° C");
});
