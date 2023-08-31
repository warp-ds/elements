import { transform } from 'esbuild';

export function MinifyWarpLib() {
  return {
    name: 'minifyEs',
    enforce: 'pre',
    apply: 'build',
    renderChunk: {
      order: 'post',
      async handler(code, chunk, outputOptions) {
        if (outputOptions.format === 'es' && chunk.fileName.includes('warp')) {
          return await transform(code, { minify: true, sourcemap: true });
        }
        return code;
      },
    }
  };
}
