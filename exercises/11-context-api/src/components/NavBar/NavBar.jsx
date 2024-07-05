import Login from "../Login/Login";

function NavBar() {
  return (
    <nav className="navbar navbar-light bg-warning">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          GossipBook
        </a>
        <Login />
      </div>
    </nav>
  );
}

export default NavBar;
