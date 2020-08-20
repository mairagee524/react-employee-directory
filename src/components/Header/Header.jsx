import React from 'react';
import "./Header.css";

function Header () {
    return (
      <div className="header">
        <h1>Employee Directory</h1>
        <p className="header-info">Click on the buttons to order the list by first name, last name, or age. You can also use the search box to narrow your results.</p>
      </div>
    )
  }

export default Header;