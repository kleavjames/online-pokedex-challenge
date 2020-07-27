import React from 'react';
import './PokemonType.css';

export default function PokemonType({ pokemonType }) {
  const colorType = () => {
    switch (pokemonType) {
      case 'Grass':
        return 'grass';
      case 'Poison':
        return 'poison';
      case 'Fire':
        return 'fire';
      case 'Water':
        return 'water';
      case 'Bug':
        return 'bug';
      default:
        return '';
    }
  };

  return (
    <div className={`card-type ${colorType()}`}>
      <p className='card-text'>{pokemonType}</p>
    </div>
  );
}
