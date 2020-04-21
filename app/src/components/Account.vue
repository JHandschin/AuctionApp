<template>
  <div class="hello">
    <h1>{{ greeting }}</h1>
  
    <div v-if="!makeAuction">
      <div class="grid-x grid-margin-x">
        <div class="cell small-6">
          <div class="heading">Please click category You would like to change.</div>
        </div>
        <div class="cell small-6">
          <div><button @click="makeAuction=true" class="button">Submit a new Auction</button></div>
        </div>
      </div>


      <div class="grid-x grid-margin-x">
        <div class="cell small-6">
          <div @click="editUserName=!editUserName">
            {{userName}}
          </div>
      </div>
      <div class="cell small-6">
        <span v-if="editUserName">
          <input type="text" v-model="updatedUserName">
          <button class="button" @click="update('userName')">submit</button>
        </span>
        </div>
      </div>
      
      <div class="grid-x grid-margin-x">
      <div class="cell small-6">
      <div @click="editPassword=!editPassword">
        {{userPassword}}
      </div>
    </div>
        <div class="cell small-6">
          <span v-if="editPassword">
            <input type="text" v-model="updatedPassword">
            <button class="button" @click="update('userPassword')">submit</button>
          </span>
        </div>
      </div> 

      <div class="grid-x grid-margin-x">
      <div class="cell small-6">
      <div @click="editFirst=!editFirst">
        {{firstName}}
      </div>
      </div>
      <div class="cell small-6">
        <span v-if="editFirst">
            <input type="text" v-model="updatedFirst">
            <button class="button" @click="update('firstName')">
              submit
              </button>
          </span>
          </div>
          </div> 


      <div class="grid-x grid-margin-x">
      <div class="cell small-6">
      <div @click="editLast=!editLast">
        {{lastName}}
      </div>
      </div>
      <div class="cell small-6">
        <span v-if="editLast">
            <input type="text" v-model="updatedLast">
            <button class="button" @click="update('lastName')">
              submit
              </button>
          </span>
          </div>
          </div> 

      <div class="grid-x grid-margin-x">
      <div class="cell small-6">
      <div @click="editEmail=!editEmail">
        {{email}}
      </div>
      </div>
      <div class="cell small-6">
        <span v-if="editEmail">
            <input type="text" v-model="updatedEmail">
            <button class="button" @click="update('email')">
              submit
              </button>
          </span>
          </div>
          </div> 


      <div class="grid-x grid-margin-x">
      <div class="cell small-6">
      <div @click="editPhone=!editPhone">
        {{phone}}
      </div>
      </div>
      <div class="cell small-6">
        <span v-if="editPhone">
            <input type="text" v-model="updatedPhone">
            <button class="button" @click="update('phone')">
              submit
              </button>
          </span>
          </div>
          </div> 


      <div class="grid-x grid-margin-x bar">
        <div class="cell small-6 text-align big">
          Rights that you have access to.
        </div>
        <div class="cell small-6 button-align big">
          If False, you may submit to be upgraded.
        </div>
      </div>

      <div class="grid-x grid-margin-x">
        <div class="cell small-6 text-align">
          Aministration Rights: {{isAdmin}}
        </div>
        <div v-if="!isAdmin" class="cell small-6">
          <button class="button button-align" @click="petitionAdmin" >Petition for Admin</button>
        </div>
      </div>

      <div class="grid-x grid-margin-x">
        <div class="cell small-6 text-align">
          Presenter Rights: {{isPresenter}}
        </div>
        <div v-if="!isPresenter" class="cell small-6">
          <button class="button button-align" @click="petitionPresenter">Petition for Presenter</button>
        </div>
      </div>
    </div>

    <div v-else-if="makeAuction===true">
      <div class="grid-x grid-margin-x">
            <div class="cell small-6">
                <div>Please enter School</div>
                <input v-model="school" type="text" name="school" id="school" placeholder="Unique User Name" >
            </div>
            <div class="cell small-6">
                <div>Please enter a Date</div>
                <input v-model="date" type="date" id="time" min="2020-4-1" max="2020-12-31">
            </div>
        </div>
        <button @click="submit" class="button left-align">Submit</button>
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
      editPassword: false,
      updatedPassword: "",
      editFirst: false,
      updatedFirst: "",
      editLast: false,
      updatedLast: "",
      editPhone: false,
      updatedPhone: "",
      editEmail: false,
      updatedEmail: "",
      first: '',
      last: '',
      makeAuction: false,
      school: "",
      date: Date(Date.now()),
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
      console.log(error.data);
    });
  
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
    submit() {
      console.log("School", this.school, ", Date: ", this.date);
      const data = {
        host: this.userName,
        email: this.email,
        phone: this.phone,
        date: this.date,
        school: this.school,
        isApproved: false,
        isActive: false,
      }
      db.collection("Auction").doc().set(data)
      .then(() => {
        console.log("success.");
      })
      .catch(() => {
        console.log("failure.");
      })
    },
    petitionAdmin() {
      console.log("petition clicked");
      const itemRef = db.collection("User").doc(this.$store.state.account.userName);
      const setWithMerge = itemRef.set({
        adminPetition: true
      }, {merge: true });
    },
    petitionPresenter() {
      console.log("presenter clicked");
      const itemRef = db.collection("User").doc(this.$store.state.account.userName);
      const setWithMerge = itemRef.set({
        presenterPetition: true
      }, {merge: true });
    },
      update(item)
      {
        console.log(item)
          if (item === 'userName')
          {
            this.$store.state.account.userName = this.updatedUserName;
            this.editUserName = false;
          }
          if (item === 'userPassword')
          {
            this.$store.state.account.userPassword = this.updatedPassword;
            this.editPassword = false;
          }
          if (item === 'firstName')
          {
            this.$store.state.account.firstName = this.updatedFirst;
            this.editFirst = false;
          }
          if (item === 'lastName')
          {
            this.$store.state.account.lastName = this.updatedLast;
            this.editLast = false;
          }
          if (item === 'email')
          {
            this.$store.state.account.email = this.updatedEmail;
            this.editEmail = false;
          }
          if (item === 'phone')
          {
            this.$store.state.account.phone = this.updatedPhone;
            this.editPhone = false;
          }
      },
  },
};

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.heading {
  border-bottom: 2px solid black;
  font-size: large;
}
.big.text-align {
  font-size: x-large;
  margin-top: 0;
}
.big.button-align {
  font-size: x-large;
}
.text-align {
  display: flex;
  justify-content: flex-end;
  font-size: large;
  margin-top: .55rem;
}
.button-align {
  display: flex;
  justify-content: left;
}
.bar {
  margin-top: 3rem;
  font-size: x-large;
  margin-bottom: 1rem;
}
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
