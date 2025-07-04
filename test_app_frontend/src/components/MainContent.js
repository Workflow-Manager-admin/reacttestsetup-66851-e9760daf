import React from "react";
import "./MainContent.css";

/**
 * PUBLIC_INTERFACE
 * MainContent wraps the routed page contents in a responsive, centered container.
 */
function MainContent({ children }) {
  return (
    <main className="main-content">
      {children}
    </main>
  );
}

export default MainContent;
