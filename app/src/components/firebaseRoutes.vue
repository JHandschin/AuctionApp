<template>
    
</template>

<script>

import db from '../firebase';
require('firebase/firestore');

export default {
    data() {
        return {
            Auction: {
                id: '',
                users: [],
                items: [],
                date: '',
                admin: '',
            },
            Bid: {
                id: '',
                userId: '',
                ItemId: '',
                price: 0.00,
                date: '',
            },
            User: {
                id: '',
                isAdmin: false,
                isPresenter: false,
                name: '',
                phone: '',
                email: '',
                userName: '',
                userPass: '',
                bids: [],
            },
            Item: {
                id: '',
                auctionId: '',
                title: '',
                description: '',
                media: [],
                bids: [],
                price: 0.00,
                isLive: false,
                isApproved: false,
            },
            Media: {
                id: '',
                itemId: '',
            }
        }
    },
    methods: {
        getAuctions() {
            db.collection('Auction').get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        //console.log(doc.data());
                        this.list.push(this.Auction);
                    })
                })
                .catch(error => {
                //console.log(error.data);
            });
        },
        setAuction() {
            // Adding to 'Users" Collection
            db.collection('Auction').doc(this.Auction.date).set(this.Auction)
                .then(function() {
                //console.log('success');
            })
                .catch((error) => {
                //console.log('error' , error);
            })
        },

    },

}
</script>
<style scoped>

</style>