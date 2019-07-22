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
        SET_TOTAL_MONEY: (state, totalMoney) => {
            if(totalMoney.flag) {
                state.totalMoney = totalMoney.money
            } else {
                state.totalMoney = totalMoney.money
            }
            console.log(state.totalMoney)
        }
    },
    actions: {
        changeScrollState({ commit }, scrollState) {
            commit('SET_SCROLL_STATE', scrollState)
        },
        changeScrollFlag({ commit }, scrollFlag) {
            commit('SET_SCROLL_FLAG', scrollFlag)
        },
        changeTotalMoney({ commit }, totalMoney) {
            commit('SET_TOTAL_MONEY', totalMoney)
        }
    }
}

// (obj) => {
//     if(obj.flag) {
//         return this.state.totalMoney - obj.money
//     } else {
//         return this.state.totalMoney + obj.money
//     }
// }
export default common