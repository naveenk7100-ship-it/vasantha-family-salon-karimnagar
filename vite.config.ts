import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/vasantha-family-salon-karimnagar/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    port: 5178,
    host: true,
  }
})
