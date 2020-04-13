<template>
    <div class="content">
        <h1>Register for a New Account</h1>    
        <div class="grid-x grid-margin-x">
            <div class="cell small-6">
                <div>Please enter a User Name - <span class="red">Must be Unique</span></div>
                <input v-model="userName" type="text" name="userName" id="userName" placeholder="Unique User Name" >
            </div>
            <div class="cell small-6">
                <div>Please enter a Password</div>
                <input v-model="userPassword" type="text" name="userName" id="userPassword" placeholder="Secure, Hard-to-Guess Password" >
            </div>
        </div>
        <div class="grid-x grid-margin-x">
            <div class="cell small-6">
                <div>Please enter your First Name</div>
                <input v-model="firstName" type="text" name="firstName" id="firstName" placeholder="First Name" >
            </div>
            <div class="cell small-6">
                <div>Please enter your Last Name</div>
                <input v-model="lastName" type="text" name="lastName" id="lastName" placeholder="Last Name" >
            </div>
        </div>
        <div class="grid-x grid-margin-x">
            <div class="cell small-6">
                <div>Please enter your Phone</div>
                <input v-model="phone" type="text" name="phone" id="phone" placeholder="Phone #" >
            </div>
            <div class="cell small-6">
                <div>Please enter your Email</div>
                <input v-model="email" type="text" name="email" id="email" placeholder="Email" >
            </div>
        </div>
        <button @click="submit" class="button left-align">Submit</button>
    </div>
</template>
<script>

import db from '../firebase';
require('firebase/firestore');

export default {
    name: 'Register',
    data() {
        return {
            userNamesList: [],
            userName: '',
            userPassword: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        }
    },
    watch: {
        userNamesList() {
            if (this.userNamesList.length > 0) {
                let temp = this.userNamesList.filter(item => item != null).map( item => item.toLowerCase());
                console.log(temp);
                console.log(this.userName);
                if (temp.some(item => item === this.userName.toLowerCase())) {
                    console.log('Taken User Name.')
                    alert('Sorry, that User Name is already taken. Please choose again.')
                } else {
                    const data = {
                        userName: this.userName,
                        userPassword: this.userPassword,
                        firstName: this.firstName,
                        lastName: this.lastName,
                        email: this.email,
                        phone: this.phone,
                        isAdmin: false,
                        isPresenter: false,
                        bids: [],
                    }
                    // Adding to 'Users" Collection
                    db.collection('User').doc(this.userName).set(data)
                    .then(function() {
                        console.log('success', data);
                    })
                    .catch(function(error) {
                        console.log('error' , error);
                    })
                    this.cleansePage();
                    this.$store.commit('updateAccount', data);
                    this.$router.push('/home');
                }
            }
        },
    },
    methods: {
        checkFields() {
            if (this.userName == '' || this. userPassword == '' || this.firstName == '' || this.lastName == '' || this.email == '' || this.phone == '') {
                alert('All fields must be entered.');
                return false;
            } else {
                return true;
            }
        },
        submit() {
            if (this.checkFields()) {
                let failed = false;
                this.userNamesList = [];
                db.collection('User').get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        // console.log(doc.data());
                        this.users.push(doc.data().userName);
                    })
                    console.log(this.users);
                })
                .then(() => {
                    if (this.users.includes(this.userName)) {
                        //console.log('Sorry, that user-name is already taken');
                    } else {
                        //console.log('Gratz!!');
                        
                        const payload = {
                            userName: this.userName,
                            userPassword: this.userPassword,
                            isAdmin: false,
                            isPresenter: false,
                            name: this.firstName + " " + this.lastName,
                            phone: this.phone,
                            email: this.email,
                            bids: [],
                        }
                        // Adding to 'User" Collection
                        db.collection('User').doc(this.userName).set(payload)
                            .then(function() {
                            console.log('success');
                            })
                                .catch((error) => {
                                console.log('error' , error);
                                failed = true;
                        })
                    }
                    if (failed) {
                        this.cleansePage();
                    }
                })
                .catch(error => {
                console.log(error);
                });
            }
        },
        cleansePage() {
            this.userName = '';
            this.firstName = '';
            this.lastName = '';
            this.email = '';
        }
    },
}
</script>
<style scoped>
    .left-align {
        display: flex;
        margin-left: 2rem;
        margin-right: auto;
    }
    .red {
        color: red;
    }
    h1 {
        margin-top: 2rem;
    }

</style>