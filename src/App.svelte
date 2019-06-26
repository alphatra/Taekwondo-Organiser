<script>
  import Menu from './Menu.svelte';
  import Calendar from './Calendar.svelte';
  import Database from './Database.svelte';
  import Messages from './Messages.svelte';
  import 'bulma/css/bulma.css';
  import '@fortawesome/fontawesome-free/css/all.css';
    let site;
</script>
<section class="hero-header is-fullheight">
  <div class="columns">
    <Menu />
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
        <Calendar/>
        </div>
      </section>
    </div>
  </div>
</section>