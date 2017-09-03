<template>
    <div class="container">
        <app-navbar></app-navbar>
        <md-whiteframe md-elevation="3" class="section">
            <transition name="slide" mode="out-in">
                <router-view></router-view>
            </transition>
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
        min-height: 250px;
    }

    @media (max-width: 1199px) {
        .container {
            width: 100%;
        }
    }

    .slide-leave-active {
        animation: slide-out .3s ease-out forwards;
    }


    .slide-enter-active {
        animation: slide-in .3s ease-out forwards;
    }

    @keyframes slide-in {
        from {
            transform: translateY(-30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(30px);
            opacity: 0;
        }
    }
</style>
