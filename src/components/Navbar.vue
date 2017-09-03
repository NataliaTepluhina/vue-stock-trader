<template>
    <div>
        <md-toolbar>
            <md-layout md-hide-medium-and-up>
                <md-button class="md-icon-button" @click="toggleLeftSidenav">
                    <md-icon>menu</md-icon>
                </md-button>
            </md-layout>
            <md-layout md-flex="50" md-hide-small>
                <md-button @click.native="$router.push('/')">
                    <p class="md-title">Stock Trader</p>
                </md-button>
                <md-layout md-vertical-align="center">
                    <md-button-toggle md-single class="md-primary">
                        <md-button @click.native="$router.push('/portfolio')">
                            <p class="md-subheading">Portfolio</p>
                        </md-button>
                        <md-button @click.native="$router.push('/stocks')">
                            <p class="md-subheading">Stocks</p>
                        </md-button>
                    </md-button-toggle>
                </md-layout>
            </md-layout>
            <md-layout md-align="end">
                <md-layout md-flex="70" md-flex-medium="85" md-align="end">
                    <md-layout md-flex="29" md-hide-small>
                        <md-button  @click.native="randomizeStocks">
                            <p class="md-subheading">
                                End Day
                            </p>
                        </md-button>
                    </md-layout>
                    <md-layout md-vertical-align="center" md-hide-small>
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
                    <md-layout md-vertical-align="center" md-align="end">
                        <md-chip class="md-warn md-subheading large">
                            Funds: {{ funds | currency }}
                        </md-chip>
                    </md-layout>
                </md-layout>
            </md-layout>
            <div class="spinner" v-if="loading">
                <md-spinner md-indeterminate></md-spinner>
            </div>
        </md-toolbar>
        <md-sidenav class="md-left" ref="leftSidenav">
            <md-toolbar>
                <md-layout>
                    <md-layout md-flex="90">
                        <router-link to="/" tag="span" class="md-title">Stock Trader</router-link>
                    </md-layout>
                    <md-layout>
                        <md-icon @click.native="closeLeftSidenav">clear</md-icon>
                    </md-layout>
                </md-layout>
            </md-toolbar>
            <md-list>
                <md-list-item>
                    <router-link to="/portfolio" tag="p" class="md-subheading" @click.native="closeLeftSidenav">Portfolio</router-link>
                </md-list-item>
                <md-list-item>
                    <router-link to="/stocks" tag="p" class="md-subheading" @click.native="closeLeftSidenav">Stocks</router-link>
                </md-list-item>
                <md-list-item @click="randomizeStocks(); closeLeftSidenav()">End Day</md-list-item>
                <md-list-item @click="saveData(); closeLeftSidenav()">Save Data</md-list-item>
                <md-list-item @click="fetchData(); closeLeftSidenav()">Load Data</md-list-item>
            </md-list>
        </md-sidenav>
    </div>


</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        data() {
            return {
                loading: false
            }
        },

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
                    this.loading = false;
                });
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
                        this.loading = false;
                    })
            },

            toggleLeftSidenav() {
                this.$refs.leftSidenav.toggle();
            },

            closeLeftSidenav() {
                this.$refs.leftSidenav.close();
            },

        },

        created() {
            const customActions = {
                saveData: { method: 'PUT', before: () => {
                    this.loading = true;
                }},
                fetchData: { method: 'GET', before: () => {
                    this.loading = true;
                } }
            };
            this.resource = this.$resource('data.json', {}, customActions);
        }
    }
</script>

<style scoped>
    .large {
        font-size: 16px
    }

    .spinner {
        position: absolute;
        top: 50vh;
        left: 50%;
    }
</style>