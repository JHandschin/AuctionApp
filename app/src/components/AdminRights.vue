<template>
  <div class="container">
    <div class="heading">Admin Privileges</div> 

    <div class="grid-x grid-margin-x">
      <button @click="verifyToggle=!verifyToggle,adminToggle=false,auctionToggle=false,presenterToggle=false,startStop=false" class="button cell auto">Verify Items</button>
      <button @click="adminToggle=!adminToggle,verifyToggle=false,auctionToggle=false,presenterToggle=false,startStop=false" class="button cell auto">Approve Admin</button>
      <button @click="presenterToggle=!presenterToggle,verifyToggle=false,adminToggle=false,auctionToggle=false,startStop=false" class="button cell auto">Approve Presenters</button>
      <button @click="auctionToggle=!auctionToggle,verifyToggle=false,adminToggle=false,presenterToggle=false,startStop=false" class="button cell auto">Approve Auction</button>
      <button @click="startStop=!startStop,verifyToggle=false,adminToggle=false,presenterToggle=false,auctionToggle=false" class="button cell auto">Start/Stop Auction</button>
    </div>

    <div v-if="verifyToggle">
      <div class="grid-x grid-margin-x list-heading">
        <div class="cell small-2">User</div>
        <div class="cell small-2">Email</div>
        <div class="cell small-2">Title</div>
        <div class="cell small-1">Price</div>
        <div class="cell small-2">Description</div>
        <div class="cell auto">Approve</div>
      </div>
      <ul v-for="item in itemsList" :key='item.uid'>
        <div class="grid-x grid-margin-x row">
          <div class="cell small-2">{{item.name}} </div>
          <div class="cell small-2">{{item.email}}</div>
          <div class="cell small-2">{{item.title}}</div>
          <div class="cell small-1">{{item.price | priceFilter}}</div>
          <div class="cell small-2 small">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
          <div class="cell auto">
            <button @click="verifyItem(item)" class="button vert-align success">Verify</button>
            <button @click="editItem(item)" class="button vert-align">Edit</button>
            <button @click="deleteItem(item)" class="button vert-align alert">Delete</button>
          </div>
        </div>
      </ul>
    </div>

    <div v-if="adminToggle">
      <div class="grid-x grid-margin-x list-heading">
        <div class="cell small-2">Username</div>
        <div class="cell small-2">Full Name</div>
        <div class="cell small-2">Email</div>
        <div class="cell small-2">Admin</div>
        <div class="cell auto">Phone</div>
        <div class="cell small-2">Approve</div>
      </div>
      <ul v-for="item in userList" :key='item.uid'>
        <div class="grid-x grid-margin-x row">
          <div class="cell small-2">{{item.userName}} </div>
          <div class="cell small-2">{{item.name}}</div>
          <div class="cell small-2">{{item.email}}</div>
          <div class="cell small-2">{{item.isPresenter}}</div>
          <div class="cell small-2">{{item.phone}}</div>
          <div class="cell small-2"><button @click="upgradeUser(item)" class="button vert-align">Approve</button></div>
        </div>
      </ul>
    </div>

    <div v-if="presenterToggle">
      <div class="grid-x grid-margin-x list-heading">
        <div class="cell small-2">Username</div>
        <div class="cell small-2">Full Name</div>
        <div class="cell small-2">Email</div>
        <div class="cell small-2">Presenter</div>
        <div class="cell auto">Phone</div>
        <div class="cell small-2">Approve</div>
      </div>
      <ul v-for="item in presenterList" :key='item.uid'>
        <div class="grid-x grid-margin-x row">
          <div class="cell small-2">{{item.userName}} </div>
          <div class="cell small-2">{{item.name}}</div>
          <div class="cell small-2">{{item.email}}</div>
          <div class="cell small-2">{{item.isPresenter}}</div>
          <div class="cell small-2">{{item.phone}}</div>
          <div class="cell small-2"><button @click="presUser(item)" class="button vert-align">Approve</button></div>
        </div>
      </ul>
    </div>

    <div v-if="auctionToggle">
      <div class="grid-x grid-margin-x list-heading">
        <div class="cell auto">School</div>
        <div class="cell small-2">Date</div>
        <div class="cell small-2">Host</div>
        <div class="cell small-2">Email</div>
        <div class="cell small-2">Phone</div>
        <div class="cell small-2">Approve</div>
      </div>
      <ul v-for="item in auctionList" :key='item.id'>
        <div class="grid-x grid-margin-x row">
          <div class="cell small-2">{{item.school}} </div>
          <div class="cell small-2">{{item.date | dateFilter}}</div>
          <div class="cell small-2">{{item.host}}</div>
          <div class="cell small-2">{{item.email}}</div>
          <div class="cell small-2">{{item.phone}}</div>
          <div class="cell small-2"><button @click="approveAuction(item)" class="button vert-align">Approve</button></div>
        </div>
      </ul>
    </div>

    <div v-if="startStop">
      <div class="grid-x grid-margin-x list-heading">
        <div class="cell small-1">School</div>
        <div class="cell small-2">Date</div>
        <div class="cell small-2">Host</div>
        <div class="cell small-2">Email</div>
        <div class="cell small-2">Phone</div>
        <div class="cell small-1">Active</div>
        <div class="cell small-2">Action</div>
      </div>
      <ul v-for="item in auctionList" :key='item.id'>
        <div class="grid-x grid-margin-x row">
          <div class="cell small-1">{{item.school}} </div>
          <div class="cell small-2">{{item.date | dateFilter}}</div>
          <div class="cell small-2">{{item.host}}</div>
          <div class="cell small-2">{{item.email}}</div>
          <div class="cell small-2">{{item.phone}}</div>
          <div class="cell small-1">{{item.isActive}}</div>
          <div v-if="!item.isActive" class="cell small-2"><button @click="startAuction(item)" class="button vert-align">Start</button></div>
          <div v-else class="cell small-2"><button @click="endAuction(item)" class="button vert-align">End</button></div>
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
          presenterToggle: false,
          auctionToggle: false,
          startStop: false,
          items: [],
          users: [],
          presenters: [],
          auctions: [],
      }
  },
  filters: {
    dateFilter(date) {
      let d = (new Date(date));
      return d.toDateString();
    },
    priceFilter(price) {
      if (price === undefined || price === "") {
        return "N/A";
      }
      return "$" + price;
    }
  },
  methods: {
    startAuction(item) {
      const itemRef = db.collection("Auction").doc(item.id);
      const setWithMerge = itemRef.set({
        isActive: true
      }, {merge: true });
    },
    endAuction(item) {
      const itemRef = db.collection("Auction").doc(item.id);
      const setWithMerge = itemRef.set({
        isActive: false,
        closed: true,
      }, {merge: true });
    },
    verifyItem(item) {
      this.items.splice(this.items.findIndex(obj => obj.uid === item.uid),1);
      const itemRef = db.collection("Item").doc(item.uid);
      const setWithMerge = itemRef.set({
        isVerified: true
      }, {merge: true });
    },
    upgradeUser(item) {
      this.users.splice(this.users.findIndex(obj => obj.uid === item.uid),1);
      const itemRef = db.collection("User").doc(item.userName);
      const setWithMerge = itemRef.set({
        isAdmin: true,
        adminPetition: false,
      }, {merge: true });
    },
    presUser(item) {
      this.presenters.splice(this.presenters.findIndex(obj => obj.uid === item.uid),1);
      const itemRef = db.collection("User").doc(item.userName);
      const setWithMerge = itemRef.set({
        isPresenter: true,
        presenterPetition: false,
      }, {merge: true });
    },
    approveAuction(item) {
      this.auctions.splice(this.auctions.findIndex(obj => obj.id === item.id),1);
      const itemRef = db.collection("Auction").doc(item.id);
      const setWithMerge = itemRef.set({
        isApproved: true,
      }, {merge: true });
    },
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
      const ordered = this.users;
      ordered.sort(item => item.isPetition === true);
      return ordered;
    },
    presenterList() {
      const ordered = this.presenters;
      ordered.sort(item => item.isPetition === true);
      return ordered;
    },
    auctionList() {
      return this.auctions;
    }
  },
  watch: {
    verifyToggle() {
      if (this.verifyToggle === true) {
        this.items = [];
        db.collection("Item").where("isVerified", "==", false).get()
        .then(querySnapshot => {
            querySnapshot.forEach((doc) => {
                const item = doc.data();
                item["uid"] = doc.id;
                this.items.push(item);
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
      }
    },
    adminToggle() {
      if (this.adminToggle === true) {
        this.users = [];
        db.collection("User").where("adminPetition", "==", true).get()
        .then(querySnapshot => {
            querySnapshot.forEach((doc) => {
                this.users.push(doc.data());
                console.log(doc.id, " => ", doc.data());
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
      }
    },
    presenterToggle() {
      if (this.presenterToggle === true) {
        console.log("presenter on");
        this.presenters = [];
        db.collection("User").where("presenterPetition", "==", true).get()
        .then(querySnapshot => {
            querySnapshot.forEach((doc) => {
                this.presenters.push(doc.data());
                console.log(doc.id, " => ", doc.data());
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
      }
    },
    auctionToggle() {
      if (this.auctionToggle === true) {
        this.auctions = [];
        console.log("auctions received.");
        db.collection("Auction").where("isApproved", "==", false).get()
        .then(querySnapshot => {
            querySnapshot.forEach((doc) => {
                const item = doc.data();
                item["id"] = doc.id;
                this.auctions.push(item);
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

<style scoped>
.vert-align {
  margin-top: 0rem;
  margin-bottom: auto;
}
ul {
  margin-left: 0;
}
.row {
  font-size: large;
  color: aliceblue;
  background: lightslategray;
  margin-bottom: 1.5rem;
  margin-left: 0;
  margin-right: 0;
}
.list-heading {
  font-size: x-large;
  color: aliceblue;
  background: dimgray;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
  margin-left: 0;
  margin-right: 0;
}
.small {
  font-size: small;
}
.heading {
    text-align: left;
    font-size: xx-large;
    margin-bottom: 1rem;
}

</style>