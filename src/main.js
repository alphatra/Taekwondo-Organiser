import App from './Login_page.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;