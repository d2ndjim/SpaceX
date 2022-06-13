import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://api.spacexdata.com/v3/dragons';

export const getDragons = () => async () => {
  const res = await axios.get(URL);
  const dragons = res.data;
  const dragonInfo = dragons.map((dragon) => ({
    name: dragon.name,
    id: dragon.id,
    description: dragon.description,
    reserved: false,
  }));
  return dragonInfo;
};

const options = {
  name: 'dragons',
  initialState: [],
  reducers: {
    reserveDragonsToggle: (state, action) => state.map((dragon) => {
      if (dragon.id === action.payload) {
        return { ...dragon, reserved: !dragon.reserved };
      }
      return dragon;
    }),
  },
};

const dragonsSlice = createSlice(options);
export const selectDragons = (state) => state.dragons;
export const { reserveDragonsToggle } = dragonsSlice.actions;
export default dragonsSlice.reducers;
