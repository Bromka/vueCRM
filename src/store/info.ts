export default {
    state: {
        info: {}
    },
    mutations: {},
    actions: {
        fetchInfo({dispatch, commit}:any) {
            console.log(dispatch.getUid)
        }
    },
    getters: {
        info: (state: any) => {
            return state.info
        }
    },
};