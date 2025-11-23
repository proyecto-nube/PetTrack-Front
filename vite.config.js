// vite.config.js  (usar ESM)
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ⚠️ IMPORTANTE: no usar require, solo import
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173
  }
});
