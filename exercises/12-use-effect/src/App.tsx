/* eslint-disable semi */
import { useEffect, useState } from 'react'
import './App.css'
import ronSwansonImage from './assests/ronswanson.png'
import axios from 'axios'

function App() {
  const [quote, setQuote] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  const fetchQuote = async () => {
    setIsLoading(true)
    try {
      const { data } = await axios.get(
        'https://ron-swanson-quotes.herokuapp.com/v2/quotes'
      )
      setQuote(data)
    } catch (error) {
      setHasError(true)
      console.log(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  return (
    <div className='bg-warning text-center'>
      <img
        src={ronSwansonImage}
        alt=''
        width='450'
        height='423'
        className='mt-4'
      />
      <div className='container'>
        {isLoading && <div className='text-center'>Loading...</div>}
        {hasError && (
          <div className='text-center error'>
            Oops! An unexpected error has occurred.
          </div>
        )}
        <blockquote
          id='quote'
          className='blockquote bg-dark text-white border-0 mb-4'
        >
          {quote}
        </blockquote>
      </div>
    </div>
  )
}

export default App
