import { Link } from "react-router-dom";
import "../../../../assets/public/css/styles.css";
import logo from "../../../../assets/public/images/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-light fixed-top py-4">
        <div className="container px-lg-5">
          <div className="mx-2 ms-0">
            <i className="fa-solid fa-building-flag logo"> ITL Dashboard</i>
          </div>
          {/* <img src={logo} alt="Logo" className="logo" /> */}
          <div className="navbar-brand">
            <p className="text-center">
              République de Guinée
              <br /> Ministères des Affaires Etrangères <br />{" "}
              <em>Ambassade Guinée à Moscou</em>
            </p>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="posts">
                  Posts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
