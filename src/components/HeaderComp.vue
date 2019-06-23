<template>
    <v-toolbar :clipped-left="primaryDrawer.clipped" >
      <v-toolbar-title class="hidden-sm-and-down">
        <router-link to="/">{{SocialNetWorkName}}</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items >
        <login-comp ></login-comp>
      </v-toolbar-items>
    </v-toolbar>
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
    }
  })
};
</script>

<style>
</style>