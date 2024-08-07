import { useState, FormEvent } from 'react'
import NavBar from '../NavBar/NavBar'
import './ShoppingCart.css'
// Import something
import { useNavigate } from 'react-router-dom'

function ShoppingCart() {
  /**
   * Add something here
   */
  const navigate = useNavigate()

  const [cardholderName, setCardholderName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cvvNumber, setCvvNumber] = useState('')

  /**
   * Handle the form.
   * After the user submits the form, you should:
   * 1.) Navigate to the "ThankYou" page.
   * @see src/components/App/App.tsx
   * 2.) Make it so that if the user hits the back button,
   * they will not see this page.
   */

  const handleForm = (e: FormEvent) => {
    e.preventDefault()
    navigate('/thank-you', { replace: true })
  }

  return (
    <>
      <NavBar />
      <div className='uk-container'>
        <form
          className='ShoppingCart'
          method='POST'
        >
          <fieldset className='uk-fieldset'>
            <legend className='uk-legend'>Checkout</legend>

            <div className='uk-margin'>
              <input
                className='uk-input'
                type='text'
                placeholder='Cardholder Name'
                aria-label='Cardholder Name'
                value={cardholderName}
                onChange={(e) => setCardholderName(e.target.value)}
              />
            </div>

            <div className='uk-grid-small uk-grid'>
              <div className='uk-width-3-4@s'>
                <input
                  className='uk-input'
                  type='number'
                  placeholder='Card Number'
                  aria-label='Card Number'
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
              </div>
              <div className='uk-width-1-4@s'>
                <input
                  className='uk-input'
                  type='number'
                  placeholder='CVV'
                  aria-label='CVV'
                  value={cvvNumber}
                  onChange={(e) => setCvvNumber(e.target.value)}
                />
              </div>
            </div>

            <div className='uk-margin'>
              <button
                type='submit'
                className='uk-button uk-button-primary'
                onClick={handleForm}
              >
                Checkout
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  )
}

export default ShoppingCart
