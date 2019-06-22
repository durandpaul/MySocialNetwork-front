<template>
  <v-app id="appback">
    <header-comp></header-comp>
    <v-container fluid>
      <router-view/>
    </v-container>
    <footer-comp></footer-comp>
  </v-app>
</template>
<script>
import FooterComp from "./components/FooterComp";
import HeaderComp from "./components/HeaderComp";
export default {
  components: {
    "footer-comp": FooterComp,
    "header-comp": HeaderComp
  },
  data: () => ({
    SocialNetWorkName: "ConnectUrth"
  })
};
</script>


<style>
#appback {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ff862d;
  background-color: #fff3e0;
}
</style>

