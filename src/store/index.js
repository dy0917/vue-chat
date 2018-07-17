import 'firebase/firestore'
import Vue from 'vue'
import Vuex from 'vuex'
import account from './modules/account'
import message from './modules/message'
import accountProfiles from './modules/accountProfiles'
import * as firebase from 'firebase'
import config from './config'
import router from '../router'
firebase.initializeApp(config);
import firebaseApi from '@/apis/firebase'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    db: firebase.database(),
    auth: firebase.auth(),
    loginUser: {},
    hasLoaded: false,

  },
  modules: {
    account: account,
    message: message,
    accountProfiles: accountProfiles
  },

  getters: {
    loginUser(state) {
      var loginUser =state.loginUser;
      if(Vue._.isEmpty(loginUser)){
        return null
      }
      return loginUser
    },

    hasLoaded(state){
      return state.hasLoaded
    }
  },

  actions: {
    login({commit, state }, emailAndPassword){
      return state.auth.signInWithEmailAndPassword(emailAndPassword.username, emailAndPassword.password)
    },
    async logout({commit, state }){
      commit('setLoginUser', null)
      await state.auth.signOut();
      router.push({ path: '/' })
    },

    async hasLogin({commit, state }){
      var loginUser={};
      state.auth.onAuthStateChanged((user)=> {
        loginUser=user;
        if (!user) {
          localStorage.removeItem('token');
          localStorage.removeItem('uid');
          commit('setHasLoaded', true)
        }else{
            localStorage.setItem('token', user.token);
            localStorage.setItem('uid', user.uid);
            firebaseApi.getUserAccountByIdAsync(user.uid).then(user=>{
               commit('setLoginUser', user.val())
               commit('setHasLoaded', true)
            })
        }
      });

    },

    async register({commit, state }, formData){
      return await state.auth.createUserWithEmailAndPassword(formData.username, formData.password)
    }
  },
  mutations: {
    setLoginUser (state, user) {
     state.loginUser = user
   },

   setHasLoaded(state, hasLoaded) {
    state.hasLoaded = hasLoaded
  }
  }
})
