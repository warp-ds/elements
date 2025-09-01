import topLevelAwait from 'vite-plugin-top-level-await';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  build: {
    target: 'esnext',
  },
  plugins: [
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: '__tla',
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: (i) => `__tla_${i}`,
    }),
  ],
  test: {
    onConsoleLog(log) {
      if (log.includes('Lit is in dev mode.')) return false;
      if (log.includes('Multiple versions of Lit loaded.')) return false;
      if (log.includes('Multiple versions of Lit loaded.')) return false;
      if (log.includes('Overriding ReactiveElement.createProperty() is deprecated.')) return false;
    },
    browser: {
      provider: 'playwright',
      enabled: true,
      headless: true,
      instances: [{ browser: 'chromium' }, { browser: 'firefox' }, { browser: 'webkit' }],
    },
  },
});
