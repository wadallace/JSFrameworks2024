import { ReactNode } from 'react'

export default function Heading({ children }: { children: ReactNode }) {
  return (
    <>
      <h1>{children}</h1>
    </>
  )
}
