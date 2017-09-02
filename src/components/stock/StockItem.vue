<template>
    <div  class="col-sm-6 col-md-4">
        <div class="panel panel-default panel-success">
            <div class="panel-heading">
                <h4>{{ stock.name }} <span>(Price: {{ stock.price }})</span></h4>
            </div>
            <div class="panel-body">
                <div class="col-xs-6">
                    <input v-model="quantity" class="form-control" type="text" placeholder="Quantity">
                </div>
                <div class="col-xs-6">
                    <button :disabled="!quantity"  @click="buyItem(stock, quantity)" class="btn btn-success pull-right">Buy</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
          return {
              quantity: ''
          }
        },

        props: ['stock'],

        methods: {
            buyItem(stock, quantity) {
                console.log(stock, quantity)
            }
        }
    }
</script>

<style scoped>
    span {
        font-size: 12px;
    }
</style>