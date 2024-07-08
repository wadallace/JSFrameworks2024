/* eslint-disable semi */
// Import what you need from React here
// You will need to import the "TranslatorContext" and "TranslatorProvider" from src/contexts/TranslatorContext.js
import './App.css'
import NavBar from '../NavBar/NavBar'
import CreateAccount from '../CreateAccount/CreateAccount'
import Footer from '../Footer/Footer'
import { TranslatorProvider } from '../../contexts/TranslatorContext'

function App() {
  /**
   * Handle the Provider here
   */

  return (
    <TranslatorProvider>
      <div className='App d-flex flex-column'>
        <NavBar />
        <div className='container pt-4 pb-4'>
          <CreateAccount />
        </div>
        <div className='mt-auto'>
          <Footer />
        </div>
      </div>
    </TranslatorProvider>
  )
}

export default App
