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


    <br>

    <router-link to="BookStore">
      <div class="card-wide mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col" >
      <div class="mdl-card__title" id="bookstore_card" >
        <h2 class="mdl-card__title-text">BookStores</h2>
      </div>
      <div class="mdl-card__supporting-text">
        View all the businesses which relate to books
      </div>
    </div>
    </router-link>

    <br>

    <router-link to="Clothing">
      <div class="card-wide mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col" >
      <div class="mdl-card__title" id="clothing_card">
        <h2 class="mdl-card__title-text">Clothing</h2>
      </div>
      <div class="mdl-card__supporting-text">
        View all the businesses which relate to clothing
      </div>
    </div>
    </router-link>

    <br>

    <router-link to="Dining">
      <div class="card-wide mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col" >
      <div class="mdl-card__title" id="dining_card">
        <h2 class="mdl-card__title-text">Dining</h2>
      </div>
      <div class="mdl-card__supporting-text">
        View all the businesses which relate to dining
      </div>
    </div>
    </router-link>
    <br>

    <router-link to="ElectronicsAndPhoto">
      <div class="card-wide mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col" >
      <div class="mdl-card__title" id="electronics_and_photo_card">
        <h2 class="mdl-card__title-text">Electronics and Photo</h2>
      </div>
      <div class="mdl-card__supporting-text">
        View all the businesses which relate to electronics
        and photos
      </div>
    </div>
    </router-link>

    <br>

    <router-link to="Entertainment">
      <div class="card-wide mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col" >
      <div class="mdl-card__title" id="entertainment_card">
        <h2 class="mdl-card__title-text">Entertainment</h2>
      </div>
      <div class="mdl-card__supporting-text">
        View all the businesses which relate to entertainment
      </div>
    </div>
    </router-link>

    <br>

    <router-link to="FoodCourt">
      <div class="card-wide mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col">
      <div class="mdl-card__title"  id="food_court_card">
        <h2 class="mdl-card__title-text">Food Court</h2>
      </div>
      <div class="mdl-card__supporting-text">
        View all the businesses in the food court
      </div>
    </div>
    </router-link>

    <br>

    <router-link to="GiftShops">
      <div class="card-wide mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col" >
      <div class="mdl-card__title" id="gift_shops_card">
        <h2 class="mdl-card__title-text">Gift Shops</h2>
      </div>
      <div class="mdl-card__supporting-text">
        View all the businesses which relate to gifts
      </div>
    </div>
    </router-link>

    <br>

    <router-link to="HomeImprovement">
      <div class="card-wide mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col" >
      <div class="mdl-card__title" id="home_improvement_card">
        <h2 class="mdl-card__title-text">Home Improvement</h2>
      </div>
      <div class="mdl-card__supporting-text">
        View all the businesses which relates to home improvement
      </div>
    </div>
    </router-link>

    <br>

    <router-link to="ToyHobbiesCraft">
      <div class="card-wide mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col" >
      <div class="mdl-card__title" id="toy_hobbies_craft_card">
        <h2 class="mdl-card__title-text">Toys Hobbies Craft</h2>
      </div>
      <div class="mdl-card__supporting-text">
        View all the businesses which relates to toys hobbies and
        crafts
      </div>
    </div>
    </router-link>

    <br>

    <router-link to="TravelAndOutdoors">
      <div class="card-wide mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col" >
        <div class="mdl-card__title" id="travel_and_outdoors_card">
          <h2 class="mdl-card__title-text">Travel and Outdoors</h2>
        </div>
        <div class="mdl-card__supporting-text">
          View all the businesses which relates to travel
          and outdoors
        </div>
      </div>
    </router-link>

    <br><br>

  </div>
</template>

<script>
export default {
  name: 'Homepage',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

body{
  background: url('../images/sovereign_outside.jpg') center / cover;
  background-attachment: fixed;
}
#banking_and_finance_card{
    background: url('../images/BankingAndFinance.jpg') center / cover;
}
#bookstore_card{
    background: url('../images/default.jpg') center / cover;
}
#clothing_card{
    background: url('../images/default.jpg') center / cover;
}
#dining_card{
    background: url('../images/default.jpg') center / cover;
}
#electronics_and_photo_card{
    background: url('../images/default.jpg') center / cover;
}
#entertainment_card{
    background: url('../images/default.jpg') center / cover;
}
#food_court_card{
    background: url('../images/default.jpg') center / cover;
}
#gift_shops_card{
    background: url('../images/default.jpg') center / cover;
}
#home_improvement_card{
    background: url('../images/default.jpg') center / cover;
}
#toy_hobbies_craft_card{
    background: url('../images/default.jpg') center / cover;
}
#travel_and_outdoors_card{
    background: url('../images/default.jpg') center / cover;
}
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
