import 'firebase/firestore'
import Vue from 'vue'
import Vuex from 'vuex'
import account from './modules/account'
import * as firebase from 'firebase'
import config from './config'
firebase.initializeApp(config);
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    db: firebase.database(),
    auth: firebase.auth(),
    loginUser: {}
  },
  modules: {
    account: account
  },
  actions: {
    async login({commit, state }, emailAndPassword){

        var user = await state.auth.signInWithEmailAndPassword('huangkingsley@gmail.com', 'Password1').catch(function(error) {
                 // Handle Errors here.
                  state.errorMessage = error.message;
             });
             console.log(user);
    }
  },
  mutations: {
    setToken (state, token) {
     state.loginUser.token = token
       console.log(state)
   }
  }
})
