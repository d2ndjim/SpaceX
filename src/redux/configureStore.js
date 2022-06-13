import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocketsSlice';
import missionReducer from './missionsSlice';
import dragonReducer from './dragons/dragonsSlice';

const store = configureStore({
  reducer: {
    missions: missionReducer,
    rockets: rocketReducer,
    dragons: dragonReducer,
  },
});

export default store;
