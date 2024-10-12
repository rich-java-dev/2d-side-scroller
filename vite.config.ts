import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: '/2d-side-scroller/',
  plugins: [

    remix({
      basename: '/2d-side-scroller/',
      ssr: false,
    }),
    tsconfigPaths(),
  ],
});
