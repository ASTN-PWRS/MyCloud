import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  publicDir: "dummy",
  build: {
    outDir: "public/shoelace", // ← ここで出力先を指定
    lib: {
      entry: "resources/main.js",
      // ライブラリのエントリーポイント
      name: "Shoelace",
      fileName: (format) => `shoelace.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      output: {
        globals: { "@shoelace-style/shoelace": "Shoelace" },
      },
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "node_modules/@shoelace-style/shoelace/dist/assets",
          dest: "",
        },
      ],
    }),
  ],
});
