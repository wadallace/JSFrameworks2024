/**
 * I'm importing useContext() from React and "TranslatorContext"
 */
import { useContext } from "react";
import { TranslatorContext } from "../../contexts/TranslatorContext";
import translations from "./LoginTranslations.json";
// Import "TranslatorContext"

function Login() {
  /**
   * I'm getting the language from the Context API.
   */
  const [language] = useContext(TranslatorContext);

  /**
   * I'm getting the translations using the "language" that I get from the Context API.
   * @see exercises/08b-context-api/src/components/Login/LoginTranslations.json
   * @type {Object} this is an object of translations for a given language.
   * If "language" is "en", it will be English translations.
   * If "language" is "es", it will be Spanish translations.
   * @example
   * const t = translations["es"];
   * console.log(t);
   * // Result:
   * {
   *    "Email": "Correos electrónicos",
   *    "Password": "Contraseña",
   *    "Login In": "Iniciar sesión"
   */
  const t = translations[language];
  return (
    <form className="row g-2">
      <div className="col-auto">
        <input
          className="form-control mr-sm-2"
          type="email"
          placeholder={t["Email"]}
          aria-label={t["Email"]}
        />
      </div>
      <div className="col-auto">
        <input
          className="form-control mr-sm-2"
          type="password"
          placeholder={t["Password"]}
          aria-label={t["Password"]}
        />
      </div>
      <div className="col-auto">
        <button className="btn btn-dark my-2 my-sm-0" type="submit">
          {t["Login In"]}
        </button>
      </div>
    </form>
  );
}

export default Login;
