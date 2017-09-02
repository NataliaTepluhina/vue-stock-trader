import stocks from '../../data/stocks'

export default {
    namespaced: true,

    state: {
        stocks: []
    },

    getters: {
        getStocks: state => {
            return state.stocks;
        }
    },

    mutations: {
        initStocks: (state, stocks) => {
            state.stocks = stocks;
        },

        rndStocks: state => {

        }
    },

    actions: {
        initStocks: ({commit}) => {
            commit('initStocks', stocks);
        },

        rndStocks: ({commit}) => {
            commit('rndStocks');
        },

    }
}