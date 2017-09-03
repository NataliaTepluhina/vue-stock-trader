<template>
    <div>
        <p class="md-display-1">Trade or View your Portfolio</p>
        <p class="md-subheading">You may Save & Load your Data</p>
        <p class="md-subheading">Click on 'End Day' to begin a new Day!</p>
        <p class="md-title">Your Funds: {{funds | currency}}</p>
    </div>
</template>

<script>
    export default {
        filters: {
            currency(value) {
                return '$' + value;
            }
        },
        computed: {
            funds() {
                return this.$store.getters['portfolio/getFunds']
            }
        }
    }
</script>