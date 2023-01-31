import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import autoprefixer from 'autoprefixer';
import Unocss from 'unocss/vite';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Unocss(), react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    postcss: {
      // 自动追加前缀
      plugins: [autoprefixer()],
    },
  },
});
