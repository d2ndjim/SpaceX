import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocketsSlice';
import missionReducer from './missions/missionsSlice';
import dragonReducer from './dragonsSlice';

const store = configureStore({
  reducer: {
    missions: missionReducer,
    rockets: rocketReducer,
    dragons: dragonReducer,
  },
});

export default store;
