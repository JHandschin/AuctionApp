<template>
    <div class="content">
        <h1>Please Login</h1>
        <div class='red'>
            {{msg}}
        </div>
        <div class="grid-x grid-margin-x">
            <div class="cell small-6">
                <div>User Name</div>
                <input v-model="userName" type="text" name="userName" id="userName">
            </div>
            <div class="cell small-6">
                <div>Please enter a Password</div>
                <input v-model="userPassword" type="text" name="userName" id="userPassword">
            </div>
        </div>
        <button @click="submit" class="button left-align">Submit</button>
    </div>
</template>

<script>

const admin = require('firebase/app');
import db from '../firebase';
require('firebase/firestore');

export default {
    name: 'Login',
    data() {
        return {
            userName: "MasterAdmin",
            userPassword: "password",
            msg: '',
        }
    },
    watch: {
        errorMsg(msg) {
            return msg;
        }
    },
    methods: {
        success() {
            this.$router.push('/home');
        },
        submit() {
            console.log(this.userName, ",",this.userPassword);
            const docRef = db.collection("User").doc(this.userName);
            admin.auth().signInWithEmailAndPassword('admin@master.com', 'password')
            .then((result) => {
                console.log(result);
                db.collection("User").doc(this.userName).get()
                .then((doc) =>  {
                    if (doc.exists) {
                        console.log("Document data::" , doc.data());
                        this.$store.commit('updateAccount', doc.data());
                        this.$router.push('/home');
                    } else {
                        console.log("No such document!");
                    }
                })
            })
            .catch((error) => {
                console.log(error);
                this.msg = 'a new msg';
            })
        }
    }
}
</script>
<style scoped>
    .left-align {
        display: flex;
        margin-left: 2rem;
        margin-right: auto;
    }
    .red {
        font-size: large;
        color: red;
    }
    h1 {
        margin-top: 2rem;
    }

</style>