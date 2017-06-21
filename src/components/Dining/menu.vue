<template>
  <div>
    <div class="card-wide mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col" >
      <div class="mdl-card__title" id="deli_works_card" >
        <h2 class="mdl-card__title-text">Deli Works</h2>
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
      <div class="mdl-card__title" id="jade_garden_card">
        <h2 class="mdl-card__title-text">Jade Garden</h2>
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
  name: 'Dining',
  data () {
    return {
    }
  }
}
</script>

<style>
#deli_works_card{
    background: url('../../images/default.jpg') center / cover;
}
#jade_garden_card{
    background: url('../../images/default.jpg') center / cover;
}
</style>
