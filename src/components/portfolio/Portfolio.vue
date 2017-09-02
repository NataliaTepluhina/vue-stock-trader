<template>
    <div class="col-sm-6 col-md-4">
        <portfolio-item></portfolio-item>
    </div>

</template>

<script>
    import PortfolioItem from './PortfolioItem.vue'
    export default {
        components: {
            portfolioItem: PortfolioItem
        }
    }
</script>