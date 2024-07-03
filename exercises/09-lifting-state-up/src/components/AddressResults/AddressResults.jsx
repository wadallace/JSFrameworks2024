/**
 * After the user submit the form, this displays what the user entered.
 * @param {Object} props which should somehow include:
 * - first name
 * - last name
 * - address
 * - city
 * - state
 * - zipcode / postal code
 * - country */

function AddressResults({
  firstName,
  lastName,
  address,
  city,
  state,
  zipcode,
  country,
}) {
  return (
    <div className='card card-body bg-light mt-4 mb-4'>
      Results:
      <ul className='list-unstyled mb-0'>
        <li>First Name: {firstName}</li>
        <li>Last Name: {lastName}</li>
        <li>Address: {address}</li>
        <li>City: {city}</li>
        <li>State: {state}</li>
        <li>Zip Code: {zipcode}</li>
        <li>Country: {country}</li>
      </ul>
    </div>
  )
}

export default AddressResults
