// Import React and CSS styling
import React from "react";
import "./App.css";

// Main App component
export default function App() {
  return (
    <div className="App">
      {/* ===== HEADER ===== */}
      <header>
        <h1>Sickle Cell Support & Guidance</h1>
        <p className="tagline">Empowering individuals and families through care and knowledge</p>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main>
        {/* Intro section */}
        <section className="intro">
          <h2>About Sickle Cell Disease</h2>
          <p>
            Sickle cell disease affects the shape of red blood cells, making it harder for oxygen
            to travel through the body. This app offers guidance, community, and trusted resources.
          </p>
        </section>

        {/* Resource Section */}
        <section className="resources">
          <h2>Brochures & Helpful Links</h2>

          {/* Example brochure / link cards */}
          <div className="card">
            <h3>Educational Brochure (PDF)</h3>
            <p>Learn about managing symptoms and treatment options.</p>
            <a href="https://www.cdc.gov/ncbddd/sicklecell/documents/scd-factsheet.pdf" target="_blank">
              View Brochure
            </a>
          </div>

          <div className="card">
            <h3>Community Resource Hub</h3>
            <p>Find programs and support groups near you.</p>
            <a href="https://www.sicklecelldisease.org/" target="_blank">
              Visit SCDAA
            </a>
          </div>

          <div className="card">
            <h3>Hospital Care Tips</h3>
            <p>Information for patients preparing for hospital visits.</p>
            <a href="https://www.cdc.gov/ncbddd/sicklecell/living-with.html" target="_blank">
              Read More
            </a>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer>
        <p>© 2025 Sickle Cell App | Educational use only</p>
      </footer>
    </div>
  );
}
