import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    // other server options...
    allowedHosts: [
      'caitlyn-procommercial-pridelessly.ngrok-free.dev', // add your ngrok host here
      'localhost'
    ],
  },
})
