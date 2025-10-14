import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import Components from "unplugin-vue-components/vite"
import IconsResolver from "unplugin-icons/resolver"
import Icons from "unplugin-icons/vite"
import { HeadlessUiResolver } from "unplugin-vue-components/resolvers"
import { visualizer } from "rollup-plugin-visualizer"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0", // Listen on all IP addresses, including local network
    port: 5173, // Default port
  },
  plugins: [
    vue(),
    Components({
      resolvers: [
        HeadlessUiResolver(),
        IconsResolver({
          enabledCollections: ['heroicons-solid', 'fa-solid', 'fa-brands', 'lucide'],
          alias: {
            his: "heroicons-solid", // Solid variant
            fa: "fa-solid", // Font Awesome Solid
            fab: "fa-brands", // Font Awesome Brands
            lucide: "lucide", // Lucide icons
          },
        }),
      ],
    }),
    // https://github.com/unplugin/unplugin-icons
    Icons({
      autoInstall: true, // Auto-install icon sets when used
      compiler: 'vue3',
    }),
    // Bundle size analyzer
    visualizer({
      open: true, // Automatically open in default browser
      filename: "dist/stats.html", // Output file
      gzipSize: true, // Show gzip size
      brotliSize: true, // Show brotli size
      template: "treemap", // Changed from 'grid' to 'treemap' for better visualization
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    emptyOutDir: true,
    outDir: "/var/www/www.slicer.xyz/",
    rollupOptions: {
      treeshake: true,
    },
  },
})
