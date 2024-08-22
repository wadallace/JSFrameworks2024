import "./App.css";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchCharacters = async () => {
  const { data } = await axios.get("https://rickandmortyapi.com/api/character");
  return data.results;
};

function App() {
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

  return (
    <div className="container">
      <div className="row text-center" id="body">
        <h1 id="title-head">{/* Insert character name */}</h1>
        <div id="main-img">
          <a href="http://rickandmorty.wikia.com/wiki/Rick_Sanchez">
            {/* Add an alt and src to this image */}
            <img
              height="250"
              src="https://i.ytimg.com/vi/UFFi9PWKDjg/maxresdefault.jpg"
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
          {isPending && <div>Loading ...</div>}
          {isError && <div>Sorry, an unexpected error occurred.</div>}
        </div>
      </div>
    </div>
  );
}

export default App;
