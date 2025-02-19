/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      generateScopedName: "[name]_[local]_[hash:base64:5]",
    },
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
  test: {
    coverage: {
      enabled: true,
      reporter: ["text", "json", "html"],
    },
    globals: true,
    environment: "jsdom",
  },
});
