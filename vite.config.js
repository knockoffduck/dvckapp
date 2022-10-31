import { sveltekit } from '@sveltejs/kit/vite';
/** @type {import('vite').UserConfig} */

const config = {
	plugins: [sveltekit()],
	ssr: {
		noExternal: ['@carbon/charts', 'carbon-components'],
	},
	server: {
		fs: {
			allow: ['..']
		}
	}
};

export default config;
