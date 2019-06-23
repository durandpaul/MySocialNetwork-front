<template>
  <div id="home">
    <h2>
      <router-link to="/" class="hidden-sm-and-up">{{SocialNetWorkName}}</router-link>
    </h2>
    <router-link to="signup">Inscription</router-link>
  </div>
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
