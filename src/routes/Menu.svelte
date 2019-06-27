<script>
  import 'bulma/css/bulma.css';
  import {
    Router,
    Link,
    Route
  } from "svelte-routing";
  import '@fortawesome/fontawesome-free/css/all.css';
  export let url = "";
</script>
<style>
  a:hover {
    text-decoration: none
  }
</style>
<section class="hero is-primary">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Primary title
      </h1>
      <h2 class="subtitle">
        Primary subtitle
      </h2>
    </div>
  </div>
</section>