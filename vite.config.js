import { resolve } from 'path';
import { defineConfig } from 'vite';
import libCss from 'vite-plugin-libcss';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.js'),
            name: 'Gantt',
            fileName: 'frappe-gantt',
        },
        rollupOptions: {
            output: {
                format: 'cjs',
                assetFileNames: 'frappe-gantt[extname]',
                entryFileNames: 'frappe-gantt.[format].js'
            },
        },
    },
    output: { interop: 'auto' },
    server: { watch: { include: ['dist/*', 'src/*'] } },
    plugins: [libCss()],
});
