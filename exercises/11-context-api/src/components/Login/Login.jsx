// Import what you need from React
import React from 'react'
import translations from './LoginTranslations.json'
// Import "TranslatorContext"
import { TranslatorContext } from '../../contexts/TranslatorContext'
import { useContext } from 'react'

function Login() {
  /**
   * You will need to add something here. This component should be similar to the "CreateAccount" component in the first context API exercise.
   * @see exercises/08a-context-api/src/App.jsx
   * @see solutions/08a-context-api/App.solutions.jsx
   */
  const [language] = useContext(TranslatorContext)
  /**
   * Replace "en" with a constant or variable.
   */
  const t = translations[language]

  /**
   * You do not have to change anything below this line.
   */
  return (
    <form className='row g-2'>
      <div className='col-auto'>
        <input
          className='form-control mr-sm-2'
          type='email'
          placeholder={t['Email']}
          aria-label={t['Email']}
        />
      </div>
      <div className='col-auto'>
        <input
          className='form-control mr-sm-2'
          type='password'
          placeholder={t['Password']}
          aria-label={t['Password']}
        />
      </div>
      <div className='col-auto'>
        <button
          className='btn btn-dark my-2 my-sm-0'
          type='submit'
        >
          {t['Login In']}
        </button>
      </div>
    </form>
  )
}

export default Login
