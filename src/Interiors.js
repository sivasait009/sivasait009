import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Interiors.css'; // Custom styles for Interiors component

const Interiors = () => {
  const navigate = useNavigate();

  const interiorsList = [
    {
      title: "Modern Minimalist Interiors",
      description: "Characterized by clean lines, neutral color palettes, and minimal decor, modern minimalist interiors focus on functionality and simplicity.",
      features: "Sleek furniture, open spaces, neutral tones, and minimal decor."
    },
    {
      title: "Industrial Style Interiors",
      description: "Inspired by urban lofts and warehouses, industrial style interiors feature raw, unfinished materials such as exposed brick, metal, and wood.",
      features: "Exposed brick walls, metal fixtures, vintage furniture, and neutral tones."
    },
    {
      title: "Scandinavian Interiors",
      description: "A blend of functionality, simplicity, and coziness, Scandinavian interiors are known for their light colors, natural materials, and a sense of warmth.",
      features: "Light wood, cozy textiles, minimalistic furniture, and functional design."
    },
    {
      title: "Bohemian Interiors",
      description: "Bohemian style interiors are eclectic, colorful, and full of personality. They often feature a mix of patterns, textures, and global influences.",
      features: "Layered textiles, vibrant colors, vintage furniture, and eclectic decor."
    },
    {
      title: "Mid-Century Modern Interiors",
      description: "A design style that originated in the mid-20th century, featuring organic shapes, clean lines, and a mix of natural and man-made materials.",
      features: "Geometric patterns, sleek furniture, wood tones, and pops of color."
    }
  ];

  return (
    <div className="interiors">
      <h1>Interior Design Styles</h1>
      <div className="card-container">
        {interiorsList.map((interior, index) => (
          <div className="card" key={index}>
            <h2>{interior.title}</h2>
            <p><strong>Description:</strong> {interior.description}</p>
            <p><strong>Features:</strong> {interior.features}</p>
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

export default Interiors;
