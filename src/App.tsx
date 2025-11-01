import { Suspense } from 'react';

import { Pokemon } from './features/pokemon/components/Pokemon';

export function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Pokemon />
    </Suspense>
  );
}
