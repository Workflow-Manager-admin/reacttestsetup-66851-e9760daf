import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

/**
 * PUBLIC_INTERFACE
 * Header with navigation links for main site sections.
 * Uses NavLink for active style and is fully responsive.
 */
function Header() {
  return (
    <header className="header">
      <div className="header__brand">Test App</div>
      <nav className="header__nav">
        <NavLink end to="/" className="header__link">
          Home
        </NavLink>
        <NavLink to="/about" className="header__link">
          About
        </NavLink>
        <NavLink to="/contact" className="header__link">
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
