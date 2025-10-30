// src/components/ResourcesSection.jsx
import React, { useEffect, useState } from "react";

// Deployed backend URL
const BACKEND_URL = "https://hpic-sickle-cell-support.onrender.com";

// Static fallback resources
const STATIC_RESOURCES = [
  {
    id: 1,
    title: "A guide for people with sickle cell disease",
    link: "/brochures/qs-sickle-cell-disease-patient-guide-en.pdf",
  },
  {
    id: 2,
    title: "Un guide pour les personnes atteintes de drepanocytose",
    link: "/brochures/qs-sickle-cell-disease-patient-guide-fr.pdf",
  },
  {
    id: 3,
    title: "Caring for people of all ages",
    link: "/brochures/qs-sickle-cell-disease-quality-standard-en.pdf",
  },
  {
    id: 4,
    title: "Soins aux personnes de tous ages",
    link: "/brochures/qs-sickle-cell-disease-quality-standard-fr.pdf",
  },
  {
    id: 5,
    title: "So my child has sickle cell disease...",
    link: "/brochures/So my child has Sickle Cell Disease - SCAGO v1-2019.pdf",
  },
  {
    id: 6,
    title: "Mon enfant est donc atteint d'anemie falciforme...",
    link: "/brochures/so-my-child-has-sickle-cell-disease-scagov3_fr.pdf",
  },
];

export default function ResourcesSection() {
  const [resources, setResources] = useState(STATIC_RESOURCES);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/resources`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.length > 0) {
          setResources(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching resources:", err);
        setError("Using static resources.");
        setLoading(false);
      });
  }, []);

  return (
    <section className="resources">
      <h2>Educational Resources</h2>
      <p>
        Explore these brochures and guides to learn more about Sickle-Cell Disease:
      </p>

      {loading && <p>Loading resources...</p>}
      {error && <p>{error}</p>}

      <div className="resources-list">
        {resources.map((item) => (
          <div key={item.id} className="resource-card">
            <h3>{item.title}</h3>
            {item.description && <p>{item.description}</p>}
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              📄 View Brochure
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
