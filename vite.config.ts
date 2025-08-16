import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

const BASE_PATH = '/Shurakshya-Farm-name/'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'development' ? '/' : BASE_PATH,
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}))
