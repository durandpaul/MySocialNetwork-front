import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import store from './store/store';

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
  if (!localStorage.getItem("status")) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (localStorage.getItem("status")) {
    next()
    return
  }
  next('/signup')
}

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "home",
      component: Home,
      // beforeEnter: ifNotAuthenticated,
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
    {
      path: "/userprofile",
      name: "userprofile",
      beforeEnter: ifAuthenticated,
      component: () =>
        import("./views/UserProfile.vue")
    },
    // {
    //   path: "/friendsPost",
    //   name: "friendsPost",
    //   beforeEnter: ifAuthenticated,
    //   component: () =>
    //     import("./views/FriendsPost.vue")
    // },
    // {
    //   path: "/friendslist",
    //   name: "friendslist",
    //   beforeEnter: ifAuthenticated,
    //   component: () =>
    //     import("./views/FriendsList.vue")
    // },
    // {
    //   path: "/search",
    //   name: "search",
    //   beforeEnter: ifAuthenticated,
    //   component: () =>
    //     import("./views/Search.vue")
    // },

  ]
});