<template>
    <div>
        <stock-item v-for="stock in stocks" :stock="stock"></stock-item>
    </div>
</template>

<script>
    import StockItem from './StockItem.vue'
    export default {
        components: {
            stockItem: StockItem
        },
        computed: {
            stocks() {
                return this.$store.getters.getStocks;
            }
        }
    }
</script>