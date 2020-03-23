<template>
  <div class="hello">
    <h1>{{ greeting }}</h1>
    
    <!-- v-for loops through the data received -->
    <div v-for="item in itemList" :key="item.id">
      <div>Title: {{item.title}} Description: {{item.description}}</div>
    </div>

  </div>
</template>

<script>
import db from '../firebase';
require('firebase/firestore');
export default {
  name: 'Home',
  data() {
    return {
      greeting: 'Buy All The Things!!!',
      list: [],
      userName: 'Jawsome Possum',
      first: 'Josh',
      last: 'Handschin',
    }
  },

  created() {
    // Getting data from 'Item' Collection
    db.collection('Item').get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        //console.log(doc.data());
        const data = {
          id: doc.id,
          title: doc.data().title,
          description: doc.data().description,
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
    return this.list;
    }
  },

  methods: {
  },
};

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
  color: #42b983;
}
</style>
