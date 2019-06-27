<script>
  import 'bulma/css/bulma.css'
  import 'svelma'
  import '@fortawesome/fontawesome-free/css/all.css'
  import LogIn from './LogIn.svelte';S
  export let  generator;
  function handleClick() {
    generator = 0
  };
  function handleClick1() {
    generator = 1
  };
  function handleClick2() {
    generator = 2
  };
  function handleClick3() {
    generator = 3
  };
</script>
<style>
	a:hover{text-decoration: none}
</style>
<div class="column is-3">
  <aside class="menu" style="padding-top: 100px">
  <ul class="menu-list">
  <LogIn />
    <a id="page1" class="is-large is-fullwidth is-white is-size-4 navbar-item "  style="padding-top: 20px; padding-bottom:20px" on:click={handleClick}>Calendar</a>
    <li><a id="page2" class="is-large is-fullwidth is-white is-size-4 navbar-item "  style="padding-top: 20px; padding-bottom:20px" on:click={handleClick1}>Database of affiliated persons</a></li>
    <li><a id="page3" class="is-large is-fullwidth is-white is-size-4 navbar-item "  style="padding-top: 20px; padding-bottom:20px" on:click={handleClick2}>Database of clubs</a></li>
    <li><a id="page4" class="is-large is-fullwidth is-white is-size-4 navbar-item "  style="padding-top: 20px; padding-bottom:20px" on:click={handleClick3}>Messages</a></li>
  </ul>
</aside>
  </div>