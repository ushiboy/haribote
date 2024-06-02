import path from "path";

import { defineConfig, configDefaults } from "vitest/config";

export default defineConfig({
  test: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./vitest.setup.ts"],
    coverage: {
      provider: "v8",
      include: ["src/**/*"],
      exclude: [
        "src/drivers/api/**/*",
        "src/vite-env.d.ts",
        "src/main.tsx",
        "src/mocks/**/*",
      ],
      reporter: ["text", "json-summary", "json", "html"],
      reportOnFailure: true,
      clean: true,
      all: true,
    },
    include: ["src/**/*.test.ts?(x)"],
    exclude: [
      ...configDefaults.exclude,
      "src/drivers/api/**/*",
      "src/vite-env.d.ts",
      "src/main.tsx",
      "src/mock.tsx",
    ],
    clearMocks: true,
  },
});
