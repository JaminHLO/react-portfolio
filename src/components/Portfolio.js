import React from 'react';
import '../styles/Portfolio.css';

function Portfolio() {
  return (
  <div>
    <h2 id="portfolio">My Portfolio</h2>
    <section>
        {/* <!-- This is the flexible list of projects --> */}
      <section className="project-list">

          {/* <!-- This is my featured project which displays larger --> */}
          <section className="project featured">
              <a href="https://home-hub-management.herokuapp.com/"
              target="_blank" rel="noreferrer">
                  <h3>HomeHub - Property Management Solution</h3>
                  <img src="./images/hh-home-02.png" 
                  alt="full-stack property management website solution for landlords and tenants" />
              </a>
          </section> 

          {/* <!-- This is my featured project which displays larger --> */}
          <section className="project">
              <a href="https://barosa19.github.io/marvelous-rental/"
              target="_blank" rel="noreferrer">
                  <h3>Marvelous Rentals</h3>
                  <img src="./images/marvel-rent-01.jpg" 
                  alt="website lists of rental properties and furnitures stores around a map showing their locations" />
              </a>
          </section> 

          {/* <!-- This is a regular project that displays at standard size --> */}
          <section className="project">
              <a href="https://jaminhlo.github.io/weather-dash/"
                  target="_blank" rel="noreferrer">
                  <h4>Weather Dashboard</h4>
                  <img src="https://raw.githubusercontent.com/JaminHLO/weather-dash/main/assets/images/wd-ss01.jpg" 
                  alt="website searchable weather and 5 day forecast" />
              </a>
          </section> 

          {/* <!-- This is a regular project that displays at standard size --> */}
          <section className="project">
              <a href="https://jaminhlo.github.io/daily-planner/"
                  target="_blank" rel="noreferrer">
                  <h4>Work Day Scheduler</h4>
                  <img src="https://github.com/JaminHLO/daily-planner/raw/main/assets/images/dp-ss03.jpg" 
                  alt="website with colorized daily planner" />
              </a>
          </section> 

          {/* <!-- This is a regular project that displays at standard size --> */}
          <section className="project">
              <a href="https://jaminhlo.github.io/coding-quiz/"
                  target="_blank" rel="noreferrer">
                  <h4>Coding Quiz</h4>
                  <img src="https://raw.githubusercontent.com/JaminHLO/coding-quiz/main/assets/images/cq-ss01.jpg" 
                  alt="website with quiz to test coding knowledge" />
              </a>
          </section> 

          {/* <!-- This is a regular project that displays at standard size --> */}
          <section className="project">
              <a href="https://jaminhlo.github.io/password-generator/"
                  target="_blank" rel="noreferrer">
                  <h4>Password Generator</h4>
                  <img src="https://github.com/JaminHLO/password-generator/raw/main/assets/images/pw_ss01.jpg" 
                  alt="website to generate passwords based on user parameters" />
              </a>
          </section> 

      </section>
    </section>
  </div>
  );
}

export default Portfolio;
