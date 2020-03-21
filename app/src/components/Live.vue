<template>
    <div class="item-rows">
        <div class="item-icon" v-for="item in list" :key="item.id">
            <ItemIcon
                :title="item.title"
                :description="item.description"
                :currentBid="item.bid"
            />
        </div>
    </div>
</template>
<script>
import ItemIcon from '../components/ItemIcon.vue';
import db from '../firebase';
require('firebase/firestore');
function formatNum(num) {
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return formatter.format(num);
}
export default {
    name: 'Live',
    components: {
        ItemIcon,
    },
    data() {
        return {
            list: []
        }
    },
    created() {
        db.collection('Item').get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                if (!doc.data().isSilent) {
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
            console.log(error.data);
        });
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