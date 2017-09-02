<template>
    <div>
        <portfolio-item v-for="item in portfolio" :item="item"></portfolio-item>
    </div>

</template>

<script>
    import PortfolioItem from './PortfolioItem.vue'
    export default {
        components: {
            portfolioItem: PortfolioItem
        },
        computed: {
            portfolio() {
                return this.$store.getters['portfolio/getPortfolio'];
            }
        }
    }
</script>