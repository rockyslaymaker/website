import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";
import topLevelAwait from "vite-plugin-top-level-await";
import wasm from "vite-plugin-wasm";




export default defineConfig({    // required for GitHub Pages
  vite: {
    plugins: [
      tailwindcss(),
      wasm(),
      topLevelAwait()
    ],
  },
  server: {
    baseURL: process.env.BASE_PATH,
    prerender: {
      crawlLinks: true
    },
  },
  devOverlay: false,
});
