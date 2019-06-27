<script>
	let user = { loggedIn: false };

	function toggle() {
		user.loggedIn = !user.loggedIn;
	}
</script>

{#if user.loggedIn}
	<button class="uk-button uk-button-primary uk-border-pill uk-width-1-1" on:click={toggle}>
		Log out
	</button>
{:else}
	<button class="uk-button uk-button-primary uk-border-pill uk-width-1-1" on:click={toggle}>
		Log in
	</button>
{/if}