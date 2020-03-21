<template>
  <div class="hello">
    <h1>{{ greeting }}</h1>
    
    <!-- v-for loops through the data received -->
    <div v-for="item in itemList" :key="item.id">
      <div class="button" @click="update(item)">Name: {{item.name}} Email: {{item.email}}</div>
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
      userName: '',
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
          name: doc.data().name,
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
    }
  },

  methods: {
      update(item)
      {
          console.log(item);
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
