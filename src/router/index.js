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
    // nested
    {
      path: '/nested',
      redirect: '/nested/menu1',
      component: Layout,
      meta: {
        title: 'Nested',
        icon: 'nested'
      },
      children: [
        {
          path: 'menu1',
          component: () => import('@/views/nested/menu1/index'),
          meta: {
            title: 'menu1'
          }
        },
        {
          path: 'menu2',
          component: () => import('@/views/nested/menu2/index'),
          meta: {
            title: 'menu2'
          }
        }
      ]
    },
    // table
    {
      path: '/table',
      redirect: '/table/menu1',
      component: Layout,
      children: [
        {
          path: '/table',
          component: () => import('@/views/table/index'),
          meta: {
            title: 'table'
          }
        }
      ]
    },
  ]
})
