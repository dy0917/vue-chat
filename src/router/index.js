import Vue from 'vue'
import Router from 'vue-router'
import signIn from '@/pages/signIn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'signIn',
      component: signIn
    }
  ]
})
