import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://api.spacexdata.com/v3/dragons';

export const fetchDragons = createAsyncThunk(
  'dragons/fetchDragons', async () => {
    const res = await fetch(URL);
    const data = await res.json();
    const dragons = data.map((dragon) => ({
      id: dragon.id,
      name: dragon.name,
      description: dragon.description,
      Image: dragon.flickr_images[0],
      reserved: false,
    }));
    return dragons;
  },
);

const options = {
  name: 'dragons',
  initialState: [],
  reducers: {
    updateDragons: (state, action) => state.map((dragon) => {
      if (dragon.id === action.payload) {
        return { ...dragon, reserved: !dragon.reserved };
      }
      return dragon;
    }),
  },
  extraReducers: {
    [fetchDragons.fulfilled]: (state, action) => action.payload,
  },
};

const dragonsSlice = createSlice(options);
export const { updateDragons } = dragonsSlice.actions;
export default dragonsSlice.reducer;
