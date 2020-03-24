<template>
  <!-- <div class="hello">
    <h1>{{ greeting }}</h1>
    
    v-for loops through the data received
    <div v-for="item in itemList" :key="item.id">
      <div>Title: {{item.title}} Description: {{item.description}}</div>
    </div>

  </div> -->

<div class="grid-container">

  <div class="row">
  <div class="columns">
    <ul class="accordion" data-accordion data-multi-expand="true" data-allow-all-closed="true">
  <li class="accordion-item is-active" data-accordion-item>
    <a href="#" class="accordion-title">Accordion 1</a>
    <div class="accordion-content" data-tab-content >
      <p>Panel 1. Lorem ipsum dolor</p>
    </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a href="#" class="accordion-title">Accordion 2</a>
    <div class="accordion-content" data-tab-content>
      <textarea></textarea>
      <button class="button">I do nothing!</button>
    </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a href="#" class="accordion-title">Accordion 3</a>
    <div class="accordion-content" data-tab-content>
      Type your name!
    </div>
  </li>
</ul>
  </div>
</div>

  <!-- <ul class="vertical menu" data-accordion-menu>
  <li>
    <a href="#0">Winning</a>
    <ul class="menu vertical nested is-active">
      <li>
        <a href="#0">Item 1A</a>
        <ul class="menu vertical nested">
          <li><a href="#0">Item 1Ai</a></li>
          <li><a href="#0">Item 1Aii</a></li>
          <li><a href="#0">Item 1Aiii</a></li>
        </ul>
      </li>
      <li><a href="#0">Item 1B</a></li>
      <li><a href="#0">Item 1C</a></li>
    </ul>
  </li>
  <li>
    <a href="#0">Watchlist</a>
    <ul class="menu vertical nested">
      <li><a href="#0">Item 2A</a></li>
      <li><a href="#0">Item 2B</a></li>
    </ul>
  </li>
</ul>

<button type="button" class="collapsible">Winning</button>
<div class="content">
  <div class="grid-x grid-margin-x">
  <div class="cell medium-6 large-4">12/6/4 cells</div>
  <div class="cell medium-6 large-8">12/6/8 cells</div>
</div>
<div class="grid-x grid-padding-x">
  <div class="cell medium-6 large-4">12/6/4 cells</div>
  <div class="cell medium-6 large-8">12/6/8 cells</div>
</div>
</div>
<button type="button" class="collapsible">Watchlist</button>
<div class="content">
  <div class="grid-container">
  <div class="grid-x grid-margin-x">
    <div class="cell small-4">cell</div>
    <div class="cell small-4">cell</div>
    <div class="cell small-4">cell</div>
  </div>
</div>
</div>  -->

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

  // created() {
  //   // Getting data from 'Item' Collection
  //   db.collection('Item').get()
  //   .then(querySnapshot => {
  //     querySnapshot.forEach(doc => {
  //       //console.log(doc.data());
  //       const data = {
  //         id: doc.id,
  //         title: doc.data().title,
  //         description: doc.data().description,
  //       }
  //       this.list.push(data);
  //     })
  //   })
  //   .catch(error => {
  //     //console.log(error.data);
  //   });

  //   // // Adding to 'Users" Collection
  //   // db.collection('User').doc(this.userName).set({
  //   //   user_name: this.userName,
  //   //   name: this.first + ' ' + this.last,
  //   // })
  //   // .then(function() {
  //   //   //console.log('success');
  //   // })
  //   // .catch(function(error) {
  //   //   //console.log('error' , error);
  //   // })
  // },

  // computed: {
  //   itemList() {
  //   return this.list;
  //   }
  // },

  methods: {
    // expand() {
    //   var coll = document.getElementsByClassName("collapsible");
    //   var i;

    // for (i = 0; i < coll.length; i++) {
    //   coll[i].addEventListener("click", function() {
    //     this.classList.toggle("active");
    //     var content = this.nextElementSibling;
    //     if (content.style.display === "block") {
    //       content.style.display = "none";
    //     } else {
    //       content.style.display = "block";
    //     }
    //   });
    // }
    //     }
      },
    };

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  /* .collapsible {
    background-color: #ccc;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
  } */
  /* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
  /* .active, .collapsible:hover {
    background-color: #ccc;
  } */
  /* Style the collapsible content. Note: hidden by default */
  /* .content {
    padding: 0 18px;
    display: none;
    overflow: hidden;
    background-color: #f1f1f1;
  } */

/* h3 {
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
} */
</style>
