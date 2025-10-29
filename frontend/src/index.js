// index.js (or main.jsx)
// Entry point of the HPIC React app

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";     // Global styles
import App from "./App";  // Main app component

// Example
const response = await fetch(`${import.meta.env.VITE_API_URL}/api/resources`);
const data = await response.json();

// Create the root element and render the app inside it
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />   {/* Main application */}
  </React.StrictMode>
);
