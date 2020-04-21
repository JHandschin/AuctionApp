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
                :to="{ 
                    name: 'Item',
                    params: { 
                        title: title,
                        description: description,
                        currentBid: currentBid,
                        isSilent: isSilent,
                    } 
                }">
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
            'image',
            'isSilent'],
    data() {
        return {
            // title: 'Test Title',
            // description: 'Test Description',
            // currentBid: '0.00',
            data: {
                title: "",
                description: "",
                currentBid: "",
                isSilent: true,
            }
        }
    },
    created() {
        // console.log(this.title);
        // console.log(this.currentBid);
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
        /* border: solid black 1px; */
        height: 400px;
        width: 300px;
        margin-bottom: 3%;
        float: left;
    }
    /* .itemicon-image { */
        /* border: solid black 1px; */
    /* } */
    .itemicon-title {
        /* border: solid black 1px; */
        font-size: 1em;
        font-weight: bold;
    }
    .itemicon-price {
        /* border: solid black 1px; */
        font-size: 1.5em;
    }
    .itemicon-description {
        /* border: solid black 1px; */
        font-size: .75em;
    }
</style>