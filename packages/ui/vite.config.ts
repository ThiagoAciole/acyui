import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { writeFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: '**/*.svg?react',
    }),
    dts({
      include: ['src'],
      outDir: 'dist',
      insertTypesEntry: true,
    }),
    {
      name: 'generate-css-types',
      closeBundle() {
        writeFileSync('dist/acyui.css.d.ts', 'export {};\n');
      },
    },
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'acyui',
      fileName: (format: string) => `acyui.${format}.js`,
      cssFileName: 'acyui',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        preserveModules: false,
      },
    },
    cssMinify: true,
    sourcemap: true,
  },
});
