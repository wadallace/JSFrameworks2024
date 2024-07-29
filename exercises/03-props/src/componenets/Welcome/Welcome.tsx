type WelcomeProps = {
  name?: string
}

export default function Welcome({ name = 'user' }: WelcomeProps) {
  return (
    <>
      <div>Hello {name}</div>
    </>
  )
}

