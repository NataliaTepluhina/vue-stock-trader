export default {
    namespaced: true,

    state: {
        portfolio: [],
        funds: 10000
    },

    mutations: {
        addItem: (state, { itemId, quantity, itemPrice }) => {
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
            state.funds -= itemPrice * quantity;
        },

        sellItem: (state, { itemId, quantity, itemPrice }) => {
            const record = state.portfolio.find(element => itemId === element.id);
            if (quantity <= record.quantity) {
                record.quantity -= quantity;
                state.funds += itemPrice * quantity;
            }
            else {
                state.portfolio.splice(record, 1);
                state.funds += itemPrice * quantity;
            }
        }
    },

    actions: {
        addItem: ({ commit }, payload) => {
            commit('addItem', payload);
        },

        sellItem: ({ commit }, payload) => {
            commit('sellItem', payload);
        },
    },


    getters: {
        getPortfolio: (state, getters, rootState) => {
            return state.portfolio.map ( item => {
                const record = rootState.stocks.stocks.find (element => element.id === item.id);
                return {
                    id: item.id,
                    quantity: item.quantity,
                    name: record.name,
                    price: record.price
                }
            })
        },

        getFunds: (state) => {
            return state.funds;
        }
    },
}