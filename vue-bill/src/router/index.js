import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/header'
import Index from '@/pages/index'

Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {
      path: '/',
      redirect: {name: 'index'}
    },
    {
      path: '/',
      name: 'index',
      component: Index
    },
  ]
})
