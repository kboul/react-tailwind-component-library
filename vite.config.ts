import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ babel: { plugins: ["istanbul"] } })],
  resolve: {},
  optimizeDeps: {
    exclude: [], // Libs to exclude from pre-bundling
    include: ["react-is", "scheduler", "prop-types", "react-dom"], // Libs that still need an optimisation. It's needed if an excluded ESM dependency has nested CommonJS dependencies. https://v4.vitejs.dev/config/dep-optimization-options.html#optimizedeps-include
  },
});
