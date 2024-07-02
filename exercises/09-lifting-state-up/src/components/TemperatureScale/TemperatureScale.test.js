import { render, screen } from "@testing-library/react";
import TemperatureScale from "./TemperatureScale";

// it finds a button with text Fahrenheit and clicks it. It tests that the function onClick is called.
test("it finds a button with text Fahrenheit and clicks it. It tests that the function onClick is called.", () => {
  const onClick = jest.fn();
  render(<TemperatureScale temperature={30} scale={"F"} setScale={onClick} />);
  const button = screen.getByText("Fahrenheit");
  button.click();
  expect(onClick).toHaveBeenCalled();
});

//it finds a button with text Celsius and clicks it. It tests that the function onClick is called.
test("it finds a button with text Celsius and clicks it. It tests that the function onClick is called.", () => {
  const onClick = jest.fn();
  render(<TemperatureScale temperature={30} scale={"C"} setScale={onClick} />);
  const button = screen.getByText("Celsius");
  button.click();
  expect(onClick).toHaveBeenCalled();
});
