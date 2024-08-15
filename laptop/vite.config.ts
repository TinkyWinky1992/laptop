import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/Components/"),
      "@dto": path.resolve(__dirname, "./src/Dto/"),
      "@hooks": path.resolve(__dirname, "./src/Hooks/"),
      "@icons": path.resolve(__dirname, "./src/icons/"),
      "@service": path.resolve(__dirname, "./src/service/"),
      "@utils": path.resolve(__dirname, "./src/utils/"),
    },
  },
  base: "./",
});
