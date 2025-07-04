import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Set up custom color palette as CSS variables
const palette = {
  "--primary": "#1976d2",   // blue
  "--secondary": "#424242", // dark grey
  "--accent": "#ff4081",    // pink
};

function setPaletteVars(vars) {
  for (const key in vars) {
    document.documentElement.style.setProperty(key, vars[key]);
  }
}

// PUBLIC_INTERFACE
/**
 * App is the root component handling the light/modern theme, layout, and routing.
 */
function App() {
  // Apply color palette and light theme once on mount.
  useEffect(() => {
    setPaletteVars(palette);
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);

  // Scroll to top on route change for better single-page app UX.
  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }

  return (
    <div className="App" style={{minHeight: "100vh", display: "flex", flexDirection: "column"}}>
      <Header />
      <ScrollToTop />
      <MainContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          {/* Add other routes as needed */}
        </Routes>
      </MainContent>
      <Footer />
    </div>
  );
}

export default App;
