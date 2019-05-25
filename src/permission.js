import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'// Progress 进度条样式
// import { Message } from 'element-ui'
import { getToken } from '@/utils/auth'
// router每次改变前先判断有无token
const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
  if(store.getters.token) {
    if (to.path === '/login') { 
      next({path: '/'})
    } else {
      if (store.getters.roles.length === 0) {
        store.dispatch('GetInfo').then( res => {
          const roles = res.data.roles;
          console.log('roles')
          console.log(roles)
          store.dispatch('GenerateRoutes',{roles}).then(()=>{
            console.log({roles})
            router.addRoutes(store.getters.addRouters)
            next({...to,replace:true})
          })
        }).catch(err => {
            console.log(err)
        })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
  // if (getToken()) {
  //   if (to.path === '/login') {
  //     next({path: '/'})
  //     NProgress.done()
  //     store.dispatch('GetInfo').then((res)=>{
  //       const roles = res.data.roles;
  //       store.dispatch('GenerateRoutes',{roles}).then(()=>{
  //         router.addRoutes(store.getters.addRouters)
  //         next({ ...to, replace: true }) 
  //       })
  //     }).catch(err => {
  //       console.log(err)
  //     })
  //     // store.dispatch('GenerateRoutes',{roles}).then*
  //   } else {
  //     if (store.getters.roles.length === 0) {
  //       // 获取用户信息
  //       store.dispatch('GetInfo').then(res => {
  //         console.log(res)
  //         next()
  //       }).catch(err => {
  //         console.log(err)
  //       })
  //     } else {
  //       next()
  //     }
  //   }
  // } else {
  //   if (whiteList.indexOf(to.path) !== -1) {
  //     next()
  //   } else {
  //     next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
  //     NProgress.done()
  //   }
  // }
})

router.afterEach(() => {
  NProgress.done()
})
