<template>
  <div>
    <div class="card-wide mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col" >
      <div class="mdl-card__title" id="my_fandangles_card">
        <h2 class="mdl-card__title-text">My Fandangles</h2>
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
      <div class="mdl-card__title" id="silk_and_satin_card">
        <h2 class="mdl-card__title-text">Silk and Satin</h2>
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
  name: 'ToyHobbiesCraft',
  data () {
    return {
    }
  }
}
</script>

<style>
#my_fandangles_card{
    background: url('../../images/default.jpg') center / cover;
}
#silk_and_satin_card{
    background: url('../../images/default.jpg') center / cover;
}
</style>
