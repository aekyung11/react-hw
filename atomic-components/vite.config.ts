import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

const viteConfig = defineConfig({
  base: "/",
  server: {
    host: "localhost",
    port: 1117,
    open: false,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

export default viteConfig;
