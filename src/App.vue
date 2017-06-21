<template>
  <div id="app">
    <!-- <router-link to="Login"> -->
      <a v-bind:href="click_through_url" id="login_button" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-color--accent mdl-color-text--white">
        Login
      </a>
    <!-- </router-link> -->
    <router-view>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      base_grant_url: '',
      user_continue_url:  '',
      node_mac: '',
      client_ip:  '',
      client_mac: '',
      duration: '3600'
    }
  },
  computed: {
    click_through_url: function () {
      return this.base_grant_url + "?continue_url=" +  this.user_continue_url + "&duration=" + this.duration;
    }
  },
  mounted: function () {
    self = this;
    this.$nextTick(function () {
        self.base_grant_url = self.$route.query.base_grant_url;
        self.user_continue_url = self.$route.query.user_continue_url;
        self.node_mac = self.$route.query.node_mac;
        self.client_ip = self.$route.query.client_ip;
        self.client_mac = self.$route.query.client_mac;

      })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#login_button{
  position: fixed;
  display: block;
  right: 0;
  bottom: 0;
  margin-right: 40px;
  margin-bottom: 40px;
  z-index: 900;
}
</style>
