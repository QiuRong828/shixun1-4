import router from '@/router'
import store from '@/store'

import { Message } from 'element-ui'

const whiteList = ['/login', '/404']

router.beforeEach(async (to, from, next) => {
  const token = store.getters.token
  if (token) {
    if (to.path === '/login') {
      Message('请勿重复登录')
      next(from.path)
    } else {
      if (store.getters.hasUserInfo && store.getters.hasPermission) {
        next()
      } else {
        const userInfo = await store.dispatch('user/getUserInfo')
        const permission = await store.dispatch('user/getPermission')
        if (userInfo && permission) {
          next()
        } else {
          next('/login')
        }
      }
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
