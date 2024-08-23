import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Ventures.css'; // Custom styles for Ventures component

const Ventures = () => {
  const navigate = useNavigate();

  const venturesList = [
    {
      title: "Real Estate Ventures",
      description: "Companies or partnerships that invest in and develop residential, commercial, and mixed-use real estate projects. These ventures often involve acquiring land, planning, and constructing buildings for sale or lease.",
      examples: "Large construction firms like Skanska, Bechtel, and L&T have real estate development arms that focus on such projects."
    },
    {
      title: "Joint Ventures in Construction",
      description: "Joint ventures are partnerships between two or more entities (often construction companies or contractors) that collaborate on a specific construction project. These partnerships allow companies to combine resources, share risks, and leverage expertise.",
      examples: "Many major infrastructure projects, like highways, airports, or large commercial buildings, are developed by joint ventures formed between local and international firms."
    },
    {
      title: "Specialized Construction Ventures",
      description: "These ventures focus on niche areas like green construction, smart buildings, sustainable infrastructure, or specialized civil engineering projects. They often involve companies with unique technical expertise.",
      examples: "Companies focused solely on renewable energy installations (like solar farms), or firms specializing in advanced building materials and technologies."
    },
    {
      title: "PPP (Public-Private Partnership) Ventures",
      description: "In large-scale infrastructure projects, PPP ventures involve collaborations between government entities and private sector firms. These ventures work on public infrastructure like roads, bridges, and utilities while ensuring profitability for private companies.",
      examples: "Many metro rail projects, highways, and public facilities worldwide are built under PPP agreements."
    },
    {
      title: "Innovative Startups in Construction Ventures",
      description: "With technology increasingly integrated into construction, many startups focus on construction management software, 3D printing in construction, or innovative building materials. Venture capital is heavily involved in scaling these startups.",
      examples: "Companies like Katerra (modular construction), ICON (3D-printed homes), and PlanGrid (construction management software) are some well-known examples."
    }
  ];

  return (
    <div className="ventures">
      <h1>Construction Industry Ventures</h1>
      <div className="card-container">
        {venturesList.map((venture, index) => (
          <div className="card" key={index}>
            <h2>{venture.title}</h2>
            <p><strong>Description:</strong> {venture.description}</p>
            <p><strong>Examples:</strong> {venture.examples}</p>
          </div>
        ))}
      </div>

      {/* Back Button */}
      <div className="back-button-container">
        <button className="back-button" onClick={() => navigate(-1)}>Back To HomePage</button>
      </div>
    </div>
  );
};

export default Ventures;
