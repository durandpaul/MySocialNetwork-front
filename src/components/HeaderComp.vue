<template>
  <v-toolbar :clipped-left="primaryDrawer.clipped" app dark>
    <v-toolbar-title class="hidden-md-and-down">
      <router-link style="text-decoration: none;" to="/">
        <img id="logo" src="../../public/logosocial2.png" alt="social network logo's" />
      </router-link>
    </v-toolbar-title>
    <v-toolbar-title class="hidden-md-and-up">
      <router-link style="text-decoration: none;" to="/">
        <img id="logoxs" src="../../public/logosocial2.png" alt="social network logo's" />
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items v-if="!isAuthenticated">
      <login-comp></login-comp>
    </v-toolbar-items>
    <v-toolbar-items v-else>
      <v-btn flat>{{getUser()}} online !</v-btn>
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
      console.log("logoutUser");
        
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

#logo {
  padding-top: 5px;
  height: 65px;
}

#logoxs {
  height: 40px;
}

.v-toolbar__content {
  padding: 0 4px;
}

.v-toolbar__items {
  max-width: 77%;
  padding-right: 9px;
}
.v-toolbar__title:not(:first-child) {
  margin-left: 5px;
}
</style>