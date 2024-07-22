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
   * The character that the user selects from the dropdown.
   * @param {object} selectedCharacter
   */
  const [selectedCharacter, setSelectedCharacter] = useState({});
  /**
   * Does a request to look up more information on the character,
   * and then sets the chosen character's name and image.
   * @param {string|number} characterId
   */
  const selectCharacter = async (characterId) => {
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/character/${characterId}`
    );
    setSelectedCharacter(data);
  };

  return (
    <div className="container">
      <div className="row text-center" id="body">
        <h1 id="title-head">
          {/**
           * Since this is an empty object at first {}, I need to check that name is there.
           * I'm using the ternary object to do this.
           */}
          {selectedCharacter && selectedCharacter.name
            ? selectedCharacter.name
            : null}
        </h1>
        <div id="main-img">
          <a href="http://rickandmorty.wikia.com/wiki/Rick_Sanchez">
            {/**
             * Since this is an empty object at first {}, I need to check that image is there.
             * The "?" is doing this, and I'm falling back to another image if it isn't there.
             */}
            <img
              height="250"
              src={
                selectedCharacter?.image ||
                "https://i.ytimg.com/vi/UFFi9PWKDjg/maxresdefault.jpg"
              }
            />
          </a>
          <div className="linkfooter">
            <p>Select your favorite character</p>
            <select
              id="dropdown"
              value={selectedCharacter && selectCharacter.id}
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
