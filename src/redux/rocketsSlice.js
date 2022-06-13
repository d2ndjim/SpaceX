import { createSlice } from '@reduxjs/toolkit';

const options = {
  name: 'rockets',
  initialState: [],
  reducers: {},
};

const rocketsSlice = createSlice(options);
export default rocketsSlice.reducers;
