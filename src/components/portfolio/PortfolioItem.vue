<template>
    <md-layout md-flex="33" md-flex-small="50" md-flex-xsmall="100">
        <md-card class="fullwidth">
            <md-card-header class="no-gutter">
                <md-toolbar class="md-warn">
                    <div class="md-title">
                        {{ item.name }} <span class="md-body-2">(Price: {{ item.price }} | Quantity: {{ item.quantity }})</span>
                    </div>
                </md-toolbar>
            </md-card-header>
            <md-card-content>
                <md-input-container>
                    <md-input v-model.number="quantity"
                              class="form-control"
                              :class="{ danger: insufficient }"
                              type="number"
                              placeholder="Quantity"></md-input>
                </md-input-container>
            </md-card-content>
            <md-card-actions>
                <md-button class="md-raised md-warn"
                           :disabled="insufficient || quantity <= 0 || !Number.isInteger(quantity)"
                           @click="sellStock">{{ insufficient ? 'Not enough stocks' : 'Sell' }}
                </md-button>
            </md-card-actions>
        </md-card>
    </md-layout>
</template>

<script>
    export default {
        data() {
            return {
                quantity: 0
            }
        },

        computed: {
            insufficient() {
                return this.quantity > this.item.quantity;
            }
        },

        props: ['item'],

        methods: {
            sellStock() {
                let itemId = this.item.id;
                let quantity = this.quantity;
                let itemPrice = this.item.price;
                this.$store.dispatch('portfolio/sellItem', { itemId, quantity, itemPrice })

                this.quantity = 0;
            }
        }
    }
</script>

<style scoped>
    .danger {
        border: 1px solid red;
    }
    .no-gutter {
        padding: 0;
    }
    .fullwidth {
        width: 100%;
        margin-bottom: 10px;
    }

</style>