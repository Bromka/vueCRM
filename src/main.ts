import Vue from "vue";
import App from "./App.vue";
import date from '@/filters/date'

import router from "@/router";
import store from '@/store'
import Vuelidate from 'vuelidate'
import Plugins from '@/utils/message.plugin.ts'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


import 'materialize-css/dist/js/materialize.min'

Vue.use(Plugins)
Vue.use(Vuelidate)

Vue.filter('date', date)
Vue.config.productionTip = false;
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMEgulB55lEWX-ZJbQYmE4sG3ch3l5Upk",
  authDomain: "mycrmproject-62586.firebaseapp.com",
  databaseURL: "https://mycrmproject-62586.firebaseio.com",
  projectId: "mycrmproject-62586",
  storageBucket: "mycrmproject-62586.appspot.com",
  messagingSenderId: "707130612757",
  appId: "1:707130612757:web:2fab69601d03d99a04421c",
  measurementId: "G-D9HR1DEJWF"
};

firebase.initializeApp(firebaseConfig)

let app:object;
firebase.auth().onAuthStateChanged(()=>{
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount("#app");
  }
})




