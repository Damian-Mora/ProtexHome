import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
    base: '/ProtexHome/',

    server: {
        host: true,
        port: 3000
    },

    build: {
        outDir: 'dist',
        sourcemap: false
    },

    plugins: [
        VitePWA({
            registerType: 'autoUpdate',
            injectRegister: 'auto',
            strategies: 'generateSW',

            manifestFilename: 'manifest.json',

            workbox: {
                globPatterns: [
                    '**/*.{js,css,html,woff2,png,mp3}'
                ],

                maximumFileSizeToCacheInBytes:
                    5 * 1024 * 1024,

                skipWaiting: true,
                clientsClaim: true
            },

            manifest: {
                name: 'ProtexHome',
                short_name: 'ProtexHome',

                start_url: '/ProtexHome/',
                scope: '/ProtexHome/',

                display: 'standalone',
                orientation: 'portrait',

                background_color: '#ffffff',
                theme_color: '#ffffff',

                icons: [
                    {
                        src: 'assets/icon-512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable'
                    }
                ]
            }
        })
    ]
});