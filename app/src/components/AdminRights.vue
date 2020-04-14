<template>
  <div class="container">
    <div class="heading">Admin Privileges</div> 

    <div class="grid-x grid-margin-x">
      <button @click="verifyToggle=!verifyToggle,adminToggle=false" class="button cell auto">Verify Items</button>
      <button @click="adminToggle=!adminToggle,verifyToggle=false" class="button cell auto">Adminerize Users</button>
    </div>
    <div v-if="verifyToggle">
        <ul v-for="item in itemsList" :key='item.uid'>
          <div class="grid-x grid-margin-x">
            <div class="cell auto">{{item}}</div>
            <div class="cell small-2"><button class="button">Verify</button></div>
          </div>
        </ul>
    </div>
    <div v-if="adminToggle">
      <ul v-for="item in userList" :key='item.uid'>
          <div class="grid-x grid-margin-x">
            <div class="cell auto">{{item}}</div>
            <div class="cell small-2"><button class="button">Upgrade to Admin</button></div>
          </div>
        </ul>
    </div>

  </div>
</template>

<script>

const admin = require('firebase/app');
import db from '../firebase';
require('firebase/firestore');

export default {
    data() {
        return {
            verifyToggle: false,
            adminToggle: false,
            items: [],
            users: [],
        }
    },
  computed: {
    bSignedIn() {
      if (this.$store.state.initialized) {
        return true;
      }
      return false;
    },
    itemsList() {
      return this.items;
    },
    userList() {
      return this.users;
    },
  },
  watch: {
    verifyToggle() {
      this.items = [];
      if (this.verifyToggle === true) {
        db.collection("Item").where("isVerified", "==", false).get()
        .then(querySnapshot => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                this.items.push(doc.data());
                console.log(doc.id, " => ", doc.data());
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
      }
    },
    adminToggle() {
      console.log("adminToggle");
      this.users = [];
      if (this.adminToggle === true) {
        db.collection("User").where("isAdmin", "==", false).get()
        .then(querySnapshot => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                this.users.push(doc.data());
                console.log(doc.id, " => ", doc.data());
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
      }
    }
  },
}
</script>

<style>
.heading {
    text-align: left;
    font-size: xx-large;
    margin-bottom: 2rem;
}

</style>