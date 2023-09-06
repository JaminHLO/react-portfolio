import React from 'react';
import '../styles/Project.css';

const styles = {
    logos: {
      maxHeight: "40px",
      maxWidth: "40px"
    }
  }

  // function for individual projects in my portfolio
function Project({isFeatured, deployedProj, titleProj, repoProj, ssProj, altProj}) {
  return (
  <div>
      <div className={(isFeatured) ?
        ("project featured") : ("project")}>
          <a href={deployedProj} target="_blank" rel="noreferrer">
              <h3>{titleProj}</h3>
              <div>
                <a href={repoProj}>
                  <img src='./react-portfolio/images/github_mark_white.png' 
                  alt='GitHub Repository' style={styles.logos}/>
                </a>
              </div>
              <img src={ssProj} alt={altProj} />
          </a>
      </div> 
  </div>
  );
}

export default Project;
