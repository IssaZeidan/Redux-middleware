import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemon } from './actions/pokemonActions';

const App = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchPokemon());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
};

export default App;
