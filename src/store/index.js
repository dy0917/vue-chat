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
    auth: firebase.auth()
  },
  modules: {
    account: account
  }
})
