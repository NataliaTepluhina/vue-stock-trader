<template>
    <div class="container">
        <app-navbar></app-navbar>
        <div class="row">
            <div class="col-xs-12">
            <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from './components/Navbar.vue'

    export default {
        components: {
            appNavbar: Navbar
        }
    }
</script>

<style>

</style>
