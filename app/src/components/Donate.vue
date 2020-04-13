
<!-- <!doctype html> -->
<!-- <html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Donate</title>
    <link rel="stylesheet" href="assets/app.css">
  </head>
<body> -->
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
      <label>Name
        <input v-model="name" type="text" name="name" id="name" placeholder="Bike" aria-describedby="exampleHelpTextNumber">
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
      <div class="cell medium-12">
        <label for="exampleFileUpload" class="button">Upload File</label>
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
      <button v-if="name !==''" @click="submit" class="button float-left">Submit</button>
    </fieldset>
  </div>

</div>

</div>
</template>

<script>
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
            isSilent: '',
        }
    },
    methods: {
      submit() {
        ////console.log(this.isSilent);
        const payload = {
          name: this.name,
          phone: this.phone,
          email: this.email,
          price: this.price,
          title: this.title,
          description: this.description,
          isSilent: this.isSilent,
          isVerified: 'false',
        }
        db.collection('Item').doc().set(payload).then(function() {
            //console.log('success');
        })
      }
    }
}
</script>
<style scoped>

</style>
<!-- <script src="assets/js/app.js"></script>
</body>
</html> -->
