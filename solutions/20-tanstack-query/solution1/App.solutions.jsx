import { useState } from "react";
import "./App.css";
import axios from "axios";
import { useQuery, keepPreviousData } from "@tanstack/react-query";

const fetchCharacters = async () => {
  const { data } = await axios.get("https://rickandmortyapi.com/api/character");
  return data.results;
};

const getCharacter = async (id) => {
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  return data;
};

function App() {
  const [characterId, setCharacterId] = useState("");

  /**
   * Query to get a list of characters
   */
  const {
    data: characters = [],
    isPending,
    isError,
  } = useQuery({
    queryKey: ["characters"],
    queryFn: fetchCharacters,
  });

  /**
   * Query to get information about one character
   */
  const {
    data: character = {},
    isPending: isCharacterPending,
    isError: isCharacterError,
  } = useQuery({
    queryKey: ["singleCharacter", characterId],
    queryFn: () => getCharacter(characterId),
    placeholderData: keepPreviousData,
    staleTime: 30000, // Store data (cache) for 30 seconds. With this setting, Tanstack query will use stored data instead of refetching when state changes.
  });

  const isLoading = isPending || isCharacterPending;
  const hasError = isError || isCharacterError;

  return (
    <div className="container">
      <div className="row text-center" id="body">
        <h1 id="title-head">{character?.name}</h1>
        <div id="main-img">
          <a href="http://rickandmorty.wikia.com/wiki/Rick_Sanchez">
            {/* Add an alt and src to this image */}
            <img
              height="250"
              src={
                character?.image ||
                "https://i.ytimg.com/vi/UFFi9PWKDjg/maxresdefault.jpg"
              }
            />
          </a>
          <div className="linkfooter">
            <p>Select your favorite character</p>
            {/* Handle event here */}
            <select
              id="dropdown"
              type="text"
              value={characterId}
              onChange={(e) => setCharacterId(e.target.value)}
            >
              <option></option>
              {/* Looping through and adding an <option> tag for each character */}
              {characters.map((character) => {
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
          {isLoading && <div>Loading ...</div>}
          {hasError && <div>Sorry, an unexpected error occurred.</div>}
        </div>
      </div>
    </div>
  );
}

export default App;
