<template>
    <md-toolbar>
        <md-layout md-flex="50">
            <md-button>
                <router-link to="/" tag="p" class="md-title">Stock Trader</router-link>
            </md-button>
            <md-layout md-vertical-align="center">
                <md-button-toggle md-single class="md-primary">
                    <md-button>
                        <router-link to="/portfolio" tag="p" class="md-subheading">Portfolio</router-link>
                    </md-button>
                    <md-button>
                        <router-link to="/stocks" tag="p" class="md-subheading">Stocks</router-link>
                    </md-button>
                </md-button-toggle>
            </md-layout>
        </md-layout>
        <md-layout md-align="end">
            <md-layout md-flex="70">
                <md-button>
                    <p class="md-subheading" @click="randomizeStocks">
                        End Day
                    </p>
                </md-button>
                <md-layout md-vertical-align="center">
                    <md-menu md-align-trigger>
                        <md-button md-menu-trigger>
                            <p class="md-subheading">Save & Load</p>
                        </md-button>
                        <md-menu-content>
                            <md-menu-item @click.native="saveData">Save Data</md-menu-item>
                            <md-menu-item @click.native="fetchData">Load Data</md-menu-item>
                        </md-menu-content>
                    </md-menu>
                </md-layout>
                <md-layout md-vertical-align="center">
                    <md-chip class="md-warn md-subheading large">
                        Funds: {{ funds | currency }}
                    </md-chip>
                </md-layout>
            </md-layout>
        </md-layout>
    </md-toolbar>

</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        filters: {
            currency(value) {
                return '$' + value;
            }
        },
        computed: {
            funds() {
                return this.$store.getters['portfolio/getFunds']
            },
            stocks() {
                return this.$store.getters['stocks/getStocks']
            },
            portfolio() {
                return this.$store.getters['portfolio/getShortPortfolio']
            }
        },
        methods: {
            ...mapActions({
                randomizeStocks: 'stocks/rndStocks',
                loadStocks: 'stocks/loadStocks',
                loadPortfolio: 'portfolio/loadPortfolio',

            }),
            saveData() {
                this.resource.saveData({
                    funds: this.funds,
                    stocks: this.stocks,
                    portfolio: this.portfolio
                })
                .then( response => {
                    console.log(response);
                }, error => {
                    console.log(error);
                } );
            },

            fetchData() {
                this.resource.fetchData()
                    .then(response => response.json())
                    .then(data => {
                        const funds = data.funds;
                        const portfolio = data.portfolio;
                        const stocks = data.stocks;
                        this.loadStocks(stocks);
                        this.loadPortfolio({portfolio, funds});
                    })
            }
        },

        created() {
            const customActions = {
                saveData: { method: 'PUT' },
                fetchData: { method: 'GET' }
            };
            this.resource = this.$resource('data.json', {}, customActions);
        }
    }
</script>

<style scoped>
    .large {
        font-size: 16px
    }
</style>