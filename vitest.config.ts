/// <reference types="@vitest/browser/matchers" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  build: {
    target: 'esnext',
  },
  plugins: [react()],
  test: {
    expect: {
      poll: {
        timeout: 200,
      },
    },
    onConsoleLog(log) {
      if (log.includes('Lit is in dev mode.')) return false;
      if (log.includes('Multiple versions of Lit loaded.')) return false;
      if (log.includes('Overriding ReactiveElement.createProperty() is deprecated.')) return false;
    },
    setupFiles: ['./setup-tests.ts'],
    browser: {
      provider: 'playwright',
      enabled: true,
      headless: true,
      instances: [{ browser: 'chromium' }, { browser: 'firefox' }, { browser: 'webkit' }],
      viewport: { width: 1024, height: 768 },
    },
  },
  optimizeDeps: {
    include: ['@oddbird/css-anchor-positioning/fn'],
    esbuildOptions: {
      target: 'esnext',
    },
  },
});
