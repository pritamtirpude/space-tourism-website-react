import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Mobile from "../Mobile/Mobile";
import Logo from "../../assets/logo.svg";
import HamburgerIcon from "../../assets/icon-hamburger.svg";
import CloseIcon from "../../assets/icon-close.svg";
import "./Navbar.scss";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="navbar-container">
      {/* <div className="line"></div> */}
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <Link to="/" className={pathname === "/" ? "active" : ""}>
              <span>00</span> Home
            </Link>
          </li>
          <li>
            <Link
              to="/destination"
              className={pathname === "/destination" ? "active" : ""}
            >
              <span>01</span> Destination
            </Link>
          </li>
          <li>
            <Link to="/crew" className={pathname === "/crew" ? "active" : ""}>
              <span>02</span> Crew
            </Link>
          </li>
          <li>
            <Link
              to="/technology"
              className={pathname === "/technology" ? "active" : ""}
            >
              <span>03</span> Technology
            </Link>
          </li>
        </ul>
      </div>
      <div className="mobile-nav">
        <img
          src={toggleMenu ? CloseIcon : HamburgerIcon}
          alt="icon"
          onClick={() => setToggleMenu(!toggleMenu)}
        />
      </div>
      {toggleMenu && <Mobile toggle={toggleMenu} />}
    </nav>
  );
};

export default Navbar;
