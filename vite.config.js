import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import { visualizer } from 'rollup-plugin-visualizer'
export default defineConfig({
	plugins: [
		vue(),
		visualizer({
			open: true,
			gzipSize: true,
			brotliSize: true,
		}),
	],
	server: {
		host: '0.0.0.0',
	},
})
