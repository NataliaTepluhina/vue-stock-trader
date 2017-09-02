<template>
    <div  class="col-sm-6 col-md-4">
        <div class="panel panel-default panel-success">
            <div class="panel-heading">
                <h4>{{ stock.name }} <span>(Price: {{ stock.price }})</span></h4>
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
                            @click="buyItem(stock, quantity)"
                            class="btn btn-success pull-right">{{insufficient ? 'Not enough funds' : 'Buy'}} </button>
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
    span {
        font-size: 12px;
    }
</style>