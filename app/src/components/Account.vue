<template>
  <div class="hello">
    <h1>{{ greeting }}</h1>
    
    <!-- v-for loops through the data received -->
    <!-- <div v-for="item in itemList" :key="item.id">
      <div class="button" @click="update(item)">Name: {{item.userName}} Email: {{item.email}}</div>
    </div> -->
    <div class="grid-x grid-margin-x">
      <div class="cell small-6">
    <div @click="editUserName=!editUserName">
      {{userName}}
    </div>
    </div>
    <div class="cell small-6">
      <span v-if="editUserName">
        <input type="text" v-model="updatedUserName">
        <button class="button" @click="update('userName')">
          submit
        </button>
      </span>
      </div>
    </div>



    <div>
      {{userPassword}}
    </div>
    <div>
      {{firstName}}
    </div>
    <div>
      {{lastName}}
    </div>
    <div>
      {{email}}
    </div>
    <div>
      {{phone}}
    </div>
    <div>
      {{isAdmin}}
    </div>
    <div>
      {{isPresenter}}
    </div>
    <div>
      {{bids}}
    </div>
    

  </div>
</template>

<script>
import db from '../firebase';
require('firebase/firestore');
export default {
  name: 'Account',
  data() {
    return {
      greeting: 'Welcome to Your Account',
      list: [],
      // userName: '',
      editUserName: false,
      updatedUserName: "",
      first: '',
      last: '',
    }
  },

  created() {
       db.collection('User').get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        console.log(doc.data());
        const data = {
          userName: doc.id,
          email: doc.data().email,
          // name: doc.data().name,
        }
        this.list.push(data);  
      })
    })
    .catch(error => {
      //console.log(error.data);
    });
  

    // // Adding to 'Users" Collection
    // db.collection('User').doc(this.userName).set({
    //   user_name: this.userName,
    //   name: this.first + ' ' + this.last,
    // })
    // .then(function() {
    //   //console.log('success');
    // })
    // .catch(function(error) {
    //   //console.log('error' , error);
    // })
  },

  computed: {
    itemList() {
        let array = [];
        for(let i = 0; i < this.list.length; i += 1)
        {
            if (this.list[i].name && this.list[i].email)
            {
                array.push(this.list[i]);
            }
        }
    return array;
    },
    userName(){
      return this.$store.state.account.userName;
    },
    userPassword(){
      return this.$store.state.account.userPassword;
    },
     firstName(){
      return this.$store.state.account.firstName;
    },
    lastName(){
      return this.$store.state.account.lastName;
    },
    email(){
      return this.$store.state.account.email;
    },
    phone(){
      return this.$store.state.account.phone;
    },
    isAdmin(){
      return this.$store.state.account.isAdmin;
    },
    isPresenter(){
      return this.$store.state.account.isPresenter;
    },
    bids(){
      return this.$store.state.account.bids;
    },


  },

  methods: {
      update(item)
      {
        console.log(item)
          if (item === 'userName')
          {
            this.$store.state.account.userName = this.updatedUserName;
            this.editUserName = false;
          }
      },
  },
};

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 50px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b98e;
}
</style>
