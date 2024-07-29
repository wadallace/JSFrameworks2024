import { FormEvent, useState } from 'react'
import './App.css'
// Import here
import countries from './assets/countries.json'
import states from './assets/states.json'

function App() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    addressLine1: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    didSignUp: false,
    submitted: false,
  })

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault()
    setForm({ ...form, submitted: true })
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
          value={form.firstName}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
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
          value={form.lastName}
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
        />
      </div>
      <div className='mb-3'>
        <label
          htmlFor='addressLine1'
          className='control-label'
        >
          Street Address
        </label>
        <input
          id='addressLine1'
          name='Street'
          type='text'
          className='form-control'
          value={form.addressLine1}
          onChange={(e) => setForm({ ...form, addressLine1: e.target.value })}
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
          value={form.city}
          onChange={(e) => setForm({ ...form, city: e.target.value })}
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
          value={form.state}
          onChange={(e) => setForm({ ...form, state: e.target.value })}
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
          value={form.postalCode}
          onChange={(e) => setForm({ ...form, postalCode: e.target.value })}
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
          value={form.country}
          onChange={(e) => setForm({ ...form, country: e.target.value })}
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
          checked={form.didSignUp}
          onChange={(e) => setForm({ ...form, didSignUp: e.target.checked })}
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
      {form.submitted && (
        <>
          <div className='mt-4 mb-0 fw-bold'>Results:</div>
          <div className='card card-body bg-light mt-2 mb-4'>
            <ul className='list-unstyled mb-0'>
              <li>First Name: {form.firstName}</li>
              <li>Last Name: {form.lastName}</li>
              <li>Street Address: {form.addressLine1}</li>
              <li>City: {form.city}</li>
              <li>State: {form.state}</li>
              <li>Postal Code: {form.postalCode}</li>
              <li>Country: {form.country}</li>
            </ul>
          </div>
        </>
      )}
      <div className='mb-4'>
        {form.submitted &&
          (form.didSignUp
            ? 'Thank you for signing up for our newsletter!'
            : 'Please sign up for our newsletter!')}
      </div>
    </form>
  )
}

export default App
