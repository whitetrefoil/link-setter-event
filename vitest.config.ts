import react from '@vitejs/plugin-react'
import solid from 'vite-plugin-solid'
import tsconfigPaths from 'vite-tsconfig-paths'
import {defineConfig} from 'vitest/config'


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
    root: '.',

    globals: true,

    environment: 'happy-dom',

    setupFiles: ['./tests/setup.ts'],

    reporters: ['verbose'],

    restoreMocks: true,

    coverage: {
      enabled         : true,
      include         : ['./src/**'],
      reportsDirectory: './test_results/vitest',
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
