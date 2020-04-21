<template>
    <div class="item-container">
        <div class="item-photo-container">
            <div class="item-main-photo">
                <img id="item-image"/>
            </div>
            <div class="item-price">
                <p id="cur-bid">{{currentBid}} </p>
            </div>
            <div v-if="isSilent" class="bidding-items">
                <input id="bid-amount" type="text" placeholder="Bid Amount"/>
                <button v-on:click="bid()" class="button">Bid</button>
            </div>
        </div>
        <div class="item-info-container">
            <div class="item-title">
                <h1>{{title}}</h1>
            </div>
            <div class="item-description">
                <p>{{description}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import db from '../firebase';
require('firebase/firestore');

function unFormatNum(num) {
    return Number(num.replace("$",""));
}

function formatNum(num) {
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return formatter.format(num);
}

export default {
    name: 'Item',
    props: ['title',
            'description',
            'currentBid',
            'image',
            'isSilent'],
    methods: {
        bid() {
            let bidAmt = document.getElementById("bid-amount").value;
            if (!isNaN(Number(bidAmt))) {
                let bid = unFormatNum(this.currentBid);
                if (!isNaN(bid) && Number(bidAmt) <= bid) {
                    alert("Please enter a bid amount greater than the current bid.");
                }
                else {
                    let itemRef = db.collection('Item').doc(this.title);
                    let options = {
                        source: 'default',
                    };
                    itemRef.update({
                        price: Number(bidAmt).toString(),
                    });

                    itemRef.update({
                        winner: this.$store.state.account.userName.toString(),
                    })
                    console.log(this.$store.state.account.userName.toString());
                    // console.log(itemRef.data().winner)

                    document.getElementById('cur-bid').innerHTML = formatNum(bidAmt);
                    document.getElementById('bid-amount').value = '';

                    // window.location.reload();
                }
            }
            else {
                alert("Please enter a valid bid amount.");
            }
        },
    },
    data() {
        return {
            data: {
                title: "title",
                description: "description",
                currentBid: "0.00",
                isSilent: true
            },
        }
    },
    created() {
        // Empty
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
    .bidding-items{
        display: flex;
    }
</style>