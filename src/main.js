import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './Index.vue';
import Actors from './Actors.vue';
import NewActor from './NewActor.vue';
import VueResource from 'vue-resource';
import Prueba from './Prueba.vue';
import VueLineChart from './VueLineChart.vue'
require("./style.scss");

import App from './App.vue';
Vue.use(VueRouter);
Vue.use(VueResource);
const routes = [
  { path: '/index', alias: '/', component: Index},
  { path:'/actors', component: Actors}, 
  { path: '/newActor', component: NewActor},
  { path: '/prueba', component: Prueba},
  { path: '/vueLineChart', component: VueLineChart}
]

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
