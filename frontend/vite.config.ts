import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/test/setup.ts',
        coverage: {
            provider: 'v8', // o 'istanbul' si prefieres
            reporter: ['text', 'json', 'html'], // Puedes agregar 'lcov' si integras con CI/CD
            exclude: [
                '**/index.ts',
                '**/types/**',
                '**/constants/**',
                '**/services/api/**',
                '**/store/context/**',
                '**/store/zustand/**',
                '**/utils/**',
                'generate-component.ts',
                'src/main.tsx',
                'src/app/App.tsx',
                '**/*.test.tsx',
                '**/*.stories.tsx',
                '**/index.ts',
                '**/*.d.ts',
                'vite.config.ts',
                'vitest.workspace.ts',
                'eslint.config.js',
                'generate-component.ts',
                '.storybook/**',
                'src/**/routes/**',
                'src/**/pages/**',
                'src/**/layouts/**',
                'src/**/viewmodels/**',
                'src/**/store/**',
                'src/**/services/**',
                'src/**/constants/**',
                'src/**/types/**',
                'src/**/utils/**',
                'src/**/main.tsx',
            ],
            thresholds: {
                lines: 80,
                functions: 80,
                branches: 80,
                statements: 80,
            },
        },
    },
});
