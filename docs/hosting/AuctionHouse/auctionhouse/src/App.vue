<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <div class="nav">
      <router-link class="rLink" to='/home'>Home</router-link>
      <router-link class="rLink" to='/register'>Register</router-link>
      <router-link class="rLink" to='/login'>Login</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

.rLink {
  padding: .2rem;
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
