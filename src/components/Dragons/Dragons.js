import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDragons } from '../../redux/dragons/dragonsSlice';
import styles from './Dragons.module.css';

const Dragons = () => {
  const dragons = useSelector((state) => state.dragons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDragons());
  }, [dispatch]);

  return (
    <section className={styles.dragonsSec}>
      {dragons.map((dragon) => (
        <div key={dragon.id}>
          <h2>{dragon.name}</h2>
        </div>
      ))}
    </section>
  );
};

export default Dragons;
