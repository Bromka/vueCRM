import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    meta: {layout: 'main'},
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    meta: {layout: 'empty'},
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    meta: {layout: 'empty'},
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/Register.vue")
  },
  {
    path: "/categories",
    name: "Categories",
    meta: {layout: 'main'},
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/Categories.vue")
  },
  {
    path: "/detail",
    name: "Detail",
    meta: {layout: 'main'},
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/Detail.vue")
  },
  {
    path: "/history",
    name: "History",
    meta: {layout: 'main'},
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/History.vue")
  },
  {
    path: "/home",
    name: "Home",
    meta: {layout: 'main'},
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/Home.vue")
  },
  {
    path: "/planning",
    name: "Planning",
    meta: {layout: 'main'},
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/Planning.vue")
  },
  {
    path: "/profile",
    name: "Profile",
    meta: {layout: 'main'},
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/Profile.vue")
  },
  {
    path: "/record",
    name: "Record",
    meta: {layout: 'main'},
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/Record.vue")
  },


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
