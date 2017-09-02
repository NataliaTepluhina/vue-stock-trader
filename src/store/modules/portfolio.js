export default {
    namespaced: true,

    state: {
        portfolio: []
    },

    getters: {
        getPortfolio: state => {
            return state.portfolio;
        }
    },

    mutations: {
        addItem: (state, payload) => {
            if (state.portfolio.filter(e => e.id === payload.stock.id).length > 0) {
                state.portfolio.forEach(element => {
                    if (element.id === payload.stock.id) {
                        element.quantity += payload.quantity;
                    }
                })
            }
            else {
                payload.stock.quantity = payload.quantity;
                state.portfolio.push(payload.stock);
            }
        }
    },

    actions: {
        addItem: ({commit}, payload) => {
            commit('addItem', payload);
        },
    }
}