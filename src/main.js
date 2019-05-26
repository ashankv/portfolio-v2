import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import Education from './Education.vue'
import VueRouter from 'vue-router'

Vue.component('Header', Header);
Vue.component('Education', Education);

// Enables routing
Vue.use(VueRouter);
const routes = [
  { path: '/', component: Header}
];

const router = new VueRouter({
  routes: routes,
  mode: 'history' // Removes '#' from "www.ashankv.com/#"
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
