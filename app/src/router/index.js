import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App.vue'
import Register from '../components/Register.vue'
import Home from '../components/Home.vue'
import Donate from '../components/Donate.vue'
import Login from '../components/Login.vue'
import Item from '../components/Item.vue'
import Live from '../components/Live.vue'
import Silent from '../components/Silent.vue'
import Account from'../components/Account.vue'
import AdminRights from'../components/AdminRights.vue'

Vue.use(Router)

const routes = [
  { path: '/', component: App },
  { path: '/home', component: Home },
  { path: '/register', component: Register },
  { path: '/donate', component: Donate },
  { path: '/login', component: Login },
  { path: '/live', component: Live },
  { path: '/silent', component: Silent },
  { path: '/account', component: Account },
  { path: '/adminrights', component: AdminRights },
  { 
    path: '/item', 
    name: 'Item',
    component: Item,
    props: true,
  },
];

export default routes;
