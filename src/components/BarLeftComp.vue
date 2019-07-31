<template>
  <div id="userfield">
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :permanent="primaryDrawer.type === 'Permanent'"
      :clipped="primaryDrawer.clipped"
      :mini-variant="primaryDrawer.mini"
      app
    >
      <v-list nav>
        <v-list-tile v-for="item in items" :key="item.title" @click="displayZ(item.comp)" link>
          <v-icon>{{ item.icon }}</v-icon>
          <v-list-tile-content>
            <v-list-tile-title style="text-aling: center">{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ['value'],
  data: () => ({
    drawers: ["Default (no property)", "Permanent", "Temporary"],
    primaryDrawer: {
      model: null,
      type: "default (no property)",
      clipped: true,
      mini: true
    },
    items: [
      { title: "Dashboard", icon: "dashboard", comp:"friendspost"},
      { title: "Friends", icon: "face", comp: "friendslist"},
      { title: "Search", icon: "search", comp: "search"}
    ]
  }),
  computed: {
    // ...mapGetters({
    //   currentUser: "currentUser"
    // })
   
  },
  methods: {
     displayZ(zone) {
       this.$emit('show', zone);
    }
  }
};
</script>
