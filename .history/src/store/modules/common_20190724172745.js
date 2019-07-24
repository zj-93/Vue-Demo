const common = {
    state: {
        scrollState: '1',
        scrollFlag: false,
        shipNum: 5,
        payListArr: [],
        payList: [],
        totalMoney: 0
    },
    mutations: {
        SET_SCROLL_STATE: (state, scrollState) => {
            state.scrollState = scrollState
        },
        SET_SCROLL_FLAG: (state, scrollFlag) => {
            state.scrollFlag = scrollFlag
        },
        SET_PAY_LIST: (state, payList) => {
            state.payList = payList
        },
        SET_PAY_LIST_ARR: (state, payListArr) => {
            state.payListArr = payListArr
        },
        SET_TOTAL_MONEY: (state, totalMoney) => {
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
        changePayListArr({ commit }, payListArr) {
            commit('SET_PAY_LIST_ARR', payListArr)
        },
        changePayList({ commit }, payList) {
            commit('SET_PAY_LIST', payList)
        },
        changeTotalMoney({ commit }, totalMoney) {
            commit('SET_TOTAL_MONEY', totalMoney)
        }
    }
}

export default common