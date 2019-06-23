<template>
  <div id="userfield">
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :permanent="primaryDrawer.type === 'permanent'"
      :clipped="primaryDrawer.clipped"
      :floating="primaryDrawer.floating"
      :mini-variant="primaryDrawer.mini"
      app
    ></v-navigation-drawer>
    <div>
      <h4>You are connect {{currentUser.username}}</h4>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      drawers: ["Default (no property)", "Permanent", "Temporary"],
      primaryDrawer: {
        model: null,
        type: "default (no property)",
        clipped: false,
        floating: false,
        mini: true
      },
      username: ''
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "currentUser"
    })
  },
  mounted() {
    this.username = currentUser.username;
  },
};
</script>
