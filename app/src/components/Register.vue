<template>
    <div class="content">
        <h1>Register for a New Account</h1>    
        <div>Please enter a User Name</div>
        <input v-model="userName" type="text" name="userName" id="userName" placeholder="Unique User Name" >
        <div>Please enter your First Name</div>
        <input v-model="firstName" type="text" name="firstName" id="firstName" placeholder="First Name" >
        <div>Please enter your Last Name</div>
        <input v-model="lastName" type="text" name="lastName" id="lastName" placeholder="Last Name" >
        <div>Please enter your Email</div>
        <input v-model="email" type="text" name="email" id="email" placeholder="Email" >
        <button @click="submit" class="button">Submit</button>
    </div>
</template>
<script>

import db from '../firebase';
require('firebase/firestore');

export default {
    name: 'Register',
    data() {
        return {
            users: [],
            userName: 'temp',
            userPassword: 'temp',
            firstName: 'temp',
            lastName: 'temp',
            email: 'temp',
            phone: 'temp',
        }
    },
    methods: {
        submit() {
            let failed = false;
            this.users = [];
            db.collection('User').get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
<<<<<<< HEAD
                        // console.log(doc.data());
                        this.users.push(doc.data().userName);
=======
                        // //console.log(doc.data());
                        this.users.push(doc.data().user_name);
>>>>>>> deb90af51e90173738a9c57c3982e755d29ec506
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
<<<<<<< HEAD
                            console.log('success');
                            })
                                .catch((error) => {
                                console.log('error' , error);
                                failed = true;
=======
                            //console.log('success');
                        })
                            .catch((error) => {
                            //console.log('error' , error);
                            failed = true;
>>>>>>> deb90af51e90173738a9c57c3982e755d29ec506
                        })
                    }
                    if (failed) {
                        this.cleansePage();
                    }
                })
                .catch(error => {
                //console.log(error);
            });
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
    h1 {
        margin-top: 2rem;
    }

</style>