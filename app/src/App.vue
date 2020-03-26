<template>
  <div id="app">

    <h1>Auction House App</h1>
    <div class="nav">


      <div class="app-heading grid-x">
        <div class="cell small-6 app-title">Auction House App</div>
        <div class="cell small-6 user-greeting">Welcome: 
          <span v-if="bSignedIn">{{fullName}}</span>
          <router-link v-else class="" to='/login'>Sign In</router-link>
        </div>
      </div>
      <div class="nav grid-margin-x">
        <!-- routes you created in src/router/index.js -->
        <router-link class="rLink button cell auto" to='/home'>Home</router-link>
        <router-link class="rLink button cell auto" to='/register'>Register</router-link>
        <router-link class="rLink button cell auto" to='/donate'>Donate</router-link>
        <router-link class="rLink button cell auto" to='/login'>Login</router-link>
        <router-link class="rLink button cell auto" to='/item'>Item</router-link>
        <router-link class="rLink button cell auto" to='/live'>Live</router-link>
        <router-link class="rLink button cell auto" to='/silent'>Silent</router-link>
        <router-link class="rlink button cell auto" to='/account'>Account</router-link>

      </div>
    </div>
    <div class="main-content">
      <router-view />
    </div>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      signedIn: false,
    }
  },
  computed: {
    bSignedIn() {
      if (this.$store.state.initialized) {
        return true;
      }
      return false;
    },
    fullName() {
      const temp = this.$store.state.account;
      return temp.userName;
    }
  },
  components: {
  },
  method: {
  },
  created() {
    const temp = this.$store.state.initialized;
    if (temp == false || temp == undefined) {
      this.$router.push('/login');
    }
  }
}
</script>

<style>
.app-title {
  padding-left: 2rem;
  padding-right: auto;
  font-size: 2rem;
  font-weight: bold;
  text-align: left;
}
.user-greeting {
  padding-right: 2rem;
  padding-left: auto;
  text-align: right;
  font-size: 1.75rem;
}
.app-heading {
  color: #e2edf1;
  background-color: #7083bd;
  height: 4rem;
  line-height: 4rem;
}
.nav {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
a.rLink.button {
  width: 6rem;
  padding: 1rem;
  border-style: solid; 
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: .5rem;
}
.main-content {
  margin-top: 1rem;
  width: 95%;
  margin-left: auto;
  margin-right: auto;

}
</style>
