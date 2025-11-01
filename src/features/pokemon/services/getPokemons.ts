import { API_URL } from '../../../constants';
import { safeParseSchema } from '../../../shared/utils/safeParseJson';
import { pokemonsResponse } from '../schemas/pokemon';

export async function getPokemons(limit = '20', offset = '0') {
  const apiUrl = new URL(`${API_URL}/pokemon`);
  const searchParams = new URLSearchParams({ limit, offset });
  apiUrl.search = searchParams.toString();

  const response = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Error on fetching pokemons');
  }

  const responseJson = await response.json();
  const parsedJson = safeParseSchema(pokemonsResponse, responseJson, { name: 'Pokemons API' });

  console.log(parsedJson);
}
