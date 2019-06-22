<template>
  <div id="home">
    <router-link to="signup">Inscription</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  data() {
    return {
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
