import React from 'react';
import { Link } from 'react-router-dom';
import planet from '../assets/planet.png';
import classes from './nav.module.css';

const Nav = () => (
  <header className={classes.header}>
    <div className={classes.text}>
      <img src={planet} alt="logo" className={classes.img} />
      <h2>Space Traveler&apos;s Hub</h2>
    </div>
    <nav className={classes.nav}>
      <Link to="/rockets" className={classes.links}>
        Rockets
      </Link>
      <Link to="/missions" className={classes.links}>
        Missions
      </Link>
      <Link to="/dragons" className={classes.links}>
        Dragons
      </Link>
      <Link to="/profile" className={classes.links}>
        My profile
      </Link>
    </nav>
  </header>
);

export default Nav;
