<template>
  <div id="userfield">
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :permanent="primaryDrawer.type === 'Permanent'"
      :clipped="primaryDrawer.clipped"
      :mini-variant="primaryDrawer.mini"
      app
    ></v-navigation-drawer>

  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      drawers: ["Default (no property)", "Permanent", "Temporary"],
      primaryDrawer: {
        model: null,
        type: "default (no property)",
        clipped: true,
        mini: true
      }
    };
  },
  // computed: {
  //   ...mapGetters({
  //     currentUser: "currentUser"
  //   })
  // },
  // methods: {
  //   getUser() {
  //     if (this.currentUser) {
  //       return this.currentUser["username"];
  //     }
  //     return;
  //   }
  // }
};
</script>
