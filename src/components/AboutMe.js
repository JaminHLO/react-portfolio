import React from 'react';
import '../styles/AboutMe.css';

// function to return react formatted about me section
function AboutMe() {
  return (
  <div className="container">
    <h2 id="about">About Me</h2>
    <section className="aboutMe">
        <p className="text-light">Welcome to my Professional Portfolio. 
          Please allow me to demonstrate my skills sharpened during 
          the Spring 2023 Georgia Tech Coding Bootcamp. After 
          graduating from Tech with a Computer Science degree in 2003, 
          I began a legal career spanning two decades. 
          It is time to return to my original passion!</p>
          <div className="aboutMe">
            <img src="./images/JaminPNG.png" alt="Jamin Hogan" />
          </div>
    </section>
  </div>
  );
}

export default AboutMe;
