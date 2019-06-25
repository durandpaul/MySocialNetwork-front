import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import store from './store/store'; 

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
  console.log(store.getters.isAuthenticated);
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/signup')
}

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/signup",
      name: "signup",
      beforeEnter: ifNotAuthenticated,
      component: () =>
        import("./views/SignUp.vue")
    },
    {
      path: "/userfield",
      name: "userfield",
      beforeEnter: ifAuthenticated,
      component: () =>
        import("./views/UserField.vue")
    },

  ]
});
