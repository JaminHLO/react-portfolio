import React from 'react';
import Project from './Project';


// function to return list of portfolio projects
function Portfolio() {
  return (
  <div>
    <h2 id="portfolio">My Portfolio</h2>
    <section>
      <section className="project-list">
            <Project 
                isFeatured={true} 
                deployedProj={"https://sports-connect-e11a3bbe276b.herokuapp.com/"}
                titleProj={"Sports Connect - Club and Private Event Manager"}
                repoProj={"https://github.com/JaminHLO/jaan-event-manager"}
                ssProj={"./react-portfolio/images/sc-ss-landing.jpg"}
                altProj={"full-stack club and event management portal"}
            />

            <Project 
                isFeatured={false} 
                deployedProj={"https://home-hub-management.herokuapp.com/"}
                titleProj={"HomeHub - Property Management Solution"}
                repoProj={"https://github.com/Anabel-Espinoza/HomeHub"}
                ssProj={"./react-portfolio/images/hh-home-02.png"}
                altProj={"full-stack property management website solution for landlords and tenants"}
            />

            <Project 
                isFeatured={false} 
                deployedProj={"https://jaminhlo.github.io/m2-rentals/"}
                titleProj={"Marvelous Rentals"}
                repoProj={"https://github.com/JaminHLO/m2-rentals"}
                ssProj={"./react-portfolio/images/marvel-rent-01.jpg"}
                altProj={"website lists of rental properties and furnitures stores around a map showing their locations"}
            />

            <Project 
                isFeatured={false} 
                deployedProj={"https://jaminhlo.github.io/weather-dash/"}
                titleProj={"Weather Dashboard"}
                repoProj={"https://github.com/JaminHLO/weather-dash"}
                ssProj={"https://raw.githubusercontent.com/JaminHLO/weather-dash/main/assets/images/wd-ss01.jpg"}
                altProj={"website searchable weather and 5 day forecast"}
            />

            <Project 
                isFeatured={false} 
                deployedProj={"https://jaminhlo.github.io/daily-planner/"}
                titleProj={"Work Day Scheduler"}
                repoProj={"https://github.com/JaminHLO/daily-planner"}
                ssProj={"https://github.com/JaminHLO/daily-planner/raw/main/assets/images/dp-ss03.jpg"}
                altProj={"website with colorized daily planner"}
            />

            <Project 
                isFeatured={false} 
                deployedProj={"https://jaminhlo.github.io/coding-quiz/"}
                titleProj={"Coding Quiz"}
                repoProj={"https://github.com/JaminHLO/coding-quiz"}
                ssProj={"https://raw.githubusercontent.com/JaminHLO/coding-quiz/main/assets/images/cq-ss01.jpg"}
                altProj={"website with quiz to test coding knowledge"}
            />

            <Project 
                isFeatured={false} 
                deployedProj={"https://jaminhlo.github.io/password-generator/"}
                titleProj={"Password Generator"}
                repoProj={"https://github.com/JaminHLO/password-generator"}
                ssProj={"https://github.com/JaminHLO/password-generator/raw/main/assets/images/pw_ss01.jpg"}
                altProj={"website to generate passwords based on user parameters"}
            />

      </section>
    </section>
  </div>
  );
}

export default Portfolio;
