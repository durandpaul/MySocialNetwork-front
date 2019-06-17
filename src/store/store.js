import Vue from "vue";
import Vuex from "vuex";

import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  // state: {
  //   count: 0
  // },
  // mutations: {
  //   increment (state) {
  //     state.count ++;
  //   }
  // },
  // actions: {
  //   increment ({commit}) {
  //     commit('increment');
  //   }
  // },

  // getters : {
  //   count : state => state.count
  // },

  modules: {
    user
  }
});
