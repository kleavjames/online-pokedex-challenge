import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './common/Header/Header';
import PokemonList from './PokemonList/PokemonList';
import Loading from './common/Loading/Loading';
import Error from './common/Error/Error';
import Footer from './common/Footer/Footer';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    // used setTimeout to cheat as if fetching data from the server
    setTimeout(() => {
      // to force an error, remove or change char from the fetch url
      fetch('data/pokemon.json')
        .then(response => {
          if (!response.ok) setError(true);
          return response;
        })
        .then(result => result.json())
        .then(data => setPokemons(data.entries))
        .catch(err => setError(true));
    }, 3000);
  }, []);

  const renderComponent = () => {
    if (pokemons.length === 0) {
      return <Loading loadingText='Catching them all...' />;
    }
    return <PokemonList pokemons={pokemons} />;
  };

  return (
    <div className='main'>
      <Header headerTitle='The Online Pokedex' />
      {!error ? (
        renderComponent()
      ) : (
        <Error errorText="Something went wrong. We weren't able to find any pokemon.." />
      )}
      <Footer data-testid='pokedex-footer' />
    </div>
  );
}

export default App;
