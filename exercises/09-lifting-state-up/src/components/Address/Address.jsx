import { useState } from 'react'

import AddressForm from '../AddressForm/AddressForm'
import AddressResults from '../AddressResults/AddressResults'

function Address() {
  const [displayResults, setDisplayResults] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [country, setCountry] = useState('')

  /**
   * You will need to call on useState here for form fields
   * e.g. first name, last name, etc.
   *
  

  /**
   * You will need to pass props to <AddressResults /> and <AddressForm />
   */

  return (
    <>
      {displayResults ? (
        <AddressResults
          firstName={firstName}
          lastName={lastName}
          address={address}
          city={city}
          state={state}
          zipcode={zipcode}
          country={country}
        />
      ) : (
        <AddressForm
          firstName={firstName}
          lastName={lastName}
          address={address}
          city={city}
          state={state}
          zipcode={zipcode}
          country={country}
          setDisplayResults={setDisplayResults}
          setFirstName={setFirstName}
          setLastName={setLastName}
          setAddress={setAddress}
          setCity={setCity}
          setState={setState}
          setZipcode={setZipcode}
          setCountry={setCountry}
        />
      )}
    </>
  )
}

export default Address
