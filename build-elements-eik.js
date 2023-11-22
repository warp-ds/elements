import esbuild from 'esbuild'
import * as eik from '@eik/esbuild-plugin'
import pkg from 'glob'
const { glob } = pkg

await eik.load()
const imports = glob.sync('packages/**/index.js')

imports.forEach(async (item) => {
  const regex = /\/(\w+)\//
  const match = item.match(regex)

  if (item.includes('utils')) return

  console.log(`elements: building ${match[1]}.js`);

  try {
    await esbuild.build({
      plugins: [eik.plugin()],
      entryPoints: [item],
      bundle: true,
      outfile: `eik/packages/${match[1]}/index.js`,
      format: 'esm',
      sourcemap: true,
      target: 'es2017',
      minify: false,
      external: ['lit', '@warp-ds/elements-core'],
    })
  } catch (err) {
    console.error(err)
  }
})

console.log('elements: building api.js');
// build index.js & toast/api.js
await esbuild.build({
  plugins: [eik.plugin()],
  entryPoints: ['packages/toast/api.js'],
  bundle: true,
  outfile: 'eik/api.js',
  format: 'esm',
  sourcemap: true,
  target: 'es2017',
  minify: false,
  external: ['lit', '@warp-ds/elements-core'],
})

console.log('elements: building index.js');
await esbuild.build({
  plugins: [eik.plugin()],
  entryPoints: ['index.js'],
  bundle: true,
  outfile: 'eik/index.js',
  format: 'esm',
  sourcemap: true,
  target: 'es2017',
  minify: false,
  external: ['lit', '@warp-ds/elements-core'],
})
