import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vanillaExtractPlugin(), react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './setupTests.ts',
  },
});
