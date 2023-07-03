import {
    FETCH_POKEMON_REQUEST,
    FETCH_POKEMON_SUCCESS,
    FETCH_POKEMON_FAILURE
  } from '../actions/pokemonActions'
  const initialState = {
    loading: false,
    data: null,
    error: ''
  };
  
  const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_POKEMON_REQUEST:
        return {
          ...state,
          loading: true
        };
      case FETCH_POKEMON_SUCCESS:
        return {
          loading: false,
          data: action.payload,
          error: ''
        };
      case FETCH_POKEMON_FAILURE:
        return {
          loading: false,
          data: null,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default pokemonReducer;
  