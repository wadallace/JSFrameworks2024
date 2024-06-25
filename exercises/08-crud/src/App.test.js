//import App
import App from "./App";
import { render, screen, fireEvent } from "@testing-library/react";

test("should render a grocery list", () => {
  render(<App />);
  const inputNode = screen.getByPlaceholderText("Cost of grocery item...");
  //change the value of the input using fireEvent
  fireEvent.change(inputNode, { target: { value: "1" } });
  const input = screen.getByPlaceholderText("Name of grocery item...");
  fireEvent.change(input, { target: { value: "Apples" } });

  //find a button with the text "Add" and click it
  const addButton = screen.getByText("Add");
  fireEvent.click(addButton);
  //find text Total Cost:
  const totalCost = screen.getByText("Total Cost: $1.00");
  expect(totalCost);
});

test("clear button resets the form", () => {
  render(<App />);
  const inputNode = screen.getByPlaceholderText("Cost of grocery item...");
  //change the value of the input using fireEvent
  fireEvent.change(inputNode, { target: { value: "1" } });
  const input = screen.getByPlaceholderText("Name of grocery item...");
  fireEvent.change(input, { target: { value: "Apples" } });

  //find a button with the text "Clear" and click it
  const addButton = screen.getByText("Clear");
  fireEvent.click(addButton);
  //find text Total Cost:
  const totalCost = screen.getByText("Total Cost: $0.00");
  expect(totalCost);
});
