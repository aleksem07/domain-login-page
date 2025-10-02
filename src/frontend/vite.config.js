import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { HOSTNAME } from 'os'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: false,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '::1',
      HOSTNAME,
      `${HOSTNAME}.local`,
    ],
    proxy: {
      '/auth': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false
      }
    }
  }
})