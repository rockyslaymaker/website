import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";
import topLevelAwait from "vite-plugin-top-level-await";
import wasm from "vite-plugin-wasm";




export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      wasm(),
      topLevelAwait()
    ],
    server: {
      serverBaseURL: process.env.BASE_PATH
    }
  },
  server: {
    prerender: {
      crawlLinks: true
    },
  },
  devOverlay: false,
});
