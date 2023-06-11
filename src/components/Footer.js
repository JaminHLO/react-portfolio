import React from 'react';

// style for footer logo icons
const styles = {
  logos: {
    maxHeight: "40px"
  }
}

// contact me section with logo links to linked in, github, and loom
function Footer() {
  return (
    <footer>
      <div className="container">
        <nav className="navbar align-items-center">
            <a className="nav-brand" href="https://www.linkedin.com/in/jamin-hogan-esq-psd-45257211/">
              <img src='./images/linkedIn_PNG15.png' 
              alt='LinkedIn' style={styles.logos}/>
            </a>
            <a className="nav-brand" href="https://www.loom.com/spaces/All-Jamin-Loom-1256575">
              <img src='./images/loom_logo.png' 
              alt='Loom' style={styles.logos}/>
            </a>
            <a className="nav-brand" href="https://github.com/JaminHLO/" 
            target="_blank" rel="noreferrer">
              <img src='./images/gitHub-mark-white.png' 
              alt='GitHub' style={styles.logos}/>
            </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
