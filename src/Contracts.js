import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Contracts.css'; // Custom styles for the Contracts component

const Contracts = () => {
  const navigate = useNavigate();

  const contractsList = [
    {
      title: "Fixed-Price Contracts",
      description: "A fixed-price contract is where the payment amount does not depend on the resources or time expended. It's beneficial when the scope is clearly defined.",
      benefits: "Predictable costs, low risk for buyers, simple payment terms."
    },
    {
      title: "Cost-Plus Contracts",
      description: "In a cost-plus contract, the contractor is paid for all project expenses plus an additional amount for profit. This type is common when the scope is flexible or undefined.",
      benefits: "Transparency in expenses, suitable for complex projects, encourages quality work."
    },
    {
      title: "Time and Materials Contracts",
      description: "Time and materials contracts involve payment based on the time spent and materials used. These are ideal for projects where the scope is uncertain or likely to change.",
      benefits: "Flexibility, adaptable to project changes, suitable for iterative work."
    },
    {
      title: "Unit Price Contracts",
      description: "Unit price contracts are based on the cost per unit of work, allowing flexibility in projects where quantities of work are uncertain.",
      benefits: "Clarity on unit costs, scalable for varying project sizes, fair pricing for both parties."
    },
    {
      title: "Incentive Contracts",
      description: "Incentive contracts offer rewards for achieving certain performance targets, such as finishing early or under budget.",
      benefits: "Motivates contractors, encourages efficiency, aligns incentives with project goals."
    }
  ];

  return (
    <div className="contracts">
      <h1>Types of Construction Contracts</h1>
      <div className="card-container">
        {contractsList.map((contract, index) => (
          <div className="card" key={index}>
            <h2>{contract.title}</h2>
            <p><strong>Description:</strong> {contract.description}</p>
            <p><strong>Benefits:</strong> {contract.benefits}</p>
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

export default Contracts;
