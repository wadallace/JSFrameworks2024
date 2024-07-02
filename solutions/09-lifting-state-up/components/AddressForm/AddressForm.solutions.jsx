import "./AddressForm.css";
import PropTypes from "prop-types";

import countries from "../../assets/countries";
import states from "../../assets/states";

/**
 * After the user submit the form, this displays what the user entered.
 * @param {Object} props which should somehow include:
 * - setDisplayResults()
 * - first name
 * - last name
 * - address
 * - city
 * - state
 * - zipcode / postal code
 * - country
 * - a callback function(s) for setting first name, last name, etc.
 */
function AddressForm(props) {
  /**
   * You will need to:
   * - Set the value of each <input> / <select> to something from props
   * - Use callback function(s) in props to update <App>'s state
   * - Add an event handler to handle form submission
   */
  const handleChange = (e) => {
    props.setFormValues({
      ...props.formValues,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * Toggling whether you what is submitted in the form
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setDisplayResults(true);
  };

  return (
    <form method="POST" className="container mt-4" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="firstName" className="control-label">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          className="form-control"
          value={props.formValues.firstName || ""}
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
          value={props.formValues.lastName || ""}
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
          value={props.formValues.addressLine1 || ""}
          onChange={handleChange}
        />
        <p className="help-block text-muted">
          Street address, P.O. box, company name, c/o
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
          value={props.formValues.city || ""}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="state" className="control-label">
          State / Province / Region
        </label>
        <select
          id="state"
          name="state"
          className="form-control"
          value={props.formValues.states || ""}
          onChange={handleChange}
        >
          <option></option>
          {states.map((state, idx) => {
            return <option key={`state-${idx}`}>{state}</option>;
          })}
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="postalCode" className="control-label">
          Zip / Postal Code
        </label>
        <input
          id="postalCode"
          name="postalCode"
          type="text"
          className="form-control"
          value={props.formValues.postalCode || ""}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="country" className="control-label">
          Country
        </label>
        <select
          id="country"
          name="country"
          className="form-control"
          value={props.formValues.countries || ""}
          onChange={handleChange}
        >
          <option></option>
          {countries.map((state, idx) => {
            return <option key={`state-${idx}`}>{state}</option>;
          })}
        </select>
      </div>
      <div className="mb-3">
        <input
          id="confirm"
          name="confirm"
          type="checkbox"
          className="form-check-input"
          value={props.didSignUp}
          onChange={(e) => props.setDidSignUp(e.target.checked)}
        />
        <label htmlFor="confirm" className="form-check-label">
          Sign Up For Newsletter
        </label>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

AddressForm.propTypes = {
  setDisplayResults: PropTypes.func.isRequired,
  // And others that you will need to pass in
  // To learn more about PropTypes, please refer to https://reactjs.org/docs/typechecking-with-proptypes.html
};

export default AddressForm;
