import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    legacy({ targets: ['safari >= 12', 'ios_saf >= 12', 'chrome >= 61'] }),
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/setupTests.ts'],
  },
})
