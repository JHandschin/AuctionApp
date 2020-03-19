<template>
    <div class="itemicon-container">
        <div class="itemicon-image">
            <img
            height="200px"
            width="200px"
            id="main-image"/>
        </div>
        <div class="itemicon-title">
            <router-link
                :to="{ name: 'Item',
                       params: { title: title,
                                 description: description,
                                 currentBid: currentBid} }">
                {{title}}
            </router-link>
        </div>
        <div class="itemicon-price">
            <p>{{currentBid}}</p>
        </div>
        <div class="itemicon-description">
            <p>{{description}}</p>
        </div>
    </div>
</template>
<script>
import db from '../firebase';
require('firebase/firestore');
export default {
    name: 'ItemIcon',
    props: ['title',
            'description',
            'currentBid',
            'image'],
    data() {
        return {
            // title: 'Test Title',
            // description: 'Test Description',
            // currentBid: '0.00',
            data: {
                title: "",
                description: "",
                currentBid: "",
            }
        }
    },
    created() {
        console.log(this.title);
        // db.collection('Item').get("Bike test")
        // .then(doc => {
        //     console.log(doc.data());
        // })
        // .catch(error => {
        //     // //console.log(error.data);
        // });
    }
}
</script>
<style scoped>
    .itemicon-container {
        height: 25%;
        width: 20%;
        border: solid black 1px;
        margin-left: 40%;
        margin-bottom: 3%;
        float: left;
    }
    .itemicon-image {
        border: solid black 1px;
    }
    .itemicon-title {
        font-size: 1em;
        font-weight: bold;
        border: solid black 1px;
    }
    .itemicon-price {
        font-size: 1.5em;
        border: solid black 1px;
    }
    .itemicon-description {
        font-size: .75em;
        border: solid black 1px;
    }
</style>