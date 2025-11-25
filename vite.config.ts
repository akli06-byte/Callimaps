import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true, // Écoute sur toutes les interfaces réseau (0.0.0.0)
    strictPort: false, // Utilise un autre port si 3000 est occupé
    open: false // Ne pas ouvrir automatiquement le navigateur
  }
})

