/**
 * After the user submit the form, this displays what the user entered.
 * @param {Object} props which should somehow include:
 * - first name
 * - last name
 * - address
 * - city
 * - state
 * - zipcode / postal code
 * - country
 */
function AddressResults({ formValues, didSignUp }) {
  return (
    <div className="card card-body bg-light mt-4 mb-4">
      Results:
      <ul className="list-unstyled mb-0">
        {Object.values(formValues).map((formValue, index) => {
          return <li key={`form-value-${index}`}>{formValue}</li>;
        })}
      </ul>
      <p>
        {didSignUp
          ? "Thank you for signing up for our newsletter!"
          : "Please sign up for our newsletter!"}
      </p>
    </div>
  );
}

export default AddressResults;
