import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Utiliser des chemins relatifs pour les assets
  build: {
    target: 'es2020', // force un target moderne => plus de 'var'
    outDir: 'dist', // changement vers dist
    sourcemap: true, // optionnel, utile pour le debug
  },
  optimizeDeps: {
    exclude: ['lucide-react'], // comme tu fais déjà
  },
  server: {
    proxy: {
      // En développement, rediriger les routes timeline vers le serveur Node.js
      '^/timeline/[^.]+$': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  }
});
