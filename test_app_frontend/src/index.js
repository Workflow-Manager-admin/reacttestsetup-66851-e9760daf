import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// Import BrowserRouter for routing, the new App will include the layout
import { BrowserRouter } from "react-router-dom";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
