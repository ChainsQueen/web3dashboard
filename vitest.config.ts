import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'node:url';
import { URL } from 'node:url';

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'react',
  },
  test: {
    // Fast, reliable React component testing in a browser-like env
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.test.{ts,tsx}'],
    setupFiles: './vitest.setup.ts',

    // Performance & stability
    isolate: true,
    clearMocks: true,
    restoreMocks: true,

    // Output & DX
    reporters: process.env.CI ? ['dot'] : ['default'],
    watch: !process.env.CI,
    cache: { dir: './node_modules/.vitest' },

    // Coverage is configured but disabled by default. Use `pnpm coverage`.
    coverage: {
      provider: 'v8',
      reportsDirectory: './coverage',
      reporter: ['text', 'json', 'html'],
      enabled: false,
      exclude: [
        'node_modules/',
        'dist/',
        '**/*.config.ts',
        '**/*.config.js',
        'e2e/',
        '.next/',
        'out/',
        'coverage/',
      ],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
    },
  },
});
