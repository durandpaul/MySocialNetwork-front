<template>
  <v-layout id="home" align-content-space-around justify-space-around row fill-height>
    <v-flex xs12 sm6 md3 lg3>
      <v-card color="orange accent-2" v-if="!authenticated">
        <v-card-title>Check here maybe you know somebody</v-card-title>
        <v-list class="orangaccent4 list-user">
          <v-list-tile
            v-for="item in allUsers"
            :key="item.username"
            class="orangaccent3 user-choice"
            style="margin-top: 15px"
            @click="profileAccess(item._id)"
          >
            <img class="avatar" :src="item.avatar" />
            <v-list-tile-content>
              <v-list-tile-title style="text-align: center">{{item.username}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
      <v-card color="orange accent-3" v-else>
        <v-card-title>Your Friends</v-card-title>
        <!-- <v-list class="orangaccent4 list-user">
          <v-list-tile
            v-for="item in allUsers"
            :key="item.username"
            class="orangaccent3 user-choice"
            style="margin-top: 15px"
            @click="profileAccess(item._id)"
          >
            <img class="avatar" :src="item.avatar" />
            <v-list-tile-content>
              <v-list-tile-title style="text-aling: center">{{item.username}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list> -->
      </v-card>
    </v-flex>
    <!-- {{allUsers}} -->
    <v-flex xs12 sm6 md3 lg3>
      <v-card color="orange accent-3" v-if="!authenticated">
        <v-card-title>Click here for inscription now !</v-card-title>
        <v-card-text class="px-0">
          <router-link
            to="signup"
            style="color: white; border-style: ridge; padding: 10px; background-color: #E65100;"
          >INSCRIPTIONS</router-link>
        </v-card-text>
      </v-card>
      <v-card color="orange accent-3" v-else>
        <v-card-text class="px-0">
          <router-link to="signup">Last friend publications</router-link>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex xs12 sm6 md3 lg3>
      <v-card color="orange accent-3" v-if="!authenticated">
        <v-card-title>
          <router-link to="signup">ConnectUrth News</router-link>
        </v-card-title>

        <v-list>
          Some news here...
          <!-- <v-list-item v-for="item in items" :key="item.title">
            <v-list-item-icon>
              <v-icon v-if="item.icon" color="pink">star</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="text-center" v-text="item.title"></v-list-item-title>
            </v-list-item-content>

            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>
          </v-list-item>-->
        </v-list>
      </v-card>
      <v-card color="orange accent-3" v-else>
        <v-card-title>Notification</v-card-title>
        <v-card-text class="px-0"></v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      SocialNetWorkName: "ConnectUrth",
      info: null
    };
  },
  methods: {
    ...mapActions({
      loadUsers: "loadUsersList"
    }),
    profileAccess(id) {
      // console.log(id);
      // Access to profile but not
    }
  },
  computed: {
    ...mapGetters({
      allUsers: "all",
      authenticated: "isAuthenticated"
    })
  },
  mounted() {
    this.loadUsers();
  }
};
</script>

<style>
.avatar {
  width: 45px;
}

.orangaccent3 {
  background-color: #ff9100;
}

.theme--light.v-list {
  background-color: #ff6d00;
}

.list-user {
  padding: 10px;
}

.v-list__tile__title {
  text-align: center;
}

.user-choice {
  cursor: pointer;
}
</style>