import React, { useContext } from "react";
import { Link } from "react-router-dom";

import ThemeContext from "../../Context/ThemeContext";
import './n-navbar.css'

const Navbar = props => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const constrat = theme === "light" ? "dark" : "light";
  return (
    <nav className={`shadow-sm fixed-top navbar navbar-expand-sm navbar-${theme} bg-${theme} py-3 d-flex `}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          lacin
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/comments">
                Comments
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
