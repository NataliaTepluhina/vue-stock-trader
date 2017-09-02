<template>
    <div class="container">
        <app-navbar></app-navbar>
        <md-whiteframe md-elevation="3" class="section">
            <router-view></router-view>
        </md-whiteframe>
    </div>
</template>

<script>
    import Navbar from './components/Navbar.vue'

    export default {
        components: {
            appNavbar: Navbar
        },

        created() {
            this.$store.dispatch('stocks/initStocks');
        }
    }
</script>

<style scoped>
    .container {
        width: 1200px;
        margin: 0 auto;
    }

    .section {
        padding: 20px 30px 20px 30px;
    }
</style>
