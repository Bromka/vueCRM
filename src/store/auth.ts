import firebase from "firebase/app";
import Any = jasmine.Any;

// @ts-ignore
export default {
    state: {},
    mutations: {},
    actions: {
        async login({dispatch, commit}:any, {email, password}:any){
            /*eslint no-useless-catch: "off"*/
            try {
                const a = await firebase.auth().signInWithEmailAndPassword(email, password)
            } catch (e) {
                commit('setError', e)
                throw 'asdasdas'
            }


        },
        async logout(){
            await firebase.auth().signOut()
        },
        async register({dispatch, commit}:any, {email, password, name}:any){
            try {
                const a = await firebase.auth().createUserWithEmailAndPassword(email, password)
                const uid = await dispatch('getUid')
                console.log(uid)
                await firebase.database().ref(`/users/${uid}/info`).set({
                    bill: 10000,
                    name
                })

            } catch (e) {
                commit('setError', e)
                throw e
            }
        },
        getUid(){
            const user = firebase.auth().currentUser;
            return user ? user.uid : null;
        }
    },
    getters: {}
}