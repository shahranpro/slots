import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // isse network IP visible hoga
    port: 5173, // optional
    open: true, // browser auto open (optional)
  },
})