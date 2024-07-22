/* eslint-disable semi */
// import useEffect
import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
// import Axios (or use Fetch)

function App() {
  /**
   * Set up state and make AJAX requests here
   */
  const [characters, setCharacters] = useState([])
  const [selectedCharacter, setSelectedCharacter] = useState('')
  const [name, setName] = useState('')
  const [favoriteCharacterImg, setFavoriteCharacterImg] = useState('')

  const fetchCharacters = async () => {
    const { data } = await axios.get(
      'https://rickandmortyapi.com/api/character'
    )
    setCharacters(data.results)
    selectedCharacter && setName(data.results[`${selectedCharacter - 1}`].name)
    setFavoriteCharacterImg(
      `https://rickandmortyapi.com/api/character/avatar/${selectedCharacter}.jpeg`
    )
  }

  useEffect(() => {
    fetchCharacters()
  }, [selectedCharacter])

  return (
    <div className='container'>
      <div
        className='row text-center'
        id='body'
      >
        <h1 id='title-head'>{selectedCharacter ? name : null}</h1>
        <div id='main-img'>
          <a href='http://rickandmorty.wikia.com/wiki/Rick_Sanchez'>
            {/* Add an alt and src to this image */}

            <img
              height='250'
              src={
                selectedCharacter
                  ? favoriteCharacterImg
                  : 'https://i.ytimg.com/vi/UFFi9PWKDjg/maxresdefault.jpg'
              }
              alt={selectedCharacter || 'Rick & Morty'}
            />
          </a>
          <div className='linkfooter'>
            <p>Select your favorite character</p>
            {/* Handle event here */}

            <select
              id='dropdown'
              type='text'
              value={selectedCharacter}
              onChange={(e) => setSelectedCharacter(e.target.value)}
            >
              <option value=''></option>
              {/**
               * Loop through all characters. The value should be the character id.
               * @example in HTML
               * <option value="2" key="character-1">Morty Smith</option>
               */}
              {characters.map((character, idx) => {
                return (
                  <option
                    value={character.id}
                    key={`character-${idx}`}
                  >
                    {character.name}
                  </option>
                )
              })}
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
