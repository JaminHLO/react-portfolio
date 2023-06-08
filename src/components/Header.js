import React from 'react';
import Navigation from './Navigation';

function Header( { section, handleNavSelection } ) {
  return (
    <div className="container">
      <div className="flex-row">
        <Navigation section={section} handleNavSelection={handleNavSelection}/>
        <header >
          <h1 className="h3">Jamin Hogan</h1>
        </header>
      </div>
    </div>
  );
}

export default Header;
