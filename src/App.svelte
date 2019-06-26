<script>
  import 'bulma/css/bulma.css';
  import Calendar from './routes/Calendar.svelte';
  import Database from './routes/Database.svelte';
  import Messages from './routes/Messages.svelte';
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
<Router url="{url}">
<section class="hero-header is-fullheight">
  <div class="columns">
    <div class="column is-3">
      <aside class="menu" style="padding-top: 100px">
        <ul class="menu-list">
          <a id="page1" class="is-large is-fullwidth is-white is-size-4 navbar-item "
            style="padding-top: 20px; padding-bottom:20px"><Link to="Calendar">Calendar</Link></a>
          <li><a id="page2" class="is-large is-fullwidth is-white is-size-4 navbar-item "
              style="padding-top: 20px; padding-bottom:20px"><Link to="Database">Database of affiliated persons</Link></a></li>
          <li><a id="page3" class="is-large is-fullwidth is-white is-size-4 navbar-item "
              style="padding-top: 20px; padding-bottom:20px"><Link to="Messages">Database of clubs</Link></a></li>
          <li><a id="page4" class="is-large is-fullwidth is-white is-size-4 navbar-item "
              style="padding-top: 20px; padding-bottom:20px"><Link to="blog">Messages</Link></a></li>
        </ul>
      </aside>
    </div>
    <div class="column">
      <section class="hero is-fullheight" style="background-color:#F5FAF9">
        <div class="hero-header">
          <div class="container has-text-centered">
            <h2 class="subtitle" style="Color:#CCE2E3">
              Taekwon-do Organiser
            </h2>
          </div>
        </div>
        <div class="hero-body">
        <Route path="Database" component="{Database}" />
        <Route path="Calendar" component="{Calendar}" />
        <Route path="Messages" component="{Messages}" />
        <Route path="/"><Home /></Route>
        </div>
      </section>
    </div>
  </div>
</section>
</Router>