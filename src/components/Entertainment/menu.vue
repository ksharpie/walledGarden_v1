<template>
  <div>
    <div class="card-wide mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col" >
      <div class="mdl-card__title" id="str8_games_card">
        <h2 class="mdl-card__title-text">Str8 Games</h2>
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
          View Offers
        </a>
        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
          Visit Website
        </a>
      </div>
    </div>

    <br>

    <div class="card-wide mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col" >
      <div class="mdl-card__title" id="palace_cineplex_card">
        <h2 class="mdl-card__title-text">Palace Cineplex</h2>
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
          View Offers
        </a>
        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
          Visit Website
        </a>
      </div>
    </div>

    <br><br>
  </div>
</template>

<script>
export default {
  name: 'Entertainment',
  data () {
    return {
    }
  }
}
</script>

<style>
#str8_games_card{
    background: url('../../images/default.jpg') center / cover;
}
#palace_cineplex_card{
    background: url('../../images/default.jpg') center / cover;
}
</style>
