import { render, screen } from "@testing-library/react";
import Person from "../Person";

//test should render 3 div tags
// test should render the number 42
// should render a name Peter Piper
// should render Musician

test("render the person components", () => {
  Date.now = jest.fn(() => 946702800000); // Sets the year to 2000

  render(<Person />);
  const name = screen.getAllByText(/Peter Piper/i);
  expect(name.length).toBe(1);
  const p = screen.getByText(/60/);
  expect(p).toBeInTheDocument();
  const p1 = screen.getByText(/Peter Piper/i);
  expect(p1).toBeInTheDocument();
  const p2 = screen.getByText(/Musician/i);
  expect(p2).toBeInTheDocument();
});
