import React from "react";
import Header from "./components/Header";
import ResourcesSection from "./components/ResourcesSection"; // New import
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <ResourcesSection /> {/* Add the new section here */}
      <Footer />
    </div>
  );
}
