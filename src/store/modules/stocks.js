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
            state.stocks.forEach(element => {
               element.price = Math.round(element.price * (1 + Math.random() - 0.5));
            });
        }
    },

    actions: {
        initStocks: ({commit}) => {
            commit('initStocks', stocks);
        },

        loadStocks: ({commit}, stocks) => {
            commit('initStocks', stocks);
        },

        rndStocks: ({commit}) => {
            commit('rndStocks');
        },

    }
}