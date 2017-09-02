<template>
    <md-layout md-gutter="16">
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