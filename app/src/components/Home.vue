<template>
  <!-- <div class="hello">
    <h1>{{ greeting }}</h1>
    
    v-for loops through the data received
    <div v-for="item in itemList" :key="item.id">
      <div>Title: {{item.title}} Description: {{item.description}}</div>
    </div>

  </div> -->

  <div class="grid-container">
    <div class="x-grid">
      <!-- <h1>{{ msg }}</h1> -->
      <ul id="accordion" class="accordion" data-accordion>
        <li class="accordion-item is-active" data-accordion-item>
          <a href="#" class="accordion-title">Watchlist</a>
          <div class="accordion-content" data-tab-content>
            <div class="item-rows">
              <div class="item-icon" v-for="item in list" :key="item.id">
                  <ItemIcon
                      :title="item.title"
                      :description="item.description"
                      :currentBid="item.bid"
                  />
              </div>
            </div>
          </div>
        </li>
        <li class="accordion-item" data-accordion-item>
          <a href="#" class="accordion-title">Winning</a>
          <div class="accordion-content" data-tab-content>
            <div class="item-rows">
              <div class="item-icon" v-for="item in list" :key="item.id">
                  <ItemIcon
                      :title="item.title"
                      :description="item.description"
                      :currentBid="item.bid"
                  />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ItemIcon from '../components/ItemIcon.vue';
import db from '../firebase';
import Foundation from 'foundation-sites'
import $ from "jquery"
import { Accordion } from "foundation-sites"
$(document).foundation();
require('firebase/firestore');

// import db from '../firebase';
// require('firebase/firestore');
function formatNum(num) {
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return formatter.format(num);
}
export default {
  name: 'accordion',
  components: {
        ItemIcon,
    },
  mounted() {
    this.accordion = new Foundation.Accordion($('#accordion'), {
      // These options can be declarative using the data attributes
      //data-multi-expand="true" data-allow-all-closed="true"
      slideSpeed: 200,
      multiExpand: true,
      allowallclosed: true,
    });
  },
  data() {
    return {
      msg: 'Accordion',
      list: [],
    };
  },
  destroyed() {
    this.accordion.destroy();
  },
  created() {
      db.collection('Item').get()
      .then(querySnapshot => {
          querySnapshot.forEach(doc => {
              //console.log(doc.data());
              if (doc.data().isSilent) {
                  const data = {
                      description: doc.data().description,
                      title: doc.data().title,
                      bid: formatNum(doc.data().price),
                      image: doc.data().image
                  };
                  this.list.push(data);
              }
          })
      })
      .catch(error => {
          //console.log(error.data);
      });
    }
  };

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item-rows {
    display: flex;
    flex-wrap: wrap;
}
.item-icon {
    margin-left: 3%;
}
</style>
