import { defineConfig } from "vite";
import FullReload from "vite-plugin-full-reload";

export default defineConfig({
  plugins: [FullReload(["src/*"]), { root: __dirname }],
});
