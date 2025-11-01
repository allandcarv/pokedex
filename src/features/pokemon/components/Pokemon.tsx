import { use } from 'react';

import { getPokemons } from '../services/getPokemons';

const pokemonsPromise = getPokemons();

export function Pokemon() {
  use(pokemonsPromise);
  return <h1>My Pokemon</h1>;
}
