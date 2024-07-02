import { useState } from "react";

import AddressForm from "../AddressForm/AddressForm";
import AddressResults from "../AddressResults/AddressResults";

function Address() {
  const [displayResults, setDisplayResults] = useState(false);
  /**
   * You will need to call on useState here for form fields
   * e.g. first name, last name, etc.
   */
  const [formValues, setFormValues] = useState({});
  /**
   * This isn't a part of values, because the checkbox
   * works a little differently, and I don't want this
   * to be a part of the loop at the bottom.
   */
  const [didSignUp, setDidSignUp] = useState(false);

  /**
   * You will need to pass props to <AddressResults /> and <AddressForm />
   */
  return (
    <>
      {displayResults ? (
        <AddressResults formValues={formValues} didSignUp={didSignUp} />
      ) : (
        <AddressForm
          formValues={formValues}
          setFormValues={setFormValues}
          didSignUp={didSignUp}
          setDidSignUp={setDidSignUp}
          setDisplayResults={setDisplayResults}
        />
      )}
    </>
  );
}

export default Address;
