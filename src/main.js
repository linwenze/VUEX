import Vue from 'vue'
import App from './App.vue' 
import store from './store'
import './assets/css/index.css'
import './assets/js/common.js'
import router from './routes.js'

new Vue({
  router,
  el: '#app',
  render: h => h(App),
  store
})
