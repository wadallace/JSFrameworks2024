// Import what you need from React
import { useState } from "react";
import "./App.css";
import translations from "./assets/translations.json";

/**
 * Declare createContext() here.
 */

function App() {
  /**
   * Set state here. (See useState in "CreateAccount" below.)
   */

  /**
   * You will need to return more than just <CreateAccount />.
   */
  return <CreateAccount />;
}

function CreateAccount() {
  /**
   * You will need to replace "useState" with something else.
   */
  const [language, setLanguage] = useState("en");

  /**
   * @see src/assets/translations.json
   * @type {Object} this is an object of translations for a given language.
   * If "language" is "en", it will be English translations.
   * If "language" is "es", it will be Spanish translations.
   * @example
   * const t = translations["es"];
   * console.log(t);
   * // Result:
   * {
   *   "Create a New Account": "Crea una cuenta",
   *   "It’s quick and easy.": "Es rápido y fácil.",
   *    // ...
   * }
   */
  const t = translations[language];

  /**
   * You will not need to change anything below this line.
   */
  return (
    <div className="container pt-4 pb-4">
      <div className="d-flex justify-content-between">
        <div>
          <h1 className="h3">{t["Create a New Account"]}</h1>
          <p className="lead">{t["It’s quick and easy."]}</p>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-link btn-sm"
            onClick={() => setLanguage("en")}
          >
            English
          </button>
          |
          <button
            type="button"
            className="btn btn-link btn-sm"
            onClick={() => setLanguage("es")}
          >
            Español
          </button>
        </div>
      </div>
      <form>
        <div className="row g-3">
          <div className="col-sm-6">
            <label htmlFor="firstName">{t["First Name"]}</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
            />
          </div>
          <div className="col-sm-6">
            <label htmlFor="lastName">{t["Last Name"]}</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
            />
          </div>
        </div>
        <div className="row gx-3 mt-3">
          <div className="col-sm-6">
            <label htmlFor="email">{t["Email"]}</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
            />
          </div>
        </div>
        <div className="row gx-3 mt-3">
          <div className="col-sm-6">
            <label htmlFor="password">{t["Password"]}</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
            />
          </div>
        </div>
        <p className="mt-3">
          <small>
            {
              t[
                "By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time."
              ]
            }
          </small>
        </p>
        <button type="submit" className="btn btn-lg btn-success">
          {t["Sign Up"]}
        </button>
      </form>
    </div>
  );
}

export default App;
