import Vue from 'vue'
import Router from 'vue-router'
import signIn from '@/pages/signIn'
import signUp from '@/pages/signUp'
import chatRoom from '@/pages/chatRoom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'signIn',
      component: signIn
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: signUp
    },
    {
      path: '/chatRoom',
      name: 'chatRoom',
      component: chatRoom
    },
  ]
})
