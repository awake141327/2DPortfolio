import { defineConfig } from "vite";

export default defineConfig({
  base: "./2DPortfolio/",
  build: {
    minify: "terser",
  },
});
