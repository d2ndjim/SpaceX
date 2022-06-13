/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDragons, selectDragons, reserveDragonsToggle as toggleReserve } from '../../redux/dragons/dragonsSlice';

const Dragons = () => {
  const dragons = useSelector(selectDragons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDragons());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Hello!</h1>
      </div>
    </>
  );
};

export default Dragons;
