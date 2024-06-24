import { useState } from 'react'

export default function GuessTheNumber() {
  const [guess, setGuess] = useState('')
  const [submitted, setIsSubmitted] = useState(false)
  const [result, setResult] = useState('')
  const randomNumber = Math.floor(Math.random() * 100)

  const compareNumber = (guess) => {
    if (guess === randomNumber) {
      return 'Correct! You win!'
    } else if (guess < randomNumber) {
      return `Too low! The correct number was ${randomNumber}`
    } else {
      return `Too high! The correct number was ${randomNumber}`
    }
  }

  const handleChange = (e) => {
    setGuess(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    guess.length > 0 && setIsSubmitted(true)
    const comparisonResult = compareNumber(guess)
    setResult(comparisonResult)
  }

  const handleReset = (e) => {
    e.preventDefault()
    setGuess('')
    setIsSubmitted(false)
    setResult('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='number'
          required
          onChange={handleChange}
          min={1}
          max={10}
          value={guess}
        />
        <button type='submit'>Guess</button>
        <button onClick={handleReset}>Reset Game</button>
      </form>
      {submitted && <div>{result}</div>}
    </>
  )
}
