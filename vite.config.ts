import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const proxy = env.VITE_PROXY_TARGET
    ? {
        "/haribote/api": {
          target: env.VITE_PROXY_TARGET,
          changeOrigin: true,
        },
      }
    : undefined;
  return {
    base: "/haribote/",
    server: {
      port: 3000,
      proxy,
    },
    plugins: [react(), tsconfigPaths()],
  };
});
