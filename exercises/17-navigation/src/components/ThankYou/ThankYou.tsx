import NavBar from "../NavBar/NavBar";
import "./ThankYou.css";

function ThankYou() {
  return (
    <div className="ThankYou uk-flex uk-flex-column uk-flex-center">
      <NavBar />
      <div className="uk-container uk-flex-1 uk-flex uk-flex-column uk-flex-middle uk-flex-center">
        <h1>Thank You!</h1>
        <div>Your order should be shipped in the next two business days.</div>
      </div>
    </div>
  );
}

export default ThankYou;
