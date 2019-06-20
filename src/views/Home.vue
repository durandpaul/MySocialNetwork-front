<template>
  <div class="home">
    <header>
    <h1>{{ SocialNetWorkName }}</h1>
    </header>
  </div>
  
</template>

<script>
// @ is an alias to /src
  import axios from 'axios'
export default {
  
  data() {
    return {
      SocialNetWorkName: "ConnectUrth",
       info: null
    };
  },
  methods: {
    
  },
  // mounted () {
  //   axios
  //     .get('http://localhost:3000/server/api/user/all')
  //     .then(response => (this.info = response))
  // }   
};
</script>
