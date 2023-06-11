import React from 'react';
import '../styles/style.css';

const styles = {
  width: "60%"
}

// resume function with downloadable resume and list of skills
function Resume() {
  return (
  <div className="container">
    <h2 id="about">Resume</h2>
    <div className="row ">
        <div className="col-md-12 col-lg-6 text-center">
            <a href="./Jamin Resume - CS.pdf" 
            download="Jamin Hogan - Resume">
              <img src="./images/jamin_resume.png" 
              alt="Jamin's Resume" width={styles.width}
              className="resume" />
            </a>
        </div>
        <div className="pt-3 col-md-12 col-lg-6 ">
            <ul>
                <label>Front-end Proficiencies:</label>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Typescript</li>
                <li>JQuery</li>
                <li>Responsive Design</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Bulma</li>
            </ul>
            <ul>
              <label>Back-end Proficiencies</label>
              <li>APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL, Sequelize</li>
              <li>MongoDB, Mongoose</li>
              <li>REST</li>
              <li>GraphQL</li>
            </ul>
        </div>
    </div>
    
  </div>
  );
}

export default Resume;