<template>
    <md-layout md-flex="33">
        <md-card class="fullwidth">
            <md-card-header class="no-gutter">
                <md-toolbar class="md-accent">
                    <div class="md-title">
                        {{ stock.name }} <span class="md-body-2">(Price: {{ stock.price }})</span>
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
                <md-button class="md-raised md-accent"
                           :disabled="insufficient || quantity <= 0 || !Number.isInteger(quantity)"
                           @click="buyItem(stock, quantity)">{{insufficient ? 'Not enough funds' : 'Buy'}}
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
            funds() {
                return this.$store.getters['portfolio/getFunds']
            },
            insufficient() {
                return this.funds < this.quantity * this.stock.price;
            }
        },

        props: ['stock'],

        methods: {
            buyItem() {
                let itemId = this.stock.id;
                let quantity = this.quantity;
                let itemPrice = this.stock.price;
                this.$store.dispatch('portfolio/addItem', { itemId, quantity, itemPrice });
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