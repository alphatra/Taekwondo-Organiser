<script>
  import 'bulma/css/bulma.css';
  import {
    Router,
    Link,
    Route
  } from "svelte-routing";
  import '@fortawesome/fontawesome-free/css/all.css';
  import "bulma-dashboard/dist/bulma-dashboard.min.css"
  export let url = "";
</script>
<svelte:head>
</svelte:head>
<style>
  a:hover {
    text-decoration: none;
    color: #66FCF1
  }
  a:link{color: #66FCF1}
</style>
<aside class="menu">
  <p class="menu-label has-text-white ">
    General
  </p>
  <ul class="menu-list">
    <li><a class="has-text-grey-lighter">Calendar</a></li>
    <li><a class="has-text-grey-lighter">Data</a></li>
    <li><a class="has-text-grey-lighter">Messages</a></li>
    <li><a class="has-text-grey-lighter">Transactions</a></li>
  </ul>
  <p class="menu-label has-text-white ">
    Administration
  </p>
  <ul class="menu-list">
    <li><a class="has-text-grey-lighter">Create new event</a></li>
    <li><a class="has-text-grey-lighter">Database of affiliated persons</a></li>
    <li><a class="has-text-grey-lighter">Database of clubs</a></li>
    <li><a class="has-text-grey-lighter">Settings</a></li>
  </ul>
  <p class="menu-label has-text-white ">
    Statistics
  </p>
  <ul class="menu-list">
    <li><a class="has-text-grey-lighter">Ranking of all organisations</a></li>
    <li><a class="has-text-grey-lighter">Ranking of your organization</a></li>
    <li><a class="has-text-grey-lighter">Ranking from competitions</a></li>
  </ul>
  <p class="menu-label has-text-white ">
    Competitions
  </p>
  <ul class="menu-list">
    <li><a class="has-text-grey-lighter">Load Duels</a></li>
    <li><a class="has-text-grey-lighter">Edit duels</a></li>
    <li><a class="has-text-grey-lighter">Records</a></li>
  </ul>
</aside>