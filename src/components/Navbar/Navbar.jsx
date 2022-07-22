import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FiMenu } from 'react-icons/fi';

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [menu, setMenu] = useState(false);

  const takeMeToTheTop = () => {
    window.scrollTo(0, 0);
  };

  const triggerBackground = () => {
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const toggleActive = () => {
    setMenu(!menu);
  };

  window.addEventListener('scroll', triggerBackground);

  return (
    <nav style={menu ? { backgroundColor: 'rgba(58, 58, 58, 0.829)' } : { backgroundColor: '' }} className={navbar ? 'navbar-section active' : 'navbar-section'}>
      <nav className="logo-section">
        <NavLink onClick={takeMeToTheTop} to="/" style={{ backgroundColor: 'transparent' }}>
          <h1>Nikole Ceccarelli</h1>
        </NavLink>
      </nav>

      <nav className={menu ? 'links-section toggled' : 'links-section'}>
        <NavLink onClick={takeMeToTheTop} to="/chi-sono">
          <h1>Chi sono</h1>
        </NavLink>
        <NavLink onClick={takeMeToTheTop} to="/servizi">
          <h1>Servizi</h1>
        </NavLink>
        <NavLink onClick={takeMeToTheTop} to="/blog">
          <h1>Blog</h1>
        </NavLink>
        <NavLink onClick={takeMeToTheTop} to="/dove-trovarmi">
          <h1>Dove trovarmi</h1>
        </NavLink>

      </nav>

      <button onClick={toggleActive} type="button" className="toggle-button">
        <FiMenu />
      </button>

    </nav>
  );
}

export default Navbar;
