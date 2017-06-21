<template>
  <div>
    <div class="card-wide mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col" >
      <div class="mdl-card__title" id="innovative_superstore_card">
        <h2 class="mdl-card__title-text">Innovative Superstore</h2>
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
      <div class="mdl-card__title" id="photodayz_card">
        <h2 class="mdl-card__title-text">Photodayz</h2>
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
  name: 'ElectronicsAndPhoto',
  data () {
    return {
    }
  }
}
</script>

<style>
#innovative_superstore_card{
    background: url('../../images/default.jpg') center / cover;
}
#photodayz_card{
    background: url('../../images/default.jpg') center / cover;
}
</style>
