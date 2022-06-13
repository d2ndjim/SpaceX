/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDragons, updateReserved } from '../../redux/dragons/dragonsSlice';

const Dragons = () => {
  const dragons = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDragons());
  }, [dispatch]);

  const clickHandler = (id) => {
    dispatch(updateReserved(id));
  };

  return (
    <>
      <div>
        Hello
        {/* {dragons.map((dragon) => (
          <h1 key={dragon.id}>{dragon.name}</h1>
        ))} */}
      </div>
    </>
  );
};

export default Dragons;
