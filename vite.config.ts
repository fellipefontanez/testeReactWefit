import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/Components",
      "@pages": "/src/Pages",
      "@styles": "/src/Styles",
      "@assets": "/src/assets",
      "@services": "/src/services",
      "@util": "/src/Util",
    },
  },
});
