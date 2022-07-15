<template>
  <div class="header">
    <div class="l">
      <el-button
        @click="handleCollapseMenu"
        size="mini"
        type="text"
        :icon="
          $store.getters.isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'
        "
      ></el-button>

      <div>
        <AppTags></AppTags>
      </div>
    </div>
    <div class="r">
      <el-tooltip class="item" effect="dark" content="全屏" placement="bottom">
        <i class="el-icon-rank" @click="screen"></i>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        content="关闭全部标签"
        @click="handleRemoveAllTags"
        placement="bottom"
      >
        <i class="el-icon-error"></i>
      </el-tooltip>
      <el-avatar
        class="avatar-H avatar-img hand"
        v-if="$store.getters.userInfo"
        :src="
          $store.getters.userInfo.avatar ? $store.getters.userInfo.avatar : ''
        "
      ></el-avatar>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          {{ $store.getters.userInfo.username || ''
          }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">个人设置</el-dropdown-item>
          <el-dropdown-item command="error">安全退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import AppTags from '../../components/Tags.vue'
export default {
  components: { AppTags },
  data() {
    return {
      fullscreen: false
    }
  },

  methods: {
    handleRemoveAllTags() {
      this.$store.dispatch('tags/removeAllTag')
      this.$router.push('/index')
    },
    handleCollapseMenu() {
      this.$store.dispatch('menu/setCollapse')
    },
    handleCommand(command) {
      if (command === 'error') {
        this.exitLogin()
      } else if (command === 'a') {
        this.handleSettings()
      }
    },
    handleSettings() {
      alert('个人设置')
    },
    // 退出登录
    exitLogin() {
      this.$confirm('您确定要退出系统吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$store.dispatch('user/logout')
          this.$notify({
            title: '提示',
            message: '退出成功',
            type: 'success'
          })
          this.$router.push('/login')
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },

    // 全屏
    screen() {
      const element = document.documentElement
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen()
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen()
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen()
        } else if (element.msRequestFullscreen) {
          element.msRequestFullscreen()
        }
      }
      this.fullscreen = !this.fullscreen
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.l {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  // flex: 1;
  // background-color: aqua;

  .el-button {
    font-size: 25px;
    color: #fff;
  }
}
.r {
  width: 190px;
  height: 60px;
  float: right;
  .el-icon-rank,
  .el-icon-error {
    float: left;
    margin-right: 18px;
    line-height: 60px;
    font-size: 23px;
    color: #fff;
  }
  .avatar-img {
    margin-top: 5px;
  }
  .el-icon-rank {
    transform: rotate(20deg);
    -webkit-transform: rotate(20deg);
  }
  .el-dropdown-link {
    margin-top: 10px;
    cursor: pointer;
    font-size: 18px;
    color: white;
    font-weight: bold;
  }
}

.el-dropdown {
  float: right;
}
</style>
