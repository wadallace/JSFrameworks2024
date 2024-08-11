import { BrowserRouter } from "react-router-dom";
import { AccessTokenProvider } from "../../contexts/AccessTokenContext";
import Router from "../Routing/Router";

function App() {
  return (
    <BrowserRouter>
      <AccessTokenProvider>
        <Router />
      </AccessTokenProvider>
    </BrowserRouter>
  );
}

export default App;
