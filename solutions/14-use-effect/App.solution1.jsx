import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  /**
   * allCharacters
   * @type {Array} array of objects, where each object represents a different character.
   * @example
   * [
   *    { id: 15, name: "Alien Rick", ... },
   *    { id: 16, name: "Amish Cyborg", ... },
   * ]
   */
  const [allCharacters, setAllCharacters] = useState([]);
  /**
   * AJAX request to look up all characters,
   * and then it sets the characters in state
   * so that they can render on the screen.
   */
  const fetchCharacters = async () => {
    const { data } = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    setAllCharacters(data.results);
  };
  /**
   * Gets all characters when the component first renders,
   * and only when the component first renders.
   */
  useEffect(() => {
    fetchCharacters();
  }, []);
  /**
   * image
   * @type {string} url for the character's image
   */
  const [image, setImage] = useState(
    "https://i.ytimg.com/vi/UFFi9PWKDjg/maxresdefault.jpg"
  );
  /**
   * name
   * @type {string} name of the character
   */
  const [name, setName] = useState("");
  /**
   * Does a request to look up more information on the character,
   * and then sets the chosen character's name and image.
   * @param {string|number} characterId
   */
  const selectCharacter = async (characterId) => {
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/character/${characterId}`
    );
    setName(data.name);
    setImage(data.image);
  };

  return (
    <div className="container">
      <div className="row text-center" id="body">
        <h1 id="title-head">{name}</h1>
        <div id="main-img">
          <a href="http://rickandmorty.wikia.com/wiki/Rick_Sanchez">
            <img height="250" src={image} />
          </a>
          <div className="linkfooter">
            <p>Select your favorite character</p>
            {/**
             * In this case, I'm using an uncontrolled input,
             * because the value is not set in state.
             */}
            <select
              id="dropdown"
              onChange={(e) => selectCharacter(e.target.value)}
            >
              <option></option>
              {/**
               * Loops through and displays all the characters from the API in the dropdown.
               * An important thing to note is that I'm setting the character ID as the value.
               * This is because I need the ID in the next AJAX request to look up details
               * about the character.
               * Normally, you want to set the ID as the value where there is one.
               */}
              {allCharacters.map((character) => {
                return (
                  <option
                    value={character.id}
                    key={`character-${character.id}`}
                  >
                    {character.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
