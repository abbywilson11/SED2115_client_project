import React from "react";
import Header from "./components/Header.jsx";           // add .jsx
import Table from "./components/Table.jsx";             // add .jsx
import ResourcesSection from "./components/ResourcesSection.jsx"; // add .jsx
import Footer from "./components/Footer.jsx";           // add .jsx
import "./App.css";

export default function App() {
  return (
    <div>
      <Header />
      <Table />
      <ResourcesSection />
      <Footer />
    </div>
  );
}
