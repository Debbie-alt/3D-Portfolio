import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

build: {
  // Specify the entry point for your application
  rollupOptions: {
    input: {
      main: '/src/main.jsx' // Adjust the path as needed
    }
  }
}
