const common = {
    state: {
        scrollState: '1',
        scrollFlag: false,
        totalMoney: 0
    },
    mutations: {
        SET_SCROLL_STATE: (state, scrollState) => {
            state.scrollState = scrollState
        },
        SET_SCROLL_FLAG: (state, scrollFlag) => {
            state.scrollFlag = scrollFlag
        },
        SET_SCROLL_FLAG: (state, totalMoney) => {
            state.totalMoney = totalMoney
        }
    },
    actions: {
        changeScrollState({ commit }, scrollState) {
            commit('SET_SCROLL_STATE', scrollState)
        },
        changeScrollFlag({ commit }, scrollFlag) {
            commit('SET_SCROLL_FLAG', scrollFlag)
        },
        changeScrollFlag({ commit }, obj) {
            commit('SET_SCROLL_FLAG', (obj) => {
                if(obj.flag) {
                    return this.state.totalMoney - obj.money
                }
            })
        }
    }
}

export default common