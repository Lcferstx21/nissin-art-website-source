import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // base: "/webTest/",
  base: "/",
  server: {
    host: "0.0.0.0", // 允许所有IP访问
    cors: true, // 允许跨域
  },
  plugins: [react()],
});
