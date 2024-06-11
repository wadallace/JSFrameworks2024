import './App.css'
import Heading from './componenets/Heading/Heading'
import Welcome from './componenets/Welcome/Welcome'

export default function App() {
  return (
    <div className='App'>
      <>
        <Heading>Welcome to my React App!</Heading>
        <Welcome name='Jamal' />
        <Welcome />
      </>
    </div>
  )
}
