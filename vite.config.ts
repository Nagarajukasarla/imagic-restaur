import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
    optimizeDeps: {
        include: ['react-leaflet'],
    },
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    server: {
        port: 3000,
        allowedHosts: ['.ngrok-free.app']
    },
    publicDir: 'public',
    assetsInclude: ['**/*.OTF', '**/*.otf', '**/*.ttf', '**/*.woff', '**/*.woff2'],
})
