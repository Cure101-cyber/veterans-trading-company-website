import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

const page = (path: string) => fileURLToPath(new URL(path, import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      input: {
        main: page('./index.html'),
        about: page('./about/index.html'),
        services: page('./services/index.html'),
        quality: page('./quality/index.html'),
        leadership: page('./leadership/index.html'),
        suppliers: page('./suppliers/index.html'),
        news: page('./news/index.html'),
        contact: page('./contact/index.html'),
        careers: page('./careers/index.html'),
        notFound: page('./404.html'),
      },
    },
  },
});
