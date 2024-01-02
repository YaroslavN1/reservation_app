import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';
import Unocss from 'unocss/vite';
import { presetUno } from 'unocss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), legacy(), Unocss({ presets: [presetUno()] })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
