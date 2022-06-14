import React from 'react';
import { useSelector } from 'react-redux';
import classes from './profile.module.css';
import { selectMissions } from '../../redux/missions/missionsSlice';

const Profile = () => {
  const missionsList = useSelector(selectMissions);
  const rocketsList = useSelector((state) => state.rockets);
  const dragonsList = useSelector((state) => state.dragons);

  const filterMissions = missionsList.filter((mission) => mission.joined);
  const filterRockets = rocketsList.filter((rocket) => rocket.reserved);
  const filterDragons = dragonsList.filter((dragon) => dragon.reserved);

  return (
    <section className={classes.grid}>
      <div className={classes.mission}>
        <h2 className={classes.header}>My Missions</h2>
        {filterMissions.length > 0 ? (
          filterMissions.map((mission) => (
            <p className={classes.text} key={mission.name}>{mission.name}</p>
          ))
        ) : (
          <p>No Mission Joined!</p>
        )}
      </div>
      <div className={classes.rocket}>
        <h2 className={classes.header}>My Rockets</h2>
        {filterRockets.length > 0 ? (
          filterRockets.map((rocket) => (
            <p className={classes.text} key={rocket.rocket_name}>{rocket.rocket_name}</p>
          ))
        ) : (
          <p>No Rocket Reserved!</p>
        )}
      </div>
      <div className={classes.dragon}>
        <h2 className={classes.header}>My Dragons</h2>
        {filterDragons.length > 0 ? (
          filterDragons.map((dragon) => (
            <p className={classes.text} key={dragon.name}>{dragon.name}</p>
          ))
        ) : (
          <p>No Dragon Reserved!</p>
        )}
      </div>
    </section>
  );
};

export default Profile;
