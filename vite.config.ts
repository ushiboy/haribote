import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/haribote/",
  server: {
    port: 3000,
  },
  plugins: [react(), tsconfigPaths()],
});
