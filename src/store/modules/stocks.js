import stocks from '../../data/stocks'

const namespaced = true;

const state = {
    stocks: []
};

const mutations = {
    initStocks: (state, stocks) => {
        state.stocks = stocks;
    },

    rndStocks: state => {

    }
};

const actions = {
    initStocks: ({ commit }) => {
        commit('initStocks', stocks);
    },

    rndStocks: ({ commit }) => {
        commit('rndStocks');
    },

    buyStock: ({ commit }) => {

    }
};

const getters = {
    getStocks: state => {
        return state.stocks;
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}