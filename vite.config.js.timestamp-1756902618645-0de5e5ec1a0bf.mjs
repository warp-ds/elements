// vite.config.js
import path from "path";
import { classes } from "file:///Users/william.killerud@m10s.io/workspace/warp/elements/node_modules/.pnpm/@warp-ds+css@2.1.1_@warp-ds+uno@2.1.0_unocss@0.62.0_postcss@8.5.1_rollup@4.32.1_vite@5._5585cd14798f90e8263ad87c35c4f9c8/node_modules/@warp-ds/css/component-classes/classes.js";
import { presetWarp } from "file:///Users/william.killerud@m10s.io/workspace/warp/elements/node_modules/.pnpm/@warp-ds+uno@2.1.0_unocss@0.62.0_postcss@8.5.1_rollup@4.32.1_vite@5.3.3_@types+node@20._e1e68ea455e604bfb851370e24dc0a94/node_modules/@warp-ds/uno/src/plugin.js";
import { glob } from "file:///Users/william.killerud@m10s.io/workspace/warp/elements/node_modules/.pnpm/glob@11.0.0/node_modules/glob/dist/esm/index.js";
import uno from "file:///Users/william.killerud@m10s.io/workspace/warp/elements/node_modules/.pnpm/unocss@0.62.0_postcss@8.5.1_rollup@4.32.1_vite@5.3.3_@types+node@20.14.10_lightningcss@1.30.1_terser@5.37.0_/node_modules/unocss/dist/vite.mjs";
import { defineConfig } from "file:///Users/william.killerud@m10s.io/workspace/warp/elements/node_modules/.pnpm/vite@5.3.3_@types+node@20.14.10_lightningcss@1.30.1_terser@5.37.0/node_modules/vite/dist/node/index.js";
import { createHtmlPlugin } from "file:///Users/william.killerud@m10s.io/workspace/warp/elements/node_modules/.pnpm/vite-plugin-html@3.2.2_vite@5.3.3_@types+node@20.14.10_lightningcss@1.30.1_terser@5.37.0_/node_modules/vite-plugin-html/dist/index.mjs";
import topLevelAwait from "file:///Users/william.killerud@m10s.io/workspace/warp/elements/node_modules/.pnpm/vite-plugin-top-level-await@1.4.1_rollup@4.32.1_vite@5.3.3_@types+node@20.14.10_lightningcss@1.30.1_terser@5.37.0_/node_modules/vite-plugin-top-level-await/exports/import.mjs";
var __vite_injected_original_import_meta_url = "file:///Users/william.killerud@m10s.io/workspace/warp/elements/vite.config.js";
var vite_config_default = ({ mode }) => {
  let input = {};
  const dirname = path.dirname(new URL(__vite_injected_original_import_meta_url).pathname);
  const isProduction = mode === "production";
  if (isProduction) {
    input.main = path.resolve(dirname, "index.html");
    const componentPages = glob.sync("pages/components/**/*.html", {
      absolute: true
    });
    const pages = glob.sync("pages/*.html", {
      absolute: true
    });
    for (const page of pages.concat(componentPages)) {
      const fileName = path.parse(page).name;
      input[fileName] = page;
    }
  }
  const injectOptions = {
    ejsOptions: {
      views: ["pages/includes"]
    }
  };
  function getBuildOpts(mode2) {
    if (mode2 === "production") {
      return defineConfig({
        build: {
          target: "esnext",
          outDir: "site",
          rollupOptions: {
            input
          }
        }
      });
    }
  }
  return {
    base: isProduction ? "/elements/" : "",
    plugins: [
      uno({
        presets: [presetWarp()]
      }),
      mode === "development" && uno({
        mode: "shadow-dom",
        presets: [presetWarp()],
        safelist: classes
      }),
      createHtmlPlugin({
        minify: false,
        pages: [
          {
            filename: "button.html",
            template: "pages/components/button.html",
            injectOptions
          },
          {
            filename: "pill.html",
            template: "pages/components/pill.html",
            injectOptions
          },
          {
            filename: "alert.html",
            template: "pages/components/alert.html",
            injectOptions
          },
          {
            filename: "select.html",
            template: "pages/components/select.html",
            injectOptions
          },
          {
            filename: "attention.html",
            template: "pages/components/attention.html",
            injectOptions
          },
          {
            filename: "badge.html",
            template: "pages/components/badge.html",
            injectOptions
          },
          {
            filename: "box.html",
            template: "pages/components/box.html",
            injectOptions
          },
          {
            filename: "breadcrumbs.html",
            template: "pages/components/breadcrumbs.html",
            injectOptions
          },
          {
            filename: "card.html",
            template: "pages/components/card.html",
            injectOptions
          },
          {
            filename: "deadtoggle.html",
            template: "pages/components/deadtoggle.html",
            injectOptions
          },
          {
            filename: "modal.html",
            template: "pages/components/modal.html",
            injectOptions
          },
          {
            filename: "toast.html",
            template: "pages/components/toast.html",
            injectOptions
          },
          {
            filename: "textfield.html",
            template: "pages/components/textfield.html",
            injectOptions
          },
          {
            filename: "expandable.html",
            template: "pages/components/expandable.html",
            injectOptions
          },
          {
            filename: "index.html",
            template: "index.html",
            injectOptions
          },
          {
            filename: "pagination.html",
            template: "pages/components/pagination.html",
            injectOptions
          }
        ]
      }),
      isProduction && basePathFix(),
      mode === "development" && topLevelAwait({
        // The export name of top-level await promise for each chunk module
        promiseExportName: "__tla",
        // The function to generate import names of top-level await promise in each chunk module
        promiseImportName: (i) => `__tla_${i}`
      })
    ],
    ...getBuildOpts(mode)
  };
};
function basePathFix() {
  return {
    name: "base-path-fix",
    transform(src, fileName) {
      return fileName.includes("navigation-data.js") ? src.replace(/pages\/components\//g, "elements/").replace(/'\/'/, '"/elements/"') : src;
    }
  };
}
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvd2lsbGlhbS5raWxsZXJ1ZEBtMTBzLmlvL3dvcmtzcGFjZS93YXJwL2VsZW1lbnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvd2lsbGlhbS5raWxsZXJ1ZEBtMTBzLmlvL3dvcmtzcGFjZS93YXJwL2VsZW1lbnRzL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy93aWxsaWFtLmtpbGxlcnVkQG0xMHMuaW8vd29ya3NwYWNlL3dhcnAvZWxlbWVudHMvdml0ZS5jb25maWcuanNcIjsvKiBlc2xpbnQtZW52IG5vZGUgKi9cbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5pbXBvcnQgeyBjbGFzc2VzIH0gZnJvbSAnQHdhcnAtZHMvY3NzL2NvbXBvbmVudC1jbGFzc2VzL2NsYXNzZXMnO1xuaW1wb3J0IHsgcHJlc2V0V2FycCB9IGZyb20gJ0B3YXJwLWRzL3Vubyc7XG5pbXBvcnQgeyBnbG9iIH0gZnJvbSAnZ2xvYic7XG5pbXBvcnQgdW5vIGZyb20gJ3Vub2Nzcy92aXRlJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHsgY3JlYXRlSHRtbFBsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLWh0bWwnO1xuaW1wb3J0IHRvcExldmVsQXdhaXQgZnJvbSAndml0ZS1wbHVnaW4tdG9wLWxldmVsLWF3YWl0JztcblxuZXhwb3J0IGRlZmF1bHQgKHsgbW9kZSB9KSA9PiB7XG4gIGxldCBpbnB1dCA9IHt9O1xuXG4gIGNvbnN0IGRpcm5hbWUgPSBwYXRoLmRpcm5hbWUobmV3IFVSTChpbXBvcnQubWV0YS51cmwpLnBhdGhuYW1lKTtcblxuICBjb25zdCBpc1Byb2R1Y3Rpb24gPSBtb2RlID09PSAncHJvZHVjdGlvbic7XG5cbiAgLy8gRm9yIHByb2R1Y3Rpb24gd2UgbmVlZCB0byBzcGVjaWZ5IGFsbCBvdXIgZW50cnkgcG9pbnRzXG4gIC8vIFNlZSBodHRwczovL3ZpdGVqcy5kZXYvZ3VpZGUvYnVpbGQuaHRtbCNtdWx0aS1wYWdlLWFwcFxuICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgaW5wdXQubWFpbiA9IHBhdGgucmVzb2x2ZShkaXJuYW1lLCAnaW5kZXguaHRtbCcpO1xuXG4gICAgY29uc3QgY29tcG9uZW50UGFnZXMgPSBnbG9iLnN5bmMoJ3BhZ2VzL2NvbXBvbmVudHMvKiovKi5odG1sJywge1xuICAgICAgYWJzb2x1dGU6IHRydWUsXG4gICAgfSk7XG4gICAgY29uc3QgcGFnZXMgPSBnbG9iLnN5bmMoJ3BhZ2VzLyouaHRtbCcsIHtcbiAgICAgIGFic29sdXRlOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgZm9yIChjb25zdCBwYWdlIG9mIHBhZ2VzLmNvbmNhdChjb21wb25lbnRQYWdlcykpIHtcbiAgICAgIGNvbnN0IGZpbGVOYW1lID0gcGF0aC5wYXJzZShwYWdlKS5uYW1lO1xuXG4gICAgICBpbnB1dFtmaWxlTmFtZV0gPSBwYWdlO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGluamVjdE9wdGlvbnMgPSB7XG4gICAgZWpzT3B0aW9uczoge1xuICAgICAgdmlld3M6IFsncGFnZXMvaW5jbHVkZXMnXSxcbiAgICB9LFxuICB9O1xuXG4gIGZ1bmN0aW9uIGdldEJ1aWxkT3B0cyhtb2RlKSB7XG4gICAgaWYgKG1vZGUgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuIGRlZmluZUNvbmZpZyh7XG4gICAgICAgIGJ1aWxkOiB7XG4gICAgICAgICAgdGFyZ2V0OiAnZXNuZXh0JyxcbiAgICAgICAgICBvdXREaXI6ICdzaXRlJyxcbiAgICAgICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBiYXNlOiBpc1Byb2R1Y3Rpb24gPyAnL2VsZW1lbnRzLycgOiAnJyxcbiAgICBwbHVnaW5zOiBbXG4gICAgICB1bm8oe1xuICAgICAgICBwcmVzZXRzOiBbcHJlc2V0V2FycCgpXSxcbiAgICAgIH0pLFxuICAgICAgbW9kZSA9PT0gJ2RldmVsb3BtZW50JyAmJlxuICAgICAgICB1bm8oe1xuICAgICAgICAgIG1vZGU6ICdzaGFkb3ctZG9tJyxcbiAgICAgICAgICBwcmVzZXRzOiBbcHJlc2V0V2FycCgpXSxcbiAgICAgICAgICBzYWZlbGlzdDogY2xhc3NlcyxcbiAgICAgICAgfSksXG4gICAgICBjcmVhdGVIdG1sUGx1Z2luKHtcbiAgICAgICAgbWluaWZ5OiBmYWxzZSxcbiAgICAgICAgcGFnZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmaWxlbmFtZTogJ2J1dHRvbi5odG1sJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAncGFnZXMvY29tcG9uZW50cy9idXR0b24uaHRtbCcsXG4gICAgICAgICAgICBpbmplY3RPcHRpb25zLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgZmlsZW5hbWU6ICdwaWxsLmh0bWwnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICdwYWdlcy9jb21wb25lbnRzL3BpbGwuaHRtbCcsXG4gICAgICAgICAgICBpbmplY3RPcHRpb25zLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgZmlsZW5hbWU6ICdhbGVydC5odG1sJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAncGFnZXMvY29tcG9uZW50cy9hbGVydC5odG1sJyxcbiAgICAgICAgICAgIGluamVjdE9wdGlvbnMsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmaWxlbmFtZTogJ3NlbGVjdC5odG1sJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAncGFnZXMvY29tcG9uZW50cy9zZWxlY3QuaHRtbCcsXG4gICAgICAgICAgICBpbmplY3RPcHRpb25zLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgZmlsZW5hbWU6ICdhdHRlbnRpb24uaHRtbCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ3BhZ2VzL2NvbXBvbmVudHMvYXR0ZW50aW9uLmh0bWwnLFxuICAgICAgICAgICAgaW5qZWN0T3B0aW9ucyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZpbGVuYW1lOiAnYmFkZ2UuaHRtbCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ3BhZ2VzL2NvbXBvbmVudHMvYmFkZ2UuaHRtbCcsXG4gICAgICAgICAgICBpbmplY3RPcHRpb25zLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgZmlsZW5hbWU6ICdib3guaHRtbCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ3BhZ2VzL2NvbXBvbmVudHMvYm94Lmh0bWwnLFxuICAgICAgICAgICAgaW5qZWN0T3B0aW9ucyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZpbGVuYW1lOiAnYnJlYWRjcnVtYnMuaHRtbCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ3BhZ2VzL2NvbXBvbmVudHMvYnJlYWRjcnVtYnMuaHRtbCcsXG4gICAgICAgICAgICBpbmplY3RPcHRpb25zLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgZmlsZW5hbWU6ICdjYXJkLmh0bWwnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICdwYWdlcy9jb21wb25lbnRzL2NhcmQuaHRtbCcsXG4gICAgICAgICAgICBpbmplY3RPcHRpb25zLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgZmlsZW5hbWU6ICdkZWFkdG9nZ2xlLmh0bWwnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICdwYWdlcy9jb21wb25lbnRzL2RlYWR0b2dnbGUuaHRtbCcsXG4gICAgICAgICAgICBpbmplY3RPcHRpb25zLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgZmlsZW5hbWU6ICdtb2RhbC5odG1sJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAncGFnZXMvY29tcG9uZW50cy9tb2RhbC5odG1sJyxcbiAgICAgICAgICAgIGluamVjdE9wdGlvbnMsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmaWxlbmFtZTogJ3RvYXN0Lmh0bWwnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICdwYWdlcy9jb21wb25lbnRzL3RvYXN0Lmh0bWwnLFxuICAgICAgICAgICAgaW5qZWN0T3B0aW9ucyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZpbGVuYW1lOiAndGV4dGZpZWxkLmh0bWwnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICdwYWdlcy9jb21wb25lbnRzL3RleHRmaWVsZC5odG1sJyxcbiAgICAgICAgICAgIGluamVjdE9wdGlvbnMsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmaWxlbmFtZTogJ2V4cGFuZGFibGUuaHRtbCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ3BhZ2VzL2NvbXBvbmVudHMvZXhwYW5kYWJsZS5odG1sJyxcbiAgICAgICAgICAgIGluamVjdE9wdGlvbnMsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmaWxlbmFtZTogJ2luZGV4Lmh0bWwnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICdpbmRleC5odG1sJyxcbiAgICAgICAgICAgIGluamVjdE9wdGlvbnMsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmaWxlbmFtZTogJ3BhZ2luYXRpb24uaHRtbCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ3BhZ2VzL2NvbXBvbmVudHMvcGFnaW5hdGlvbi5odG1sJyxcbiAgICAgICAgICAgIGluamVjdE9wdGlvbnMsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgaXNQcm9kdWN0aW9uICYmIGJhc2VQYXRoRml4KCksXG4gICAgICBtb2RlID09PSAnZGV2ZWxvcG1lbnQnICYmXG4gICAgICAgIHRvcExldmVsQXdhaXQoe1xuICAgICAgICAgIC8vIFRoZSBleHBvcnQgbmFtZSBvZiB0b3AtbGV2ZWwgYXdhaXQgcHJvbWlzZSBmb3IgZWFjaCBjaHVuayBtb2R1bGVcbiAgICAgICAgICBwcm9taXNlRXhwb3J0TmFtZTogJ19fdGxhJyxcbiAgICAgICAgICAvLyBUaGUgZnVuY3Rpb24gdG8gZ2VuZXJhdGUgaW1wb3J0IG5hbWVzIG9mIHRvcC1sZXZlbCBhd2FpdCBwcm9taXNlIGluIGVhY2ggY2h1bmsgbW9kdWxlXG4gICAgICAgICAgcHJvbWlzZUltcG9ydE5hbWU6IChpKSA9PiBgX190bGFfJHtpfWAsXG4gICAgICAgIH0pLFxuICAgIF0sXG4gICAgLi4uZ2V0QnVpbGRPcHRzKG1vZGUpLFxuICB9O1xufTtcblxuZnVuY3Rpb24gYmFzZVBhdGhGaXgoKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ2Jhc2UtcGF0aC1maXgnLFxuICAgIHRyYW5zZm9ybShzcmMsIGZpbGVOYW1lKSB7XG4gICAgICByZXR1cm4gZmlsZU5hbWUuaW5jbHVkZXMoJ25hdmlnYXRpb24tZGF0YS5qcycpXG4gICAgICAgID8gc3JjLnJlcGxhY2UoL3BhZ2VzXFwvY29tcG9uZW50c1xcLy9nLCAnZWxlbWVudHMvJykucmVwbGFjZSgvJ1xcLycvLCAnXCIvZWxlbWVudHMvXCInKVxuICAgICAgICA6IHNyYztcbiAgICB9LFxuICB9O1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLE9BQU8sVUFBVTtBQUVqQixTQUFTLGVBQWU7QUFDeEIsU0FBUyxrQkFBa0I7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
