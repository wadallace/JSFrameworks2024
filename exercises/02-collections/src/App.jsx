import './App.css'
import { technologies } from './images/technologies'
import { phones } from './images/phones'

function App() {
  return (
    <div className='App'>
      {technologies.map((link, index) => {
        return (
          <img
            src={link}
            alt='technology'
            key={index}
          />
        )
      })}
      {Object.entries(phones).map(([key, value]) => {
        return (
          <img
            src={value}
            alt='phones'
            key={key}
          />
        )
      })}
    </div>
  )
}

export default App
