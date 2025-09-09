import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'

export default defineConfig({
  root: 'client',
  plugins: [react(), tailwind()],
  server: { port: 5173, proxy: { '/api': 'http://localhost:5174' } },
  build: { outDir: '../dist', emptyOutDir: true },
  preview: { port: 4173 }
})
