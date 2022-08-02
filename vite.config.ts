/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import eslint from 'vite-plugin-eslint';

export default defineConfig(() => {
  return {
    server: {
      port: 3000,
      host: true,
    },
    build: {
      outDir: 'build',
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',

          assetFileNames: ({ name }) => {
            if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
              return 'assets/img/[name]-[hash][extname]';
            }

            if (/\.css$/.test(name ?? '')) {
              return 'assets/css/[name]-[hash][extname]';
            }

            if (/\.woff2$/.test(name ?? '')) {
              return 'assets/fonts/[name]-[hash][extname]';
            }
            // default value
            // ref: https://rollupjs.org/guide/en/#outputassetfilenames
            return 'assets/[name]-[hash][extname]';
          },
        },
      },
    },
    test: {
      globals: true,
    },
    plugins: [react(), svgr(), eslint({ cache: true })],
  };
});
