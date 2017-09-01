<template>
    <div class="col-xs-6">
        <stock-item></stock-item>
    </div>

</template>

<script>
    import StockItem from './StockItem.vue'
    export default {
        components: {
            stockItem: StockItem
        }
    }
</script>