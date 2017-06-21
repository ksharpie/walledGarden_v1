<template>
  <div>

    <div class="card-wide mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col" >
      <div class="mdl-card__title" id="sangsters_book_store_card">
        <h2 class="mdl-card__title-text">Sangster's Book Stores Ltd.</h2>
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

  </div>
</template>

<script>
export default {
  name: 'BookStore',
  data () {
    return {
    }
  }
}
</script>

<style>
#sangsters_book_store_card{
    background: url('../../images/default.jpg') center / cover;
}
</style>
