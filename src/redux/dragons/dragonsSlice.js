import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://api.spacexdata.com/v3/dragons';

export const getDragons = createAsyncThunk(
  'dragons/getDragons', async () => {
    const res = await fetch(URL);
    const dragons = await res.json();
    const dragonInfo = dragons.map((dragon) => ({
      name: dragon.name,
      id: dragon.id,
      description: dragon.description,
      reserved: false,
    }));
    return dragonInfo;
  },
);

const options = {
  name: 'dragons',
  initialState: [],
  reducers: {
    updateReserved: (state, action) => state.map((dragon) => {
      if (dragon.id === action.payload) {
        return { ...dragon, reserved: !dragon.reserved };
      }
      return dragon;
    }),
  },
  extraReducer: {
    [getDragons.fulfilled]: (state, action) => action.payload,
  },
};

const dragonsSlice = createSlice(options);
export const { updateReserved } = dragonsSlice.actions;
export default dragonsSlice.reducers;
