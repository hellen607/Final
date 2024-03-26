import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import logo from "../../../src/assets/IMG-20231031-WA0001.jpg";
const NavBar = () => {
  const logoStyle = {
    width: "50px",
    marginRight: "6px",
  };
  const navbarShadow = {
    // borderBottom: "2px solid gray",
    // opacity: 0.5,
    // boxShadow: " 0 0 20px 0 rgba(0, 0, 0, 0.4)",
    // z-index: "22",
  };
  const firstName = "lele";
  return (
    <div style={navbarShadow}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link to={"/"} className="navbar-brand" href="#">
            <img src={logo} style={logoStyle} />
            HouseTic
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/rent"}>
                  Rent
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sale"}>
                  Sale
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true">
                  Blogs
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center justify-content-between gap-3">
              <form className="d-flex">
                {firstName === "" ? (
                  <Link to={"/login"}>
                    <button className="btn btn-success">Login 👤 </button>
                  </Link>
                ) : (
                  firstName && (
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {firstName}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  )
                )}
              </form>
              <Link to={"/dashboard"}>
                <button className="btn btn-success">Add Rent ➕ </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
