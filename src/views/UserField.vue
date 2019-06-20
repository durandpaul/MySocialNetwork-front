<template>
  <v-navigation-drawer
      v-model="primaryDrawer.model"
      :permanent="primaryDrawer.type === 'permanent'"
      :clipped="primaryDrawer.clipped"
      :floating="primaryDrawer.floating"
      :mini-variant="primaryDrawer.mini"
      overflow
  ></v-navigation-drawer>
 
</template>

<script>
  import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';

  export default {
    
    data() {
      return {
        drawers: ['Default (no property)', 'Permanent', 'Temporary'],
        primaryDrawer: {
        model: null,
        type: 'default (no property)',
        clipped: false,
        floating: false,
        mini: true
      },
      };
    },
    mounted() {
        
    },
    computed: {
      ...mapGetters({
        currentUser: 'currentUser'
      })
        
    },
  
  };
</script>
