<template>
  <v-app id="appback">
    <v-container fluid align-center>
      <header-comp></header-comp>
      <router-view />
      <footer-comp></footer-comp>
    </v-container>
  </v-app>
</template>
<script>
import FooterComp from "./components/FooterComp";
import HeaderComp from "./components/HeaderComp";

import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    "footer-comp": FooterComp,
    "header-comp": HeaderComp
  },
  data: () => ({
    SocialNetWorkName: "ConnectUrth"
  }),
  computed: {
    ...mapGetters({
      Authenticate: "isAuthenticated"
    })
  },
  methods: {
    ...mapActions({
      letConnect: "getConnection"
    })
  },
  created() {
    if (localStorage.getItem("status") && !this.Authenticate) {
      this.letConnect();
    }
  }
};
</script>


<style>
#appback,
html {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ff862d;
  background-color: #fff3e0;
}

#appback {
  margin-top: 50px;
}
</style>

