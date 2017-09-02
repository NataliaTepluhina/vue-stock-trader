<template>
    <div  class="col-sm-6 col-md-4">
        <div class="panel panel-default panel-success">
            <div class="panel-heading">
                <h4>{{ stock.name }} <span>(Price: {{ stock.price }})</span></h4>
            </div>
            <div class="panel-body">
                <div class="col-xs-6">
                    <input v-model.number="quantity" class="form-control" type="number" placeholder="Quantity">
                </div>
                <div class="col-xs-6">
                    <button :disabled="quantity <= 0 || !Number.isInteger(quantity)"  @click="buyItem(stock, quantity)" class="btn btn-success pull-right">Buy</button>
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

        props: ['stock'],

        methods: {
            buyItem(stock, quantity) {

            }
        }
    }
</script>

<style scoped>
    span {
        font-size: 12px;
    }
</style>