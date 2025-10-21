// React component to display sickle-cell disease brochures and info links
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ResourcesSection() {
  // Store resource data from backend
  const [resources, setResources] = useState([]);

  // Fetch resource data when component loads
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/resources")
      .then(res => setResources(res.data))
      .catch(err => console.error("Error fetching resources:", err));
  }, []);

  // Render the list of brochures with links
  return (
    <section className="resources">
      <h2>Educational Resources</h2>
      <p>Explore these brochures and guides to learn more about Sickle-Cell Disease:</p>

      <div className="resources-list">
        {resources.map(item => (
          <div key={item.id} className="resource-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              View Brochure
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
