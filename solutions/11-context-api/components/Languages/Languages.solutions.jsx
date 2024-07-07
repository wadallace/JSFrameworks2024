/**
 * I'm importing useContext() from React and "TranslatorContext"
 */
import { useContext } from "react";
import { TranslatorContext } from "../../contexts/TranslatorContext";

function Languages() {
  /**
   * I need "setLangauge", which I get from the Context API,
   * so that I can change the language when the user clicks on
   * one of the language buttons below.
   */
  const [language, setLanguage] = useContext(TranslatorContext);
  return (
    <>
      {/**
       * Modify the button so that when it is clicked, it will change the language in state to "en". For help,
       * @see exercises/08a-context-api/src/App.jsx
       * @see solutions/08a-context-api/App.solutions.jsx
       */}
      <button
        type="button"
        className="btn btn-link btn-sm"
        onClick={() => setLanguage("en")}
      >
        English
      </button>
      |
      {/**
       * Modify the button so that when it is clicked, it will change the language in state to "es".
       */}
      <button
        type="button"
        className="btn btn-link btn-sm"
        onClick={() => setLanguage("es")}
      >
        Español
      </button>
    </>
  );
}

export default Languages;
