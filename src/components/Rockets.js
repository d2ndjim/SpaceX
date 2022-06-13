import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets, updateReserved } from '../redux/rocketsSlice';
import classes from './Rockets.module.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  const clickHandler = (id) => {
    dispatch(updateReserved(Number(id)));
  };

  return (
    <div>
      <div>
        {rockets.map((rocket) => (
          <div key={rocket.id} className={classes.container}>
            <img src={rocket.flickr_images} alt={rocket.rocket_name} className={classes.image} />
            <div className={classes.info}>
              <h2 className={classes.name}>{rocket.rocket_name}</h2>
              <p className={classes.desc}>
                {rocket.reserved && <span className={classes.reserved}>Reserved</span>}
                {rocket.description}
              </p>
              {rocket.reserved && (<button type="button" className={classes.btn} onClick={() => clickHandler(rocket.id)}>Cancel Reservation</button>)}
              {!rocket.reserved && (
              <button type="button" className={classes.btn} onClick={() => clickHandler(rocket.id)}>
                Reserve Rocket
              </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rockets;
