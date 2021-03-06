const common = {
    state: {
        scrollState: '1',
        scrollFlag: false,
        shipNum: 5,
        payListArr: [],
        payList: []
    },
    mutations: {
        SET_SCROLL_STATE: (state, scrollState) => {
            state.scrollState = scrollState
        },
        SET_SCROLL_FLAG: (state, scrollFlag) => {
            state.scrollFlag = scrollFlag
        },
        SET_PAY_LIST: (state, scrollFlag) => {
            state.scrollFlag = scrollFlag
        },
        SET_PAY_LIST_ARR: (state, scrollFlag) => {
            state.scrollFlag = scrollFlag
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
            commit('SET_SCROLL_FLAG', payListArr)
        },
        changepayList({ commit }, payList) {
            commit('SET_SCROLL_FLAG', payList)
        }
    }
}

export default common