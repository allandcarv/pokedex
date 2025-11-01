import type { z } from 'zod';

import type { pokemonResponse, pokemonsResponse } from '../schemas/pokemon';

export type PokemonApiResponse = z.infer<typeof pokemonResponse>;
export type PokemonsApiResponse = z.infer<typeof pokemonsResponse>;
