import { defineConfig, presetUno, presetAttributify, presetTypography, transformerAttributifyJsx } from 'unocss';

export default defineConfig({
  theme: {},
  shortcuts: {},
  safelist: [],
  rules: [],
  presets: [presetUno(), presetAttributify(), presetTypography()],
  transformers: [transformerAttributifyJsx()],
});
