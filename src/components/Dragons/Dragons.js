import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDragons, updateDragons } from '../../redux/dragons/dragonsSlice';
import styles from './Dragons.module.css';

const Dragons = () => {
  const dragons = useSelector((state) => state.dragons);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!dragons.length) dispatch(fetchDragons());
  }, [dispatch]);

  const handleClick = (id) => {
    dispatch(updateDragons(id));
  };

  return (
    <section>
      <div className={styles.dragons_wrapper}>
        {
          dragons.map((dragon) => (
            <div key={dragon.id} className={styles.dragon_wrapper}>
              <img className={styles.image} src={dragon.image} alt="Dragon" />
              <div className={styles.dragons_info}>
                <h2>{dragon.name}</h2>
                <p>
                  {(dragon.reserved) ? ((<span className={styles.badge}>Reserved</span>)) : ''}
                  {dragon.description}
                </p>
                <button
                  className={(dragon.reserved) ? styles.buttonCancel : styles.buttonDefault}
                  type="button"
                  onClick={() => handleClick(dragon.id)}
                >
                  {(dragon.reserved) ? 'Cancel Reservation' : 'Reserve Dragon'}
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default Dragons;
