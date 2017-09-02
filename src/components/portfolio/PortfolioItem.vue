<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-default panel-info">
            <div class="panel-heading">
                <h4>{{ item.name }} <span>(Price: {{ item.price }} | Quantity: {{ item.quantity }})</span></h4>
            </div>
            <div class="panel-body">
                <div class="col-xs-6">
                    <input class="form-control"  type="text" placeholder="Quantity">
                </div>
                <div class="col-xs-6">
                    <button class="btn btn-danger pull-right">Sell</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['item']
    }
</script>

<style scoped>
    span {
        font-size: 12px;
    }
</style>