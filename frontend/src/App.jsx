import React from "react";
import Header from "./components/Header"; //import header
import ResourcesSection from "./components/ResourcesSection"; // import resources
import Footer from "./components/Footer"; //import footer
import "./App.css"; //import app style

export default function App() {
  return (
    <div>
      <Header />
      <ResourcesSection /> {/* Add the new section here */}
      <Footer />
    </div>
  );
}