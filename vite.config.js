import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    cssMinify: 'esbuild',
    target: ['chrome100', 'safari15', 'firefox100']
  }
})
