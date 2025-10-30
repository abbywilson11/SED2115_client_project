import React from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import ResourcesSection from "./components/ResourcesSection";
import Footer from "./components/Footer";
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
