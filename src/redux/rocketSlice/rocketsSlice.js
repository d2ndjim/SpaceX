import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const response = await fetch(url);
  const data = await response.json();
  const rockets = data.map((rocket) => ({
    id: rocket.id,
    rocket_name: rocket.rocket_name,
    description: rocket.description,
    flickr_images: rocket.flickr_images[0],
    reserved: false,
  }));
  return rockets;
});

const options = {
  name: 'rockets',
  initialState: [],
  reducers: {
    updateReserved: (state, action) => state.map((rocket) => {
      if (rocket.id === action.payload) {
        return { ...rocket, reserved: !rocket.reserved };
      }
      return rocket;
    }),
  },
  extraReducers: {
    [fetchRockets.fulfilled]: (state, action) => action.payload,
  },
};

const rocketsSlice = createSlice(options);
export const { updateReserved } = rocketsSlice.actions;
export default rocketsSlice.reducer;
