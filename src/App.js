import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemon } from './actions/pokemonActions';

const App = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemon());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : data ? (
        <ul>
          {data.results.map((pokemon) => (
            <li key={pokemon.name}>{pokemon.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default App;
