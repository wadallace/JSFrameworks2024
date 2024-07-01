import { render, screen, fireEvent } from "@testing-library/react";
import Address from "./Address";

test("it fills out the form correctly", () => {
  const { container, debug } = render(<Address />);

  const input = screen.getByLabelText("First Name");
  //set the value of the input to "Jamal"
  fireEvent.change(input, { target: { value: "Jamal" } });
  //set the value of the last name input to "Taylor"
  const lastNameInput = screen.getByLabelText("Last Name");
  fireEvent.change(lastNameInput, { target: { value: "Taylor" } });
  //set the value of the address input to "123 Main St"
  const addressInput = screen.getByLabelText("Address Line 1");
  fireEvent.change(addressInput, { target: { value: "123 Main St" } });
  //set the value of the city input to "New York"
  const cityInput = screen.getByLabelText("City / Town");
  fireEvent.change(cityInput, { target: { value: "New York" } });
  //set the value of the state input to "NY"
  const stateInput = screen.getByLabelText("State / Province / Region");
  fireEvent.change(stateInput, { target: { value: "NY" } });
  //set the value of the zip input to "10001"
  const zipInput = screen.getByLabelText("Zip / Postal Code");
  fireEvent.change(zipInput, { target: { value: "10001" } });
  //set the value Country to United States
  const countryInput = screen.getByLabelText("Country");
  //find the submit button and click it
  const checkbox = screen.getByLabelText("Sign Up For Newsletter");
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);
  //expect to see the word results in the page"
  expect(container.textContent).toMatch("Results");
  //expect to see the values of the inputs in the page
  expect(container.textContent).toMatch(
    "JamalTaylor123 Main StNew YorkNY10001"
  );
  expect(container.textContent).toMatch(
    "Thank you for signing up for our newsletter!"
  );
});
