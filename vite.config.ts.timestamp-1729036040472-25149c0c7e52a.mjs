// vite.config.ts
import react from "file:///Users/ebraem/workspace/near/near-rewrite/near-vite-starter/node_modules/.pnpm/@vitejs+plugin-react-swc@3.7.1_vite@5.4.9_@types+node@22.7.5_/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "path";
import { defineConfig } from "file:///Users/ebraem/workspace/near/near-rewrite/near-vite-starter/node_modules/.pnpm/vite@5.4.9_@types+node@22.7.5/node_modules/vite/dist/node/index.js";
import { nodePolyfills } from "file:///Users/ebraem/workspace/near/near-rewrite/near-vite-starter/node_modules/.pnpm/vite-plugin-node-polyfills@0.22.0_rollup@4.24.0_vite@5.4.9_@types+node@22.7.5_/node_modules/vite-plugin-node-polyfills/dist/index.js";
import { TanStackRouterVite } from "file:///Users/ebraem/workspace/near/near-rewrite/near-vite-starter/node_modules/.pnpm/@tanstack+router-plugin@1.69.1_vite@5.4.9_@types+node@22.7.5_/node_modules/@tanstack/router-plugin/dist/esm/vite.js";
var __vite_injected_original_dirname = "/Users/ebraem/workspace/near/near-rewrite/near-vite-starter";
var vite_config_default = defineConfig({
  plugins: [
    TanStackRouterVite(),
    react(),
    nodePolyfills({ globals: { global: true } })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZWJyYWVtL3dvcmtzcGFjZS9uZWFyL25lYXItcmV3cml0ZS9uZWFyLXZpdGUtc3RhcnRlclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2VicmFlbS93b3Jrc3BhY2UvbmVhci9uZWFyLXJld3JpdGUvbmVhci12aXRlLXN0YXJ0ZXIvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2VicmFlbS93b3Jrc3BhY2UvbmVhci9uZWFyLXJld3JpdGUvbmVhci12aXRlLXN0YXJ0ZXIvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgeyBub2RlUG9seWZpbGxzIH0gZnJvbSAndml0ZS1wbHVnaW4tbm9kZS1wb2x5ZmlsbHMnO1xuaW1wb3J0IHsgVGFuU3RhY2tSb3V0ZXJWaXRlIH0gZnJvbSAnQHRhbnN0YWNrL3JvdXRlci1wbHVnaW4vdml0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICBUYW5TdGFja1JvdXRlclZpdGUoKSxcbiAgICByZWFjdCgpLFxuICAgIG5vZGVQb2x5ZmlsbHMoeyBnbG9iYWxzOiB7IGdsb2JhbDogdHJ1ZSB9IH0pXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKVxuICAgIH1cbiAgfVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1XLE9BQU8sV0FBVztBQUNyWCxPQUFPLFVBQVU7QUFDakIsU0FBUyxvQkFBb0I7QUFDN0IsU0FBUyxxQkFBcUI7QUFDOUIsU0FBUywwQkFBMEI7QUFKbkMsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsbUJBQW1CO0FBQUEsSUFDbkIsTUFBTTtBQUFBLElBQ04sY0FBYyxFQUFFLFNBQVMsRUFBRSxRQUFRLEtBQUssRUFBRSxDQUFDO0FBQUEsRUFDN0M7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
