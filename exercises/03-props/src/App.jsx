import './App.css'
// import something here
import Welcome from './componenets/Welcome'
import Heading from './componenets/Heading'

function App() {
  return (
    <div className='App'>
      <>
        <Heading>Welcome to my React App!</Heading>
        <div>
          <Welcome name='Jamal' />
          <Welcome />
        </div>
      </>
    </div>
  )
}

export default App
