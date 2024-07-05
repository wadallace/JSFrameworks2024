// Import what you need from React here
// Import "TranslatorContext"

function Languages() {
  /**
   * You will need to add something here. This component should be similar to the "CreateAccount" component in the first context API exercise.
   * @see exercises/08a-context-api/src/App.jsx
   * @see solutions/08a-context-api/App.solutions.jsx
   */

  return (
    <>
      {/**
       * Modify the button so that when it is clicked, it will change the language in state to "en". For help,
       * @see exercises/08a-context-api/src/App.jsx
       * @see solutions/08a-context-api/App.solutions.jsx
       */}
      <button type="button" className="btn btn-link btn-sm">
        English
      </button>
      |
      {/**
       * Modify the button so that when it is clicked, it will change the language in state to "es".
       */}
      <button type="button" className="btn btn-link btn-sm">
        Español
      </button>
    </>
  );
}

export default Languages;
