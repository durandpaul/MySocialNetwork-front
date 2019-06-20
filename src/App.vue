<template>
  <v-app id="backapp">
    <v-toolbar :clipped-left="primaryDrawer.clipped">
      <v-toolbar-title>{{SocialNetWorkName}}</v-toolbar-title>
      <router-link to="signup">Inscription</router-link>
    </v-toolbar>
      <router-view/>
    <v-footer :inset="footer.inset" app>
      <span class="px-3">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    SocialNetWorkName: "ConnectUrth",
    dark: true,
    drawers: "Permanent",
    primaryDrawer: {
      model: null,
      type: "default (no property)",
      clipped: true,
      floating: false,
      mini: true
    },
    footer: {
      inset: false
    }
  })
};
</script>


<style>
#backapp {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ff862d;
  background-color: #fff3e0;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #1c1c1c;
}
</style>

