import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions', async () => {
    const res = await fetch(URL);
    const missions = await res.json();
    const formMissions = missions.map((mission) => ({
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
      joined: false,
    }));
    return formMissions;
  },
);

const options = {
  name: 'missions',
  initialState: [],
  reducers: {
    updateMission: (state, action) => state.map((mission) => {
      if (mission.id === action.payload) {
        return { ...mission, joined: !mission.joined };
      }
      return mission;
    }),
  },
  extraReducers: {
    [fetchMissions.fulfilled]: (state, action) => action.payload,
  },
};

const missionsSlice = createSlice(options);
export const selectMissions = (state) => state.missions;
export const { updateMission } = missionsSlice.actions;
export default missionsSlice.reducer;
