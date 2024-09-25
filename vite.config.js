import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Correct single export
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,  // Ensures fallback routing works correctly
  },
})
