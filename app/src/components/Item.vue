<template>
    <div class="item-container">
        <div class="item-photo-container">
            <div class="item-main-photo">
                <img id="item-image"/>
            </div>
            <div class="item-price">
                <p>${{currentBid}} </p>
                <!-- <p>$ {{ currentBid }}</p> -->
            </div>
            <button class="button">Bid</button>
        </div>
        <div class="item-info-container">
            <div class="item-title">
                <!-- <h1>{{ title }}</h1> -->
                <h1>{{title}}</h1>
            </div>
            <div class="item-description">
                <!-- <p>{{ description }}</p> -->
                <p>{{description}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import db from '../firebase';
require('firebase/firestore');
export default {
    name: 'Item',
    // props: ['title',
    //         'description',
    //         'currentBid',
    //         'image'],
    data() {
        return {
            title: 'test title',
            description: 'test description',
            currentBid: '0.00',
            list: [],
        }
    },
    created() {
        db.collection('Item').get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                console.log(doc.data());
                const data = {
                    description: doc.description,
                    title: doc.title,
                    bid: doc.price,
                    image: doc.image
                };
                this.list.push(data);
            });
        })
        .catch(error => {
            console.log(error.data);
        });
    }
}
</script>
<style scoped>
    .item-container {
        width: 70%;
        margin-left: 15%;
        margin-top: 5px;
        display: flex;
    }
    .item-info-container {
        width: 100%;
    }
    .item-main-photo {
        height: 300px;
        width: 300px;
        border: solid black 1px;
    }
    .item-title {
        font-size: 3em;
        font-weight: bold;
        border: solid black 1px;
        height: 20%;
    }
    .item-description {
        font-size: 1em;
        border: solid black 1px;
        height: 80%;
    }
    .item-price {
        font-size: 1.5em;
        font-weight: bolder;
        border: solid black 1px;
        text-align: right;
    }
    .item-photo-container {
        text-align: right;
    }
</style>