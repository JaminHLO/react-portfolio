import React from 'react';
import Navigation from './Navigation';

// import '../styles/Header.css';


function Header( { section, handleNavSelection } ) {
  return (
    <div >
      <header className="site-navbar js-sticky-header site-navbar-target"
        role="banner">
        <div className="container">
          <div className="row ">
            <div className="col-md-auto col-sm-12 ">
              <h1 className="center-block">Jamin Hogan</h1>
            </div>
            <div className="col"></div>
            <div className="col-md-8 col-sm-12">
              <Navigation section={section} handleNavSelection={handleNavSelection}/>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
