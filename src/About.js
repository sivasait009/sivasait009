// import React from 'react';
// import './About.css';

// function About() {
//   return (
//     <div className="about-container">
//         <div className='info-box'>
     
//         <div className="profile-card">

         
//             <h3>TALARI RAM GOPAL</h3>
//             <p>CEO & Founder</p>
//             <img src=URL{"C:\Users\SivaSaiTattukolla\Desktop\skc\public\IMG_3640.jpg"} alt='trg'/>
//           </div>
//         </div>
//       <div className="about-content">
//         <h2>SREE KRISHNA ENGINEERS AND CONSULTANCY</h2>
//         <p>
//           SREE KRISHNA ENGINEERS AND CONSULTANCY has been a trusted name in the construction industry for over 4 years.
//           We specialize in delivering top-quality construction services across residential, commercial, and infrastructure projects.
//           Our commitment to excellence, safety, and innovation has earned us a reputation as one of the leading construction firms in the region.
      
//         Founded in 2020 JANUARY, we have grown from a small startup to an industry leader in delivering cutting-edge solutions.</p>
//       </div>
      
//     </div>
    
//   );
// }

// export default About;


import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="info-box">
        <div className="profile-card">
          <img src={process.env.PUBLIC_URL + "/IMG_3640.jpg"} alt="Talari Ram Gopal" className="profile-image" />
          <h3>TALARI RAM GOPAL</h3>
          <h4>B.Tech(civil engineer)</h4>
          <p>CEO & Founder</p>
        </div>
      </div>
      <div className="about-content">
        <h2>SREE KRISHNA ENGINEERS AND CONSULTANCY</h2>
        <p>
          SREE KRISHNA ENGINEERS AND CONSULTANCY has been a trusted name in the construction industry for over 4 years.
          We specialize in delivering top-quality construction services across residential, commercial, and infrastructure projects.
          Our commitment to excellence, safety, and innovation has earned us a reputation as one of the leading construction firms in the region.
        </p>
        <p>
          Founded in 2020 JANUARY, we have grown from a small startup to an industry leader in delivering cutting-edge solutions.
        </p>
      </div>
    </div>
  );
}

export default About;
