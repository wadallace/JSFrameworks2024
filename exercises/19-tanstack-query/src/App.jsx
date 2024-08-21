import "./App.css";
// import Axios (or use Fetch)
// import something else here

function App() {
  /**
   * Set up Tanstack Query here
   */

  return (
    <div className="container">
      <div className="row text-center" id="body">
        <h1 id="title-head">{/* Plugin character name here */}</h1>
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
            <select id="dropdown" type="text">
              <option></option>
              {/**
               * Loop through all characters. The value should be the character id.
               * @example in HTML
               * <option value="2" key="character-1">Morty Smith</option>
               */}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
