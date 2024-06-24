import { useState } from 'react'

export default function CharacterCount() {
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setValue(e.target.value)
  }

  const count = value.length

  return (
    <>
      <textarea
        name='inputArea'
        id='inputArea'
        onChange={handleChange}
        value={value}
        className='form-control'
      ></textarea>
      <div>Character Count: {count}</div>
    </>
  )
}
