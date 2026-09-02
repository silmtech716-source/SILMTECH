import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Para GitHub Pages: cuando crees el repo, cambia base a "/NOMBRE_REPO/"
  // De momento "/" para preview local. HashRouter evita problemas de rutas.
  base: '/',
})
