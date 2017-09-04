<template>
    <md-layout md-gutter="16">
        <p class="md-display-1" v-if="portfolio.length === 0">You haven't buy any stock yet</p>
        <portfolio-item v-for="item in portfolio" :item="item"></portfolio-item>
    </md-layout>

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