import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020', // force un target moderne => plus de 'var'
    outDir: 'dist-server', // si tu veux préciser le dossier de sortie
    sourcemap: true, // optionnel, utile pour le debug
  },
  optimizeDeps: {
    exclude: ['lucide-react'], // comme tu fais déjà
  },
  server: {
    proxy: {
      '^/timeline/[^.]+$': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  }
});
