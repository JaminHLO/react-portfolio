import React, { useState } from 'react';
import Header from "./Header";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import '../styles/style.css';


function Section() {

  const [section, setSection] = useState('aboutMe');

  const handleNavSelection = (event) => {
    const {target} = event; 
    const inputId = target.id;
    console.log(`nav bar item: ${inputId}`);
    setSection(inputId);
  }

  // const ;

  return (
    <div className="header container">
      <Header 
        section={section}
        handleNavSelection={handleNavSelection}
      />
      {
        (section==='aboutMe') ?
        (<AboutMe />) :
        (section==='portfolio') ?
        (<Portfolio />) :
        (section==='contact') ?
        (<Contact />) :
        ('/')
      }
    </div>
  );
}

export default Section;
