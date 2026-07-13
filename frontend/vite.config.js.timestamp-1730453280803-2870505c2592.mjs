// vite.config.js
import path from "path";
import react from "file:///C:/Users/alok6/OneDrive/Desktop/JobPortal/jobportal-yt/frontend/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///C:/Users/alok6/OneDrive/Desktop/JobPortal/jobportal-yt/frontend/node_modules/vite/dist/node/index.js";
var __vite_injected_original_dirname =
  "C:\\Users\\alok6\\OneDrive\\Desktop\\JobPortal\\jobportal-yt\\frontend";
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src"),
    },
  },
});
export { vite_config_default as default };
