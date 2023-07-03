import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import pokemonReducer from '../src/actions/reducers/pokemonReducer';

const store = createStore(pokemonReducer, applyMiddleware(thunk));

export default store;
