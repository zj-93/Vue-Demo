const common = {
    state: {
        scrollState: '1'
    },
    mutations: {
        SET_SCROLLSTATE: (state, scrollState) => {
            state.scrollState = scrollState
        }
    },
    actions: {
        changeScrollState({ commit }, scrollState) {
            commit('SET_SCROLLSTATE', scrollState)
        }
    }
}

export default common