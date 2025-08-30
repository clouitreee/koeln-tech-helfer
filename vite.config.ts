import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { resolve } from "path";
import { copyFileSync, existsSync } from "fs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    {
      // Plugin para forzar copia de _redirects a dist/
      name: "copy-redirects",
      closeBundle() {
        const src = resolve(__dirname, "public/_redirects");
        const dest = resolve(__dirname, "dist/_redirects");
        if (existsSync(src)) {
          copyFileSync(src, dest);
          console.log("✅ Copiado _redirects a dist/");
        } else {
          console.warn("⚠️ No se encontró public/_redirects");
        }
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
