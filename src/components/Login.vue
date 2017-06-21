<template>
  <!-- Wide card with share menu button -->
  <div>

    <router-link to="BankingAndFinance">
      <div class="card-wide mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col" >
        <div class="mdl-card__title" id="banking_and_finance_card">
          <h2 class="mdl-card__title-text" style="text-decoration:none">Banking and Finance</h2>
        </div>
        <div class="mdl-card__supporting-text">
          View all the businesses which relate to banking
          and finance
        </div>
      </div>
    </router-link>
        
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.card-wide.mdl-card {
  margin: 0 auto;
  width: 860px;
}
.card-wide > .mdl-card__title {
  color: #fff;
  height: 176px;
}
.card-wide > .mdl-card__menu {
  color: #fff;
}
</style>
