<template>
    <div class="item-rows">
        <div v-if="initialized" class="item-icon" >
            <div v-for="item in list" :key="item.id">
                <ItemIcon
                    :title="item.title"
                    :description="item.description"
                    :currentBid="item.bid"
                />
            </div>
        </div>
        <div v-else>
            <div>Please Select Which School's Items To Display.</div>
            <select v-model="school" @change="updateSchool($event)">
                <option v-for="item in schoolList" :key="item.id" v-bind:value='{"id" : item.id}' >
                    {{item.date}} {{item.school}}
                </option>
            </select>
        </div>
    </div>
</template>
<script>
import ItemIcon from '../components/ItemIcon.vue';
import db from '../firebase';
import { initializeApp } from 'firebase';
require('firebase/firestore');
function formatNum(num) {
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return formatter.format(num);
}
export default {
    name: 'Silent',
    components: {
        ItemIcon,
    },
    data() {
        return {
            list: [],
            initialized: false,
            school: '',
            schools: [],
        }
    },
    computed: {
        schoolList() {
            return this.schools;
        }
    },
    methods: {
        updateSchool(){
            console.log(this.school.id);
            this.$store.state.auction.data = db.collection("Auctin").doc(this.school.id).get();
            this.initialized = true;
            db.collection('Item').where("auctionID", "==", this.school.id).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    //console.log(doc.data());
                    if (doc.data().isSilent) {
                        const data = {
                            description: doc.data().description,
                            title: doc.data().title,
                            bid: formatNum(doc.data().price),
                            image: doc.data().image
                        };
                        this.list.push(data);
                    }
                })
            })
            .catch(error => {
                //console.log(error.data);
            });
        }
    },
    created() {
        db.collection("Auction").where("isApproved", "==", true).get()
        .then(querySnapshot => {
            querySnapshot.forEach((doc) => {
              // const d = new Date(doc.data().date);
              // if (d.getTime() > this.today.getTime()) {
                const item = doc.data();
                item["id"] = doc.id;
                this.schools.push(item);
                console.log("Auctions List: ", doc.id, " => ", item);
              // }
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
        if (this.initialized) {
            db.collection('Item').get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    //console.log(doc.data());
                    if (doc.data().isSilent) {
                        const data = {
                            description: doc.data().description,
                            title: doc.data().title,
                            bid: formatNum(doc.data().price),
                            image: doc.data().image
                        };
                        this.list.push(data);
                    }
                })
            })
            .catch(error => {
                //console.log(error.data);
            });
    }
    }
}
</script>
<style scoped>
.item-rows {
    display: flex;
    flex-wrap: wrap;
}
.item-icon {
    margin-left: 3%;
}
</style>