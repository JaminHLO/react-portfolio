import React from 'react';

// style for footer logo icons and footer position
const styles = {
  logos: {
    maxHeight: "40px"
  },
  footer: {
    position: "fixed",
    left: 0,
    bottom: 0,
    right: 0,
    paddingBottom: "20px"
  }
};

// contact me section with logo links to linked in, github, and loom
function Footer() {
  return (
    <footer style={styles.footer}>
      <div className="container">
        <nav className="navbar justify-content-center">
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
              <img src='./images/github_mark_white.png' 
              alt='GitHub' style={styles.logos}/>
            </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
