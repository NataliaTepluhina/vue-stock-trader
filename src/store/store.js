import Vue from 'vue'
import Vuex from 'vuex'
import stocks from './modules/stocks'
import portfolio from './modules/portfolio'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {

    },
    getters: {
    },
    mutations: {
    },
    modules: {
        stocks,
        portfolio
    }
});