import React from 'react';
import classes from './profile.module.css';

const Profile = () => (
  <section className={classes.grid}>
    <div className={classes.mission}>
      <h2>My Missions</h2>
      <p>First Paragraph</p>
    </div>
    <div className={classes.rocket}>
      <h2>My Rockets</h2>
      <p>First Paragraph</p>
    </div>
    <div className={classes.dragon}>
      <h2>My Dragons</h2>
      <p>First Paragraph</p>
    </div>
  </section>
);

export default Profile;
