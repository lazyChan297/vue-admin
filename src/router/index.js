import Vue from 'vue'
import Router from 'vue-router'

import Layout from '../views/layout/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      component: Layout,
      children: [{
        path: '/dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: {
          title: 'dashboard'
        }
      }]
    },
    {
      path: '/table',
      redirect: '/table',
      component: Layout,
      children: [{
        path: '/table',
        component: () => import('@/views/table/index'),
        meta: {
          title: 'table'
        }
      }]
    }
  ]
})
