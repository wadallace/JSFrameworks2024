import { useState, ChangeEvent, FormEvent } from "react";
import "./App.css";
// Import data from "assets/countries.json" and "assets/states.json" here
import { states } from "./assets/states";
import { countries } from "./assets/countries";

function App() {
  /**
   * Setting and changing form values
   */
  type Values = {
    firstName?: string,
    lastName?: string,
    addressLine1?: string,
    city?: string,
    state?: string,
    postalCode?: string,
    country?: string,
  }
  const [values, setValues] = useState<Values>({});
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  /**
   * This isn't a part of values, because the checkbox
   * works a little differently, and I don't want this
   * to be a part of the loop at the bottom.
   */
  const [didSignUp, setDidSignUp] = useState(false);
  /**
   * Toggling whether or not you show a summary of what was entered
   * into the form at the bottom of the page
   */
  const [displayResults, setDisplayResults] = useState(false);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setDisplayResults(true);
  };

  return (
    <form className="container mt-4" method="POST" onSubmit={handleSubmit}>
      {/* You will need to handle form submission */}
      <div className="mb-3">
        <label htmlFor="firstName" className="control-label">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          className="form-control"
          value={values.firstName || ""}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="control-label">
          Last Name
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          className="form-control"
          value={values.lastName || ""}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="addressLine1" className="control-label">
          Address Line 1
        </label>
        <input
          id="addressLine1"
          name="addressLine1"
          type="text"
          className="form-control"
          value={values.addressLine1 || ""}
          onChange={handleChange}
        />
        <p className="help-block text-muted">
          Street Address, P.O. Box, Company Name, C/O
        </p>
      </div>

      <div className="mb-3">
        <label htmlFor="city" className="control-label">
          City / Town
        </label>
        <input
          id="city"
          name="city"
          type="text"
          className="form-control"
          value={values.city || ""}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="state" className="control-label">
          State / Province / Region
        </label>
        {/* Loop through the states you imported here */}
        <select
          id="state"
          name="state"
          className="form-control"
          value={values.state || ""}
          onChange={handleChange}
        >
          <option value=""></option>
          {states.map((state, idx) => {
            return (
              <option value={state} key={`state-${idx}`}>
                {state}
              </option>
            );
          })}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="postalCode" className="control-label">
          Zip / Postal Code
        </label>
        <input
          id="postalCode"
          name="postalCode"
          type="text"
          className="form-control"
          value={values.postalCode || ""}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="country" className="control-label">
          Country
        </label>
        {/* Loop through the countries you imported here */}
        <select
          id="country"
          name="country"
          className="form-control"
          value={values.country || ""}
          onChange={handleChange}
        >
          <option value=""></option>
          {countries.map((country, idx) => {
            return (
              <option value={country} key={`country-${idx}`}>
                {country}
              </option>
            );
          })}
        </select>
      </div>
      <div className="mb-3 form-check">
        <input
          id="signUpForNewsLetter"
          name="signUpForNewsLetter"
          type="checkbox"
          className="form-check-input"
          checked={didSignUp}
          onChange={(e) => setDidSignUp(e.target.checked)}
        />
        <label htmlFor="signUpForNewsLetter" className="form-check-label">
          Sign Up For Newsletter
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>

      {/*
       * Find a way to only display this once the form has been submitted.
       * Hint: You will need to change "false" below with something else
       */}
      {displayResults && (
        <div className="card card-body bg-light mt-4 mb-4">
          Results:
          <ul className="list-unstyled mb-0">
            {Object.values(values).map((value, idx) => {
              return <li key={`value-${idx}`}>{value}</li>;
            })}
          </ul>
          <p>
            {didSignUp
              ? "Thank you for signing up for our newsletter!"
              : "Please sign up for our newsletter!"}
          </p>
        </div>
      )}
    </form>
  );
}

export default App;
