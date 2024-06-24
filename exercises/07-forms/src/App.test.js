import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders the form", async () => {
  render(<App />);
  const nameInput = screen.getByLabelText("First Name");

  //use the fireEvent function to simulate user nameInput
  fireEvent.change(nameInput, { target: { value: "John" } });
  const lastNameInput = screen.getByLabelText("Last Name");
  fireEvent.change(lastNameInput, { target: { value: "Doe" } });
  const address = screen.getByLabelText("Address Line 1");
  fireEvent.change(address, { target: { value: "123 Main St" } });
  const city = screen.getByLabelText("City / Town");
  fireEvent.change(city, { target: { value: "Anytown" } });
  const state = screen.getByLabelText("State / Province / Region");
  fireEvent.change(state, { target: { value: "CA" } });
  const zip = screen.getByLabelText("Zip / Postal Code");
  fireEvent.change(zip, { target: { value: "12345" } });
  const Country = screen.getByLabelText("Country");
  fireEvent.change(Country, { target: { value: "United States" } });
  //submit the form
  fireEvent.click(screen.getByText("Submit"));
  //awaited the form to be submitted and rendered
  await screen.findByText("Results:");
  await screen.findByText("John");
  await screen.findByText("Doe");
  await screen.findByText("123 Main St");
});
