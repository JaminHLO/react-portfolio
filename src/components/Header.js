import React from 'react';
// import '../styles/Header.css';

const styles = {
  navbarHighlight: {
    textDecoration: 'underline'
  },
  navbarDefault: {
    color: 'grey'
  }
};

function Header( { section, handleNavSelection } ) {
  return (
    <div className="container">
      <div className="flex-row">
        
        <nav className="navbar navbar-dark bh-dark align-end">

          {(section==='aboutMe') ?
            (<button id="aboutMe"
            onClick={handleNavSelection} 
            style={styles.navbarHighlight}
            >About Me</button>) :
            (<button id="aboutMe"
            onClick={handleNavSelection} 
            style={styles.navbarDefault}
            >About Me</button>)
          }

          {(section==='portfolio') ?
            (<button id="portfolio"
            onClick={handleNavSelection} 
            style={styles.navbarHighlight}
            >Portfolio</button>) :
            (<button id="portfolio"
            onClick={handleNavSelection} 
            style={styles.navbarDefault}
            >Portfolio</button>)
          }

          {(section==='contact') ?
            (<button id="contact"
            onClick={handleNavSelection} 
            style={styles.navbarHighlight}
            >Contact</button>) :
            (<button id="contact"
            onClick={handleNavSelection} 
            style={styles.navbarDefault}
            >Contact</button>)
          }

          {(section==='resume') ?
            (<button id="resume"
            onClick={handleNavSelection} 
            style={styles.navbarHighlight}
            >Resume</button>) :
            (<button id="resume"
            onClick={handleNavSelection} 
            style={styles.navbarDefault}
            >Resume</button>)
          }

        </nav>
        <header >
          <h1 className="h3">Jamin Hogan - web performance engineer</h1>
        </header>
      </div>
    </div>
  );
}

export default Header;
