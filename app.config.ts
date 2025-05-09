import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";
import wasm from "vite-plugin-wasm";



export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      wasm()
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
