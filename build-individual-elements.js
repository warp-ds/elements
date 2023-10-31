import esbuild from 'esbuild';
import pkg from 'glob';
const { glob } = pkg;

const imports = glob.sync('packages/**/index.js');

imports.forEach(async (item) => {
  const regex = /\/(\w+)\//;
  const match = item.match(regex);

  if (item.includes('utils')) return;

  try {
    await esbuild.build({
      entryPoints: [item],
      bundle: true,
      outfile: `dist/packages/${match[1]}/index.js`,
      format: 'esm',
      sourcemap: true,
      target: 'es2017',
      minify: true,
      external: ['lit', '@warp-ds/elements-core'],
    });
  } catch (err) {
    console.error(err);
  }
});
