<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-default panel-info">
            <div class="panel-heading">
                <h4>{{ item.name }} <span>(Price: {{ item.price }} | Quantity: {{ item.quantity }})</span></h4>
            </div>
            <div class="panel-body">
                <div class="col-xs-6">
                    <input v-model.number="quantity"
                           class="form-control"
                           :class="{ danger: insufficient }"
                           type="number"
                           placeholder="Quantity">
                </div>
                <div class="col-xs-6">
                    <button :disabled="insufficient || quantity <= 0 || !Number.isInteger(quantity)"
                            @click="sellStock"
                            class="btn btn-danger pull-right">{{ insufficient ? 'Not enough stocks' : 'Sell' }}</button>
                </div>
            </div>
        </div>
    </div>
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
    span {
        font-size: 12px;
    }
</style>