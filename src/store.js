import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from '../src/reducers/pokemonReducer';

const store = configureStore({
  reducer: pokemonReducer
});

export default store;
