/* eslint-disable no-unused-vars */
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
    <section>
      <div className={styles.dragons_wrapper}>
        <i />
        <div className={styles.dragons_info}>
          <h3>Dragon 1</h3>
          <p>
            <span className={styles.badge}>Reserved</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Incidunt magni, excepturi voluptatem architecto reprehenderit
            nam sint exercitationem non autem cum.
          </p>
          <button className={styles.buttonDefault} type="button">Reserve Dragon</button>
        </div>
      </div>
    </section>
  );
};

export default Dragons;
