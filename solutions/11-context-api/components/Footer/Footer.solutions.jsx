/**
 * I'm importing useContext() from React and "TranslatorContext"
 */
import { useContext } from "react";
import { TranslatorContext } from "../../contexts/TranslatorContext";
import Languages from "../Languages/Languages";
import translations from "./FooterTranslations.json";

function Footer() {
  /**
   * I'm getting the language from the Context API.
   */
  const [language] = useContext(TranslatorContext);

  /**
   * I'm getting the translations using the "language" that I get from the Context API.
   * @see exercises/08b-context-api/src/components/Footer/FooterTranslations.json
   * @type {Object} this is an object of translations for a given language.
   * If "language" is "en", it will be English translations.
   * If "language" is "es", it will be Spanish translations.
   * @example
   * const t = translations["es"];
   * console.log(t);
   * // Result:
   * {
   *   "No One": "Ninguno"
   * }
   */
  const t = translations[language];
  return (
    <div className="bg-light text-center pt-2 pb-2">
      <div>
        <small>
          {t["No One"]} &copy; {new Date().getFullYear()}
        </small>
      </div>
      <div>
        <small>
          <Languages />
        </small>
      </div>
    </div>
  );
}

export default Footer;
