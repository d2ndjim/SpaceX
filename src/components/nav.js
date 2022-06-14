import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../assets/planet.png';
import classes from './nav.module.css';

const Nav = () => (
  <header className={classes.header}>
    <div className={classes.text}>
      <img src={planet} alt="logo" className={classes.img} />
      <h2 className={classes.h2}>Space Traveler&apos;s Hub</h2>
    </div>
    <nav className={classes.nav}>
      <NavLink to="/" className={classes.active}>
        Rockets
      </NavLink>
      <NavLink to="/missions" className={classes.links}>
        Missions
      </NavLink>
      <NavLink to="/dragons" className={classes.links}>
        Dragons
      </NavLink>
      <NavLink to="/profile" className={classes.links}>
        My profile
      </NavLink>
    </nav>
  </header>
);

export default Nav;
