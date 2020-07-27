import React from 'react';
import './PokemonList.css';
import PokemonItem from '../PokemonItem/PokemonItem';

export default function PokemonList({ pokemons }) {
  const renderItems = () => {
    return pokemons.map(item => {
      return (
        <div key={item.number} className='card-container'>
          <PokemonItem data-testid='pokemon-item' pokemon={item} />
        </div>
      );
    });
  };

  return (
    <div data-testid='pokemon-list' className='content'>
      {renderItems()}
    </div>
  );
}
