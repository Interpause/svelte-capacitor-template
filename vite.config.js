import { defineConfig } from 'vite'

import { svelte } from '@sveltejs/vite-plugin-svelte'
import { visualizer } from 'rollup-plugin-visualizer'
import strip from '@rollup/plugin-strip'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte(),
		{
			...strip({
				include: ['**/*.js', '**/*.ts', '**/*.svelte'],
			}),
			...visualizer({
				open: true,
				brotliSize: true,
			}),
			apply: 'build',
		},
	],
	resolve: {
		dedupe: ['svelte'],
	},
})
