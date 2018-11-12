import Vue from 'vue'
import App from './App.vue' 
import store from './store'
import router from './routes.js'
new Vue({
  router,
  el: '#app',
  render: h => h(App),
  store
})
