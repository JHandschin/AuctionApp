<template>
    <div class="item-container">
        <div class="item-photo-container">
            <div class="item-main-photo">
                <img id="item-image"/>
            </div>
            <div class="item-price">
                <p>{{currentBid}} </p>
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
    props: ['title',
            'description',
            'currentBid',
            'image'],
    data() {
        return {
            data: {
                title: "title",
                description: "description",
                currentBid: "0.00"
            },
        }
    },
    created() {
        console.log(this.title);
        console.log(this.description);
        console.log(this.currentBid);
        // let doc = db.collection('Item').doc("Bike test");
        // let options = {
        //     source: 'default',
        // }

        // doc.get(options)
        // .then(d => {
        //     console.log(d.data());
        //     this.data.description = d.data().description;
        //     this.data.title = d.data().title;
        //     this.data.currentBid = d.data().price;
        // })
        // .catch(e => {
        //     console.log(e.data);
        // });
        // db.collection('Item').get()
        // .then(querySnapshot => {
        //     querySnapshot.forEach(doc => {
        //         //console.log(doc.data());
        //         const data = {
        //             description: doc.description,
        //             title: doc.title,
        //             bid: doc.price,
        //             image: doc.image
        //         };
        //         this.list.push(data);
        //     });
        // })
        // .catch(error => {
        //     //console.log(error.data);
        // });
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
        margin-left: 3%;
    }
    .item-main-photo {
        height: 300px;
        width: 300px;
        border: solid black 1px;
    }
    .item-title {
        font-size: 3em;
        font-weight: bold;
        height: 20%;
    }
    .item-description {
        text-align: left;
        font-size: 1em;
        height: 80%;
    }
    .item-price {
        font-size: 1.5em;
        font-weight: bolder;
        text-align: right;
    }
    .item-photo-container {
        text-align: right;
    }
</style>