// Import what you need from React
import translations from "./CreateAccountTranslations.json";
// Import "TranslatorContext"

function CreateAccount() {
  /**
   * You will need to add something here. This component should be similar to the "CreateAccount" component in the first context API exercise.
   * @see exercises/08a-context-api/src/App.jsx
   * @see solutions/08a-context-api/App.solutions.jsx
   */

  /**
   * Replace "en" with a constant or variable.
   */
  const t = translations["en"];

  /**
   * You do not have to change anything below this line.
   */
  return (
    <>
      <h1 className="h3">{t["Create a New Account"]}</h1>
      <p className="lead">{t["It’s quick and easy."]}</p>
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
    </>
  );
}

export default CreateAccount;
