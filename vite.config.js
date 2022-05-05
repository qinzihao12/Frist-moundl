import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
export default defineConfig({
    plugins: [vue()],
    // lintOnSave: false,
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'), // 把 @ 指向到 src 目录去
        },
    },
    server: {
        host: true,
        port: 3000,
        open: true,
        cors: true,
        strictPort: true,
        // 接口代理
        proxy: {
            '/api': {
                // 本地 8000 前端代码的接口 代理到 8888 的服务端口
                target: 'http://localhost:8888/',
                changeOrigin: true, // 允许跨域
                rewrite: (path) => path.replace('/api/', '/'),
            },
        },

    }
})