<template>
  <div id="app">
    <h1>Auction House App</h1>
    <div class="nav">
      <!-- routes you created in src/router/index.js -->
      <router-link class="rLink button" to='/home'>Home</router-link>
      <router-link class="rLink button" to='/register'>Register</router-link>
      <router-link class="rLink button" to='/donate'>Donate</router-link>
      <router-link class="rLink button" to='/login'>Login</router-link>
      <router-link class="rLink button" to='/item'>Item</router-link>
      <router-link class="rLink button" to='/live'>Live</router-link>
      <router-link class="rLink button" to='/silent'>Silent</router-link>
      <router-link class="rLink button" to='/account'>Account</router-link>
    </div>
    <!-- components can be part of a greater component -->
    <!-- import component, have a components obj with component name, put in html as it's on tag -->
    <InsideComponent value="I'm a value passed as a prop" />
    <!-- value="I'm..." is a prop. Basically an object that can be used in the child -->
    <router-view />
  </div>
</template>

<script>

// All other components are from routerlink but if you want to
// nest compoenets you can import them then just used them inside
import InsideComponent from './components/InsideComponent.vue'

export default {
  name: 'App',
  data() {
    return {
    }
  },
  components: {
    InsideComponent,
  }
}
</script>

<style>
.nav {
  margin-bottom: 1rem;
}
.rLink.button {
  padding: 1rem;
  margin-right: 1rem;
  border-style: solid; 
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
