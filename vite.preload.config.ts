import { defineConfig } from "vite";

// https://vitejs.dev/config
export default defineConfig({
  build: {
    target: "esnext",
    lib: {
      entry: "src/preload.ts",
      formats: ["es"],
      fileName: "preload",
    },
    rollupOptions: {
      output: {
        format: "es",
      },
    },
  },
});
