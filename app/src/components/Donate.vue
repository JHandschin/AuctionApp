<template>
<div class="grid-container">

  <div class="content">
  <div class="grid-x grid-margin-x">
    <div class="cell">
      <div data-abide-error class="alert callout" style="display: none;">
        <p><i class="fi-alert"></i> There are some errors in your form.</p>
      </div>
    </div>
  </div>
  <div class="grid-x grid-margin-x">
    <div class="cell small-12">
      <label>School
        <select v-model="school">
          <option v-for="item in schoolList" :key="item.id" v-bind:value='{"id" : item.id}' >
            {{item.date}} {{item.school}}
          </option>
        </select>
      </label>
    </div>

    <div class="cell small-12">
      <label>Item Title
        <input v-model="title" type="text" name="title" id="title" placeholder="Bike" aria-describedby="exampleHelpTextNumber">
        <span class="form-error">
          Yo, you had better fill this out, it's required.
        </span>
      </label>
    </div>
    <div class="cell small-12">
      <label>Item Price
        <input v-model="price" type="text" name="price" id="price" placeholder="$25" aria-describedby="exampleHelpTextNumber">
        <span class="form-error">
          Yo, you had better fill this out, it's required.
        </span>
      </label>
    </div>
      <div class="cell medium-12">
        <label>Item Description
          <textarea v-model="description" type="text" name="description" id="description" placeholder="Describe stuff"></textarea>
          <span class="form-error">
            Yo, you had better fill this out, it's required.
          </span>
        </label>
      </div>
    

<!-- <div v-if="!initialized" class="grid-x grid-margin-x"> -->
    <div class="cell small-12">
      <label>Name
        <input v-model="name" type="text" name="name" id="name" placeholder="Name" aria-describedby="exampleHelpTextNumber">
        <span class="form-error">
          Yo, you had better fill this out, it's required.
        </span>
      </label>
    </div>
    <div class="cell small-12">
      <label>Phone Number
        <input v-model="phone" type="text" name="phone" id="phone" placeholder="(435)590-1234" aria-describedby="exampleHelpTextNumber" required pattern="number">
        <span class="form-error">
          Yo, you had better fill this out, it's required.
        </span>
      </label>
    </div>
    <div class="cell small-12">
      <label>Email
        <input v-model="email" type="text" name="email" id="email" placeholder="john.doe@gmail.com" aria-describedby="exampleHelpTextNumber">
        <span class="form-error">
          Yo, you had better fill this out, it's required.
        </span>
      </label>
    </div>
<!-- </div> -->

      <div class="cell medium-12">
        <label for="exampleFileUpload" class="button">Upload Picture</label>
        <input type="file" id="exampleFileUpload" class="show-for-sr">
      </div>
      <div class="grid-x grid-margin-x">
        <fieldset class="cell medium-12">
          <legend>Silent or Live Auction</legend>
          <input v-model="isSilent" type="radio" name="isSilent" value="true" id="isSilent"><label for="isSilent">Silent</label>
          <input v-model="isSilent" type="radio" name="live" value="false" id="live"><label for="live">Live</label>
        </fieldset>
      </div>
  </div>
  <div class="grid-x grid-margin-x">
    <fieldset class="cell medium-12">
      <button @click="submit" class="button float-left">Submit</button>
    </fieldset>
  </div>

</div>

</div>
</template>

<script>
const admin = require('firebase/app');
import db from '../firebase';
require('firebase/firestore');

export default {
    name: 'Donate',
    data() {
        return {
            name: '',
            phone: '',
            email: '',
            price: '',
            title: '',
            description: '',
            isSilent: true,
            schools: [],
            school: '',
            today: '',
            initialized: '',
        }
    },
    computed: {
      schoolList() {
        return this.schools;
      }
    },
    methods: {
      submit() {
        // console.log("storethis.$store.state.auction.data);
        
        const payload = {
          name: this.name,
          phone: this.phone,
          email: this.email,
          price: this.price,
          title: this.title,
          description: this.description,
          isSilent: this.isSilent,
          isVerified: false,
          auctionID: this.school.id,
        }
        db.collection('Item').doc(this.title).set(payload).then(function() {
            //console.log('success');
        })
      }
    },
    created() {
      this.initialized = this.$store.state.initialized;
      let d = new Date();
      d.setMilliseconds(Date.now());
      this.today = d;
      console.log("today: ",d);
      console.log(this.today);
       db.collection("Auction").where("isApproved", "==", true).get()
        .then(querySnapshot => {
            querySnapshot.forEach((doc) => {
              // const d = new Date(doc.data().date);
              // if (d.getTime() > this.today.getTime()) {
                const item = doc.data();
                item["id"] = doc.id;
                this.schools.push(item);
                console.log("Auctions List: ", doc.id, " => ", item);
              // }
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
    }
}
</script>
<style scoped>

</style>