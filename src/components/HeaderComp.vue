<template>
  <v-toolbar :clipped-left="primaryDrawer.clipped" app>
    <v-toolbar-title class="hidden-sm-and-down">
      <router-link style="text-decoration: none;" to="/">{{SocialNetWorkName}}</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items v-if="!isAuthenticated">
      <login-comp></login-comp>
    </v-toolbar-items>
    <v-toolbar-items v-else>
      <v-btn flat>{{getUser()}} online !</v-btn>
      <!-- <h4>You are connect {{getUser()}}</h4> -->
      <v-btn flat small color="orange darken-1" v-on:click="logoutUser()">Logout</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import LoginComp from "./LoginComp";
import { mapActions, mapGetters } from "vuex";

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
      clipped: true,
      floating: false
    }
  }),
  computed: {
    ...mapGetters({
      isAuthenticated: "isAuthenticated",
      currentUser: "currentUser"
    })
  },
  methods: {
    ...mapActions({
      logout: "logout"
    }),
    logoutUser() {
      this.logout({ id: this.currentUser["_id"] });
      this.$router.push("/");
    },
    getUser() {
      if (this.currentUser) {
        return this.currentUser["username"];
      }
      return;
    }
  }
};
</script>

<style>
a {
    text-decoration: none;
}
</style>