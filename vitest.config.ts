import {fileURLToPath} from 'node:url'
import tsconfigPaths from 'vite-tsconfig-paths'
import {defineConfig} from 'vitest/config'
import react from '@vitejs/plugin-react'
import solid from 'vite-plugin-solid'


export default defineConfig({
  root: 'src',

  plugins: [
    tsconfigPaths({}),
    react({
      include: /\.react\.spec\.[jt]sx?$/u,
    }),
    solid({
      include: /\.solid\.spec\.[jt]sx?$/u,
    }),
  ],

  test: {
    root: fileURLToPath(new URL('.', import.meta.url)),

    globals: true,

    environment: 'happy-dom',

    setupFiles: ['./tests/setup.ts'],

    alias: [{find: /^~\/(.*)/u, replacement: fileURLToPath(new URL('src/$1', import.meta.url))}],

    reporters: ['verbose'],

    restoreMocks: true,

    coverage: {
      enabled         : true,
      include         : ['src/**'],
      reportsDirectory: 'test_results/vitest',
      reporter        : [
        ['text'],
        ['lcov'],
      ],
    },

    typecheck: {
      enabled: true,
    },
  },
})
