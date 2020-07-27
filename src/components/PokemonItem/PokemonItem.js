import React from 'react';
import './Pokemon.css';
import PokemonType from '../PokemonType/PokemonType';

export default function PokemonItem({ pokemon }) {
  // modify number
  const pokemonNum = () => {
    if (pokemon.number < 10) {
      return `#00${pokemon.number}`;
    } else {
      return `#0${pokemon.number}`;
    }
  };

  const renderType = () => {
    return pokemon.types.map((type, index) => {
      return <PokemonType key={type + index} pokemonType={type} />;
    });
  };

  return (
    <div className='card'>
      <div className='card-body'>
        <img className='card-img' src={pokemon.image.url} alt={pokemon.name} />
        <p className='text-id'>{pokemonNum()}</p>
        <p className='text-name'>{pokemon.name}</p>
        <div>{renderType()}</div>
      </div>
    </div>
  );
}
