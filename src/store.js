import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './reducers/pokemonReducer';
import thunkMiddleware from 'redux-thunk';

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
  middleware: [thunkMiddleware],
});

export default store;
