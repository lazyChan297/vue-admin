const app = {
    state: {
        sidebar: {
            opened: false
        }
    },
    mutations: {
        TOGGLE_SIDEBAR: state => {
            state.sidebar.opened = !state.sidebar.opened
        }
    },
    actions: {
        toggleSideBar: ({commit}) => {
            commit('TOGGLE_SIDEBAR')
        }
    }
}
export default app