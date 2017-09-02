<template>
    <md-layout md-gutter="16">
        <stock-item v-for="stock in stocks" :stock="stock"></stock-item>
    </md-layout>
</template>

<script>
    import StockItem from './StockItem.vue'
    export default {
        components: {
            stockItem: StockItem
        },
        computed: {
            stocks() {
                return this.$store.getters['stocks/getStocks'];
            }
        }
    }
</script>