import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import './../node_modules/foundation-sites/dist/css/foundation.min.css'
import './../node_modules/foundation-sites/dist/js/foundation.min.js'

import routes from './router/index'

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    initialized: false,
    account: {
      userName: '',
      userPassword: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      isAdmin: false,
      isPresenter: false,
      bids: [],
    },
    auction: {
      initialized: false,
      data: [],
    }
  },
  getters: {
    getName: state => {
      return state.account.userName;
    }
  },
  setters: {
  },
  mutations: {
    updateAccount (state, payload) {
      state.initialized = true;
      state.account = payload;
    }
  }
})

const router = new VueRouter({mode: 'history', routes});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
