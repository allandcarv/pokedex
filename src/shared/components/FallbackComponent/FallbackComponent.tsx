import type { FallbackProps } from 'react-error-boundary';

import { errorMessage } from './FallbackComponent.css';

export function FallbackComponent({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert">
      <p>⚠️ Data Fetching Error:</p>
      <pre className={errorMessage}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try Refetching</button>
    </div>
  );
}
