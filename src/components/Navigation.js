import React from 'react';

const styles = {
  navbarHighlight: {
    textDecoration: 'underline'
  },
  navbarDefault: {
    color: 'grey'
  }
};

// navigation bar for top of all screens with current page highlighted
function Navigation( { section, handleNavSelection } ) {
  return (
      <div className="col-12">
        <nav className="site-navigation position-relative text-right"
        role="navigation">

            {(section==='aboutMe') ?
              (<button id="aboutMe" 
              onClick={handleNavSelection} 
              style={styles.navbarHighlight}
              >About Me</button>) :
              (<button id="aboutMe" 
              onClick={handleNavSelection} 
              style={styles.navbarDefault}
              >About Me</button>)}

            {(section==='portfolio') ?
              (<button id="portfolio" 
              onClick={handleNavSelection} 
              style={styles.navbarHighlight}
              >Portfolio</button>) :
              (<button id="portfolio" 
              onClick={handleNavSelection} 
              style={styles.navbarDefault}
              >Portfolio</button>)}

            {(section==='contact') ?
              (<button id="contact" 
              onClick={handleNavSelection} 
              style={styles.navbarHighlight}
              >Contact</button>) :
              (<button id="contact" 
              onClick={handleNavSelection} 
              style={styles.navbarDefault}
              >Contact</button>)}

            {(section==='resume') ?
              (<button id="resume" 
              onClick={handleNavSelection} 
              style={styles.navbarHighlight}
              >Resume</button>) :
              (<button id="resume" 
              onClick={handleNavSelection} 
              style={styles.navbarDefault}
              >Resume</button>)}

        </nav>
      </div>
  );
}

export default Navigation;
