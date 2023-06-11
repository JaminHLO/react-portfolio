import React from 'react';
import Navigation from './Navigation';

// header function that will also hold top navigation bar
function Header( { section, handleNavSelection } ) {
  return (
    <div >
      <header className="site-navbar js-sticky-header site-navbar-target"
        role="banner">
        <div className="container">
          <div className="row ">
            <div className="col-md-5 col-sm-12 text-center">
              <h1 className="center-block">Jamin Hogan</h1>
            </div>
            <div className="col-md-7 col-sm-12">
              <Navigation section={section} handleNavSelection={handleNavSelection}/>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
