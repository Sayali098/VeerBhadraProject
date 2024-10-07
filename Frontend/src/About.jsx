


import React from 'react';
import './About.css'; // Custom CSS for styling
import heroImg from './assets/Hero.png'

const About = () => {
  return (
<div>


 <div className="carousel-container">
      <div className="carousel-track">
        
        {Array(4).fill(
          <>
            <div className="carousel-item">
             <img src={heroImg}></img>
            </div>
            <div className="carousel-item">
            <img src={heroImg}></img>
            </div>
            <div className="carousel-item">
              <h2>Project Reviews</h2>
              <p>100</p>
            </div>
            <div className="carousel-item">
              <h2>Projects Ongoing</h2>
             
              <p>8.</p>
            </div>
          </>
        )}
      </div>
    </div> 

</div>
  );
};

export default About;
