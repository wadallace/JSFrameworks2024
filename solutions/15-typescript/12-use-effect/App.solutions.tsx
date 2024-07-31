import { useEffect, useState } from "react";
import "./App.css";
import ronSwansonImage from "./assests/ronswanson.png";
import axios from "axios";

function App() {
  const [quote, setQuote] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  /**
   * Including types for the response, so that we aren't using type `any`
   */
  type QuoteResponse = string[];
  /**
   * Making the AJAX request
   */
  const fetchQuote = async () => {
    setIsLoading(true);
    /**
     * @see https://github.com/jamesseanwright/ron-swanson-quotes
     */
    try {
      const { data } = await axios.get<QuoteResponse>(
        "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
      );
      setQuote(data[0]); // Using data[0] because data is an array
    } catch (err) {
      // Your response if there is an error with the API
      console.error(err);
      setHasError(true);
    }
    setIsLoading(false);
  };
  /**
   * I want to put the AJAX request within the useEffect hook.
   */
  useEffect(() => {
    fetchQuote();
  }, []); // Because of "[]", this will only make an AJAX request when the component first renders

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
        {isLoading && <div>Loading ... </div>}
        {/* Display an error message if the API fails */}
        {hasError && (
          <div className="error bg-white text-secondary border border-secondary mb-4">
            Oops! An unexpected error has occurred.
          </div>
        )}
        <blockquote
          id="quote"
          className="blockquote bg-dark text-white border-0 mb-4"
        >
          {quote}
        </blockquote>
      </div>
    </body>
  );
}

export default App;
