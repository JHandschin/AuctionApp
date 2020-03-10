import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import './../node_modules/foundation-sites/dist/css/foundation.min.css'
import './../node_modules/foundation-sites/dist/js/foundation.min.js'

import routes from './router/index'

Vue.config.productionTip = false;

Vue.use(VueRouter)

const router = new VueRouter({mode: 'history', routes});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
