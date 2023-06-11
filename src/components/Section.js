import React, { useState } from 'react';
import Header from "./Header";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";

import '../styles/style.css';

// start point for website structure
function Section() {

  const [section, setSection] = useState('aboutMe');

  // event handler for the nav bar at top of all pages
  const handleNavSelection = (event) => {
    const {target} = event; 
    const inputId = target.id;
    // console.log(`nav bar item: ${inputId}`);
    setSection(inputId);
  }

  return (
    <div className="container p-1">
      <Header 
        section={section}
        handleNavSelection={handleNavSelection}
      />
      <div className="container p-4">
      {
        (section==='aboutMe') ?
        (<AboutMe />) :
        (section==='portfolio') ?
        (<Portfolio />) :
        (section==='contact') ?
        (<Contact />) :
        (<Resume />)
      }
      </div>
    </div>
  );
}

export default Section;
