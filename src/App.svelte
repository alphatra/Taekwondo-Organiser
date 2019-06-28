<script>
  import 'bulma/css/bulma.css';
  import {
    Router,
    Link,
    Route
  } from "svelte-routing";
  import '@fortawesome/fontawesome-free/css/all.css';
  import "bulma-dashboard/dist/bulma-dashboard.min.css"
  import Menu from './routes/Menu.svelte'
  export let url = "";
</script>
<style>
  a:hover {
    text-decoration: none
  }
  .center{
    align-items: center;
    justify-content: center;
    align-items: center;
  }
</style>
<div class="dashboard">
  <!-- left panel -->
  <div class="dashboard-panel is-one-fifth" style="background-color:#1F2833">
    <article class="media">
      <div class="media-left">
        <figure class="image is-96x96 is-square">
          <img class="is-rounded"
            src="https://firebasestorage.googleapis.com/v0/b/taekwondo-organiser.appspot.com/o/portfolio2.png?alt=media&token=a817201f-1f8d-4f04-b0ee-b2adc9603005"
            alt="Image">
        </figure>
      </div>
      <div class="media-content">
        <div class="content ">
          <p style="margin-top:12px">
            <a class="is-size-4 has-text-white">Gracjan Ziemiański</a>
            <br>
            <span>
            <a class="is-size-6 has-text-white">Black Belt</a>
            <a class="is-size-6 has-text-white">Jul - Dong Kołobrzeg</a></span>
          </p>
          <hr id="line" style="height:1.5px;width:220px;background-color:#66FCF1;margin-top:-12px;border-top:#66FCF1" />
        </div>
      </div>
    </article>
    <br />
    <Menu></Menu>
  </div>

  <!-- main section -->
  <div class="dashboard-main" style="background-color:#0B0C10">
  <div class="hero-head center">
  <div style="width:200px;"><input class="input is-rounded center" type="text" placeholder="Rounded input"></div>
  </div>
  <div class="hero-body">
    </div>
  </div>
  </div>