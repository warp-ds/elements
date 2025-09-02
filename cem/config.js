export default {
  // Globs to analyze
  globs: ['packages/**/index.ts'],

  // Globs to exclude
  exclude: [],

  // Directory to output CEM to
  outdir: 'dist/',

  // Run in dev mode, provides extra logging
  dev: false,

  // Run in watch mode, runs on file changes
  watch: false,

  // Include third party custom elements manifests
  dependencies: true,

  // Output CEM path to `package.json`, defaults to true
  packagejson: true,

  // Enable special handling for litelement
  litelement: true,

  // Plugins to use
  plugins: [],
};
