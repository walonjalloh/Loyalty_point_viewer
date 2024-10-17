import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc"; // Use the SWC-based React plugin
import path from "path";

// Vite configuration
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias for cleaner imports
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`, // Import global variables
      },
    },
  },
  server: {
    port: 5173, // Customize if needed
    open: true, // Automatically open browser on start
  },
});
