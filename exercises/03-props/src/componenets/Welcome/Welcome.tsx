import React from 'react'

type WelcomeProps = {
  name?: string
}

export default function Welcome({ name = 'user' }) {
  return (
    <>
      <div>Hello {name}</div>
    </>
  )
}
