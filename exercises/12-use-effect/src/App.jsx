// Import useEffect here
import "./App.css";
import ronSwansonImage from "./assests/ronswanson.png";
// import Axios (or use Fetch)

function App() {
  /**
   * Set up your state
   */

  /**
   * Make an AJAX call with the useEffect hook
   */

  return (
    <body className="bg-warning text-center">
      <img
        src={ronSwansonImage}
        alt=""
        width="450"
        height="423"
        className="mt-4"
      />
      <div className="container">
        {/* Display a loading message */}
        {/* Display an error message if the API fails */}
        <blockquote
          id="quote"
          className="blockquote bg-dark text-white border-0 mb-4"
        >
          {/* Complete me */}
        </blockquote>
      </div>
    </body>
  );
}

export default App;
