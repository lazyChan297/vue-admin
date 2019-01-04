import Vue from 'vue'
import Router from 'vue-router'

import Layout from '../views/layout/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: () => import('@/views/login/index'),
      hidden: true
    },
    {
      path: '/',
      redirect: '/dashboard',
      hidden: true,
      component: Layout,
      name: 'Dashboard',
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
      name: 'Nested',
      meta: {
        title: 'Nested',
        icon: 'nested'
      },
      children: [
        {
          path: 'menu1',
          name: 'menu1',
          component: () => import('@/views/nested/menu1/index'),
          meta: {
            title: 'menu1'
          }
        },
        {
          path: 'menu2',
          name: 'menu2',
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
      name: 'table',
      component: Layout,
      children: [
        {
          path: 'index',
          component: () => import('@/views/table/index'),
          name: 'table',
          meta: {
            title: 'table',
            icon: 'table'
          }
        }
      ]
    },
    // form
    {
      path: '/form',
      name: 'form',
      component: Layout,
      children: [
        {
          path: 'index',
          component: () => import('@/views/form/index'),
          name: 'form',
          meta: {
            title: 'form',
            icon: 'form'
          }
        }
      ]
    }
  ]
})
