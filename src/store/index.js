import Vue from 'vue'
import Vuex from 'vuex'
import menu from './modules/menu'
import user from './modules/user'
import getters from './getters'
import tags from './modules/tags'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    user,
    menu,
    tags
  }
})
