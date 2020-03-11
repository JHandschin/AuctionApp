import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App.vue'
import Register from '../components/Register.vue'
import Home from '../components/Home.vue'
import Donate from '../components/Donate.vue'
import Login from '../components/Login.vue'

Vue.use(Router)

const routes = [
  { path: '/', component: App },
  { path: '/home', component: Home },
  { path: '/register', component: Register },
  { path: '/donate', component: Donate },
  { path: '/login', component: Login },
];

export default routes;
