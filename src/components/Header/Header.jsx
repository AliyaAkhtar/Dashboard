import React from 'react';
import './Header.css';
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({ toggleSidebar }) => {
  return (
    <header>
        <GiHamburgerMenu className="hamburger-icon" onClick={toggleSidebar} />
        <div className="dashboard">Dashboard</div>
    </header>
  );
}

export default Header;
