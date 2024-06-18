import './App.css'
import DiceRoller from './components/DiceRoll/DiceRoll'
import LessText from './components/LessText/LessText'
import Subscribe from './components/Subscribe/Subscribe'
// Import LessText here

function App() {
  return (
    <>
      <div className='container pt-4 pb-4'>
        <h1 className='h3'>Challenge 1 - Less Text</h1>
        <LessText
          text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero rem suscipit fuga consectetur deserunt quisquam enim cupiditate quae, autem eaque modi mollitia quaerat voluptatum quasi sit maiores nobis rerum nihil.`}
          maxLength={20}
        />
      </div>
      <div className='pt-4 pb-4 mb-4'>
        <div className='container'>
          <h1 className='h3'>Challenge 2 - Dice Roll</h1>
          <DiceRoller />
        </div>
      </div>
      <div className='m-5'>
        <Subscribe />
      </div>
    </>
  )
}

export default App
