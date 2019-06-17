<template>
 <v-container fluid>   
    <div id="app">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/signup">Inscription</router-link>
      </div>
      <router-view />
    </div>
  </v-container>  
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ff862d;
  background-color: #ffae72;
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
