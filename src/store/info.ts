import firebase from "firebase/app";

export default {
    state: {
        info: {}
    },
    mutations: {
        setInfo(state:any, info:any){
            state.info = info;
        },
        clearInfo(state:any){
            state.info = {}
        }
    },
    actions: {
        async fetchInfo({dispatch, commit}:any) {
            try{
                const uid = await dispatch('getUid')
                const b = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val()
                commit('setInfo', b)
            }
            catch (e) {
                return null
            }

        }
    },
    getters: {
        info: (state: any) => {
            console.log('state.info', state.info)
            return state.info
        }
    },
};