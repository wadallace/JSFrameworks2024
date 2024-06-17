import { useState } from 'react'

export default function LessTest({ text, maxLength }) {
  const [longText, setLongText] = useState(false)

  return (
    <>
      <div>{longText ? text : text.slice(0, maxLength)}</div>
      <div>
        <button
          className='btn btn-secondary m-1'
          onClick={() => setLongText(true)}
        >
          Read More
        </button>
        <button
          className='btn btn-secondary'
          onClick={() => setLongText(false)}
        >
          Read Less
        </button>
      </div>
    </>
  )
}
