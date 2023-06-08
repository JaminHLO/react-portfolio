import React from 'react';
import '../styles/Project.css';

const styles = {
    logos: {
      maxHeight: "40px",
      maxWidth: "40px"
    }
  }

function Project({isFeatured, deployedProj, titleProj, repoProj, ssProj, altProj}) {
  return (
  <div>
          <section className={(isFeatured) ?
            ("project featured") : ("project")}>
              <a href={deployedProj} target="_blank" rel="noreferrer">
                  <h3>{titleProj}</h3>
                  <object><a href={repoProj}>
                    <img src='./images/gitHub-mark-white.png' 
                    alt='GitHub Repository' style={styles.logos}/>
                    </a></object>
                  <img src={ssProj} 
                  alt={altProj} />
              </a>
          </section> 

  </div>
  );
}

export default Project;
