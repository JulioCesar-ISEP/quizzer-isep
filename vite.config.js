import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './src/app'),
      '@core': path.resolve(__dirname, './src/core'),
      '@ports': path.resolve(__dirname, './src/ports'),
      '@adapters': path.resolve(__dirname, './src/adapters'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@infra': path.resolve(__dirname, './src/infrastructure'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1600,
    target: 'esnext',
    rollupOptions: {
      output: {
        // Vite 8 (Rolldown) expects manualChunks to be a function.
        manualChunks(id) {
          if (!id) return;
          if (id.includes('node_modules')) {
            if (id.includes('/react/') || id.includes('\\react\\')) return 'vendor-react';
            if (id.includes('/react-dom/') || id.includes('\\react-dom\\')) return 'vendor-react';
            if (id.includes('/lucide-react/') || id.includes('\\lucide-react\\')) return 'vendor-ui';
            return 'vendor';
          }
        },
      },
    },
  },
  server: {
    port: 3000,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
  },
});
