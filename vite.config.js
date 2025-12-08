import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/my-first-project-study-assistant/',
  plugins: [react()],
})
