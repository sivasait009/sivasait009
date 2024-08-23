import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SiteDevelopment.css'; // This will be used for custom styles

const SiteDevelopments = () => {
  const navigate = useNavigate(); // Hook to navigate back

  const developments = [
    {
      title: "Building Information Modeling (BIM)",
      description: "BIM is a digital representation of the physical and functional characteristics of a building. It enhances collaboration between architects, engineers, and contractors, leading to more accurate designs, fewer errors, and better project management.",
      impact: "Reduces project delays, minimizes costs, and allows for more efficient construction processes."
    },
    {
      title: "Sustainable Construction and Green Building",
      description: "With increasing environmental concerns, sustainable construction practices have become essential. These include using eco-friendly materials, energy-efficient designs, and sustainable waste management techniques.",
      impact: "Reduced carbon footprint, long-term cost savings, and compliance with regulatory standards."
    },
    {
      title: "Prefabrication and Modular Construction",
      description: "Prefabrication involves manufacturing building components off-site and assembling them on-site. Modular construction takes this a step further by creating entire sections or modules of a building off-site.",
      impact: "Faster project timelines, reduced material waste, and improved quality control."
    },
    {
      title: "Drones and Aerial Imaging",
      description: "Drones are increasingly used in construction for site surveys, aerial imaging, and monitoring project progress. They provide high-resolution images and real-time data.",
      impact: "Enhanced accuracy in site analysis, better project management, and improved safety."
    },
    {
      title: "Advanced Construction Materials",
      description: "Innovations in materials like self-healing concrete, 3D-printed materials, and graphene-enhanced composites are transforming how structures are built.",
      impact: "Increased durability, lower maintenance costs, and more sustainable building options."
    },
    {
      title: "Smart Buildings and IoT Integration",
      description: "The Internet of Things (IoT) is revolutionizing smart buildings with connected devices that monitor energy usage, manage building systems, and provide data analytics.",
      impact: "Improved operational efficiency, better resource management, and enhanced building performance."
    },
    {
      title: "Construction Management Software and Digital Twins(3D)",
      description: "Construction management platforms provide real-time updates, track progress, manage resources, and streamline communication among stakeholders. Digital twins create a virtual replica of a building for monitoring and predictive maintenance.",
      impact: "Enhanced project coordination, reduced risks, and optimized decision-making."
    },
    // Add more development items here following the same structure
  ];

  return (
    <div className="site-developments">
      <h1>Construction Industry Developments</h1>
      <div className="card-container">
        {developments.map((development, index) => (
          <div className="card" key={index}>
            <h2>{development.title}</h2>
            <p><strong>Description:</strong> {development.description}</p>
            <p><strong>Impact:</strong> {development.impact}</p>
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

export default SiteDevelopments;