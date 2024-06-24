import { useState } from 'react'

export default function CharacterCount() {
  const [value, setValue] = useState('')
  const [count, setCount] = useState(0)

  const handleChange = (e) => {
    e.preventDefault()
    setValue(e.target.value)
    setCount(e.target.value.length)
  }

  return (
    <>
      <textarea
        name='inputArea'
        id='inputArea'
        onChange={handleChange}
        value={value}
      ></textarea>
      <div>Character Count: {count}</div>
    </>
  )
}
