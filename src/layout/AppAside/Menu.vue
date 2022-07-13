<template>
  <div class="box">
    <el-menu
      class="el-menu-vertical-demo"
      :default-active="menuPath"
      background-color="#303133"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      :collapse="flag"
      :collapse-transition="false"
    >
      <item-menu
        v-for="(item, index) in date"
        :key="index"
        :data="item"
      ></item-menu>
    </el-menu>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ItemMenu from './MenuTree.vue'
import store from '@/store'
export default {
  components: { ItemMenu },
  props: ['flag'],
  name: 'index',
  data() {
    return {
      date: [],
      menuPath: ''
    }
  },
  mounted() {
    this.getMenuList()
  },
  methods: {
    // 获取左侧菜单接口
    ...mapActions(['user/navMenu']),
    async getMenuList() {
      await this['user/navMenu']()
      this.date = store.state.user.menus
      console.log(store.state.user)
    }
  }
}
</script>

<style scoped>
.el-menu {
  border-right: none;
}
</style>
