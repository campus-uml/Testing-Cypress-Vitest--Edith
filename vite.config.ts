import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    setupFiles: "./setupTest.ts",
    environment: "jsdom",
  },
});
