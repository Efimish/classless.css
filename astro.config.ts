import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://efimish.github.io",
  base: "/classless.css",
  trailingSlash: "always",
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            if (assetInfo.names[0].endsWith(".css")) return "classless.css";
            return "[name][extname]";
          },
        },
      },
    },
  },
});
