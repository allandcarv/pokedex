import { use } from 'react';

import { getPokemons } from '../../services/getPokemons';

const pokemonsPromise = getPokemons();

export function PokemonsList() {
  const pokemonsData = use(pokemonsPromise);
  console.log('🚀 ~ PokemonsList ~ pokemonsData:', pokemonsData);

  return null;
}
