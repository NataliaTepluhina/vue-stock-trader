export default {
    namespaced: true,

    state: {
        portfolio: [],
        funds: 10000
    },

    mutations: {
        addItem: (state, {itemId, quantity, itemPrice}) => {
            const record = state.portfolio.find(element => itemId === element.id);
            if (record) {
                record.quantity += quantity;
            }
            else {
                state.portfolio.push({
                    id: itemId,
                    quantity: quantity
                })
            }
            state.funds += itemPrice;
        }
    },

    actions: {
        addItem: ({commit}, payload) => {
            commit('addItem', payload);
        },
    },


    getters: {
        getPortfolio: (state, getters, rootState, rootGetters) => {
            return state.portfolio.map ( item => {
                const record = rootState.stocks.stocks.find (element => element.id = item.id);
                return {
                    id: item.id,
                    quantity: item.quantity,
                    name: record.name,
                    price: record.price
                }
            })
        }
    },
}