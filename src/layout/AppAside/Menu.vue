<template>
  <div class="aside-container">
    <el-menu
      :style="{ width: $store.getters.isCollapse ? '60px' : '200px' }"
      class="el-menu-vertical-demo"
      :default-active="activePath"
      background-color="#303133"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      :collapse="isCollapse"
      :collapse-transition="false"
      unique-opened
    >
      <item-menu
        v-for="(item, index) in menus"
        :key="index"
        :item="item"
      ></item-menu>
    </el-menu>
  </div>
</template>

<script>
import { filterMenus } from '../../utils/menu'
import ItemMenu from './MenuTree.vue'
export default {
  components: { ItemMenu },
  name: 'index',
  data() {
    return {}
  },
  computed: {
    activePath() {
      return this.$route.path
    },
    /* eslint-disable */
    menus() {
      if (this.$store.getters.menus) {
        return filterMenus(this.$store.getters.menus)
      }
    },
    isCollapse() {
      return this.$store.getters.isCollapse
    }
  },
  created() {
    console.log('create', this.menus)
  }
}
</script>

<style scoped>
.el-menu {
  border-right: none;
}
.aside-container {
  width: auto;
}
</style>
