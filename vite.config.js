import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import rollupReplace from "@rollup/plugin-replace";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
  plugins: [
    rollupReplace({
      preventAssignment: true,
      values: {
        __DEV__: JSON.stringify(true),
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      },
    }),
    react(),
  ],
  ssr: {
    noExternal: ["styled-components"],
  },
  resolve: process.env.USE_SOURCE
    ? {
        alias: {
          "@remix-run/router": path.resolve(
            __dirname,
            "../../packages/router/index.ts"
          ),
          "react-router": path.resolve(
            __dirname,
            "../../packages/react-router/index.ts"
          ),
          "react-router-dom": path.resolve(
            __dirname,
            "../../packages/react-router-dom/index.tsx"
          ),
        },
      }
    : {},
});
