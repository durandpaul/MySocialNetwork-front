<template>
    <v-layout id="home" align-center justify-center row fill-height>
         <v-flex v-for="i in 3" :key="`4${i}`" xs12 sm6 md4>
          <v-card dark >
            <v-card-text class="px-0"> <router-link to="signup">Inscription</router-link></v-card-text>
          </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  data() {
    return {
      SocialNetWorkName: "ConnectUrth",
      info: null
    };
  },
  methods: {}
  // mounted () {
  //   axios
  //     .get('http://localhost:3000/server/api/user/all')
  //     .then(response => (this.info = response))
  // }
};
</script>

<style>
#home {
  /* padding-top: 200px; */
}

</style>