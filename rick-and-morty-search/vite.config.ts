import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@components": path.resolve(
        __dirname,
        "src/features/characters/components"
      ),
      "@hooks": path.resolve(__dirname, "src/features/characters/hooks"),
      "@types": path.resolve(__dirname, "src/features/characters/types"),
      "@api": path.resolve(__dirname, "src/api"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@routing": path.resolve(__dirname, "src/routing"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
});
