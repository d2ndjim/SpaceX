import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions, updateMission, selectMissions } from '../../redux/missions/missionsSlice';
import classes from './missions.module.css';

const Missions = () => {
  const missions = useSelector(selectMissions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!missions.length) dispatch(fetchMissions());
  }, [dispatch]);

  const handleClick = ({ target }) => {
    const { id } = target;
    dispatch(updateMission(id));
  };

  const activeButton = (
    <button type="button" className={classes.activeBtn}>
      Active member
    </button>
  );
  const inactiveButton = (
    <button type="button" className={classes.inactive}>
      Not a member
    </button>
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th aria-label="Empty cell" />
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <tr key={mission.id}>
            <td>
              <h3>{mission.name}</h3>
            </td>
            <td>{mission.description}</td>
            <td>
              {mission.joined && activeButton}
              {!mission.joined && inactiveButton}
            </td>
            <td>
              {mission.joined && (
                <button
                  id={mission.id}
                  type="button"
                  className={classes.leave}
                  onClick={handleClick}
                >
                  Leave Mission
                </button>
              )}
              {!mission.joined && (
                <button
                  id={mission.id}
                  type="button"
                  className={classes.join}
                  onClick={handleClick}
                >
                  Join Mission
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Missions;
