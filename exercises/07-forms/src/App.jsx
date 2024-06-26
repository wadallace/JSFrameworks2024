import { useState } from 'react'
import './App.css'
// Import here
import countries from './assets/countries.json'
import states from './assets/states.json'

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [addressLine1, setAddressLine1] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [country, setCountry] = useState('')
  const [didSignUp, setDidSignUp] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const stateOptions = states.map((state) => (
    <option
      key={state}
      value={state}
    >
      {state}
    </option>
  ))

  const countryOptions = countries.map((country) => (
    <option
      key={country}
      value={country}
    >
      {country}
    </option>
  ))

  return (
    <form
      className='container mt-4'
      method='POST'
      onSubmit={handleSubmit}
    >
      {/* You will need to handle form submission */}
      <div className='mb-3'>
        <label
          htmlFor='firstName'
          className='control-label'
        >
          First Name
        </label>
        <input
          id='firstName'
          name='firstName'
          type='text'
          className='form-control'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className='mb-3'>
        <label
          htmlFor='lastName'
          className='control-label'
        >
          Last Name
        </label>
        <input
          id='lastName'
          name='lastName'
          type='text'
          className='form-control'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className='mb-3'>
        <label
          htmlFor='addressLine1'
          className='control-label'
        >
          Address Line 1
        </label>
        <input
          id='addressLine1'
          name='addressLine1'
          type='text'
          className='form-control'
          value={addressLine1}
          onChange={(e) => setAddressLine1(e.target.value)}
        />
        <p className='help-block text-muted'>
          Street Address, P.O. Box, Company Name, C/O
        </p>
      </div>
      <div className='mb-3'>
        <label
          htmlFor='city'
          className='control-label'
        >
          City / Town
        </label>
        <input
          id='city'
          name='city'
          type='text'
          className='form-control'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className='mb-3'>
        <label
          htmlFor='state'
          className='control-label'
        >
          State / Province / Region
        </label>
        <select
          id='state'
          name='state'
          className='form-control'
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          <option value=''>Select a state</option>
          {stateOptions}
        </select>
      </div>
      <div className='mb-3'>
        <label
          htmlFor='postalCode'
          className='control-label'
        >
          Zip / Postal Code
        </label>
        <input
          id='postalCode'
          name='postalCode'
          type='text'
          className='form-control'
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />
      </div>
      <div className='mb-3'>
        <label
          htmlFor='country'
          className='control-label'
        >
          Country
        </label>
        <select
          id='country'
          name='country'
          className='form-control'
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value=''>Select a country</option>
          {countryOptions}
        </select>
      </div>
      <div className='mb-3 form-check'>
        <input
          id='signUpForNewsLetter'
          name='signUpForNewsLetter'
          type='checkbox'
          className='form-check-input'
          value={didSignUp}
          onChange={(e) => setDidSignUp(e.target.checked)}
        />
        <label
          htmlFor='signUpForNewsLetter'
          className='form-check-label'
        >
          Sign Up For Newsletter
        </label>
      </div>
      <button
        type='submit'
        className='btn btn-primary'
      >
        Submit
      </button>
      {submitted && (
        <>
          <div className='mt-4 mb-0 fw-bold'>Results:</div>
          <div className='card card-body bg-light mt-2 mb-4'>
            <ul className='list-unstyled mb-0'>
              <li>First Name: {firstName}</li>
              <li>Last Name: {lastName}</li>
              <li>Address Line 1: {addressLine1}</li>
              <li>City: {city}</li>
              <li>State: {state}</li>
              <li>Postal Code: {postalCode}</li>
              <li>Country: {country}</li>
            </ul>
          </div>
        </>
      )}
      <div className='mb-4'>
        {submitted &&
          (didSignUp
            ? 'Thank you for signing up for our newsletter!'
            : 'Please sign up for our newsletter!')}
      </div>
    </form>
  )
}

export default App
