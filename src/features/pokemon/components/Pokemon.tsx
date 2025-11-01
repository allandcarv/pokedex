import { useCallback, useState } from 'react';

import { ErrorBoundary } from 'react-error-boundary';

import { FallbackComponent } from '../../../shared/components/FallbackComponent/FallbackComponent';

import { PokemonsList } from './PokemonsList/PokemonsList';

export function Pokemon() {
  const [pokemonsListKey, setPokemonsListKey] = useState(0);

  const handleReset = useCallback(() => setPokemonsListKey((prevKey) => (prevKey += 1)), []);
  return (
    <ErrorBoundary FallbackComponent={FallbackComponent} onReset={handleReset}>
      <PokemonsList key={pokemonsListKey} />
    </ErrorBoundary>
  );
}
