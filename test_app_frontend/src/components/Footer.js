import React from "react";
import "./Footer.css";

/**
 * PUBLIC_INTERFACE
 * Footer shown at the bottom of all pages.
 * Renders a fixed copyright/text.
 */
function Footer() {
  return (
    <footer className="footer">
      <small>&copy; {new Date().getFullYear()} Test App &mdash; Demo React App</small>
    </footer>
  );
}

export default Footer;
