<template>
  <div id="header-comp">
    <v-toolbar :clipped-left="primaryDrawer.clipped">
      <v-toolbar-title>
        <router-link to="/">{{SocialNetWorkName}}</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items >
        <login-comp flat></login-comp>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import LoginComp from "./LoginComp";

export default {
  components: {
    "login-comp": LoginComp
  },
  data: () => ({
    SocialNetWorkName: "ConnectUrth",
    drawers: "Permanent",
    primaryDrawer: {
      model: null,
      type: "default (no property)",
      clipped: false,
      floating: false,
      mini: true
    }
  })
};
</script>

<style>
</style>