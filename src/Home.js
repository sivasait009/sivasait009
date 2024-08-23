import React from 'react';
import './Home.css'; // Assuming you have a CSS file for styling
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Our Services:             Approval Drawings</h1>
        
      </header>
      <div className="main-content" >
      
      
        <div className="contact-info">
        
          <div className="info-box">
            <div>
              <h3>SITE DEVELOPMENTS</h3>
             
<ul>
                <li>Building Information Modeling (BIM)</li>
                <li> Sustainable Construction and Green Building</li>
                <li>Prefabrication and Modular Construction</li>
                <li> Advanced Construction Materials</li>
                <li>Drones and Aerial Imaging</li>
                <li> Smart Buildings and IoT Integrationg</li>
                <li> 3D Printing and Additive Manufacturing</li>


              </ul>





                {/* view more: <a href= "C:\Users\SivaSaiTattukolla\Desktop\skc\src\SiteDevelopment.JS">SITE DEVELOPMENT</a>  */}
                view more:<Link to="/SiteDevelopments">SiteDevelopments</Link>

            </div>
            </div>
            

          <div className="info-box">
           <div>
              <h3>VENTURES</h3>
         
              <ul>
                <li>Real Estate Ventures</li>
                <li> Joint Ventures in Construction</li>
                <li>Specialized Construction Ventures</li>
                <li> PPP (Public-Private Partnership) Ventures</li>
               <li>Innovative Startups in Construction Ventures</li> 

              </ul>

              view more:<Link to="/Ventures">Ventures</Link>

                {/* view more: <a href= "C:\Users\SivaSaiTattukolla\Desktop\skc\src\VENTURES.JS" target="_blank" rel="noopener noreferrer">VENTURES</a>  */}
                 

            </div>
          </div>
 
          <div className="info-box">
            <div>
              <h3>INTERIORS</h3>
              <ul>
                <li>Modern Minimalist Interiors</li>
                <li> Industrial Style Interiors</li>
                <li>Scandinavian Interiors</li>
                <li>  Bohemian Interiors</li>
               <li>Interior Fit-Outs</li> 
               <li> Mid-Century Modern Interiors</li>
               <li> Popular Interior Designers and Styles </li> 

              </ul>
              view more:<Link to="/Interiors">Interiors</Link>

           
                 {/* view more: <a href= "C:\Users\SivaSaiTattukolla\Desktop\skc\src\INTERIORS.JS" target="_blank" rel="noopener noreferrer">INTERIORS</a>  */}
            </div>
          </div>

          <div className="info-box">
            <div>
              <h4>R&B CONTRACTS</h4>
              <p>both the research (planning, design, etc.) and the construction phases.
              The contractor takes responsibility for conducting the necessary research, developing the design, and carrying out the construction according to the specifications agreed upon in the contract.</p>
              view more:<Link to="/Contracts">Contracts</Link>


                 {/* view more: <a href= "C:\Users\SivaSaiTattukolla\Desktop\skc\src\INTERIORS.JS"target="_blank" rel="noopener noreferrer">CONTRACTS</a>  */}
            </div>
            </div>
            </div>
</div>
    </div>
  );
};

export default Home;

