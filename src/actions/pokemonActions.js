import axios from 'axios';

// Action Types
export const FETCH_POKEMON_REQUEST = 'FETCH_POKEMON_REQUEST';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE';

// Action Creators
const fetchPokemonRequest = () => {
  return {
    type: FETCH_POKEMON_REQUEST
  };
};

const fetchPokemonSuccess = (data) => {
  return {
    type: FETCH_POKEMON_SUCCESS,
    payload: data
  };
};

const fetchPokemonFailure = (error) => {
  return {
    type: FETCH_POKEMON_FAILURE,
    payload: error
  };
};

// Async Action Creator using Thunk
export const fetchPokemon = () => {
  return (dispatch) => {
    dispatch(fetchPokemonRequest());
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then((response) => {
        dispatch(fetchPokemonSuccess(response.data));
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        dispatch(fetchPokemonFailure(error.message));
      });
  };
};
