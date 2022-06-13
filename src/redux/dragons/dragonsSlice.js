import { createSlice } from '@reduxjs/toolkit';

const options = {
  name: 'dragons',
  initialState: [],
  reducers: {},
};

const dragonsSlice = createSlice(options);
export default dragonsSlice.reducers;
