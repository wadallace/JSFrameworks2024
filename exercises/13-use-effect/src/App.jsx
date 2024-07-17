// Import useEffect here
import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
// import Axios (or use Fetch)

function App() {
  /**
   * dogImages
   * @type {Array} an array of image URLs
   * @example
   * [
   *     "https://images.dog.ceo/breeds/terrier-scottish/n02097298_7694.jpg",
   *     "https://images.dog.ceo/breeds/lhasa/n02098413_1137.jpg"
   * ]
   */
  const [dogImages, setDogImages] = useState([])

  const [selectedNumber, setSelectedNumber] = useState(1)

  const fetchDogImages = async () => {
    const { data } = await axios.get(
      `https://dog.ceo/api/breeds/image/random/${selectedNumber}`
    )
    setDogImages(data.message)
  }

  useEffect(() => {
    fetchDogImages()
  }, [selectedNumber])

  return (
    <div className='App'>
      <h1>Dogs</h1>

      <select
        value={selectedNumber}
        onChange={(e) => setSelectedNumber(e.target.value)}
        id='number of dogs'
      >
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value='6'>6</option>
        <option value='7'>7</option>
        <option value='8'>8</option>
        <option value='9'>9</option>
        <option value='10'>10</option>
      </select>
      <div className='container'>
        {dogImages.map((dogImage, idx) => {
          return (
            <img
              key={`dog-${idx}`}
              height='200'
              src={dogImage}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
