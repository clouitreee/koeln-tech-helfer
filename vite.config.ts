import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { copyFileSync } from "fs";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "copy-redirects",
      closeBundle() {
        // Copiar _redirects al dist/ después del build
        copyFileSync(
          resolve(__dirname, "public/_redirects"),
          resolve(__dirname, "dist/_redirects")
        );
      },
    },
  ],
});
