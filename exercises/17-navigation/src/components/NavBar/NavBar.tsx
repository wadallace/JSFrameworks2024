import { ReactElement } from "react";
import { Link } from "react-router-dom";

type NavBarProps = {
  children?: ReactElement;
};

function NavBar({ children }: NavBarProps) {
  return (
    <nav className="uk-navbar-container uk-navbar-transparent">
      <div className="uk-container">
        <div className="uk-navbar">
          <div className="uk-navbar-left">
            <ul className="uk-navbar-nav">
              <li>
                <Link to="/search">Search</Link>
              </li>
            </ul>
            {children}
          </div>
          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
              <li>
                <Link to="/checkout">Shopping Cart</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
