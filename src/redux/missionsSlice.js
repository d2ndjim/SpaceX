import { createSlice } from '@reduxjs/toolkit';

const options = {
  name: 'missions',
  initialState: [],
  reducers: {

  },
};

const missionsSlice = createSlice(options);
export default missionsSlice.reducers;
