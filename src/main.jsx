// ReactDOM creates the link between React and the webpage
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // global styles (optional)

// "createRoot" attaches your app to the HTML <div id="root">
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* This renders your App component inside the root div */}
    <App />
  </React.StrictMode>
);
