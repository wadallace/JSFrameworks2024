import "./App.css";
import NavBar from "../NavBar/NavBar";
import CreateAccount from "../CreateAccount/CreateAccount";
import Footer from "../Footer/Footer";
/**
 * I'm importing "TranslatorContext", which is what initializes the Context API
 */
import { TranslatorProvider } from "../../contexts/TranslatorContext";

function App() {
  /**
   * I'm wrapping all my content in the "TranslatorProvider" in the Context API.
   * Now any descendant component can access the things stored in the Context API.
   */
  return (
    <TranslatorProvider>
      <div className="App d-flex flex-column">
        <NavBar />
        <div className="container pt-4 pb-4">
          <CreateAccount />
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </TranslatorProvider>
  );
}

export default App;
